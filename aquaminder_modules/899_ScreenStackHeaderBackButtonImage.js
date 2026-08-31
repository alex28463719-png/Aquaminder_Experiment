// Module ID: 899
// Function ID: 9699
// Name: ScreenStackHeaderBackButtonImage
// Dependencies: [1, 203, 119, 2, 900, 901, 251, 902]
// Exports: ScreenStackHeaderBackButtonImage, ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView, ScreenStackHeaderSearchBarView

// Module 899 (ScreenStackHeaderBackButtonImage)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import __INTERNAL_VIEW_CONFIG2 from "__INTERNAL_VIEW_CONFIG" /* 900 */;
import __INTERNAL_VIEW_CONFIG3 from "__INTERNAL_VIEW_CONFIG" /* 901 */;
import EDGE_TO_EDGE from "EDGE_TO_EDGE" /* 902 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = module_1(getIteratorFn2);
let closure_4 = module_1(__INTERNAL_VIEW_CONFIG2);
const __INTERNAL_VIEW_CONFIG = module_1(__INTERNAL_VIEW_CONFIG3);
let closure_6 = ["style"];
let closure_7 = ["style"];
let closure_8 = ["style"];
const _default = __INTERNAL_VIEW_CONFIG.default;
const forwardRefResult = getIteratorFn.default.forwardRef((topInsetEnabled, ref) => {
  const obj = { ref };
  let flag = true;
  if (!EDGE_TO_EDGE.EDGE_TO_EDGE) {
    flag = topInsetEnabled.topInsetEnabled;
  }
  obj.topInsetEnabled = flag;
  obj.style = closure_10.headerConfig;
  obj.pointerEvents = "box-none";
  return <mod.default {...Object.assign({}, arg0, obj)} />;
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { headerSubview: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, headerSubviewCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 1 } };
obj = { position: "absolute", width: "100%", flexDirection: "row", justifyContent: "space-between" };
let str;
if (get_registerCallableModule.Platform.OS === "ios") {
  str = "center";
}
obj.alignItems = str;
obj.headerConfig = obj;
const styles = StyleSheet.create(obj);

export const ScreenStackHeaderSubview = _default;
export const ScreenStackHeaderConfig = forwardRefResult;
export function ScreenStackHeaderBackButtonImage(arg0) {
  ({ jsx, jsx: jsx2 } = closure_5);
  return <_default type="back" style={closure_10.headerSubview}>{jsx2(get_registerCallableModule.Image, Object.assign({ resizeMode: "center", fadeDuration: 0 }, arg0))}</_default>;
}
export function ScreenStackHeaderRightView(style) {
  style = [closure_10.headerSubview, style.style];
  return <_default {...Object.assign({}, closure_2.default(arg0, closure_6), { type: "right", style })} />;
}
export function ScreenStackHeaderLeftView(style) {
  style = [closure_10.headerSubview, style.style];
  return <_default {...Object.assign({}, closure_2.default(arg0, closure_7), { type: "left", style })} />;
}
export function ScreenStackHeaderCenterView(style) {
  style = [closure_10.headerSubviewCenter, style.style];
  return <_default {...Object.assign({}, closure_2.default(arg0, closure_8), { type: "center", style })} />;
}
export function ScreenStackHeaderSearchBarView(arg0) {
  return <_default {...Object.assign({}, arg0, { type: "searchBar", style: closure_10.headerSubview })} />;
}
