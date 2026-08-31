// Module ID: 952
// Function ID: 9942
// Name: MaybeScreen
// Dependencies: [1, 203, 119, 2, 251, 898]
// Exports: MaybeScreen

// Module 952 (MaybeScreen)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod898 from "module_898" /* 898 */;
import module_1 from "module_1" /* 1 */;
import closure_1 from "get registerCallableModule" /* 2 */;
import closure_2 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_3 = ["enabled"];
let closure_4 = ["enabled", "active"];
try {
  let closure_5 = _mod898;
  exports.MaybeScreenContainer = function MaybeScreenContainer(enabled) {
    const defaultResult = closure_0.default(enabled, closure_3);
    let obj = closure_5;
    if (closure_5 != null) {
      if (obj.screensEnabled != null) {
        if (obj.screensEnabled()) {
          const _Object = Object;
          obj = { enabled: enabled.enabled };
          return <closure_5.ScreenContainer {...Object.assign(obj, defaultResult)} />;
        }
      }
    }
    return <RN.View {...Object.assign({}, defaultResult)} />;
  };
} catch (err) {
}

export function MaybeScreen(arg0) {
  ({ enabled, active } = arg0);
  const defaultResult = closure_0.default(arg0, closure_4);
  let obj = closure_5;
  if (closure_5 != null) {
    if (obj.screensEnabled != null) {
      if (obj.screensEnabled()) {
        const _Object = Object;
        obj = { enabled, activityState: active };
        return <closure_5.Screen {...Object.assign(obj, defaultResult)} />;
      }
    }
  }
  return <RN.View {...Object.assign({}, defaultResult)} />;
}
