import request from '@/utils/service'
    /**ElementUniqueId */
      export function useElementUniqueIdApi() {
      return {
/**
   * ElementUniqueId-方案传递
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      ElementUniqueId_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<IUniqueIdVoListResponse> {
      return request({
        url: `/graphics/bearer/element-uniqueId/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**
   * ElementUniqueId-自定义构件方案传递
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      ElementUniqueId_Custom_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<ICustomUniqueIdVoListResponse> {
      return request({
        url: `/graphics/bearer/element-uniqueId/custom/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
}}