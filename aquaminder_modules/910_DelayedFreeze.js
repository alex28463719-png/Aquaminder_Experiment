// Module ID: 910
// Function ID: 9734
// Name: DelayedFreeze
// Dependencies: [1, 38, 119, 251, 911]
// Exports: default

// Module 910 (DelayedFreeze)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(getIteratorFn);

export default function DelayedFreeze(freeze) {
  freeze = freeze.freeze;
  let flag = false;
  const defaultResult = closure_2.default(mod.default.useState(false), 2);
  dependencyMap = defaultResult[1];
  const items = [freeze];
  const effect = mod.default.useEffect(() => {
    const immediate = setImmediate(() => {
      closure_1_1(closure_0);
    });
    return () => {
      clearImmediate(closure_0);
    };
  }, items);
  const obj = {};
  if (freeze) {
    flag = defaultResult[0];
  }
  obj.freeze = flag;
  obj.children = freeze.children;
  return React.jsx(freeze(911).Freeze, {});
};
