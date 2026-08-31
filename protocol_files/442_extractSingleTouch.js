// Module ID: 442
// Function ID: 5094
// Name: extractSingleTouch
// Dependencies: [1, 203, 44, 33, 289, 443, 445, 119, 251]

// Module 442 (extractSingleTouch)
import get_Version from "get Version" /* 33 */;
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 203 */;
import playTouchSound from "playTouchSound" /* 289 */;
import BoundingDimensions from "BoundingDimensions" /* 443 */;
import Position from "Position" /* 445 */;
import module_1 from "module_1" /* 1 */;
import jsxProd from "jsxProd" /* 251 */;

const _objectWithoutProperties = module_1(_objectWithoutProperties2);
let closure_0 = module_1(isFabricReactTag);
let closure_1 = module_1(get_Version);
let closure_2 = module_1(playTouchSound);
let closure_3 = module_1(BoundingDimensions);
let closure_4 = module_1(Position);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
function extractSingleTouch(nativeEvent) {
  let first1 = nativeEvent;
  ({ touches, changedTouches } = nativeEvent);
  let tmp2 = touches;
  if (touches) {
    tmp2 = touches.length > 0;
  }
  let tmp3 = changedTouches;
  if (changedTouches) {
    tmp3 = changedTouches.length > 0;
  }
  if (!tmp2) {
    if (tmp3) {
      let first = changedTouches[0];
    }
    return first;
  }
  if (tmp2) {
    first1 = touches[0];
  }
  first = first1;
}
let obj = { NOT_RESPONDER: "NOT_RESPONDER", RESPONDER_INACTIVE_PRESS_IN: "RESPONDER_INACTIVE_PRESS_IN", RESPONDER_INACTIVE_PRESS_OUT: "RESPONDER_INACTIVE_PRESS_OUT", RESPONDER_ACTIVE_PRESS_IN: "RESPONDER_ACTIVE_PRESS_IN", RESPONDER_ACTIVE_PRESS_OUT: "RESPONDER_ACTIVE_PRESS_OUT", RESPONDER_ACTIVE_LONG_PRESS_IN: "RESPONDER_ACTIVE_LONG_PRESS_IN", RESPONDER_ACTIVE_LONG_PRESS_OUT: "RESPONDER_ACTIVE_LONG_PRESS_OUT", ERROR: "ERROR" };
obj = { NOT_RESPONDER: false, RESPONDER_INACTIVE_PRESS_IN: false, RESPONDER_INACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_PRESS_IN: false, RESPONDER_ACTIVE_PRESS_OUT: false, RESPONDER_ACTIVE_LONG_PRESS_IN: false, RESPONDER_ACTIVE_LONG_PRESS_OUT: false, ERROR: false };
let closure_7 = Object.assign({}, obj, { RESPONDER_ACTIVE_PRESS_OUT: true, RESPONDER_ACTIVE_PRESS_IN: true });
let closure_8 = Object.assign({}, obj, { RESPONDER_INACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_PRESS_IN: true, RESPONDER_ACTIVE_LONG_PRESS_IN: true });
let closure_9 = Object.assign({}, obj, { RESPONDER_ACTIVE_LONG_PRESS_IN: true });
let closure_10 = { DELAY: "DELAY", RESPONDER_GRANT: "RESPONDER_GRANT", RESPONDER_RELEASE: "RESPONDER_RELEASE", RESPONDER_TERMINATED: "RESPONDER_TERMINATED", ENTER_PRESS_RECT: "ENTER_PRESS_RECT", LEAVE_PRESS_RECT: "LEAVE_PRESS_RECT", LONG_PRESS_DETECTED: "LONG_PRESS_DETECTED" };
let closure_11 = { NOT_RESPONDER: { DELAY: obj.ERROR, RESPONDER_GRANT: obj.RESPONDER_INACTIVE_PRESS_IN, RESPONDER_RELEASE: obj.ERROR, RESPONDER_TERMINATED: obj.ERROR, ENTER_PRESS_RECT: obj.ERROR, LEAVE_PRESS_RECT: obj.ERROR, LONG_PRESS_DETECTED: obj.ERROR }, RESPONDER_INACTIVE_PRESS_IN: { DELAY: obj.RESPONDER_ACTIVE_PRESS_IN, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_INACTIVE_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_INACTIVE_PRESS_OUT, LONG_PRESS_DETECTED: obj.ERROR }, RESPONDER_INACTIVE_PRESS_OUT: { DELAY: obj.RESPONDER_ACTIVE_PRESS_OUT, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_INACTIVE_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_INACTIVE_PRESS_OUT, LONG_PRESS_DETECTED: obj.ERROR }, RESPONDER_ACTIVE_PRESS_IN: { DELAY: obj.ERROR, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_ACTIVE_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_ACTIVE_PRESS_OUT, LONG_PRESS_DETECTED: obj.RESPONDER_ACTIVE_LONG_PRESS_IN }, RESPONDER_ACTIVE_PRESS_OUT: { DELAY: obj.ERROR, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_ACTIVE_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_ACTIVE_PRESS_OUT, LONG_PRESS_DETECTED: obj.ERROR }, RESPONDER_ACTIVE_LONG_PRESS_IN: { DELAY: obj.ERROR, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_ACTIVE_LONG_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_ACTIVE_LONG_PRESS_OUT, LONG_PRESS_DETECTED: obj.RESPONDER_ACTIVE_LONG_PRESS_IN }, RESPONDER_ACTIVE_LONG_PRESS_OUT: { DELAY: obj.ERROR, RESPONDER_GRANT: obj.ERROR, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.RESPONDER_ACTIVE_LONG_PRESS_IN, LEAVE_PRESS_RECT: obj.RESPONDER_ACTIVE_LONG_PRESS_OUT, LONG_PRESS_DETECTED: obj.ERROR }, error: { DELAY: obj.NOT_RESPONDER, RESPONDER_GRANT: obj.RESPONDER_INACTIVE_PRESS_IN, RESPONDER_RELEASE: obj.NOT_RESPONDER, RESPONDER_TERMINATED: obj.NOT_RESPONDER, ENTER_PRESS_RECT: obj.NOT_RESPONDER, LEAVE_PRESS_RECT: obj.NOT_RESPONDER, LONG_PRESS_DETECTED: obj.NOT_RESPONDER } };
const obj9 = {
  componentDidMount() {

  },
  componentWillUnmount() {
    const self = this;
    if (this.touchableDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.touchableDelayTimeout);
    }
    if (self.longPressDelayTimeout) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    if (self.pressOutDelayTimeout) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
  },
  touchableGetInitialState() {
    return { touchable: { touchState: undefined, responderID: null } };
  },
  touchableHandleResponderTerminationRequest() {
    return !this.props.rejectResponderTermination;
  },
  touchableHandleStartShouldSetResponder() {
    return !this.props.disabled;
  },
  touchableLongPressCancelsPress() {
    return true;
  },
  touchableHandleResponderGrant(persist) {
    const self = this;
    persist.persist();
    if (this.pressOutDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.pressOutDelayTimeout);
    }
    self.pressOutDelayTimeout = null;
    self.state.touchable.touchState = obj.NOT_RESPONDER;
    self.state.touchable.responderID = persist.currentTarget;
    self._receiveSignal(constants.RESPONDER_GRANT, persist);
    let num = 130;
    if (self.touchableGetHighlightDelayMS !== undefined) {
      const _Math = Math;
      num = Math.max(self.touchableGetHighlightDelayMS(), 0);
    }
    if (isNaN(num)) {
      num = 130;
    }
    if (num !== 0) {
      const _setTimeout = setTimeout;
      const _handleDelay = self._handleDelay;
      self.touchableDelayTimeout = setTimeout(_handleDelay.bind(self, persist), num);
    } else {
      self._handleDelay(persist);
    }
    let num3 = 370;
    if (self.touchableGetLongPressDelayMS !== undefined) {
      const _Math2 = Math;
      num3 = Math.max(self.touchableGetLongPressDelayMS(), 10);
    }
    if (isNaN(num3)) {
      num3 = 370;
    }
    const _handleLongDelay = self._handleLongDelay;
    self.longPressDelayTimeout = setTimeout(_handleLongDelay.bind(self, persist), num3 + num);
  },
  touchableHandleResponderRelease(arg0) {
    this.pressInLocation = null;
    this._receiveSignal(constants.RESPONDER_RELEASE, arg0);
  },
  touchableHandleResponderTerminate(arg0) {
    this.pressInLocation = null;
    this._receiveSignal(constants.RESPONDER_TERMINATED, arg0);
  },
  touchableHandleResponderMove(nativeEvent) {
    const self = this;
    if (this.state.touchable.positionOnActivate) {
      const positionOnActivate = self.state.touchable.positionOnActivate;
      const dimensionsOnActivate = self.state.touchable.dimensionsOnActivate;
      if (self.touchableGetPressRectOffset) {
        let result = self.touchableGetPressRectOffset();
      } else {
        result = { left: 20, right: 20, top: 20, bottom: 20 };
      }
      ({ left, top, right, bottom } = result);
      let touchableGetHitSlopResult = null;
      if (self.touchableGetHitSlop) {
        touchableGetHitSlopResult = self.touchableGetHitSlop();
      }
      let tmp2 = left;
      let tmp3 = top;
      let tmp4 = right;
      let sum3 = bottom;
      if (touchableGetHitSlopResult) {
        let num = touchableGetHitSlopResult.top;
        const sum = left + (touchableGetHitSlopResult.left || 0);
        if (!num) {
          num = 0;
        }
        let num2 = touchableGetHitSlopResult.right;
        const sum1 = top + num;
        if (!num2) {
          num2 = 0;
        }
        let num3 = touchableGetHitSlopResult.bottom;
        const sum2 = right + num2;
        if (!num3) {
          num3 = 0;
        }
        sum3 = bottom + num3;
        tmp2 = sum;
        tmp3 = sum1;
        tmp4 = sum2;
        const tmp6 = touchableGetHitSlopResult.left || 0;
      }
      const tmp11 = extractSingleTouch(nativeEvent.nativeEvent);
      let pageX = tmp11;
      if (tmp11) {
        pageX = tmp11.pageX;
      }
      let pageY = tmp11;
      if (tmp11) {
        pageY = tmp11.pageY;
      }
      if (self.pressInLocation) {
        if (self._getDistanceBetweenPoints(pageX, pageY, self.pressInLocation.pageX, self.pressInLocation.pageY) > 10) {
          const result1 = self._cancelLongPressDelayTimeout();
        }
      }
      if (tmp16) {
        self._receiveSignal(constants.ENTER_PRESS_RECT, nativeEvent);
        if (self.state.touchable.touchState === obj.RESPONDER_INACTIVE_PRESS_IN) {
          if (self.state.touchable.touchState !== obj.RESPONDER_INACTIVE_PRESS_IN) {
            const result2 = self._cancelLongPressDelayTimeout();
          }
        }
      } else {
        const result3 = self._cancelLongPressDelayTimeout();
        self._receiveSignal(constants.LEAVE_PRESS_RECT, nativeEvent);
      }
    }
  },
  touchableHandleFocus(arg0) {
    if (this.props.onFocus) {
      const props = this.props;
      props.onFocus(arg0);
    }
  },
  touchableHandleBlur(arg0) {
    if (this.props.onBlur) {
      const props = this.props;
      props.onBlur(arg0);
    }
  },
  _remeasureMetricsOnActivation() {
    const self = this;
    const responderID = this.state.touchable.responderID;
    if (responderID != null) {
      if (typeof responderID === "number") {
        mod.default.measure(responderID, self._handleQueryLayout);
        const _default = mod.default;
      } else {
        responderID.measure(self._handleQueryLayout);
      }
    }
  },
  _handleQueryLayout(arg0, arg1, arg2, arg3, arg4, arg5) {
    const self = this;
    if (self.state.touchable.positionOnActivate) {
      mod5.default.release(self.state.touchable.positionOnActivate);
      const _default = mod5.default;
    }
    if (self.state.touchable.dimensionsOnActivate) {
      mod4.default.release(self.state.touchable.dimensionsOnActivate);
      const _default2 = mod4.default;
    }
    self.state.touchable.positionOnActivate = mod5.default.getPooled(arg4, arg5);
    self.state.touchable.dimensionsOnActivate = mod4.default.getPooled(arg2, arg3);
  },
  _handleDelay(persist) {
    this.touchableDelayTimeout = null;
    this._receiveSignal(constants.DELAY, persist);
  },
  _handleLongDelay(arg0) {
    const self = this;
    this.longPressDelayTimeout = null;
    const touchState = this.state.touchable.touchState;
    if (touchState === obj.RESPONDER_ACTIVE_PRESS_IN) {
      self._receiveSignal(constants.LONG_PRESS_DETECTED, arg0);
    }
  },
  _receiveSignal(arg0, nativeEvent) {
    const self = this;
    const touchState = this.state.touchable.touchState;
    let tmp = dependencyMap4[touchState];
    if (tmp) {
      tmp = dependencyMap4[touchState][arg0];
    }
    if (tmp) {
      if (tmp === obj.ERROR) {
        let _Error2 = Error;
        let str8 = "<<host component>>`";
        if ("Touchable cannot transition from `" + touchState + "` to `" + arg0 + "` for responder `" + typeof self.state.touchable.responderID === "number") {
          str8 = self.state.touchable.responderID;
        }
        const prototype2 = _Error2.prototype;
        _Error2 = new _Error2(str8);
        throw _Error2;
      } else if (touchState !== tmp) {
        const result = self._performSideEffectsForTransition(touchState, tmp, arg0, nativeEvent);
        self.state.touchable.touchState = tmp;
      }
    } else {
      let _Error = Error;
      let str3 = "host component`";
      if ("Unrecognized signal `" + arg0 + "` or state `" + touchState + "` for Touchable responder `" + typeof self.state.touchable.responderID === "number") {
        str3 = self.state.touchable.responderID;
      }
      const prototype = _Error.prototype;
      _Error = new _Error(str3);
      throw _Error;
    }
  },
  _cancelLongPressDelayTimeout() {
    const self = this;
    if (this.longPressDelayTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.longPressDelayTimeout);
    }
    self.longPressDelayTimeout = null;
  },
  _isHighlight(touchState) {
    let tmp = touchState === obj.RESPONDER_ACTIVE_PRESS_IN;
    if (!tmp) {
      tmp = touchState === obj.RESPONDER_ACTIVE_LONG_PRESS_IN;
    }
    return tmp;
  },
  _savePressInLocation(nativeEvent) {
    const tmp = extractSingleTouch(nativeEvent.nativeEvent);
    let pageX = tmp;
    if (tmp) {
      pageX = tmp.pageX;
    }
    let pageY = tmp;
    if (tmp) {
      pageY = tmp.pageY;
    }
    let locationX = tmp;
    if (tmp) {
      locationX = tmp.locationX;
    }
    let locationY = tmp;
    if (tmp) {
      locationY = tmp.locationY;
    }
    obj = { pageX, pageY, locationX, locationY };
    this.pressInLocation = obj;
  },
  _getDistanceBetweenPoints(pageX, pageY, pageX2, pageY2) {
    const diff = pageX - pageX2;
    const diff1 = pageY - pageY2;
    return Math.sqrt(diff * diff + diff1 * diff1);
  },
  _performSideEffectsForTransition(touchState, touchState, arg2, nativeEvent) {
    const self = this;
    const _isHighlightResult = this._isHighlight(touchState);
    const _isHighlightResult1 = this._isHighlight(touchState);
    let tmp3 = arg2 === constants.RESPONDER_TERMINATED;
    if (!tmp3) {
      tmp3 = arg2 === constants.RESPONDER_RELEASE;
    }
    if (tmp3) {
      const result = self._cancelLongPressDelayTimeout();
    }
    let tmp6 = touchState === obj.NOT_RESPONDER;
    if (tmp6) {
      tmp6 = touchState === obj.RESPONDER_INACTIVE_PRESS_IN;
    }
    let tmp8 = !dependencyMap[touchState];
    if (tmp8) {
      tmp8 = dependencyMap[touchState];
    }
    if (tmp6) {
      const result1 = self._remeasureMetricsOnActivation();
    }
    if (dependencyMap2[touchState]) {
      if (arg2 === constants.LONG_PRESS_DETECTED) {
        if (self.touchableHandleLongPress) {
          const result2 = self.touchableHandleLongPress(nativeEvent);
        }
      }
    }
    if (_isHighlightResult1) {
      if (!_isHighlightResult) {
        self._startHighlight(nativeEvent);
      }
      if (dependencyMap2[touchState]) {
        if (arg2 === constants.RESPONDER_RELEASE) {
          let tmp18 = dependencyMap3[touchState];
          if (tmp18) {
            let tmp17 = tmp30;
            if (!tmp30) {
              tmp17 = !self.touchableLongPressCancelsPress();
            }
            tmp18 = tmp17;
          }
          if (tmp20) {
            if (self.touchableHandlePress) {
              if (!_isHighlightResult1) {
                if (!_isHighlightResult) {
                  self._startHighlight(nativeEvent);
                  self._endHighlight(nativeEvent);
                }
              }
              if (mod2.default.OS === "android") {
                if (!self.props.touchSoundDisabled) {
                  mod3.default.playTouchSound();
                  const _default = mod3.default;
                }
              }
              self.touchableHandlePress(nativeEvent);
            }
          }
          tmp20 = !dependencyMap3[touchState] || tmp18;
        }
      }
      if (self.touchableDelayTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.touchableDelayTimeout);
      }
      self.touchableDelayTimeout = null;
    }
    if (!_isHighlightResult1) {
      if (_isHighlightResult) {
        self._endHighlight(nativeEvent);
      }
    }
  },
  _startHighlight(nativeEvent) {
    const self = this;
    this._savePressInLocation(nativeEvent);
    if (this.touchableHandleActivePressIn) {
      const result = self.touchableHandleActivePressIn(nativeEvent);
    }
  },
  _endHighlight(nativeEvent) {
    let self = this;
    closure_0 = nativeEvent;
    self = this;
    if (this.touchableHandleActivePressOut) {
      if (self.touchableGetPressOutDelayMS) {
        if (self.touchableGetPressOutDelayMS()) {
          const _setTimeout = setTimeout;
          self.pressOutDelayTimeout = setTimeout(() => {
            const result = self.touchableHandleActivePressOut(closure_0);
          }, self.touchableGetPressOutDelayMS());
        }
      }
      let result = self.touchableHandleActivePressOut(nativeEvent);
    }
  },
  withoutDefaultFocusAndBlur: {}
};
({ touchableHandleFocus, touchableHandleBlur } = obj9);
obj9.withoutDefaultFocusAndBlur = _objectWithoutProperties.default(obj9, ["touchableHandleFocus", "touchableHandleBlur"]);

export default {
  Mixin: obj9,
  renderDebugView(arg0) {
    ({ color, hitSlop } = arg0);
    return null;
  }
};
