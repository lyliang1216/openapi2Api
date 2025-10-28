# openapi2Api

openapi 生成 api 工具

# 使用

```
npm i openapi2Api -D

import { genApi } from 'openapi2api'

genApi({
  apiJsonData,
  outDir: "/example/api/modules/ambition",
  apiOutDir: "modules",
  exportApiName: "ambitionApi",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
  customUrlPlugin: (url, tags) => {
    let serviceName = "";
    if (tags?.[0]) {
      serviceName = tags[0].split("/")[0];
    }
    switch (serviceName) {
      case "user":
        return "/ambition-api/user" + url;
      case "thing":
        return "/ambition-api/thing" + url;
      default:
        return url;
    }
  },
});

genApi({
  swaggerJsonUrl: "http://172.18.14.28:5010/swagger/Bearer/swagger.json",
  outDir: "/example/api/modules/editor",
  apiOutDir: "modules",
  exportApiName: "editorApi",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
  customUrlPlugin: (url, tags) => {
    return url.replace("/graphics/bearer", "");
  },
});


```

# 参数

| 参数名                          | 描述                                                                                                   |
|------------------------------|------------------------------------------------------------------------------------------------------|
| swaggerJsonUrl               | api json 地址，swagger 文档中按 F12 可看到 json 请求地址，和 apiJsonData 传入一个即可                                      |
| apiJsonData                  | api 的 json 数据，和 swaggerJsonUrl 传入一个即可                                                                |
| baseUrl                      | baseUrl 会添加到生成的 url 前面                                                                               |
| outDir                       | 文件输出目录，如/src/api                                                                                     |
| exportApiName                | 导出的 api 集合名称                                                                                         |
| apiOutDir                    | api 输出目录名                                                                                            |
| interfaceOutDir              | interface 输出目录名                                                                                      |
| requestImportStr             | request 引入地址字符串，传入完整 import 导入字符串                                                                    |
| needExtendTemplate           | 是否需要拓展 api 的模板，并且在 api 中会自动引入拓展文件                                                                    |
| exposeParamsName             | 需要直接暴露返回值中的参数，如果不存在或返回值不是对象，则会返回原始数据                                                                 |
| customUrlPlugin              | 自定义 url 插件，参数 1：原始 url，参数 2：tags，需要返回格式化后的 url                                                       |
| customGroupPlugin            | 自定义 group 插件，参数：格式化后的 url，需要返回当前 url 的分组，用于创建文件分组                                                    |
| customReqNamePlugin          | 自定义请求方法名称插件，参数 1：格式化后的 url，参数 2：默认生成的 name 名称，需要返回自定义的 name                                          |
| customInterFacePlugin        | 自定义 interface 内容插件，参数 interface 数据，包含名称，参数类型，是否必填，需要返回对象，key 是 interface 名，value 是对应 interface{}里的内容 |
| customAbnormalTypeNamePlugin | 自定义异常类型名称插件，请求类型和返回类型名称异常处理                                                                          |

# Feature

- 输出目录简化
- 自动格式化
- 优化参数判断逻辑 √
- 支持自定义格式化 url √
- 优化分组实现逻辑
- 使用模板来替换文件字符写入

# Record

- 1.1.41
  customResponsesTypePlugin 方法名修改为 customAbnormalTypeNamePlugin