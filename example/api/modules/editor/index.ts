import {useColorSchemeApi} from './modules/color-scheme'
import {useComponentApi} from './modules/component'
import {useElementApi} from './modules/element'
import {useElementUniqueIdApi} from './modules/element-uniqueId'
import {useGbApi} from './modules/gb'
import {useGeneralSchemeApi} from './modules/general-scheme'
import {useGroupSchemeApi} from './modules/group-scheme'
import {useLabelApi} from './modules/label'
import {useLabelSchemeApi} from './modules/label-scheme'
import {useLabelTemplateApi} from './modules/label-template'
import {useModelApi} from './modules/model'
import {useProjectApi} from './modules/project'
import {usePropertyApi} from './modules/property'
import {useTreeApi} from './modules/tree'
import {useViewpointSchemeApi} from './modules/viewpoint-scheme'
import {useViewpointSchemeItemApi} from './modules/viewpoint-scheme-item'
import {useVisibilitySchemeApi} from './modules/visibility-scheme'

export const editorApi = {
...useColorSchemeApi(),
...useComponentApi(),
...useElementApi(),
...useElementUniqueIdApi(),
...useGbApi(),
...useGeneralSchemeApi(),
...useGroupSchemeApi(),
...useLabelApi(),
...useLabelSchemeApi(),
...useLabelTemplateApi(),
...useModelApi(),
...useProjectApi(),
...usePropertyApi(),
...useTreeApi(),
...useViewpointSchemeApi(),
...useViewpointSchemeItemApi(),
...useVisibilitySchemeApi(),
}