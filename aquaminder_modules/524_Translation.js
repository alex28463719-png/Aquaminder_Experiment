// Module ID: 524
// Function ID: 5860
// Name: Translation
// Dependencies: [1, 38, 203, 525]
// Exports: Translation

// Module 524 (Translation)
import _slicedToArray from "_slicedToArray" /* 38 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import useTranslation from "useTranslation" /* 525 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = ["ns", "children"];

export function Translation(arg0) {
  ({ ns, children } = arg0);
  const defaultResult1 = closure_2.default(useTranslation.useTranslation(ns, closure_3.default(arg0, closure_4)), 3);
  return children(defaultResult1[0], { i18n: defaultResult1[1], lng: defaultResult1[1].language }, defaultResult1[2]);
}
