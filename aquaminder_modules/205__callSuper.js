// Module ID: 205
// Function ID: 2314
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 175]

// Module 205 (_callSuper)
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
  class MessageEvent {
    constructor(arg0, arg1) {
      defaultResult = MessageEvent.default(this, MessageEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      tmp2 = closure_1_5(this, MessageEvent, items);
      data = undefined;
      if (arg1 != null) {
        data = arg1.data;
      }
      tmp2._data = data;
      origin = undefined;
      if (arg1 != null) {
        origin = arg1.origin;
      }
      str = "";
      str2 = "";
      if (origin != null) {
        str2 = origin;
      }
      tmp2._origin = String(str2);
      lastEventId = undefined;
      if (arg1 != null) {
        lastEventId = arg1.lastEventId;
      }
      if (lastEventId != null) {
        str = lastEventId;
      }
      tmp2._lastEventId = String(str);
      return tmp2;
    }
  }
  closure_4.default(MessageEvent, arg0);
  let obj = {
    key: "data",
    get() {
      return this._data;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "origin",
    get() {
      return this._origin;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastEventId",
    get() {
      return this._lastEventId;
    }
  };
  items[2] = obj;
  return closure_1.default(MessageEvent, items);
})(module_1(Event).default);
