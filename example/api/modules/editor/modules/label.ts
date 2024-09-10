import request from '@/utils/service'
    /**Label */
      export function useLabelApi() {
      return {
/**Label-添加标签实例 */
      LabelPOST(data: IAddLabelBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/label`,
        method: 'POST',
        data,
        ...config
      })
    },
/**Label-编辑标签实例 */
      LabelPUT(data: IUpdateLableBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/label`,
        method: 'PUT',
        data,
        ...config
      })
    },
/**Label-分页查询标签实例 */
      Label_PagePOST(data: ILabelPageBo, config={}): Promise<ILableVoPageResultVoResponse> {
      return request({
        url: `/graphics/bearer/label/page`,
        method: 'POST',
        data,
        ...config
      })
    },
/**
   * Label-删除标签实例
   * @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.labelId 标签实例id
* @param data.lableId undefined
   */
      Label_projectId_sadiId_lableIdDELETE(data: {projectId:number | string,sadiId:number | string,labelId?:number | string,lableId:string}, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/label/${data.projectId}/${data.sadiId}/${data.lableId}`,
        method: 'DELETE',
        ...config
      })
    },
/**Label-复制标签实例 */
      Label_Copy_projectId_sadiId_lableIdPOST(data: {projectId:number | string,sadiId:number | string,labelId?:number | string,lableId:string}, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/label/copy/${data.projectId}/${data.sadiId}/${data.lableId}`,
        method: 'POST',...config
      })
    },
/**Label-批量编辑标签实例 */
      Label_BatchPUT(data: IBatchSetStyleBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/label/batch`,
        method: 'PUT',
        data,
        ...config
      })
    },
}}