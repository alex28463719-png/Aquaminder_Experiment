// Module ID: 678
// Function ID: 7824
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 86]

// Module 678 (__INTERNAL_VIEW_CONFIG)
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNCSafeAreaView", () => obj);
