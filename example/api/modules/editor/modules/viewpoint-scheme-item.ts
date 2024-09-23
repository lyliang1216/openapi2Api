import request from "@/utils/service";
/**ViewpointSchemeItem */
export function useViewpointSchemeItemApi() {
  return {
    /**ViewpointSchemeItem-新建视点
     */
    ViewpointSchemeItemPOST(
      data: IViewPointItemBo,
      config = {}
    ): Promise<IInt32Response> {
      return request({
        url: `/viewpoint-scheme-item`,

        method: "POST",
        data,
        ...config,
      });
    },
    /**ViewpointSchemeItem-修改视点
     */
    ViewpointSchemeItemPUT(
      data: IUpdateViewPointItemBo,
      config = {}
    ): Promise<IObjectResponse> {
      return request({
        url: `/viewpoint-scheme-item`,

        method: "PUT",
        data,
        ...config,
      });
    },
    /**ViewpointSchemeItem-删除视点
     * @param data.projectId 项目id
     * @param data.sadiId sadi id
     * @param data.recordId 视点方案id
     * @param data.id 视点id*/
    ViewpointSchemeItem_projectId_sadiId_recordId_idDELETE(
      data: {
        projectId: number | string;
        sadiId: number | string;
        recordId: number | string;
        id: number | string;
      },
      config = {}
    ): Promise<IObjectResponse> {
      return request({
        url: `/viewpoint-scheme-item/${data.projectId}/${data.sadiId}/${data.recordId}/${data.id}`,

        method: "DELETE",
        data,
        ...config,
      });
    },
    /**ViewpointSchemeItem-获取视点
     * @param data.projectId 项目id
     * @param data.sadiId sadi id
     * @param data.recordId 方案Id*/
    ViewpointSchemeItem_projectId_sadiId_recordIdGET(
      data: {
        projectId: number | string;
        sadiId: number | string;
        recordId: number | string;
      },
      config = {}
    ): Promise<IViewPointItemVoListResponse> {
      return request({
        url: `/viewpoint-scheme-item/${data.projectId}/${data.sadiId}/${data.recordId}`,

        method: "GET",
        data,
        ...config,
      });
    },
    /**ViewpointSchemeItem-视点排序
     */
    ViewpointSchemeItem_SortPUT(
      data: IViewPointItemSortBo,
      config = {}
    ): Promise<IObjectResponse> {
      return request({
        url: `/viewpoint-scheme-item/sort`,

        method: "PUT",
        data,
        ...config,
      });
    },
  };
}
