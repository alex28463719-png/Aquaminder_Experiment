// Module ID: 873
// Function ID: 9588
// Name: HeaderIcon
// Dependencies: [1, 203, 2, 251, 529]
// Exports: HeaderIcon

// Module 873 (HeaderIcon)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let num = 3;
let closure_5 = ["source", "style"];
let num2 = 24;
if (get_registerCallableModule.Platform.OS === "ios") {
  num2 = 21;
}
if (get_registerCallableModule.Platform.OS === "ios") {
  num = 8;
}
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { width: num2, height: num2, margin: num };
const styles = StyleSheet.create({ icon: obj, flip: { transform: "scaleX(-1)" } });

export function HeaderIcon(arg0) {
  ({ source, style } = arg0);
  const obj = { source, resizeMode: "contain", fadeDuration: 0, tintColor: _mod529.useTheme().colors.text };
  const items = [closure_6.icon, , ];
  let flip = _mod529.useLocale().direction === "rtl";
  if (flip) {
    flip = closure_6.flip;
  }
  items[1] = flip;
  items[2] = style;
  obj.style = items;
  return <get registerCallableModule.Image {...Object.assign(obj, closure_2.default(arg0, closure_5))} />;
}
export const ICON_SIZE = num2;
export const ICON_MARGIN = num;
