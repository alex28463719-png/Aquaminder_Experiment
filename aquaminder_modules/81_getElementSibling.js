// Module ID: 81
// Function ID: 1145
// Name: getElementSibling
// Dependencies: [72, 80]

// Module 81 (getElementSibling)
import getChildNodes from "getChildNodes" /* 72 */;
import _callSuper from "_callSuper" /* 80 */;

require = arg1;
const dependencyMap = arg6;
arg5.getElementSibling = function getElementSibling(parentNode, next) {
  parentNode = parentNode.parentNode;
  if (parentNode == null) {
    return null;
  } else {
    const childNodes = getChildNodes.getChildNodes(parentNode);
    const index = childNodes.indexOf(parentNode);
    let num = -1;
    if (index === -1) {
      return null;
    } else {
      if (next === "next") {
        num = 1;
      }
      const sum = index + num;
      if (closure_2 == null) {
        closure_2 = _callSuper.default;
      }
      let tmp5 = sum;
      if (childNodes[sum] != null) {
        let tmp7 = sum;
        tmp5 = sum;
        if (!(childNodes[sum] instanceof closure_2)) {
          const sum1 = tmp7 + num;
          tmp5 = sum1;
          while (childNodes[sum1] != null) {
            let tmp9 = closure_2;
            tmp7 = sum1;
            tmp5 = sum1;
            if (childNodes[sum1] instanceof closure_2) {
              break;
            }
          }
        }
      }
      let tmp11 = null;
      if (childNodes[tmp5] != null) {
        tmp11 = tmp10;
      }
      return tmp11;
    }
  }
};
