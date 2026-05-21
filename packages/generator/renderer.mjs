import fs from 'fs'
import path from 'path'
import { HTTP_METHODS_WITH_BODY } from './constants.mjs'
import {
  ensureDirSync,
  filterDescription,
  genFile,
  getReqConfig,
  handleFileName,
  replacePlaceholders,
  toPascalCase,
} from './utils.mjs'

export const createRenderer = ({
  baseUrl,
  requestImportStr,
  exposeParamsName,
  needExtendTemplate,
  customReqNamePlugin,
  customInterFacePlugin,
  outputRootDir,
  apiOutputDir,
}) => {
  // 默认方法名基于 url 派生，插件只作为覆写点。
  const processUrl = (url) => {
    const startIndex = url.startsWith('/') ? 1 : 0
    // 按路径片段拆分后用于拼接方法名。
    const parts = url.slice(startIndex).split('/')
    // 先把中划线转成驼峰，避免方法名里出现 -。
    const processedParts = parts.map((part) => part.replace(/-(.)/g, (_match, currentChar) => currentChar.toUpperCase()))
    // 每一段首字母大写，最后拼成默认方法名。
    const capitalizedParts = processedParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    const defaultMethodName = capitalizedParts.join('_').replace(/\{|\}/g, '')

    if (customReqNamePlugin) {
      return customReqNamePlugin(url, defaultMethodName) || defaultMethodName
    }

    return defaultMethodName
  }

  // 渲染单个请求方法，输入已经是归一化后的 api 描述对象。
  const genReqStrContent = (item) => {
    // 将 path 参数占位符替换成模板字符串后的最终请求地址。
    let requestUrl = replacePlaceholders(item.url)
    // 当前接口的大写 HTTP 方法，用于判断 body 是否生效。
    const method = item.method.toUpperCase()
    // query/path/form-data 聚合后的入参类型字符串。
    let queryTypeStr = ''
    // 当前方法注释里的 @param 片段。
    let descStr = ''
    // 请求体类型字符串，可能是 interface、匿名对象或基础类型。
    const reqBodyTypeStr = item.paramsType
    // 标记当前接口是否走 multipart/form-data。
    const isFormData = item.paramsType === 'FormData'
    // 仅包含 query 参数的列表，用于拼接 url 查询串。
    const queryParams = item.query?.filter((queryItem) => queryItem.in === 'query') || []
    // 所有需要出现在 data 结构里的参数集合。
    const allDataParams = [...(item.query || []), ...(item.params || [])]

    if (queryParams.length) {
      // query 参数仍然直接落在 url 上，保持历史调用方式不变。
      const queryStr = queryParams.map((queryItem) => `${queryItem.name}=\$\{data.${queryItem.name}\}`).join('&')
      requestUrl += `?${queryStr}`
    }

    // query、path、form-data 字段统一组装成 data 类型，减少签名分支。
    if ((isFormData && item.params?.length) || allDataParams.length) {
      const reqConfig = getReqConfig(allDataParams)
      queryTypeStr = reqConfig.queryTypeStr
      descStr = reqConfig.descStr
    }

    const getParamsStr = () => {
      if (isFormData) {
        return item.params?.length ? `data:${queryTypeStr},` : 'data:FormData,'
      }

      // 仅 body 类方法才拆成 query/path 的 data + reqBody 两个参数。
      if (queryTypeStr && reqBodyTypeStr && HTTP_METHODS_WITH_BODY.includes(method)) {
        return `data:${queryTypeStr}, reqBody:${reqBodyTypeStr},`
      }

      if (queryTypeStr) {
        return `data:${queryTypeStr},`
      }

      if (reqBodyTypeStr) {
        return `data:${reqBodyTypeStr},`
      }

      return ''
    }

    // 当前方法的字符串输出结果。
    let result = ''
    result += `/**
    * ${filterDescription(item.description)}\n`
    if (descStr) {
      result += `${descStr}\n`
    }
    result += `*/\n`

    const responseType = exposeParamsName ? `UnwrappedResponse<${item.resType || 'void'}>` : `${item.resType || 'void'}`
    result += `${processUrl(item.url)}${method}(${getParamsStr()} config={}): Promise<${responseType}> {\n`

    if (isFormData && item.params?.length) {
      result += `const _data = new FormData();\n`
      item.params.forEach((currentParam) => {
        if (currentParam.type === 'File | File[]') {
          // 文件字段需要保留原始二进制对象，不能做 JSON 序列化。
          result += `if (Array.isArray(data.${currentParam.name})) {
            data.${currentParam.name}.forEach((c) => {
            _data.append('${currentParam.name}', c ?? '');
            })
          } else {
            _data.append('${currentParam.name}', data.${currentParam.name} ?? '');
          }\n`
          return
        }

        // 非文件字段统一转字符串，避免 form-data 下对象值直接丢失。
        result += `_data.append('${currentParam.name}', typeof data.${currentParam.name} === 'string' ? data.${currentParam.name} : JSON.stringify(data.${currentParam.name} ?? ''));\n`
      })
    }

    // 控制是否给请求结果套一层 unwrapData。
    const requestMethodStart = exposeParamsName ? 'unwrapData(' : ''
    const requestMethodEnd = exposeParamsName ? ')' : ''

    result += `return ${requestMethodStart}request({
        url: \`${baseUrl || ''}${requestUrl}\`,
        method: '${method}',\n`

    if (isFormData && item.params?.length) {
      // 有字段定义的 multipart/form-data 需要用 _data 并补 content-type。
      result += `data: _data,
        ...config,
        headers: {
          'Content-Type': 'multipart/form-data',
          ...((config as any).headers || {})
        }
      })${requestMethodEnd}
    },`
    } else if ((!queryTypeStr && reqBodyTypeStr) || isFormData) {
      // 纯 body 请求或未声明字段的 FormData，直接把 data 整体透传。
      result += `data,
        ...config
      })${requestMethodEnd}
    },`
    } else if (queryTypeStr && reqBodyTypeStr && HTTP_METHODS_WITH_BODY.includes(method)) {
      // query/path 和 body 同时存在时，body 只挂 reqBody，避免混入 url 参数。
      result += `data: reqBody,
        ...config
      })${requestMethodEnd}
    },`
    } else {
      result += `...config
      })${requestMethodEnd}
    },`
    }

    return result
  }

  // 按 group 输出多个 api 文件。
  const getApiFileContent = (groups) => {
    groups.forEach((groupItem) => {
      // 只有开启 exposeParamsName 时才需要引入 unwrap 相关方法。
      const unwrapMethods = exposeParamsName ? `import { UnwrappedResponse, unwrapData } from 'openapi2api/client'` : ''
      // 当前分组文件的完整内容。
      let fileStr = `${requestImportStr}\n
      ${unwrapMethods}
    /**${filterDescription(groupItem.description)} */
      export function use${toPascalCase(groupItem.groupName)}Api() {
      return {\n`
      groupItem.items.forEach((item) => {
        fileStr += genReqStrContent(item)
        fileStr += '\n'
      })
      fileStr += `}}`
      genFile(fileStr, `${handleFileName(groupItem.groupName)}.ts`, apiOutputDir)
    })
  }

  // 渲染单个 interface / enum 声明片段。
  const getInterfaceItemContent = (item) => {
    // 单个 interface/enum 片段内容。
    let str = ''

    if (item.type) {
      str += `
    ${item.description ? `/**${filterDescription(item.description)} */` : ''}
 declare interface ${item.typePinYinName} {
`

      const defaultFn = () => {
        item.type.forEach((currentType) => {
          if (currentType.description) {
            str += `/**${filterDescription(currentType.description)} */\n`
          }
          str += `${currentType.key}${currentType.required ? '' : '?'}: ${currentType.value};\n`
        })
      }

      if (customInterFacePlugin) {
        const customInterfaceObj = customInterFacePlugin(item)
        // 插件命中时完全接管当前 interface 内容。
        if (customInterfaceObj && Object.keys(customInterfaceObj).includes(item.typePinYinName)) {
          str += customInterfaceObj[item.typePinYinName]
        } else {
          defaultFn()
        }
      } else {
        defaultFn()
      }

      str += `
    }\n
    `
    } else if (item._enum?.length) {
      str += `
    ${item.description ? `/**${filterDescription(item.description)} */` : ''}
 declare enum ${item.typePinYinName} {
`
      item._enum.forEach((currentEnum) => {
        if (currentEnum.description) {
          str += `/**${filterDescription(currentEnum.description)} */\n`
        }
        str += `${currentEnum.key}= ${currentEnum.value},\n`
      })

      str += `
    }\n
    `
    }

    return str
  }

  // 输出全量 interface / enum 声明文件。
  const getInterfaceFileContent = (interfaceTypes) => {
    // interfaces.d.ts 的完整输出内容。
    let content = ''

    interfaceTypes.forEach((item) => {
      content += getInterfaceItemContent(item)
    })

    return content
  }

  // 建立 interface 名称索引，兼容原始 schema 名和最终声明名两种引用形式。
  const getInterfaceIndex = (interfaceTypes) => {
    const interfaceMap = new Map()
    const aliasMap = new Map()

    interfaceTypes.forEach((item) => {
      interfaceMap.set(item.typePinYinName, item)
      aliasMap.set(item.typePinYinName, item.typePinYinName)
      aliasMap.set(item.typeName, item.typePinYinName)
    })

    return {interfaceMap, aliasMap}
  }

  // 从类型字符串中识别已知 interface / enum 名称。
  const getInterfaceNamesFromType = (typeStr, aliasMap) => {
    if (!typeStr) {
      return []
    }

    const typeNames = new Set()
    const words = String(typeStr).match(/[A-Za-z_][A-Za-z0-9_]*/g) || []

    words.forEach((word) => {
      if (aliasMap.has(word)) {
        typeNames.add(aliasMap.get(word))
      }
    })

    return Array.from(typeNames)
  }

  // 按 api 分组收集当前模块直接或间接引用到的 interface / enum。
  const getGroupInterfaceTypes = (groupItem, interfaceMap, aliasMap, assignedTypeNames) => {
    const currentInterfaceTypes = []
    const pendingTypeNames = []

    const addTypeName = (typeName) => {
      if (!typeName || assignedTypeNames.has(typeName) || pendingTypeNames.includes(typeName)) {
        return
      }
      if (!interfaceMap.has(typeName)) {
        return
      }
      pendingTypeNames.push(typeName)
      assignedTypeNames.add(typeName)
    }

    const addTypeStr = (typeStr) => {
      getInterfaceNamesFromType(typeStr, aliasMap).forEach(addTypeName)
    }

    groupItem.items.forEach((item) => {
      addTypeStr(item.paramsType)
      addTypeStr(item.resType)
      item.query?.forEach((currentQuery) => addTypeStr(currentQuery.type))
      item.params?.forEach((currentParam) => addTypeStr(currentParam.type))
    })

    while (pendingTypeNames.length) {
      const currentTypeName = pendingTypeNames.shift()
      const currentInterface = interfaceMap.get(currentTypeName)
      currentInterfaceTypes.push(currentInterface)
      currentInterface.type?.forEach((currentType) => addTypeStr(currentType.value))
    }

    return currentInterfaceTypes
  }

  // 按 api 模块输出同名 interface / enum 声明文件。
  const getInterfaceFileContentByGroups = (groups, interfaceTypes) => {
    const {interfaceMap, aliasMap} = getInterfaceIndex(interfaceTypes)
    const assignedTypeNames = new Set()

    return groups.map((groupItem) => {
      const currentInterfaceTypes = getGroupInterfaceTypes(groupItem, interfaceMap, aliasMap, assignedTypeNames)
      return {
        fileName: `${handleFileName(groupItem.groupName)}.d.ts`,
        content: getInterfaceFileContent(currentInterfaceTypes),
      }
    })
  }

  // 输出统一聚合入口，保持对外访问方式不变。
  const getApiIndexFileContent = (groups, exportApiName, apiOutDir) => {
    // index.ts 聚合文件的完整内容。
    let content = ``
    if (needExtendTemplate) {
      content += `import {useExtApi} from './ext'\n`
    }

    groups.forEach((groupItem) => {
      content += `import {use${toPascalCase(groupItem.groupName)}Api} from './${apiOutDir}/${handleFileName(groupItem.groupName)}'\n`
    })

    content += `\n`
    content += `export const ${exportApiName} = {\n`

    groups.forEach((groupItem) => {
      content += `...use${toPascalCase(groupItem.groupName)}Api(),\n`
    })

    if (needExtendTemplate) {
      content += `...useExtApi(),\n`
    }

    content += `}`
    return content
  }

  // ext 模板只在缺失时生成，避免覆盖手动扩展内容。
  const genExtFile = () => {
    // ext 目录路径。
    const dirPath = path.join(outputRootDir, 'ext')
    // ext 模板文件完整路径。
    const filePath = path.join(dirPath, 'index.ts')
    // ext/index.ts 的默认模板内容。
    const fileContent = `
    ${requestImportStr}

/**手动补充扩展的api */
/**
 * return {
    APIName(data: IRequestType, config = {}): Promise<IResponseType> {
      return request({
        url: \`/api-url\`,
        method: 'POST',
        data,
        ...config
      })
    }
  }
 */
export function useExtApi() {
  console.log(request)

  return {}
}

    `

    ensureDirSync(dirPath)
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, fileContent, 'utf8')
      console.log('ext/index.ts完成写入')
    }
  }

  return {
    getApiFileContent,
    getInterfaceFileContent,
    getInterfaceFileContentByGroups,
    getApiIndexFileContent,
    genExtFile,
  }
}
