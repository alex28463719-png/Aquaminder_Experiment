// Module ID: 687
// Function ID: 7864
// Name: _callSuper
// Dependencies: [1, 203, 12, 13, 23, 25, 28, 119, 2, 685, 251]

// Module 687 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import get_registerCallableModule from "get registerCallableModule" /* 685 */;
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
let closure_7 = module_1(get_registerCallableModule);
let closure_9 = ["children", "start", "end", "colors", "locations", "useAngle", "angleCenter", "angle", "style"];
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
      return closure_1_12(this, LinearGradient, arguments);
    }
  }
  closure_5.default(LinearGradient, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const gradientRef = this.gradientRef;
      gradientRef.setNativeProps(arg0);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ colors, locations } = props);
      ({ children, start, end, useAngle, angleCenter, angle, style } = props);
      if (colors) {
        if (locations) {
          if (colors.length !== locations.length) {
            const _console = console;
            console.warn("LinearGradient colors and locations props should be arrays of the same length");
          }
        }
      }
      let obj = {
        ref(gradientRef) {
          self.gradientRef = gradientRef;
        }
      };
      obj = { style };
      obj = { style: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, colors: colors.map(closure_1_6.processColor), startPoint: closure_1_10("start", start), endPoint: closure_1_10("end", end) };
      let substr = null;
      if (locations) {
        substr = locations.slice(0, colors.length);
      }
      obj.locations = substr;
      obj.useAngle = useAngle;
      obj.angleCenter = closure_1_10("angleCenter", angleCenter);
      obj.angle = angle;
      const items = [<closure_1_7.default style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }} colors={colors.map(closure_1_6.processColor)} startPoint={closure_1_10("start", start)} endPoint={closure_1_10("end", end)} />, children];
      obj.children = items;
      return <closure_1_6.View {...Object.assign(obj, LinearGradient.default(props, closure_1_9), obj)} />;
    }
  };
  items[1] = obj;
  return closure_2.default(LinearGradient, items);
})(getIteratorFn.Component);
tmp4.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default tmp4;
