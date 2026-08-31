// Module ID: 288
// Function ID: 3310
// Name: normalizeDelay
// Dependencies: [1, 12, 13, 289, 292, 44, 33, 293, 20, 294, 295]

// Module 288 (normalizeDelay)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import get_Version from "get Version" /* 33 */;
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import playTouchSound from "playTouchSound" /* 289 */;
import _mod292 from "module_292" /* 292 */;
import PressabilityPerformanceEventEmitter from "PressabilityPerformanceEventEmitter" /* 293 */;
import module_1 from "module_1" /* 1 */;

function normalizeDelay(length) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  let num2 = 0;
  if (arguments.length > 2) {
    num2 = 0;
    if (arguments[2] !== undefined) {
      num2 = arguments[2];
    }
  }
  if (length != null) {
    num2 = length;
  }
  return Math.max(num, num2);
}
function convertPointerEventToMouseEvent(nativeEvent) {
  ({ clientX, clientY } = nativeEvent.nativeEvent);
  nativeEvent = { clientX, clientY, pageX: clientX, pageY: clientY, timestamp: nativeEvent.timeStamp };
  return Object.assign({}, nativeEvent, { nativeEvent });
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(playTouchSound);
let closure_5 = module_1(_mod292);
let closure_6 = module_1(isFabricReactTag);
let closure_7 = module_1(get_Version);
let closure_8 = module_1(PressabilityPerformanceEventEmitter);
let closure_9 = module_1(invariant);
let closure_10 = Object.freeze({ NOT_RESPONDER: { DELAY: "ERROR", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "ERROR", RESPONDER_TERMINATED: "ERROR", ENTER_PRESS_RECT: "ERROR", LEAVE_PRESS_RECT: "ERROR", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_INACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "RESPONDER_ACTIVE_LONG_PRESS_IN" }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: "ERROR", RESPONDER_GRANT: "ERROR", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_IN", LEAVE_PRESS_RECT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", LONG_PRESS_DETECTED: "ERROR" }, ERROR: { DELAY: "NOT_RESPONDER", RESPONDER_GRANT: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_RELEASE: "NOT_RESPONDER", RESPONDER_TERMINATED: "NOT_RESPONDER", ENTER_PRESS_RECT: "NOT_RESPONDER", LEAVE_PRESS_RECT: "NOT_RESPONDER", LONG_PRESS_DETECTED: "NOT_RESPONDER" } });
function isActiveSignal(arg0) {
  let tmp = arg0 === "RESPONDER_ACTIVE_PRESS_IN";
  if (!tmp) {
    tmp = arg0 === "RESPONDER_ACTIVE_LONG_PRESS_IN";
  }
  return tmp;
}
function isActivationSignal(arg0) {
  let tmp = arg0 === "RESPONDER_ACTIVE_PRESS_OUT";
  if (!tmp) {
    tmp = arg0 === "RESPONDER_ACTIVE_PRESS_IN";
  }
  return tmp;
}
function isPressInSignal(arg0) {
  let tmp = arg0 === "RESPONDER_INACTIVE_PRESS_IN";
  if (!tmp) {
    tmp = arg0 === "RESPONDER_ACTIVE_PRESS_IN";
  }
  if (!tmp) {
    tmp = arg0 === "RESPONDER_ACTIVE_LONG_PRESS_IN";
  }
  return tmp;
}
function isTerminalSignal(arg0) {
  let tmp = arg0 === "RESPONDER_TERMINATED";
  if (!tmp) {
    tmp = arg0 === "RESPONDER_RELEASE";
  }
  return tmp;
}
let closure_15 = { bottom: 30, left: 20, right: 20, top: 20 };
let c16 = 10;
function getTouchFromPressEvent(nativeEvent) {
  ({ changedTouches, touches } = nativeEvent.nativeEvent);
  if (touches != null) {
    if (touches.length > 0) {
      return touches[0];
    }
  }
  if (changedTouches != null) {
    if (changedTouches.length > 0) {
      return changedTouches[0];
    }
  }
  return nativeEvent.nativeEvent;
}

export default (() => {
  class Pressability {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_2.default(this, self);
      this._eventHandlers = null;
      this._hoverInDelayTimeout = null;
      this._hoverOutDelayTimeout = null;
      this._isHovered = false;
      this._longPressDelayTimeout = null;
      this._pressDelayTimeout = null;
      this._pressOutDelayTimeout = null;
      this._responderID = null;
      this._responderRegion = null;
      this._touchState = "NOT_RESPONDER";
      this._measureCallback = (arg0, arg1, arg2, arg3, left, top) => {
        self._responderRegion = { bottom: top + arg3, left, right: left + arg2, top };
      };
      configureResult = this.configure(arg0);
      return;
    }
  }
  let obj = {
    key: "configure",
    value: function configure(_config) {
      this._config = _config;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "reset",
    value: function reset() {
      const result = this._cancelHoverInDelayTimeout();
      const result1 = this._cancelHoverOutDelayTimeout();
      const result2 = this._cancelLongPressDelayTimeout();
      const result3 = this._cancelPressDelayTimeout();
      const result4 = this._cancelPressOutDelayTimeout();
      this._config = Object.freeze({});
    }
  };
  items[1] = obj;
  obj = {
    key: "getEventHandlers",
    value: function getEventHandlers() {
      const self = this;
      if (this._eventHandlers == null) {
        self._eventHandlers = self._createEventHandlers();
      }
      return self._eventHandlers;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_createEventHandlers",
    value: function _createEventHandlers() {
      const self = this;
      let obj = {
        onBlur(arg0) {
          const onBlur = self._config.onBlur;
          if (onBlur != null) {
            onBlur(arg0);
          }
        },
        onFocus(arg0) {
          const onFocus = self._config.onFocus;
          if (onFocus != null) {
            onFocus(arg0);
          }
        }
      };
      obj = {
        onStartShouldSetResponder() {
          let flag = true;
          if (!self._config.disabled != null) {
            flag = tmp;
          }
          return flag;
        },
        onResponderGrant(persist) {
          const _self = persist;
          persist.persist();
          const result = _self._cancelPressOutDelayTimeout();
          _self._responderID = persist.currentTarget;
          _self._touchState = "NOT_RESPONDER";
          _self._receiveSignal("RESPONDER_GRANT", persist);
          const tmp4 = closure_2_18(_self._config.delayPressIn);
          if (tmp4 > 0) {
            const _setTimeout = setTimeout;
            _self._pressDelayTimeout = setTimeout(() => {
              persist._receiveSignal("DELAY", persist);
            }, tmp4);
          } else {
            _self._receiveSignal("DELAY", persist);
          }
          _self._longPressDelayTimeout = setTimeout(() => {
            persist._handleLongPress(persist);
          }, closure_2_18(_self._config.delayLongPress, 10, 500 - tmp4) + tmp4);
          return _self._config.blockNativeResponder === true;
        },
        onResponderMove(arg0) {
          const onPressMove = self._config.onPressMove;
          if (onPressMove != null) {
            onPressMove(arg0);
          }
          const _responderRegion = self._responderRegion;
          if (_responderRegion != null) {
            const tmp15 = closure_2_17(arg0);
            if (tmp15 == null) {
              const result = self._cancelLongPressDelayTimeout();
              self._receiveSignal("LEAVE_PRESS_RECT", arg0);
            } else {
              if (self._touchActivatePosition != null) {
                const _Math = Math;
                if (Math.hypot(self._touchActivatePosition.pageX - tmp15.pageX, self._touchActivatePosition.pageY - tmp15.pageY) > closure_16) {
                  const result1 = self._cancelLongPressDelayTimeout();
                }
              }
              if (self._isTouchWithinResponderRegion(tmp15, _responderRegion)) {
                obj._receiveSignal("ENTER_PRESS_RECT", arg0);
              } else {
                const result2 = obj._cancelLongPressDelayTimeout();
                obj._receiveSignal("LEAVE_PRESS_RECT", arg0);
              }
            }
          }
        },
        onResponderRelease(arg0) {
          self._receiveSignal("RESPONDER_RELEASE", arg0);
        },
        onResponderTerminate(arg0) {
          self._receiveSignal("RESPONDER_TERMINATED", arg0);
        },
        onResponderTerminationRequest() {
          const cancelable = self._config.cancelable;
          let flag = true;
          if (cancelable != null) {
            flag = cancelable;
          }
          return flag;
        },
        onClick(nativeEvent) {
          if (nativeEvent != null) {
            nativeEvent = nativeEvent.nativeEvent;
          }
          let currentTarget;
          if (nativeEvent != null) {
            currentTarget = nativeEvent.currentTarget;
          }
          let target;
          if (nativeEvent != null) {
            target = nativeEvent.target;
          }
          if (currentTarget !== target) {
            if (nativeEvent != null) {
              nativeEvent.stopPropagation();
            }
          } else {
            const onPress = self._config.onPress;
            if (onPress != null) {
              if (tmp4 !== true) {
                onPress(nativeEvent);
              }
            }
          }
        }
      };
      if (_default.shouldPressibilityUseW3CPointerEventsForHover()) {
        obj = { onPointerEnter: undefined, onPointerLeave: undefined };
        const _config = this._config;
        let onHoverIn = _config.onHoverIn;
        let onHoverOut = _config.onHoverOut;
        if (onHoverIn != null) {
          obj.onPointerEnter = (persist) => {
            const _self = persist;
            _self._isHovered = true;
            const result = _self._cancelHoverOutDelayTimeout();
            if (onHoverIn != null) {
              const tmp4 = closure_2_18(_self._config.delayHoverIn);
              if (tmp4 > 0) {
                persist.persist();
                const _setTimeout = setTimeout;
                _self._hoverInDelayTimeout = setTimeout(() => {
                  closure_1_1(closure_3_19(closure_0));
                }, tmp4);
              } else {
                onHoverIn(closure_2_19(persist));
              }
            }
          };
        }
        if (onHoverOut != null) {
          obj.onPointerLeave = (persist) => {
            const _self = persist;
            if (_self._isHovered) {
              _self._isHovered = false;
              const result = _self._cancelHoverInDelayTimeout();
              if (onHoverOut != null) {
                const tmp7 = closure_2_18(_self._config.delayHoverOut);
                if (tmp7 > 0) {
                  persist.persist();
                  const _setTimeout = setTimeout;
                  _self._hoverOutDelayTimeout = setTimeout(() => {
                    closure_1_2(closure_3_19(closure_0));
                  }, tmp7);
                } else {
                  onHoverOut(closure_2_19(persist));
                }
              }
            }
          };
        }
        const _Object3 = Object;
        const _Object4 = Object;
        return Object.assign({}, obj, obj, obj);
      } else {
        let tmp2 = null;
        if (closure_1_7.default.OS !== "ios") {
          tmp2 = null;
          if (closure_1_7.default.OS !== "android") {
            const obj1 = {
              onMouseEnter(persist) {
                      const _self = persist;
                      if (Pressability(closure_2_1[9]).isHoverEnabled()) {
                        _self._isHovered = true;
                        const result = _self._cancelHoverOutDelayTimeout();
                        onHoverIn = _self._config.onHoverIn;
                        if (onHoverIn != null) {
                          const tmp6 = closure_2_18(_self._config.delayHoverIn);
                          if (tmp6 > 0) {
                            persist.persist();
                            const _setTimeout = setTimeout;
                            _self._hoverInDelayTimeout = setTimeout(() => {
                              onHoverIn(closure_0);
                            }, tmp6);
                          } else {
                            onHoverIn(persist);
                          }
                        }
                      }
                    },
              onMouseLeave(persist) {
                      const _self = persist;
                      if (_self._isHovered) {
                        _self._isHovered = false;
                        const result = _self._cancelHoverInDelayTimeout();
                        onHoverOut = _self._config.onHoverOut;
                        if (onHoverOut != null) {
                          const tmp6 = closure_2_18(_self._config.delayHoverOut);
                          if (tmp6 > 0) {
                            persist.persist();
                            const _setTimeout = setTimeout;
                            _self._hoverInDelayTimeout = setTimeout(() => {
                              onHoverOut(closure_0);
                            }, tmp6);
                          } else {
                            onHoverOut(persist);
                          }
                        }
                      }
                    }
            };
            tmp2 = obj1;
          }
        }
        const _Object = Object;
        const _Object2 = Object;
        return Object.assign({}, obj, obj, tmp2);
      }
      _default = closure_1_5.default;
    }
  };
  items[4] = {
    key: "_receiveSignal",
    value: function _receiveSignal(arg0, nativeEvent) {
      const self = this;
      closure_0 = arg0;
      closure_1 = nativeEvent;
      if (nativeEvent.nativeEvent.timestamp != null) {
        closure_1_8.default.emitEvent(() => ({ signal: closure_0, nativeTimestamp: nativeEvent.nativeEvent.timestamp }));
        const _default = closure_1_8.default;
      }
      const _touchState = self._touchState;
      let tmp4;
      if (closure_1_10[_touchState] != null) {
        tmp4 = tmp3[arg0];
      }
      let tmp5 = tmp4 != null;
      if (tmp5) {
        tmp5 = tmp4 !== "ERROR";
      }
      let str3 = "<<host component>>";
      if (typeof self._responderID === "number") {
        str3 = self._responderID;
      }
      closure_1_9.default(tmp5, "Pressability: Invalid signal `%s` for state `%s` on responder: %s", arg0, _touchState, str3);
      if (_touchState !== tmp4) {
        const result = self._performTransitionSideEffects(_touchState, tmp4, arg0, nativeEvent);
        self._touchState = tmp4;
      }
    }
  };
  items[5] = {
    key: "_performTransitionSideEffects",
    value: function _performTransitionSideEffects(_touchState, arg1, arg2, nativeEvent) {
      const self = this;
      if (closure_1_14(arg2)) {
        self._touchActivatePosition = null;
        const result = self._cancelLongPressDelayTimeout();
      }
      let tmp3 = _touchState === "NOT_RESPONDER";
      if (tmp3) {
        tmp3 = arg1 === "RESPONDER_INACTIVE_PRESS_IN";
      }
      const tmp4 = closure_1_12(_touchState);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = closure_1_12(arg1);
      }
      if (tmp3) {
        const result1 = self._measureResponderRegion();
      }
      if (closure_1_13(_touchState)) {
        if (arg2 === "LONG_PRESS_DETECTED") {
          const onLongPress = self._config.onLongPress;
          if (onLongPress != null) {
            onLongPress(nativeEvent);
          }
        }
      }
      const tmp10 = closure_1_11(_touchState);
      const tmp11 = closure_1_11(arg1);
      if (!tmp10) {
        if (tmp11) {
          self._activate(nativeEvent);
        }
        if (closure_1_13(_touchState)) {
          if (arg2 === "RESPONDER_RELEASE") {
            if (!tmp11) {
              if (!tmp10) {
                self._activate(nativeEvent);
                self._deactivate(nativeEvent);
              }
            }
            const _config = self._config;
            const onPress = _config.onPress;
            if (onPress != null) {
              let tmp19 = _config.onLongPress != null;
              if (tmp19) {
                tmp19 = _touchState === "RESPONDER_ACTIVE_LONG_PRESS_IN";
              }
              if (!tmp19) {
                if (closure_1_7.default.OS === "android") {
                  if (tmp17 !== true) {
                    closure_1_4.default.playTouchSound();
                    const _default = closure_1_4.default;
                  }
                }
                onPress(nativeEvent);
              }
            }
          }
        }
        const result2 = self._cancelPressDelayTimeout();
      }
      if (tmp10) {
        if (!tmp11) {
          self._deactivate(nativeEvent);
        }
      }
    }
  };
  items[6] = {
    key: "_activate",
    value: function _activate(nativeEvent) {
      const onPressIn = this._config.onPressIn;
      const tmp = closure_1_17(nativeEvent);
      this._touchActivatePosition = { pageX: tmp.pageX, pageY: tmp.pageY };
      this._touchActivateTime = Date.now();
      if (onPressIn != null) {
        onPressIn(nativeEvent);
      }
    }
  };
  items[7] = {
    key: "_deactivate",
    value: function _deactivate(persist) {
      const self = this;
      closure_0 = persist;
      const onPressOut = this._config.onPressOut;
      if (onPressOut != null) {
        const _Date = Date;
        const _touchActivateTime = self._touchActivateTime;
        let num = 0;
        const timestamp = Date.now();
        if (_touchActivateTime != null) {
          num = _touchActivateTime;
        }
        const _Math = Math;
        const diff = closure_1_18(self._config.minPressDuration, 0, 130) - (timestamp - num);
        const bound = Math.max(diff, closure_1_18(self._config.delayPressOut));
        if (bound > 0) {
          persist.persist();
          const _setTimeout = setTimeout;
          self._pressOutDelayTimeout = setTimeout(() => {
            onPressOut(closure_0);
          }, bound);
        } else {
          onPressOut(persist);
        }
        const tmp7 = closure_1_18(self._config.minPressDuration, 0, 130);
      }
      self._touchActivateTime = null;
    }
  };
  items[8] = {
    key: "_measureResponderRegion",
    value: function _measureResponderRegion() {
      const self = this;
      if (this._responderID != null) {
        if (typeof self._responderID === "number") {
          closure_1_6.default.measure(self._responderID, self._measureCallback);
          const _default = closure_1_6.default;
        } else {
          const _responderID = self._responderID;
          _responderID.measure(self._measureCallback);
        }
      }
    }
  };
  items[9] = {
    key: "_isTouchWithinResponderRegion",
    value: function _isTouchWithinResponderRegion(pageX, _responderRegion) {
      const rect = Pressability(closure_1_1[10]).normalizeRect(this._config.hitSlop);
      const rect2 = Pressability(closure_1_1[10]).normalizeRect(this._config.pressRectOffset);
      ({ bottom, left, right, top } = _responderRegion);
      let tmp = bottom;
      let tmp2 = left;
      let tmp3 = right;
      let diff1 = top;
      if (rect != null) {
        let sum = bottom;
        if (rect.bottom != null) {
          sum = bottom + rect.bottom;
        }
        let diff = left;
        if (rect.left != null) {
          diff = left - rect.left;
        }
        let sum1 = right;
        if (rect.right != null) {
          sum1 = right + rect.right;
        }
        tmp = sum;
        tmp2 = diff;
        tmp3 = sum1;
        diff1 = top;
        if (rect.top != null) {
          diff1 = top - rect.top;
          tmp = sum;
          tmp2 = diff;
          tmp3 = sum1;
        }
      }
      bottom = undefined;
      if (rect2 != null) {
        bottom = rect2.bottom;
      }
      if (bottom == null) {
        bottom = closure_1_15.bottom;
      }
      left = undefined;
      const sum2 = tmp + bottom;
      if (rect2 != null) {
        left = rect2.left;
      }
      if (left == null) {
        left = closure_1_15.left;
      }
      right = undefined;
      const diff2 = tmp2 - left;
      if (rect2 != null) {
        right = rect2.right;
      }
      if (right == null) {
        right = closure_1_15.right;
      }
      top = undefined;
      const sum3 = tmp3 + right;
      if (rect2 != null) {
        top = rect2.top;
      }
      if (top == null) {
        top = closure_1_15.top;
      }
      let tmp20 = pageX.pageX > diff2;
      const diff3 = diff1 - top;
      if (tmp20) {
        tmp20 = pageX.pageX < sum3;
      }
      if (tmp20) {
        tmp20 = pageX.pageY > diff3;
      }
      if (tmp20) {
        tmp20 = pageX.pageY < sum2;
      }
      return tmp20;
    }
  };
  items[10] = {
    key: "_handleLongPress",
    value: function _handleLongPress(closure_0) {
      const self = this;
      if (this._touchState === "RESPONDER_ACTIVE_PRESS_IN") {
        self._receiveSignal("LONG_PRESS_DETECTED", closure_0);
      }
    }
  };
  items[11] = {
    key: "_cancelHoverInDelayTimeout",
    value: function _cancelHoverInDelayTimeout() {
      const self = this;
      if (this._hoverInDelayTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverInDelayTimeout);
        self._hoverInDelayTimeout = null;
      }
    }
  };
  items[12] = {
    key: "_cancelHoverOutDelayTimeout",
    value: function _cancelHoverOutDelayTimeout() {
      const self = this;
      if (this._hoverOutDelayTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hoverOutDelayTimeout);
        self._hoverOutDelayTimeout = null;
      }
    }
  };
  items[13] = {
    key: "_cancelLongPressDelayTimeout",
    value: function _cancelLongPressDelayTimeout() {
      const self = this;
      if (this._longPressDelayTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._longPressDelayTimeout);
        self._longPressDelayTimeout = null;
      }
    }
  };
  items[14] = {
    key: "_cancelPressDelayTimeout",
    value: function _cancelPressDelayTimeout() {
      const self = this;
      if (this._pressDelayTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressDelayTimeout);
        self._pressDelayTimeout = null;
      }
    }
  };
  items[15] = {
    key: "_cancelPressOutDelayTimeout",
    value: function _cancelPressOutDelayTimeout() {
      const self = this;
      if (this._pressOutDelayTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._pressOutDelayTimeout);
        self._pressOutDelayTimeout = null;
      }
    }
  };
  const items1 = [
    {
      key: "setLongPressDeactivationDistance",
      value: function setLongPressDeactivationDistance(arg0) {
        closure_16 = arg0;
      }
    }
  ];
  return closure_3.default(Pressability, items, items1);
})();
