import { genApi } from "../../packages/index.mjs";

import apiJsonData from "./apiData.json" assert { type: "json" };

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
  customGroupPlugin: (url) => {
    if (url.includes("/ambition-api/user")) {
      return url.replace("/ambition-api/user", "").slice(1).split("/")[0];
    }
    if (url.includes("/ambition-api/thing")) {
      return url.replace("/ambition-api/thing", "").slice(1).split("/")[0];
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
