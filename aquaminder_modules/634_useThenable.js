// Module ID: 634
// Function ID: 6781
// Name: useThenable
// Dependencies: [1, 363, 38, 119]
// Exports: useThenable

// Module 634 (useThenable)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(asyncGeneratorStep);
let closure_1 = module_1(_slicedToArray);
let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useThenable(arg0) {
  const first = items.default(React.useState(arg0), 1)[0];
  items = [false, undefined];
  first.then((arg0) => {
    items = [true, arg0];
  });
  [tmp3, closure_2] = items.default(React.useState(items), 2);
  const first1 = items.default(tmp3, 1)[0];
  let items1 = [first, first1];
  const effect = React.useEffect(() => {
    c0 = false;
    if (!first1) {
      (() => {
        closure_0 = first.default(async () => {
          try {
            if (!closure_0) {
              items = [true, tmp4];
              closure_3_2(items);
            }
          } catch (tmp9) {
            if (!closure_0) {
              const items1 = [true, tmp];
              closure_3_2(items1);
            }
            throw tmp9;
          }
        });
        return function resolve() {
          return callback(...arguments);
        };
      })()();
    }
    return () => {
      c0 = true;
    };
  }, items1);
  return tmp3;
}
