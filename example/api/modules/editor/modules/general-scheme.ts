import request from '@/utils/service'
    /**GeneralScheme */
      export function useGeneralSchemeApi() {
      return {
/**GeneralScheme-获取综合方案列表 * @param data.projectId 项目id
* @param data.sadiId sadi id*/
GeneralScheme_projectId_sadiIdGET( config={}): Promise<IGeneralSchemeVoListResponse> {return request({
        url: `/general-scheme/${data.projectId}/${data.sadiId}`
,
        method: 'GET',
...config
      })
    },
/**GeneralScheme-新建综合方案 */
GeneralSchemePOST(data:IGeneralSchemeBo, config={}): Promise<IInt32Response> {return request({
        url: `/general-scheme`
,
        method: 'POST',
data,
...config
      })
    },
/**GeneralScheme-保存综合方案 */
GeneralSchemePUT(data:IUpdateGeneralSchemeBo, config={}): Promise<IObjectResponse> {return request({
        url: `/general-scheme`
,
        method: 'PUT',
data,
...config
      })
    },
/**GeneralScheme-删除综合方案 * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 综合方案id*/
GeneralScheme_projectId_sadiId_schemeIdDELETE( config={}): Promise<IObjectResponse> {return request({
        url: `/general-scheme/${data.projectId}/${data.sadiId}/${data.schemeId}`
,
        method: 'DELETE',
...config
      })
    },
/**GeneralScheme-综合方案排序 */
GeneralScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {return request({
        url: `/general-scheme/sort`
,
        method: 'PUT',
data,
...config
      })
    },
}}