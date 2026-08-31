// Module ID: 375
// Function ID: 4615
// Name: Commands
// Dependencies: [1, 125, 279, 119, 105, 89, 124, 86, 57]

// Module 375 (Commands)
import keys from "keys" /* 57 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import ConditionallyIgnoredEventHandlers from "ConditionallyIgnoredEventHandlers" /* 124 */;
import codegenNativeCommands2 from "codegenNativeCommands" /* 125 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 279 */;
import module_1 from "module_1" /* 1 */;
import processColorElement from "processColorElement" /* 105 */;
import get from "get" /* 86 */;

const codegenNativeCommands = module_1(codegenNativeCommands2);
const codegenNativeComponent = module_1(codegenNativeComponent2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let obj = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } } };
obj = { enabled: true, colors: null, progressBackgroundColor: null, size: true, progressViewOffset: true, refreshing: true };
obj = {};
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
obj.process = processColorElement;
obj.colors = obj;
obj.progressBackgroundColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onRefresh: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("AndroidSwipeRefreshLayout", () => obj);
export const Commands = {
  setNativeRefreshing(result) {
    const items = [arg1];
    keys.dispatchCommand(result, "setNativeRefreshing", items);
  }
};
