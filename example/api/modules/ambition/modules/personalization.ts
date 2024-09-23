import request from '@/utils/service'
    /**personalization */
      export function usePersonalizationApi() {
      return {
/** 
    * user/(Personalization)表控制层-获取当前启用的方案
*/
Personalization_GetEnabledGET( config={}): Promise<IResponsePersonalizationVO> {
return request({
        url: `/ambition-api/user/personalization/getEnabled`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Personalization)表控制层-更改为默认值
*/
Personalization_SetDefaultGET( config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/personalization/setDefault`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Personalization)表控制层-保存当前
*/
Personalization_UpdateEnabledPOST(data:IPersonalizationDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/personalization/updateEnabled`,
        method: 'POST',
data,
...config
      })
    },
}}