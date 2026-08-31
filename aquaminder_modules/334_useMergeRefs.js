// Module ID: 334
// Function ID: 4056
// Name: useMergeRefs
// Dependencies: [1, 331, 119]
// Exports: default

// Module 334 (useMergeRefs)
import getIteratorFn from "getIteratorFn" /* 119 */;
import useRefEffect from "useRefEffect" /* 331 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(useRefEffect);
let closure_1 = _interopRequireWildcard(getIteratorFn);

export default function useMergeRefs() {
  const length = arguments.length;
  let array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  const items = [];
  return array.default(React.useCallback((arg0) => {
    array = arg0;
    closure_1 = array.map((fn) => {
      closure_0 = fn;
      if (fn != null) {
        if (typeof fn === "function") {
          fn = fn(closure_0);
          if (typeof fn !== "function") {
            fn = () => {
              callback(null);
            };
          }
          return fn;
        } else {
          fn.current = closure_0;
          return () => {
            closure_0.current = null;
          };
        }
      }
    });
    return () => {
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult != null) {
          let tmp3 = nextResult;
          let tmp2Result = tmp2();
        }
        continue;
      }
    };
  }, items.concat(array)));
};
