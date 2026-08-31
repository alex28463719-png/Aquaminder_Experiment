// Module ID: 283
// Function ID: 3277
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 89, 86]

// Module 283 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 89 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
let obj = { uiViewClassName: "RCTActivityIndicatorView" };
obj = { hidesWhenStopped: true, animating: true, color: null, size: true };
obj = { process: processColor.default };
obj.color = obj;
obj.validAttributes = obj;

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RCTActivityIndicatorView", () => obj);
