// Module ID: 244
// Function ID: 2626
// Name: renderApplication
// Dependencies: [1, 186, 245, 246, 256, 257, 57, 20, 119, 258, 251]
// Exports: default

// Module 244 (renderApplication)
import invariant from "invariant" /* 20 */;
import keys from "keys" /* 57 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod186 from "module_186" /* 186 */;
import usePerformanceLogger from "usePerformanceLogger" /* 245 */;
import AppContainer from "AppContainer" /* 246 */;
import coerceDisplayMode from "coerceDisplayMode" /* 256 */;
import getCachedComponentWithDisplayName2 from "getCachedComponentWithDisplayName" /* 257 */;
import module_1 from "module_1" /* 1 */;
import module_258 from "module_258" /* 258 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_0 = module_1(_mod186);
let closure_1 = module_1(usePerformanceLogger);
let closure_2 = module_1(AppContainer);
let closure_3 = module_1(coerceDisplayMode);
const getCachedComponentWithDisplayName = module_1(getCachedComponentWithDisplayName2);
let closure_4 = _interopRequireWildcard(keys);
let closure_5 = module_1(invariant);
let closure_6 = _interopRequireWildcard(getIteratorFn);

export default function renderApplication(arg0, arg1, rootTag, WrapperComponent, rootViewStyle, fabric, arg6, internal_excludeLogBox) {
  let _default = arg6;
  closure_5.default(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  if (arg6 == null) {
    _default = mod.default;
  }
  let obj = { value: _default };
  obj = { rootTag, fabric, WrapperComponent, rootViewStyle };
  let frozen = arg1;
  if (arg1 == null) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  obj.initialProps = frozen;
  obj.internal_excludeLogBox = internal_excludeLogBox;
  obj = { rootTag };
  obj.children = React.jsx(arg0, Object.assign({}, arg1, obj));
  obj.children = <mod3.default rootTag={arg2} />;
  const jsxResult = React.jsx(mod2.default.Provider, { rootTag });
  let jsxResult1 = jsxResult;
  if (arg10) {
    jsxResult1 = jsxResult;
    if (arg9 != null) {
      const obj1 = {};
      let str = "hidden";
      if (arg9 === mod4.default.VISIBLE) {
        str = "visible";
      }
      obj1.mode = str;
      obj1.children = jsxResult;
      jsxResult1 = <unstable_Activity.unstable_Activity />;
    }
  }
  const BooleanResult = Boolean(fabric);
  _default.startTimespan("renderApplication_React_render");
  let str2 = "0";
  let str3 = "0";
  if (BooleanResult) {
    str3 = "1";
  }
  _default.setExtra("usedReactConcurrentRoot", str3);
  if (fabric) {
    str2 = "1";
  }
  _default.setExtra("usedReactFabric", str2);
  _default.setExtra("usedReactProfiler", closure_4.isProfilingRenderer());
  const obj2 = { element: jsxResult1, rootTag, useFabric: Boolean(fabric), useConcurrentRoot: BooleanResult };
  closure_4.renderElement(obj2);
  _default.stopTimespan("renderApplication_React_render");
};
