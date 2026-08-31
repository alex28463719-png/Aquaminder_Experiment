// Module ID: 1024
// Function ID: 10819
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 2, 119, 1025, 251]

// Module 1024 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _callSuper2 from "_callSuper" /* 1025 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

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
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
_callSuper = module_1(_callSuper2);
let closure_9 = ["style"];
const tmp5 = ((Component) => {
  class TouchableNativeFeedback {
    constructor() {
      defaultResult = closure_1_1.default(this, TouchableNativeFeedback);
      return closure_1_11(this, TouchableNativeFeedback, arguments);
    }
  }
  closure_5.default(TouchableNativeFeedback, Component);
  let obj = {
    key: "getExtraButtonProps",
    value: function getExtraButtonProps() {
      const obj = {};
      let rippleRadius = this.props.background;
      if (!rippleRadius) {
        obj.foreground = this.props.useForeground;
        return obj;
      } else {
        if (rippleRadius.type === "RippleAndroid") {
          ({ borderless: obj.borderless, color: obj.rippleColor } = rippleRadius);
        } else if (rippleRadius.type === "ThemeAttrAndroid") {
          obj.borderless = rippleRadius.attribute === "selectableItemBackgroundBorderless";
        }
        rippleRadius = rippleRadius.rippleRadius;
        obj.rippleRadius = rippleRadius;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (style === undefined) {
        style = {};
      }
      const obj = { style, extraButtonProps: self.getExtraButtonProps() };
      return <closure_1_7.default {...Object.assign({}, TouchableNativeFeedback.default(props, closure_1_9), obj)} />;
    }
  };
  items[1] = obj;
  return closure_2.default(TouchableNativeFeedback, items);
})(getIteratorFn.Component);
tmp5.defaultProps = Object.assign({}, _callSuper.default.defaultProps, { useForeground: true, extraButtonProps: { rippleColor: null } });
tmp5.SelectableBackground = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius };
  return obj;
};
tmp5.SelectableBackgroundBorderless = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius };
  return obj;
};
tmp5.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
tmp5.canUseNativeForeground = () => {
  let tmp = Platform.Platform.OS === "android";
  if (tmp) {
    tmp = Platform.Platform.Version >= 23;
  }
  return tmp;
};

export default tmp5;
