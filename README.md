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

| 参数名          | 描述                                                     |
| --------------- | -------------------------------------------------------- |
| swaggerJsonUrl  | api json 地址，swagger 文档中按 F12 可看到 json 请求地址 |
| baseUrl         | api 地址前缀                                             |
| outDir          | 文件输出目录，如/src/api                                 |
| apiOutDir       | api 输出目录名                                           |
| interfaceOutDir | interface 输出目录名                                     |
| requestUrl      | request 引入地址，使用默认导出，默认路径./request        |

# Feature

- 输出目录简化
- 自动格式化
