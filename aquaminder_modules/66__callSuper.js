// Module ID: 66
// Function ID: 950
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 67]

// Module 66 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import castToNumber from "castToNumber" /* 67 */;
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
  class DOMRect {
    constructor() {
      defaultResult = DOMRect.default(this, DOMRect);
      return closure_1_5(this, DOMRect, arguments);
    }
  }
  closure_4.default(DOMRect, arg0);
  let obj = {
    key: "x",
    get() {
      return this.__getInternalX();
    },
    set(arg0) {
      this.__setInternalX(arg0);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "y",
    get() {
      return this.__getInternalY();
    },
    set(arg0) {
      this.__setInternalY(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "width",
    get() {
      return this.__getInternalWidth();
    },
    set(arg0) {
      this.__setInternalWidth(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "height",
    get() {
      return this.__getInternalHeight();
    },
    set(arg0) {
      this.__setInternalHeight(arg0);
    }
  };
  const items1 = [
    {
      key: "fromRect",
      value: function fromRect(arg0) {
        let tmp = DOMRect;
        if (arg0) {
          const prototype2 = tmp.prototype;
          tmp = new tmp(arg0.x, arg0.y, arg0.width, arg0.height);
          return tmp;
        } else {
          const prototype = tmp.prototype;
          tmp = new tmp();
          return tmp;
        }
      }
    }
  ];
  return closure_1.default(DOMRect, items, items1);
})(module_1(castToNumber).default);
