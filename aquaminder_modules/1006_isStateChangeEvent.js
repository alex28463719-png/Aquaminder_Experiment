// Module ID: 1006
// Function ID: 10746
// Name: isStateChangeEvent
// Dependencies: [2, 975, 972, 1007, 1008]
// Exports: startListening

// Module 1006 (isStateChangeEvent)
import _mod972 from "module_972" /* 972 */;
import findHandler from "findHandler" /* 975 */;
import GestureStateManager2 from "GestureStateManager" /* 1007 */;
import _mod1008 from "module_1008" /* 1008 */;
import closure_2 from "get registerCallableModule" /* 2 */;

function isStateChangeEvent(oldState) {
  return oldState.oldState != null;
}
function isTouchEvent(eventType) {
  return eventType.eventType != null;
}
function onGestureHandlerEvent(handlerTag) {
  const findHandlerResult = findHandler.findHandler(handlerTag.handlerTag);
  if (findHandlerResult) {
    if (isStateChangeEvent(handlerTag)) {
      if (handlerTag.oldState === _mod972.State.UNDETERMINED) {
        if (handlerTag.state === _mod972.State.BEGAN) {
          if (findHandlerResult.handlers.onBegin != null) {
            const handlers12 = findHandlerResult.handlers;
            handlers12.onBegin(handlerTag);
          }
        }
      }
      if (handlerTag.oldState === _mod972.State.BEGAN) {
        if (handlerTag.state === _mod972.State.ACTIVE) {
          if (findHandlerResult.handlers.onStart != null) {
            const handlers11 = findHandlerResult.handlers;
            handlers11.onStart(handlerTag);
          }
          table[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
      if (handlerTag.oldState !== handlerTag.state) {
        if (handlerTag.state === _mod972.State.END) {
          if (handlerTag.oldState === _mod972.State.ACTIVE) {
            if (findHandlerResult.handlers.onEnd != null) {
              const handlers9 = findHandlerResult.handlers;
              handlers9.onEnd(handlerTag, true);
            }
          }
          if (findHandlerResult.handlers.onFinalize != null) {
            const handlers10 = findHandlerResult.handlers;
            handlers10.onFinalize(handlerTag, true);
          }
          table[findHandlerResult.handlers.handlerTag] = undefined;
        }
      }
      if (handlerTag.state === _mod972.State.FAILED) {
        if (handlerTag.oldState !== handlerTag.state) {
          if (handlerTag.oldState === _mod972.State.ACTIVE) {
            if (findHandlerResult.handlers.onEnd != null) {
              const handlers7 = findHandlerResult.handlers;
              handlers7.onEnd(handlerTag, false);
            }
          }
          if (findHandlerResult.handlers.onFinalize != null) {
            const handlers8 = findHandlerResult.handlers;
            handlers8.onFinalize(handlerTag, false);
          }
          map.delete(handlerTag.handlerTag);
          table[findHandlerResult.handlers.handlerTag] = undefined;
        }
      }
    } else if (isTouchEvent(handlerTag)) {
      if (!map.has(handlerTag.handlerTag)) {
        const GestureStateManager = GestureStateManager2.GestureStateManager;
        const result = map.set(handlerTag.handlerTag, GestureStateManager.create(handlerTag.handlerTag));
      }
      const value = map.get(handlerTag.handlerTag);
      const eventType = handlerTag.eventType;
      if (_mod1008.TouchEventType.TOUCHES_DOWN === eventType) {
        const handlers6 = findHandlerResult.handlers;
        if (!tmp35) {
          handlers6.onTouchesDown(handlerTag, value);
        }
        tmp35 = handlers6 == null || handlers6.onTouchesDown == null;
      } else if (_mod1008.TouchEventType.TOUCHES_MOVE === eventType) {
        const handlers5 = findHandlerResult.handlers;
        if (!tmp32) {
          handlers5.onTouchesMove(handlerTag, value);
        }
        tmp32 = handlers5 == null || handlers5.onTouchesMove == null;
      } else if (_mod1008.TouchEventType.TOUCHES_UP === eventType) {
        const handlers4 = findHandlerResult.handlers;
        if (!tmp29) {
          handlers4.onTouchesUp(handlerTag, value);
        }
        tmp29 = handlers4 == null || handlers4.onTouchesUp == null;
      } else if (_mod1008.TouchEventType.TOUCHES_CANCELLED === eventType) {
        const handlers13 = findHandlerResult.handlers;
        if (!tmp26) {
          handlers13.onTouchesCancelled(handlerTag, value);
        }
        tmp26 = handlers13 == null || handlers13.onTouchesCancelled == null;
      }
    } else {
      if (findHandlerResult.handlers.onUpdate != null) {
        const handlers = findHandlerResult.handlers;
        handlers.onUpdate(handlerTag);
      }
      if (findHandlerResult.handlers.onChange) {
        if (findHandlerResult.handlers.changeEventCalculator) {
          if (findHandlerResult.handlers.onChange != null) {
            const handlers2 = findHandlerResult.handlers;
            let result1;
            if (findHandlerResult.handlers.changeEventCalculator != null) {
              const handlers3 = findHandlerResult.handlers;
              result1 = handlers3.changeEventCalculator(handlerTag, table[findHandlerResult.handlers.handlerTag]);
            }
            handlers2.onChange(result1);
          }
          table[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
    }
  } else {
    const result2 = findHandler.findOldGestureHandler(handlerTag.handlerTag);
    if (result2) {
      const obj = { nativeEvent: handlerTag };
      if (isStateChangeEvent(handlerTag)) {
        result2.onGestureStateChange(obj);
      } else {
        result2.onGestureEvent(obj);
      }
    }
  }
}
function stopListening() {
  if (_null) {
    _null.remove();
    _null = null;
  }
  if (_null2) {
    _null2.remove();
    _null2 = null;
  }
}
let c3 = null;
let c4 = null;
const map = new Map();
let closure_6 = [];

export { onGestureHandlerEvent };
export function startListening() {
  stopListening();
  const DeviceEventEmitter = closure_2.DeviceEventEmitter;
  closure_3 = DeviceEventEmitter.addListener("onGestureHandlerEvent", onGestureHandlerEvent);
  const DeviceEventEmitter2 = closure_2.DeviceEventEmitter;
  closure_4 = DeviceEventEmitter2.addListener("onGestureHandlerStateChange", onGestureHandlerEvent);
}
export { stopListening };
