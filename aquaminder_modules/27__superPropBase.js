// Module ID: 27
// Function ID: 291
// Name: _superPropBase
// Dependencies: [25]

// Module 27 (_superPropBase)
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;


export default function _superPropBase(closure_1, key10018) {
  const hasOwnProperty = {}.hasOwnProperty;
  let tmp = closure_1;
  if (!hasOwnProperty.call(closure_1, key10018)) {
    let tmp4 = _getPrototypeOf(closure_1);
    tmp = tmp4;
    if (null !== tmp4) {
      const hasOwnProperty2 = {}.hasOwnProperty;
      tmp = tmp4;
      while (!hasOwnProperty2.call(tmp4, key10018)) {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        tmp4 = _getPrototypeOf(tmp4);
        tmp = tmp4;
        if (null === tmp4) {
          break;
        }
      }
    }
  }
  return tmp;
};
