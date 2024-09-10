import request from '@/utils/service'
    /**Model */
      export function useModelApi() {
      return {
/**Model-分页获取模型列表 */
      Model_PagePOST(data: IModelPageBo, config={}): Promise<IModelVoPageResultVoResponse> {
      return request({
        url: `/graphics/bearer/model/page`,
        method: 'POST',
        data,
        ...config
      })
    },
/**
   * Model-下载sadi文件
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_Download_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<ArrayBuffer> {
      return request({
        url: `/graphics/bearer/model/download/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**Model-新建空白模型 */
      Model_NewPOST(data: IBlankModelBo, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/model/new`,
        method: 'POST',
        data,
        ...config
      })
    },
/**
   * Model-下载custom-sadi文件
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_Custom_Download_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<ArrayBuffer> {
      return request({
        url: `/graphics/bearer/model/custom/download/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**
   * Model-是否包含自定义构件
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_Custom_Exist_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<IBooleanResponse> {
      return request({
        url: `/graphics/bearer/model/custom/exist/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**Model-保存custom-sadi文件 */
      Model_Custom_SavePOST(data: FormData, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/model/custom/save`,
        method: 'POST',
        data,
        ...config
      })
    },
/**
   * Model-删除custom-sadi文件
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_CustomDELETE(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/model/custom?projectId=${data.projectId}&sadiId=${data.sadiId}`,
        method: 'DELETE',
        ...config
      })
    },
/**
   * Model-获取隐藏的构件索引
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_Hiddens_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<IInt32ListResponse> {
      return request({
        url: `/graphics/bearer/model/hiddens/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**
   * Model-下载配置包
   * @param data.projectId 项目id
* @param data.sadiId sadi id
   */
      Model_Conf_Download_projectId_sadiIdGET(data: {projectId:number | string,sadiId:number | string}, config={}): Promise<ArrayBuffer> {
      return request({
        url: `/graphics/bearer/model/conf/download/${data.projectId}/${data.sadiId}`,
        method: 'GET',
        ...config
      })
    },
/**Model-导入配置包 */
      Model_Conf_ImportPOST(data: FormData, config={}): Promise<IObjectResponse> {
      return request({
        url: `/graphics/bearer/model/conf/import`,
        method: 'POST',
        data,
        ...config
      })
    },
}}