
    /**AddCustomElementBo */
 declare interface IAddCustomElementBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**待添加的构件 */
elements?: INewElementBo[];

    }

    
    /**AddLabelBo */
 declare interface IAddLabelBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**位置 */
location?: number[];
/**图元id */
primitiveId?: number;
/**标签模板id */
templateId?: number;
/**关联的构件id */
elementId?: number;
/**是否自定义构件 */
isCustomElement?: boolean;

    }

    
    /**BatchSetStyleBo */
 declare interface IBatchSetStyleBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**标签 */
labels?: ISimpleLabelBo[];

    }

    
    /**通用response */
 declare interface IBooleanResponse {
code?: IResponseCode;
/**结果对象 */
data?: boolean;
/**返回消息 */
message?: string;

    }

    
    /**CaseTreeVo */
 declare interface ICaseTreeVo {
/**id */
id?: number;
/**名称 */
name?: string;
/**父级id */
parentId?: number;
/**排序 */
order?: number;
/**是否目录 */
isDir?: boolean;
/**缩略图 */
coverPath?: string;
/**子级,可能是目录或者模型 */
children?: ICaseTreeVo[];

    }

    
    /**通用response */
 declare interface ICaseTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ICaseTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**新建色彩方案bo */
 declare interface IColorRecordBo {
/**方案名称 */
name?: string;
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;

    }

    
    /**色彩方案vo */
 declare interface IColorRecordVo {
/**方案id */
id?: number;
/**方案名称 */
name?: string;

    }

    
    /**通用response */
 declare interface IColorRecordVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IColorRecordVo[];
/**返回消息 */
message?: string;

    }

    
    /**CustomUniqueIdVo */
 declare interface ICustomUniqueIdVo {
/**构件id */
elementId?: number;
/**unique id */
uniqueId?: string;

    }

    
    /**通用response */
 declare interface ICustomUniqueIdVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ICustomUniqueIdVo[];
/**返回消息 */
message?: string;

    }

    
    /**DeleteElementBo */
 declare interface IDeleteElementBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**索引集合 */
indices?: number[];
/**自定义构件id集合 */
customElementIds?: number[];

    }

    
    /**构件属性信息 */
 declare interface IElementPropertyVo {
/**id */
elementId?: number;
/**名称 */
name?: string;
/**gloabal id */
uniqueId?: string;
/**构件属性集合 */
properties?: IPropertySetVo[];

    }

    
    /**通用response */
 declare interface IElementPropertyVoResponse {
code?: IResponseCode;
data?: IElementPropertyVo;
/**返回消息 */
message?: string;

    }

    
    /**ElementTreeType */
 declare enum IElementTreeType {
/**专业 */
Major= 0,
/**族类别 */
FamilyCategory= 1,
/**族名称:族类型 */
FamilyElementType= 2,
/**族类型[构件id] */
Component= 3,

    }

    
    /**ElementTreeVo */
 declare interface IElementTreeVo {
/**id */
id?: number;
/**名称 */
name?: string;
type?: IElementTreeType;
/**构件索引 */
index?: number;
/**是否自定义构件 */
isCustom?: boolean;
/**子集 */
children?: IElementTreeVo[];

    }

    
    /**通用response */
 declare interface IElementTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IElementTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**构件vo */
 declare interface IElementVo {
/**id */
id?: number;
/**名称 */
name?: string;
/**唯一id */
uniqueId?: string;
/**国标id */
standardId?: number;
/**索引排序 */
index?: number;
/**box */
box?: string;

    }

    
    /**通用response */
 declare interface IElementVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IElementVo[];
/**返回消息 */
message?: string;

    }

    
    /**通用response */
 declare interface IElementVoResponse {
code?: IResponseCode;
data?: IElementVo;
/**返回消息 */
message?: string;

    }

    
    /**综合方案bo */
 declare interface IGeneralSchemeBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;

    }

    
    /**GeneralSchemeVo */
 declare interface IGeneralSchemeVo {
/**id */
id?: number;
/**名称 */
name?: string;
/**色彩方案 */
colorSchemeId?: number;
/**显影方案 */
visibilitySchemeId?: number;
/**视点方案 */
viewPointSchemeId?: number;
/**视点 */
viewPointItemId?: number;
/**标签方案 */
labelSchemeId?: number;
/**排序 */
order?: number;

    }

    
    /**通用response */
 declare interface IGeneralSchemeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IGeneralSchemeVo[];
/**返回消息 */
message?: string;

    }

    
    /**分组方案bo */
 declare interface IGroupBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**分组名称 */
name?: string;
/**索引集合 */
indices?: number[];
/**自定义构件id */
customElementIds?: number[];

    }

    
    /**通用response */
 declare interface IInt32ListResponse {
code?: IResponseCode;
/**结果对象 */
data?: number[];
/**返回消息 */
message?: string;

    }

    
    /**通用response */
 declare interface IInt32Response {
code?: IResponseCode;
/**结果对象 */
data?: number;
/**返回消息 */
message?: string;

    }

    
    /**标签显示方式 */
 declare enum ILabelDisplayMode {
/**常显 */
Always= 0,
/**悬浮显示 */
Hover= 1,
/**点击显示 */
Click= 2,

    }

    
    /**LabelPageBo */
 declare interface ILabelPageBo {
/**页码 */
page?: number;
/**分页大小 */
pageSize?: number;
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;

    }

    
    /**LabelRecordBo */
 declare interface ILabelRecordBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**方案名称 */
name?: string;

    }

    
    /**LabelRecordVo */
 declare interface ILabelRecordVo {
/**方案id */
id?: number;
/**方案名称 */
name?: string;
/**标签id集合 */
labels?: ILabelVo[];
/**排序 */
order?: number;

    }

    
    /**通用response */
 declare interface ILabelRecordVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ILabelRecordVo[];
/**返回消息 */
message?: string;

    }

    
    /**LabelTemplateVo */
 declare interface ILabelTemplateVo {
/**id */
id?: number;
/**名称 */
name?: string;
type?: ILabelType;
leaderLineType?: ILeaderLineType;
/**模板内容 */
content?: string;
/**是否内置 */
internal?: boolean;
/**缩略图路径 */
coverPath?: string;

    }

    
    /**通用response */
 declare interface ILabelTemplateVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ILabelTemplateVo[];
/**返回消息 */
message?: string;

    }

    
    /**标签类型 */
 declare enum ILabelType {
/**默认 */
Default= 0,
/**固定左侧 */
Fixed_Left= 1,

    }

    
    /**LabelVo */
 declare interface ILabelVo {
id?: number;
/**名称 */
name?: string;
/**位置 */
location?: number[];
displayMode?: ILabelDisplayMode;
type?: ILabelType;
leaderLineType?: ILeaderLineType;
/**内容 */
content?: string;
/**图元id */
primitiveId?: number;
/**标签模板id */
labelTemplateId?: number;
/**关联的构件id */
elementId?: number;
/**是否自定义构件 */
isCustomElement?: boolean;

    }

    
    /**分页模型 */
 declare interface ILabelVoPageResultVo {
/**页码 */
page?: number;
/**分页大小 */
pageSize?: number;
/**总数 */
total?: number;
/**总页数 */
totalPages?: number;
/**分页数据 */
results?: ILabelVo[];

    }

    
    /**通用response */
 declare interface ILabelVoPageResultVoResponse {
code?: IResponseCode;
data?: ILabelVoPageResultVo;
/**返回消息 */
message?: string;

    }

    
    /**通用response */
 declare interface ILabelVoResponse {
code?: IResponseCode;
data?: ILabelVo;
/**返回消息 */
message?: string;

    }

    
    /**引线类型 */
 declare enum ILeaderLineType {
/**无引线 */
None= 0,
/**直线 */
StraightLine= 1,
/**折线 */
Polyline= 2,

    }

    
    /**合并模型树返回 */
 declare interface IMergeTreeVo {
/**doc id */
docId?: number;
/**doc名称 */
docName?: string;
/**构件排序信息 */
indices?: number[];

    }

    
    /**通用response */
 declare interface IMergeTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IMergeTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**ModelFromCaseBo */
 declare interface IModelFromCaseBo {
/**项目id */
projectId?: number;
/**名称 */
name?: string;
/**案例id */
caseFileId?: number;

    }

    
    /**ModelPageBo */
 declare interface IModelPageBo {
/**页码 */
page?: number;
/**分页大小 */
pageSize?: number;
/**项目id */
projectId?: number;

    }

    
    /**ModelVo */
 declare interface IModelVo {
/**id */
id?: number;
/**名称 */
name?: string;
updateTime?: string;

    }

    
    /**分页模型 */
 declare interface IModelVoPageResultVo {
/**页码 */
page?: number;
/**分页大小 */
pageSize?: number;
/**总数 */
total?: number;
/**总页数 */
totalPages?: number;
/**分页数据 */
results?: IModelVo[];

    }

    
    /**通用response */
 declare interface IModelVoPageResultVoResponse {
code?: IResponseCode;
data?: IModelVoPageResultVo;
/**返回消息 */
message?: string;

    }

    
    /**NewElementBo */
 declare interface INewElementBo {
/**构件id */
id?: number;
/**构件名称 */
name?: string;
/**非绘制类构件的ExFileId */
exFileId?: number;
category?: ISADICategory;
/**是否绘制类构件 */
drawable?: boolean;
/**属性信息 */
propertySets?: IPropertySetBo[];

    }

    
    /**通用response */
 declare interface IObjectResponse {
code?: IResponseCode;
/**结果对象 */
data?: undefined;
/**返回消息 */
message?: string;

    }

    
    /**PropertyBo */
 declare interface IPropertyBo {
/**名称 */
name?: string;
/**值 */
value?: string;

    }

    
    /**属性搜索bo */
 declare interface IPropertySearchBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
keySearch?: ISearchBo;
valueSearch?: ISearchBo;

    }

    
    /**属性搜索vo */
 declare interface IPropertySearchVo {
/**构件id */
id?: number;
/**是否自定义构件 */
custom?: boolean;
/**名称 */
name?: string;
/**唯一id */
uniqueId?: string;
/**索引排序 */
index?: number;
/**属性集列表 */
propertySets?: IPropertySetVo[];

    }

    
    /**通用response */
 declare interface IPropertySearchVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IPropertySearchVo[];
/**返回消息 */
message?: string;

    }

    
    /**PropertySetBo */
 declare interface IPropertySetBo {
/**名称 */
name?: string;
/**属性 */
properties?: IPropertyBo[];

    }

    
    /**构件属性集合model */
 declare interface IPropertySetVo {
/**名称 */
name?: string;
/**属性集合 */
properties?: IPropertyVo[];

    }

    
    /**属性Vo */
 declare interface IPropertyVo {
/**名称 */
name?: string;
/**值 */
value?: string;

    }

    
    /**QuerySameSadiPropertyBo */
 declare interface IQuerySameSadiPropertyBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**原生构件id */
elementIds?: number[];
/**自定义构件id */
customElementIds?: number[];

    }

    
    /**排序bo */
 declare interface IRecordSortBo {
/**项目id */
projectId?: number;
/**SADI id */
sadiId?: number;
/**id集合 */
ids?: number[];

    }

    
    /**ReplaceElementBo */
 declare interface IReplaceElementBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**待添加的构件 */
newElements?: INewElementBo[];
/**待删除的索引集合 */
indices?: number[];
/**待删除的自定义构件id集合 */
customElementIds?: number[];

    }

    
    /**返回码枚举 */
 declare enum IResponseCode {
/**操作成功 */
Success= 200,
/**认证失败,请重新登录 */
Unauthorized= 401,
/**权限不足,请联系管理员 */
Forbidden= 403,
/**系统异常 */
Fail= 500,

    }

    
    /**SADICategory */
 declare enum ISADICategory {
/**未定义 */
INVALID= 0,
/**地形 */
OST_Topography= 1,
/**房间 */
OST_Rooms= 2,
/**建筑墙体 */
OST_Walls_Architectural= 3,
/**窗 */
OST_Windows= 4,
/**结构楼板 */
OST_Floors_Structural= 5,
/**幕墙嵌板 */
OST_CurtainWallPanels_Obsolete= 6,
/**幕墙竖梃 */
OST_CurtainWallMullions_Obsolete= 7,
/**天花板 */
OST_Ceilings= 8,
/**楼梯 */
OST_Stairs= 9,
/**屋顶 */
OST_Roofs= 10,
/**结构柱 */
OST_StructuralColumns= 11,
/**结构框架 */
OST_StructuralFraming= 12,
/**栏杆扶手 */
OST_StairsRailing= 13,
/**门 */
OST_Doors= 14,
/**风管 */
OST_DuctCurves= 15,
/**管道 */
OST_PipeCurves= 16,
/**电缆桥架 */
OST_CableTray= 17,
/**风管管件 */
OST_DuctFitting= 18,
/**管件 */
OST_PipeFitting= 19,
/**电缆桥架配件 */
OST_CableTrayFitting= 20,
/**常规模型 */
OST_GenericModel= 21,
/**家具 */
OST_Furniture= 22,
/**卫浴装置 */
OST_PlumbingFixtures= 23,
/**风道末端 */
OST_DuctTerminal= 24,
/**照明设备 */
OST_LightingFixtures= 25,
/**电气设备 */
OST_ElectricalEquipment= 26,
/**喷头 */
OST_Sprinklers= 27,
/**火警设备 */
OST_FireAlarmDevices= 28,
/**管道附件 */
OST_PipeAccessory= 29,
/**线管 */
OST_Conduit= 30,
/**线管配件 */
OST_ConduitFitting= 31,
/**安全设备 */
OST_SecurityDevices= 32,
/**机械设备 */
OST_MechanicalEquipment= 33,
/**植物 */
OST_Planting= 34,
/**专用设备 */
OST_SpecialityEquipment= 35,
/**体量 */
OST_Mass= 36,
/**体量内墙 */
OST_MassInteriorWall= 37,
/**体量分区 */
OST_MassZone= 38,
/**体量外墙 */
OST_MassExteriorWall= 39,
/**体量天窗 */
OST_MassSkylights= 40,
/**体量屋顶 */
OST_MassRoof= 41,
/**体量楼层 */
OST_MassFloor= 42,
/**体量玻璃 */
OST_MassGlazing= 43,
/**停车场 */
OST_Parking= 44,
/**场地 */
OST_Site= 45,
/**建筑地坪 */
OST_BuildingPad= 46,
/**坡道 */
OST_Ramps= 47,
/**幕墙系统 */
OST_CurtaSystem= 48,
/**墙饰条 */
OST_Cornices= 49,
/**家具系统 */
OST_FurnitureSystems= 50,
/**封檐板 */
OST_Fascia= 51,
/**屋檐底板 */
OST_RoofSoffit= 52,
/**檐沟 */
OST_Gutter= 53,
/**柱 */
OST_Columns= 54,
/**扶手 */
OST_RailingHandRail= 55,
/**支座 */
OST_RailingSupport= 56,
/**终端 */
OST_RailingTermination= 57,
/**顶部扶栏 */
OST_RailingTopRail= 58,
/**建筑楼板 */
OST_Floors_Architectural= 59,
/**楼板边缘 */
OST_EdgeSlab= 60,
/**平台 */
OST_StairsLandings= 61,
/**支撑 */
OST_StairsStringerCarriage= 62,
/**梯段 */
OST_StairsRuns= 63,
/**橱柜 */
OST_Casework= 64,
/**环境 */
OST_Entourage= 65,
/**道路 */
OST_Roads= 66,
/**结构墙体 */
OST_Walls_Structural= 67,
/**结构加强板 */
OST_StructuralStiffener= 68,
/**结构基础 */
OST_StructuralFoundation= 69,
/**结构桁架 */
OST_StructuralTruss= 70,
/**结构钢筋 */
OST_Rebar= 71,
/**结构钢筋接头 */
OST_Coupler= 72,
/**剪力钉 */
OST_StructConnectionShearStuds= 73,
/**平板 */
OST_StructConnectionPlates= 74,
/**螺栓 */
OST_StructConnectionBolts= 75,
/**锚固件 */
OST_StructConnectionAnchors= 76,
/**管道占位符 */
OST_PlaceHolderPipes= 77,
/**管道隔热层 */
OST_PipeInsulations= 78,
/**软管 */
OST_FlexPipeCurves= 79,
/**软风管 */
OST_FlexDuctCurves= 80,
/**风管内衬 */
OST_DuctLinings= 81,
/**风管占位符 */
OST_PlaceHolderDucts= 82,
/**风管附件 */
OST_DuctAccessory= 83,
/**风管隔热层 */
OST_DuctInsulations= 84,
/**护理呼叫设备 */
OST_NurseCallDevices= 85,
/**数据设备 */
OST_DataDevices= 86,
/**灯具 */
OST_LightingDevices= 87,
/**电气装置 */
OST_ElectricalFixtures= 88,
/**电话设备 */
OST_TelephoneDevices= 89,
/**通讯设备 */
OST_CommunicationDevices= 90,
/**面积 */
OST_Areas= 91,
/**空间 */
OST_MEPSpaces= 92,
/**HAVC区 */
OST_HVAC_Zones= 93,
/**MEP预制保护层 */
OST_FabricationContainment= 94,
/**MEP预制支架 */
OST_FabricationHangers= 95,
/**MEP预制管网 */
OST_FabricationDuctwork= 96,
/**MEP预制管道 */
OST_FabricationPipework= 97,
/**内衬 */
OST_FabricationDuctworkLining= 98,
/**隔热层 */
OST_FabricationPipeworkInsulation= 99,

    }

    
    /**SADIGroup */
 declare interface ISADIGroup {
/**id */
id?: number;
/**创建时间 */
createTime?: string;
/**更新时间 */
updateTime?: string;
/**名称 */
name?: string;
/**sadi id */
sadiId?: number;
/**索引集合 */
indices?: number[];
/**顺序 */
order?: number;
/**自定义构件id */
customElementIds?: number[];

    }

    
    /**通用response */
 declare interface ISADIGroupListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISADIGroup[];
/**返回消息 */
message?: string;

    }

    
    /**SADIStandard */
 declare interface ISADIStandard {
/**id */
id?: number;
/**创建时间 */
createTime?: string;
/**更新时间 */
updateTime?: string;
name?: string;
parentId?: number;
code?: string;

    }

    
    /**通用response */
 declare interface ISADIStandardListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISADIStandard[];
/**返回消息 */
message?: string;

    }

    
    /**SU组件树 */
 declare interface ISUComponentTreeVo {
/**组件id */
id?: number;
/**组件名称 */
name?: string;
type?: ISuComponentType;
/**构件排序信息 */
indices?: number[];
/**子节点信息 */
children?: ISUComponentTreeVo[];

    }

    
    /**通用response */
 declare interface ISUComponentTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISUComponentTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**SU图层树 */
 declare interface ISULayerTreeVo {
/**图层id */
id?: number;
/**图层名称 */
name?: string;
type?: ISuLayerNodeType;
/**构件排序信息 */
indices?: number[];
/**子节点信息 */
children?: ISULayerTreeVo[];

    }

    
    /**通用response */
 declare interface ISULayerTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISULayerTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**SameSadiPropertyVo */
 declare interface ISameSadiPropertyVo {
/**名称 */
name?: string;
/**值 */
value?: string;

    }

    
    /**通用response */
 declare interface ISameSadiPropertyVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISameSadiPropertyVo[];
/**返回消息 */
message?: string;

    }

    
    /**SaveLabelRecordBo */
 declare interface ISaveLabelRecordBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**方案名称 */
name?: string;
/**标签方案id */
id?: number;
/**标签实例id集合 */
labelIds?: number[];

    }

    
    /**SceneTreeVo */
 declare interface ISceneTreeVo {
/**id */
id?: number;
/**名称 */
name?: string;
/**父级id */
parentId?: number;
/**排序 */
order?: number;
/**是否目录 */
isDir?: boolean;
/**缩略图 */
coverPath?: string;
category?: ISADICategory;
/**子级,可能是目录或者模型 */
children?: ISceneTreeVo[];

    }

    
    /**通用response */
 declare interface ISceneTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISceneTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**搜索bo */
 declare interface ISearchBo {
/**关键字 */
keyword?: string;

    }

    
    /**剖切类型 */
 declare enum ISectionType {
/**无 */
None= 0,
/**正交剖切 */
Box= 1,
/**面剖切 */
Plane= 2,

    }

    
    /**SimpleElementPropertyBo */
 declare interface ISimpleElementPropertyBo {
/**构件id */
elementId?: number;
/**是否自定义构件 */
custom?: boolean;
/**新增或修改的属性 */
newUpdateProperties?: IPropertyBo[];
/**删除的属性 */
removePropertyDefNames?: string[];

    }

    
    /**SimpleLabelBo */
 declare interface ISimpleLabelBo {
/**标签id */
id?: number;
/**标签内容 */
content?: string;
/**图元id */
primitiveId?: number;
/**标签模板id */
templateId?: number;

    }

    
    /**空间树信息 */
 declare interface ISpaceTreeVo {
/**构件id */
id?: number;
/**构件索引 */
index?: number;
/**是否自定义构件 */
isCustom?: boolean;
/**构件名称 */
name?: string;

    }

    
    /**通用response */
 declare interface ISpaceTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: ISpaceTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**国标条文对应构件model */
 declare interface IStandardVo {
/**国标条文id */
standardId?: number;
/**索引集合 */
indices?: number[];

    }

    
    /**通用response */
 declare interface IStandardVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IStandardVo[];
/**返回消息 */
message?: string;

    }

    
    /**楼层树 */
 declare interface IStoreyTreeVo {
/**名称 */
name?: string;
/**构件索引 */
indices?: number[];

    }

    
    /**通用response */
 declare interface IStoreyTreeVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IStoreyTreeVo[];
/**返回消息 */
message?: string;

    }

    
    /**SuComponentType */
 declare enum ISuComponentType {
/**Group */
Group= 0,
/**Instance */
Instance= 1,
/**Surface */
Surface= 2,

    }

    
    /**SuLayerNodeType */
 declare enum ISuLayerNodeType {
/**Layer */
Layer= 0,
/**Folder */
Folder= 1,

    }

    
    /**UniqueIdVo */
 declare interface IUniqueIdVo {
/**构件id */
elementId?: number;
/**unique id */
uniqueId?: string;
/**索引 */
index?: number;

    }

    
    /**通用response */
 declare interface IUniqueIdVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IUniqueIdVo[];
/**返回消息 */
message?: string;

    }

    
    /**UpdateElementBo */
 declare interface IUpdateElementBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**构件 */
elements?: ISimpleElementPropertyBo[];

    }

    
    /**修改综合方案bo */
 declare interface IUpdateGeneralSchemeBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;
/**id */
id?: number;
/**色彩方案id */
colorSchemeId?: number;
/**显隐方案id */
visibilitySchemeId?: number;
/**视点方案id */
viewPointSchemeId?: number;
/**视点id */
viewPointItemId?: number;
/**标签方案id */
labelSchemeId?: number;

    }

    
    /**修改分组方案bo */
 declare interface IUpdateGroupBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**分组名称 */
name?: string;
/**索引集合 */
indices?: number[];
/**自定义构件id */
customElementIds?: number[];
/**分组方案id */
id?: number;

    }

    
    /**UpdateLabelBo */
 declare interface IUpdateLabelBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**位置 */
location?: number[];
/**图元id */
primitiveId?: number;
/**标签模板id */
templateId?: number;
/**关联的构件id */
elementId?: number;
/**是否自定义构件 */
isCustomElement?: boolean;
/**标签id */
id?: number;
/**名称 */
name?: string;
displayMode?: ILabelDisplayMode;
/**内容 */
content?: string;

    }

    
    /**修改视点方案bo */
 declare interface IUpdateViewPointBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;
/**id */
id?: number;

    }

    
    /**修改视点bo */
 declare interface IUpdateViewPointItemBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**视点方案id */
recordId?: number;
/**名称 */
name?: string;
theta?: number;
phi?: number;
factor?: number;
orthographic?: boolean;
movement?: number[];
/**视角切换顺序 */
order?: number;
/**切换视角时间 */
time?: number;
/**视点id */
id?: number;

    }

    
    /**修改显隐方案模型 */
 declare interface IUpdateVisibilityRecordBo {
/**项目id */
projectId?: number;
/**名称 */
name?: string;
/**sadi id */
sadiId?: number;
/**id */
id?: number;
/**构件索引 */
indices?: number[];
type?: IVisibilityType;
sectionType?: ISectionType;
/**SectionBox */
sectionBox?: number[];
/**冻结构件 */
frozen?: number[];
/**自定义构件id */
customElementIds?: number[];
/**冻结自定义构件id */
frozenCustomElementIds?: number[];

    }

    
    /**视点方案bo */
 declare interface IViewPointBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;

    }

    
    /**视点bo */
 declare interface IViewPointItemBo {
/**项目id */
projectId?: number;
/**sadi id */
sadiId?: number;
/**视点方案id */
recordId?: number;
/**名称 */
name?: string;
theta?: number;
phi?: number;
factor?: number;
orthographic?: boolean;
movement?: number[];
/**视角切换顺序 */
order?: number;
/**切换视角时间 */
time?: number;

    }

    
    /**视点排序bo */
 declare interface IViewPointItemSortBo {
/**项目id */
projectId?: number;
/**SADI id */
sadiId?: number;
/**视点方案id */
viewPointId?: number;
/**视点id集合 */
ids?: number[];

    }

    
    /**视点vo */
 declare interface IViewPointItemVo {
/**id */
id?: number;
/**名称 */
name?: string;
theta?: number;
phi?: number;
factor?: number;
orthographic?: boolean;
movement?: number[];
/**视角切换顺序 */
order?: number;
/**切换视角时间 */
time?: number;

    }

    
    /**通用response */
 declare interface IViewPointItemVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IViewPointItemVo[];
/**返回消息 */
message?: string;

    }

    
    /**视点方案vo */
 declare interface IViewPointVo {
/**id */
id?: number;
/**sadi id */
sadiId?: number;
/**名称 */
name?: string;
/**排序 */
order?: number;

    }

    
    /**通用response */
 declare interface IViewPointVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IViewPointVo[];
/**返回消息 */
message?: string;

    }

    
    /**显隐方案bo */
 declare interface IVisibilityRecordBo {
/**项目id */
projectId?: number;
/**名称 */
name?: string;
/**sadi id */
sadiId?: number;

    }

    
    /**显隐类型 */
 declare enum IVisibilityType {
/**显示 */
Show= 0,
/**隐藏 */
Hide= 1,

    }

    
    /**VsisibilityRecordVo */
 declare interface IVsisibilityRecordVo {
/**id */
id?: number;
/**名称 */
name?: string;
/**构件索引 */
indices?: number[];
type?: IVisibilityType;
sectionType?: ISectionType;
/**SectionBox */
sectionBox?: number[];
/**冻结构件 */
frozen?: number[];
/**顺序 */
order?: number;
/**自定义构件id */
customElementIds?: number[];
/**冻结自定义构件id */
frozenCustomElementIds?: number[];

    }

    
    /**通用response */
 declare interface IVsisibilityRecordVoListResponse {
code?: IResponseCode;
/**结果对象 */
data?: IVsisibilityRecordVo[];
/**返回消息 */
message?: string;

    }

    