// Module ID: 1033
// Function ID: 10916
// Name: GestureHandlerRootView
// Dependencies: [1, 203, 119, 2, 969, 1034, 251, 1035]
// Exports: default

// Module 1033 (GestureHandlerRootView)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod969 from "module_969" /* 969 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 1034 */;
import initialize from "initialize" /* 1035 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_3 = module_1(_mod969);
let closure_4 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_6 = ["style"];
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const result = initialize.maybeInitializeFabric();
  const obj = {};
  if (container == null) {
    container = container.container;
  }
  obj.style = container;
  obj.children = <mod2.default {...Object.assign(obj, closure_2.default(arg0, closure_6))} />;
  return React.jsx(mod.default.Provider, {});
};
