// Module ID: 74
// Function ID: 1048
// Name: createGetter
// Dependencies: [1, 75]
// Exports: createJavaScriptFlagGetter, createNativeFlagGetter, getOverrides, setOverrides

// Module 74 (createGetter)
import NativeReactNativeFeatureFlagsCxx from "NativeReactNativeFeatureFlagsCxx" /* 75 */;
import module_1 from "module_1" /* 1 */;

function createGetter(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  return () => {
    if (closure_2 == null) {
      let tmp2 = callback();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
function maybeLogUnavailableNativeModuleError(arg0) {
  if (!mod.default) {
    if (!set1.has(arg0)) {
      set1.add(arg0);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + arg0 + "' because native module method was not available");
    }
  }
}
let closure_0 = module_1(NativeReactNativeFeatureFlagsCxx);
const set = new Set();
const set1 = new Set();

export function createJavaScriptFlagGetter(animatedShouldDebounceQueueFlush, arg1) {
  closure_0 = animatedShouldDebounceQueueFlush;
  closure_1 = arg1;
  return createGetter(undefined, () => {
    set.add(closure_0);
    let callResult;
    if (closure_1_2 != null) {
      if (tmp2[closure_0] != null) {
        callResult = obj.call(tmp2, set);
      }
    }
    return callResult;
  }, arg1);
}
export function createNativeFlagGetter(commonTestFlag, arg1) {
  closure_0 = commonTestFlag;
  return createGetter(undefined, () => {
    closure_1_5(mod);
    let callResult;
    if (mod.default != null) {
      if (mod.default[mod] != null) {
        callResult = obj.call(mod.default);
      }
    }
    return callResult;
  }, arg1);
}
export function getOverrides() {
  return closure_2;
}
export function setOverrides(arg0) {
  if (closure_2 != null) {
    const _Error2 = Error;
    const error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Feature flags were accessed before being overridden: " + Array.from(set).join(", "));
    throw error1;
  } else {
    closure_2 = arg0;
  }
}
