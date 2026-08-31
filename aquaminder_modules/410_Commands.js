// Module ID: 410
// Function ID: 4891
// Name: Commands
// Dependencies: [1, 125, 279, 119, 89, 124, 86, 57]

// Module 410 (Commands)
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
let obj = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } } };
obj = { keyboardDismissMode: true, drawerBackgroundColor: null, drawerPosition: true, drawerWidth: true, drawerLockMode: true };
obj = { process: processColor.default };
obj.drawerBackgroundColor = obj;
obj.statusBarBackgroundColor = { process: processColor.default };
const obj1 = { process: processColor.default };
obj.validAttributes = Object.assign(obj, ConditionallyIgnoredEventHandlers.ConditionallyIgnoredEventHandlers({ onDrawerSlide: true, onDrawerStateChanged: true, onDrawerOpen: true, onDrawerClose: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("AndroidDrawerLayout", () => obj);
export const Commands = {
  openDrawer(result) {
    keys.dispatchCommand(result, "openDrawer", []);
  },
  closeDrawer(result) {
    keys.dispatchCommand(result, "closeDrawer", []);
  }
};
