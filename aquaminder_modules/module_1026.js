// Module ID: 1026
// Function ID: 10859
// Dependencies: [1, 203, 119, 1025, 251]

// Module 1026
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _callSuper from "_callSuper" /* 1025 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_1 = module_1(_callSuper);
let closure_3 = ["delayLongPress", "extraButtonProps"];

export default getIteratorFn.forwardRef((delayLongPress, ref) => {
  delayLongPress = delayLongPress.delayLongPress;
  let num = 600;
  if (delayLongPress !== undefined) {
    num = delayLongPress;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const obj = { ref, delayLongPress: num, extraButtonProps };
  return <mod.default {...Object.assign(obj, closure_0.default(arg0, closure_3))} />;
});
