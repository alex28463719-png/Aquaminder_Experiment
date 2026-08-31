// Module ID: 353
// Function ID: 4406
// Name: _callSuper
// Dependencies: [1, 12, 13, 23, 25, 26, 28, 20, 119]

// Module 353 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _get from "_get" /* 26 */;
import _inherits from "_inherits" /* 28 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
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
function _superPropGet(arg0, arg1, arg2, arg3) {
  closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const defaultResult = closure_4.default(closure_3.default(prototype), "setState", arg2);
  let fn = defaultResult;
  if (2) {
    fn = defaultResult;
    if ("function" === typeof defaultResult) {
      fn = (arg0) => defaultResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
let closure_0 = module_1(_classCallCheck);
let closure_1 = module_1(_defineProperties);
let closure_2 = module_1(_possibleConstructorReturn);
let closure_3 = module_1(_getPrototypeOf);
let closure_4 = module_1(_get);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(invariant);

export default ((PureComponent) => {
  class StateSafePureComponent {
    constructor(arg0) {
      defaultResult = StateSafePureComponent.default(this, StateSafePureComponent);
      items = [];
      items[0] = PureComponent;
      obj = closure_1_8(this, StateSafePureComponent, items);
      obj._inAsyncStateUpdate = false;
      result = obj._installSetStateHooks();
      return obj;
    }
  }
  closure_5.default(StateSafePureComponent, PureComponent);
  let obj = {
    key: "setState",
    value: function setState(fn) {
      let self = this;
      closure_0 = fn;
      self = this;
      if (typeof fn === "function") {
        const items = [
          (arg0, arg1) => {
              self._inAsyncStateUpdate = true;
              try {
                self._inAsyncStateUpdate = false;
                return callback(arg0, arg1);
              } catch (tmp3) {
                self._inAsyncStateUpdate = false;
                throw tmp3;
              }
            },
          arg1
        ];
        closure_1_10(closure_0, "setState", self, 3)(items);
      } else {
        const items1 = [fn, arg1];
        closure_1_10(closure_0, "setState", self, 3)(items1);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      const self = this;
      ({ props: closure_1, state: closure_2 } = this);
      let obj = {
        get() {
          closure_2_6.default(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return closure_1;
        },
        set(arg0) {
          closure_1 = arg0;
        }
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          closure_2_6.default(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return closure_2;
        },
        set(arg0) {
          closure_2 = arg0;
        }
      };
      Object.defineProperty(this, "state", obj);
    }
  };
  items[1] = obj;
  return closure_1.default(StateSafePureComponent, items);
})(_interopRequireWildcard(getIteratorFn).PureComponent);
