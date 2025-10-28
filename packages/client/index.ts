/**
 * 动态提取响应中的指定字段
 * 仅当 T 是对象且包含该字段时，返回 T[K]
 * 否则返回 T 本身
 *
 * @example
 * type A = UnwrappedResponse<{ data: User[] }>           → User[]
 * type B = UnwrappedResponse<{ result: User[] }, 'result'> → User[]
 * type C = UnwrappedResponse<string>                     → string
 */
export type UnwrappedResponse<T, Key extends string = 'data'> =
    T extends Record<string, any>
        ? (Key extends keyof T ? T[Key] : T)
        : T;

/**
 * 自动解包响应中的指定字段（默认 'data'）
 *
 * @param promise - 请求 Promise
 * @param key - 要解包的字段名，默认 'data'
 * @returns Promise<UnwrappedResponse<T, K>>
 *
 * @example
 * unwrapData(fetchUser())           // → 解包 data
 * unwrapData(fetchUser(), 'result') // → 解包 result
 */
export function unwrapData<T, K extends string = 'data'>(
    promise: Promise<T>,
    key: K = 'data' as K
): Promise<UnwrappedResponse<T, K>> {
    return promise.then((res) => {
        // 运行时：只对非-null对象检查字段
        if (res != null && typeof res === 'object' && key in res) {
            return (res as any)[key];
        }
        return res;
    }) as Promise<UnwrappedResponse<T, K>>;
}