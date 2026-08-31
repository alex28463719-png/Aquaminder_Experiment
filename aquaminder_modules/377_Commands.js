// Module ID: 377
// Function ID: 4625
// Name: Commands
// Dependencies: [1, 125, 279, 119, 89, 124, 86, 57]

// Module 377 (Commands)
import keys from "keys" /* 57 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import get from "get" /* 86 */;

const codegenNativeCommands = module_1(codegenNativeCommands2);
const codegenNativeComponent = module_1(codegenNativeComponent2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let obj = { uiViewClassName: "RCTRefreshControl", directEventTypes: { topRefresh: { registrationName: "onRefresh" } } };
obj = { tintColor: null, titleColor: null, title: true, progressViewOffset: true, refreshing: true };
obj = { process: processColor.default };
obj.tintColor = obj;
obj.titleColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onRefresh: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RCTRefreshControl", () => obj);
export const Commands = {
  setNativeRefreshing(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "setNativeRefreshing", items);
  }
};
