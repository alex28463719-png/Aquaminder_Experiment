// Module ID: 247
// Function ID: 2637
// Name: AppContainer
// Dependencies: [1, 248, 253, 119, 251, 255]
// Exports: default

// Module 247 (AppContainer)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import View from "View" /* 248 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import RootTagContext from "RootTagContext" /* 255 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "jsxProd" /* 251 */;

let closure_2 = module_1(View);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_4 = setStyleAttributePreprocessor.default.create({ root: { flex: 1 } });

export default function AppContainer(rootTag) {
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let jsxResult = children;
  if (WrapperComponent != null) {
    let obj = { initialProps: tmp2, fabric: tmp === true, children };
    jsxResult = <WrapperComponent initialProps={tmp2} fabric={tmp === true}>{children}</WrapperComponent>;
  }
  obj = { value: RootTagContext.createRootTag(rootTag.rootTag) };
  obj = {};
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj.style = rootViewStyle;
  obj.pointerEvents = "box-none";
  obj.children = jsxResult;
  obj.children = <mod.default />;
  return React.jsx(RootTagContext.RootTagContext.Provider, {});
};
