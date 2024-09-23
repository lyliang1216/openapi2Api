import request from '@/utils/service'
    /**file */
      export function useFileApi() {
      return {
/** 
    * user/文件上传与下载-upload
* @param data.path 
*/
File_UploadPOST(data:{path?:string}, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/file/upload?path=${data.path}`,
        method: 'POST',
...config
      })
    },
/** 
    * user/文件上传与下载-downloadFile
* @param data.filePath 
*/
File_FilesGET(data:{filePath:string}, config={}): Promise<IResponseEntityResource> {
return request({
        url: `/ambition-api/user/file/files?filePath=${data.filePath}`,
        method: 'GET',
...config
      })
    },
}}