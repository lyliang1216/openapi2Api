import request from '@/utils/service'
    /**Property */
      export function usePropertyApi() {
      return {
/**Property-获取属性 * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.elementId 构件id*/
Property_projectId_sadiId_elementIdGET( config={}): Promise<IElementPropertyVoResponse> {return request({
        url: `/property/${data.projectId}/${data.sadiId}/${data.elementId}`
,
        method: 'GET',
...config
      })
    },
/**Property-根据属性名+属性值搜索构件 */
Property_SearchPOST(data:IPropertySearchBo, config={}): Promise<IPropertySearchVoListResponse> {return request({
        url: `/property/search`
,
        method: 'POST',
data,
...config
      })
    },
/**Property-获取自定义构件属性 * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.customElementId 自定义构件id*/
Property_Custom_projectId_sadiId_customElementIdGET( config={}): Promise<IElementPropertyVoResponse> {return request({
        url: `/property/custom/${data.projectId}/${data.sadiId}/${data.customElementId}`
,
        method: 'GET',
...config
      })
    },
/**Property-查询构件的自定义属性返回相同的部分 */
Property_Sadi_SamePOST(data:IQuerySameSadiPropertyBo, config={}): Promise<ISameSadiPropertyVoListResponse> {return request({
        url: `/property/sadi/same`
,
        method: 'POST',
data,
...config
      })
    },
}}