// Module ID: 875
// Function ID: 9592
// Name: MaskedView
// Dependencies: [1, 203, 119, 2, 251]
// Exports: MaskedView

// Module 875 (MaskedView)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_1 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_2 = ["children"];
try {
  let closure_3 = require(dependencyMap[5]).default;
  const UIManager = get_registerCallableModule.UIManager;
  let closure_4 = UIManager.getViewManagerConfig("RNCMaskedView") != null;
} catch (err) {
}

export function MaskedView(children) {
  children = children.children;
  if (closure_4) {
    if (closure_3) {
      const _Object = Object;
      const obj = { children };
      return <closure_3 {...Object.assign({}, tmp, obj)} />;
    }
  }
  return children;
}
