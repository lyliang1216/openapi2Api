import request from '@/utils/service'
    /**Label */
      export function useLabelApi() {
      return {
/** 
    * Label-添加标签实例
*/
LabelPOST(data:IAddLabelBo, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/label`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * Label-编辑标签实例
*/
LabelPUT(data:IUpdateLabelBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * Label-通过id查询单个标签实例
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.labelId 标签实例id
*/
Label_projectId_sadiId_labelIdGET(data:{projectId:number | string,sadiId:number | string,labelId:number | string}, config={}): Promise<ILabelVoResponse> {
return request({
        url: `/graphics/bearer/label/${data.projectId}/${data.sadiId}/${data.labelId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Label-删除标签实例
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.labelId 标签实例id
*/
Label_projectId_sadiId_labelIdDELETE(data:{projectId:number | string,sadiId:number | string,labelId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label/${data.projectId}/${data.sadiId}/${data.labelId}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * Label-分页查询标签实例
*/
Label_PagePOST(data:ILabelPageBo, config={}): Promise<ILabelVoPageResultVoResponse> {
return request({
        url: `/graphics/bearer/label/page`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * Label-复制标签实例
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.labelId 标签实例id
*/
Label_Copy_projectId_sadiId_labelIdPOST(data:{projectId:number | string,sadiId:number | string,labelId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label/copy/${data.projectId}/${data.sadiId}/${data.labelId}`,
        method: 'POST',
...config
      })
    },
/** 
    * Label-批量编辑标签实例
*/
Label_BatchPUT(data:IBatchSetStyleBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label/batch`,
        method: 'PUT',
data,
...config
      })
    },
}}