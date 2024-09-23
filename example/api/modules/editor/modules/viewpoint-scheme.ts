import request from '@/utils/service'
    /**ViewpointScheme */
      export function useViewpointSchemeApi() {
      return {
/** 
    * ViewpointScheme-获取视点方案列表
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
ViewpointScheme_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IViewPointVoListResponse> {
return request({
        url: `/viewpoint-scheme/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * ViewpointScheme-新建视点方案
*/
ViewpointSchemePOST(data:IViewPointBo, config={}): Promise<IInt32Response> {
return request({
        url: `/viewpoint-scheme`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * ViewpointScheme-保存视点方案
*/
ViewpointSchemePUT(data:IUpdateViewPointBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/viewpoint-scheme`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * ViewpointScheme-删除视点方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 视点方案id
*/
ViewpointScheme_projectId_sadiId_schemeIdDELETE(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/viewpoint-scheme/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * ViewpointScheme-视点方案排序
*/
ViewpointScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/viewpoint-scheme/sort`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * ViewpointScheme-下载视点方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 视点方案id
*/
ViewpointScheme_Download_projectId_sadiId_schemeIdGET(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<ArrayBuffer> {
return request({
        url: `/viewpoint-scheme/download/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'GET',
...config
      })
    },
/** 
    * ViewpointScheme-上传视点方案
*/
ViewpointScheme_UploadPOST(data:FormData, config={}): Promise<IObjectResponse> {
return request({
        url: `/viewpoint-scheme/upload`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * ViewpointScheme-复制视点方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 视点方案id
*/
ViewpointScheme_Copy_projectId_sadiId_schemeIdPOST(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/viewpoint-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'POST',
...config
      })
    },
}}