import request from '@/utils/service'
    /**Component */
      export function useComponentApi() {
      return {
/**Component-获取自定义构件二进制数据 * @param data.exFileId exFileId*/
Component_Download_exFileIdGET( config={}): Promise<ArrayBuffer> {return request({
        url: `/component/download/${data.exFileId}`
,
        method: 'GET',
...config
      })
    },
}}