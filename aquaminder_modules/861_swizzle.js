// Module ID: 861
// Function ID: 9518
// Name: swizzle
// Dependencies: [862]

// Module 861 (swizzle)
import isArrayish from "isArrayish" /* 862 */;

function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    do {
      let tmp2 = arg0[num];
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = items;
      let tmp6 = num;
      if (isArrayish(tmp2)) {
        let tmp9 = concat;
        let tmp10 = slice;
        let callResult = concat.call(items, slice.call(tmp2));
      } else {
        let arr = items.push(tmp2);
        callResult = items;
      }
      num = num + 1;
      items = callResult;
      tmp = callResult;
    } while (num < length);
  }
  return tmp;
}
swizzle.wrap = (arg0) => {
  closure_0 = arg0;
  return () => callback(closure_1_4(arguments));
};

export default swizzle;
