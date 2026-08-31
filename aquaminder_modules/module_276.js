// Module ID: 276
// Function ID: 3256
// Dependencies: [1, 203, 277, 251, 119]

// Module 276
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 277 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "jsxProd" /* 251 */;
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_3 = ["styleAttr", "indeterminate", "animating"];

export default getIteratorFn.forwardRef(function ProgressBarAndroid(styleAttr, ref) {
  styleAttr = styleAttr.styleAttr;
  let str = "Normal";
  if (styleAttr !== undefined) {
    str = styleAttr;
  }
  const indeterminate = styleAttr.indeterminate;
  let flag = true;
  if (indeterminate !== undefined) {
    flag = indeterminate;
  }
  const animating = styleAttr.animating;
  let flag2 = true;
  if (animating !== undefined) {
    flag2 = animating;
  }
  let obj = { styleAttr: str, indeterminate: flag, animating: flag2 };
  obj = { ref };
  return <mod.default {...Object.assign(obj, closure_0.default(arg0, closure_3), obj)} />;
});
