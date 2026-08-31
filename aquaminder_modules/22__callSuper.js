// Module ID: 22
// Function ID: 270
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 30, 17]

// Module 22 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import allocate from "allocate" /* 30 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_4.default(arg0, constructResult);
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
  const defaultResult = closure_6.default(closure_5.default(prototype), "emit", arg2);
  dependencyMap = defaultResult;
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_get);
let closure_7 = module_1(_inherits);
let tmp3 = ((arg0) => {
  class RCTDeviceEventEmitterImpl {
    constructor() {
      defaultResult = closure_1_2.default(this, RCTDeviceEventEmitterImpl);
      return closure_1_8(this, RCTDeviceEventEmitterImpl, arguments);
    }
  }
  closure_7.default(RCTDeviceEventEmitterImpl, arg0);
  let items = [
    {
      key: "emit",
      value: function emit(arg0) {
        closure_0 = arg0;
        RCTDeviceEventEmitterImpl(closure_1_1[8]).beginEvent(() => "RCTDeviceEventEmitter.emit#" + closure_0);
        const length = arguments.length;
        let num = 0;
        if (length > 1) {
          num = length - 1;
        }
        const array = new Array(num);
        for (let num2 = 1; num2 < length; num2 = num2 + 1) {
          array[num2 - 1] = arguments[num2];
        }
        const items = [arg0];
        closure_1_10(closure_0, "emit", this, 3)(items.concat(array));
        RCTDeviceEventEmitterImpl(closure_1_1[8]).endEvent();
      }
    }
  ];
  return closure_3.default(RCTDeviceEventEmitterImpl, items);
})(module_1(allocate).default);
tmp3 = new tmp3();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp3 });

export default tmp3;
