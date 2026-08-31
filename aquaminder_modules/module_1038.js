// Module ID: 1038
// Function ID: 10952
// Dependencies: [1, 38, 203, 119, 2, 980, 251, 971, 1039, 987, 1040, 1000]

// Module 1038
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import hasProperty from "hasProperty" /* 971 */;
import _mod980 from "module_980" /* 980 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_6 = module_1(_mod980);
let closure_8 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "onHoverIn", "delayHoverOut", "onHoverOut", "delayLongPress", "unstable_pressDelay", "onPress", "onPressIn", "onPressOut", "onLongPress", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWithExternalGesture", "requireExternalGestureToFail", "blocksExternalGesture"];
let closure_9 = hasProperty.isTestEnv();
let c10 = null;

export default getIteratorFn.forwardRef((pressRetentionOffset) => {
  const _require = arg1;
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  const delayHoverIn = pressRetentionOffset.delayHoverIn;
  const onHoverIn = pressRetentionOffset.onHoverIn;
  const delayHoverOut = pressRetentionOffset.delayHoverOut;
  const onHoverOut = pressRetentionOffset.onHoverOut;
  ({ delayLongPress, unstable_pressDelay } = pressRetentionOffset);
  const onPress = pressRetentionOffset.onPress;
  const onPressIn = pressRetentionOffset.onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  closure_10 = onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ disabled, accessible, simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture } = pressRetentionOffset);
  closure_13 = { simultaneousWithExternalGesture, requireExternalGestureToFail, blocksExternalGesture };
  let flag = false;
  if (testOnly_pressed != null) {
    flag = testOnly_pressed;
  }
  const defaultResult1 = pressRetentionOffset.default(onHoverIn.useState(flag), 2);
  const first = defaultResult1[0];
  closure_14 = defaultResult1[1];
  closure_15 = onHoverIn.useRef(true);
  closure_16 = onHoverIn.useRef(false);
  closure_17 = onHoverIn.useRef(false);
  const items = [hitSlop];
  const memo = onHoverIn.useMemo(() => {
    if (typeof hitSlop === "number") {
      let numberAsInsetResult = callback(hitSlop[8]).numberAsInset(hitSlop);
    } else {
      numberAsInsetResult = hitSlop != null ? hitSlop : {};
    }
    return numberAsInsetResult;
  }, items);
  const items1 = [pressRetentionOffset];
  const memo1 = onHoverIn.useMemo(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = callback(hitSlop[8]).numberAsInset(pressRetentionOffset);
    } else {
      numberAsInsetResult = pressRetentionOffset != null ? pressRetentionOffset : {};
    }
    return numberAsInsetResult;
  }, items1);
  closure_19 = onHoverIn.useRef(null);
  closure_20 = onHoverIn.useRef(null);
  const items2 = [delayHoverIn, delayHoverOut, onHoverIn, onHoverOut];
  const memo2 = onHoverIn.useMemo(() => {
    const GestureObjects = callback(hitSlop[9]).GestureObjects;
    const HoverResult = GestureObjects.Hover();
    const manualActivationResult = GestureObjects.Hover().manualActivation(true);
    const cancelsTouchesInViewResult = GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false);
    return GestureObjects.Hover().manualActivation(true).cancelsTouchesInView(false).onBegin((closure_0) => {
      callback = closure_0;
      if (closure_1_20.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_20.current);
      }
      if (closure_1_3) {
        const _setTimeout = setTimeout;
        closure_1_19.current = setTimeout(() => {
          let tmp;
          if (closure_2_4 != null) {
            tmp = closure_2_4(callback(hitSlop[8]).gestureToPressableEvent(callback));
          }
          return tmp;
        }, closure_1_3);
      } else if (closure_1_4 != null) {
        closure_1_4(callback(hitSlop[8]).gestureToPressableEvent(closure_0));
      }
    }).onFinalize((closure_0) => {
      callback = closure_0;
      if (closure_1_19.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_1_19.current);
      }
      if (closure_1_5) {
        const _setTimeout = setTimeout;
        closure_1_20.current = setTimeout(() => {
          let tmp;
          if (closure_2_6 != null) {
            tmp = closure_2_6(callback(hitSlop[8]).gestureToPressableEvent(callback));
          }
          return tmp;
        }, closure_1_5);
      } else if (closure_1_6 != null) {
        closure_1_6(callback(hitSlop[8]).gestureToPressableEvent(closure_0));
      }
    });
  }, items2);
  closure_21 = onHoverIn.useRef(null);
  closure_22 = onHoverIn.useRef(false);
  closure_23 = onHoverIn.useRef(null);
  const items3 = [onPressIn];
  let callback = onHoverIn.useCallback((current) => {
    if (ref5.current) {
      closure_23.current = current;
    }
    if (ref3.current) {
      closure_23.current = null;
      if (onPressIn != null) {
        onPressIn(current);
      }
      closure_15.current = true;
      closure_21.current = null;
      callback3(true);
    }
  }, items3);
  const items4 = [onPress, onPressIn, onPressOut, callback, unstable_pressDelay];
  const callback1 = onHoverIn.useCallback((nativeEvent) => {
    if (ref3.current) {
      if (tmp.current) {
        if (nativeEvent.nativeEvent.touches.length <= nativeEvent.nativeEvent.changedTouches.length) {
          if (unstable_pressDelay) {
            if (closure_21.current !== null) {
              const _clearTimeout3 = clearTimeout;
              clearTimeout(closure_21.current);
              callback(nativeEvent);
            }
          }
          if (ref4.current) {
            if (onPressIn != null) {
              onPressIn(ref4.current);
            }
            ref4.current = null;
          }
          if (callback2 != null) {
            callback2(nativeEvent);
          }
          if (ref.current) {
            if (onPress != null) {
              onPress(nativeEvent);
            }
          }
          if (closure_30.current) {
            const _clearTimeout4 = clearTimeout;
            clearTimeout(closure_30.current);
            closure_30.current = null;
          }
          ref3.current = false;
          closure_16.current = false;
          ref.current = true;
          callback3(false);
        }
      }
    } else {
      tmp.current = false;
      ref.current = true;
      ref4.current = null;
      if (closure_30.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_30.current);
        closure_30.current = null;
      }
      if (closure_21.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_21.current);
        closure_21.current = null;
      }
    }
  }, items4);
  closure_26 = onHoverIn.useRef(false);
  closure_27 = onHoverIn.useRef(null);
  closure_28 = onHoverIn.useRef(false);
  const items5 = [onLongPress];
  const callback2 = onHoverIn.useCallback((closure_0) => {
    if (ref3.current) {
      if (ref2.current) {
        if (onLongPress) {
          onLongPress(callback(hitSlop[8]).gestureTouchToPressableEvent(closure_0));
          closure_15.current = false;
        }
      }
      if (closure_30.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_30.current);
        closure_30.current = null;
      }
    }
  }, items5);
  closure_30 = onHoverIn.useRef(null);
  let num = 500;
  if (delayLongPress != null) {
    num = delayLongPress;
  }
  let num2 = 0;
  if (unstable_pressDelay != null) {
    num2 = unstable_pressDelay;
  }
  const sum = num + num2;
  let ref = onHoverIn.useRef(null);
  const items6 = [callback2, sum, memo, callback, unstable_pressDelay];
  const callback3 = onHoverIn.useCallback((width, height, changedTouches) => {
    callback = changedTouches;
    changedTouches = changedTouches.changedTouches;
    if (callback(hitSlop[8]).isTouchWithinInset(obj, memo, changedTouches.at(-1))) {
      if (!ref2.current) {
        if (!ref7.current) {
          ref2.current = true;
          if (closure_30.current === null) {
            const _setTimeout = setTimeout;
            closure_30.current = setTimeout(() => closure_1_29(closure_0), closure_31);
          }
          if (unstable_pressDelay) {
            const _setTimeout2 = setTimeout;
            closure_21.current = setTimeout(() => {
              closure_1_24(changedTouches(hitSlop[8]).gestureTouchToPressableEvent(changedTouches));
            }, unstable_pressDelay);
          } else {
            callback(callback(hitSlop[8]).gestureTouchToPressableEvent(changedTouches));
          }
          if (ref6.current != null) {
            ref6.current();
          }
          ref6.current = null;
          closure_26.current = false;
        }
      }
    }
    ref7.current = false;
    ref6.current = null;
    closure_26.current = false;
  }, items6);
  const items7 = [arg1, callback3, callback1];
  const items8 = [callback, callback1];
  const memo3 = onHoverIn.useMemo(() => {
    const GestureObjects = callback(hitSlop[9]).GestureObjects;
    const LongPressResult = GestureObjects.LongPress();
    const minDurationResult = GestureObjects.LongPress().minDuration(callback(hitSlop[7]).INT32_MAX);
    const maxDistanceResult = GestureObjects.LongPress().minDuration(callback(hitSlop[7]).INT32_MAX).maxDistance(callback(hitSlop[7]).INT32_MAX);
    const cancelsTouchesInViewResult = GestureObjects.LongPress().minDuration(callback(hitSlop[7]).INT32_MAX).maxDistance(callback(hitSlop[7]).INT32_MAX).cancelsTouchesInView(false);
    const onTouchesDownResult = GestureObjects.LongPress().minDuration(callback(hitSlop[7]).INT32_MAX).maxDistance(callback(hitSlop[7]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown((arg0) => {
      closure_0 = arg0;
      closure_1_26.current = true;
      if (closure_1_0) {
        const current2 = closure_1_0.current;
        if (current2 != null) {
          current2.measure((arg0, arg1, arg2, arg3) => {
            closure_2_33(arg2, arg3, closure_0);
          });
        }
      } else {
        const current = closure_1_32.current;
        if (current != null) {
          current.measure((arg0, arg1, arg2, arg3) => {
            closure_2_33(arg2, arg3, closure_0);
          });
        }
      }
    });
    return GestureObjects.LongPress().minDuration(callback(hitSlop[7]).INT32_MAX).maxDistance(callback(hitSlop[7]).INT32_MAX).cancelsTouchesInView(false).onTouchesDown((arg0) => {
      closure_0 = arg0;
      closure_1_26.current = true;
      if (closure_1_0) {
        const current2 = closure_1_0.current;
        if (current2 != null) {
          current2.measure((arg0, arg1, arg2, arg3) => {
            closure_2_33(arg2, arg3, closure_0);
          });
        }
      } else {
        const current = closure_1_32.current;
        if (current != null) {
          current.measure((arg0, arg1, arg2, arg3) => {
            closure_2_33(arg2, arg3, closure_0);
          });
        }
      }
    }).onTouchesUp((closure_0) => {
      callback = closure_0;
      if (closure_1_26.current) {
        closure_1_27.current = () => closure_2_25(callback(hitSlop[8]).gestureTouchToPressableEvent(callback));
      } else {
        if (closure_1_23.current !== null) {
          closure_1_17.current = true;
        }
        closure_1_25(callback(hitSlop[8]).gestureTouchToPressableEvent(closure_0));
      }
    }).onTouchesCancelled((allTouches) => {
      callback = allTouches;
      closure_1_15.current = false;
      if (closure_1_26.current) {
        closure_1_28.current = true;
        closure_1_27.current = () => closure_2_25(allTouches(hitSlop[8]).gestureTouchToPressableEvent(allTouches));
      } else if (closure_1_16.current) {
        if (allTouches.allTouches.length <= allTouches.changedTouches.length) {
          closure_1_25(callback(hitSlop[8]).gestureTouchToPressableEvent(allTouches));
        }
      }
    });
  }, items7);
  const memo4 = onHoverIn.useMemo(() => {
    const GestureObjects = callback(hitSlop[9]).GestureObjects;
    const NativeResult = GestureObjects.Native();
    return GestureObjects.Native().onBegin(() => {
      if (delayHoverOut.Platform.OS === "android") {
        closure_1_22.current = true;
      }
    }).onStart(() => {
      if (delayHoverOut.Platform.OS === "web") {
        closure_1_22.current = true;
      }
      if (delayHoverOut.Platform.OS === "ios") {
        if (closure_1_23.current) {
          closure_1_22.current = true;
          if (closure_1_16.current) {
            closure_1_24(closure_1_23.current);
            closure_1_23.current = null;
          } else {
            closure_1_25(closure_1_23.current);
            closure_1_22.current = false;
          }
        } else if (closure_1_16.current) {
          closure_1_22.current = true;
        } else {
          if (closure_1_17.current) {
            closure_1_17.current = false;
          }
          closure_1_22.current = true;
        }
      }
    });
  }, items8);
  const addInsetsResult = _require(hitSlop[8]).addInsets(memo, memo1);
  closure_35 = tmp15;
  const items9 = [memo4, memo3, memo2];
  function _loop(item10128) {
    closure_0 = item10128;
    item10128.enabled(closure_35);
    let flag = true;
    item10128.runOnJS(true);
    item10128.hitSlop(closure_34);
    if (delayHoverOut.Platform.OS === "web") {
      flag = false;
    }
    const result = item10128.shouldCancelWhenOutside(flag);
    const entries = Object.entries(closure_13);
    const item = entries.forEach((arg0) => {
      [tmp2, tmp3] = pressRetentionOffset.default(arg0, 2);
      item10128(hitSlop[10]).applyRelationProp(item10128, tmp2, tmp3);
    });
  }
  for (const item10128 of items9) {
    let tmp16 = _loop;
    let _loopResult = _loop(item10128);
    continue;
  }
  memo4.hitSlop(memo);
  const Simultaneous = _require(hitSlop[9]).GestureObjects.Simultaneous;
  const defaultResult = delayHoverIn.default(pressRetentionOffset, onPress);
  if (delayHoverOut.Platform.OS === "web") {
    let obj = { cursor: "pointer" };
  } else {
    obj = {};
  }
  if (typeof style === "function") {
    const obj1 = { pressed: first };
    style = style(obj1);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj2 = { pressed: first };
    childrenResult = children(obj2);
  }
  const items10 = [android_ripple];
  const memo5 = onHoverIn.useMemo(() => {
    if (closure_10 === null) {
      closure_10 = callback(hitSlop[7]).isFabric();
    }
    let str = "transparent";
    let color;
    if (android_ripple != null) {
      color = android_ripple.color;
    }
    if (color != null) {
      str = color;
    }
    let processColorResult = str;
    if (!closure_10) {
      processColorResult = delayHoverOut.processColor(str);
    }
    return processColorResult;
  }, items10);
  const obj3 = { gesture: Simultaneous.apply(_require(hitSlop[9]).GestureObjects, items9) };
  const obj4 = {};
  if (arg1 != null) {
    ref = arg1;
  }
  obj4.ref = ref;
  obj4.accessible = accessible !== false;
  obj4.hitSlop = addInsetsResult;
  obj4.enabled = disabled !== true;
  let tmp23;
  if (android_disableSound != null) {
    tmp23 = android_disableSound;
  }
  obj4.touchSoundDisabled = tmp23;
  obj4.rippleColor = memo5;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  let tmp25;
  if (radius != null) {
    tmp25 = radius;
  }
  obj4.rippleRadius = tmp25;
  const items11 = [obj, style];
  obj4.style = items11;
  let tmp26;
  if (onPressIn) {
    tmp26 = onPress;
  }
  obj4.testOnly_onPress = tmp26;
  let tmp27;
  if (onPressIn) {
    tmp27 = onPressIn;
  }
  obj4.testOnly_onPressIn = tmp27;
  let tmp28;
  if (onPressIn) {
    tmp28 = onPressOut;
  }
  obj4.testOnly_onPressOut = tmp28;
  let tmp29;
  if (onPressIn) {
    tmp29 = onLongPress;
  }
  obj4.testOnly_onLongPress = tmp29;
  const items12 = [childrenResult, null];
  obj4.children = items12;
  obj3.children = <onHoverOut.default {...Object.assign({}, defaultResult, obj4)} />;
  return unstable_pressDelay.jsx(_require(hitSlop[11]).GestureDetector, { gesture: Simultaneous.apply(_require(hitSlop[9]).GestureObjects, items9) });
});
