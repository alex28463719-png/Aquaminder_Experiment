// Module ID: 37
// Function ID: 331
// Name: genModule
// Dependencies: [1, 38, 20, 4, 42]

// Module 37 (genModule)
import invariant from "invariant" /* 20 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 42 */;
import module_1 from "module_1" /* 1 */;

function genModule(global, arg1) {
  closure_0 = arg1;
  if (global) {
    const defaultResult = closure_3.default(global, 5);
    const first = defaultResult[0];
    const _require = tmp4;
    dependencyMap = defaultResult[3];
    closure_3 = defaultResult[4];
    let tmp8 = !first.startsWith("RCT");
    if (tmp8) {
      tmp8 = !first.startsWith("RK");
    }
    _require(20)(tmp8, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!defaultResult[1]) {
      if (!arr) {
        obj = { name: first };
        return obj;
      }
    }
    obj = {};
    if (defaultResult[2]) {
      const item = arr.forEach((arg0, arg1) => {
        let flag = table;
        if (table) {
          flag = closure_1_9(table, arg1);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = closure_3;
        if (closure_3) {
          flag2 = closure_1_9(closure_3, arg1);
        }
        if (!flag2) {
          flag2 = false;
        }
        let tmp6 = !flag;
        if (!tmp6) {
          tmp6 = !flag2;
        }
        callback(table[2])(tmp6, "Cannot have a method that is both async and a sync hook");
        let str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        obj[arg0] = closure_1_8(closure_0, arg1, str);
      });
    }
    let _Object = Object;
    const merged = Object.assign(obj, tmp4);
    if (obj.getConstants == null) {
      obj.getConstants = () => {
        let frozen = closure_1;
        if (!closure_1) {
          const _Object = Object;
          frozen = Object.freeze({});
        }
        return frozen;
      };
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Unable to define method 'getConstants()' on NativeModule '" + first + "'. NativeModule '" + first + "' already has a constant or method called 'getConstants'. Please remove it.");
    }
    const obj1 = { name: first, module: obj };
    return obj1;
  } else {
    return null;
  }
}
function loadModule(arg0, arg1) {
  invariant(global.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
  const tmp2 = genModule(global.nativeRequireModuleConfig(arg0), arg1);
  let _module = tmp2;
  if (tmp2) {
    _module = tmp2.module;
  }
  return _module;
}
function genMethod(arg0, arg1, type) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = type;
  let tmp = type === "promise" ? (function promiseMethodWrapper() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    let error = new Error();
    return new Promise((closure_0) => {
      error = arg1;
      error(table[3]).default.enqueueNativeCall(array, error, closure_0, (arg0) => callback(arg0), (arg0) => callback2(closure_3_10(arg0, callback2)));
    });
  }) : (function nonPromiseMethodWrapper() {
    const length = arguments.length;
    const arr = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      arr[num] = arguments[num];
    }
    let tmp = null;
    if (arr.length > 0) {
      tmp = arr[arr.length - 1];
    }
    let tmp2 = null;
    if (arr.length > 1) {
      tmp2 = arr[arr.length - 2];
    }
    if (typeof tmp2 === "function") {
      callback(type[2])(tmp3, "Cannot have a non-function arg after a function arg.");
    }
    let tmp8 = null;
    if (typeof tmp === "function") {
      tmp8 = tmp;
    }
    let tmp9 = null;
    if (typeof tmp2 === "function") {
      tmp9 = tmp2;
    }
    const substr = arr.slice(0, arr.length - (tmp3 + tmp4));
    if (type === "sync") {
      const _default2 = callback(type[3]).default;
      return _default2.callNativeSyncHook(closure_0, callback, substr, tmp9, tmp8);
    } else {
      const _default = callback(type[3]).default;
      _default.enqueueNativeCall(closure_0, callback, substr, tmp9, tmp8);
    }
  });
  tmp.type = type;
  return tmp;
}
function arrayContains(arr) {
  return arr.indexOf(arg1) !== -1;
}
function updateErrorWithErrorData(arg0, arg1) {
  let obj = arg0;
  if (!arg0) {
    obj = {};
  }
  return Object.assign(arg1, obj);
}
let closure_3 = module_1(_slicedToArray);
global.__fbGenNativeModule = genModule;
let obj = {};
let nativeModuleProxy = obj;
if (global.nativeModuleProxy) {
  nativeModuleProxy = global.nativeModuleProxy;
  obj = nativeModuleProxy;
} else {
  const __fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig;
  invariant(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_5 = defineLazyObjectProperty.default;
  let item = __fbBatchedBridgeConfig.remoteModuleConfig || [].forEach((global) => {
    closure_0 = arg1;
    const tmp = genModule(global, arg1);
    closure_1 = tmp;
    if (tmp) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = {
          get() {
                return closure_1_7(name.name, closure_0);
              }
        };
        callback(nativeModuleProxy, tmp.name, obj);
      }
    }
  });
  let arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
}

export default obj;
