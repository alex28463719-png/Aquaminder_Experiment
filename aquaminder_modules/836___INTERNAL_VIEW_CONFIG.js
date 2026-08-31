// Module ID: 836
// Function ID: 9113
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 124, 86]

// Module 836 (__INTERNAL_VIEW_CONFIG)
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const obj = { uiViewClassName: "RNGoogleSigninButton", bubblingEventTypes: { topPress: { phasedRegistrationNames: { captured: "onPressCapture", bubbled: "onPress" } } }, validAttributes: Object.assign({ disabled: true, color: true, size: true }, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onPress: true })) };

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNGoogleSigninButton", () => obj);
