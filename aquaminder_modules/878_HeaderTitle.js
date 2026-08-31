// Module ID: 878
// Function ID: 9602
// Name: HeaderTitle
// Dependencies: [1, 203, 2, 251, 529]
// Exports: HeaderTitle

// Module 878 (HeaderTitle)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_5 = ["tintColor", "style"];
const StyleSheet = get_registerCallableModule.StyleSheet;
let Platform = get_registerCallableModule.Platform;
const styles = StyleSheet.create({ title: Platform.select({ ios: { fontSize: 17 }, android: { fontSize: 20 }, default: { fontSize: 18 } }) });

export function HeaderTitle(tintColor) {
  let text = tintColor.tintColor;
  const theme = _mod529.useTheme();
  const fonts = theme.fonts;
  let obj = {};
  obj = {};
  if (text === undefined) {
    text = theme.colors.text;
  }
  obj.color = text;
  const items = [obj, , , ];
  const Platform = get_registerCallableModule.Platform;
  obj = { ios: fonts.bold, default: fonts.medium };
  items[1] = Platform.select(obj);
  items[2] = title.title;
  items[3] = tintColor.style;
  obj.style = items;
  return React.jsx(get_registerCallableModule.Animated.Text, Object.assign({ role: "heading", "aria-level": "1", numberOfLines: 1 }, closure_2.default(tintColor, closure_5), obj));
}
