// Module ID: 994
// Function ID: 10638
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 989]

// Module 994 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
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
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);

export const LongPressGesture = ((BaseGesture) => {
  class LongPressGesture {
    constructor() {
      defaultResult = LongPressGesture.default(this, LongPressGesture);
      obj = closure_1_5(this, LongPressGesture);
      obj.config = {};
      obj.handlerName = "LongPressGestureHandler";
      result = obj.shouldCancelWhenOutside(true);
      return obj;
    }
  }
  closure_4.default(LongPressGesture, BaseGesture);
  let obj = {
    key: "minDuration",
    value: function minDuration(INT32_MAX) {
      this.config.minDurationMs = INT32_MAX;
      return this;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  };
  items[2] = obj;
  return closure_1.default(LongPressGesture, items);
})(_callSuper2.BaseGesture);
