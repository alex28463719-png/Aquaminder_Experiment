// Module ID: 853
// Function ID: 9387
// Name: Background
// Dependencies: [1, 203, 119, 2, 251, 529]
// Exports: Background

// Module 853 (Background)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = ["style"];

export function Background(style) {
  let obj = {};
  obj = { flex: 1, backgroundColor: _mod529.useTheme().colors.background };
  const items = [obj, style.style];
  obj.style = items;
  return React.jsx(Animated.Animated.View, Object.assign({}, closure_2.default(style, closure_5), obj));
}
