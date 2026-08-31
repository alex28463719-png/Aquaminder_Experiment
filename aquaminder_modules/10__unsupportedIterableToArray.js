// Module ID: 10
// Function ID: 206
// Name: _unsupportedIterableToArray
// Dependencies: [8]

// Module 10 (_unsupportedIterableToArray)
import _arrayLikeToArray from "_arrayLikeToArray" /* 8 */;


export default function _unsupportedIterableToArray(closure_1) {
  if (closure_1) {
    if ("string" === typeof closure_1) {
      return _arrayLikeToArray(closure_1, arg1);
    } else {
      const toString = {}.toString;
      const substr = toString.call(closure_1).slice(8, -1);
      let name = substr;
      if (tmp) {
        name = closure_1.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            let arr = _arrayLikeToArray(closure_1, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(closure_1);
      const callResult = toString.call(closure_1);
      tmp = "Object" === substr && closure_1.constructor;
    }
  }
};
