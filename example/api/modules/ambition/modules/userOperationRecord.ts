import request from '@/utils/service'
    /**userOperationRecord */
      export function useUserOperationRecordApi() {
      return {
/** 
    * user/(UserOperationRecord)表控制层-page
* @param data.currentPage 
* @param data.pageSize 
* @param data.type 
* @param data.username 
* @param data.nickname 
* @param data.result 
* @param data.startTime 
* @param data.endTime 
*/
UserOperationRecord_PageGET(data:{currentPage:number | string,pageSize:number | string,type?:number | string,username?:string,nickname?:string,result?:number | string,startTime?:string,endTime?:string}, config={}): Promise<IResponsePageUserOperationRecordVO> {
return request({
        url: `/ambition-api/user/userOperationRecord/page?currentPage=${data.currentPage}&pageSize=${data.pageSize}&type=${data.type}&username=${data.username}&nickname=${data.nickname}&result=${data.result}&startTime=${data.startTime}&endTime=${data.endTime}`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(UserOperationRecord)表控制层-export
* @param data.type 
* @param data.username 
* @param data.nickname 
* @param data.result 
* @param data.startTime 
* @param data.endTime 
*/
UserOperationRecord_ExportGET(data:{type?:number | string,username?:string,nickname?:string,result?:number | string,startTime?:string,endTime?:string}, config={}): Promise<object> {
return request({
        url: `/ambition-api/user/userOperationRecord/export?type=${data.type}&username=${data.username}&nickname=${data.nickname}&result=${data.result}&startTime=${data.startTime}&endTime=${data.endTime}`,
        method: 'GET',
...config
      })
    },
}}