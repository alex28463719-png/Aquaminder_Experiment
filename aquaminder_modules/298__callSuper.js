// Module ID: 298
// Function ID: 3414
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 299, 322, 288, 128, 33, 119, 251]

// Module 298 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import normalizeDelay from "normalizeDelay" /* 288 */;
import get_FlatList from "get FlatList" /* 299 */;
import A from "A" /* 322 */;
import module_1 from "module_1" /* 1 */;
import closure_11 from "jsxProd" /* 251 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_3.default(arg0, constructResult);
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
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(get_FlatList);
let closure_7 = module_1(A);
let closure_8 = module_1(normalizeDelay);
let closure_9 = module_1(flattenStyle);
let closure_10 = module_1(get_Version);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_12 = ["onBlur", "onFocus"];
let closure_13 = ((Component) => {
  class TouchableOpacity {
    constructor() {
      defaultResult = closure_1_1.default(this, TouchableOpacity);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      obj = closure_1_15(this, TouchableOpacity, items.concat(array));
      obj = {};
      value = new closure_1_6.default.Value(obj._getChildStyleOpacityWithDefault());
      obj.anim = value;
      _default = new closure_1_8.default(obj._createPressabilityConfig());
      obj.pressability = _default;
      obj.state = obj;
      return obj;
    }
  }
  closure_5.default(TouchableOpacity, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      let self = this;
      self = this;
      const obj = { cancelable: !this.props.rejectResponderTermination };
      aria_disabled = this.props.disabled;
      if (aria_disabled == null) {
        aria_disabled = self.props["aria-disabled"];
      }
      if (aria_disabled == null) {
        const accessibilityState = self.props.accessibilityState;
        let disabled;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
        aria_disabled = disabled;
      }
      obj.disabled = aria_disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.onBlur = function onBlur(arg0) {
        if (closure_2_10.default.isTV) {
          self._opacityInactive(250);
        }
        if (self.props.onBlur != null) {
          const props = self.props;
          props.onBlur(arg0);
        }
      };
      obj.onFocus = function onFocus(arg0) {
        if (closure_2_10.default.isTV) {
          self._opacityActive(150);
        }
        if (self.props.onFocus != null) {
          const props = self.props;
          props.onFocus(arg0);
        }
      };
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = self.props.onPress;
      obj.onPressIn = function onPressIn(dispatchConfig) {
        let num = 150;
        if (dispatchConfig.dispatchConfig.registrationName === "onResponderGrant") {
          num = 0;
        }
        self._opacityActive(num);
        if (self.props.onPressIn != null) {
          const props = self.props;
          props.onPressIn(dispatchConfig);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        self._opacityInactive(250);
        if (self.props.onPressOut != null) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "_setOpacityTo",
    value: function _setOpacityTo(toValue, duration) {
      const _default = closure_1_6.default;
      const _default2 = closure_1_7.default;
      const obj = { toValue, duration, easing: _default2.inOut(closure_1_7.default.quad), useNativeDriver: true };
      closure_1_6.default.timing(this.state.anim, { toValue, duration, easing: _default2.inOut(closure_1_7.default.quad), useNativeDriver: true }).start();
    }
  };
  items[1] = obj;
  obj = {
    key: "_opacityActive",
    value: function _opacityActive(duration) {
      const activeOpacity = this.props.activeOpacity;
      let num = 0.2;
      if (activeOpacity != null) {
        num = activeOpacity;
      }
      this._setOpacityTo(num, duration);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_opacityInactive",
    value: function _opacityInactive(duration) {
      this._setOpacityTo(this._getChildStyleOpacityWithDefault(), duration);
    }
  };
  items[4] = {
    key: "_getChildStyleOpacityWithDefault",
    value: function _getChildStyleOpacityWithDefault() {
      let opacity;
      const defaultResult = closure_1_9.default(this.props.style);
      if (defaultResult != null) {
        opacity = defaultResult.opacity;
      }
      let num = 1;
      if (typeof opacity === "number") {
        num = opacity;
      }
      return num;
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      const self = this;
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
      const obj1 = { accessible: self.props.accessible !== false, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState: merged, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: obj };
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
      const items = [self.props.style, { opacity: self.state.anim }];
      obj1.style = items;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj1.nativeID = nativeID;
      obj1.testID = self.props.testID;
      obj1.onLayout = self.props.onLayout;
      obj1.nextFocusDown = self.props.nextFocusDown;
      obj1.nextFocusForward = self.props.nextFocusForward;
      obj1.nextFocusLeft = self.props.nextFocusLeft;
      obj1.nextFocusRight = self.props.nextFocusRight;
      obj1.nextFocusUp = self.props.nextFocusUp;
      obj1.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj1.hitSlop = self.props.hitSlop;
      obj1.focusable = self.props.focusable !== false && self.props.onPress !== undefined && !self.props.disabled;
      obj1.ref = self.props.hostRef;
      const children = [self.props.children, null];
      return closure_1_11.jsxs(closure_1_6.default.View, Object.assign(obj1, TouchableOpacity.default(eventHandlers, closure_1_12), { children }));
    }
  };
  items[6] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(disabled) {
      const self = this;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
      if (this.props.disabled !== disabled.disabled) {
        self._opacityInactive(250);
      } else {
        const defaultResult = closure_1_9.default(disabled.style);
        let opacity;
        if (defaultResult != null) {
          opacity = defaultResult.opacity;
        }
        const defaultResult1 = closure_1_9.default(self.props.style);
        let opacity1;
        if (defaultResult1 != null) {
          opacity1 = defaultResult1.opacity;
        }
      }
    }
  };
  items[7] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[8] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
      const anim = this.state.anim;
      anim.resetAnimation();
    }
  };
  return closure_2.default(TouchableOpacity, items);
})(getIteratorFn.Component);
const forwardRefResult = getIteratorFn.forwardRef((arg0, hostRef) => <closure_13 {...Object.assign({}, arg0, { hostRef: arg1 })} />);
forwardRefResult.displayName = "TouchableOpacity";

export default forwardRefResult;
