// Module ID: 1028
// Function ID: 10876
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 1025, 2, 251]

// Module 1028 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _callSuper2 from "_callSuper" /* 1025 */;
import module_1 from "module_1" /* 1 */;
import closure_8 from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

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
_callSuper = _interopRequireWildcard(_callSuper2);
let closure_10 = ["style"];
const tmp5 = ((Component) => {
  class TouchableHighlight {
    constructor(arg0) {
      defaultResult = closure_1_1.default(this, closure_0);
      items = [];
      items[0] = Component;
      tmp2 = closure_1_12(this, closure_0, items);
      closure_0 = tmp2;
      tmp2.showUnderlay = () => {
        if (store.hasPressHandler()) {
          let obj = {};
          obj = { opacity: store.props.activeOpacity };
          obj.extraChildStyle = obj;
          obj = { backgroundColor: store.props.underlayColor };
          obj.extraUnderlayStyle = obj;
          store.setState(obj);
          if (store.props.onShowUnderlay != null) {
            const props = store.props;
            props.onShowUnderlay();
          }
        }
      };
      tmp2.hasPressHandler = () => {
        let onLongPress = store.props.onPress;
        if (!onLongPress) {
          onLongPress = store.props.onPressIn;
        }
        if (!onLongPress) {
          onLongPress = store.props.onPressOut;
        }
        if (!onLongPress) {
          onLongPress = store.props.onLongPress;
        }
        return onLongPress;
      };
      tmp2.hideUnderlay = () => {
        store.setState({ extraChildStyle: null, extraUnderlayStyle: null });
        if (store.props.onHideUnderlay != null) {
          const props = store.props;
          props.onHideUnderlay();
        }
      };
      tmp2.onStateChange = (arg0, arg1) => {
        if (arg1 === closure_2_7.TOUCHABLE_STATE.BEGAN) {
          store.showUnderlay();
        } else if (arg1 === closure_2_7.TOUCHABLE_STATE.UNDETERMINED) {
          store.hideUnderlay();
        }
      };
      tmp2.state = { extraChildStyle: null, extraUnderlayStyle: null };
      return tmp2;
    }
  }
  closure_5.default(TouchableHighlight, Component);
  let obj = {
    key: "renderChildren",
    value: function renderChildren() {
      const self = this;
      if (this.props.children) {
        const Children = closure_1_6.Children;
        const onlyResult = Children.only(self.props.children);
        const obj = {};
        const StyleSheet = closure_1_8.StyleSheet;
        obj.style = StyleSheet.compose(onlyResult.props.style, self.state.extraChildStyle);
        return closure_1_6.cloneElement(onlyResult, obj);
      } else {
        return <closure_1_8.View />;
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (style === undefined) {
        style = {};
      }
      const obj = { style: items, onStateChange: self.onStateChange };
      items = [style, self.state.extraUnderlayStyle];
      obj.children = self.renderChildren();
      return <closure_1_7.default {...Object.assign({}, TouchableHighlight.default(props, closure_1_10), obj)} />;
    }
  };
  items[1] = obj;
  return closure_2.default(TouchableHighlight, items);
})(getIteratorFn.Component);
tmp5.defaultProps = Object.assign({}, _callSuper.default.defaultProps, { activeOpacity: 0.85, delayPressOut: 100, underlayColor: "black" });

export default tmp5;
