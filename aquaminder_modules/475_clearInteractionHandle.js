// Module ID: 475
// Function ID: 5282
// Name: clearInteractionHandle
// Dependencies: [476, 318]

// Module 475 (clearInteractionHandle)
import _scheduleUpdate from "_scheduleUpdate" /* 318 */;
import _mod476 from "module_476" /* 476 */;

function clearInteractionHandle(handle) {
  if (handle.handle) {
    const result = _scheduleUpdate.default.clearInteractionHandle(handle.handle);
    handle.handle = null;
    const _default = _scheduleUpdate.default;
  }
  if (arg1) {
    arg1(arg2, arg3);
  }
}
let closure_2 = _mod476.default.currentCentroidXOfTouchesChangedAfter;
let closure_3 = _mod476.default.currentCentroidYOfTouchesChangedAfter;
let closure_4 = _mod476.default.previousCentroidXOfTouchesChangedAfter;
let closure_5 = _mod476.default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = _mod476.default.currentCentroidX;
const currentCentroidY = _mod476.default.currentCentroidY;
let obj = {
  _initializeGestureState(arg0) {
    arg0.moveX = 0;
    arg0.moveY = 0;
    arg0.x0 = 0;
    arg0.y0 = 0;
    arg0.dx = 0;
    arg0.dy = 0;
    arg0.vx = 0;
    arg0.vy = 0;
    arg0.numberActiveTouches = 0;
    arg0._accountsForMovesUpTo = 0;
  },
  _updateGestureStateOnMove(_accountsForMovesUpTo, touchHistory) {
    _accountsForMovesUpTo.numberActiveTouches = touchHistory.numberActiveTouches;
    _accountsForMovesUpTo.moveX = callback(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo.moveY = callback2(touchHistory, _accountsForMovesUpTo._accountsForMovesUpTo);
    _accountsForMovesUpTo = _accountsForMovesUpTo._accountsForMovesUpTo;
    const tmp = callback3(touchHistory, _accountsForMovesUpTo);
    const tmp2 = callback(touchHistory, _accountsForMovesUpTo);
    const sum = _accountsForMovesUpTo.dx + (tmp2 - tmp);
    const sum1 = _accountsForMovesUpTo.dy + (callback2(touchHistory, _accountsForMovesUpTo) - callback4(touchHistory, _accountsForMovesUpTo));
    const diff = touchHistory.mostRecentTimeStamp - _accountsForMovesUpTo._accountsForMovesUpTo;
    _accountsForMovesUpTo.vx = (sum - _accountsForMovesUpTo.dx) / diff;
    _accountsForMovesUpTo.vy = (sum1 - _accountsForMovesUpTo.dy) / diff;
    _accountsForMovesUpTo.dx = sum;
    _accountsForMovesUpTo.dy = sum1;
    _accountsForMovesUpTo._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create(arg0) {
    closure_0 = arg0;
    closure_1 = { handle: null };
    obj = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
    obj = {
      onStartShouldSetResponder(arg0) {
        let flag = false;
        if (lib.onStartShouldSetPanResponder != null) {
          flag = lib.onStartShouldSetPanResponder(arg0, obj);
        }
        return flag;
      },
      onMoveShouldSetResponder(arg0) {
        let flag = false;
        if (lib.onMoveShouldSetPanResponder != null) {
          flag = lib.onMoveShouldSetPanResponder(arg0, obj);
        }
        return flag;
      },
      onStartShouldSetResponderCapture(nativeEvent) {
        if (nativeEvent.nativeEvent.touches.length === 1) {
          const result = closure_1_8._initializeGestureState(obj);
        }
        obj.numberActiveTouches = nativeEvent.touchHistory.numberActiveTouches;
        let flag = false;
        if (lib.onStartShouldSetPanResponderCapture != null) {
          flag = lib.onStartShouldSetPanResponderCapture(nativeEvent, obj);
        }
        return flag;
      },
      onMoveShouldSetResponderCapture(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        if (obj._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        } else {
          const result = closure_1_8._updateGestureStateOnMove(obj, touchHistory);
          let flag = false;
          if (lib.onMoveShouldSetPanResponderCapture) {
            flag = lib.onMoveShouldSetPanResponderCapture(touchHistory, obj);
          }
          return flag;
        }
      },
      onResponderGrant(touchHistory) {
        if (!closure_1.handle) {
          closure_1.handle = lib(closure_1[1]).default.createInteractionHandle();
          const _default = lib(closure_1[1]).default;
        }
        obj.x0 = closure_1_6(touchHistory.touchHistory);
        obj.y0 = closure_1_7(touchHistory.touchHistory);
        obj.dx = 0;
        obj.dy = 0;
        if (lib.onPanResponderGrant) {
          lib.onPanResponderGrant(touchHistory, obj);
        }
        let flag = true;
        if (lib.onShouldBlockNativeResponder != null) {
          flag = lib.onShouldBlockNativeResponder(touchHistory, obj);
        }
        return flag;
      },
      onResponderReject(arg0) {
        closure_1_9(closure_1, lib.onPanResponderReject, arg0, obj);
      },
      onResponderRelease(arg0) {
        closure_1_9(closure_1, lib.onPanResponderRelease, arg0, obj);
        const result = closure_1_8._initializeGestureState(obj);
      },
      onResponderStart(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        if (lib.onPanResponderStart) {
          lib.onPanResponderStart(touchHistory, obj);
        }
      },
      onResponderMove(touchHistory) {
        touchHistory = touchHistory.touchHistory;
        if (obj._accountsForMovesUpTo !== touchHistory.mostRecentTimeStamp) {
          const result = closure_1_8._updateGestureStateOnMove(obj, touchHistory);
          if (lib.onPanResponderMove) {
            lib.onPanResponderMove(touchHistory, obj);
          }
        }
      },
      onResponderEnd(touchHistory) {
        obj.numberActiveTouches = touchHistory.touchHistory.numberActiveTouches;
        closure_1_9(closure_1, lib.onPanResponderEnd, touchHistory, obj);
      },
      onResponderTerminate(arg0) {
        closure_1_9(closure_1, lib.onPanResponderTerminate, arg0, obj);
        const result = closure_1_8._initializeGestureState(obj);
      },
      onResponderTerminationRequest(arg0) {
        let flag = true;
        if (lib.onPanResponderTerminationRequest != null) {
          flag = lib.onPanResponderTerminationRequest(arg0, obj);
        }
        return flag;
      }
    };
    obj = {
      panHandlers: obj,
      getInteractionHandle() {
        return closure_1.handle;
      }
    };
    return obj;
  }
};

export default obj;
