import fs from "fs";
import path from "path";
import pinyin from "pinyin";

/**
 * api生成工具
 * @param {*} param.openAPI api json内容
 * @param {*} param.baseUrl url去除的公共地址，用于区分模块
 * @param {*} param.prefixUrl 地址前缀，添加在url前的标识，通常使用baseUrl
 * @param {*} param.outDir 工具输出目录
 * @param {*} param.apiOutDir api输出目录
 * @param {*} param.exportApiName 导出的api集合名称
 * @param {*} param.interfaceOutDir interface输出目录
 * @param {*} param.requestUrl request引入地址
 * @param {*} param.needExtendTemplate 是否需要拓展api模板
 */
const tool = ({
  openAPI,
  baseUrl,
  prefixUrl,
  outDir,
  apiOutDir,
  exportApiName,
  interfaceOutDir,
  requestUrl,
  needExtendTemplate,
}) => {
  const __dirname = process.cwd() + (outDir[0] === "/" ? "" : "/") + outDir;
  // 类型转换
  const JavaType2JavaScriptType = {
    integer: "number",
    number: "number",
    long: "number",
    string: "string",
    boolean: "boolean",
    array: "array",
    object: "object",
    timestamp: "string",
    any: "any",
  };

  // api过滤集合
  const apis = [];
  // 类型转拼音后数组
  const typePinYinArr = [];
  // 按模块分组api
  let group = [];

  // 获取api集合，和请求参数
  const getApiUrlAndParams = () => {
    const { paths } = openAPI;
    Object.keys(paths).forEach((url) => {
      Object.keys(paths[url]).forEach((method) => {
        const apiConfig = paths[url][method];

        const api = {
          url: url.replace(baseUrl, ""),
          method: method,
          description: apiConfig.tags[0] + "-" + apiConfig.summary,
          group: apiConfig.tags[0],
        };
        // 获取query参数
        if (apiConfig.parameters) {
          api.query = apiConfig.parameters
            .filter((queryItem) => queryItem.in !== "header")
            .map((queryItem) => {
              return {
                name: queryItem.name,
                type:
                  JavaType2JavaScriptType[queryItem.schema.type] ||
                  queryItem.schema.type,
                description: queryItem.description,
                required: queryItem.required,
              };
            });
        }
        // 获取requestBody参数
        if (apiConfig.requestBody) {
          const reqContent = apiConfig.requestBody.content;
          // 是FormData
          if (apiConfig.requestBody.content["multipart/form-data"]) {
            const contentTypeItem = Object.keys(reqContent)[0];
            if (reqContent[contentTypeItem].schema) {
              const { properties, required } =
                reqContent[contentTypeItem].schema;
              api.params = getPropertiesParams(properties, required);
              api.paramsType = "FormData";
            }
          } else {
            const contentTypeItem = Object.keys(reqContent)[0];
            // 添加直接放入requestbody中的内容，没有key值
            if (
              reqContent[contentTypeItem].schema &&
              reqContent[contentTypeItem].schema.type
            ) {
              if (reqContent[contentTypeItem].schema.items.type) {
                if (reqContent[contentTypeItem].schema.type === "array") {
                  api.onlyRequestBody =
                    JavaType2JavaScriptType[
                      reqContent[contentTypeItem].schema.items.type
                    ] + "[]";
                } else {
                  api.onlyRequestBody =
                    reqContent[contentTypeItem].schema.items.type;
                }
              }
              if (reqContent[contentTypeItem].schema.items.$ref) {
                const reqBodyTypeStr = getTypeName(
                  reqContent[contentTypeItem].schema.items.$ref
                );
                if (reqContent[contentTypeItem].schema.type === "array") {
                  api.paramsType = "I" + reqBodyTypeStr + "[]";
                } else {
                  api.paramsType = "I" + reqBodyTypeStr;
                }
              }
            }
            if (
              reqContent[contentTypeItem].schema &&
              reqContent[contentTypeItem].schema.$ref
            ) {
              const reqBodyTypeStr = getTypeName(
                reqContent[contentTypeItem].schema.$ref
              );
              api.paramsType = reqBodyTypeStr;
            }
          }
        }
        // 获取响应类型
        if (apiConfig.responses[200].content) {
          const schema = Object.values(apiConfig.responses[200].content)[0]
            .schema;
          if (schema.$ref) {
            api.resType = getTypeName(schema.$ref);
          } else {
            if (schema.format === "binary" && schema.type === "string") {
              api.resType = "ArrayBuffer";
            } else {
              api.resType = getTypeName(schema.type);
            }
          }
        } else {
          api.resType = "void";
        }

        apis.push(api);
      });
    });
  };

  // 获取类型名称
  const getTypeName = (schemasRef) => {
    return schemasRef.replace("#/components/schemas/", "");
  };

  // 获取请求参数
  const getPropertiesParams = (properties, requiredList) => {
    return Object.keys(properties).map((formDataKey) => {
      return {
        name: formDataKey,
        type: properties[formDataKey].$ref
          ? getTypeName(properties[formDataKey].$ref)
          : properties[formDataKey].format === "binary"
          ? "File"
          : properties[formDataKey].type,
        description: properties[formDataKey].description,
        required: !!requiredList?.includes(formDataKey),
      };
    });
  };

  // 处理enum参数
  const parseEnumData = (array) => {
    return array.map((item) => {
      const match = item.match(/(\w+)\((.*?)\)=(.*)/);
      if (match) {
        const key = match[1]; // 括号前的内容
        const description = match[2]; // 括号内的内容
        const value = match[3]; // 等号后面的内容
        return { key, description, value };
      }
      return null;
    });
  };

  // 获取拼音，作为函数名
  const getPinYin = (string) => {
    return pinyin
      .default(string, {
        style: "normal",
      })
      .map((item) => item[0].charAt(0).toUpperCase() + item[0].slice(1))
      .join("");
  };

  // 获取interface内容
  const getInterface = (typeStr) => {
    if (typePinYinArr.find((item) => item.description === typeStr)) {
      return false;
    }
    const {
      properties,
      description,
      enum: _enum,
    } = openAPI.components.schemas[typeStr];
    const name = "I" + getPinYin(typeStr);
    const interfaceConfig = {
      typePinYinName: name.replace(/[^a-zA-Z0-9]/g, ""),
      typeName: typeStr,
      description: description || typeStr,
    };
    // 存在参数
    if (properties) {
      interfaceConfig.type = Object.keys(properties).map((item) => {
        const type = properties[item].type;
        return {
          key: item,
          value:
            type === "array"
              ? properties[item].items?.$ref
                ? `I${getTypeName(properties[item].items?.$ref)}[]`
                : properties[item].items.type
                ? `${JavaType2JavaScriptType[properties[item].items.type]}[]`
                : "[]"
              : properties[item].$ref
              ? getTypeName(properties[item].$ref)
              : JavaType2JavaScriptType[type] || type,
          description: properties[item].description,
        };
      });
    }
    // 存在枚举
    if (_enum) {
      interfaceConfig._enum = parseEnumData(_enum);
    }
    return interfaceConfig;
  };

  // 获取所有interface内容，遍历获取
  const getInterfaceTypes = () => {
    Object.keys(openAPI.components.schemas).forEach((typeItem) => {
      typePinYinArr.push(getInterface(typeItem));
    });
    // 编辑类型中是另一个interface，通过typeName判断
    typePinYinArr.forEach((item) => {
      item.type?.forEach((it) => {
        const findItem = typePinYinArr.find((t) => t.typeName === it.value);
        if (findItem) {
          it.value = findItem.typePinYinName;
        }
      });
    });
  };

  // 获取api集合中类型名称，与typePinYinArr中命名对应
  const getApiQueryParamsType = () => {
    apis.forEach((item) => {
      const findItem = typePinYinArr.find(
        (t) => t.typeName === item.paramsType
      );
      if (findItem) {
        item.paramsType = findItem.typePinYinName;
      }
      const findItem2 = typePinYinArr.find((t) => t.typeName === item.resType);
      if (findItem2) {
        item.resType = findItem2.typePinYinName;
      }
    });
  };

  // 获取组名
  const getGroupName = (url) => {
    const startIndex = url.startsWith("/") ? 1 : 0;
    const parts = url.slice(startIndex).split("/");
    return parts[0];
  };

  // 按组分类
  const groupBy = (array, property) => {
    const groups = [];
    const nameToIndex = {};

    array.forEach((item) => {
      const name = item[property];
      if (!nameToIndex[name]) {
        nameToIndex[name] = groups.length + 1;
        groups.push({
          groupName: getGroupName(item.url),
          description: name,
          items: [],
        });
      }
      groups[nameToIndex[name] - 1].items.push(item);
    });

    return groups;
  };

  // 处理模块名称
  const toPascalCase = (str) => {
    return str
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
  };

  // 处理url内容，/=>_,{}=>""
  const processUrl = (url) => {
    const startIndex = url.startsWith("/") ? 1 : 0;
    const parts = url.slice(startIndex).split("/");
    const processedParts = parts.map((part) => {
      return part.replace(/-(.)/g, (_match, p1) => p1.toUpperCase());
    });
    const capitalizedParts = processedParts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1)
    );
    let result = capitalizedParts.join("_");

    result = result.replace(/\{|\}/g, "");

    return result;
  };

  // 生成文件
  const genFile = (content, fileName, outdir) => {
    // 定义文件所在的文件夹路径
    const folderPath = path.join(__dirname, outdir);

    // 检查文件夹是否存在，如果不存在则创建
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    // 定义文件的路径
    const filePath = path.join(folderPath, fileName);
    // 创建写入流
    const writeStream = fs.createWriteStream(filePath);
    // 将内容写入文件
    writeStream.write(content);
    writeStream.end();
    // 监听写入完成事件
    writeStream.on("finish", () => {
      console.log(fileName + "完成写入");
    });
    // 错误处理
    writeStream.on("error", (err) => {
      console.error(fileName + "写入失败:", err);
    });
  };

  // 生成api文件
  const getApiFileContent = () => {
    group = groupBy(apis, "group");

    group.forEach((groupItem) => {
      let fileStr = `import request from '${requestUrl || "./request"}'
    /**${groupItem.description} */
      export function use${toPascalCase(groupItem.groupName)}Api() {
      return {\n`;
      groupItem.items.forEach((item) => {
        const isQuery = ["get", "delete"].includes(item.method);
        const isParams = ["post", "put"].includes(item.method);

        if (isQuery && item.query) {
          fileStr += hasQueryApi(item);
        } else if (item.paramsType) {
          fileStr += hasParamsApi(item);
        } else if (isParams && item.query) {
          fileStr += hasUrlQueryApi(item);
        } else {
          fileStr += onlyApi(item);
        }
        fileStr += "\n";
      });
      fileStr += `}}`;
      genFile(fileStr, groupItem.groupName + ".ts", apiOutDir);
    });
  };

  // 判断是否有url参数
  const replaceUrlArg = (url) => {
    // 正则表达式匹配占位符
    const placeholderPattern = /\{([^}]+)\}/g;
    // 测试是否有占位符
    if (placeholderPattern.test(url)) {
      // 替换所有匹配项
      return {
        url: url.replace(placeholderPattern, "${data.$1}"),
        has: true,
      };
    }
    return {
      url,
      has: false,
    };
  };

  // 有params参数的，通过requestbody传参
  const hasParamsApi = (item) => {
    let url = "";
    if (replaceUrlArg(item.url).has) {
      url = replaceUrlArg(item.url).url;
    }
    const method = item.method.toUpperCase();
    return `/**${item.description} */
      ${processUrl(item.url)}${method}(data: ${
      item.paramsType
    }, config={}): Promise<${item.resType || "void"}> {
      return request({
        url: \`${prefixUrl}${url || item.url}\`,
        method: '${method}',
        data,
        ...config
      })
    },`;
  };

  // url参数number兼容string
  const urlNumber2String = (type) => {
    return type === "number" ? "number | string" : type;
  };

  // 有query参数的，通过url传参，这里包含url路径参数和query参数
  const hasQueryApi = (item) => {
    let queryStr = "";
    let url = "";
    if (replaceUrlArg(item.url).has) {
      url = replaceUrlArg(item.url).url;
    }
    const method = item.method.toUpperCase();
    queryStr += `{`;
    queryStr += item.query
      .map(
        (q) => `${q.name}${q.required ? "" : "?"}:${urlNumber2String(q.type)}`
      )
      .join(",");
    queryStr += `}`;
    const descStr = item.query
      .map(
        (q, i) =>
          `* @param data.${q.name} ${q.description}${
            i === item.query.length - 1 ? "" : "\n"
          }`
      )
      .join("");
    const urlStr = item.query
      .map((q) => `${q.name}=\${data.${q.name}}`)
      .join("&");
    return `/**
   * ${item.description}
   ${descStr}
   */
      ${processUrl(item.url)}${method}(data: ${queryStr}, config={}): Promise<${
      item.resType || "void"
    }> {
      return request({
        url: \`${prefixUrl}${url ? url : `${item.url}?${urlStr}`}\`,
        method: '${item.method.toUpperCase()}',
        ...config
      })
    },`;
  };

  // url参数的post请求，这里是url参数和requestbody参数
  function hasUrlQueryApi(item) {
    let queryStr = "";
    let url = "";
    if (replaceUrlArg(item.url).has) {
      url = replaceUrlArg(item.url).url;
    }

    const method = item.method.toUpperCase();
    queryStr += `{`;
    queryStr += item.query
      .map(
        (q) => `${q.name}${q.required ? "" : "?"}:${urlNumber2String(q.type)}`
      )
      .join(",");
    queryStr += `}`;
    if (url === "" && queryStr !== "{}") {
      const urlStr = item.query
        .map((q) => `${q.name}=\${data.${q.name}}`)
        .join("&");
      url = `${item.url}?${urlStr}`;
    }
    return (
      `/**${item.description} */
      ${processUrl(item.url)}${method}(data: ${
        url ? queryStr : item.onlyRequestBody || "{}"
      }, config={}): Promise<${item.resType || "void"}> {
      return request({
        url: \`${prefixUrl}${url || item.url}\`,
        method: '${item.method.toUpperCase()}',` +
      (url ? "" : "data,") +
      `...config
      })
    },`
    );
  }

  // 没有参数的
  const onlyApi = (item) => {
    const method = item.method.toUpperCase();
    return `/**${item.description} */
      ${processUrl(item.url)}${method}(config={}): Promise<${
      item.resType || "void"
    }> {
      return request({
        url: \`${prefixUrl}${item.url}\`,
        method: '${item.method.toUpperCase()}',
        ...config
      })
    },`;
  };

  // 获取interface文件内容
  const getInterfaceFileContent = () => {
    let content = "";
    typePinYinArr.forEach((item) => {
      let str = "";
      if (item.type) {
        str += `
    ${item.description ? `/**${item.description} */` : ""}
 declare interface ${item.typePinYinName} {
`;
        item.type?.forEach((it) => {
          if (it.description) {
            str += `/**${it.description} */\n`;
          }
          str += `${it.key}${it.required ? "" : "?"}: ${it.value};\n`;
        });

        str += `
    }\n
    `;
      } else if (item._enum) {
        str += `
    ${item.description ? `/**${item.description} */` : ""}
 declare enum ${item.typePinYinName} {
`;
        item._enum?.forEach((it) => {
          if (it.description) {
            str += `/**${it.description} */\n`;
          }
          str += `${it.key}= ${it.value},\n`;
        });

        str += `
    }\n
    `;
      }
      content += str;
    });
    return content;
  };

  const getApiIndexFileContent = () => {
    let content = ``;
    needExtendTemplate && (content += `import {useExtApi} from './ext'\n`);
    group.forEach((groupItem) => {
      content += `import {use${toPascalCase(
        groupItem.groupName
      )}Api} from './${apiOutDir}/${groupItem.groupName}'\n`;
    });
    content += `\n`;
    content += `export const ${exportApiName} = {\n`;
    group.forEach((groupItem) => {
      content += `...use${toPascalCase(groupItem.groupName)}Api(),\n`;
    });
    needExtendTemplate && (content += `...useExtApi(),\n`);
    content += `}`;
    return content;
  };

  const genExtFile = () => {
    // 定义目标目录和文件路径
    const dirPath = path.join(__dirname, "ext");
    const filePath = path.join(dirPath, "index.ts");
    const fileContent = `
    import request from '${requestUrl || "./request"}'

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

    `;

    // 判断目录是否存在
    if (!fs.existsSync(dirPath)) {
      // 如果目录不存在，则创建目录
      fs.mkdirSync(dirPath);
      // 创建文件并写入内容
      fs.writeFileSync(filePath, fileContent, "utf8");
      console.log("ext/index.ts完成写入");
    } else if (!fs.existsSync(filePath)) {
      // 如果目录存在但文件不存在，则创建文件并写入内容
      fs.writeFileSync(filePath, fileContent, "utf8");
      console.log("ext/index.ts完成写入");
    }
  };

  getApiUrlAndParams();
  getInterfaceTypes();
  getApiQueryParamsType();
  getApiFileContent();
  const interfaceFileContent = getInterfaceFileContent();
  genFile(interfaceFileContent, "interfaces.d.ts", interfaceOutDir);
  const apiIndexFileContent = getApiIndexFileContent();
  genFile(apiIndexFileContent, "index.ts", "");
  needExtendTemplate && genExtFile();
};

/**
 * api生成工具
 * @param {*} param.swaggerJsonUrl api json地址
 * @param {*} param.baseUrl url去除的公共地址，用于区分模块
 * @param {*} param.prefixUrl 地址前缀，添加在url前的标识，通常使用baseUrl
 * @param {*} param.apiOutDir api输出目录
 * @param {*} param.exportApiName 导出的api集合名称
 * @param {*} param.interfaceOutDir interface输出目录
 * @param {*} param.requestUrl request引入地址，使用默认导出，默认路径./request
 */
export const genApi = ({
  swaggerJsonUrl,
  apiJsonData,
  baseUrl,
  prefixUrl,
  outDir,
  apiOutDir,
  exportApiName,
  interfaceOutDir,
  requestUrl,
  needExtendTemplate,
}) => {
  const todo = (openAPI) => {
    // 处理转译字符，目前已知的%C2%AB %C2%BB
    openAPI = JSON.parse(
      JSON.stringify(openAPI)
        .replaceAll("%C2%AB", "«")
        .replaceAll("%C2%BB", "»")
    );
    tool({
      openAPI,
      baseUrl: baseUrl || "",
      prefixUrl: prefixUrl || "",
      outDir,
      apiOutDir,
      exportApiName: exportApiName || "apis",
      interfaceOutDir,
      requestUrl,
      needExtendTemplate,
    });
  };
  if (!swaggerJsonUrl && !apiJsonData) {
    throw "没有传入 swaggerJsonUrl 或 apiJsonData";
  }
  if (!swaggerJsonUrl && apiJsonData) {
    todo(apiJsonData);
    return false;
  }
  fetch(swaggerJsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("获取apijson请求报错 " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      todo(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
