// Module ID: 887
// Function ID: 9636
// Name: ResourceSavingView
// Dependencies: [1, 203, 119, 2, 251]
// Exports: ResourceSavingView

// Module 887 (ResourceSavingView)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_2 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_3 = ["visible", "children", "style"];
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flex: 1, overflow: "hidden" }, attached: { flex: 1 }, detached: { flex: 1, top: 30000 } });

export function ResourceSavingView(arg0) {
  ({ visible, children, style } = arg0);
  if (get_registerCallableModule.Platform.OS === "web") {
    let obj = { hidden: !visible };
    obj = {};
    let str5 = "none";
    let str6 = "none";
    if (visible) {
      str6 = "flex";
    }
    obj.display = str6;
    const items = [obj, closure_4.container, style];
    obj.style = items;
    if (visible) {
      str5 = "auto";
    }
    obj.pointerEvents = str5;
    const obj1 = { children };
    return <get registerCallableModule.View {...Object.assign(obj, tmp, obj1)} />;
  } else {
    const obj2 = {};
    const items1 = [closure_4.container, style];
    obj2.style = items1;
    let str4 = "none";
    let str = "none";
    if (visible) {
      str = "auto";
    }
    obj2.pointerEvents = str;
    obj = { collapsable: false };
    if (get_registerCallableModule.Platform.OS === "ios") {
      let flag2 = !visible;
    } else {
      flag2 = true;
    }
    obj.removeClippedSubviews = flag2;
    if (visible) {
      str4 = "auto";
    }
    obj.pointerEvents = str4;
    obj.style = visible ? closure_4.attached : closure_4.detached;
    obj.children = children;
    obj2.children = <get registerCallableModule.View collapsable={false} />;
    return <get registerCallableModule.View />;
  }
}
