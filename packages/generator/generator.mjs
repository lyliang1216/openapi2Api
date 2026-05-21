import fs from 'fs'
import path from 'path'
import { genFile, resolveOutputRootDir } from './utils.mjs'
import { createParser } from './parser.mjs'
import { createRenderer } from './renderer.mjs'

const tool = ({
  openAPI,
  baseUrl,
  outDir,
  apiOutDir,
  exportApiName,
  exportApiFileName,
  interfaceOutDir,
  requestImportStr,
  needExtendTemplate,
  exposeParamsName,
  customUrlPlugin,
  customGroupPlugin,
  customReqNamePlugin,
  customInterFacePlugin,
  customAbnormalTypeNamePlugin,
}) => {
  // 本次生成任务的根输出目录，所有 api/types/index 文件都基于它拼接。
  const outputRootDir = resolveOutputRootDir(outDir)
  // 按模块拆分后的 api 文件输出目录，例如 modules。
  const apiOutputDir = path.join(outputRootDir, apiOutDir)
  // 类型声明文件输出目录，例如 interfaces。
  const interfaceOutputDir = path.join(outputRootDir, interfaceOutDir)

  const parser = createParser({
    openAPI,
    customAbnormalTypeNamePlugin,
    customUrlPlugin,
    customGroupPlugin,
  })

  const renderer = createRenderer({
    baseUrl,
    requestImportStr,
    exposeParamsName,
    needExtendTemplate,
    customReqNamePlugin,
    customInterFacePlugin,
    outputRootDir,
    apiOutputDir,
  })

  const apis = parser.getApiUrlAndParams()
  const { interfaceTypes, typeNameMap } = parser.getInterfaceTypes()
  parser.getApiQueryParamsType(apis, typeNameMap)
  const groups = parser.groupBy(apis)

  renderer.getApiFileContent(groups)
  const legacyInterfaceFilePath = path.join(interfaceOutputDir, 'interfaces.d.ts')
  if (fs.existsSync(legacyInterfaceFilePath)) {
    fs.unlinkSync(legacyInterfaceFilePath)
  }
  renderer.getInterfaceFileContentByGroups(groups, interfaceTypes).forEach((interfaceFileItem) => {
    genFile(interfaceFileItem.content, interfaceFileItem.fileName, interfaceOutputDir)
  })
  genFile(renderer.getApiIndexFileContent(groups, exportApiName, apiOutDir), `${exportApiFileName}.ts`, outputRootDir)

  if (needExtendTemplate) {
    renderer.genExtFile()
  }
}

/**
 * api生成工具
 * @param {Object} param 传入参数
 * @param {*} param.swaggerJsonUrl api json地址
 * @param {*} param.apiJsonData api json数据
 * @param {*} param.baseUrl baseUrl 会拼接在最后生成的url前
 * @param {*} param.outDir 工具输出目录
 * @param {*} param.apiOutDir api输出目录
 * @param {*} param.exportApiName 导出的api集合名称
 * @param {*} param.exportApiFileName 导出的api集合文件名
 * @param {*} param.interfaceOutDir interface输出目录
 * @param {*} param.requestImportStr request引入地址
 * @param {*} param.needExtendTemplate 是否需要拓展api模板
 * @param {*} param.exposeParamsName 需要直接暴露的返回值参数名
 * @param {*} param.customUrlPlugin 自定义url插件
 * @param {*} param.customGroupPlugin 自定义group插件
 * @param {*} param.customReqNamePlugin 自定义请求方法名称插件
 * @param {*} param.customInterFacePlugin 自定义interface内容插件，整个对象
 * @param {*} param.customAbnormalTypeNamePlugin 自定义异常类型名称插件，请求类型和返回类型名称异常处理
 */
export const genApi = async ({
  swaggerJsonUrl,
  apiJsonData,
  baseUrl,
  outDir,
  apiOutDir,
  exportApiName,
  exportApiFileName,
  interfaceOutDir,
  requestImportStr,
  needExtendTemplate,
  exposeParamsName,
  customUrlPlugin,
  customGroupPlugin,
  customReqNamePlugin,
  customInterFacePlugin,
  customAbnormalTypeNamePlugin,
}) => {
  // 统一封装一层执行入口，便于同时支持本地数据和远程拉取两种模式。
  const runGenerator = (openAPI) => {
    tool({
      openAPI,
      outDir,
      baseUrl,
      apiOutDir,
      exportApiName: exportApiName || 'apis',
      exportApiFileName: exportApiFileName || 'index',
      interfaceOutDir,
      requestImportStr,
      needExtendTemplate,
      exposeParamsName,
      customUrlPlugin,
      customGroupPlugin,
      customReqNamePlugin,
      customInterFacePlugin,
      customAbnormalTypeNamePlugin,
    })
  }

  if (!swaggerJsonUrl && !apiJsonData) {
    throw new Error('没有传入 swaggerJsonUrl 或 apiJsonData')
  }

  // 直接传入 json 数据时不走网络请求。
  if (!swaggerJsonUrl && apiJsonData) {
    runGenerator(apiJsonData)
    return
  }

  try {
    // 远程模式下从 swagger/openapi 地址拉取最新文档。
    const response = await fetch(swaggerJsonUrl)
    if (!response.ok) {
      throw new Error('获取apijson请求报错 ' + response.statusText)
    }
    // 拉取到的原始 OpenAPI json 数据。
    const data = await response.json()
    runGenerator(data)
  } catch (error) {
    console.error(error)
  }
}
