// Module ID: 227
// Function ID: 2520
// Name: invariant
// Dependencies: [20]

// Module 227 (invariant)
import invariant from "invariant" /* 20 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
arg5.default = undefined;
let closure_3 = { log: "log", info: "info", warn: "warn", error: "error", fatal: "error" };
let c4 = null;
const obj = {
  logIfNoNativeHook(arg0) {
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    if (typeof global.nativeLoggingHook === "undefined") {
      const logToConsole = obj.logToConsole;
      const items = [arg0];
      logToConsole.apply(obj, items.concat(array));
    } else if (_null) {
      if (arg0 === "warn") {
        _null.apply(undefined, array);
      }
    }
  },
  logToConsole(arg0) {
    let num = 0;
    const tmp2 = invariant;
    tmp2(table[arg0], `${`Level "${arg0}`}" not one of ${Object.keys(table).toString()}`);
    const length = arguments.length;
    if (length > 1) {
      num = length - 1;
    }
    const array = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      array[num2 - 1] = arguments[num2];
    }
    console[table[arg0]].apply(console, array);
  },
  setWarningHandler(arg0) {
    closure_4 = arg0;
  }
};
arg5.default = obj;
