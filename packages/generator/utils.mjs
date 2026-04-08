import fs from 'fs'
import path from 'path'
import pinyin from 'pinyin'

// 过滤掉会破坏注释结构的字符，避免生成后的 ts 文件注释串掉。
export const filterDescription = (desc = '') => {
  return String(desc).replace(/\/\*|(\*\/)/g, '')
}

// 统一将中文名称转成拼音，给 interface 和文件名兜底。
export const getPinYin = (string) => {
  return pinyin
    .default(string, {
      style: 'normal',
    })
    .map((item) => item[0].charAt(0).toUpperCase() + item[0].slice(1))
    .join('')
}

export const ensureDirSync = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, {recursive: true})
  }
}

// 所有生成文件都走同步写入，保证单次执行内输出顺序稳定。
export const genFile = (content, fileName, outDir) => {
  const folderPath = path.join(outDir)
  ensureDirSync(folderPath)
  const filePath = path.join(folderPath, fileName)
  fs.writeFileSync(filePath, content, 'utf8')
  console.log(fileName + '完成写入')
}

export const resolveOutputRootDir = (outDir) => {
  const currentWorkingDirectory = process.cwd()
  if (!outDir) {
    return currentWorkingDirectory
  }
  // 历史用法里即使传了 /example/api，也期望它相对当前项目根目录。
  if (path.isAbsolute(outDir)) {
    return path.join(currentWorkingDirectory, outDir)
  }
  return path.join(currentWorkingDirectory, outDir)
}

// 组名会被用在 useXxxApi 上，因此统一转成 PascalCase。
export const toPascalCase = (str) => {
  return str
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export const getGroupNameFromUrl = (url) => {
  const startIndex = url.startsWith('/') ? 1 : 0
  const parts = url.slice(startIndex).split('/')
  return parts[0] || 'default'
}

// 中文分组名仍然允许生成，只是在文件落盘时转拼音避免路径问题。
export const handleFileName = (str) => {
  if (/[\u4e00-\u9fa5]/.test(str)) {
    return getPinYin(str)
  }
  return str
}

export const replacePlaceholders = (str) => {
  return str.replace(/\{(\w+)\}/g, (_match, paramName) => {
    return '${data.' + paramName + '}'
  })
}

// path 参数常常来自路由拼接，number 兼容 string 可以减少调用端额外转换。
export const urlNumber2String = (type) => {
  return type === 'number' ? 'number | string' : type
}

// 兼容后端把 enum 描述写成 KEY(desc)=value 的场景。
export const parseEnumData = (array = []) => {
  return array
    .map((item) => {
      const match = String(item).match(/(\w+)\((.*?)\)=(.*)/)
      if (!match) {
        return null
      }
      return {
        key: match[1],
        description: match[2],
        value: match[3],
      }
    })
    .filter(Boolean)
}

export const getReqConfig = (config) => {
  const queryTypeStr = `{${config.map((item) => `${item.name}${item.required ? '' : '?'}:${urlNumber2String(item.type)}`).join(',')}}`
  const descStr = config
    .map((item, index) => `* @param data.${item.name} ${item.description || ''}${index === config.length - 1 ? '' : '\n'}`)
    .join('')

  return {queryTypeStr, descStr}
}

// 优先选择第一个 2xx 响应，兼容 201/204 等非 200 成功返回。
export const getResponseSchema = (responses = {}) => {
  const successStatusCode = Object.keys(responses).find((statusCode) => /^2\d{2}$/.test(statusCode))
  const responseConfig = responses[successStatusCode || 'default']

  if (!responseConfig?.content) {
    return null
  }

  const contentItem = Object.values(responseConfig.content)[0]
  return contentItem?.schema || null
}
