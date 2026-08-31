// Module ID: 985
// Function ID: 10506
// Name: _callSuper
// Dependencies: [1, 6, 12, 13, 23, 25, 28, 119, 986, 965, 971, 979]

// Module 985 (_callSuper)
import _toConsumableArray2 from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _callSuper2 from "_callSuper" /* 965 */;
import _mod979 from "module_979" /* 979 */;
import PlatformConstants2 from "PlatformConstants" /* 986 */;
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
const _toConsumableArray = module_1(_toConsumableArray2);
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
const getIteratorFn = module_1(getIteratorFn2);
const PlatformConstants = module_1(PlatformConstants2);
let items = ["minForce", "maxForce", "feedbackOnActivation"];
_callSuper = module_1(_callSuper2);
const tmp5 = ((Component) => {
  class ForceTouchFallback {
    constructor() {
      defaultResult = closure_1_2.default(this, ForceTouchFallback);
      return closure_1_7(this, ForceTouchFallback, arguments);
    }
  }
  closure_6.default(ForceTouchFallback, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.warn(ForceTouchFallback(closure_1_1[10]).tagMessage("ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase"));
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  };
  items[1] = obj;
  return closure_3.default(ForceTouchFallback, items);
})(getIteratorFn.default.Component);
tmp5.forceTouchAvailable = false;
let defaultResult = tmp5;
if (PlatformConstants.default != null) {
  defaultResult = tmp5;
  if (PlatformConstants.default.forceTouchAvailable) {
    let obj = { name: "ForceTouchGestureHandler" };
    const items1 = [];
    obj.allowedProps = items1.concat(_toConsumableArray.default(_mod979.baseGestureHandlerProps), items);
    obj.config = {};
    defaultResult = _callSuper.default(obj);
  }
}
let flag;
if (PlatformConstants.default != null) {
  flag = PlatformConstants.default.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
defaultResult.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = defaultResult;
