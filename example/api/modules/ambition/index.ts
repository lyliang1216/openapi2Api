import {useMenuApi} from './modules/menu'
import {useUserApi} from './modules/user'
import {useRoleApi} from './modules/role'
import {useFileApi} from './modules/file'
import {usePersonalizationApi} from './modules/personalization'
import {useUserOperationRecordApi} from './modules/userOperationRecord'

export const ambitionApi = {
...useMenuApi(),
...useUserApi(),
...useRoleApi(),
...useFileApi(),
...usePersonalizationApi(),
...useUserOperationRecordApi(),
}