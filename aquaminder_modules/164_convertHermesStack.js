// Module ID: 164
// Function ID: 1747
// Name: convertHermesStack
// Dependencies: [165, 166]

// Module 164 (convertHermesStack)
import parseChrome from "parseChrome" /* 165 */;
import isInternalBytecodeSourceUrl from "isInternalBytecodeSourceUrl" /* 166 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
function convertHermesStack(arg0) {
  const items = [];
  const iter = arg0.entries[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult.type !== "FRAME") {
      continue;
    } else {
      let tmp9 = nextResult;
      let _location = tmp2.location;
      let tmp10 = _location;
      let functionName = tmp2.functionName;
      if (_location.type !== "NATIVE") {
        let tmp3 = _location;
        if (tmp10.type !== "INTERNAL_BYTECODE") {
          let tmp4 = items;
          let obj = {};
          let tmp5 = functionName;
          obj.methodName = functionName;
          let tmp6 = _location;
          ({ sourceUrl: obj.file, line1Based: obj.lineNumber } = tmp10);
          if (tmp10.type === "SOURCE") {
            let tmp8 = _location;
            let virtualOffset0Based = tmp10.column1Based - 1;
          } else {
            let tmp7 = _location;
            virtualOffset0Based = tmp10.virtualOffset0Based;
          }
          obj.column = virtualOffset0Based;
          obj = items.push(obj);
        }
      }
      continue;
    }
    continue;
  }
  return items;
}
arg5.default = function parseErrorStack(arg0) {
  if (arg0 == null) {
    return [];
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      return arg0;
    } else if (global.HermesInternal) {
      let mapped = convertHermesStack(isInternalBytecodeSourceUrl.default(arg0));
      let obj = isInternalBytecodeSourceUrl;
    } else {
      const parsed = obj2.parse(arg0);
      mapped = parsed.map((column) => {
        const obj = {};
        let diff = null;
        if (column.column != null) {
          diff = column.column - 1;
        }
        obj.column = diff;
        return Object.assign({}, column, obj);
      });
    }
    obj2 = parseChrome;
  }
};
