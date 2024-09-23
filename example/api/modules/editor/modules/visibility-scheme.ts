import request from '@/utils/service'
    /**VisibilityScheme */
      export function useVisibilitySchemeApi() {
      return {
/**VisibilityScheme-获取显隐方案列表 * @param data.projectId 项目id
* @param data.sadiId sadi id*/
VisibilityScheme_projectId_sadiIdGET( config={}): Promise<IVsisibilityRecordVoListResponse> {return request({
        url: `/visibility-scheme/${data.projectId}/${data.sadiId}`
,
        method: 'GET',
...config
      })
    },
/**VisibilityScheme-新建显隐方案 */
VisibilitySchemePOST(data:IVisibilityRecordBo, config={}): Promise<IInt32Response> {return request({
        url: `/visibility-scheme`
,
        method: 'POST',
data,
...config
      })
    },
/**VisibilityScheme-保存显隐方案 */
VisibilitySchemePUT(data:IUpdateVisibilityRecordBo, config={}): Promise<IObjectResponse> {return request({
        url: `/visibility-scheme`
,
        method: 'PUT',
data,
...config
      })
    },
/**VisibilityScheme-删除显隐方案 * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.recordId 方案id*/
VisibilityScheme_projectId_sadiId_recordIdDELETE( config={}): Promise<IObjectResponse> {return request({
        url: `/visibility-scheme/${data.projectId}/${data.sadiId}/${data.recordId}`
,
        method: 'DELETE',
...config
      })
    },
/**VisibilityScheme-显隐方案排序 */
VisibilityScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {return request({
        url: `/visibility-scheme/sort`
,
        method: 'PUT',
data,
...config
      })
    },
/**VisibilityScheme-复制显隐方案 * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 源显隐方案id*/
VisibilityScheme_Copy_projectId_sadiId_schemeIdPOST( config={}): Promise<IInt32Response> {return request({
        url: `/visibility-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`
,
        method: 'POST',
...config
      })
    },
}}