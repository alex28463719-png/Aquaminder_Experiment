// Module ID: 810
// Function ID: 8478
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 2, 692, 251]

// Module 810 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import emptyFunction2 from "emptyFunction" /* 692 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

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
const emptyFunction = module_1(emptyFunction2);
let closure_7 = ["children"];
let c8 = true;
function stateFromProps(children) {
  closure_0 = children;
  c1 = 0;
  children = children.children;
  return {
    selectedIndex: c1,
    items: children.map((props) => {
      const label = props.props;
      const value = label.value;
      if (value === selectedValue.selectedValue) {
        closure_1 = arg1;
      }
      return { value, label: label.label };
    })
  };
}
const tmp5 = ((PureComponent) => {
  class WheelCurvedPicker {
    constructor() {
      defaultResult = closure_1_1.default(this, closure_0);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_12(this, closure_0, items.concat(array));
      closure_0 = tmp3;
      tmp3.state = { selectedIndex: 0 };
      tmp3.onValueChange = (nativeEvent) => {
        props = props.props;
        props.onValueChange(nativeEvent.nativeEvent.data);
        if (c8) {
          c8 = false;
          return false;
        }
      };
      return tmp3;
    }
  }
  closure_5.default(WheelCurvedPicker, PureComponent);
  let obj = {
    key: "render",
    value: function render() {
      const obj = { onValueChange: this.onValueChange, data: this.state.items, selectedIndex: parseInt(this.state.selectedIndex, 10) };
      return <closure_1_10 {...Object.assign({}, WheelCurvedPicker.default(this.props, closure_1_7), obj)} />;
    }
  };
  let items = [obj];
  obj = {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(arg0) {
      return closure_1_9(arg0);
    }
  };
  const items1 = [obj];
  return closure_2.default(WheelCurvedPicker, items, items1);
})(getIteratorFn.PureComponent);
tmp5.propTypes = { data: emptyFunction.default.array, textSize: emptyFunction.default.number, onValueChange: emptyFunction.default.func.isRequired, selectedValue: emptyFunction.default.any };
tmp5.defaultProps = { textSize: 26, textColor: "#333" };
const tmp6 = ((PureComponent) => {
  class Item {
    constructor() {
      defaultResult = closure_1_1.default(this, Item);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_12(this, Item, items.concat(array));
      tmp3.render = function render() { ... };
      return tmp3;
    }
  }
  closure_5.default(Item, PureComponent);
  return closure_2.default(Item);
})(getIteratorFn.PureComponent);
tmp6.propTypes = { value: emptyFunction.default.any.isRequired, label: emptyFunction.default.string.isRequired };
tmp5.Item = tmp6;
let closure_10 = get_registerCallableModule.requireNativeComponent("WheelCurvedPicker", tmp5);

export default tmp5;
