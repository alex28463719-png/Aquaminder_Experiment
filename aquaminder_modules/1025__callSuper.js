// Module ID: 1025
// Function ID: 10834
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 119, 2, 251, 972, 962]

// Module 1025 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let obj = { UNDETERMINED: 0, BEGAN: 1, MOVED_OUTSIDE: 2 };
let tmp4 = ((Component) => {
  class GenericTouchable {
    constructor() {
      defaultResult = closure_1_2.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_11(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3.longPressDetected = false;
      tmp3.pointerInside = true;
      tmp3.STATE = closure_1_9.UNDETERMINED;
      tmp3.onGestureEvent = (nativeEvent) => {
        const pointerInside = nativeEvent.nativeEvent.pointerInside;
        if (closure_0.pointerInside !== pointerInside) {
          if (pointerInside) {
            obj.onMoveIn();
          } else {
            obj.onMoveOut();
          }
        }
        closure_0.pointerInside = pointerInside;
      };
      tmp3.onHandlerStateChange = (nativeEvent) => {
        const state = nativeEvent.nativeEvent.state;
        if (state !== GenericTouchable(closure_2_1[9]).State.CANCELLED) {
          if (state !== GenericTouchable(closure_2_1[9]).State.FAILED) {
            if (closure_2_7.Platform.OS !== "android") {
              let BEGAN = GenericTouchable(closure_2_1[9]).State.ACTIVE;
            } else {
              BEGAN = GenericTouchable(closure_2_1[9]).State.BEGAN;
            }
            if (state === BEGAN) {
              if (closure_0.STATE === closure_2_9.UNDETERMINED) {
                closure_0.handlePressIn();
              }
            }
            if (state === GenericTouchable(closure_2_1[9]).State.END) {
              let tmp11 = !closure_0.longPressDetected;
              if (tmp11) {
                tmp11 = closure_0.STATE !== closure_2_9.MOVED_OUTSIDE;
              }
              if (tmp11) {
                tmp11 = closure_0.pressOutTimeout === null;
              }
              const result = closure_0.handleGoToUndetermined();
              if (tmp11) {
                if (closure_0.props.onPress != null) {
                  const props = closure_0.props;
                  props.onPress();
                }
              }
            }
          }
        }
        closure_0.moveToState(closure_2_9.UNDETERMINED);
      };
      tmp3.onLongPressDetected = () => {
        closure_0.longPressDetected = true;
        if (closure_0.props.onLongPress != null) {
          const props = closure_0.props;
          props.onLongPress();
        }
      };
      return tmp3;
    }
  }
  closure_6.default(GenericTouchable, Component);
  obj = {
    key: "handlePressIn",
    value: function handlePressIn() {
      let self = this;
      self = this;
      if (this.props.delayPressIn) {
        const _setTimeout = setTimeout;
        self.pressInTimeout = setTimeout(() => {
          self.moveToState(closure_2_9.BEGAN);
          self.pressInTimeout = null;
        }, self.props.delayPressIn);
      } else {
        self.moveToState(closure_1_9.BEGAN);
      }
      if (self.props.onLongPress) {
        const _setTimeout2 = setTimeout;
        self.longPressTimeout = setTimeout(self.onLongPressDetected, (self.props.delayPressIn || 0) + (self.props.delayLongPress || 0));
        const tmp4 = self.props.delayPressIn || 0;
        const tmp5 = self.props.delayLongPress || 0;
      }
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "handleMoveOutside",
    value: function handleMoveOutside() {
      let self = this;
      self = this;
      if (this.props.delayPressOut) {
        let pressOutTimeout = self.pressOutTimeout;
        if (!pressOutTimeout) {
          const _setTimeout = setTimeout;
          pressOutTimeout = setTimeout(() => {
            self.moveToState(closure_2_9.MOVED_OUTSIDE);
            self.pressOutTimeout = null;
          }, self.props.delayPressOut);
        }
        self.pressOutTimeout = pressOutTimeout;
      } else {
        self.moveToState(closure_1_9.MOVED_OUTSIDE);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleGoToUndetermined",
    value: function handleGoToUndetermined() {
      let self = this;
      self = this;
      clearTimeout(this.pressOutTimeout);
      if (this.props.delayPressOut) {
        const _setTimeout = setTimeout;
        self.pressOutTimeout = setTimeout(() => {
          if (self.STATE === closure_2_9.UNDETERMINED) {
            self.moveToState(closure_2_9.BEGAN);
          }
          self.moveToState(closure_2_9.UNDETERMINED);
          self.pressOutTimeout = null;
        }, self.props.delayPressOut);
      } else {
        if (self.STATE === closure_1_9.UNDETERMINED) {
          self.moveToState(closure_1_9.BEGAN);
        }
        self.moveToState(closure_1_9.UNDETERMINED);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  };
  items[4] = {
    key: "reset",
    value: function reset() {
      this.longPressDetected = false;
      this.pointerInside = true;
      clearTimeout(this.pressInTimeout);
      clearTimeout(this.pressOutTimeout);
      clearTimeout(this.longPressTimeout);
      this.pressOutTimeout = null;
      this.longPressTimeout = null;
      this.pressInTimeout = null;
    }
  };
  items[5] = {
    key: "moveToState",
    value: function moveToState(BEGAN) {
      const self = this;
      if (BEGAN !== this.STATE) {
        if (BEGAN === closure_1_9.BEGAN) {
          const props3 = self.props;
          const onPressIn = props3.onPressIn;
          if (onPressIn != null) {
            onPressIn.call(props3);
          }
        } else if (BEGAN === closure_1_9.MOVED_OUTSIDE) {
          const props2 = self.props;
          const onPressOut2 = props2.onPressOut;
          if (onPressOut2 != null) {
            onPressOut2.call(props2);
          }
        } else if (BEGAN === closure_1_9.UNDETERMINED) {
          self.reset();
          if (self.STATE === closure_1_9.BEGAN) {
            const props = self.props;
            const onPressOut = props.onPressOut;
            if (onPressOut != null) {
              onPressOut.call(props);
            }
          }
        }
        const props4 = self.props;
        const onStateChange = props4.onStateChange;
        if (onStateChange != null) {
          onStateChange.call(props4, self.STATE, BEGAN);
        }
        self.STATE = BEGAN;
      }
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reset();
    }
  };
  items[7] = {
    key: "onMoveIn",
    value: function onMoveIn() {
      const self = this;
      if (this.STATE === closure_1_9.MOVED_OUTSIDE) {
        self.moveToState(closure_1_9.BEGAN);
      }
    }
  };
  items[8] = {
    key: "onMoveOut",
    value: function onMoveOut() {
      const self = this;
      clearTimeout(this.longPressTimeout);
      this.longPressTimeout = null;
      if (this.STATE === closure_1_9.BEGAN) {
        self.handleMoveOutside();
      }
    }
  };
  items[9] = {
    key: "render",
    value: function render() {
      const self = this;
      if (typeof this.props.hitSlop === "number") {
        obj = { top: self.props.hitSlop, left: self.props.hitSlop, bottom: self.props.hitSlop, right: self.props.hitSlop };
        let hitSlop = obj;
      } else {
        hitSlop = self.props.hitSlop;
      }
      let tmp;
      if (hitSlop != null) {
        tmp = hitSlop;
      }
      obj = { accessible: self.props.accessible !== false, accessibilityLabel: self.props.accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityRole: self.props.accessibilityRole, accessibilityState: self.props.accessibilityState, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, nativeID: self.props.nativeID, onLayout: self.props.onLayout };
      obj = { style: self.props.containerStyle };
      let onHandlerStateChange;
      if (!self.props.disabled) {
        onHandlerStateChange = self.onHandlerStateChange;
      }
      obj.onHandlerStateChange = onHandlerStateChange;
      obj.onGestureEvent = self.onGestureEvent;
      obj.hitSlop = tmp;
      obj.userSelect = self.props.userSelect;
      obj.shouldActivateOnStart = self.props.shouldActivateOnStart;
      obj.disallowInterruption = self.props.disallowInterruption;
      obj.testID = self.props.testID;
      const touchSoundDisabled = self.props.touchSoundDisabled;
      let flag = false;
      if (touchSoundDisabled != null) {
        flag = touchSoundDisabled;
      }
      obj.touchSoundDisabled = flag;
      obj.enabled = !self.props.disabled;
      return closure_1_8.jsx(GenericTouchable(closure_1_1[10]).BaseButton, Object.assign(obj, self.props.extraButtonProps, { children: closure_1_8.jsx(closure_1_7.Animated.View, Object.assign({}, obj, obj2)) }));
    }
  };
  return closure_3.default(GenericTouchable, items);
})(getIteratorFn.Component);
tmp4.defaultProps = { delayLongPress: 600, extraButtonProps: { rippleColor: "transparent", exclusive: true } };

export const TOUCHABLE_STATE = obj;
export default tmp4;
