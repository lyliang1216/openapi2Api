import { genApi } from "../../packages/index.mjs";

import apiJsonData from "./apiData.json" assert { type: "json" };

genApi({
  apiJsonData,
  outDir: "/example/api/modules/ambition",
  apiOutDir: "modules",
  exportApiName: "ambitionApi",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
  needExtendTemplate: true,
  customUrlPlugin: (url, tags) => {
    let serviceName = ''
    if (tags?.[0]) {
      serviceName = tags[0].split('/')[0]
    }
    switch (serviceName) {
      case 'user':
        return '/ambition-api/user' + url
      case 'thing':
        return '/ambition-api/thing' + url
      case 'intelligence':
        return '/ambition-api/intelligence' + url
      case 'view':
        return '/ambition-api/view' + url
      case 'communication':
        return '/ambition-api/communication' + url
      case 'page':
        return '/ambition-api/page' + url
      default:
        return url
    }
  },
  customGroupPlugin: (url) => {
    if (url.includes('/ambition-api/user')) {
      return url.replace('/ambition-api/user', '').slice(1).split('/')[0]
    }
    if (url.includes('/ambition-api/thing')) {
      return url.replace('/ambition-api/thing', '').slice(1).split('/')[0]
    }
    if (url.includes('/ambition-api/intelligence')) {
      return url.replace('/ambition-api/intelligence', '').slice(1).split('/')[0]
    }
    if (url.includes('/ambition-api/communication/physicalPoint')) {
      return 'communicationPhysicalPoint'
    }
    if (url.includes('/ambition-api/communication')) {
      return url.replace('/ambition-api/communication', '').slice(1).split('/')[0]
    }
    // TODO 待优化工具，apifox文档错误
    if (url.includes('/ambition-api/view/blade-visual/record')) {
      return 'bladeVisualRecord'
    }
    if (url.includes('/ambition-api/view/blade-visual/visual')) {
      return 'bladeVisualVisual'
    }
    if (url.includes('/ambition-api/page/blade-visual')) {
      return 'pageBladeVisual'
    }
    if (url.includes('/ambition-api/view')) {
      return url.replace('/ambition-api/view', '').slice(1).split('/')[0]
    }
  },
  customReqNamePlugin: (url, name) => {
    if (url.includes('/ambition-api/user')) {
      return name.replace('AmbitionApi_User_', '')
    }
    if (url.includes('/ambition-api/thing')) {
      return name.replace('AmbitionApi_Thing_', '')
    }
    if (url.includes('/ambition-api/intelligence')) {
      return name.replace('AmbitionApi_Intelligence_', '')
    }
    if (url.includes('/ambition-api/view')) {
      return name.replace('AmbitionApi_View_', '')
    }
    if (url.includes('/ambition-api/communication')) {
      return name.replace('AmbitionApi_Communication_', '')
    }
    if (url.includes('/ambition-api/page')) {
      return name.replace('AmbitionApi_Page_', '')
    }
  },
  customInterFacePlugin: (data) => {
    if (data.typePinYinName === 'IJSONObject') {
      return {
        IJSONObject: ''
      }
    } else {
      return {}
    }
  }
});

genApi({
  swaggerJsonUrl: "http://172.18.14.28:5010/swagger/Bearer/swagger.json",
  outDir: "/example/api/modules/editor",
  baseUrl: "/graphics/bearer",
  apiOutDir: "modules",
  exportApiName: "editorApi",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
  customUrlPlugin: (url, tags) => {
    return url.replace("/graphics/bearer", "");
  },
});
