import request from '@/utils/service'
    /**user/文件上传与下载 */
      export function useFileApi() {
      return {
/**user/文件上传与下载-upload */
      File_UploadPOST(data: FormData, config={}): Promise<IResponseString> {
      return request({
        url: `/ambition-api/user/file/upload`,
        method: 'POST',
        data,
        ...config
      })
    },
/**
   * user/文件上传与下载-downloadFile
   * @param data.filePath 
   */
      File_FilesGET(data: {filePath:string}, config={}): Promise<IResponseEntityResource> {
      return request({
        url: `/ambition-api/user/file/files?filePath=${data.filePath}`,
        method: 'GET',
        ...config
      })
    },
}}