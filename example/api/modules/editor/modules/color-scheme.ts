import request from '@/utils/service'
    /**ColorScheme */
      export function useColorSchemeApi() {
      return {
/** 
    * ColorScheme-新建色彩方案
*/
ColorSchemePOST(data:IColorRecordBo, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/color-scheme`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * ColorScheme-保存色彩方案
*/
ColorSchemePUT(data:FormData, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/color-scheme`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * ColorScheme-删除色彩方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.recordId 方案id
*/
ColorScheme_projectId_sadiId_recordIdDELETE(data:{projectId:number | string,sadiId:number | string,recordId:number | string}, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/color-scheme/${data.projectId}/${data.sadiId}/${data.recordId}`,
        method: 'DELETE',
...config
      })
    },
/** 
    * ColorScheme-获取色彩方案列表
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
ColorScheme_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IColorRecordVoListResponse> {
return request({
        url: `/graphics/bearer/color-scheme/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * ColorScheme-获取色彩方案数据
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.recordId 方案id
*/
ColorScheme_Data_projectId_sadiId_recordIdGET(data:{projectId:number | string,sadiId:number | string,recordId:number | string}, config={}): Promise<ArrayBuffer> {
return request({
        url: `/graphics/bearer/color-scheme/data/${data.projectId}/${data.sadiId}/${data.recordId}`,
        method: 'GET',
...config
      })
    },
/** 
    * ColorScheme-色彩方案排序
*/
ColorScheme_SortPUT(data:IRecordSortBo, config={}): Promise<IObjectResponse> {
return request({
        url: `/graphics/bearer/color-scheme/sort`,
        method: 'PUT',
data,
...config
      })
    },
/** 
    * ColorScheme-复制色彩方案
* @param data.projectId 项目id
* @param data.sadiId sadi id
* @param data.schemeId 源色彩方案id
*/
ColorScheme_Copy_projectId_sadiId_schemeIdPOST(data:{projectId:number | string,sadiId:number | string,schemeId:number | string}, config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/color-scheme/copy/${data.projectId}/${data.sadiId}/${data.schemeId}`,
        method: 'POST',
...config
      })
    },
}}