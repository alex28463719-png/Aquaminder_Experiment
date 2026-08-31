// Module ID: 971
// Function ID: 10444
// Name: hasProperty
// Dependencies: [1, 6, 119]
// Exports: isFabric, isReact19, isRemoteDebuggingEnabled, isTestEnv, tagMessage, toArray, withPrevAndCurrent

// Module 971 (hasProperty)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

function hasProperty(global, process) {
  return hasOwnProperty.call(global, process);
}
function deepEqual(config, filterConfigResult) {
  if (config === filterConfigResult) {
    return true;
  } else {
    if (typeof config === "object") {
      if (typeof filterConfigResult === "object") {
        if (config !== null) {
          if (filterConfigResult !== null) {
            const _Object = Object;
            const keys = Object.keys(config);
            const _Object2 = Object;
            const keys1 = Object.keys(filterConfigResult);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              for (const item10009 of keys) {
                let tmp2 = item10009;
                let tmp3 = keys1;
                if (obj2.includes(item10009)) {
                  let tmp4 = deepEqual;
                  let tmp5 = arg0;
                  let tmp6 = item10009;
                  let tmp7 = arg1;
                }
                obj.return();
                let flag = false;
                return false;
              }
              return true;
            }
            const obj2 = keys1;
          }
        }
      }
    }
    return false;
  }
}
let closure_1 = module_1(_toConsumableArray);
let closure_2 = module_1(getIteratorFn);

export { deepEqual };
export { hasProperty };
export function isFabric() {
  return global != null && global.nativeFabricUIManager;
}
export function isReact19() {
  const version = mod.default.version;
  return version.startsWith("19.");
}
export function isRemoteDebuggingEnabled() {
  return (!global.nativeCallSyncHook || global.__REMOTEDEV__) && !global.RN$Bridgeless;
}
export function isTestEnv() {
  return hasProperty(global, "process") && false;
}
export function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
}
export function toArray(arg0) {
  if (Array.isArray(arg0)) {
    return arg0;
  } else {
    const items = [arg0];
    return items;
  }
}
export function withPrevAndCurrent(arg0, arg1) {
  closure_0 = arg1;
  closure_1 = [null];
  const items = [];
  const item = closure_1.default(arg0).forEach((arg0, arg1) => {
    const tmp = callback(arr[arg1], arg0);
    arr = arr.push(tmp);
    arr = items.push(tmp);
  });
  return items;
}
export const INT32_MAX = 2147483647;
