import request from '@/utils/service'
    /**Gb */
      export function useGbApi() {
      return {
/**Gb-获取国标条文 */
GbGET( config={}): Promise<ISADIStandardListResponse> {return request({
        url: `/gb`
,
        method: 'GET',
...config
      })
    },
/**Gb-计算文件国标条文对应构件索引 * @param data.projectId 项目id
* @param data.sadiId sadi id*/
Gb_projectId_sadiIdGET( config={}): Promise<IStandardVoListResponse> {return request({
        url: `/gb/${data.projectId}/${data.sadiId}`
,
        method: 'GET',
...config
      })
    },
}}