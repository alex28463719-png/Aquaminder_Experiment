// Module ID: 995
// Function ID: 10648
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 989]

// Module 995 (_callSuper)
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
function changeEventCalculator(force, force2) {
  if (force2 === undefined) {
    let obj = { forceChange: force.force };
  } else {
    obj = { forceChange: force.force - force2.force };
  }
  return Object.assign({}, force, obj);
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);

export const ForceTouchGesture = ((ContinousBaseGesture) => {
  class ForceTouchGesture {
    constructor() {
      defaultResult = ForceTouchGesture.default(this, ForceTouchGesture);
      tmp2 = closure_1_6(this, ForceTouchGesture);
      tmp2.config = {};
      tmp2.handlerName = "ForceTouchGestureHandler";
      return tmp2;
    }
  }
  closure_5.default(ForceTouchGesture, ContinousBaseGesture);
  let obj = {
    key: "minForce",
    value: function minForce(minForce) {
      this.config.minForce = minForce;
      return this;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "maxForce",
    value: function maxForce(maxForce) {
      this.config.maxForce = maxForce;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "feedbackOnActivation",
    value: function feedbackOnActivation(feedbackOnActivation) {
      this.config.feedbackOnActivation = feedbackOnActivation;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = closure_1_9;
      const items = [arg0];
      return closure_1_8(ForceTouchGesture, "onChange", this, 3)(items);
    }
  };
  return closure_1.default(ForceTouchGesture, items);
})(_callSuper2.ContinousBaseGesture);
