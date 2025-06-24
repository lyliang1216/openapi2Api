import {genApi} from "../../packages/index.mjs";
import axios from 'axios'

// import apiJsonData from "./apiData.json" assert {type: "json"};

const res = await axios.post(
  'https://api.apifox.com/api/v1/export/openapi?__xAuthorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYwOTA0MywidHMiOiI0YWU2Yjc4ZjU2N2E3ZjVhIiwiaWF0IjoxNzQ3NjQzNDcyNjk3fQ.855jUsOFTDQgCyc2EWCbweaxGsdCTSDN0oaCHxAhwls&__xProjectId=6562717&locale=zh-CN',
  {
    projectId: 6562717,
    type: 2,
    format: 'json',
    version: '3.0',
    apiDetailId: [
      308422054, 312774486, 312774487, 312774488, 312774489, 312774490, 312773104, 312773105, 312773106, 312773017,
      308093657, 308093658, 308093659, 308093660, 308234615, 308234616, 308969357, 312569500, 313013999, 309368611,
      309758403, 309992010, 310385084, 310292286, 310441520, 310945082, 311011688, 311047420, 311068921, 311643448,
      311422544, 311210990, 311643449, 311422545, 311210991, 312439502
    ],
    includeTags: [],
    excludeTags: [],
    checkedFolder: [58866794, 58997113, 59830252, 59830011, 59829982, 58930929, 58959369, 59103781, 59103934, 59180062],
    selectedEnvironments: [],
    excludeExtension: true,
    excludeTagsWithFolder: false,
    moduleId: 5602048
  }
)

const apiJsonData = JSON.parse(decodeURIComponent(JSON.stringify(res.data)))

genApi({
  apiJsonData,
  outDir: '/',
  apiOutDir: 'modules',
  exportApiName: 'api',
  interfaceOutDir: 'interfaces',
  requestImportStr: `import { request } from '@/utils/service'`,
  needExtendTemplate: true,
  customUrlPlugin: (url, tags) => {
    if (tags[0] === 'util-api/SmsController') {
      return '/util-api' + url
    }
    if (url.startsWith('/${fwk.app.apiPrefix}')) {
      return url.replace('${fwk.app.apiPrefix}', tags[0].split('/')[0])
    }
    return '/' + tags[0].split('/')[0] + url
  }
})
