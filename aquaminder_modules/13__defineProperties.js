// Module ID: 13
// Function ID: 212
// Name: _defineProperties
// Dependencies: [14]

// Module 13 (_defineProperties)
import toPropertyKey from "toPropertyKey" /* 14 */;

function _defineProperties(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    let flag = tmp.enumerable;
    let tmp2 = num;
    if (!flag) {
      flag = false;
    }
    tmp.enumerable = flag;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let definePropertyResult = Object.defineProperty(arg0, toPropertyKey(tmp.key), tmp);
  }
}

export default function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    _defineProperties(arg0.prototype, arg1);
  }
  if (arg2) {
    _defineProperties(arg0, arg2);
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
};
