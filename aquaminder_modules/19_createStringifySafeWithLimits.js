// Module ID: 19
// Function ID: 232
// Name: createStringifySafeWithLimits
// Dependencies: [1, 20]
// Exports: createStringifySafeWithLimits

// Module 19 (createStringifySafeWithLimits)
import invariant from "invariant" /* 20 */;
import module_1 from "module_1" /* 1 */;

function createStringifySafeWithLimits(maxDepth) {
  function replacer(arg0, str) {
    const self = this;
    if (arr.length) {
      if (self !== arr[0]) {
        arr = arr.shift();
        while (arr.length) {
          let tmp5 = arr;
          if (self === arr[0]) {
            break;
          }
        }
      }
    }
    if (typeof str === "string") {
      if (str.length > POSITIVE_INFINITY2 + "...(truncated)...".length) {
        return str.substring(0, POSITIVE_INFINITY2) + "...(truncated)...";
      } else {
        return str;
      }
    } else {
      if (typeof str === "object") {
        if (str !== null) {
          let combined = str;
          const _Array = Array;
          if (Array.isArray(str)) {
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal3 = HermesInternal;
              combined = "[ ... array with " + str.length + " values ... ]";
            } else if (str.length > POSITIVE_INFINITY3) {
              const substr = str.slice(0, POSITIVE_INFINITY3);
              const _HermesInternal2 = HermesInternal;
              const items = ["... extra " + str.length - POSITIVE_INFINITY3 + " values truncated ..."];
              combined = substr.concat(items);
            }
          } else {
            POSITIVE_INFINITY.default(typeof str === "object", "This was already found earlier");
            const _Object = Object;
            const keys = Object.keys(str);
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal = HermesInternal;
              combined = "{ ... object with " + keys.length + " keys ... }";
            } else if (keys.length > POSITIVE_INFINITY4) {
              combined = {};
              const substr1 = keys.slice(0, POSITIVE_INFINITY4);
              for (const item10034 of substr1) {
                let tmp12 = combined;
                let tmp13 = arg1;
                combined[item10034] = arg1[item10034];
                continue;
              }
              combined["...(truncated keys)..."] = keys.length - POSITIVE_INFINITY4;
            }
          }
          arr = arr.unshift(combined);
          return combined;
        }
      }
      return str;
    }
  }
  let POSITIVE_INFINITY = maxDepth.maxDepth;
  if (POSITIVE_INFINITY === undefined) {
    const _Number = Number;
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY2 = maxDepth.maxStringLimit;
  if (POSITIVE_INFINITY2 === undefined) {
    const _Number2 = Number;
    POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY3 = maxDepth.maxArrayLimit;
  if (POSITIVE_INFINITY3 === undefined) {
    const _Number3 = Number;
    POSITIVE_INFINITY3 = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY4 = maxDepth.maxObjectKeysLimit;
  if (POSITIVE_INFINITY4 === undefined) {
    const _Number4 = Number;
    POSITIVE_INFINITY4 = Number.POSITIVE_INFINITY;
  }
  closure_4 = [];
  return function stringifySafe(fn) {
    if (fn === undefined) {
      return "undefined";
    } else if (fn === null) {
      return "null";
    } else if (typeof fn === "function") {
      try {
        return fn.toString();
      } catch (err) {
        return "[function unknown]";
      }
    } else {
      const _Error = Error;
      if (fn instanceof Error) {
        return fn.name + ": " + fn.message;
      } else {
        try {
          const _JSON = JSON;
          const json = JSON.stringify(fn, replacer);
          if (json === undefined) {
            return "[\"" + typeof fn + "\" failed to stringify]";
          } else {
            return json;
          }
        } catch (err) {
          if (typeof str.toString !== tmp) {
            return "[\"" + typeof str + "\" failed to stringify]";
          } else {
            try {
              return str.toString();
            } catch (err) {
            }
          }
        }
      }
    }
  };
}
let closure_0 = module_1(invariant);

export { createStringifySafeWithLimits };
export default createStringifySafeWithLimits({ maxDepth: 10, maxStringLimit: 100, maxArrayLimit: 50, maxObjectKeysLimit: 50 });
