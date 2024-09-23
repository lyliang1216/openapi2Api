import {useMenuApi} from './modules/menu'
import {useUserApi} from './modules/user'
import {useRoleApi} from './modules/role'
import {useFileApi} from './modules/file'
import {usePersonalizationApi} from './modules/personalization'
import {useUserOperationRecordApi} from './modules/userOperationRecord'
import {useSpaceApi} from './modules/space'
import {useSystemTypeApi} from './modules/systemType'
import {useEnergyTypeApi} from './modules/energyType'
import {useIconApi} from './modules/icon'

export const ambitionApi = {
...useMenuApi(),
...useUserApi(),
...useRoleApi(),
...useFileApi(),
...usePersonalizationApi(),
...useUserOperationRecordApi(),
...useSpaceApi(),
...useSystemTypeApi(),
...useEnergyTypeApi(),
...useIconApi(),
}