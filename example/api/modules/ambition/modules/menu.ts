import request from '@/utils/service'
    /**menu */
      export function useMenuApi() {
      return {
/** 
    * user/(Menu)表控制层-根据角色id查菜单树
* @param data.roleId 角色id
*/
Menu_GetMenuTreeByRoleIdGET(data:{roleId:number | string}, config={}): Promise<IResponseListMenuTreeVO> {
return request({
        url: `/ambition-api/user/menu/getMenuTreeByRoleId?roleId=${data.roleId}`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Menu)表控制层-根据角色id查菜单列表
* @param data.roleId 角色id
*/
Menu_GetMenuListByRoleIdGET(data:{roleId:number | string}, config={}): Promise<IResponseListMenuListVO> {
return request({
        url: `/ambition-api/user/menu/getMenuListByRoleId?roleId=${data.roleId}`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Menu)表控制层-获取所有菜单树
*/
Menu_GetMenuTreeGET( config={}): Promise<IResponseListMenuTreeVO> {
return request({
        url: `/ambition-api/user/menu/getMenuTree`,
        method: 'GET',
...config
      })
    },
/** 
    * user/(Menu)表控制层-新增
*/
Menu_AddPOST(data:IMenuDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/menu/add`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * user/(Menu)表控制层-编辑
*/
Menu_EditPOST(data:IMenuEditDTO, config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/menu/edit`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * user/(Menu)表控制层-删除
*/
Menu_DeletePOST(data:number[], config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/menu/delete`,
        method: 'POST',
data,
...config
      })
    },
/** 
    * user/(Menu)表控制层-修改菜单排序
*/
Menu_EditSortPOST(data:IMenuSortDTO[], config={}): Promise<IResponseString> {
return request({
        url: `/ambition-api/user/menu/editSort`,
        method: 'POST',
data,
...config
      })
    },
}}