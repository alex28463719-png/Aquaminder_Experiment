// Module ID: 304
// Function ID: 3536
// Name: ensureGlobalEventEmitterListeners
// Dependencies: [1, 305, 308, 191, 22, 33, 73, 20, 45]

// Module 304 (ensureGlobalEventEmitterListeners)
import invariant from "invariant" /* 20 */;
import _callSuper from "_callSuper" /* 22 */;
import get_Version from "get Version" /* 33 */;
import nullthrows from "nullthrows" /* 45 */;
import animatedShouldDebounceQueueFlush2 from "animatedShouldDebounceQueueFlush" /* 73 */;
import NativeEventEmitter from "NativeEventEmitter" /* 191 */;
import _mod305 from "module_305" /* 305 */;
import _mod308 from "module_308" /* 308 */;
import module_1 from "module_1" /* 1 */;

function ensureGlobalEventEmitterListeners() {
  closure_18 = mod2.default.addListener("onNativeAnimatedModuleGetValue", (value) => {
    if (closure_1_16[value.tag]) {
      tmp3(value.value);
      delete tmp[tmp2];
    }
  });
  closure_19 = mod2.default.addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
    let tmp3 = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp3 = items;
    }
    for (const item10013 of tmp3) {
      let animationId = item10013.animationId;
      let tmp5 = animationId;
      let tmp6 = closure_1_17;
      let tmp7 = closure_1_17[animationId];
      if (tmp7) {
        let tmp9 = tmp7;
        let tmp10 = item10013;
        let tmp8Result = tmp8(tmp4);
        let tmp12 = closure_1_17;
        let tmp13 = animationId;
        delete tmp2[tmp];
      }
      continue;
    }
  });
}
const module_305 = module_1(_mod305);
const module_308 = module_1(_mod308);
let closure_0 = module_1(NativeEventEmitter);
let closure_1 = module_1(_callSuper);
get_Version = module_1(get_Version);
let animatedShouldDebounceQueueFlush = _interopRequireWildcard(animatedShouldDebounceQueueFlush2);
let closure_4 = module_1(invariant);
let closure_5 = module_1(nullthrows);
let tmp6 = module_305.default != null ? module_305.default : module_308.default;
let closure_6 = tmp6;
let c7 = 1;
let c8 = 1;
const set = new Set();
let c11 = false;
let closure_12 = [];
let closure_13 = [];
let result = get_Version.default.OS === "android";
if (result) {
  let prop;
  if (tmp6 != null) {
    prop = tmp6.queueAndExecuteBatchedOperations;
  }
  result = prop != null;
}
if (result) {
  result = animatedShouldDebounceQueueFlush.animatedShouldUseSingleOp();
}
let c15 = null;
let closure_16 = {};
let closure_17 = {};
let c18 = null;
let c19 = null;
let closure_20 = (function createNativeOperations() {
  let sum;
  let items = ["createAnimatedNode", "updateAnimatedNodeConfig", "getValue", "startListeningToAnimatedNodeValue", "stopListeningToAnimatedNodeValue", "connectAnimatedNodes", "disconnectAnimatedNodes", "startAnimatingNode", "stopAnimation", "setAnimatedNodeValue", "setAnimatedNodeOffset", "flattenAnimatedNodeOffset", "extractAnimatedNodeOffset", "connectAnimatedNodeToView", "disconnectAnimatedNodeFromView", "restoreDefaultValues", "dropAnimatedNode", "addAnimatedEventToView", "removeAnimatedEventFromView", "addListener", "removeListener"];
  let obj = {};
  if (closure_14) {
    let num2 = 0;
    c2 = 0;
    if (0 < items.length) {
      do {
        let tmp3 = (function _loop() {
          items = c2 + 1;
          obj[items[c2]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            const push = closure_2_13.push;
            items = [closure_0];
            push.apply(closure_2_13, items.concat(array));
          };
        })();
        sum = num2 + 1;
        c2 = sum;
        num2 = sum;
      } while (sum < length2);
    }
  } else {
    let num = 0;
    let sum1 = 0;
    if (0 < items.length) {
      do {
        let tmp = (function _loop2() {
          items = tmp;
          obj[items[sum1]] = () => {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              array[num] = arguments[num];
            }
            obj = closure_2_5.default(closure_2_6)[array];
            if (!closure_2_11) {
              if (closure_2_12.length === 0) {
                obj.apply(undefined, array);
              }
            }
            closure_2_12.push(() => obj.apply(undefined, array));
          };
        })();
        sum1 = num + 1;
        num = sum1;
      } while (sum1 < length);
    }
  }
  return obj;
})();
animatedShouldDebounceQueueFlush = {
  getValue: result ? ((arg0, arg1) => {
    if (arg1) {
      closure_16[arg0] = arg1;
    }
    const value = store.getValue(arg0);
  }) : ((arg0, arg1) => {
    const value = store.getValue(arg0, arg1);
  }),
  setWaitingForIdentifier(combined) {
    set.add(combined);
    c11 = true;
    if (animatedShouldDebounceQueueFlush.animatedShouldDebounceQueueFlush()) {
      if (c15) {
        if (animatedShouldDebounceQueueFlush.enableAnimatedClearImmediateFix()) {
          const _clearImmediate = clearImmediate;
          clearImmediate(c15);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(c15);
        }
      }
    }
  },
  unsetWaitingForIdentifier(combined) {
    set.delete(combined);
    if (set.size === 0) {
      c11 = false;
      animatedShouldDebounceQueueFlush.disableQueue();
    }
  },
  disableQueue() {
    closure_4.default(closure_6, "Native animated module is not available");
    if (animatedShouldDebounceQueueFlush.animatedShouldDebounceQueueFlush()) {
      const _clearImmediate = clearImmediate;
      clearImmediate(immediate);
      const _setImmediate = setImmediate;
      immediate = setImmediate(animatedShouldDebounceQueueFlush.flushQueue);
    } else {
      animatedShouldDebounceQueueFlush.flushQueue();
    }
  },
  flushQueue: result ? (() => {
    closure_4.default(closure_6, "Native animated module is not available");
    c15 = null;
    if (length.length !== 0) {
      ensureGlobalEventEmitterListeners();
      let tmp5 = closure_6 == null;
      if (!tmp5) {
        tmp5 = closure_6.queueAndExecuteBatchedOperations == null;
      }
      if (!tmp5) {
        result = closure_6.queueAndExecuteBatchedOperations(length);
      }
      length.length = 0;
    }
  }) : (() => {
    closure_4.default(closure_6, "Native animated module is not available");
    c15 = null;
    if (lib.length !== 0) {
      if (get_Version.default.OS === "android") {
        let tmp3 = closure_6 == null;
        if (!tmp3) {
          tmp3 = closure_6.startOperationBatch == null;
        }
        if (!tmp3) {
          closure_6.startOperationBatch();
        }
      }
      for (let num = 0; num < length; num = num + 1) {
        let tmp8 = lib;
        let tmp9 = lib[num]();
      }
      lib.length = 0;
      if (get_Version.default.OS === "android") {
        let tmp13 = closure_6 == null;
        if (!tmp13) {
          tmp13 = closure_6.finishOperationBatch == null;
        }
        if (!tmp13) {
          closure_6.finishOperationBatch();
        }
      }
    }
  }),
  createAnimatedNode(newNodeTag, __getNativeConfigResult) {
    const animatedNode = store.createAnimatedNode(newNodeTag, __getNativeConfigResult);
  },
  updateAnimatedNodeConfig(arg0, self) {
    if (store.updateAnimatedNodeConfig != null) {
      result = store.updateAnimatedNodeConfig(arg0, self);
    }
  },
  startListeningToAnimatedNodeValue(__getNativeTagResult) {
    result = store.startListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  stopListeningToAnimatedNodeValue(closure_1) {
    result = store.stopListeningToAnimatedNodeValue(closure_1);
  },
  connectAnimatedNodes(arg0, arg1) {
    store.connectAnimatedNodes(arg0, arg1);
  },
  disconnectAnimatedNodes(arg0, arg1) {
    result = store.disconnectAnimatedNodes(arg0, arg1);
  },
  startAnimatingNode: result ? ((arg0, arg1, arg2, arg3) => {
    if (arg3) {
      closure_17[arg0] = arg3;
    }
    store.startAnimatingNode(arg0, arg1, arg2);
  }) : ((arg0, arg1, arg2, arg3) => {
    store.startAnimatingNode(arg0, arg1, arg2, arg3);
  }),
  stopAnimation(arg0) {
    store.stopAnimation(arg0);
  },
  setAnimatedNodeValue(self, _startingValue) {
    store.setAnimatedNodeValue(self, _startingValue);
  },
  setAnimatedNodeOffset(self, _offset) {
    result = store.setAnimatedNodeOffset(self, _offset);
  },
  flattenAnimatedNodeOffset(self) {
    result = store.flattenAnimatedNodeOffset(self);
  },
  extractAnimatedNodeOffset(self) {
    result = store.extractAnimatedNodeOffset(self);
  },
  connectAnimatedNodeToView(self, findNodeHandleResult) {
    result = store.connectAnimatedNodeToView(self, findNodeHandleResult);
  },
  disconnectAnimatedNodeFromView(self, findNodeHandleResult) {
    result = store.disconnectAnimatedNodeFromView(self, findNodeHandleResult);
  },
  restoreDefaultValues(self) {
    if (store.restoreDefaultValues != null) {
      store.restoreDefaultValues(self);
    }
  },
  dropAnimatedNode(__nativeTag) {
    store.dropAnimatedNode(__nativeTag);
  },
  addAnimatedEventToView(closure_4, closure_0, arg2) {
    result = store.addAnimatedEventToView(closure_4, closure_0, arg2);
  },
  removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag) {
    result = store.removeAnimatedEventFromView(closure_1_4, closure_1_0, animatedValueTag);
  }
};
let c22 = false;
animatedShouldDebounceQueueFlush = {
  API: animatedShouldDebounceQueueFlush,
  generateNewNodeTag() {
    closure_7 = tmp + 1;
    return +closure_7;
  },
  generateNewAnimationId() {
    closure_8 = tmp + 1;
    return +closure_8;
  },
  assertNativeAnimatedModule() {
    closure_4.default(closure_6, "Native animated module is not available");
  },
  shouldUseNativeDriver(useNativeDriver) {
    if (useNativeDriver.useNativeDriver == null) {
      const _console = console;
      console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
    }
    if (useNativeDriver.useNativeDriver === true) {
      if (!closure_6) {
        if (!c22) {
          const _console2 = console;
          console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
          c22 = true;
        }
        return false;
      }
    }
    return useNativeDriver.useNativeDriver || false;
  },
  transformDataType(str) {
    if (typeof str !== "string") {
      return str;
    } else if (str.endsWith("deg")) {
      const _parseFloat2 = parseFloat;
      const _Math = Math;
      return (parseFloat(str) || 0) * Math.PI / 180;
    } else if (str.endsWith("rad")) {
      const _parseFloat = parseFloat;
      return parseFloat(str) || 0;
    } else {
      return str;
    }
  }
};
Object.defineProperty(animatedShouldDebounceQueueFlush, "nativeEventEmitter", {
  get: () => {
    if (!_default) {
      _default = mod.default;
      let tmp3 = null;
      if (get_Version.default.OS === "ios") {
        tmp3 = closure_6;
      }
      const prototype = _default.prototype;
      _default = new _default(tmp3);
    }
    return _default;
  },
  set: undefined
});

export default animatedShouldDebounceQueueFlush;
