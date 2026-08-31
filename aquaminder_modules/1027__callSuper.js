// Module ID: 1027
// Function ID: 10863
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 2, 1025, 119, 251]

// Module 1027 (_callSuper)
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
_callSuper = _interopRequireWildcard(_callSuper2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_9 = ["style"];
const tmp5 = ((Component) => {
  class TouchableOpacity {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      obj = closure_1_11(this, closure_0, items.concat(array));
      closure_0 = obj;
      obj.getChildStyleOpacityWithDefault = () => {
        const StyleSheet = closure_2_6.StyleSheet;
        const tmp = StyleSheet.flatten(obj.props.style) || {};
        let num = 1;
        if (tmp.opacity != null) {
          const opacity = tmp.opacity;
          num = opacity.valueOf();
        }
        return num;
      };
      value = new closure_1_6.Animated.Value(obj.getChildStyleOpacityWithDefault());
      obj.opacity = value;
      obj.setOpacityTo = (toValue, duration) => {
        const Animated = closure_2_6.Animated;
        obj = { toValue, duration, easing: Easing.inOut(closure_2_6.Easing.quad) };
        Easing = closure_2_6.Easing;
        const useNativeAnimations = obj.props.useNativeAnimations;
        let flag = true;
        if (useNativeAnimations != null) {
          flag = useNativeAnimations;
        }
        obj.useNativeDriver = flag;
        Animated.timing(obj.opacity, obj).start();
      };
      obj.onStateChange = (arg0, arg1) => {
        if (arg1 === closure_2_7.TOUCHABLE_STATE.BEGAN) {
          obj.setOpacityTo(obj.props.activeOpacity, 0);
        } else if (arg1 === closure_2_7.TOUCHABLE_STATE.UNDETERMINED) {
          obj.setOpacityTo(obj.getChildStyleOpacityWithDefault(), 150);
        }
      };
      return obj;
    }
  }
  closure_5.default(TouchableOpacity, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        let style = props.style;
        if (style === undefined) {
          style = {};
        }
        const obj = { style: items, onStateChange: self.onStateChange };
        items = [style, { opacity: self.opacity }];
        if (self.props.children) {
          let children = self.props.children;
        } else {
          children = <closure_1_6.View />;
        }
        obj.children = children;
        return <closure_1_7.default {...Object.assign({}, TouchableOpacity.default(props, closure_1_9), obj)} />;
      }
    }
  ];
  return closure_2.default(TouchableOpacity, items);
})(getIteratorFn.Component);
tmp5.defaultProps = Object.assign({}, _callSuper.default.defaultProps, { activeOpacity: 0.2 });

export default tmp5;
