import WFAskActionDateGranularity from './WFAskActionDateGranularity';
import WFBase64LineBreakMode from './WFBase64LineBreakMode';
import WFCondition from './WFCondition';
import WFCountType from './WFCountType';
import WFDeviceDetail from './WFDeviceDetail';
import WFEncodeMode from './WFEncodeMode';
import WFFlashlightSetting from './WFFlashlightSetting';
import WFGetDictionaryValueType from './WFGetDictionaryValueType';
import WFHashType from './WFHashType';
import WFHTTPBodyType from './WFHTTPBodyType';
import WFHTTPMethod from './WFHTTPMethod';
import WFInputType from './WFInputType';
import WFIPAddressSourceOption from './WFIPAddressSourceOption';
import WFIPAddressTypeOption from './WFIPAddressTypeOption';
import WFMathOperation from './WFMathOperation';
import WFNetworkDetailsNetwork from './WFNetworkDetailsNetwork';
import WFSerialization from './WFSerialization';
import WFStatisticsOperation from './WFStatisticsOperation';

interface WFWorkflowActionParameters {
  Advanced?: boolean;
  CustomOutputName?: string;
  GroupingIdentifier?: string;
  OnValue?: boolean;
  ShowHeaders?: boolean;
  Text?: WFSerialization | string;
  UUID?: string;
  WFAskActionDateGranularity?: WFAskActionDateGranularity;
  WFAskActionDefaultAnswer?: WFSerialization | string;
  WFAskActionPrompt?: WFSerialization | string;
  WFBase64LineBreakMode?: WFSerialization | WFBase64LineBreakMode;
  WFBrightness?: number;
  WFCommentActionText?: string;
  WFCondition?: WFCondition;
  WFConditionalActionString?: string;
  WFControlFlowMode?: number;
  WFCountType?: WFCountType;
  WFDelayTime?: number;
  WFDeviceDetail?: WFSerialization | WFDeviceDetail;
  WFDictionaryKey?: string;
  WFDontIncludeFileExtension?: boolean;
  WFEncodeMode?: WFEncodeMode;
  WFFlashlightSetting?: WFFlashlightSetting;
  WFFormValues?: WFSerialization;
  WFGetDictionaryValueType?: WFGetDictionaryValueType;
  WFHashType?: WFSerialization | WFHashType;
  WFHTTPBodyType?: WFHTTPBodyType;
  WFHTTPHeaders?: WFSerialization;
  WFHTTPMethod?: WFHTTPMethod;
  WFInputType?: WFInputType;
  WFIPAddressSourceOption?: WFIPAddressSourceOption;
  WFIPAddressTypeOption?: WFIPAddressTypeOption;
  WFJSONValues?: WFSerialization;
  WFMathOperand?: number;
  WFMathOperation?: WFMathOperation;
  WFMenuItems?: string[];
  WFMenuItemTitle?: string;
  WFMenuPrompt?: string;
  WFName?: string;
  WFNetworkDetailsNetwork?: WFNetworkDetailsNetwork;
  WFNotificationActionTitle?: string;
  WFNotificationActionBody?: string;
  WFNotificationActionSound?: boolean;
  WFNumberActionNumber?: number;
  WFNumberValue?: number;
  WFShowWorkflow?: boolean;
  WFSSHHost?: WFSerialization | string;
  WFSSHPassword?: WFSerialization | string;
  WFSSHPort?: WFSerialization | string;
  WFSSHScript?: WFSerialization | string;
  WFSSHUser?: WFSerialization | string;
  WFStatisticsOperation?: WFSerialization | WFStatisticsOperation;
  WFTextActionText?: WFSerialization | string;
  WFURLActionURL?: string;
  WFVariable?: WFSerialization | string;
  WFVariableName?: string;
  WFWorkflowName?: string;
}

export default WFWorkflowActionParameters;
