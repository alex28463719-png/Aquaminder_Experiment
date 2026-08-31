// Module ID: 329
// Function ID: 3996
// Name: unstable_createAnimatedComponentWithAllowlist
// Dependencies: [1, 38, 330, 254, 248, 334, 119, 251]
// Exports: default

// Module 329 (unstable_createAnimatedComponentWithAllowlist)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import View2 from "View" /* 248 */;
import composeStyles from "composeStyles" /* 254 */;
import reduceAnimatedProps from "reduceAnimatedProps" /* 330 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "jsxProd" /* 251 */;

function unstable_createAnimatedComponentWithAllowlist(displayName, arg1) {
  closure_0 = displayName;
  closure_1 = closure_1.default(arg1);
  const forwardRefResult = getIteratorFn.forwardRef((arg0, arg1) => {
    const defaultResult = displayName.default(style(arg0), 2);
    const first = defaultResult[0];
    ({ passthroughAnimatedPropExplicitValues, style } = first);
    style = undefined;
    if (passthroughAnimatedPropExplicitValues != null) {
      style = passthroughAnimatedPropExplicitValues.style;
    }
    const items = [style, style];
    const defaultResult1 = closure_1_3.default(defaultResult[1], arg1);
    return <style {...Object.assign({}, first, passthroughAnimatedPropExplicitValues, { style: closure_1_4.useMemo(() => closure_2_2.default(style, style), items), ref: closure_1_3.default(defaultResult[1], arg1) })} />;
  });
  forwardRefResult.displayName = "Animated(" + displayName.displayName || "Anonymous" + ")";
  return forwardRefResult;
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(reduceAnimatedProps);
let closure_2 = module_1(composeStyles);
const View = module_1(View2);
let closure_3 = module_1(useMergeRefs);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export default function createAnimatedComponent(Pressable) {
  return unstable_createAnimatedComponentWithAllowlist(Pressable, null);
};
export { unstable_createAnimatedComponentWithAllowlist };
