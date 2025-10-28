// import {genApi} from "../../packages/generator/generator.mjs";
import {genApi} from "../../dist/generator/generator.mjs";
import axios from 'axios'

// import apiJsonData from "./apiData.json" assert {type: "json"};

const res = await axios.post(
  'https://api.apifox.com/api/v1/export/openapi?__xAuthorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYwOTA0MywidHMiOiI0YWU2Yjc4ZjU2N2E3ZjVhIiwiaWF0IjoxNzQ3NjQzNDcyNjk3fQ.855jUsOFTDQgCyc2EWCbweaxGsdCTSDN0oaCHxAhwls&__xProjectId=6562717&locale=zh-CN',
  {
    "projectId": 6562717,
    "type": 2,
    "format": "json",
    "version": "3.0",
    "apiDetailId": [316543269, 316543270, 318553216, 312774487, 312774488, 312774489, 312774490, 308422054, 318630465, 322751285, 335549255, 322791608, 335549256, 316543263, 316543264, 316543265, 316543266, 316543267, 316543268, 336147639],
    "includeTags": [],
    "excludeTags": [],
    "checkedFolder": [60555224, 59830252, 58997113, 60969049, 60555223],
    "selectedEnvironments": [],
    "excludeExtension": true,
    "excludeTagsWithFolder": false,
    "moduleId": 5602048
  }
)

const apiJsonData = JSON.parse(JSON.stringify(res.data).replaceAll('%3F', ''))

genApi({
  apiJsonData,
  outDir: '/example/api',
  apiOutDir: 'modules',
  exportApiName: 'api',
  interfaceOutDir: 'interfaces',
  requestImportStr: `import { request } from '@/utils/service'`,
  needExtendTemplate: true,
  exposeParamsName: 'data',
  customUrlPlugin: (url, tags) => {
    if (tags[0] === 'util-api/SmsController') {
      return '/util-api' + url
    }
    if (url.startsWith('/${fwk.app.apiPrefix}')) {
      return url.replace('${fwk.app.apiPrefix}', tags[0].split('/')[0])
    }
    return '/' + tags[0].split('/')[0] + url
  },
  customAbnormalTypeNamePlugin: (name) => {
    if (name.includes('.')) {
      return name
        .split('.')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join('')
    } else {
      return name
    }
  }
})
