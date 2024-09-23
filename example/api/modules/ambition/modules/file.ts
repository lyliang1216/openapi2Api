import request from '@/utils/service'
    /**user/文件上传与下载 */
      export function useFileApi() {
      return {
/**user/文件上传与下载-upload * @param data.path */
File_UploadPOST(data:{path?:string}, config={}): Promise<IResponseString> {return request({
        url: `/file/upload?path=${data.path}`
,
        method: 'POST',
data,
...config
      })
    },
/**user/文件上传与下载-downloadFile * @param data.filePath */
File_FilesGET(data:{filePath:string}, config={}): Promise<IResponseEntityResource> {return request({
        url: `/file/files?filePath=${data.filePath}`
,
        method: 'GET',
data,
...config
      })
    },
}}