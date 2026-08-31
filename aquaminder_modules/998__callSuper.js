// Module ID: 998
// Function ID: 10682
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 989]

// Module 998 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import _callSuper2 from "_callSuper" /* 989 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_2.default(arg0, constructResult);
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_4.default(closure_3.default(prototype), "onChange", arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function changeEventCalculator(arg0, arg1) {
  if (arg1 === undefined) {
    let obj = {};
    ({ x: obj2.changeX, y: obj2.changeY } = arg0);
  } else {
    obj = { changeX: arg0.x - arg1.x, changeY: arg0.y - arg1.y };
  }
  return Object.assign({}, arg0, obj);
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);

export const HoverEffect = { NONE: 0, [0]: "NONE", LIFT: 1, [1]: "LIFT", HIGHLIGHT: 2, [2]: "HIGHLIGHT" };
export const hoverGestureHandlerProps = ["hoverEffect"];
export const HoverGesture = ((ContinousBaseGesture) => {
  class HoverGesture {
    constructor() {
      defaultResult = HoverGesture.default(this, HoverGesture);
      tmp2 = closure_1_6(this, HoverGesture);
      tmp2.config = {};
      tmp2.handlerName = "HoverGestureHandler";
      return tmp2;
    }
  }
  closure_5.default(HoverGesture, ContinousBaseGesture);
  let obj = {
    key: "effect",
    value: function effect(hoverEffect) {
      this.config.hoverEffect = hoverEffect;
      return this;
    }
  };
  let items = [obj, ];
  obj = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = closure_1_9;
      const items = [arg0];
      return closure_1_8(HoverGesture, "onChange", this, 3)(items);
    }
  };
  items[1] = obj;
  return closure_1.default(HoverGesture, items);
})(_callSuper2.ContinousBaseGesture);
