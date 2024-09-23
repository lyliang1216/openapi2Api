import request from '@/utils/service'
    /**user/(User)表控制层 */
      export function useUserApi() {
      return {
/**user/(User)表控制层-doLogin */
User_DoLoginPOST(data:ILoginDTO, config={}): Promise<IResponseUserLoginInfoVO> {return request({
        url: `/user/doLogin`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-getMenuTreeByToken */
User_GetMenuTreeByTokenGET( config={}): Promise<IResponseListMenuTreeVO> {return request({
        url: `/user/getMenuTreeByToken`
,
        method: 'GET',
...config
      })
    },
/**user/(User)表控制层-logout */
User_LogoutGET( config={}): Promise<IResponseString> {return request({
        url: `/user/logout`
,
        method: 'GET',
...config
      })
    },
/**user/(User)表控制层-modifyPassword */
User_ModifyPasswordPOST(data:IModifyPasswordDTO, config={}): Promise<IResponseString> {return request({
        url: `/user/modifyPassword`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-page * @param data.currentPage 
* @param data.pageSize 
* @param data.username 
* @param data.name 
* @param data.roleId 
* @param data.isEnable */
User_PageGET(data:{currentPage:number | string,pageSize:number | string,username?:string,name?:string,roleId?:number | string,isEnable?:string}, config={}): Promise<IResponsePageUserVO> {return request({
        url: `/user/page?currentPage=${data.currentPage}pageSize=${data.pageSize}username=${data.username}name=${data.name}roleId=${data.roleId}isEnable=${data.isEnable}`
,
        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-add */
User_AddPOST(data:IUserDTO, config={}): Promise<IResponseString> {return request({
        url: `/user/add`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-setEnable * @param data.userId 用户id
* @param data.isEnable 状态*/
User_SetEnableGET(data:{userId:number | string,isEnable:string}, config={}): Promise<IResponseString> {return request({
        url: `/user/setEnable?userId=${data.userId}isEnable=${data.isEnable}`
,
        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-edit */
User_EditPOST(data:IUserEditDTO, config={}): Promise<IResponseString> {return request({
        url: `/user/edit`
,
        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-delete * @param data.id */
User_DeleteGET(data:{id:number | string}, config={}): Promise<IResponseString> {return request({
        url: `/user/delete?id=${data.id}`
,
        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-reset * @param data.id */
User_ResetGET(data:{id:number | string}, config={}): Promise<IResponseString> {return request({
        url: `/user/reset?id=${data.id}`
,
        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-export * @param data.username 
* @param data.name 
* @param data.roleId 
* @param data.isEnable */
User_ExportGET(data:{username?:string,name?:string,roleId?:number | string,isEnable?:string}, config={}): Promise<object> {return request({
        url: `/user/export?username=${data.username}name=${data.name}roleId=${data.roleId}isEnable=${data.isEnable}`
,
        method: 'GET',
data,
...config
      })
    },
}}