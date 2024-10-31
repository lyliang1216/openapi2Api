import request from '@/utils/service'
    /**Element */
      export function useElementApi() {
      return {
/** 
    * Element-获取单个构件详情
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.elementId 构件id
*/
Element_projectId_sadiId_elementIdGET(data:{projectId:number | string,sadiId:number | string,elementId:number | string}, config={}): Promise<IElementVoResponse> {
return request({
        url: `/graphics/bearer/element/${data.projectId}/${data.sadiId}/${data.elementId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Element-获取所有构件详情
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Element_All_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IElementVoListResponse> {
return request({
        url: `/graphics/bearer/element/all/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Element-返回新的自定义构件id
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.count id数量
*/
Element_Custom_Id_projectId_sadiId_countGET(data:{projectId:number | string,sadiId:number | string,count:number | string}, config={}): Promise<IInt32ListResponse> {
return request({
        url: `/graphics/bearer/element/custom/id/${data.projectId}/${data.sadiId}/${data.count}`,
        method: 'GET',
...config
      })
    },
/** 
    * Element-添加自定义构件
*/
ElementPOST(data:IAddCustomElementBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/element`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * Element-删除构件
*/
ElementDELETE(data:IDeleteElementBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/element`,
        method: 'DELETE',
data,
...config
      })
    },
/** 
    * Element-更新构件
*/
ElementPUT(data:IUpdateElementBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/element`,
        method: 'PUT',
data,
...config
      })
    },
}}