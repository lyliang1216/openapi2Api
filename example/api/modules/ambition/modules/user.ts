import request from '@/utils/service'
    /**user */
      export function useUserApi() {
      return {
/**user/(User)表控制层-doLogin
*/
AmbitionApi_User_User_DoLoginPOST(data:ILoginDTO, config={}): Promise<IResponseUserLoginInfoVO> {
return request({
        url: `/ambition-api/user/user/doLogin`,

        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-getMenuTreeByToken
*/
AmbitionApi_User_User_GetMenuTreeByTokenGET( config={}): Promise<IResponseListMenuTreeVO> {
return request({
        url: `/ambition-api/user/user/getMenuTreeByToken`,

        method: 'GET',
...config
      })
    },
/**user/(User)表控制层-logout
*/
AmbitionApi_User_User_LogoutGET( config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/logout`,

        method: 'GET',
...config
      })
    },
/**user/(User)表控制层-modifyPassword
*/
AmbitionApi_User_User_ModifyPasswordPOST(data:IModifyPasswordDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/modifyPassword`,

        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-page
* @param data.currentPage 
* @param data.pageSize 
* @param data.username 
* @param data.name 
* @param data.roleId 
* @param data.isEnable */
AmbitionApi_User_User_PageGET(data:{currentPage:number | string,pageSize:number | string,username?:string,name?:string,roleId?:number | string,isEnable?:string}, config={}): Promise<IResponsePageUserVO> {
return request({
        url: `/ambition-api/user/user/page?currentPage=${data.currentPage}&pageSize=${data.pageSize}&username=${data.username}&name=${data.name}&roleId=${data.roleId}&isEnable=${data.isEnable}`,

        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-add
*/
AmbitionApi_User_User_AddPOST(data:IUserDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/add`,

        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-setEnable
* @param data.userId 用户id
* @param data.isEnable 状态*/
AmbitionApi_User_User_SetEnableGET(data:{userId:number | string,isEnable:string}, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/setEnable?userId=${data.userId}&isEnable=${data.isEnable}`,

        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-edit
*/
AmbitionApi_User_User_EditPOST(data:IUserEditDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/edit`,

        method: 'POST',
data,
...config
      })
    },
/**user/(User)表控制层-delete
* @param data.id */
AmbitionApi_User_User_DeleteGET(data:{id:number | string}, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/delete?id=${data.id}`,

        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-reset
* @param data.id */
AmbitionApi_User_User_ResetGET(data:{id:number | string}, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/user/reset?id=${data.id}`,

        method: 'GET',
data,
...config
      })
    },
/**user/(User)表控制层-export
* @param data.username 
* @param data.name 
* @param data.roleId 
* @param data.isEnable */
AmbitionApi_User_User_ExportGET(data:{username?:string,name?:string,roleId?:number | string,isEnable?:string}, config={}): Promise<object> {
return request({
        url: `/ambition-api/user/user/export?username=${data.username}&name=${data.name}&roleId=${data.roleId}&isEnable=${data.isEnable}`,

        method: 'GET',
data,
...config
      })
    },
}}