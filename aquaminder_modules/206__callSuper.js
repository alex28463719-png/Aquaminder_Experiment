// Module ID: 206
// Function ID: 2324
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 175]

// Module 206 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import Event from "Event" /* 175 */;
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
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_inherits);

export default ((arg0) => {
  class CloseEvent {
    constructor(arg0, arg1) {
      defaultResult = CloseEvent.default(this, CloseEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      tmp2 = closure_1_5(this, CloseEvent, items);
      wasClean = undefined;
      if (arg1 != null) {
        wasClean = arg1.wasClean;
      }
      tmp2._wasClean = Boolean(wasClean);
      code = undefined;
      if (arg1 != null) {
        code = arg1.code;
      }
      tmp5 = Number(code) || 0;
      tmp2._code = tmp5;
      reason = undefined;
      if (arg1 != null) {
        reason = arg1.reason;
      }
      str = "";
      if (reason != null) {
        _String = String;
        str = String(arg1.reason);
      }
      tmp2._reason = str;
      return tmp2;
    }
  }
  closure_4.default(CloseEvent, arg0);
  let obj = {
    key: "wasClean",
    get() {
      return this._wasClean;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "code",
    get() {
      return this._code;
    }
  };
  items[1] = obj;
  obj = {
    key: "reason",
    get() {
      return this._reason;
    }
  };
  items[2] = obj;
  return closure_1.default(CloseEvent, items);
})(module_1(Event).default);
