// Module ID: 1018
// Function ID: 10797
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 119, 971, 1005]

// Module 1018 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import Reanimated from "Reanimated" /* 1005 */;
import module_1 from "module_1" /* 1 */;

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
const getIteratorFn = module_1(getIteratorFn2);
let tmp4 = ((Component) => {
  class Wrap {
    constructor() {
      defaultResult = closure_1_2.default(this, Wrap);
      return closure_1_8(this, Wrap, arguments);
    }
  }
  closure_6.default(Wrap, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        try {
          const Children = closure_1_7.default.Children;
          const self = this;
          const onlyResult = Children.only(this.props.children);
          const obj = { collapsable: false };
          return closure_1_7.default.cloneElement(onlyResult, obj, onlyResult.props.children);
        } catch (err) {
          const _Error = Error;
          const error = new Error(Wrap(closure_1_1[7]).tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
          throw error;
        }
      }
    }
  ];
  return closure_3.default(Wrap, items);
})(getIteratorFn.default.Component);
let animatedComponent;
if (Reanimated.Reanimated != null) {
  const _default = Reanimated.Reanimated.default;
  if (_default != null) {
    animatedComponent = _default.createAnimatedComponent(tmp4);
  }
}
if (animatedComponent != null) {
  tmp4 = animatedComponent;
}

export const Wrap = tmp4;
export const AnimatedWrap = tmp4;
