// Module ID: 275
// Function ID: 3252
// Name: ActivityIndicator
// Dependencies: [1, 203, 253, 33, 248, 119, 251, 276, 282]

// Module 275 (ActivityIndicator)
import get_Version from "get Version" /* 33 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import _mod276 from "module_276" /* 276 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 282 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
get_Version = module_1(get_Version);
let closure_3 = module_1(View);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = ["animating", "color", "hidesWhenStopped", "onLayout", "size", "style"];
if (get_Version.default.OS === "android") {
  let _default = _mod276.default;
} else {
  _default = __INTERNAL_VIEW_CONFIG.default;
}
let c7 = "#999999";
const forwardRefResult = getIteratorFn.forwardRef(function ActivityIndicator(animating, ref) {
  animating = animating.animating;
  let flag = true;
  if (animating !== undefined) {
    flag = animating;
  }
  let color = animating.color;
  if (color === undefined) {
    let tmp2 = null;
    if (get_Version.default.OS === "ios") {
      tmp2 = c7;
    }
    color = tmp2;
  }
  const hidesWhenStopped = animating.hidesWhenStopped;
  let flag2 = true;
  if (hidesWhenStopped !== undefined) {
    flag2 = hidesWhenStopped;
  }
  const size = animating.size;
  let str2 = "small";
  if (size !== undefined) {
    str2 = size;
  }
  if ("small" === str2) {
    let sizeSmall = closure_8.sizeSmall;
    let str4 = "small";
  } else if ("large" === str2) {
    sizeSmall = closure_8.sizeLarge;
    str4 = "large";
  } else {
    sizeSmall = { height: str2, width: str2 };
  }
  let obj = { animating: flag, color, hidesWhenStopped: flag2 };
  obj = { ref, style: sizeSmall, size: str4 };
  const merged = Object.assign(obj, closure_0.default(animating, closure_5), obj);
  const obj1 = { onLayout: animating.onLayout, style: _default.compose(closure_8.container, animating.style) };
  if (get_Version.default.OS === "android") {
    const _Object2 = Object;
    let jsxResult = <_default {...Object.assign({}, merged, { styleAttr: "Normal", indeterminate: true })} />;
  } else {
    const _Object = Object;
    jsxResult = <_default {...Object.assign({}, merged)} />;
  }
  obj1.children = jsxResult;
  return <mod.default onLayout={arg0.onLayout} style={_default.compose(closure_8.container, arg0.style)} />;
});
forwardRefResult.displayName = "ActivityIndicator";
let closure_8 = setStyleAttributePreprocessor.default.create({ container: { alignItems: "center", justifyContent: "center" }, sizeSmall: { width: 20, height: 20 }, sizeLarge: { width: 36, height: 36 } });

export default forwardRefResult;
