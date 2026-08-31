// Module ID: 49
// Function ID: 412
// Name: _getConstants
// Dependencies: [1, 50, 45, 42, 37, 52]

// Module 49 (_getConstants)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 42 */;
import nullthrows from "nullthrows" /* 45 */;
import UIManager2 from "UIManager" /* 50 */;
import module_1 from "module_1" /* 1 */;

function _getConstants() {
  if (!c8) {
    const constants = UIManager.default.getConstants();
    c8 = true;
    const _default = UIManager.default;
  }
  return constants;
}
function _getViewManagerConfig(arg0) {
  if (dependencyMap[arg0] === undefined) {
    if (UIManager.default.getConstantsForViewManager) {
      try {
        dependencyMap[arg0] = UIManager.default.getConstantsForViewManager(arg0);
        const _default = UIManager.default;
      } catch (tmp6) {
        const _console = console;
        console.error("NativeUIManager.getConstantsForViewManager('" + tmp + "') threw an exception.", tmp6);
        dependencyMap[tmp] = null;
      }
    }
  }
  if (dependencyMap[arg0]) {
    return tmp12;
  } else if (global.nativeCallSyncHook) {
    if (UIManager.default.lazilyLoadView) {
      if (!set.has(arg0)) {
        const tmp20 = closure_4.default(UIManager.default.lazilyLoadView)(arg0);
        set.add(arg0);
        if (tmp20 != null) {
          if (tmp20.viewConfig != null) {
            _getConstants()[arg0] = tmp20.viewConfig;
            lazifyViewManagerConfig(arg0);
          }
        }
      }
    }
    return dependencyMap[arg0];
  } else {
    return tmp12;
  }
}
function lazifyViewManagerConfig(arg0) {
  let tmp = _getConstants()[arg0];
  closure_0 = tmp;
  closure_5[arg0] = tmp;
  if (tmp.Manager) {
    let obj = defineLazyObjectProperty;
    obj = {
      get() {
          const tmp = closure_1_1(closure_1_2[4]).default[closure_0.Manager];
          closure_0 = tmp;
          const obj = {};
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const item = keys.forEach((arg0) => {
              if (typeof table[arg0] !== "function") {
                obj[arg0] = tmp;
              }
            });
          }
          return obj;
        }
    };
    obj.default(tmp, "Constants", obj);
    obj = {
      get() {
          const tmp = closure_1_1(closure_1_2[4]).default[closure_0.Manager];
          closure_0 = tmp;
          const obj = {};
          c2 = 0;
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const item = keys.forEach((arg0) => {
              if (typeof table[arg0] === "function") {
                closure_2 = tmp3 + 1;
                obj[arg0] = +closure_2;
              }
            });
          }
          return obj;
        }
    };
    defineLazyObjectProperty.default(tmp, "Commands", obj);
    const obj3 = defineLazyObjectProperty;
  }
}
const UIManager = module_1(UIManager2);
let closure_4 = module_1(nullthrows);
let closure_5 = {};
const set = new Set();
let closure_7 = {};
let c8 = false;
const merged = Object.assign({}, UIManager.default, {
  createView(arg0, arg1, arg2, arg3) {
    const view = UIManager.default.createView(arg0, arg1, arg2, arg3);
  },
  getConstants() {
    return _getConstants();
  },
  getViewManagerConfig(arg0) {
    return _getViewManagerConfig(arg0);
  },
  hasViewManagerConfig(arg0) {
    return _getViewManagerConfig(arg0) != null;
  }
});
UIManager.default.getViewManagerConfig = merged.getViewManagerConfig;
if (_getConstants().ViewManagerNames) {
  const ViewManagerNames = UIManager.default.getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((arg0) => {
    closure_0 = arg0;
    let obj = defineLazyObjectProperty;
    obj = {
      get() {
        return closure_1_4.default(closure_1_3.default.getConstantsForViewManager)(closure_0);
      }
    };
    obj.default(UIManager.default, arg0, obj);
  });
  let _default = UIManager.default;
}
if (!global.nativeCallSyncHook) {
  let _Object = Object;
  let keys = Object.keys(_getConstants());
  const item1 = keys.forEach((name) => {
    closure_0 = name;
    if (!_default.includes(name)) {
      if (!dependencyMap[name]) {
        dependencyMap[name] = _getConstants()[name];
      }
      let obj = defineLazyObjectProperty;
      obj = {
        get() {
            const combined = "Accessing view manager configs directly off UIManager via UIManager['" + closure_0 + "'] ";
            console.warn(combined + "is no longer supported. Use UIManager.getViewManagerConfig('" + closure_0 + "') instead.");
            return closure_1_9.getViewManagerConfig(closure_0);
          }
      };
      obj.default(UIManager.default, name, obj);
    }
  });
}

export default merged;
