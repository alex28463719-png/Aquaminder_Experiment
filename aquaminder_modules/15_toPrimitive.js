// Module ID: 15
// Function ID: 217
// Name: toPrimitive
// Dependencies: [16]

// Module 15 (toPrimitive)
import _typeof from "_typeof" /* 16 */;


export default function toPrimitive(closure_1, key10018) {
  let str = key10018;
  if ("object" == obj.default(closure_1)) {
    if (closure_1) {
      const _Symbol = Symbol;
      if (undefined !== closure_1[Symbol.toPrimitive]) {
        if (!str) {
          str = "default";
        }
        const callResult = obj2.call(closure_1, str);
        if ("object" != obj3.default(callResult)) {
          return callResult;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
        obj3 = _typeof;
      } else {
        return "string" === str ? String : Number(closure_1);
      }
    }
  }
  return closure_1;
};
