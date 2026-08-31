// Module ID: 241
// Function ID: 2611
// Name: _callSuper
// Dependencies: [1, 13, 12, 23, 25, 28, 160]

// Module 241 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 160 */;
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
  class HeadlessJsTaskError {
    constructor() {
      defaultResult = closure_1_1.default(this, HeadlessJsTaskError);
      return closure_1_5(this, HeadlessJsTaskError, arguments);
    }
  }
  closure_4.default(HeadlessJsTaskError, arg0);
  return HeadlessJsTaskError.default(HeadlessJsTaskError);
})(module_1(_wrapNativeSuper).default(Error));
