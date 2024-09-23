import request from '@/utils/service'
    /**user/(Role)表控制层 */
      export function useRoleApi() {
      return {
/**user/(Role)表控制层-page * @param data.currentPage 
* @param data.pageSize 
* @param data.name */
Role_PageGET(data:{currentPage:number | string,pageSize:number | string,name?:string}, config={}): Promise<IResponsePageRoleVO> {return request({
        url: `/role/page?currentPage=${data.currentPage}pageSize=${data.pageSize}name=${data.name}`
,
        method: 'GET',
data,
...config
      })
    },
/**user/(Role)表控制层-add */
Role_AddPOST(data:IRoleDTO, config={}): Promise<IResponseString> {return request({
        url: `/role/add`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(Role)表控制层-edit */
Role_EditPOST(data:IRoleEditDTO, config={}): Promise<IResponseString> {return request({
        url: `/role/edit`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(Role)表控制层-delete * @param data.id */
Role_DeleteGET(data:{id:number | string}, config={}): Promise<IResponseString> {return request({
        url: `/role/delete?id=${data.id}`
,
        method: 'GET',
data,
...config
      })
    },
}}