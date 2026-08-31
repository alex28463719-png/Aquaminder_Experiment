// Module ID: 179
// Function ID: 1981
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 175]

// Module 179 (_callSuper)
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
  class ProgressEvent {
    constructor(arg0, arg1) {
      defaultResult = ProgressEvent.default(this, ProgressEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      tmp2 = closure_1_5(this, ProgressEvent, items);
      lengthComputable = undefined;
      if (arg1 != null) {
        lengthComputable = arg1.lengthComputable;
      }
      tmp2._lengthComputable = Boolean(lengthComputable);
      loaded = undefined;
      if (arg1 != null) {
        loaded = arg1.loaded;
      }
      tmp5 = Number(loaded) || 0;
      tmp2._loaded = tmp5;
      total = undefined;
      if (arg1 != null) {
        total = arg1.total;
      }
      tmp7 = Number(total) || 0;
      tmp2._total = tmp7;
      return tmp2;
    }
  }
  closure_4.default(ProgressEvent, arg0);
  let obj = {
    key: "lengthComputable",
    get() {
      return this._lengthComputable;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "loaded",
    get() {
      return this._loaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "total",
    get() {
      return this._total;
    }
  };
  items[2] = obj;
  return closure_1.default(ProgressEvent, items);
})(module_1(Event).default);
