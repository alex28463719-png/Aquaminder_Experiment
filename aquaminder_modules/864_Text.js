// Module ID: 864
// Function ID: 9534
// Name: Text
// Dependencies: [1, 203, 2, 251, 529]
// Exports: Text

// Module 864 (Text)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_5 = ["style"];

export function Text(style) {
  const theme = _mod529.useTheme();
  style = [{ color: theme.colors.text }, theme.fonts.regular, style.style];
  return <RN.Text {...Object.assign({}, closure_2.default(arg0, closure_5), { style })} />;
}
