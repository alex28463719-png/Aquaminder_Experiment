// Module ID: 886
// Function ID: 9634
// Name: MissingIcon
// Dependencies: [2, 251, 864]
// Exports: MissingIcon

// Module 886 (MissingIcon)
import Text from "Text" /* 864 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_2 from "jsxProd" /* 251 */;

const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ icon: { backgroundColor: "transparent" } });

export function MissingIcon(arg0) {
  ({ color, size, style } = arg0);
  style = [icon.icon, { color, fontSize: size }, ];
  style[2] = style;
  return React.jsx(Text.Text, { style, children: "\u23F7" });
}
