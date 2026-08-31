// Module ID: 660
// Function ID: 7179
// Dependencies: [1, 38, 661, 663]

// Module 660
import _slicedToArray from "_slicedToArray" /* 38 */;
import get_registerCallableModule from "get registerCallableModule" /* 661 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_slicedToArray);
get_registerCallableModule = module_1(get_registerCallableModule);
if (get_registerCallableModule.default) {
  const tmp8 = (() => {
    closure_0 = [];
    closure_1 = [];
    c2 = null;
    return {
      getItem(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        return new Promise((closure_0) => {
          const callback = closure_0;
          const table = arg1;
          callback(table[3]).checkValidInput(callback);
          const items = [callback];
          closure_2_3.default.multiGet(items, (arg0, arg1) => {
            let tmp = null;
            if (arg1 != null) {
              const first = arg1[0];
              tmp = null;
              if (first != null) {
                tmp = null;
                if (first[1]) {
                  tmp = arg1[0][1];
                }
              }
            }
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (dependencyMap != null) {
              let first1;
              if (convertErrorsResult != null) {
                first1 = convertErrorsResult[0];
              }
              dependencyMap(first1, tmp);
              const tmp4 = dependencyMap;
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult[0]);
            } else {
              callback(tmp);
            }
          });
        });
      },
      setItem(arg0, arg1, arg2) {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        return new Promise((closure_0, closure_1) => {
          const callback = closure_0;
          const table = closure_1;
          callback(table[3]).checkValidInput(callback, table);
          const items = [callback, table];
          const items1 = [items];
          closure_2_3.default.multiSet(items1, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (closure_1_2 != null) {
              let first;
              if (convertErrorsResult != null) {
                first = convertErrorsResult[0];
              }
              closure_1_2(first);
              const tmp2 = closure_1_2;
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult[0]);
            } else {
              callback();
            }
          });
        });
      },
      removeItem(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        return new Promise((closure_0) => {
          const callback = closure_0;
          const table = arg1;
          callback(table[3]).checkValidInput(callback);
          const items = [callback];
          closure_2_3.default.multiRemove(items, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (dependencyMap != null) {
              let first;
              if (convertErrorsResult != null) {
                first = convertErrorsResult[0];
              }
              dependencyMap(first);
              const tmp2 = dependencyMap;
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult[0]);
            } else {
              callback();
            }
          });
        });
      },
      mergeItem(arg0, arg1, arg2) {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        return new Promise((closure_0, closure_1) => {
          const callback = closure_0;
          const table = closure_1;
          callback(table[3]).checkValidInput(callback, table);
          const items = [callback, table];
          const items1 = [items];
          closure_2_3.default.multiMerge(items1, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (closure_1_2 != null) {
              let first;
              if (convertErrorsResult != null) {
                first = convertErrorsResult[0];
              }
              closure_1_2(first);
              const tmp2 = closure_1_2;
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult[0]);
            } else {
              callback();
            }
          });
        });
      },
      clear(arg0) {
        closure_0 = arg0;
        return new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          closure_2_3.default.clear((message) => {
            const convertErrorResult = callback(663).convertError(message);
            if (callback != null) {
              callback(convertErrorResult);
            }
            if (convertErrorResult) {
              dependencyMap(convertErrorResult);
            } else {
              callback();
            }
          });
        });
      },
      getAllKeys(arg0) {
        closure_0 = arg0;
        return new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const allKeys = closure_2_3.default.getAllKeys((message) => {
            const convertErrorResult = callback(663).convertError(message);
            if (callback != null) {
              callback(convertErrorResult, arg1);
            }
            if (arg1) {
              callback(arg1);
            } else {
              dependencyMap(convertErrorResult);
            }
          });
        });
      },
      flushGetRequests() {
        closure_0 = [];
        closure_1 = [];
        closure_1_3.default.multiGet(closure_1, (arg0, arr) => {
          const lib = {};
          if (arr != null) {
            const item = arr.forEach((arg0) => {
              const defaultResult = c2.default(arg0, 2);
              closure_0[defaultResult[0]] = defaultResult[1];
              return defaultResult[1];
            });
          }
          const convertErrorsResult = lib(table[3]).convertErrors(arg0);
          let first = null;
          if (convertErrorsResult != null) {
            first = null;
            if (convertErrorsResult.length) {
              first = convertErrorsResult[0];
            }
          }
          let num2 = 0;
          if (0 < lib.length) {
            do {
              let tmp4 = lib;
              let obj = lib[num2];
              let tmp5 = num2;
              let tmp6 = tmp3;
              if (first) {
                if (obj.callback != null) {
                  let callbackResult = obj.callback(convertErrorsResult);
                }
                let tmp9 = tmp3;
                if (obj.reject != null) {
                  let rejectResult = obj.reject(first);
                  tmp9 = tmp3;
                }
              } else {
                let keys = obj.keys;
                let mapped = keys.map((arg0) => {
                  const items = [arg0, table[arg0]];
                  return items;
                });
                if (obj.callback != null) {
                  let callbackResult1 = obj.callback(null, mapped);
                }
                tmp9 = mapped;
                if (obj.resolve != null) {
                  let resolveResult = obj.resolve(mapped);
                  tmp9 = mapped;
                }
              }
              num2 = num2 + 1;
              tmp3 = tmp9;
            } while (num2 < length);
          }
        });
      },
      multiGet(closure_1, callback) {
        if (!immediate) {
          const _setImmediate = setImmediate;
          immediate = setImmediate(() => {
            c2 = null;
            closure_2_4.flushGetRequests();
          });
        }
        const obj = { keys: closure_1, callback, keyIndex: length.length };
        obj.push(obj);
        const item = closure_1.forEach((arg0) => {
          if (closure_1_1.indexOf(arg0) === -1) {
            closure_1_1.push(arg0);
          }
        });
        return new Promise((resolve, reject) => {
          obj.resolve = resolve;
          obj.reject = reject;
        });
      },
      multiSet(closure_0, fn) {
        const callback = closure_0;
        callback(fn[3]).checkValidArgs(closure_0, fn);
        return new Promise((closure_0) => {
          closure_1 = arg1;
          const item = closure_0.forEach((arg0) => {
            [tmp2, tmp3] = c2.default(arg0, 2);
            callback(663).checkValidInput(tmp2, tmp3);
          });
          closure_2_3.default.multiSet(closure_0, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (dependencyMap != null) {
              dependencyMap(convertErrorsResult);
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult);
            } else {
              callback();
            }
          });
        });
      },
      multiRemove(closure_0, arg1) {
        closure_1 = arg1;
        return new Promise((closure_0) => {
          closure_1 = arg1;
          const item = closure_0.forEach((closure_0) => callback(663).checkValidInput(closure_0));
          closure_2_3.default.multiRemove(closure_0, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (dependencyMap != null) {
              dependencyMap(convertErrorsResult);
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult);
            } else {
              callback();
            }
          });
        });
      },
      multiMerge(closure_0, arg1) {
        closure_1 = arg1;
        return new Promise((closure_0) => {
          closure_1 = arg1;
          closure_2_3.default.multiMerge(closure_0, (arg0) => {
            const convertErrorsResult = callback(663).convertErrors(arg0);
            if (dependencyMap != null) {
              dependencyMap(convertErrorsResult);
            }
            if (convertErrorsResult) {
              dependencyMap(convertErrorsResult);
            } else {
              callback();
            }
          });
        });
      }
    };
  })();
  let closure_4 = tmp8;
  exports.default = tmp8;
} else {
  const _Error = Error;
  const error = new Error("[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.\n\nTo fix this issue try these steps:\n\n  \u2022 Uninstall, rebuild and restart the app.\n\n  \u2022 Run the packager with `--reset-cache` flag.\n\n  \u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory, then rebuild and re-run the app.\n\n  \u2022 Make sure your project's `package.json` depends on `@react-native-async-storage/async-storage`, even if you only depend on it indirectly through other dependencies. CLI only autolinks native modules found in your `package.json`.\n\n  \u2022 If this happens while testing with Jest, check out how to integrate AsyncStorage here: https://react-native-async-storage.github.io/async-storage/docs/advanced/jest\n\nIf none of these fix the issue, please open an issue on the GitHub repository: https://github.com/react-native-async-storage/async-storage/issues\n");
  throw error;
}
