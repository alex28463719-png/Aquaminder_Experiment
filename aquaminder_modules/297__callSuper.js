// Module ID: 297
// Function ID: 3389
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 248, 288, 89, 33, 20, 119, 251, 57, 250]

// Module 297 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View2 from "View" /* 248 */;
import normalizeDelay from "normalizeDelay" /* 288 */;
import module_1 from "module_1" /* 1 */;
import jsxProd from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
const View = module_1(View2);
let closure_8 = module_1(normalizeDelay);
let closure_9 = module_1(processColor);
get_Version = module_1(get_Version);
let closure_11 = module_1(invariant);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_13 = ["onBlur", "onFocus"];
const tmp7 = ((Component) => {
  class TouchableNativeFeedback {
    constructor() {
      defaultResult = closure_1_3.default(this, TouchableNativeFeedback);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      obj = closure_1_17(this, TouchableNativeFeedback, items.concat(array));
      obj = {};
      _default = new closure_1_8.default(obj._createPressabilityConfig());
      obj.pressability = _default;
      obj.state = obj;
      return obj;
    }
  }
  closure_7.default(TouchableNativeFeedback, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      let self = this;
      self = this;
      let disabled = this.props["aria-disabled"];
      if (disabled == null) {
        const accessibilityState = self.props.accessibilityState;
        disabled = undefined;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      const obj = { cancelable: !self.props.rejectResponderTermination };
      if (self.props.disabled != null) {
        disabled = self.props.disabled;
      }
      obj.disabled = disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.android_disableSound = self.props.touchSoundDisabled;
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = self.props.onPress;
      obj.onPressIn = function onPressIn(nativeEvent) {
        if (closure_2_10.default.OS === "android") {
          const result = self._dispatchHotspotUpdate(nativeEvent);
          const result1 = self._dispatchPressedStateChange(true);
        }
        if (self.props.onPressIn != null) {
          const props = self.props;
          props.onPressIn(nativeEvent);
        }
      };
      obj.onPressMove = function onPressMove(nativeEvent) {
        if (closure_2_10.default.OS === "android") {
          const result = self._dispatchHotspotUpdate(nativeEvent);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        if (closure_2_10.default.OS === "android") {
          const result = self._dispatchPressedStateChange(false);
        }
        if (self.props.onPressOut != null) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "_dispatchPressedStateChange",
    value: function _dispatchPressedStateChange(arg0) {
      if (closure_1_10.default.OS === "android") {
        const self = this;
        const result = TouchableNativeFeedback(closure_1_1[14]).findHostInstance_DEPRECATED(this);
        if (result == null) {
          const _console = console;
          console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
        } else {
          const Commands = TouchableNativeFeedback(closure_1_1[15]).Commands;
          Commands.setPressed(result, arg0);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_dispatchHotspotUpdate",
    value: function _dispatchHotspotUpdate(nativeEvent) {
      if (closure_1_10.default.OS === "android") {
        ({ locationX, locationY } = nativeEvent.nativeEvent);
        const self = this;
        const result = TouchableNativeFeedback(closure_1_1[14]).findHostInstance_DEPRECATED(this);
        if (result == null) {
          const _console = console;
          console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
        } else {
          const Commands = TouchableNativeFeedback(closure_1_1[15]).Commands;
          let num2 = 0;
          if (locationX != null) {
            num2 = locationX;
          }
          let num3 = 0;
          if (locationY != null) {
            num3 = locationY;
          }
          Commands.hotspotUpdate(result, num2, num3);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      const Children = closure_1_12.Children;
      const onlyResult = Children.only(this.props.children);
      const items = [onlyResult.props.children];
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      let obj = {};
      aria_busy = this.props["aria-busy"];
      if (aria_busy == null) {
        const accessibilityState = self.props.accessibilityState;
        let busy;
        if (accessibilityState != null) {
          busy = accessibilityState.busy;
        }
        aria_busy = busy;
      }
      obj.busy = aria_busy;
      aria_checked = self.props["aria-checked"];
      if (aria_checked == null) {
        const accessibilityState2 = self.props.accessibilityState;
        let checked;
        if (accessibilityState2 != null) {
          checked = accessibilityState2.checked;
        }
        aria_checked = checked;
      }
      obj.checked = aria_checked;
      aria_disabled = self.props["aria-disabled"];
      if (aria_disabled == null) {
        const accessibilityState3 = self.props.accessibilityState;
        let disabled;
        if (accessibilityState3 != null) {
          disabled = accessibilityState3.disabled;
        }
        aria_disabled = disabled;
      }
      obj.disabled = aria_disabled;
      aria_expanded = self.props["aria-expanded"];
      if (aria_expanded == null) {
        const accessibilityState4 = self.props.accessibilityState;
        let expanded;
        if (accessibilityState4 != null) {
          expanded = accessibilityState4.expanded;
        }
        aria_expanded = expanded;
      }
      obj.expanded = aria_expanded;
      aria_selected = self.props["aria-selected"];
      if (aria_selected == null) {
        const accessibilityState5 = self.props.accessibilityState;
        let selected;
        if (accessibilityState5 != null) {
          selected = accessibilityState5.selected;
        }
        aria_selected = selected;
      }
      obj.selected = aria_selected;
      let merged = obj;
      if (self.props.disabled != null) {
        const _Object = Object;
        obj = { disabled: self.props.disabled };
        merged = Object.assign({}, obj, obj);
      }
      obj = {};
      aria_valuemax = self.props["aria-valuemax"];
      if (aria_valuemax == null) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (accessibilityValue != null) {
          max = accessibilityValue.max;
        }
        aria_valuemax = max;
      }
      obj.max = aria_valuemax;
      aria_valuemin = self.props["aria-valuemin"];
      if (aria_valuemin == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        aria_valuemin = min;
      }
      obj.min = aria_valuemin;
      aria_valuenow = self.props["aria-valuenow"];
      if (aria_valuenow == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        aria_valuenow = now;
      }
      obj.now = aria_valuenow;
      aria_valuetext = self.props["aria-valuetext"];
      if (aria_valuetext == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        aria_valuetext = text;
      }
      obj.text = aria_valuetext;
      let str = "none";
      if (self.props["aria-live"] !== "off") {
        let accessibilityLiveRegion = self.props["aria-live"];
        if (accessibilityLiveRegion == null) {
          accessibilityLiveRegion = self.props.accessibilityLiveRegion;
        }
        str = accessibilityLiveRegion;
      }
      let accessibilityLabel = self.props["aria-label"];
      if (accessibilityLabel == null) {
        accessibilityLabel = self.props.accessibilityLabel;
      }
      const cloneElement = closure_1_12.cloneElement;
      const items1 = [onlyResult, ];
      if (self.props.background === undefined) {
        let background = TouchableNativeFeedback.SelectableBackground();
      } else {
        background = self.props.background;
      }
      const defaultResult = closure_1_2.default(eventHandlers, closure_1_13);
      const tmp15 = closure_1_12;
      const tmp16 = closure_1_15;
      const obj1 = { accessible: self.props.accessible !== false, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityLabel, accessibilityRole: self.props.accessibilityRole, accessibilityState: merged, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: obj };
      let str2 = "no-hide-descendants";
      if (self.props["aria-hidden"] !== true) {
        str2 = self.props.importantForAccessibility;
      }
      obj1.importantForAccessibility = str2;
      let accessibilityViewIsModal = self.props["aria-modal"];
      if (accessibilityViewIsModal == null) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj1.accessibilityViewIsModal = accessibilityViewIsModal;
      obj1.accessibilityLiveRegion = str;
      let accessibilityElementsHidden = self.props["aria-hidden"];
      if (accessibilityElementsHidden == null) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj1.accessibilityElementsHidden = accessibilityElementsHidden;
      obj1.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj1.hitSlop = self.props.hitSlop;
      obj1.focusable = self.props.focusable !== false && self.props.onPress !== undefined && !self.props.disabled;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj1.nativeID = nativeID;
      obj1.nextFocusDown = self.props.nextFocusDown;
      obj1.nextFocusForward = self.props.nextFocusForward;
      obj1.nextFocusLeft = self.props.nextFocusLeft;
      obj1.nextFocusRight = self.props.nextFocusRight;
      obj1.nextFocusUp = self.props.nextFocusUp;
      obj1.onLayout = self.props.onLayout;
      obj1.testID = self.props.testID;
      items1[1] = Object.assign({}, defaultResult, closure_1_15(background, self.props.useForeground === true), obj1);
      return cloneElement.apply(tmp15, items1.concat(items));
    }
  };
  items[4] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[5] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[6] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
    }
  };
  return closure_4.default(TouchableNativeFeedback, items);
})(getIteratorFn.Component);
let closure_14 = tmp7;
tmp7.SelectableBackground = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius };
  return obj;
};
tmp7.SelectableBackgroundBorderless = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius };
  return obj;
};
tmp7.Ripple = (arg0, borderless, rippleRadius) => {
  const defaultResult = closure_9.default(arg0);
  let tmp2 = defaultResult == null;
  if (!tmp2) {
    tmp2 = typeof defaultResult === "number";
  }
  closure_11.default(tmp2, "Unexpected color given for Ripple color");
  return { type: "RippleAndroid", color: defaultResult, borderless, rippleRadius };
};
tmp7.canUseNativeForeground = () => get_Version.default.OS === "android";
let closure_15 = get_Version.default.OS === "android" ? ((nativeBackgroundAndroid) => {
  if (arg1) {
    if (closure_14.canUseNativeForeground()) {
      let obj = { nativeForegroundAndroid: nativeBackgroundAndroid };
    }
    return obj;
  }
  obj = { nativeBackgroundAndroid };
}) : ((arg0, arg1) => null);
tmp7.displayName = "TouchableNativeFeedback";

export default tmp7;
