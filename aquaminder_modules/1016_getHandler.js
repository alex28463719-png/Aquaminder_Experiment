// Module ID: 1016
// Function ID: 10784
// Name: getHandler
// Dependencies: [989, 1008, 971, 1005, 972, 1007]

// Module 1016 (getHandler)
import hasProperty from "hasProperty" /* 971 */;
import _callSuper from "_callSuper" /* 989 */;
import _mod1008 from "module_1008" /* 1008 */;

require = arg1;
let dependencyMap = arg6;
function getHandler(arg0, onBegin) {
  if (_callSuper.CALLBACK_TYPE.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (_callSuper.CALLBACK_TYPE.START === arg0) {
    return onBegin.onStart;
  } else if (_callSuper.CALLBACK_TYPE.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (_callSuper.CALLBACK_TYPE.CHANGE === arg0) {
    return onBegin.onChange;
  } else if (_callSuper.CALLBACK_TYPE.END === arg0) {
    return onBegin.onEnd;
  } else if (_callSuper.CALLBACK_TYPE.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (_callSuper.CALLBACK_TYPE.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (_callSuper.CALLBACK_TYPE.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (_callSuper.CALLBACK_TYPE.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else if (_callSuper.CALLBACK_TYPE.TOUCHES_CANCELLED === arg0) {
    return onBegin.onTouchesCancelled;
  }
}
function touchEventTypeToCallbackType(arg0) {
  if (_mod1008.TouchEventType.TOUCHES_DOWN === arg0) {
    return _callSuper.CALLBACK_TYPE.TOUCHES_DOWN;
  } else if (_mod1008.TouchEventType.TOUCHES_MOVE === arg0) {
    return _callSuper.CALLBACK_TYPE.TOUCHES_MOVE;
  } else if (_mod1008.TouchEventType.TOUCHES_UP === arg0) {
    return _callSuper.CALLBACK_TYPE.TOUCHES_UP;
  } else if (_mod1008.TouchEventType.TOUCHES_CANCELLED === arg0) {
    return _callSuper.CALLBACK_TYPE.TOUCHES_CANCELLED;
  } else {
    return _callSuper.CALLBACK_TYPE.UNDEFINED;
  }
}
function runWorklet(arg0, onBegin) {
  const obj = getHandler(arg0, onBegin);
  if (onBegin.isWorklet[arg0]) {
    const length = arguments.length;
    let _Array = Array;
    let num3 = 0;
    if (length > 3) {
      num3 = length - 3;
    }
    const prototype = _Array.prototype;
    _Array = new _Array(num3);
    for (let num4 = 3; num4 < length; num4 = num4 + 1) {
      _Array[num4 - 3] = arguments[num4];
    }
    if (obj != null) {
      const items = [arg2];
      obj.apply(undefined, items.concat(_Array));
    }
  } else if (obj) {
    const _console = console;
    console.warn(hasProperty.tagMessage("Animated gesture callback must be a worklet"));
  }
}
function isStateChangeEvent(oldState) {
  return oldState.oldState != null;
}
function isTouchEvent(eventType) {
  return eventType.eventType != null;
}
arg5.useAnimatedGesture = function useAnimatedGesture(current2, needsToReattachResult) {
  if (sharedValue(1005).Reanimated) {
    const Reanimated = sharedValue(1005).Reanimated;
    sharedValue = Reanimated.useSharedValue(null);
    const Reanimated2 = sharedValue(1005).Reanimated;
    dependencyMap = Reanimated2.useSharedValue([]);
    closure_2 = [];
    const Reanimated3 = sharedValue(1005).Reanimated;
    current2.animatedEventHandler = Reanimated3.useEvent(function callback(handlerTag) {
      const value = sharedValue.value;
      if (value) {
        for (let num5 = 0; num5 < value.length; num5 = num5 + 1) {
          let obj = value[num5];
          let tmp2 = num5;
          if (handlerTag.handlerTag === obj.handlerTag) {
            let tmp72 = closure_1_5;
            if (closure_1_5(handlerTag)) {
              let tmp21 = sharedValue;
              let tmp22 = closure_1;
              if (handlerTag.oldState === sharedValue(closure_1[4]).State.UNDETERMINED) {
                let tmp23 = sharedValue;
                let tmp24 = closure_1;
                if (handlerTag.state === sharedValue(closure_1[4]).State.BEGAN) {
                  let tmp68 = closure_1_4;
                  let tmp69 = sharedValue;
                  let tmp70 = closure_1;
                  let tmp71 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.BEGAN, obj, handlerTag);
                }
              }
              let tmp25 = sharedValue;
              let tmp26 = closure_1;
              if (handlerTag.oldState === sharedValue(closure_1[4]).State.BEGAN) {
                let tmp29 = sharedValue;
                let tmp30 = closure_1;
                if (handlerTag.state === sharedValue(closure_1[4]).State.ACTIVE) {
                  let tmp63 = closure_1_4;
                  let tmp64 = sharedValue;
                  let tmp65 = closure_1;
                  let tmp66 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.START, obj, handlerTag);
                  let tmp67 = closure_1;
                  closure_1.value[obj.handlerTag] = undefined;
                }
              } else {
                let tmp27 = sharedValue;
                let tmp28 = closure_1;
              }
              if (handlerTag.oldState !== handlerTag.state) {
                let tmp31 = sharedValue;
                let tmp32 = closure_1;
                if (handlerTag.state === sharedValue(closure_1[4]).State.END) {
                  let tmp49 = sharedValue;
                  let tmp50 = closure_1;
                  if (handlerTag.oldState === sharedValue(closure_1[4]).State.ACTIVE) {
                    let tmp51 = closure_1_4;
                    let tmp52 = sharedValue;
                    let tmp53 = closure_1;
                    let tmp54 = obj;
                    let tmp55 = handlerTag;
                    let flag3 = true;
                    let tmp56 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.END, obj, handlerTag, true);
                  }
                  let tmp57 = closure_1_4;
                  let tmp58 = sharedValue;
                  let tmp59 = closure_1;
                  let tmp60 = obj;
                  let tmp61 = handlerTag;
                  let flag4 = true;
                  let tmp62 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.FINALIZE, obj, handlerTag, true);
                }
              }
              let tmp33 = sharedValue;
              let tmp34 = closure_1;
              if (handlerTag.state === sharedValue(closure_1[4]).State.FAILED) {
                if (handlerTag.state !== handlerTag.oldState) {
                  let tmp79 = sharedValue;
                  let tmp80 = closure_1;
                  if (handlerTag.oldState === sharedValue(closure_1[4]).State.ACTIVE) {
                    let tmp37 = closure_1_4;
                    let tmp38 = sharedValue;
                    let tmp39 = closure_1;
                    let tmp40 = obj;
                    let tmp41 = handlerTag;
                    let flag = false;
                    let tmp42 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.END, obj, handlerTag, false);
                  }
                  let tmp43 = closure_1_4;
                  let tmp44 = sharedValue;
                  let tmp45 = closure_1;
                  let tmp46 = obj;
                  let tmp47 = handlerTag;
                  let flag2 = false;
                  let tmp48 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.FINALIZE, obj, handlerTag, false);
                }
              } else {
                let tmp35 = sharedValue;
                let tmp36 = closure_1;
              }
            } else {
              let tmp3 = closure_1_6;
              if (closure_1_6(handlerTag)) {
                let tmp15 = dependencyMap;
                if (!dependencyMap[num5]) {
                  let tmp16 = dependencyMap;
                  let tmp17 = sharedValue;
                  let tmp18 = closure_1;
                  let GestureStateManager = sharedValue(closure_1[5]).GestureStateManager;
                  dependencyMap[num5] = GestureStateManager.create(handlerTag.handlerTag);
                }
                let tmp19 = sharedValue;
                let tmp20 = closure_1;
                if (handlerTag.eventType !== sharedValue(closure_1[1]).TouchEventType.UNDETERMINED) {
                  let tmp73 = closure_1_4;
                  let tmp74 = closure_1_3;
                  let tmp75 = dependencyMap;
                  let tmp76 = obj;
                  let tmp77 = handlerTag;
                  let tmp78 = closure_1_4(closure_1_3(handlerTag.eventType), obj, handlerTag, dependencyMap[num5]);
                }
              } else {
                let tmp4 = closure_1_4;
                let tmp5 = sharedValue;
                let tmp6 = closure_1;
                let tmp7 = closure_1_4(sharedValue(closure_1[0]).CALLBACK_TYPE.UPDATE, obj, handlerTag);
                if (obj.onChange) {
                  if (obj.changeEventCalculator) {
                    let tmp9 = sharedValue;
                    let tmp10 = closure_1;
                    let tmp8 = closure_1_4;
                    let result;
                    if (obj.changeEventCalculator != null) {
                      let tmp12 = closure_1;
                      result = obj.changeEventCalculator(handlerTag, closure_1.value[obj.handlerTag]);
                    }
                    let tmp8Result = tmp8(sharedValue(closure_1[0]).CALLBACK_TYPE.CHANGE, obj, result);
                    let tmp14 = closure_1;
                    closure_1.value[obj.handlerTag] = handlerTag;
                  }
                }
              }
            }
          }
        }
      }
    }, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], needsToReattachResult);
    current2.animatedHandlers = sharedValue;
  }
};
