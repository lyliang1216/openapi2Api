/**MenuTreeVO */
declare interface IMenuTreeVO {
  id?: number;
  /**父节点 */
  parent?: number;
  /**名称 */
  name?: string;
  /**编码 */
  code?: string;
  /**图标 */
  icon?: string;
  /**顺序 */
  sort?: number;
  /**外部数据 */
  extra?: string;
  /**标识符 */
  identifier?: string[];
  children?: IMenuTreeVO[];
}

/**PersonalizationVO */
declare interface IPersonalizationVO {
  /**系统名称 */
  name?: string;
  /**logo */
  logo?: string;
  /**顶部栏颜色 */
  color?: string;
  /**背景 */
  background?: string;
}

/**UserOperationRecordVO */
declare interface IUserOperationRecordVO {
  id?: number;
  /**日志类型 */
  type?: number;
  /**用户名 */
  username?: string;
  /**用户姓名 */
  nickname?: string;
  /**请求地址 */
  uri?: string;
  /**菜单 */
  menu?: string;
  /**请求参数 */
  request?: string;
  /**请求类型 */
  requestType?: string;
  /**请求结果 */
  result?: number;
  /**登录ip */
  ip?: string;
  /**日志标题 */
  name?: string;
  /**错误消息 */
  errorMsg?: string;
  /**创建时间 */
  createTime?: string;
  /**请求时间 */
  costTime?: number;
}

/**JSObject */
declare interface IJSObject {}

/**key */
declare interface IKey {}

declare interface I {}

/**PhysicalPointVO */
declare interface IPhysicalPointVO {
  id?: number;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**点位配置信息 */
  configuration?: IJSONObject;
  /**关联设备 */
  deviceNumber?: string;
  /**通道 */
  channelCode?: string;
}

/**AlgorithmVO */
declare interface IAlgorithmVO {
  /**id */
  id?: number;
  /**名称 */
  name?: string;
  /**编码(英文名) */
  code?: string;
  /**流程id */
  flowId?: string;
  /**返回值类型 */
  returnType?: string;
  /**返回值 */
  returnValue?: string;
  /**创建时间 */
  createTime?: string;
  /**更新时间 */
  updateTime?: string;
}

/**VisualRecord */
declare interface IVisualRecord {
  /**主键 */
  id?: number;
  /**创建人 */
  createUser?: number;
  /**创建部门 */
  createDept?: number;
  /**创建时间 */
  createTime?: string;
  /**更新人 */
  updateUser?: number;
  /**更新时间 */
  updateTime?: string;
  /**业务状态 */
  status?: number;
  /**是否已删除 */
  isDeleted?: number;
  /**名称 */
  name?: string;
  /**数据地址 */
  url?: string;
  /**数据类型 */
  dataType?: number;
  /**模块类型 */
  dataModule?: string;
  /**数据方法 */
  dataMethod?: string;
  /**数据请求头 */
  dataHeader?: string;
  /**数据集 */
  data?: string;
  /**数据查询 */
  dataQuery?: string;
  /**数据查询类型 */
  dataQueryType?: string;
  /**数据格式化 */
  dataFormatter?: string;
  /**ws地址 */
  wsUrl?: string;
  /**mqtt地址 */
  mqttUrl?: string;
  /**mqtt配置 */
  mqttConfig?: string;
}

/**Handler */
declare interface IHandler {}

/**ResponseListMenuTreeVO */
declare interface IResponseListMenuTreeVO {
  code?: number;
  message?: string;
  data?: IMenuTreeVO[];
}

/**LoginDTO */
declare interface ILoginDTO {
  username?: string;
  password?: string;
}

/**InputStream */
declare interface IInputStream {}

/**Response«PersonalizationVO» */
declare interface IResponsePersonalizationVO {
  code?: number;
  message?: string;
  data?: IPersonalizationVO;
}

/**SpaceTreeVO */
declare interface ISpaceTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**描述 */
  description?: string;
}

/**SystemTypeTreeVO */
declare interface ISystemTypeTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
}

/**EnergyTypeTreeVO */
declare interface IEnergyTypeTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**单位 */
  unit?: string;
  /**碳因子单位 */
  carbonUnit?: string;
  /**碳排放因子 */
  carbonFactor?: number;
  /**标准煤系数 */
  coalRatio?: number;
  /**煤系数单位 */
  coalUnit?: string;
}

/**IconTreeVO */
declare interface IIconTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**名称 */
  name?: string;
  /**上传人 */
  creator?: string;
  /**图片 */
  picture?: string;
  /**类型（1-层级2-图片） */
  type?: number;
  /**更新时间 */
  updateTime?: string;
}

/**DeviceTypeTreeVO */
declare interface IDeviceTypeTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**图标 */
  picture?: string;
  /**描述 */
  description?: string;
  /**相关资料 */
  relatedFile?: string;
  /**更新时间 */
  updateTime?: string;
}

/**LogicPointTemplateVO */
declare interface ILogicPointTemplateVO {
  id?: number;
  /**关联设备类型 */
  deviceTypeCode?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**是否可写（1是，2否） */
  isWrite?: number;
  /**创建时间 */
  createTime?: string;
  /**更新时间 */
  updateTime?: string;
}

/**JSONObject */
declare interface IJSONObject {
  key?: IKey2;
}

/**ResponseListAlarmTemplateVO */
declare interface IResponseListAlarmTemplateVO {
  code?: number;
  message?: string;
  data?: IAlarmTemplateVO[];
}

/**RVisualRecord */
declare interface IRVisualRecord {
  /**状态码 */
  code?: number;
  /**是否成功 */
  success?: boolean;
  /**承载数据 */
  data?: IVisualRecord;
  /**返回消息 */
  msg?: string;
}

/**ResponseString */
declare interface IResponseString {
  code?: number;
  message?: string;
  data?: string;
}

/**ModifyPasswordDTO */
declare interface IModifyPasswordDTO {
  oldPassword?: string;
  newPassword?: string;
  newPasswordConfirm?: string;
}

/**PageRoleVO */
declare interface IPageRoleVO {
  /**查询数据列表 */
  records?: IRoleVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**File */
declare interface IFile {
  /**This abstract pathname's normalized pathname string. A normalized
pathname string uses the default name-separator character and does not
contain any duplicate or redundant separators. */
  path?: string;
  /**Returns the name of the file or directory denoted by this abstract
pathname.  This is just the last name in the pathname's name
sequence.  If the pathname's name sequence is empty, then the empty
string is returned. */
  name?: string;
  /**Returns the pathname string of this abstract pathname's parent, or
{@code null} if this pathname does not name a parent directory.

<p> The <em>parent</em> of an abstract pathname consists of the
pathname's prefix, if any, and each name in the pathname's name
sequence except for the last.  If the name sequence is empty then
the pathname does not name a parent directory. */
  parent?: string;
  /**Returns the abstract pathname of this abstract pathname's parent,
or{@code null} if this pathname does not name a parent
directory.

<p> The <em>parent</em> of an abstract pathname consists of the
pathname's prefix, if any, and each name in the pathname's name
sequence except for the last.  If the name sequence is empty then
the pathname does not name a parent directory. */
  parentFile?: IFile;
  /**Tests whether this abstract pathname is absolute.  The definition of
absolute pathname is system dependent.  On UNIX systems, a pathname is
absolute if its prefix is{@code "/"}.  On Microsoft Windows systems, a
pathname is absolute if its prefix is a drive specifier followed by
{@code "\\"}, or if its prefix is{@code "\\\\"}. */
  absolute?: boolean;
  /**Returns the absolute pathname string of this abstract pathname.

<p> If this abstract pathname is already absolute, then the pathname
string is simply returned as if by the{@link #getPath}
method.  If this abstract pathname is the empty abstract pathname then
the pathname string of the current user directory, which is named by the
system property{@code user.dir}, is returned.  Otherwise this
pathname is resolved in a system-dependent way.  On UNIX systems, a
relative pathname is made absolute by resolving it against the current
user directory.  On Microsoft Windows systems, a relative pathname is made absolute
by resolving it against the current directory of the drive named by the
pathname, if any; if not, it is resolved against the current user
directory. */
  absolutePath?: string;
  /**Returns the abstract pathname of this abstract pathname's parent,
or{@code null} if this pathname does not name a parent
directory.

<p> The <em>parent</em> of an abstract pathname consists of the
pathname's prefix, if any, and each name in the pathname's name
sequence except for the last.  If the name sequence is empty then
the pathname does not name a parent directory. */
  absoluteFile?: IFile;
  /**Returns the canonical pathname string of this abstract pathname.

<p> A canonical pathname is both absolute and unique.  The precise
definition of canonical form is system-dependent.  This method first
converts this pathname to absolute form if necessary, as if by invoking the
{@link #getAbsolutePath} method, and then maps it to its unique form in a
system-dependent way.  This typically involves removing redundant names
such as{@code "."} and{@code ".."} from the pathname, resolving
symbolic links (on UNIX platforms), and converting drive letters to a
standard case (on Microsoft Windows platforms).

<p> Every pathname that denotes an existing file or directory has a
unique canonical form.  Every pathname that denotes a nonexistent file
or directory also has a unique canonical form.  The canonical form of
the pathname of a nonexistent file or directory may be different from
the canonical form of the same pathname after the file or directory is
created.  Similarly, the canonical form of the pathname of an existing
file or directory may be different from the canonical form of the same
pathname after the file or directory is deleted. */
  canonicalPath?: string;
  /**Returns the abstract pathname of this abstract pathname's parent,
or{@code null} if this pathname does not name a parent
directory.

<p> The <em>parent</em> of an abstract pathname consists of the
pathname's prefix, if any, and each name in the pathname's name
sequence except for the last.  If the name sequence is empty then
the pathname does not name a parent directory. */
  canonicalFile?: IFile;
  /**Tests whether the file denoted by this abstract pathname is a
directory.

<p> Where it is required to distinguish an I/O exception from the case
that the file is not a directory, or where several attributes of the
same file are required at the same time, then the{@link
    * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
    * Files.readAttributes} method may be used. */
  directory?: boolean;
  /**Tests whether the file denoted by this abstract pathname is a normal
file.  A file is <em>normal</em> if it is not a directory and, in
addition, satisfies other system-dependent criteria.  Any non-directory
file created by a Java application is guaranteed to be a normal file.

<p> Where it is required to distinguish an I/O exception from the case
that the file is not a normal file, or where several attributes of the
same file are required at the same time, then the{@link
    * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
    * Files.readAttributes} method may be used. */
  file?: boolean;
  /**Tests whether the file named by this abstract pathname is a hidden
file.  The exact definition of <em>hidden</em> is system-dependent.  On
UNIX systems, a file is considered to be hidden if its name begins with
a period character ({@code '.'}).  On Microsoft Windows systems, a file is
considered to be hidden if it has been marked as such in the filesystem. */
  hidden?: boolean;
  /**Sets the last-modified time of the file or directory named by this
abstract pathname.

<p> All platforms support file-modification times to the nearest second,
but some provide more precision.  The argument will be truncated to fit
the supported precision.  If the operation succeeds and no intervening
operations on the file take place, then the next invocation of the
{@link #lastModified} method will return the (possibly
truncated){@code time} argument that was passed to this method. */
  lastModified?: number;
  /**A convenience method to set the owner's write permission for this abstract
pathname. On some platforms it may be possible to start the Java virtual
machine with special privileges that allow it to modify files that
disallow write operations.

<p> An invocation of this method of the form{@code file.setWritable(arg)}
behaves in exactly the same way as the invocation

{@snippet lang=java :
    *     file.setWritable(arg, true)
    * } */
  writable?: boolean;
  /**A convenience method to set the owner's read permission for this abstract
pathname. On some platforms it may be possible to start the Java virtual
machine with special privileges that allow it to read files that are
marked as unreadable.

<p>An invocation of this method of the form{@code file.setReadable(arg)}
behaves in exactly the same way as the invocation

{@snippet lang=java :
    *     file.setReadable(arg, true)
    * } */
  readable?: boolean;
  /**A convenience method to set the owner's execute permission for this
abstract pathname. On some platforms it may be possible to start the Java
virtual machine with special privileges that allow it to execute files
that are not marked executable.

<p>An invocation of this method of the form{@code file.setExcutable(arg)}
behaves in exactly the same way as the invocation

{@snippet lang=java :
    *     file.setExecutable(arg, true)
    * } */
  executable?: boolean;
  /**Returns the size of the partition <a href="#partName">named</a> by this
abstract pathname. If the total number of bytes in the partition is
greater than{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be
returned. */
  totalSpace?: number;
  /**Returns the number of unallocated bytes in the partition <a
href="#partName">named</a> by this abstract path name.  If the
number of unallocated bytes in the partition is greater than
{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be returned.

<p> The returned number of unallocated bytes is a hint, but not
a guarantee, that it is possible to use most or any of these
bytes.  The number of unallocated bytes is most likely to be
accurate immediately after this call.  It is likely to be made
inaccurate by any external I/O operations including those made
on the system outside of this virtual machine.  This method
makes no guarantee that write operations to this file system
will succeed. */
  freeSpace?: number;
  /**Returns the number of bytes available to this virtual machine on the
partition <a href="#partName">named</a> by this abstract pathname.  If
the number of available bytes in the partition is greater than
{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be returned.
When possible, this method checks for write permissions and other
operating system restrictions and will therefore usually provide a more
accurate estimate of how much new data can actually be written than
{@link #getFreeSpace}.

<p> The returned number of available bytes is a hint, but not a
guarantee, that it is possible to use most or any of these bytes.  The
number of available bytes is most likely to be accurate immediately
after this call.  It is likely to be made inaccurate by any external
I/O operations including those made on the system outside of this
virtual machine.  This method makes no guarantee that write operations
to this file system will succeed. */
  usableSpace?: number;
}

/**Page«UserOperationRecordVO» */
declare interface IPageUserOperationRecordVO {
  records?: IUserOperationRecordVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponseListSpaceTreeVO */
declare interface IResponseListSpaceTreeVO {
  code?: number;
  message?: string;
  data?: ISpaceTreeVO[];
}

/**ResponseListSystemTypeTreeVO */
declare interface IResponseListSystemTypeTreeVO {
  code?: number;
  message?: string;
  data?: ISystemTypeTreeVO[];
}

/**ResponseListEnergyTypeTreeVO */
declare interface IResponseListEnergyTypeTreeVO {
  code?: number;
  message?: string;
  data?: IEnergyTypeTreeVO[];
}

/**ResponseListIconTreeVO */
declare interface IResponseListIconTreeVO {
  code?: number;
  message?: string;
  data?: IIconTreeVO[];
}

/**MenuListVO */
declare interface IMenuListVO {
  id?: number;
  /**父节点 */
  parent?: number;
  /**名称 */
  name?: string;
  /**编码 */
  code?: string;
  /**图标 */
  icon?: string;
  /**顺序 */
  sort?: number;
  /**外部数据 */
  extra?: string;
  /**标识符 */
  identifier?: string[];
}

/**ResponseListDeviceTypeTreeVO */
declare interface IResponseListDeviceTypeTreeVO {
  code?: number;
  message?: string;
  data?: IDeviceTypeTreeVO[];
}

/**key1 */
declare interface IKey1 {}

/**SystemConfigurationVO */
declare interface ISystemConfigurationVO {
  id?: number;
  /**配置编码 */
  code?: string;
  /**描述 */
  description?: string;
  /**参数详情 */
  params?: IObject;
}

/**DeviceVO */
declare interface IDeviceVO {
  id?: number;
  /**名称 */
  name?: string;
  /**设备编号 */
  number?: string;
  /**空间编号 */
  spaceCode?: string;
  /**空间名称 */
  spaceName?: string;
  /**设备类型 */
  deviceTypeCode?: string;
  /**设备类型名称 */
  deviceTypeName?: string;
  /**系统类型 */
  systemTypeCode?: string;
  /**系统类型名称 */
  systemTypeName?: string;
  /**能耗类型 */
  energyTypeCode?: string;
  /**能耗类型名称 */
  energyTypeName?: string;
  /**描述 */
  description?: string;
  /**关联设备编码 */
  relatedDeviceNumber?: string;
  /**关联设备名称 */
  relatedDeviceName?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**是否控制器（1是，2否） */
  isController?: number;
  /**通道是否启用（1启用，2禁用） */
  channelEnable?: number;
  /**协议（1-Modbus RTU，2-modbus TCP，3-Bacnet，4-Mqtt，5-Knx，6-OPC UA，7-Http） */
  protocol?: number;
  /**通道编码 */
  channelCode?: string;
  /**点位配置信息 */
  channelConfiguration?: IJSONObject;
  /**通信状态 */
  communicationState?: string;
  /**连接状态 */
  connectionState?: string;
  /**故障状态 */
  faultState?: string;
  /**控制状态 */
  controlState?: string;
  /**运行状态 */
  runningState?: string;
}

/**PagePhysicalPointVO */
declare interface IPagePhysicalPointVO {
  /**查询数据列表 */
  records?: IPhysicalPointVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**PageAlgorithmVO */
declare interface IPageAlgorithmVO {
  records?: IAlgorithmVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**DeviceOperationRecordPageVO */
declare interface IDeviceOperationRecordPageVO {
  id?: number;
  /**名称 */
  name?: string;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**默认值 */
  defaultData?: string;
  /**操作来源 */
  source?: number;
  /**执行结果(1:成功，0:错误) */
  result?: number;
  /**信息内容 */
  resultMsg?: string;
  /**操作类型  是否软件下发 */
  isSoftwareSend?: boolean;
  /**原始值 记录下发当时的值 */
  originalValue?: string;
  /**点位配置信息 */
  setValue?: IJSONObject;
  /**创建时间 */
  createTime?: string;
}

/**VisualRecordVO */
declare interface IVisualRecordVO {
  /**主键 */
  id?: number;
  /**数据名称 */
  name?: string;
  /**数据类型 */
  dataType?: number;
  /**模块类型 */
  dataModule?: string;
}

/**MapString */
declare interface IMapString {
  key?: string;
}

/**MenuDTO */
declare interface IMenuDTO {
  /**父节点 */
  parent?: number;
  /**名称 */
  name?: string;
  /**编码 */
  code?: string;
  /**图标 */
  icon?: string;
  /**顺序 */
  sort?: number;
  /**外部数据 */
  extra?: string;
  identifier?: string[];
}

/**RoleVO */
declare interface IRoleVO {
  id?: number;
  /**名称 */
  name?: string;
  /**描述 */
  description?: string;
}

/**ResponsePageRoleVO */
declare interface IResponsePageRoleVO {
  code?: number;
  message?: string;
  data?: IPageRoleVO;
}

/**URI */
declare interface IURI {
  /**The string form of this URI. */
  string?: string;
  /**Tells whether or not this URI is absolute.

<p> A URI is absolute if, and only if, it has a scheme component. </p> */
  absolute?: boolean;
  /**Tells whether or not this URI is opaque.

<p> A URI is opaque if, and only if, it is absolute and its
scheme-specific part does not begin with a slash character ('/').
An opaque URI has a scheme, a scheme-specific part, and possibly
a fragment; all other components are undefined. </p> */
  opaque?: boolean;
  /**Returns the raw scheme-specific part of this URI.  The scheme-specific
part is never undefined, though it may be empty.

<p> The scheme-specific part of a URI only contains legal URI
characters. </p> */
  rawSchemeSpecificPart?: string;
  /**Returns the raw authority component of this URI.

<p> The authority component of a URI, if defined, only contains the
commercial-at character ({@code '@'}) and characters in the
<i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and <i>other</i>
categories.  If the authority is server-based then it is further
constrained to have valid user-information, host, and port
components. </p> */
  rawAuthority?: string;
  /**Returns the raw user-information component of this URI.

<p> The user-information component of a URI, if defined, only contains
characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and
<i>other</i> categories. </p> */
  rawUserInfo?: string;
  /**Returns the raw path component of this URI.

<p> The path component of a URI, if defined, only contains the slash
character ({@code '/'}), the commercial-at character ({@code '@'}),
and characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>,
and <i>other</i> categories. </p> */
  rawPath?: string;
  /**Returns the raw query component of this URI.

<p> The query component of a URI, if defined, only contains legal URI
characters. </p> */
  rawQuery?: string;
  /**Returns the raw fragment component of this URI.

<p> The fragment component of a URI, if defined, only contains legal URI
characters. </p> */
  rawFragment?: string;
}

/**Response«Page«UserOperationRecordVO»» */
declare interface IResponsePageUserOperationRecordVO {
  code?: number;
  message?: string;
  data?: IPageUserOperationRecordVO;
}

/**UserLoginInfoVO */
declare interface IUserLoginInfoVO {
  token?: string;
  userVO?: IUserVO;
}

/**PersonalizationDTO */
declare interface IPersonalizationDTO {
  name?: string;
  logo?: string;
  color?: string;
  background?: string;
}

/**IconVO */
declare interface IIconVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  /**名称 */
  name?: string;
  /**上传人 */
  creator?: string;
  /**图片 */
  picture?: string;
  /**类型（1-层级2-图片） */
  type?: number;
}

/**ResponseListMenuListVO */
declare interface IResponseListMenuListVO {
  code?: number;
  message?: string;
  data?: IMenuListVO[];
}

/**PageLogicPointTemplateVO */
declare interface IPageLogicPointTemplateVO {
  /**查询数据列表 */
  records?: ILogicPointTemplateVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**Object */
declare interface IObject {}

/**ResponseSystemConfigurationVO */
declare interface IResponseSystemConfigurationVO {
  code?: number;
  message?: string;
  data?: ISystemConfigurationVO;
}

/**JSONArray */
declare interface IJSONArray {}

/**ResponsePagePhysicalPointVO */
declare interface IResponsePagePhysicalPointVO {
  code?: number;
  message?: string;
  data?: IPagePhysicalPointVO;
}

/**DeviceTypeVO */
declare interface IDeviceTypeVO {
  /**id */
  id?: number;
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**图标 */
  picture?: string;
  /**描述 */
  description?: string;
  /**相关资料 */
  relatedFile?: string;
  /**排序 */
  sort?: number;
}

/**ResponsePageAlgorithmVO */
declare interface IResponsePageAlgorithmVO {
  code?: number;
  message?: string;
  data?: IPageAlgorithmVO;
}

/**MediaType */
declare interface IMediaType {
  type?: string;
  subtype?: string;
  parameters?: IMapString;
  toStringValue?: string;
}

/**MenuEditDTO */
declare interface IMenuEditDTO {
  id?: number;
  name?: string;
  extra?: string;
}

/**UserVO */
declare interface IUserVO {
  id?: number;
  /**账户 */
  username?: string;
  /**昵称 */
  nickname?: string;
  /**手机号 */
  phone?: string;
  /**是否启用 */
  isEnable?: string;
  roles?: IRoleVO[];
  /**创建时间 */
  createTime?: string;
}

/**ResponseEntity«Resource» */
declare interface IResponseEntityResource {
  /**Return an{@link InputStream} for the content of an underlying resource.
<p>It is usually expected that every such call creates a <i>fresh</i> stream.
<p>This requirement is particularly important when you consider an API such
as JavaMail, which needs to be able to read the stream multiple times when
creating mail attachments. For such a use case, it is <i>required</i>
that each{@code getInputStream()} call returns a fresh stream. */
  inputStream?: IInputStream;
  /**Indicate whether non-empty contents of this resource can be read via
{@link #getInputStream()}.
<p>Will be{@code true} for typical resource descriptors that exist
since it strictly implies{@link #exists()} semantics as of 5.1.
Note that actual content reading may still fail when attempted.
However, a value of{@code false} is a definitive indication
that the resource content cannot be read. */
  readable?: boolean;
  /**Indicate whether this resource represents a handle with an open stream.
If{@code true}, the InputStream cannot be read multiple times,
and must be read and closed to avoid resource leaks.
<p>Will be{@code false} for typical resource descriptors. */
  open?: boolean;
  /**Returns the abstract pathname of this abstract pathname's parent,
or{@code null} if this pathname does not name a parent
directory.

<p> The <em>parent</em> of an abstract pathname consists of the
pathname's prefix, if any, and each name in the pathname's name
sequence except for the last.  If the name sequence is empty then
the pathname does not name a parent directory. */
  file?: IFile;
  /**Return a URL handle for this resource. */
  uRL?: string;
  /**Return a URI handle for this resource. */
  uRI?: IURI;
  /**Return the contents of this resource as a byte array. */
  contentAsByteArray?: number[];
  /**Determine the filename for this resource &mdash; typically the last
part of the path &mdash; for example,{@code "myfile.txt"}.
<p>Returns{@code null} if this type of resource does not
have a filename.
<p>Implementations are encouraged to return the filename unencoded. */
  filename?: string;
  /**Return a description for this resource,
to be used for error output when working with the resource.
<p>Implementations are also encouraged to return this value
from their{@code toString} method. */
  description?: string;
}

/**ResponseUserLoginInfoVO */
declare interface IResponseUserLoginInfoVO {
  code?: number;
  message?: string;
  data?: IUserLoginInfoVO;
}

/**SystemTypeDTO */
declare interface ISystemTypeDTO {
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
}

/**SpaceDTO */
declare interface ISpaceDTO {
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**描述 */
  description?: string;
  /**排序 */
  sort?: number;
}

/**EnergyTypeDTO */
declare interface IEnergyTypeDTO {
  /**能耗分类编号 */
  code?: string;
  /**能耗分类名称 */
  name?: string;
  /**父级id */
  parent?: number;
  /**单位 */
  unit?: string;
  /**碳因子单位 */
  carbonUnit?: string;
  /**碳排放因子 */
  carbonFactor?: number;
  /**标准煤系数 */
  coalRatio?: number;
  /**煤系数单位 */
  coalUnit?: string;
  /**排序 */
  sort?: number;
}

/**DeviceTypeDTO */
declare interface IDeviceTypeDTO {
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**图标 */
  picture?: string;
  /**描述 */
  description?: string;
  /**相关资料 */
  relatedFile?: string;
  /**排序 */
  sort?: number;
}

/**ResponsePageLogicPointTemplateVO */
declare interface IResponsePageLogicPointTemplateVO {
  code?: number;
  message?: string;
  data?: IPageLogicPointTemplateVO;
}

/**PageDeviceVO */
declare interface IPageDeviceVO {
  /**查询数据列表 */
  records?: IDeviceVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**ResponseDeviceTypeVO */
declare interface IResponseDeviceTypeVO {
  code?: number;
  message?: string;
  data?: IDeviceTypeVO;
}

/**PageDeviceOperationRecordPageVO */
declare interface IPageDeviceOperationRecordPageVO {
  records?: IDeviceOperationRecordPageVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**IPageVisualRecordVO */
declare interface IIPageVisualRecordVO {
  records?: IVisualRecordVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
}

/**DataWithMediaType */
declare interface IDataWithMediaType {
  /**参数详情 */
  data?: IObject;
  mediaType?: undefined;
}

/**MenuOrderDTO */
declare interface IMenuOrderDTO {
  id?: number;
  order?: string;
}

/**OrderItem */
declare interface IOrderItem {
  /**需要进行排序的字段 */
  column?: string;
  /**是否正序排列，默认 true */
  asc?: boolean;
}

/**RoleMenuDTO */
declare interface IRoleMenuDTO {
  menuId?: number;
  identifier?: string[];
}

/**MenuSortDTO */
declare interface IMenuSortDTO {
  id?: number;
  parent?: number;
  sort?: number;
  ancestors?: number[];
}

/**SystemTypeEditDTO */
declare interface ISystemTypeEditDTO {
  id?: number;
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
}

/**SpaceEditDTO */
declare interface ISpaceEditDTO {
  id?: number;
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**描述 */
  description?: string;
  /**排序 */
  sort?: number;
}

/**EnergyTypeEditDTO */
declare interface IEnergyTypeEditDTO {
  /**id */
  id?: number;
  /**能耗分类编号 */
  code?: string;
  /**能耗分类名称 */
  name?: string;
  /**父级id */
  parent?: number;
  /**单位 */
  unit?: string;
  /**碳因子单位 */
  carbonUnit?: string;
  /**碳排放因子 */
  carbonFactor?: number;
  /**标准煤系数 */
  coalRatio?: number;
  /**煤系数单位 */
  coalUnit?: string;
  /**排序 */
  sort?: number;
}

/**PageIconVO */
declare interface IPageIconVO {
  /**查询数据列表 */
  records?: IIconVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**DeviceTypeEditDTO */
declare interface IDeviceTypeEditDTO {
  /**id */
  id?: number;
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**父编码 */
  parent?: number;
  /**图标 */
  picture?: string;
  /**描述 */
  description?: string;
  /**相关资料 */
  relatedFile?: string;
  /**排序 */
  sort?: number;
}

/**ResponseListSystemConfigurationVO */
declare interface IResponseListSystemConfigurationVO {
  code?: number;
  message?: string;
  data?: ISystemConfigurationVO[];
}

/**ResponsePageDeviceVO */
declare interface IResponsePageDeviceVO {
  code?: number;
  message?: string;
  data?: IPageDeviceVO;
}

/**PhysicalPointDTO */
declare interface IPhysicalPointDTO {
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**点位配置信息 */
  configuration?: IJSONObject;
  /**关联设备 */
  deviceNumber?: string;
  /**通道 */
  channelCode?: string;
}

/**AlgorithmDTO */
declare interface IAlgorithmDTO {
  /**名称 */
  name?: string;
  /**编码(英文名) */
  code?: string;
  /**流程id */
  flowId?: string;
  /**返回值类型 */
  returnType?: string;
  /**返回值 */
  returnValue?: string;
}

/**LogicPointVO */
declare interface ILogicPointVO {
  id?: number;
  /**关联设备 */
  deviceNumber?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法，3实点表达式） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**点位配置信息 */
  parseExpr?: IJSONObject;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**设定值 */
  setValue?: string;
  /**是否可写（1是，2否） */
  isWrite?: number;
  /**创建时间 */
  createTime?: string;
  /**更新时间 */
  updateTime?: string;
}

/**ResponsePageDeviceOperationRecordPageVO */
declare interface IResponsePageDeviceOperationRecordPageVO {
  code?: number;
  message?: string;
  data?: IPageDeviceOperationRecordPageVO;
}

/**RIPageVisualRecordVO */
declare interface IRIPageVisualRecordVO {
  /**状态码 */
  code?: number;
  /**是否成功 */
  success?: boolean;
  /**承载数据 */
  data?: IIPageVisualRecordVO;
  /**返回消息 */
  msg?: string;
}

/**Throwable */
declare interface IThrowable {
  /**Specific details about the Throwable.  For example, for
{@code FileNotFoundException}, this contains the name of
the file that could not be found. */
  detailMessage?: string;
  /**The throwable that caused this throwable to get thrown, or null if this
throwable was not caused by another throwable, or if the causative
throwable is unknown.  If this field is equal to this throwable itself,
it indicates that the cause of this throwable has not yet been
initialized. */
  cause?: IThrowable;
  /**The stack trace, as returned by{@link #getStackTrace()}.

The field is initialized to a zero-length array.  A{@code
    * null} value of this field indicates subsequent calls to{@link
    * #setStackTrace(StackTraceElement[])} and{@link
    * #fillInStackTrace()} will be no-ops. */
  stackTrace?: IStackTraceElement[][];
  /**The list of suppressed exceptions, as returned by{@link
    * #getSuppressed()}.  The list is initialized to a zero-element
unmodifiable sentinel list.  When a serialized Throwable is
read in, if the{@code suppressedExceptions} field points to a
zero-element list, the field is reset to the sentinel value. */
  suppressedExceptions?: IThrowable[];
}

/**PageUserVO */
declare interface IPageUserVO {
  /**查询数据列表 */
  records?: IUserVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**RoleDTO */
declare interface IRoleDTO {
  /**名称 */
  name?: string;
  /**描述 */
  description?: string;
  roleMenuDTOList?: IRoleMenuDTO[];
}

/**ResponsePageIconVO */
declare interface IResponsePageIconVO {
  code?: number;
  message?: string;
  data?: IPageIconVO;
}

/**UnitTreeVO */
declare interface IUnitTreeVO {
  label?: string;
  children?: string[];
}

/**PhysicalPointEditDTO */
declare interface IPhysicalPointEditDTO {
  /**id */
  id?: number;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**点位配置信息 */
  configuration?: IJSONObject;
  /**关联设备 */
  deviceNumber?: string;
  /**通道 */
  channelCode?: string;
}

/**AlgorithmEditDTO */
declare interface IAlgorithmEditDTO {
  /**id */
  id?: number;
  /**名称 */
  name?: string;
  /**编码(英文名) */
  code?: string;
  /**流程id */
  flowId?: string;
  /**返回值类型 */
  returnType?: string;
  /**返回值 */
  returnValue?: string;
}

/**StackTraceElement[] */
declare interface IStackTraceElement {
  /**The name of the class loader. */
  classLoaderName?: string;
  /**The module name. */
  moduleName?: string;
  /**The module version. */
  moduleVersion?: string;
  /**The declaring class. */
  declaringClass?: string;
  /**The method name. */
  methodName?: string;
  /**The source file name. */
  fileName?: string;
  /**The source line number. */
  lineNumber?: number;
  /**Control to show full or partial module, package, and class names. */
  format?: number;
}

/**ResponsePageUserVO */
declare interface IResponsePageUserVO {
  code?: number;
  message?: string;
  data?: IPageUserVO;
}

/**RoleEditDTO */
declare interface IRoleEditDTO {
  id?: number;
  /**名称 */
  name?: string;
  /**描述 */
  description?: string;
  roleMenuDTOList?: IRoleMenuDTO[];
}

/**key2 */
declare interface IKey2 {}

/**ResponseListUnitTreeVO */
declare interface IResponseListUnitTreeVO {
  code?: number;
  message?: string;
  data?: IUnitTreeVO[];
}

/**PageLogicPointVO */
declare interface IPageLogicPointVO {
  /**查询数据列表 */
  records?: ILogicPointVO[];
  /**总数 */
  total?: number;
  /**每页显示条数，默认 10 */
  size?: number;
  /**当前页 */
  current?: number;
  /**排序字段信息 */
  orders?: IOrderItem[];
  /**自动优化 COUNT SQL */
  optimizeCountSql?: boolean;
  /**是否进行 count 查询 */
  searchCount?: boolean;
  /**{@link #optimizeJoinOfCountSql()} */
  optimizeJoinOfCountSql?: boolean;
  /**单页分页条数限制 */
  maxLimit?: number;
  /**countId */
  countId?: string;
}

/**DeviceOperationRecord */
declare interface IDeviceOperationRecord {
  /**id */
  id?: number;
  /**设备id */
  deviceId?: number;
  /**设备编码 */
  deviceNumber?: string;
  /**设备名称 */
  deviceName?: string;
  /**逻辑节点编码 */
  logicPointCode?: string;
  /**操作来源（0：页面操作，1:定时器，2:算法组态） */
  source?: number;
  /**执行结果(1:成功，0:错误) */
  result?: number;
  /**信息内容 */
  resultMsg?: string;
  /**操作类型  1软件下发 */
  isSoftwareSend?: number;
  /**原始值 记录下发当时的值 */
  originalValue?: string;
  /**点位配置信息 */
  setValue?: IJSONObject;
  /**创建时间 */
  createTime?: string;
  /**更新时间 */
  updateTime?: string;
}

/**R */
declare interface IR {
  /**状态码 */
  code?: number;
  /**是否成功 */
  success?: boolean;
  /**参数详情 */
  data?: IObject;
  /**返回消息 */
  msg?: string;
}

/**Runnable */
declare interface IRunnable {}

/**UserDTO */
declare interface IUserDTO {
  /**账户 */
  username?: string;
  /**昵称 */
  nickname?: string;
  /**手机号 */
  phone?: string;
  /**是否启用 */
  isEnable?: string;
  roles?: IRoleVO[];
}

/**IconDTO */
declare interface IIconDTO {
  /**名称 */
  name?: string;
  /**上传人 */
  creator?: string;
  /**图片 */
  picture?: string;
  /**类型（1-层级2-图片） */
  type?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
}

/**key3 */
declare interface IKey3 {}

/**DeviceDTO */
declare interface IDeviceDTO {
  /**名称 */
  name?: string;
  /**设备编号 */
  number?: string;
  /**空间编号 */
  spaceCode?: string;
  /**设备类型 */
  deviceTypeCode?: string;
  /**系统类型 */
  systemTypeCode?: string;
  /**能耗类型 */
  energyTypeCode?: string;
  /**描述 */
  description?: string;
  /**关联设备编码 */
  relatedDeviceNumber?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**是否控制器（1是，2否） */
  isController?: number;
  /**是否批量新增（1启用，2禁用） */
  isBatch?: number;
  /**生成数量 */
  deviceCount?: number;
}

/**ResponsePageLogicPointVO */
declare interface IResponsePageLogicPointVO {
  code?: number;
  message?: string;
  data?: IPageLogicPointVO;
}

/**ResponseListDeviceOperationRecord */
declare interface IResponseListDeviceOperationRecord {
  code?: number;
  message?: string;
  data?: IDeviceOperationRecord[];
}

/**IPageVisualRecord */
declare interface IIPageVisualRecord {
  records?: IVisualRecord[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
}

/**DefaultCallback */
declare interface IDefaultCallback {
  delegate?: undefined;
}

/**UserEditDTO */
declare interface IUserEditDTO {
  id?: number;
  /**账户 */
  username?: string;
  /**昵称 */
  nickname?: string;
  /**手机号 */
  phone?: string;
  /**是否启用 */
  isEnable?: string;
  roles?: IRoleVO[];
}

/**IconEditDTO */
declare interface IIconEditDTO {
  /**id */
  id?: number;
  /**名称 */
  name?: string;
  /**上传人 */
  creator?: string;
  /**图片 */
  picture?: string;
  /**类型（1-层级2-图片） */
  type?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
}

/**LogicPointTemplate */
declare interface ILogicPointTemplate {
  id?: number;
  /**关联设备类型 */
  deviceTypeCode?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: number;
  /**是否表达式（1虚点表达式，2虚点算法） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: string;
  /**是否可写（1是，2否） */
  isWrite?: number;
  /**创建时间 */
  createTime?: string;
  /**更新时间 */
  updateTime?: string;
}

/**DeviceEditDTO */
declare interface IDeviceEditDTO {
  /**id */
  id?: number;
  /**名称 */
  name?: string;
  /**设备编号 */
  number?: string;
  /**空间编号 */
  spaceCode?: string;
  /**设备类型 */
  deviceTypeCode?: string;
  /**系统类型 */
  systemTypeCode?: string;
  /**能耗类型 */
  energyTypeCode?: string;
  /**描述 */
  description?: string;
  /**关联设备编码 */
  relatedDeviceNumber?: string;
  /**是否启用（1启用，2禁用） */
  isEnable?: number;
  /**是否控制器（1是，2否） */
  isController?: number;
}

/**RIPageVisualRecord */
declare interface IRIPageVisualRecord {
  /**状态码 */
  code?: number;
  /**是否成功 */
  success?: boolean;
  /**承载数据 */
  data?: IIPageVisualRecord;
  /**返回消息 */
  msg?: string;
}

/**ErrorCallback */
declare interface IErrorCallback {}

/**key4 */
declare interface IKey4 {}

/**ChannelDTO */
declare interface IChannelDTO {
  /**设备id */
  deviceId?: number;
  /**协议（1-Modbus RTU，2-modbus TCP，3-Bacnet，4-Mqtt，5-Knx，6-OPC UA，7-Http） */
  protocol?: number;
  /**通道是否启用（1启用，2禁用） */
  channelEnable?: number;
  /**通道编码 */
  channelCode?: string;
  /**点位配置信息 */
  channelConfiguration?: IJSONObject;
}

/**SseEmitter */
declare interface ISseEmitter {
  timeout?: number;
  handler?: undefined;
  earlySendAttempts?: IDataWithMediaType[];
  complete?: boolean;
  failure?: undefined;
  timeoutCallback?: IDefaultCallback;
  errorCallback?: IErrorCallback;
  completionCallback?: IDefaultCallback;
}

/**key5 */
declare interface IKey5 {}

/**ResponseListPhysicalPointVO */
declare interface IResponseListPhysicalPointVO {
  code?: number;
  message?: string;
  data?: IPhysicalPointVO[];
}

/**ResponseListLogicPointTemplateVO */
declare interface IResponseListLogicPointTemplateVO {
  code?: number;
  message?: string;
  data?: ILogicPointTemplateVO[];
}

/**key6 */
declare interface IKey6 {}

/**ResponseLong */
declare interface IResponseLong {
  code?: number;
  message?: string;
  data?: number;
}

/**ChannelVO */
declare interface IChannelVO {
  /**设备id */
  deviceId?: number;
  /**协议（1-Modbus RTU，2-modbus TCP，3-Bacnet，4-Mqtt，5-Knx，6-OPC UA，7-Http） */
  protocol?: number;
  /**通道是否启用（1启用，2禁用） */
  channelEnable?: number;
  /**通道编码 */
  channelCode?: string;
  /**点位配置信息 */
  channelConfiguration?: IJSONObject;
}

/**ResponseListLogicPointVO */
declare interface IResponseListLogicPointVO {
  code?: number;
  message?: string;
  data?: ILogicPointVO[];
}

/**key7 */
declare interface IKey7 {}

/**ResponseChannelVO */
declare interface IResponseChannelVO {
  code?: number;
  message?: string;
  data?: IChannelVO;
}

/**DeviceTreeVO */
declare interface IDeviceTreeVO {
  id?: number;
  /**父编码 */
  parent?: number;
  /**排序 */
  sort?: number;
  children?: object[];
  /**种类(1-类型，2-设备) */
  type?: number;
  /**类型编码 */
  typeCode?: string;
  /**类型名称 */
  typeName?: string;
  /**设备名称 */
  deviceName?: string;
  /**设备编号 */
  deviceNumber?: string;
  /**通道编码 */
  channelCode?: string;
}

/**key8 */
declare interface IKey8 {}

/**ResponseListDeviceTreeVO */
declare interface IResponseListDeviceTreeVO {
  code?: number;
  message?: string;
  data?: IDeviceTreeVO[];
}

/**LogicPointTemplateDTO */
declare interface ILogicPointTemplateDTO {
  /**关联设备类型 */
  deviceTypeCode?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**是否可写（1是，2否） */
  isWrite?: number;
}

/**LogicPointTemplateEditDTO */
declare interface ILogicPointTemplateEditDTO {
  /**id */
  id?: number;
  /**关联设备类型 */
  deviceTypeCode?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**是否可写（1是，2否） */
  isWrite?: number;
}

/**LogicPointDTO */
declare interface ILogicPointDTO {
  /**关联设备 */
  deviceNumber?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集周期定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法，3实点表达式） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**点位配置信息 */
  parseExpr?: IJSONObject;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**设定值 */
  setValue?: string;
  /**是否可写（1是，2否） */
  isWrite?: number;
}

/**LogicPointEditDTO */
declare interface ILogicPointEditDTO {
  /**id */
  id?: number;
  /**关联设备 */
  deviceNumber?: string;
  /**点位编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**转存周期定时任务id */
  storageJobId?: number;
  /**采集周期定时任务id */
  collectJobId?: number;
  /**显示顺序 */
  sort?: number;
  /**显示控件 */
  showType?: string;
  /**空值默认值 */
  defaultData?: string;
  /**是否表达式（1虚点表达式，2虚点算法，3实点表达式） */
  isFormula?: number;
  /**是否实点（1实点，2虚点） */
  isRealPoint?: number;
  /**点位配置信息 */
  monitorExpr?: IJSONObject;
  /**点位配置信息 */
  controlExpr?: IJSONObject;
  /**监测算法 */
  monitorAlgorithmId?: number;
  /**控制算法 */
  controlAlgorithmId?: number;
  /**点位配置信息 */
  parseExpr?: IJSONObject;
  /**数据类型 */
  dataType?: string;
  /**取值范围上限 */
  dataUpperLimit?: number;
  /**取值范围下限 */
  dataLowerLimit?: number;
  /**单位 */
  unit?: string;
  /**是否继承（1是，2否） */
  isInherit?: number;
  /**是否显示（1是，2否） */
  isDisplay?: number;
  /**是否枚举（1是，2否） */
  isEnum?: number;
  /**是否默认（1是，2否） */
  isDefault?: number;
  /**具体枚举 */
  enumDetail?: IJSONArray[];
  /**设定值 */
  setValue?: string;
  /**是否可写（1是，2否） */
  isWrite?: number;
}

/**ResponseListDeviceVO */
declare interface IResponseListDeviceVO {
  code?: number;
  message?: string;
  data?: IDeviceVO[];
}

/**ResponseDeviceVO */
declare interface IResponseDeviceVO {
  code?: number;
  message?: string;
  /**com.afdi.ambition.common.vo.thing.DeviceVO */
  data?: IDeviceVO;
}

/**DeviceParamsVO */
declare interface IDeviceParamsVO {
  /**id */
  id?: number;
  /**编码 */
  code?: string;
  /**名称 */
  name?: string;
  /**周期 */
  period?: string;
  /**转存任务id */
  storeJobId?: number;
}

/**ResponseListDeviceParamsVO */
declare interface IResponseListDeviceParamsVO {
  code?: number;
  message?: string;
  data?: IDeviceParamsVO[];
}

/**LogicPointRealtimeDataVo */
declare interface ILogicPointRealtimeDataVo {
  /**点位名字 */
  name?: string;
  /**点位编码 */
  code?: string;
  /**值 */
  value?: string;
  /**单位 */
  unit?: string;
  /**时间 */
  time?: string;
}

/**DeviceRealtimeDataVo */
declare interface IDeviceRealtimeDataVo {
  /**设备id */
  deviceId?: number;
  /**设备名称 */
  deviceName?: string;
  params?: ILogicPointRealtimeDataVo[];
}

/**ResponseDeviceRealtimeDataVo */
declare interface IResponseDeviceRealtimeDataVo {
  code?: number;
  message?: string;
  data?: IDeviceRealtimeDataVo;
}

/**LogicPointControlRealtimeDataVo */
declare interface ILogicPointControlRealtimeDataVo {
  /**点位名字 */
  name?: string;
  /**点位编码 */
  code?: string;
  /**值 */
  value?: string;
  /**单位 */
  unit?: string;
  /**时间 */
  time?: string;
  /**操作时间 */
  controlTime?: string;
  /**操作值 */
  controlValue?: string;
  /**操作状态 */
  state?: string;
  /**操作类型 */
  controlType?: number;
}

/**DeviceControlRealtimeDataVo */
declare interface IDeviceControlRealtimeDataVo {
  /**设备id */
  deviceId?: number;
  /**设备名称 */
  deviceName?: string;
  params?: ILogicPointControlRealtimeDataVo[];
}

/**ResponseDeviceControlRealtimeDataVo */
declare interface IResponseDeviceControlRealtimeDataVo {
  code?: number;
  message?: string;
  data?: IDeviceControlRealtimeDataVo;
}

/**Response */
declare interface IResponse {
  code?: null;
  message?: null;
  data?: null;
}

/**AlarmRealtimeDataVo */
declare interface IAlarmRealtimeDataVo {
  /**报警配置id */
  alarmId?: number;
  /**报警名称 */
  alarmName?: string;
  /**报警状态（1报警中，2已解除） */
  alarmState?: number;
  /**报警时间 */
  alarmTime?: string;
}

/**DeviceAlarmRealtimeDataVo */
declare interface IDeviceAlarmRealtimeDataVo {
  /**设备id */
  deviceId?: number;
  /**设备名称 */
  deviceName?: string;
  params?: IAlarmRealtimeDataVo[];
}

/**ResponseDeviceAlarmRealtimeDataVo */
declare interface IResponseDeviceAlarmRealtimeDataVo {
  code?: number;
  message?: string;
  data?: IDeviceAlarmRealtimeDataVo;
}

/**DeviceAlarmHistoryDataVo */
declare interface IDeviceAlarmHistoryDataVo {
  /**数据id */
  id?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**报警状态（1报警中，2已解除） */
  alarmState?: number;
  /**处理状态（1待确认，2已确认） */
  handingState?: number;
  /**开始时间 */
  startTime?: string;
  /**结束时间 */
  endTime?: string;
  /**持续时间 */
  duration?: string;
}

/**PageDeviceAlarmHistoryDataVo */
declare interface IPageDeviceAlarmHistoryDataVo {
  records?: IDeviceAlarmHistoryDataVo[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponsePageDeviceAlarmHistoryDataVo */
declare interface IResponsePageDeviceAlarmHistoryDataVo {
  code?: number;
  message?: string;
  data?: IPageDeviceAlarmHistoryDataVo;
}

/**ResponseListDeviceAlarmHistoryDataVo */
declare interface IResponseListDeviceAlarmHistoryDataVo {
  code?: number;
  message?: string;
  data?: IDeviceAlarmHistoryDataVo[];
}

/**DeviceHistoryDataVo */
declare interface IDeviceHistoryDataVo {
  /**id */
  id?: number;
  /**点位id */
  pointId?: number;
  /**值 */
  value?: string;
  /**单位 */
  unit?: string;
  /**创建时间 */
  createTime?: string;
}

/**ResponseListDeviceHistoryDataVo */
declare interface IResponseListDeviceHistoryDataVo {
  code?: number;
  message?: string;
  data?: IDeviceHistoryDataVo[];
}

/**PageJSONObject */
declare interface IPageJSONObject {
  records?: IJSONObject[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponsePageJSONObject */
declare interface IResponsePageJSONObject {
  code?: number;
  message?: string;
  data?: IPageJSONObject;
}

/**AlarmConfigVO */
declare interface IAlarmConfigVO {
  /**id */
  id?: number;
  /**模版id（alarm_template.id） */
  templateId?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**计算公式 */
  formula?: string;
  /**设备类型 */
  deviceType?: string;
  /**设备编号 */
  deviceNumber?: string;
  /**是否开启报警项（1开启，2关闭） */
  isEnable?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
  /**更新时间 */
  updateTime?: string;
}

/**PageAlarmConfigVO */
declare interface IPageAlarmConfigVO {
  records?: IAlarmConfigVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponsePageAlarmConfigVO */
declare interface IResponsePageAlarmConfigVO {
  code?: number;
  message?: string;
  data?: IPageAlarmConfigVO;
}

/**AlarmConfigDTO */
declare interface IAlarmConfigDTO {
  /**模版id（alarm_template.id） */
  templateId?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**计算公式 */
  formula?: string;
  /**设备类型 */
  deviceType?: string;
  /**设备编号 */
  deviceNumber?: string;
  /**是否开启报警项（1开启，2关闭） */
  isEnable?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
}

/**AlarmConfigEditDTO */
declare interface IAlarmConfigEditDTO {
  /**id */
  id?: number;
  /**模版id（alarm_template.id） */
  templateId?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**计算公式 */
  formula?: string;
  /**设备类型 */
  deviceType?: string;
  /**设备编号 */
  deviceNumber?: string;
  /**是否开启报警项（1开启，2关闭） */
  isEnable?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
}

/**AlarmRecordVO */
declare interface IAlarmRecordVO {
  /**id */
  id?: number;
  /**报警id */
  alarmId?: number;
  /**报警名称 */
  alarmName?: string;
  /**报警内容 */
  alarmContent?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  alarmLevel?: number;
  /**报警类型（1警告，2报警，3故障） */
  alarmType?: number;
  /**报警状态（1报警中，2已解除） */
  alarmState?: number;
  /**设备类型 */
  deviceType?: string;
  /**设备编号 */
  deviceNumber?: string;
  /**处理状态（1待确认，2已确认） */
  handingState?: number;
  /**处理详情 */
  handingContent?: string;
  /**开始时间 */
  startTime?: string;
  /**结束时间 */
  endTime?: string;
  /**报警持续时间（秒） */
  costTimeLen?: number;
  /**设备名称 */
  deviceName?: string;
  /**空间名称 */
  spaceName?: string;
}

/**PageAlarmRecordVO */
declare interface IPageAlarmRecordVO {
  records?: IAlarmRecordVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponsePageAlarmRecordVO */
declare interface IResponsePageAlarmRecordVO {
  code?: number;
  message?: string;
  data?: IPageAlarmRecordVO;
}

/**AlarmTemplateVO */
declare interface IAlarmTemplateVO {
  /**id */
  id?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
  /**更新时间 */
  updateTime?: string;
}

/**PageAlarmTemplateVO */
declare interface IPageAlarmTemplateVO {
  records?: IAlarmTemplateVO[];
  total?: number;
  size?: number;
  current?: number;
  orders?: IOrderItem[];
  optimizeCountSql?: boolean;
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
}

/**ResponsePageAlarmTemplateVO */
declare interface IResponsePageAlarmTemplateVO {
  code?: number;
  message?: string;
  data?: IPageAlarmTemplateVO;
}

/**AlarmTemplateDTO */
declare interface IAlarmTemplateDTO {
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
}

/**AlarmTemplateEditDTO */
declare interface IAlarmTemplateEditDTO {
  /**id */
  id?: number;
  /**报警名称 */
  name?: string;
  /**报警内容 */
  content?: string;
  /**报警级别（1错误，2系统需要确认，3系统无需确认） */
  level?: number;
  /**报警类型（1警告，2报警，3故障） */
  type?: number;
  /**延迟报警时间（单位秒） */
  delayTime?: number;
  /**是否开启报警消息（1开启，2关闭） */
  msgEnable?: number;
  /**消息触发间隔（单位秒） */
  msgTriggerInterval?: number;
  /**消息通知角色 */
  msgNotifyRole?: string;
}

/**key9 */
declare interface IKey9 {}

/**key10 */
declare interface IKey10 {}

/**key11 */
declare interface IKey11 {}

/**key12 */
declare interface IKey12 {}
