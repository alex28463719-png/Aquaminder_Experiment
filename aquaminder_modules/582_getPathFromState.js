// Module ID: 582
// Function ID: 6330
// Name: getPathFromState
// Dependencies: [1, 6, 38, 583, 588, 589]
// Exports: getPathFromState

// Module 582 (getPathFromState)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import encoderForArrayFormat from "encoderForArrayFormat" /* 583 */;
import getPatternParts from "getPatternParts" /* 589 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(encoderForArrayFormat);
function getActiveRoute(state) {
  if (typeof state.index === "number") {
    let tmp = state.routes[state.index];
  } else {
    tmp = state.routes[state.routes.length - 1];
  }
  if (tmp.state) {
    return getActiveRoute(tmp.state);
  } else {
    return tmp;
  }
}
let weakMap = new WeakMap();
function getNormalizedConfigs(screens) {
  if (screens != null) {
    if (screens.screens) {
      screens = undefined;
      if (screens != null) {
        screens = screens.screens;
      }
      const value = weakMap.get(screens);
      if (value) {
        return value;
      } else {
        const tmp5 = createNormalizedConfigs(screens.screens);
        const result = weakMap.set(screens.screens, tmp5);
        return tmp5;
      }
    }
  }
  return {};
}
function createConfigItem(path) {
  if (typeof path === "string") {
    const patternParts = getPatternParts.getPatternParts(path);
    let obj = {};
    if (arg1) {
      const items = [];
      obj.parts = items.concat(closure_2.default(arg1), closure_2.default(patternParts));
      return obj;
    } else {
      obj.parts = patternParts;
      return obj;
    }
  } else {
    if (path.exact) {
      if (path.path === undefined) {
        const _Error = Error;
        const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
        throw error;
      }
    }
    if (path.exact !== true) {
      const items1 = [];
      let items2 = arg1;
      if (!arg1) {
        items2 = [];
      }
      if (path.path) {
        let patternParts1 = getPatternParts.getPatternParts(path.path);
      } else {
        patternParts1 = [];
      }
      const combined = items1.concat(closure_2.default(items2), closure_2.default(patternParts1));
      const defaultResult1 = closure_2.default(items2);
    } else {
      let patternParts2;
      if (path.path) {
        patternParts2 = getPatternParts.getPatternParts(path.path);
      }
      let tmp10;
      if (path.screens) {
        tmp10 = createNormalizedConfigs(path.screens, patternParts2);
      }
      obj = { parts: patternParts2, stringify: path.stringify, screens: tmp10 };
      return obj;
    }
  }
}
function createNormalizedConfigs(arg0, arg1) {
  closure_0 = arg1;
  const entries = Object.entries(arg0);
  return Object.fromEntries(entries.map((arg0) => {
    const defaultResult = closure_1_3.default(arg0, 2);
    const items = [defaultResult[0], closure_1_8(defaultResult[1], closure_0)];
    return items;
  }));
}

export function getPathFromState(state, config) {
  const _require = state;
  if (state == null) {
    const _Error = Error;
    let _String = String;
    const _HermesInternal3 = HermesInternal;
    throw Error("Got '" + String(state) + "' for the navigation state. You must pass a valid state object.");
  } else {
    if (config) {
      _require(588).validatePathConfig(config);
    }
    dependencyMap = getNormalizedConfigs(config);
    closure_2 = "/";
    closure_3 = state;
    closure_4 = {};
    if (state) {
      do {
        let tmp5 = (function _loop() {
          let num = 0;
          if (typeof state.index === "number") {
            num = state.index;
          }
          let user = state.routes[num];
          closure_4 = user;
          const tmp4 = closure_1_5(num);
          closure_5 = tmp4;
          closure_6 = [];
          c7 = true;
          if (user.name in closure_4) {
            if (c7) {
              tmp5();
              while (user.name in closure_4) {
                let tmp10 = c7;
                if (!c7) {
                  break;
                }
              }
            }
          }
          if (closure_4[user.name] !== undefined) {
            let str = closure_2 == null;
            let joined;
            if (!str) {
              let mapped = arr.map((arg0) => {
                ({ segment, param } = arg0);
                if (segment === "*") {
                  return user.name;
                } else if (param) {
                  if (table[param] === undefined) {
                    if (tmp) {
                      return "";
                    }
                  }
                  const _String = String;
                  return String(table[param]).replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]/g, (arg0) => encodeURIComponent(arg0));
                } else {
                  const _encodeURIComponent = encodeURIComponent;
                  return encodeURIComponent(segment);
                }
              });
              str = "/";
              joined = mapped.join("/");
            }
            closure_2 = closure_2 + joined;
            arr = closure_2;
            const tmp14 = closure_2;
          } else {
            str = encodeURIComponent;
            closure_2 = closure_2 + encodeURIComponent(user.name);
          }
          if (!state) {
            if (tmp4.params) {
              let _Object = Object;
              let _Object2 = Object;
              let entries = Object.entries(tmp4.params);
              state = Object.fromEntries(entries.map((arg0) => {
                const defaultResult = state.default(arg0, 2);
                const items = [defaultResult[0], String(defaultResult[1])];
                return items;
              }));
            }
          }
          if (user.state) {
            closure_2 = `${closure_2}/`;
          } else if (state) {
            for (const key10067 in state) {
              let tmp27 = key10067;
              let tmp28 = state;
              if (state[key10067] !== "undefined") {
                continue;
              } else {
                let tmp20 = state;
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            const obj = { sort: false };
            const json = closure_4.stringify(state, obj);
            if (json) {
              const _HermesInternal = HermesInternal;
              closure_2 = closure_2 + "?" + json;
            }
          }
          state = user.state;
        })();
        let tmp6 = closure_3;
      } while (closure_3);
    }
    if (config != null) {
      if (config.path) {
        let _HermesInternal = HermesInternal;
        closure_2 = "" + config.path + "/" + closure_2;
      }
    }
    const replaced = closure_2.replace(/\/+/g, "/");
    closure_2 = replaced;
    if (replaced.length > 1) {
      let replaced1 = closure_2.replace(/\/$/, "");
    } else {
      replaced1 = closure_2;
    }
    closure_2 = replaced1;
    if (!replaced1.startsWith("/")) {
      const _HermesInternal2 = HermesInternal;
      closure_2 = "/" + closure_2;
    }
    return closure_2;
  }
}
