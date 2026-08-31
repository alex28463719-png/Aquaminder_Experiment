// Module ID: 330
// Function ID: 4003
// Name: reduceAnimatedProps
// Dependencies: [1, 38, 311, 310, 317, 331, 73, 304, 119, 332, 316, 333]
// Exports: default

// Module 330 (reduceAnimatedProps)
import _slicedToArray from "_slicedToArray" /* 38 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import ensureGlobalEventEmitterListeners from "ensureGlobalEventEmitterListeners" /* 304 */;
import _callSuper from "_callSuper" /* 310 */;
import _assertNativeAnimatedModule2 from "_assertNativeAnimatedModule" /* 311 */;
import _callSuper2 from "_callSuper" /* 317 */;
import useRefEffect from "useRefEffect" /* 331 */;
import isLegacyFabricInstance from "isLegacyFabricInstance" /* 333 */;
import module_1 from "module_1" /* 1 */;
import closure_8 from "getIteratorFn" /* 119 */;

function reduceAnimatedProps(__getValueWithStaticProps, style) {
  return Object.assign({}, __getValueWithStaticProps.__getValueWithStaticProps(style), { collapsable: false });
}
function addListenersToPropsValue(item10018, arr) {
  if (item10018 instanceof mod.default) {
    const obj = {
      propValue: item10018,
      listenerId: item10018.addListener(() => {

        })
    };
    arr.push(obj);
  } else {
    const _Array = Array;
    if (Array.isArray(item10018)) {
      for (const item10018 of arg0) {
        let tmp6 = addListenersToPropsValue;
        let tmp7 = arg1;
        let tmp8 = addListenersToPropsValue(item10018, arg1);
        continue;
      }
    } else {
      const _Object = Object;
      if (item10018 instanceof Object) {
        addAnimatedValuesListenersToProps(item10018, arr);
      }
    }
  }
}
function addAnimatedValuesListenersToProps(item10018, arr) {
  for (const key10005 in arg0) {
    let tmp = key10005;
    let tmp2 = addListenersToPropsValue;
    let tmp3 = addListenersToPropsValue(arg0[key10005], arg1);
    continue;
  }
}
function useAnimatedPropsLifecycleWithPrevNodeRef(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef(null);
  closure_2 = React.useRef(false);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_2.current = false;
    return () => {
      closure_1_2.current = true;
    };
  }, []);
  const items = [arg0];
  const insertionEffect1 = React.useInsertionEffect(() => {
    closure_0.__attach();
    if (ref.current != null) {
      const current = ref.current;
      const result = current.__restoreDefaultValues();
      current.__detach();
      ref.current = null;
    }
    return () => {
      if (closure_1_2.current) {
        closure_1_0.__detach();
      } else {
        closure_1_1.current = closure_1_0;
      }
    };
  }, items);
}
function useAnimatedPropsLifecycleWithCleanupInMicrotask(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef(false);
  const items = [arg0];
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = true;
    closure_0.__attach();
    return () => {
      closure_1_1.current = false;
      queueMicrotask(() => {
        if (closure_2_1.current) {
          const result = closure_2_0.__restoreDefaultValues();
        }
        closure_2_0.__detach();
      });
    };
  }, items);
}
function getEventTarget(obj) {
  let scrollableNode = obj;
  if (typeof obj === "object") {
    let getScrollableNode;
    if (obj != null) {
      getScrollableNode = obj.getScrollableNode;
    }
    scrollableNode = obj;
    if (typeof getScrollableNode === "function") {
      scrollableNode = obj.getScrollableNode();
    }
  }
  return scrollableNode;
}
function isFabricInstance(getNativeScrollRef) {
  let isPublicInstanceResult = isLegacyFabricInstance.isPublicInstance(getNativeScrollRef);
  if (!isPublicInstanceResult) {
    let nativeScrollRef;
    if (getNativeScrollRef != null) {
      if (getNativeScrollRef.getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef.getNativeScrollRef();
      }
    }
    isPublicInstanceResult = isLegacyFabricInstance.isPublicInstance(nativeScrollRef);
  }
  if (!isPublicInstanceResult) {
    let nativeScrollRef1;
    if (getNativeScrollRef != null) {
      if (getNativeScrollRef.getScrollResponder != null) {
        const scrollResponder = getNativeScrollRef.getScrollResponder();
        if (scrollResponder != null) {
          if (scrollResponder.getNativeScrollRef != null) {
            nativeScrollRef1 = scrollResponder.getNativeScrollRef();
          }
        }
      }
    }
    isPublicInstanceResult = isLegacyFabricInstance.isPublicInstance(nativeScrollRef1);
  }
  return isPublicInstanceResult;
}
let closure_2 = module_1(_slicedToArray);
const _assertNativeAnimatedModule = module_1(_assertNativeAnimatedModule2);
let closure_3 = module_1(_callSuper);
let closure_4 = module_1(_callSuper2);
let closure_5 = module_1(useRefEffect);
let closure_6 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);
let closure_7 = module_1(ensureGlobalEventEmitterListeners);

export default function createAnimatedPropsHook(arg0) {
  const _require = arg0;
  dependencyMap = _require(332).createAnimatedPropsMemoHook(arg0);
  return function useAnimatedProps(arg0) {
    closure_0 = arg0;
    const callback = closure_1_2.default(closure_1_8.useReducer((arg0) => arg0 + 1, 0), 2)[1];
    closure_2 = closure_1_8.useRef(null);
    closure_3 = closure_1_8.useRef(null);
    let tmp = callback(() => new closure_2_3.default(closure_0, () => {
      let currentResult;
      if (closure_1_2.current != null) {
        currentResult = closure_1_2.current();
      }
      return currentResult;
    }, closure_0), arg0);
    closure_4 = tmp;
    const result = closure_1_6.shouldUseSetNativePropsInFabric();
    const effect = closure_1_8.useEffect(() => {
      const API = closure_2_7.default.API;
      API.flushQueue();
      closure_0 = null;
      if (nativeView.__isNative) {
        const nativeEventEmitter = closure_2_7.default.nativeEventEmitter;
        closure_0 = nativeEventEmitter.addListener("onUserDrivenAnimationEnded", (arg0) => {
          closure_1_4.update();
        });
      }
      return () => {
        if (closure_0 != null) {
          closure_0.remove();
        }
      };
    });
    closure_1_6.scheduleAnimatedCleanupInMicrotask() ? closure_1_14 : closure_1_13(tmp);
    let items = [tmp, result, arg0];
    let items1 = [
      closure_1_10(tmp, arg0),
      closure_1_5.default(closure_1_8.useCallback((arg0) => {
        dependencyMap = arg0;
        nativeView.setNativeView(arg0);
        items.current = () => {
          const tmp = closure_3_16(store);
          if (closure_1_4.__isNative) {
            if (tmp) {
              callback();
            }
          } else {
            if (typeof store === "object") {
              let setNativeProps;
              if (store != null) {
                setNativeProps = store.setNativeProps;
              }
              if (typeof setNativeProps === "function") {
                if (tmp) {
                  if (closure_1_5) {
                    store.setNativeProps(closure_1_4.__getAnimatedValue());
                    if (items1.current != null) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(items1.current);
                    }
                    const _setTimeout = setTimeout;
                    items1.current = setTimeout(() => {
                      items1.current = null;
                      callback();
                    }, 48);
                  } else {
                    return callback();
                  }
                } else {
                  return store.setNativeProps(closure_1_4.__getAnimatedValue());
                }
              }
            }
            return callback();
          }
        };
        const tmp2 = closure_2_15(arg0);
        const table = tmp2;
        items = [];
        const items1 = [];
        for (const key10014 in closure_0) {
          let tmp7 = key10014;
          let tmp8 = dependencyMap;
          let obj = dependencyMap[key10014];
          let tmp9 = dependencyMap;
          let tmp10 = table;
          if (!(obj instanceof dependencyMap(table[10]).AnimatedEvent)) {
            continue;
          } else {
            if (!obj.__isNative) {
              continue;
            } else {
              let __attachResult = obj.__attach(tmp2, key10014);
              let items2 = [key10014, obj];
              let arr = items.push(items2);
              let tmp5 = closure_2_11;
              let tmp6 = closure_2_11(obj, items1);
              continue;
            }
            continue;
          }
          continue;
        }
        return () => {
          items.current = null;
          while (tmp !== undefined) {
            let tmp3 = closure_3_2;
            let defaultResult = closure_3_2.default(tmp2, 2);
            let obj = defaultResult[1];
            let tmp5 = closure_1;
            let __detachResult = obj.__detach(closure_1, defaultResult[0]);
            continue;
          }
          for (const item10023 of items1) {
            let propValue = item10023.propValue;
            let removeListenerResult = propValue.removeListener(item10023.listenerId);
            continue;
          }
        };
      }, items))
    ];
    return items1;
  };
};
