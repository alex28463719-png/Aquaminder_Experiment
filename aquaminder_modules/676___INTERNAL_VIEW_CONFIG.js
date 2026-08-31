// Module ID: 676
// Function ID: 7816
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [1, 279, 124, 86]

// Module 676 (__INTERNAL_VIEW_CONFIG)
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeComponent = module_1(codegenNativeComponent2);
const obj = { uiViewClassName: "RNCSafeAreaProvider", directEventTypes: { topInsetsChange: { registrationName: "onInsetsChange" } }, validAttributes: Object.assign({}, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onInsetsChange: true })) };

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNCSafeAreaProvider", () => obj);
