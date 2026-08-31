// Module ID: 614
// Function ID: 6660
// Name: StaticContainer
// Dependencies: [119]

// Module 614 (StaticContainer)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export const StaticContainer = getIteratorFn.memo(function StaticContainer(children) {
  return children.children;
}, (arg0, arg1) => {
  const keys = Object.keys(arg0);
  if (keys.length !== Object.keys(arg1).length) {
    return false;
  } else {
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (nextResult === "children") {
        continue;
      } else {
        let tmp5 = arg0;
        let tmp6 = nextResult;
        let tmp7 = arg1;
        if (arg0[tmp4] !== arg1[tmp4]) {
          iter.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
});
