// Module ID: 876
// Function ID: 9596
// Name: HeaderButton
// Dependencies: [119, 2, 251, 863]

// Module 876 (HeaderButton)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import PlatformPressable from "PlatformPressable" /* 863 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const forwardRefResult = getIteratorFn.forwardRef(function HeaderButtonInternal(disabled, ref) {
  disabled = disabled.disabled;
  ({ onPress, pressColor, pressOpacity, accessibilityLabel, testID, style, href, children } = disabled);
  const obj = { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple: getIteratorFn };
  const items = [closure_5.container, , ];
  if (disabled) {
    disabled = closure_5.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj.style = items;
  const Platform = get_registerCallableModule.Platform;
  obj.hitSlop = Platform.select({ ios: undefined, default: { top: 16, right: 16, bottom: 16, left: 16 } });
  obj.children = children;
  return React.jsx(PlatformPressable.PlatformPressable, { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple: getIteratorFn });
});
forwardRefResult.displayName = "HeaderButton";
getIteratorFn = { borderless: true, foreground: null, radius: 20 };
let tmp4 = get_registerCallableModule.Platform.OS === "android";
if (tmp4) {
  tmp4 = get_registerCallableModule.Platform.Version >= 23;
}
getIteratorFn.foreground = tmp4;
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, borderRadius: 10 }, disabled: { opacity: 0.5 } });

export const HeaderButton = forwardRefResult;
