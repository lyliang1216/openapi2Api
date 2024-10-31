import request from '@/utils/service'
    /**Property */
      export function usePropertyApi() {
      return {
/** 
    * Property-获取原生构件属性
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.elementId 构件id
*/
Property_projectId_sadiId_elementIdGET(data:{projectId:number | string,sadiId:number | string,elementId:number | string}, config={}): Promise<IElementPropertyVoResponse> {
return request({
        url: `/graphics/bearer/property/${data.projectId}/${data.sadiId}/${data.elementId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Property-根据属性名+属性值搜索构件
*/
Property_SearchPOST(data:IPropertySearchBo, config={}): Promise<IPropertySearchVoListResponse> {
return request({
        url: `/graphics/bearer/property/search`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * Property-获取自定义构件属性
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.customElementId 自定义构件id
*/
Property_Custom_projectId_sadiId_customElementIdGET(data:{projectId:number | string,sadiId:number | string,customElementId:number | string}, config={}): Promise<IElementPropertyVoResponse> {
return request({
        url: `/graphics/bearer/property/custom/${data.projectId}/${data.sadiId}/${data.customElementId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Property-查询构件的自定义属性返回相同的部分
*/
Property_Sadi_SamePOST(data:IQuerySameSadiPropertyBo, config={}): Promise<ISameSadiPropertyVoListResponse> {
return request({
        url: `/graphics/bearer/property/sadi/same`,
        method: 'POST',
data,
...config
      })
    },
}}