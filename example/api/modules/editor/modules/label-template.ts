import request from '@/utils/service'
    /**LabelTemplate */
      export function useLabelTemplateApi() {
      return {
/** 
    * LabelTemplate-添加标签模板
*/
LabelTemplatePOST(data:FormData, config={}): Promise<IObjectResponse> {
return request({
        url: `/label-template`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * LabelTemplate-获取标签模板列表
*/
LabelTemplateGET( config={}): Promise<ILabelTemplateVoListResponse> {
return request({
        url: `/label-template`,
        method: 'GET',
...config
      })
    },
/** 
    * LabelTemplate-修改标签模板
*/
LabelTemplatePUT(data:FormData, config={}): Promise<IObjectResponse> {
return request({
        url: `/label-template`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * LabelTemplate-删除标签模板
* @param data.id 模板id
*/
LabelTemplate_idDELETE(data:{id:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/label-template/${data.id}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * LabelTemplate-复制标签模板
* @param data.id 模板id
*/
LabelTemplate_Copy_idPOST(data:{id:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/label-template/copy/${data.id}`,
        method: 'POST',
...config
      })
    },
}}