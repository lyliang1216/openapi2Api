import request from '@/utils/service'
    /**Project */
      export function useProjectApi() {
      return {
/** 
    * Project-返回当前配置的项目id
*/
Project_CurrentGET( config={}): Promise<IInt32Response> {
return request({
        url: `/graphics/bearer/project/current`,
        method: 'GET',
...config
      })
    },
}}