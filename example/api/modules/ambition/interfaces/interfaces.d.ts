
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
sort?: string;
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
 declare interface IInputStream {

    }

    
    /**Response«PersonalizationVO» */
 declare interface IResponsePersonalizationVO {
code?: number;
message?: string;
data?: IPersonalizationVO;

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

    
    /**Page«RoleVO» */
 declare interface IPageRoleVO {
records?: IRoleVO[];
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

    
    /**OrderItem */
 declare interface IOrderItem {
/**需要进行排序的字段 */
column?: string;
/**是否正序排列，默认 true */
asc?: boolean;

    }

    
    /**RoleVO */
 declare interface IRoleVO {
id?: number;
/**名称 */
name?: string;
/**描述 */
description?: string;

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
sort?: string;
/**外部数据 */
extra?: string;
identifier?: string[];

    }

    
    /**Response«Page«RoleVO»» */
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

    
    /**MenuEditDTO */
 declare interface IMenuEditDTO {
id?: number;
name?: string;
extra?: string;

    }

    
    /**UserLoginInfoVO */
 declare interface IUserLoginInfoVO {
token?: string;
userVO?: IUserVO;

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

    
    /**PersonalizationDTO */
 declare interface IPersonalizationDTO {
name?: string;
logo?: string;
color?: string;
background?: string;

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

    
    /**MenuSortDTO */
 declare interface IMenuSortDTO {
id?: number;
parent?: number;
sort?: string;
ancestors?: number[];

    }

    
    /**RoleMenuDTO */
 declare interface IRoleMenuDTO {
menuId?: number;
identifier?: string[];

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

    