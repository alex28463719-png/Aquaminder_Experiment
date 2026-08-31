// Module ID: 372
// Function ID: 4590
// Dependencies: [1, 38, 373, 378, 128, 382, 253, 33, 334, 329, 398, 119, 251]

// Module 372
import get_Version from "get Version" /* 33 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import setStyleAttributePreprocessor from "setStyleAttributePreprocessor" /* 253 */;
import unstable_createAnimatedComponentWithAllowlist2 from "unstable_createAnimatedComponentWithAllowlist" /* 329 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import _callSuper2 from "_callSuper" /* 373 */;
import _callSuper3 from "_callSuper" /* 378 */;
import splitLayoutProps from "splitLayoutProps" /* 382 */;
import _mod398 from "module_398" /* 398 */;
import module_1 from "module_1" /* 1 */;
import closure_10 from "jsxProd" /* 251 */;

let closure_0 = module_1(_slicedToArray);
let _callSuper = module_1(_callSuper2);
_callSuper = module_1(_callSuper3);
let closure_2 = module_1(flattenStyle);
let closure_3 = module_1(splitLayoutProps);
let closure_4 = module_1(setStyleAttributePreprocessor);
let closure_5 = module_1(get_Version);
let closure_6 = module_1(useMergeRefs);
const unstable_createAnimatedComponentWithAllowlist = module_1(unstable_createAnimatedComponentWithAllowlist2);
let closure_7 = module_1(_mod398);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_11 = getIteratorFn.forwardRef(function AnimatedScrollViewWithInvertedRefreshControl(refreshControl) {
  closure_0 = refreshControl;
  const items = [refreshControl];
  const memo = getIteratorFn.useMemo(() => {
    const defaultResult = closure_1_3.default(closure_1_2.default(style.style));
    obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: Object.assign({}, style, obj) };
    obj = { style: defaultResult.outer };
    obj = { style: defaultResult.inner };
    return obj;
  }, items);
  let defaultResult = closure_0.default(closure_7.default(memo.intermediatePropsForRefreshControl), 2);
  const first = defaultResult[0];
  let obj = { ref: defaultResult[1] };
  const defaultResult1 = closure_0.default(closure_7.default(memo.intermediatePropsForScrollView), 2);
  const first1 = defaultResult1[0];
  obj = { ref: closure_6.default(defaultResult1[1], arg1), refreshControl: getIteratorFn.cloneElement(refreshControl.refreshControl, Object.assign({}, first, obj)), style: _default.compose(first1.style, first.style) };
  return <_callSuper.default {...Object.assign({}, first1, obj)} />;
});
let closure_12 = unstable_createAnimatedComponentWithAllowlist.default(_callSuper.default);

export default getIteratorFn.forwardRef(function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(refreshControl, ref) {
  if (mod2.default.OS === "android") {
    if (refreshControl.refreshControl != null) {
      if (refreshControl.style != null) {
        const _Object = Object;
        let obj = { scrollEventThrottle: 0.0001 };
        obj = { ref, refreshControl: refreshControl.refreshControl };
        return <closure_11 {...Object.assign(obj, arg0, obj)} />;
      }
    }
  }
  obj = { ref };
  return <closure_12 {...Object.assign({ scrollEventThrottle: 0.0001 }, arg0, obj)} />;
});
