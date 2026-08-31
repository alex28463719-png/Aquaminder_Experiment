// Module ID: 131
// Function ID: 1485
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 28, 130, 72]

// Module 131 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getChildNodes from "getChildNodes" /* 72 */;
import _callSuper2 from "_callSuper" /* 130 */;
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
_callSuper = module_1(_callSuper2);
let closure_5 = module_1(getChildNodes);

export default ((arg0) => {
  class ReadOnlyText {
    constructor() {
      defaultResult = ReadOnlyText.default(this, ReadOnlyText);
      return closure_1_6(this, ReadOnlyText, arguments);
    }
  }
  closure_4.default(ReadOnlyText, arg0);
  let obj = {
    key: "nodeName",
    get() {
      return "#text";
    }
  };
  const items = [obj, ];
  obj = {
    key: "nodeType",
    get() {
      return closure_1_5.default.TEXT_NODE;
    }
  };
  items[1] = obj;
  return closure_1.default(ReadOnlyText, items);
})(_callSuper.default);
