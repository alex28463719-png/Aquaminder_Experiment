// Module ID: 1029
// Function ID: 10891
// Name: gestureHandlerRootHOC
// Dependencies: [1, 119, 2, 1030, 1033, 251]
// Exports: default

// Module 1029 (gestureHandlerRootHOC)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import getStatics from "getStatics" /* 1030 */;
import GestureHandlerRootView from "GestureHandlerRootView" /* 1033 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_2 from "jsxProd" /* 251 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_0 = module_1(getStatics);
let closure_1 = module_1(GestureHandlerRootView);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function gestureHandlerRootHOC(displayName) {
  closure_0 = displayName;
  closure_1 = arg1;
  class Wrapper {
    constructor(arg0) {
      obj = { style: items, children: closure_1_2.jsx(closure_0, Object.assign({}, displayName)) };
      items = [, ];
      items[0] = closure_1_3.container;
      items[1] = closure_1;
      return closure_1_2.jsx(closure_1.default, obj);
    }
  }
  Wrapper.displayName = "gestureHandlerRootHOC(" + displayName.displayName || displayName.name + ")";
  closure_0.default(Wrapper, displayName);
  return Wrapper;
};
