// Module ID: 918
// Function ID: 9784
// Name: ScreenContainer
// Dependencies: [1, 203, 2, 119, 919, 920, 251, 905]
// Exports: default

// Module 918 (ScreenContainer)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import enableFreeze from "enableFreeze" /* 905 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 919 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 920 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = module_1(getIteratorFn2);
let closure_4 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_5 = module_1(__INTERNAL_VIEW_CONFIG2);
let closure_7 = ["enabled", "hasTwoStates"];

export default function ScreenContainer(enabled) {
  enabled = enabled.enabled;
  if (enabled === undefined) {
    enabled = enableFreeze.screensEnabled();
  }
  const defaultResult = closure_2.default(enabled, closure_7);
  if (enabled) {
    if (enableFreeze.isNativePlatformSupported) {
      if (enabled.hasTwoStates) {
        if (RN.Platform.OS === "ios") {
          let _default = mod2.default;
        } else {
          _default = mod.default;
        }
        const _Object2 = Object;
        return <_default {...Object.assign({}, defaultResult)} />;
      } else {
        const _Object = Object;
        return <mod.default {...Object.assign({}, defaultResult)} />;
      }
    }
  }
  return <RN.View {...Object.assign({}, defaultResult)} />;
};
