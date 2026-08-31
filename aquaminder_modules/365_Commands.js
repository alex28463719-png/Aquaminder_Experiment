// Module ID: 365
// Function ID: 4558
// Name: Commands
// Dependencies: [1, 86, 125, 33, 89, 104, 106, 124]

// Module 365 (Commands)
import get_Version from "get Version" /* 33 */;
import get2 from "get" /* 86 */;
import processColor from "processColor" /* 89 */;
import insetsDiffer from "insetsDiffer" /* 104 */;
import getSourceCodeScriptURL from "getSourceCodeScriptURL" /* 106 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import module_1 from "module_1" /* 1 */;

let get = _interopRequireWildcard(get2);
const codegenNativeCommands = module_1(codegenNativeCommands2);
get_Version = module_1(get_Version);
if (get_Version.default.OS === "android") {
  get = { uiViewClassName: "RCTImageView", bubblingEventTypes: {} };
  get = {};
  const obj1 = { registrationName: "onLoadStart" };
  get.topLoadStart = obj1;
  const obj2 = { registrationName: "onProgress" };
  get.topProgress = obj2;
  const obj3 = { registrationName: "onError" };
  get.topError = obj3;
  const obj4 = { registrationName: "onLoad" };
  get.topLoad = obj4;
  const obj5 = { registrationName: "onLoadEnd" };
  get.topLoadEnd = obj5;
  get.directEventTypes = get;
  const obj6 = { blurRadius: true, defaultSource: true, internal_analyticTag: true, resizeMethod: true, resizeMode: true, resizeMultiplier: true, tintColor: null, borderBottomLeftRadius: true, borderTopLeftRadius: true, src: true, source: true, borderRadius: true, headers: true, shouldNotifyLoadEvents: true, overlayColor: null, borderColor: null, accessible: true, progressiveRenderingEnabled: true, fadeDuration: true, borderBottomRightRadius: true, borderTopRightRadius: true, loadingIndicatorSrc: true };
  const obj7 = { process: processColor.default };
  obj6.tintColor = obj7;
  const obj8 = { process: processColor.default };
  obj6.overlayColor = obj8;
  const obj9 = { process: processColor.default };
  obj6.borderColor = obj9;
  get.validAttributes = obj6;
  let obj10 = get;
} else {
  obj10 = { uiViewClassName: "RCTImageView", bubblingEventTypes: {} };
  const obj11 = {};
  const obj12 = { registrationName: "onLoadStart" };
  obj11.topLoadStart = obj12;
  const obj13 = { registrationName: "onProgress" };
  obj11.topProgress = obj13;
  const obj14 = { registrationName: "onError" };
  obj11.topError = obj14;
  const obj15 = { registrationName: "onPartialLoad" };
  obj11.topPartialLoad = obj15;
  const obj16 = { registrationName: "onLoad" };
  obj11.topLoad = obj16;
  const obj17 = { registrationName: "onLoadEnd" };
  obj11.topLoadEnd = obj17;
  obj10.directEventTypes = obj11;
  let _Object = Object;
  const obj18 = { blurRadius: true, capInsets: null, defaultSource: null, internal_analyticTag: true, resizeMode: true, source: true };
  const obj19 = { diff: insetsDiffer.default };
  obj18.capInsets = obj19;
  const obj20 = { process: getSourceCodeScriptURL.default };
  obj18.defaultSource = obj20;
  const obj21 = { process: processColor.default };
  obj18.tintColor = obj21;
  obj10.validAttributes = Object.assign(obj18, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onLoad: true, onLoadEnd: true, onProgress: true, onError: true, onPartialLoad: true }));
}

export const Commands = codegenNativeCommands.default({ supportedCommands: ["setIsVisible_EXPERIMENTAL"] });
export const __INTERNAL_VIEW_CONFIG = obj10;
export default get.get("RCTImageView", () => obj10);
