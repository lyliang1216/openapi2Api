import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {genApi} from "../../packages/generator/generator.mjs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const apiJsonFilePath = path.join(__dirname, './apiData.json')
const apiJsonData = JSON.parse(fs.readFileSync(apiJsonFilePath, 'utf8').replaceAll('%3F', ''))

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
