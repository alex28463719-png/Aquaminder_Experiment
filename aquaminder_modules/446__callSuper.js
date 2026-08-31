// Module ID: 446
// Function ID: 5138
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 248, 288, 253, 33, 119, 251]

// Module 446 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import normalizeDelay from "normalizeDelay" /* 288 */;
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
let closure_6 = module_1(View);
let closure_7 = module_1(normalizeDelay);
let closure_8 = module_1(setStyleAttributePreprocessor);
let closure_9 = module_1(get_Version);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_12 = ["onBlur", "onFocus"];
let closure_13 = ((Component) => {
  class TouchableHighlightImpl {
    constructor() {
      defaultResult = closure_1_1.default(this, TouchableHighlightImpl);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      obj = closure_1_15(this, TouchableHighlightImpl, items.concat(array));
      obj._isMounted = false;
      obj = {};
      _default = new closure_1_7.default(obj._createPressabilityConfig());
      obj.pressability = _default;
      _createExtraStylesResult = null;
      if (obj.props.testOnly_pressed === true) {
        _createExtraStylesResult = obj._createExtraStyles();
      }
      obj.extraStyles = _createExtraStylesResult;
      obj.state = obj;
      return obj;
    }
  }
  closure_5.default(TouchableHighlightImpl, Component);
  let obj = {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      let self = this;
      self = this;
      const obj = { cancelable: !this.props.rejectResponderTermination };
      if (this.props.disabled != null) {
        let disabled = self.props.disabled;
      } else {
        const accessibilityState = self.props.accessibilityState;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      obj.disabled = disabled;
      obj.hitSlop = self.props.hitSlop;
      obj.delayLongPress = self.props.delayLongPress;
      obj.delayPressIn = self.props.delayPressIn;
      obj.delayPressOut = self.props.delayPressOut;
      obj.minPressDuration = 0;
      obj.pressRectOffset = self.props.pressRetentionOffset;
      obj.android_disableSound = self.props.touchSoundDisabled;
      obj.onBlur = function onBlur(arg0) {
        if (closure_2_9.default.isTV) {
          self._hideUnderlay();
        }
        if (self.props.onBlur != null) {
          const props = self.props;
          props.onBlur(arg0);
        }
      };
      obj.onFocus = function onFocus(arg0) {
        if (closure_2_9.default.isTV) {
          self._showUnderlay();
        }
        if (self.props.onFocus != null) {
          const props = self.props;
          props.onFocus(arg0);
        }
      };
      obj.onLongPress = self.props.onLongPress;
      obj.onPress = function onPress(arg0) {
        if (self._hideTimeout != null) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
        }
        if (!closure_2_9.default.isTV) {
          self._showUnderlay();
          const delayPressOut = self.props.delayPressOut;
          let num = 0;
          if (delayPressOut != null) {
            num = delayPressOut;
          }
          self._hideTimeout = setTimeout(() => {
            closure_1_0._hideUnderlay();
          }, num);
          const tmp4 = self;
        }
        if (self.props.onPress != null) {
          const props = self.props;
          props.onPress(arg0);
        }
      };
      obj.onPressIn = function onPressIn(arg0) {
        if (self._hideTimeout != null) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
          self._hideTimeout = null;
        }
        self._showUnderlay();
        if (self.props.onPressIn != null) {
          const props = self.props;
          props.onPressIn(arg0);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        if (self._hideTimeout == null) {
          self._hideUnderlay();
        }
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
    key: "_createExtraStyles",
    value: function _createExtraStyles() {
      const self = this;
      let obj = {};
      obj = {};
      const activeOpacity = this.props.activeOpacity;
      let num = 0.85;
      if (activeOpacity != null) {
        num = activeOpacity;
      }
      obj.opacity = num;
      obj.child = obj;
      obj = {};
      let str = "black";
      if (self.props.underlayColor !== undefined) {
        str = self.props.underlayColor;
      }
      obj.backgroundColor = str;
      obj.underlay = obj;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "_showUnderlay",
    value: function _showUnderlay() {
      const self = this;
      if (this._isMounted) {
        if (self._hasPressHandler()) {
          const obj = { extraStyles: self._createExtraStyles() };
          self.setState(obj);
          if (self.props.onShowUnderlay != null) {
            const props = self.props;
            props.onShowUnderlay();
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_hideUnderlay",
    value: function _hideUnderlay() {
      const self = this;
      if (this._hideTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
        self._hideTimeout = null;
      }
      if (self.props.testOnly_pressed !== true) {
        if (self._hasPressHandler()) {
          const obj = { extraStyles: null };
          self.setState(obj);
          if (self.props.onHideUnderlay != null) {
            const props = self.props;
            props.onHideUnderlay();
          }
        }
      }
    }
  };
  items[4] = {
    key: "_hasPressHandler",
    value: function _hasPressHandler() {
      const self = this;
      return this.props.onPress != null || self.props.onPressIn != null || self.props.onPressOut != null || self.props.onLongPress != null;
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      const self = this;
      const Children = closure_1_10.Children;
      const onlyResult = Children.only(this.props.children);
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      if (this.props.disabled != null) {
        const _Object = Object;
        let obj = { disabled: self.props.disabled };
        let accessibilityState = Object.assign({}, self.props.accessibilityState, obj);
      } else {
        accessibilityState = self.props.accessibilityState;
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
      obj = { accessible: self.props.accessible !== false, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState };
      obj.accessibilityValue = obj;
      obj.accessibilityActions = self.props.accessibilityActions;
      obj.onAccessibilityAction = self.props.onAccessibilityAction;
      let str2 = "no-hide-descendants";
      if (self.props["aria-hidden"] !== true) {
        str2 = self.props.importantForAccessibility;
      }
      obj.importantForAccessibility = str2;
      let accessibilityViewIsModal = self.props["aria-modal"];
      if (accessibilityViewIsModal == null) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj.accessibilityViewIsModal = accessibilityViewIsModal;
      obj.accessibilityLiveRegion = str;
      let accessibilityElementsHidden = self.props["aria-hidden"];
      if (accessibilityElementsHidden == null) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj.accessibilityElementsHidden = accessibilityElementsHidden;
      const extraStyles = self.state.extraStyles;
      let underlay;
      if (extraStyles != null) {
        underlay = extraStyles.underlay;
      }
      obj.style = closure_1_8.default.compose(self.props.style, underlay);
      obj.onLayout = self.props.onLayout;
      obj.hitSlop = self.props.hitSlop;
      obj.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj.nextFocusDown = self.props.nextFocusDown;
      obj.nextFocusForward = self.props.nextFocusForward;
      obj.nextFocusLeft = self.props.nextFocusLeft;
      obj.nextFocusRight = self.props.nextFocusRight;
      obj.nextFocusUp = self.props.nextFocusUp;
      obj.focusable = self.props.focusable !== false && self.props.onPress !== undefined && !self.props.disabled;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj.nativeID = nativeID;
      obj.testID = self.props.testID;
      obj.ref = self.props.hostRef;
      const obj1 = {};
      const obj2 = {};
      const extraStyles2 = self.state.extraStyles;
      let child;
      if (extraStyles2 != null) {
        child = extraStyles2.child;
      }
      obj2.style = closure_1_8.default.compose(onlyResult.props.style, child);
      const items = [closure_1_10.cloneElement(onlyResult, obj2), null];
      obj1.children = items;
      return <closure_1_6.default {...Object.assign(obj, TouchableHighlightImpl.default(eventHandlers, closure_1_12), obj1)} />;
    }
  };
  items[6] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[7] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  };
  items[8] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      this._isMounted = false;
      if (this._hideTimeout != null) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
      }
      const pressability = self.state.pressability;
      pressability.reset();
    }
  };
  return closure_2.default(TouchableHighlightImpl, items);
})(getIteratorFn.Component);
const forwardRefResult = getIteratorFn.forwardRef((arg0, hostRef) => <closure_13 {...Object.assign({}, arg0, { hostRef: arg1 })} />);
forwardRefResult.displayName = "TouchableHighlight";

export default forwardRefResult;
