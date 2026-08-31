// Module ID: 412
// Function ID: 4909
// Name: InputAccessoryView
// Dependencies: [1, 413, 253, 33, 416, 417, 119, 251]
// Exports: default

// Module 412 (InputAccessoryView)
import get_Version from "get Version" /* 33 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import _mod413 from "module_413" /* 413 */;
import useWindowDimensions from "useWindowDimensions" /* 416 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 417 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_0 = module_1(_mod413);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_1 = module_1(get_Version);
let closure_2 = module_1(useWindowDimensions);
let closure_3 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = setStyleAttributePreprocessor.default.create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function InputAccessoryView(children) {
  if (mod2.default.OS === "ios") {
    const Children = React.Children;
    if (Children.count(children.children) === 0) {
      return null;
    } else {
      let obj = {};
      const items = [children.style, closure_6.container];
      obj.style = items;
      ({ nativeID: obj.nativeID, backgroundColor: obj.backgroundColor } = children);
      obj = {};
      const items1 = [closure_6.safeAreaView, ];
      obj = { width: tmp };
      items1[1] = obj;
      obj.style = items1;
      obj.children = children.children;
      obj.children = <mod.default width={tmp} />;
      return <mod3.default width={tmp} />;
    }
  } else {
    const _console = console;
    console.warn("<InputAccessoryView> is only supported on iOS.");
    return null;
  }
};
