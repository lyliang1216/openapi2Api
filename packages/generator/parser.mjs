import { JAVA_TYPE_TO_TYPESCRIPT_TYPE } from './constants.mjs'
import { getGroupNameFromUrl, getPinYin, parseEnumData, getResponseSchema, urlNumber2String } from './utils.mjs'

export const createParser = ({ openAPI, customAbnormalTypeNamePlugin, customUrlPlugin, customGroupPlugin }) => {
  // OpenAPI 中的 components.schemas 原始定义集合。
  const schemas = openAPI?.components?.schemas || {}

  const getTypeName = (schemasRef) => {
    // 去掉 OpenAPI 引用前缀后拿到原始 schema 名称。
    const rawTypeName = String(schemasRef).replace('#/components/schemas/', '')
    if (customAbnormalTypeNamePlugin) {
      return customAbnormalTypeNamePlugin(rawTypeName)
    }
    return rawTypeName
  }

  // 统一把 OpenAPI schema 转成 TS 类型字符串，后续渲染层只消费这个结果。
  const resolveSchemaType = (schema) => {
    if (!schema) {
      return 'any'
    }

    if (schema.$ref) {
      return getTypeName(schema.$ref)
    }

    // 组合类型优先处理，避免后续被基础类型分支提前吞掉。
    if (schema.allOf?.length) {
      return schema.allOf.map((item) => resolveSchemaType(item)).join(' & ') || 'any'
    }

    if (schema.oneOf?.length) {
      return schema.oneOf.map((item) => resolveSchemaType(item)).join(' | ') || 'any'
    }

    if (schema.anyOf?.length) {
      return schema.anyOf.map((item) => resolveSchemaType(item)).join(' | ') || 'any'
    }

    if (schema.enum?.length && (schema.type === 'string' || JAVA_TYPE_TO_TYPESCRIPT_TYPE[schema.type] === 'number')) {
      // 枚举最终输出成字面量联合类型，而不是额外生成匿名 enum。
      const enumValue = schema.enum.map((item) => JSON.stringify(item)).join(' | ')
      return schema.nullable ? `${enumValue} | null` : enumValue
    }

    if (schema.type === 'array') {
      const itemType = resolveSchemaType(schema.items)
      // union 数组需要额外加括号，避免生成出 string | number[] 这样的错误类型。
      const arrayType = itemType.includes(' | ') ? `(${itemType})[]` : `${itemType}[]`
      return schema.nullable ? `${arrayType} | null` : arrayType
    }

    if (schema.type === 'object') {
      if (schema.additionalProperties) {
        // additionalProperties 对应 TS 的字典结构。
        const valueType = resolveSchemaType(schema.additionalProperties)
        return schema.nullable ? `Record<string, ${valueType}> | null` : `Record<string, ${valueType}>`
      }

      // 内联 object 暂时直接生成匿名对象，保持方案 A 的最小改动。
      if (schema.properties) {
        const inlineProperties = Object.keys(schema.properties).map((propertyKey) => {
          const propertySchema = schema.properties[propertyKey]
          const propertyType = resolveSchemaType(propertySchema)
          const isRequired = schema.required?.includes(propertyKey)
          return `${propertyKey}${isRequired ? '' : '?'}: ${propertyType}`
        })
        const objectType = `{${inlineProperties.join(',')}}`
        return schema.nullable ? `${objectType} | null` : objectType
      }
    }

    const baseType = JAVA_TYPE_TO_TYPESCRIPT_TYPE[schema.type] || schema.type || 'any'
    return schema.nullable ? `${baseType} | null` : baseType
  }

  // form-data 仍然保留单独处理，因为它在生成请求体时需要转 FormData 实例。
  const getPropertiesParams = (properties = {}, requiredList = []) => {
    return Object.keys(properties).map((formDataKey) => {
      // 当前 form-data 字段的 schema 定义。
      const currentProperty = properties[formDataKey]
      return {
        name: formDataKey,
        type: currentProperty?.format === 'binary' ? 'File | File[]' : resolveSchemaType(currentProperty),
        description: currentProperty?.description,
        required: requiredList.includes(formDataKey),
      }
    })
  }

  // 这里只保留 query/path，header/cookie 先跳过，避免生成方法签名过度复杂。
  const parseOperationParameters = (url, parameters = []) => {
    return parameters
      .filter((parameterItem) => parameterItem.in !== 'header' && parameterItem.in !== 'cookie')
      .map((parameterItem) => {
        // 当前 query/path 参数的 schema 描述。
        const parameterSchema = parameterItem.schema || {}
        return {
          name: parameterItem.name,
          // path 参数放宽为 number|string，兼容调用方直接传字符串 id。
          type: parameterItem.in === 'path' ? urlNumber2String(resolveSchemaType(parameterSchema)) : resolveSchemaType(parameterSchema),
          description: parameterItem.description,
          in: parameterItem.in === 'path' || url.includes(`{${parameterItem.name}}`) ? 'path' : 'query',
          required: !!parameterItem.required,
        }
      })
  }

  // requestBody 只负责提炼“方法签名需要什么类型”，不直接参与渲染。
  const parseRequestBody = (requestBody) => {
    if (!requestBody?.content) {
      return {}
    }

    if (requestBody.content['multipart/form-data']) {
      // multipart/form-data 对应的 schema 定义。
      const formDataSchema = requestBody.content['multipart/form-data'].schema
      // 允许后端只声明 multipart/form-data 但不给具体字段。
      if (!formDataSchema) {
        return {paramsType: 'FormData'}
      }
      return {
        params: getPropertiesParams(formDataSchema.properties, formDataSchema.required),
        paramsType: 'FormData',
      }
    }

    // 非 form-data 时，取当前 operation 的第一个 request content。
    const contentType = Object.keys(requestBody.content)[0]
    // 当前 content-type 对应的请求体 schema。
    const schema = requestBody.content[contentType]?.schema

    if (!schema) {
      return {}
    }

    return {
      paramsType: resolveSchemaType(schema),
    }
  }

  // 响应类型和请求体一样，先解析成统一类型字符串再交给模板拼接。
  const parseResponseType = (responses) => {
    // 当前接口选中的成功响应 schema。
    const responseSchema = getResponseSchema(responses)

    if (!responseSchema) {
      return 'void'
    }

    if (responseSchema.format === 'binary' && responseSchema.type === 'string') {
      return 'ArrayBuffer'
    }

    return resolveSchemaType(responseSchema)
  }

  // 第一阶段只把 OpenAPI operation 归一化，避免后面渲染函数继续直接读原始 schema。
  const getApiUrlAndParams = () => {
    // OpenAPI paths 原始接口树。
    const paths = openAPI?.paths || {}
    // 归一化后的接口列表，后续分组和渲染都只使用这里的数据。
    const apis = []

    Object.keys(paths).forEach((url) => {
      Object.keys(paths[url]).forEach((method) => {
        // 单个 operation 的完整配置。
        const apiConfig = paths[url][method] || {}
        // 当前 operation 的 tags，默认用于分组和描述。
        const tags = apiConfig.tags || []
        // 应用 url 插件后的最终请求地址。
        const formatUrl = customUrlPlugin ? customUrlPlugin(url, tags) : url
        // 归一化后的请求体信息。
        const requestBodyConfig = parseRequestBody(apiConfig.requestBody)

        apis.push({
          url: formatUrl,
          method,
          description: `${tags[0] || getGroupNameFromUrl(formatUrl)}-${apiConfig.summary || apiConfig.description || ''}`,
          group: tags[0] || getGroupNameFromUrl(formatUrl),
          query: parseOperationParameters(formatUrl, apiConfig.parameters),
          params: requestBodyConfig.params,
          paramsType: requestBodyConfig.paramsType,
          resType: parseResponseType(apiConfig.responses),
        })
      })
    })

    return apis
  }

  // 将 components.schemas 转成统一的 interface 描述对象。
  const getInterface = (typeStr) => {
    // 当前 schema 的原始定义内容。
    const schema = schemas[typeStr]
    if (!schema) {
      return null
    }

    // 原始 schema 名转成默认 interface 名，比如 User -> IUser。
    const rawInterfaceName = 'I' + getPinYin(typeStr)
    // 最终落盘的 interface 名，可能经过异常命名插件处理。
    const typePinYinName = (customAbnormalTypeNamePlugin ? customAbnormalTypeNamePlugin(rawInterfaceName) : rawInterfaceName).replace(/[^a-zA-Z0-9]/g, '')
    // 规范化后的原始类型名，作为映射 key 使用。
    const typeName = (customAbnormalTypeNamePlugin ? customAbnormalTypeNamePlugin(typeStr) : typeStr).replace(/[^a-zA-Z0-9]/g, '')
    // 统一的 interface 描述对象，供后续渲染层消费。
    const interfaceConfig = {
      typePinYinName,
      typeName,
      description: schema.description || (customAbnormalTypeNamePlugin ? customAbnormalTypeNamePlugin(typeStr) : typeStr),
    }

    if (schema.properties) {
      interfaceConfig.type = Object.keys(schema.properties).map((propertyKey) => {
        // 当前属性的 schema 定义。
        const propertySchema = schema.properties[propertyKey]
        return {
          key: propertyKey,
          value: resolveSchemaType(propertySchema),
          description: propertySchema.description,
          required: schema.required?.includes(propertyKey),
        }
      })
    }

    if (schema.enum) {
      interfaceConfig._enum = parseEnumData(schema.enum)
    }

    return interfaceConfig
  }

  // 先收集所有类型，再做一次引用替换，避免前后声明顺序影响结果。
  const getInterfaceTypes = () => {
    // 归一化后的 schema/interface 描述列表。
    const interfaceTypes = []
    // 原始类型名 -> 最终输出类型名 的映射表，用于修正引用关系。
    const typeNameMap = new Map()

    Object.keys(schemas).forEach((typeItem) => {
      // 当前 schema 归一化后的 interface 描述。
      const currentInterface = getInterface(typeItem)
      if (!currentInterface) {
        return
      }
      interfaceTypes.push(currentInterface)
      typeNameMap.set(currentInterface.typeName, currentInterface.typePinYinName)
    })

    interfaceTypes.forEach((item) => {
      item.type?.forEach((propertyItem) => {
        // 这里把属性值里的原始 schema 名映射成最终输出的 interface 名。
        if (typeNameMap.has(propertyItem.value)) {
          propertyItem.value = typeNameMap.get(propertyItem.value)
        }
      })
    })

    return { interfaceTypes, typeNameMap }
  }

  // 同步修正 api 方法里引用到的请求/响应类型名称。
  const getApiQueryParamsType = (apis, typeNameMap) => {
    apis.forEach((item) => {
      // 请求体类型名可能还是原始 schema 名，这里统一替换成最终输出名。
      if (item.paramsType && typeNameMap.has(item.paramsType)) {
        item.paramsType = typeNameMap.get(item.paramsType)
      }
      // 响应体类型名也做同样替换。
      if (item.resType && typeNameMap.has(item.resType)) {
        item.resType = typeNameMap.get(item.resType)
      }
    })
  }

  // group 逻辑统一收口在这里，后续如果扩展自定义策略只改这一处。
  const groupBy = (array) => {
    // 分组阶段的临时容器，key 为 groupName。
    const groupMap = new Map()

    array.forEach((item) => {
      // 允许外部通过插件覆盖默认分组名。
      const customGroupName = customGroupPlugin ? customGroupPlugin(item.url) : ''
      // 最终用于生成文件和 useXxxApi 的分组名。
      const currentGroupName = customGroupName || getGroupNameFromUrl(item.url)
      // 分组注释描述，默认沿用 tag 名。
      const currentDescription = customGroupName || item.group

      if (!groupMap.has(currentGroupName)) {
        groupMap.set(currentGroupName, {
          groupName: currentGroupName,
          description: currentDescription,
          items: [],
        })
      }

      // 当前分组对象，后面往 items 里追加接口。
      const currentGroup = groupMap.get(currentGroupName)
      // 用 url + method 去重，避免同一接口被多次并入分组。
      if (!currentGroup.items.some((apiItem) => apiItem.url === item.url && apiItem.method === item.method)) {
        currentGroup.items.push(item)
      }

      // description 可能来自多个 tag，按逗号合并但不重复追加。
      if (!currentGroup.description.split(',').includes(currentDescription)) {
        currentGroup.description += `,${currentDescription}`
      }
    })

    return Array.from(groupMap.values())
  }

  return {
    getApiUrlAndParams,
    getInterfaceTypes,
    getApiQueryParamsType,
    groupBy,
  }
}
