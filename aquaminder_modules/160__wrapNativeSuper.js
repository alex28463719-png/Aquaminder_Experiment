// Module ID: 160
// Function ID: 1735
// Name: _wrapNativeSuper
// Dependencies: [161, 162, 25, 29]

// Module 160 (_wrapNativeSuper)
function _wrapNativeSuper(arg0) {
  let map;
  if ("function" === typeof Map) {
    const _Map = Map;
    map = new Map();
  }
  _wrapNativeSuper = function _wrapNativeSuper(arg0) {
    closure_0 = arg0;
    class Wrapper {
      constructor() {
        tmp = closure_0(closure_2_2[1]);
        return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
      }
    }
    if (null !== arg0) {
      class Wrapper {
        constructor() {
          tmp = closure_0(closure_2_2[1]);
          return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
        }
      }
      if (map(closure_1_2[0])(arg0)) {
        if ("function" !== typeof arg0) {
          const _TypeError = TypeError;
          class Wrapper {
            constructor() {
              tmp = closure_0(closure_2_2[1]);
              return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
            }
          }
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          if (undefined !== closure_0) {
            class Wrapper {
              constructor() {
                tmp = closure_0(closure_2_2[1]);
                return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
              }
            }
          }
          class Wrapper {
            constructor() {
              tmp = closure_0(closure_2_2[1]);
              return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
            }
          }
          const _Object = Object;
          let obj = {};
          obj = { value: Wrapper, enumerable: false, writable: true, configurable: true };
          obj.constructor = obj;
          Wrapper.prototype = Object.create(arg0.prototype, obj);
          return map(closure_1_2[3])(Wrapper, arg0);
        }
      }
    }
    return arg0;
  };
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(arg0);
}

export default _wrapNativeSuper;
