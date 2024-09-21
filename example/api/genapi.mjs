import { genApi } from "../../packages/index2.mjs";

import apiJsonData from "./apiData.json" assert { type: "json" };

genApi({
  apiJsonData,
  prefixUrl: "/ambition-api/user",
  outDir: "/example/api/modules/ambition",
  apiOutDir: "modules",
  exportApiName: "ambitionApi",
  interfaceOutDir: "interfaces",
  requestUrl: "@/utils/service",
});

// genApi({
//   swaggerJsonUrl: "http://172.18.14.28:5010/swagger/Bearer/swagger.json",
//   baseUrl: "/graphics/bearer",
//   prefixUrl: "/graphics/bearer",
//   outDir: "/example/api/modules/editor",
//   apiOutDir: "modules",
//   exportApiName: "editorApi",
//   interfaceOutDir: "interfaces",
//   requestUrl: "@/utils/service",
// });
