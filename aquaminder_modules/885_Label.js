// Module ID: 885
// Function ID: 9632
// Name: Label
// Dependencies: [1, 203, 2, 251, 864]
// Exports: Label

// Module 885 (Label)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import Text from "Text" /* 864 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_4 = ["tintColor", "style"];
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ label: { textAlign: "center", backgroundColor: "transparent" } });

export function Label(tintColor) {
  tintColor = tintColor.tintColor;
  let obj = {};
  const items = [label.label, , ];
  let tmp2 = tintColor != null;
  if (tmp2) {
    obj = { color: tintColor };
    tmp2 = obj;
  }
  items[1] = tmp2;
  items[2] = tintColor.style;
  obj.style = items;
  return React.jsx(Text.Text, Object.assign({ numberOfLines: 1 }, closure_2.default(tintColor, closure_4), obj));
}
