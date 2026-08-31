// Module ID: 684
// Function ID: 7837
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 2, 685, 251]

// Module 684 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import get_registerCallableModule from "get registerCallableModule" /* 685 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "get registerCallableModule" /* 2 */;
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
let closure_8 = module_1(get_registerCallableModule);
let closure_10 = ["start", "end", "colors", "locations", "useAngle", "angleCenter", "angle"];
function convertPoint(arg0, arg1) {
  if (Array.isArray(arg1)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn(`${"LinearGradient '" + arg0 + "' property should be an object with fields 'x' and 'y', "}Array type is deprecated.`);
    const obj = { x: arg1[0], y: arg1[1] };
    return obj;
  } else {
    return arg1;
  }
}
const tmp4 = ((Component) => {
  class LinearGradient {
    constructor() {
      defaultResult = closure_1_1.default(this, LinearGradient);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_13(this, LinearGradient, items.concat(array));
      tmp3.gradientRef = closure_1_6.createRef();
      return tmp3;
    }
  }
  closure_5.default(LinearGradient, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const current = this.gradientRef.current;
      current.setNativeProps(arg0);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ colors, locations } = props);
      ({ start, end, useAngle, angleCenter, angle } = props);
      if (colors) {
        if (locations) {
          if (colors.length !== locations.length) {
            const _console = console;
            console.warn("LinearGradient colors and locations props should be arrays of the same length");
          }
        }
      }
      let obj = { ref: this.gradientRef };
      obj = { startPoint: closure_1_11("start", start), endPoint: closure_1_11("end", end), colors: colors.map(closure_1_7.processColor) };
      let substr = null;
      if (locations) {
        substr = locations.slice(0, colors.length);
      }
      obj.locations = substr;
      obj.useAngle = useAngle;
      obj.angleCenter = closure_1_11("angleCenter", angleCenter);
      obj.angle = angle;
      return <closure_1_8.default {...Object.assign(obj, LinearGradient.default(props, closure_1_10), obj)} />;
    }
  };
  items[1] = obj;
  return closure_2.default(LinearGradient, items);
})(getIteratorFn.Component);
tmp4.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default tmp4;
