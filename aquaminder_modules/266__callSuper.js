// Module ID: 266
// Function ID: 2714
// Name: _callSuper
// Dependencies: [1, 13, 12, 23, 25, 28, 267]

// Module 266 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import EventPolyfill from "EventPolyfill" /* 267 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_3.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_3.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
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
let closure_0 = module_1(_defineProperties);
let closure_1 = module_1(_classCallCheck);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);

export default ((arg0) => {
  class CustomEvent {
    constructor(arg0, arg1) {
      defaultResult = closure_1_1.default(this, CustomEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = { bubbles: arg1.bubbles, cancelable: arg1.cancelable, composed: arg1.composed };
      tmp2 = closure_1_5(this, CustomEvent, items);
      tmp2.detail = arg1.detail;
      return tmp2;
    }
  }
  closure_4.default(CustomEvent, arg0);
  return CustomEvent.default(CustomEvent);
})(module_1(EventPolyfill).default);
