// Module ID: 981
// Function ID: 10496
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 89, 86]

// Module 981 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 89 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
let obj = { uiViewClassName: "RNGestureHandlerButton" };
obj = { exclusive: true, foreground: true, borderless: true, enabled: true, rippleColor: null, rippleRadius: true, touchSoundDisabled: true, borderWidth: true, borderColor: null, borderStyle: true };
obj = { process: processColor.default };
obj.rippleColor = obj;
obj.borderColor = { process: processColor.default };
obj.validAttributes = obj;

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNGestureHandlerButton", () => obj);
