# openapi2Api

openapi 生成 api 工具

# 使用

```
npm i openapi2Api -D

import { genApi } from 'openapi2api'

genApi({
  swaggerJsonUrl: 'swaggerJsonUrl',
  baseUrl: '/api',
  apiOutDir: 'modules',
  interfaceOutDir: 'interfaces',
  requestUrl: '@/utils/service'
})

```

# 参数

| 参数名          | 描述                                                                                  |
| --------------- | ------------------------------------------------------------------------------------- |
| swaggerJsonUrl  | api json 地址，swagger 文档中按 F12 可看到 json 请求地址，和 apiJsonData 传入一个即可 |
| apiJsonData     | api 的 json 数据，和 swaggerJsonUrl 传入一个即可                                      |
| baseUrl         | url 去除的公共地址，用于区分模块                                                      |
| prefixUrl       | 地址前缀，添加在 url 前的标识，通常使用 baseUrl                                       |
| outDir          | 文件输出目录，如/src/api                                                              |
| exportApiName   | 导出的 api 集合名称                                                                   |
| apiOutDir       | api 输出目录名                                                                        |
| interfaceOutDir | interface 输出目录名                                                                  |
| requestUrl      | request 引入地址，使用默认导出，默认路径./request                                     |

# Feature

- 输出目录简化
- 自动格式化

- 优化参数位置判断，通过 parameters 中 in 字段判断
