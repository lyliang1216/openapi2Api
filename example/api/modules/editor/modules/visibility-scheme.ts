import request from '@/utils/service'
    /**VisibilityScheme */
      export function useVisibilitySchemeApi() {
      return {
/**
   * VisibilityScheme-获取显隐方案列表
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      VisibilityScheme_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<IVsisibilityRecordVoListResponse> {
      return request({
        url: `/graphics/bearer/visibility-scheme/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**VisibilityScheme-新建显隐方案 */
      VisibilitySchemePOST(data: IVisibilityRecordBo, config={}): Promise<IInt32Response> {
      return request({
        url: `/graphics/bearer/visibility-scheme`,
        method: 'POST',
        data,
        ...config
      })
    },
/**VisibilityScheme-保存显隐方案 */
      VisibilitySchemePUT(data: IUpdateVisibilityRecordBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/visibility-scheme`,
        method: 'PUT',
        data,
        ...config
      })
    },
/**
   * VisibilityScheme-删除显隐方案
   * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.recordId 方案id
   */
      VisibilityScheme_projectId_sadiId_recordIdDELETE(data: {projectId:number | string,sadiId:number | string,recordId:number | string}, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/visibility-scheme/${data.projectId}/${data.sadiId}/${data.recordId}`,
        method: 'DELETE',
        ...config
      })
    },
/**VisibilityScheme-显隐方案排序 */
      VisibilityScheme_SortPUT(data: IRecordSortBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/visibility-scheme/sort`,
        method: 'PUT',
        data,
        ...config
      })
    },
/**VisibilityScheme-复制显隐方案 */
      VisibilityScheme_Copy_projectId_sadiId_schemeIdPOST(data: {projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IInt32Response> {
      return request({
        url: `/graphics/bearer/visibility-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'POST',...config
      })
    },
}}