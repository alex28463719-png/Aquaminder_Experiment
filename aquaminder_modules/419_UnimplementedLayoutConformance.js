// Module ID: 419
// Function ID: 4936
// Name: UnimplementedLayoutConformance
// Dependencies: [1, 253, 420, 119, 251]

// Module 419 (UnimplementedLayoutConformance)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import LayoutConformance2 from "LayoutConformance" /* 420 */;
import module_1 from "module_1" /* 1 */;
import closure_1 from "jsxProd" /* 251 */;

class UnimplementedLayoutConformance {
  constructor(arg0) {
    return global.children;
  }
}
class LayoutConformance {
  constructor(arg0) {
    obj = { style: closure_2.container };
    return closure_1.jsx(closure_0.default, Object.assign({}, global, obj));
  }
}
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_0 = module_1(LayoutConformance2);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let prop;
if (global != null) {
  prop = global.nativeFabricUIManager;
}
if (prop != null) {
  const UnimplementedLayoutConformance = LayoutConformance;
}
let closure_2 = setStyleAttributePreprocessor.default.create({ container: { display: "contents" } });

export default UnimplementedLayoutConformance;
