// Module ID: 879
// Function ID: 9604
// Name: HeaderBackground
// Dependencies: [1, 203, 119, 2, 251, 529]
// Exports: HeaderBackground

// Module 879 (HeaderBackground)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = ["style"];
const StyleSheet = get_registerCallableModule.StyleSheet;
obj = { container: Object.assign({ flex: 1 }, Platform.select({ android: { elevation: 4 }, ios: obj, default: obj })) };
Platform = get_registerCallableModule.Platform;
obj = { shadowOpacity: 0.3, shadowRadius: 0, shadowOffset: { width: 0, height: get_registerCallableModule.StyleSheet.hairlineWidth } };
obj = { borderBottomWidth: get_registerCallableModule.StyleSheet.hairlineWidth };
const styles = StyleSheet.create(obj);

export function HeaderBackground(style) {
  const theme = _mod529.useTheme();
  const colors = theme.colors;
  let obj = {};
  const items = [container.container, , ];
  obj = { backgroundColor: colors.card, borderBottomColor: colors.border };
  let tmp4 = get_registerCallableModule.Platform.OS === "ios";
  if (tmp4) {
    obj = {};
    let str = "rgba(0, 0, 0, 1)";
    if (tmp3) {
      str = "rgba(255, 255, 255, 0.45)";
    }
    obj.shadowColor = str;
    tmp4 = obj;
  }
  items[1] = Object.assign(obj, tmp4);
  items[2] = style.style;
  obj.style = items;
  return React.jsx(get_registerCallableModule.Animated.View, Object.assign(obj, closure_2.default(style, closure_5)));
}
