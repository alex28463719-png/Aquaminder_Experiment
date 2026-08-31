// Module ID: 921
// Function ID: 9790
// Name: assertGHProvider
// Dependencies: [1, 203, 119, 922, 923, 251, 924]
// Exports: default

// Module 921 (assertGHProvider)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import warnOnce from "warnOnce" /* 922 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 923 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(getIteratorFn);
let closure_4 = module_1(warnOnce);
let closure_5 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_7 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];
function assertGHProvider(context, goBackGesture) {
  let tmp = context.name !== "GHWrapper";
  if (tmp) {
    tmp = goBackGesture !== undefined;
  }
  closure_4.default(tmp, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
}
function assertCustomScreenTransitionsProps(ref, currentScreenId, goBackGesture) {
  let tmp = goBackGesture !== undefined;
  if (tmp) {
    tmp = ref === null;
  }
  if (tmp) {
    tmp = currentScreenId === undefined;
  }
  closure_4.default(tmp, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
}

export default function ScreenStack(arg0) {
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let current;
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = mod.default.useRef(current);
  const ref1 = mod.default.useRef(null);
  const context = mod.default.useContext(ref1(ref2[6]).GHContext);
  let obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  ref2 = mod.default.useRef(obj);
  const effect = mod.default.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  assertGHProvider(context, goBackGesture);
  assertCustomScreenTransitionsProps(ref, currentScreenId, goBackGesture);
  obj = { value: ref };
  const obj1 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation };
  let flag = false;
  if (screenEdgeGesture != null) {
    flag = screenEdgeGesture;
  }
  obj1.screenEdgeGesture = flag;
  obj1.screensRefs = ref;
  obj1.currentScreenId = currentScreenId;
  obj1.children = <mod2.default {...Object.assign({}, closure_2.default(arg0, closure_7), { onFinishTransitioning, ref: ref1, children })} />;
  obj.children = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} />;
  return React.jsx(ref1(ref2[6]).RNSScreensRefContext.Provider, { value: ref });
};
