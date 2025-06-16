import {genApi} from "../../packages/index.mjs";
import axios from 'axios'

// import apiJsonData from "./apiData.json" assert {type: "json"};

const res = await axios.post('https://api.apifox.com/api/v1/export/openapi?__xAuthorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYwOTA0MywidHMiOiI0YWU2Yjc4ZjU2N2E3ZjVhIiwiaWF0IjoxNzQ3NjQzNDcyNjk3fQ.855jUsOFTDQgCyc2EWCbweaxGsdCTSDN0oaCHxAhwls&__xProjectId=6281722&locale=zh-CN', {
  "projectId": 6281722,
  "type": 1,
  "format": "json",
  "version": "3.0",
  "apiDetailId": [],
  "includeTags": [],
  "excludeTags": [],
  "checkedFolder": [],
  "selectedEnvironments": [],
  "excludeExtension": true,
  "excludeTagsWithFolder": false,
  "moduleId": 3646634
})

const apiJsonData = res.data

genApi({
  apiJsonData,
  outDir: "/",
  apiOutDir: "modules",
  exportApiName: "apis",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
  needExtendTemplate: true,
  customUrlPlugin:(url,tags)=>{
    if (tags[0] === 'util-api/SmsController') {
      return '/util-api'+url
    }
    if (url.startsWith('/v1')){
      return '/'+tags[0].split('/')[0]+url
    }
    return url.replace('${fwk.app.apiPrefix}', tags[0].split('/')[0])
  }
});