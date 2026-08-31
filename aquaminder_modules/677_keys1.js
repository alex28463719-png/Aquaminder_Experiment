// Module ID: 677
// Function ID: 7818
// Name: keys1
// Dependencies: [1, 203, 119, 678, 251]

// Module 677 (keys1)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 678 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_2 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_4 = ["edges"];
let closure_5 = { top: "additive", left: "additive", bottom: "additive", right: "additive" };

export const SafeAreaView = getIteratorFn.forwardRef((edges, ref) => {
  edges = edges.edges;
  const items = [edges];
  const defaultResult = edges.default(edges, closure_4);
  return <mod.default {...Object.assign({}, defaultResult, {
    edges: getIteratorFn.useMemo(() => {
      if (edges == null) {
        return closure_1_5;
      } else {
        const _Array = Array;
        if (Array.isArray(edges)) {
          let rect = arr.reduce((arg0, arg1) => {
            arg0[arg1] = "additive";
            return arg0;
          }, {});
        } else {
          rect = arr;
        }
        const obj = {};
        const top = rect.top;
        let str = "off";
        let str2 = "off";
        if (top != null) {
          str2 = top;
        }
        obj.top = str2;
        const right = rect.right;
        let tmp = str;
        if (right != null) {
          tmp = right;
        }
        obj.right = tmp;
        const bottom = rect.bottom;
        let tmp2 = str;
        if (bottom != null) {
          tmp2 = bottom;
        }
        obj.bottom = tmp2;
        const left = rect.left;
        if (left != null) {
          str = left;
        }
        obj.left = str;
        return obj;
      }
    }, items),
    ref: arg1
  })} />;
});
