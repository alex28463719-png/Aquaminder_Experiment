// Module ID: 44
// Function ID: 360
// Name: isFabricReactTag
// Dependencies: [1, 45, 46, 49, 47]

// Module 44 (isFabricReactTag)
import nullthrows from "nullthrows" /* 45 */;
import raiseSoftError from "raiseSoftError" /* 46 */;
import createProxyWithCachedProperties from "createProxyWithCachedProperties" /* 47 */;
import _getConstants from "_getConstants" /* 49 */;
import module_1 from "module_1" /* 1 */;

function isFabricReactTag(arg0) {
  return arg0 % 2 === 0;
}
let closure_2 = module_1(nullthrows);
if (global.RN$Bridgeless === true) {
  let _default = raiseSoftError.default;
} else {
  _default = _getConstants.default;
}

export default Object.assign({}, _default, {
  measure(arg0, arg1) {
    if (isFabricReactTag(arg0)) {
      const defaultResult = closure_2.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        defaultResult.measure(result, arg1);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        arg1();
      }
    } else {
      _default.measure(arg0, arg1);
    }
  },
  measureInWindow(arg0, arg1) {
    if (isFabricReactTag(arg0)) {
      const defaultResult = closure_2.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        defaultResult.measureInWindow(result, arg1);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        arg1();
      }
    } else {
      _default.measureInWindow(arg0, arg1);
    }
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    if (isFabricReactTag(arg0)) {
      const defaultResult = closure_2.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      const result1 = defaultResult.findShadowNodeByTag_DEPRECATED(arg1);
      if (result) {
        if (result1) {
          defaultResult.measureLayout(result, result1, arg2, arg3);
        }
      }
    } else {
      _default.measureLayout(arg0, arg1, arg2, arg3);
    }
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    const _require = arg2;
    if (isFabricReactTag(arg0)) {
      const _console = console;
      console.warn("RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450");
      const defaultResult = closure_2.default(_require(47).getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        defaultResult.measure(result, (arg0, arg1, arg2, arg3, arg4, arg5) => {
          callback(arg0, arg1, arg2, arg3);
        });
      }
    } else {
      const result1 = _default.measureLayoutRelativeToParent(arg0, arg1, arg2);
    }
  },
  dispatchViewManagerCommand(num, arg1, items) {
    if (typeof num !== "number") {
      const _Error = Error;
      const error = new Error("dispatchViewManagerCommand: found null reactTag");
      throw error;
    } else if (isFabricReactTag(num)) {
      const defaultResult = closure_2.default(createProxyWithCachedProperties.getFabricUIManager());
      const result = defaultResult.findShadowNodeByTag_DEPRECATED(num);
      if (result) {
        const _HermesInternal = HermesInternal;
        defaultResult.dispatchCommand(result, "" + arg1, items);
      }
    } else {
      const result1 = _default.dispatchViewManagerCommand(num, arg1, items);
    }
  }
});
