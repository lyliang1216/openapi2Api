import { useMenuApi } from "./modules/menu";
import { useUserApi } from "./modules/user";
import { useRoleApi } from "./modules/role";
import { useFileApi } from "./modules/file";
import { usePersonalizationApi } from "./modules/personalization";
import { useUserOperationRecordApi } from "./modules/userOperationRecord";
import { useSystemMsgApi } from "./modules/systemMsg";
import { useSpaceApi } from "./modules/space";
import { useSystemTypeApi } from "./modules/systemType";
import { useEnergyTypeApi } from "./modules/energyType";
import { useIconApi } from "./modules/icon";
import { useDeviceTypeApi } from "./modules/deviceType";
import { useLogicPointTemplateApi } from "./modules/logicPointTemplate";
import { useSystemConfigurationApi } from "./modules/systemConfiguration";
import { useDeviceApi } from "./modules/device";
import { usePhysicalPointApi } from "./modules/physicalPoint";
import { useLogicPointApi } from "./modules/logicPoint";
import { useAlarmConfigApi } from "./modules/alarmConfig";
import { useAlarmRecordApi } from "./modules/alarmRecord";
import { useAlarmTemplateApi } from "./modules/alarmTemplate";
import { useDeviceOperationRecordApi } from "./modules/deviceOperationRecord";
import { useQuartzJobApi } from "./modules/quartzJob";
import { useAlgorithmApi } from "./modules/algorithm";
import { useBladeVisualApi } from "./modules/blade-visual";
import { useInterfaceInfoApi } from "./modules/interfaceInfo";
import { useSseApi } from "./modules/sse";
import { useCommunicationPhysicalPointApi } from "./modules/communicationPhysicalPoint";
import { useSend2Api } from "./modules/send2";

export const ambitionApi = {
  ...useMenuApi(),
  ...useUserApi(),
  ...useRoleApi(),
  ...useFileApi(),
  ...usePersonalizationApi(),
  ...useUserOperationRecordApi(),
  ...useSystemMsgApi(),
  ...useSpaceApi(),
  ...useSystemTypeApi(),
  ...useEnergyTypeApi(),
  ...useIconApi(),
  ...useDeviceTypeApi(),
  ...useLogicPointTemplateApi(),
  ...useSystemConfigurationApi(),
  ...useDeviceApi(),
  ...usePhysicalPointApi(),
  ...useLogicPointApi(),
  ...useAlarmConfigApi(),
  ...useAlarmRecordApi(),
  ...useAlarmTemplateApi(),
  ...useDeviceOperationRecordApi(),
  ...useQuartzJobApi(),
  ...useAlgorithmApi(),
  ...useBladeVisualApi(),
  ...useBladeVisualApi(),
  ...useInterfaceInfoApi(),
  ...useSseApi(),
  ...useCommunicationPhysicalPointApi(),
  ...useSend2Api(),
};
