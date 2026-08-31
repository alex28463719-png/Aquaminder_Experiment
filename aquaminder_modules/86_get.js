// Module ID: 86
// Function ID: 1204
// Name: get
// Dependencies: [1, 87, 44, 117, 118, 20, 119, 121]
// Exports: getWithFallback_DEPRECATED, setRuntimeConfigProvider, unstable_hasStaticViewConfig

// Module 86 (get)
import invariant from "invariant" /* 20 */;
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import attachDefaultEventTypes from "attachDefaultEventTypes" /* 87 */;
import processEventTypes from "processEventTypes" /* 117 */;
import accumulateDifferences from "accumulateDifferences" /* 118 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

function get(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_5.register(arg0, () => {
    let tmp;
    if (closure_1_8 != null) {
      tmp = closure_1_8(RNBridgeless);
    }
    if (tmp == null) {
      const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
      tmp = obj;
    }
    ({ native, verify } = tmp);
    if (native) {
      let defaultResult = closure_1_3.default(RNBridgeless);
      if (defaultResult == null) {
        defaultResult = callback(closure_1_2[7]).createViewConfig(callback());
      }
      let viewConfig = defaultResult;
    } else {
      viewConfig = callback(closure_1_2[7]).createViewConfig(callback());
      if (viewConfig == null) {
        viewConfig = closure_1_3.default(RNBridgeless);
      }
    }
    closure_1_7.default(viewConfig != null, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
    if (verify) {
      let defaultResult2 = viewConfig;
      if (!native) {
        defaultResult2 = closure_1_3.default(RNBridgeless);
      }
      if (defaultResult2 == null) {
        return viewConfig;
      } else {
        let viewConfig1 = viewConfig;
        if (native) {
          viewConfig1 = callback(closure_1_2[7]).createViewConfig(callback());
        }
        const validateResult = closure_1_6.validate(RNBridgeless, defaultResult2, viewConfig1);
        if (validateResult.type === "invalid") {
          const _console = console;
          console.error(closure_1_6.stringifyValidationResult(RNBridgeless, validateResult));
        }
      }
    }
    return viewConfig;
  });
  return arg0;
}
function hasNativeViewConfig(arg0) {
  closure_7.default(closure_8 == null, "Unexpected invocation!");
  return mod.default.getViewManagerConfig(arg0) != null;
}
let closure_3 = module_1(attachDefaultEventTypes);
let closure_4 = module_1(isFabricReactTag);
let closure_5 = _interopRequireWildcard(processEventTypes);
let closure_6 = _interopRequireWildcard(accumulateDifferences);
let closure_7 = module_1(invariant);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export { get };
export function getWithFallback_DEPRECATED(arg0, arg1) {
  if (callback == null) {
    if (hasNativeViewConfig(arg0)) {
      get(arg0, arg1);
      return arg0;
    }
  } else if (callback(arg0) != null) {
    get(arg0, arg1);
    return arg0;
  }
  class FallbackNativeComponent {
    constructor(arg0) {
      return null;
    }
  }
  FallbackNativeComponent.displayName = "Fallback(" + arg0 + ")";
  return FallbackNativeComponent;
}
export function setRuntimeConfigProvider(arg0) {
  if (closure_8 === undefined) {
    closure_8 = arg0;
  }
}
export function unstable_hasStaticViewConfig(arg0) {
  let tmp;
  if (callback != null) {
    tmp = callback(arg0);
  }
  if (tmp == null) {
    const obj = { native: true };
    tmp = obj;
  }
  return !tmp.native;
}
