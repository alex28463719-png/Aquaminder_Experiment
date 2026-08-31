// Module ID: 159
// Function ID: 1721
// Name: _callSuper
// Dependencies: [1, 13, 12, 23, 25, 28, 160, 164, 167, 19]

// Module 159 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import createStringifySafeWithLimits from "createStringifySafeWithLimits" /* 19 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 160 */;
import convertHermesStack from "convertHermesStack" /* 164 */;
import ExceptionsManager from "ExceptionsManager" /* 167 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const defaultResult = closure_6.default(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(defaultResult, items, closure_6.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, items);
  }
  return closure_5.default(arg0, constructResult);
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
function preprocessException(arg0) {
  if (callback) {
    if (!c10) {
      c10 = true;
      try {
        c10 = false;
        return callback(arg0);
      } catch (tmp4) {
        c10 = false;
        throw tmp4;
      }
    }
  }
  return arg0;
}
function reportException(jsEngine, isFatal) {
  let stack;
  if (jsEngine != null) {
    stack = jsEngine.stack;
  }
  const sum = c12 + 1;
  c12 = sum;
  let str = jsEngine.message;
  if (!str) {
    str = "";
  }
  let sum1 = str;
  if (jsEngine.componentStack != null) {
    const _HermesInternal = HermesInternal;
    sum1 = str + "\n\nThis error is located at:" + jsEngine.componentStack;
  }
  let str3 = "";
  if (jsEngine.name != null) {
    str3 = "";
    if (jsEngine.name !== "") {
      const _HermesInternal2 = HermesInternal;
      str3 = "" + jsEngine.name + ": ";
    }
  }
  let sum2 = sum1;
  if (!sum1.startsWith(str3)) {
    sum2 = str3 + sum1;
  }
  let combined = sum2;
  if (jsEngine.jsEngine != null) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + sum2 + ", js engine: " + jsEngine.jsEngine;
  }
  let obj = { jsEngine: jsEngine.jsEngine, rawStack: jsEngine.stack };
  const merged = Object.assign({}, jsEngine[RN$ErrorExtraDataKey], obj);
  if (jsEngine.cause != null) {
    if (typeof jsEngine.cause === "object") {
      merged.stackSymbols = jsEngine.cause.stackSymbols;
      merged.stackReturnAddresses = jsEngine.cause.stackReturnAddresses;
      merged.stackElements = jsEngine.cause.stackElements;
    }
  }
  obj = { message: combined };
  let tmp11 = null;
  if (combined !== str) {
    tmp11 = str;
  }
  obj.originalMessage = tmp11;
  let name = null;
  if (jsEngine.name != null) {
    name = null;
    if (jsEngine.name !== "") {
      name = jsEngine.name;
    }
  }
  obj.name = name;
  let componentStack = null;
  if (typeof jsEngine.componentStack === "string") {
    componentStack = jsEngine.componentStack;
  }
  obj.componentStack = componentStack;
  obj.stack = convertHermesStack.default(stack);
  obj.id = sum;
  obj.isFatal = isFatal;
  obj.extraData = merged;
  const tmp10Result = preprocessException(obj);
  if (arg2) {
    const _console = console;
    console.error(tmp10Result.message);
  }
  if (isFatal) {
    const _default = ExceptionsManager.default;
    if (_default) {
      if (isFatal) {
        if (global.RN$notifyOfFatalException != null) {
          const result = global.RN$notifyOfFatalException();
        }
      }
      _default.reportException(tmp10Result);
    }
  }
}
function reactConsoleErrorHandler() {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  _errorOriginal.apply(console, arr);
  if (console.reportErrorsAsExceptions) {
    if (!c13) {
      const first = arr[0];
      if (first == null) {
        const _global = createStringifySafeWithLimits.default;
        const mapped = arr.map((str) => {
          let tmp = str;
          if (typeof str !== "string") {
            tmp = callback(str);
          }
          return tmp;
        });
        const prototype = ctor.prototype;
        const tmp12 = new ctor(mapped.join(" "));
        tmp12.name = "console.error";
        let tmp6 = tmp12;
      } else {
        tmp6 = first;
      }
      if (!_global.RN$handleException) {
        reportException(tmp6, false, false);
      }
    }
  }
}
let closure_3 = module_1(_defineProperties);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_possibleConstructorReturn);
let closure_6 = module_1(_getPrototypeOf);
let closure_7 = module_1(_inherits);
let tmp3 = ((arg0) => {
  class SyntheticError {
    constructor() {
      defaultResult = closure_1_4.default(this, SyntheticError);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_1_14(this, SyntheticError, items.concat(array));
      tmp3.name = "";
      return tmp3;
    }
  }
  closure_7.default(SyntheticError, arg0);
  return closure_3.default(SyntheticError);
})(module_1(_wrapNativeSuper).default(Error));
let closure_8 = tmp3;
let c10 = false;
const RN$ErrorExtraDataKey = "RN$ErrorExtraDataKey";
let c12 = 0;
let c13 = false;

export const SyntheticError = tmp3;
export default {
  decoratedExtraDataKey: "RN$ErrorExtraDataKey",
  handleException(extendedError, arg1) {
    let flag = true;
    let flag2 = true;
    if (extendedError instanceof Error) {
      let tmp8 = extendedError;
    } else {
      const prototype = ctor.prototype;
      tmp8 = new ctor(extendedError);
    }
    try {
      c13 = flag;
      flag = reportException;
      flag2 = reportException(tmp8, arg1, flag2);
    } catch (tmp9) {
      c13 = false;
      throw tmp9;
    }
  },
  installConsoleErrorReporter() {
    if (!console._errorOriginal) {
      const _console = console;
      const _console2 = console;
      const _console3 = console;
      console._errorOriginal = error.bind(console);
      const _console4 = console;
      console.error = reactConsoleErrorHandler;
      const _console5 = console;
      if (console.reportErrorsAsExceptions === undefined) {
        const _console6 = console;
        console.reportErrorsAsExceptions = true;
      }
    }
  },
  SyntheticError: tmp3,
  unstable_setExceptionDecorator(arg0) {
    closure_9 = arg0;
  }
};
