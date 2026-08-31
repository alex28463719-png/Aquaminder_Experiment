// Module ID: 1040
// Function ID: 10993
// Name: applyRelationProp
// Dependencies: [1, 6]
// Exports: applyRelationProp

// Module 1040 (applyRelationProp)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_toConsumableArray);

export function applyRelationProp(closure_0, arg1, arg2) {
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arg2)) {
      obj.apply(closure_0, closure_0.default(arg2));
    } else {
      obj(arg2);
    }
  }
}
