// Module ID: 427
// Function ID: 5000
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 124, 86]

// Module 427 (__INTERNAL_VIEW_CONFIG)
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const obj = { uiViewClassName: "RCTModalHostView", directEventTypes: { topRequestClose: { registrationName: "onRequestClose" }, topShow: { registrationName: "onShow" }, topDismiss: { registrationName: "onDismiss" }, topOrientationChange: { registrationName: "onOrientationChange" } }, validAttributes: Object.assign({ animationType: true, presentationStyle: true, transparent: true, statusBarTranslucent: true, navigationBarTranslucent: true, hardwareAccelerated: true, visible: true, animated: true, supportedOrientations: true, identifier: true }, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onRequestClose: true, onShow: true, onDismiss: true, onOrientationChange: true })) };

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RCTModalHostView", () => obj);
