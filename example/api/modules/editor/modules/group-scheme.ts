import request from '@/utils/service'
    /**GroupScheme */
      export function useGroupSchemeApi() {
      return {
/** 
    * GroupScheme-新建分组方案
*/
GroupSchemePOST(data:IGroupBo, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/group-scheme`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * GroupScheme-保存分组方案
*/
GroupSchemePUT(data:IUpdateGroupBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/group-scheme`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * GroupScheme-获取分组方案列表
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
GroupScheme_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IGroupSchemeVoListResponse> {
return request({
        url: `/graphics/bearer/group-scheme/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * GroupScheme-删除分组方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.groupId 分组方案id
*/
GroupScheme_projectId_sadiId_groupIdDELETE(data:{projectId:number | string,sadiId:number | string,groupId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/group-scheme/${data.projectId}/${data.sadiId}/${data.groupId}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * GroupScheme-分组方案排序
*/
GroupScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/group-scheme/sort`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * GroupScheme-复制分组方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 源分组方案id
*/
GroupScheme_Copy_projectId_sadiId_schemeIdPOST(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/group-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'POST',
...config
      })
    },
}}