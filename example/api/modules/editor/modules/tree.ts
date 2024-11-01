import request from '@/utils/service'
    /**Tree */
      export function useTreeApi() {
      return {
/** 
    * Tree-获取合模文件树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_MergeTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IMergeTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/merge-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-获取空间树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_SpaceTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<ISpaceTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/space-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-SU获取图层树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_Su_LayerTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<ISULayerTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/su/layer-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-SU获取组件树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_Su_ComponentTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<ISUComponentTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/su/component-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-获取构件树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_ElementTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IElementTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/element-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-获取楼层树信息
* @param data.projectId 项目id
* @param data.sadiId sadi id
*/
Tree_StoreyTree_projectId_sadiIdGET(data:{projectId:number | string,sadiId:number | string}, config={}): Promise<IStoreyTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/storey-tree/${data.projectId}/${data.sadiId}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-获取场景树信息
* @param data.name 名称
*/
Tree_SceneTreeGET(data:{name?:string}, config={}): Promise<ISceneTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/scene-tree?name=${data.name}`,
        method: 'GET',
...config
      })
    },
/** 
    * Tree-获取案例树信息
*/
Tree_CaseTreeGET( config={}): Promise<ICaseTreeVoListResponse> {
return request({
        url: `/graphics/bearer/tree/case-tree`,
        method: 'GET',
...config
      })
    },
}}