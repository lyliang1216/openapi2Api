import request from '@/utils/service'
    /**role */
      export function useRoleApi() {
      return {
/** 
    * user/(Role)表控制层-page
* @param data.currentPage 
* @param data.pageSize 
* @param data.name 
*/
Role_PageGET(data:{currentPage:number | string,pageSize:number | string,name?:string}, config={}): Promise<IResponsePageRoleVO> {
return request({
        url: `/ambition-api/user/role/page?currentPage=${data.currentPage}&pageSize=${data.pageSize}&name=${data.name}`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Role)表控制层-add
*/
Role_AddPOST(data:IRoleDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/role/add`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * user/(Role)表控制层-edit
*/
Role_EditPOST(data:IRoleEditDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/role/edit`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * user/(Role)表控制层-delete
* @param data.id 
*/
Role_DeleteGET(data:{id:number | string}, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/role/delete?id=${data.id}`,
        method: 'GET',
...config
      })
    },
}}