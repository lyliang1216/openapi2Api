import request from '@/utils/service'
    /**LabelScheme */
      export function useLabelSchemeApi() {
      return {
/** 
    * LabelScheme-新增标签方案
*/
LabelSchemePOST(data:ILabelRecordBo, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/label-scheme`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * LabelScheme-保存标签方案
*/
LabelSchemePUT(data:ISaveLabelRecordBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label-scheme`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * LabelScheme-获取标签方案列表
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
LabelScheme_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<ILabelRecordVoListResponse> {
return request({
        url: `/graphics/bearer/label-scheme/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * LabelScheme-删除标签方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.recordId 标签方案id
*/
LabelScheme_projectId_sadiId_recordIdDELETE(data:{projectId:number | string,sadiId:number | string,recordId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label-scheme/${data.projectId}/${data.sadiId}/${data.recordId}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * LabelScheme-标签方案排序
*/
LabelScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label-scheme/sort`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * LabelScheme-复制标签方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 源标签方案id
*/
LabelScheme_Copy_projectId_sadiId_schemeIdPOST(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/label-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'POST',
...config
      })
    },
/** 
    * LabelScheme-下载标签方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
LabelScheme_Download_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<ArrayBuffer> {
return request({
        url: `/graphics/bearer/label-scheme/download/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * LabelScheme-上传标签方案
*/
LabelScheme_ImportPOST(data:FormData, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/label-scheme/import`,
        method: 'POST',
data,
...config
      })
    },
}}