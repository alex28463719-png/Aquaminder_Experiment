// Module ID: 854
// Function ID: 9391
// Name: ButtonLink
// Dependencies: [1, 203, 855, 119, 2, 251, 529, 863, 864]
// Exports: Button

// Module 854 (ButtonLink)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import Color from "Color" /* 855 */;
import PlatformPressable from "PlatformPressable" /* 863 */;
import Text from "Text" /* 864 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_5 from "jsxProd" /* 251 */;

function ButtonLink(arg0) {
  ({ screen, params, action, href } = arg0);
  return <ButtonBase {...Object.assign({}, closure_2.default(arg0, closure_6), _mod529.useLinkProps({ screen, params, action, href }))} />;
}
function ButtonBase(variant) {
  variant = variant.variant;
  let str = "tinted";
  if (variant !== undefined) {
    str = variant;
  }
  let primary = variant.color;
  ({ android_ripple, style, children } = variant);
  const theme = _mod529.useTheme();
  if (primary == null) {
    primary = theme.colors.primary;
  }
  if ("plain" === str) {
    let str3 = "transparent";
    let tmp3 = primary;
  } else if ("tinted" === str) {
    const defaultResult1 = closure_3.default(primary);
    str3 = closure_3.default(primary).fade(0.85).string();
    tmp3 = primary;
    const fadeResult = closure_3.default(primary).fade(0.85);
  } else if ("filled" === str) {
    let str4 = "white";
    if (!defaultResult2.isDark()) {
      const defaultResult3 = closure_3.default(primary);
      str4 = closure_3.default(primary).darken(0.71).string();
      const darkenResult = closure_3.default(primary).darken(0.71);
    }
    tmp3 = str4;
    str3 = primary;
    defaultResult2 = closure_3.default(primary);
  }
  let obj = {};
  obj = { radius: c8 };
  const defaultResult = closure_2.default(variant, closure_7);
  const defaultResult4 = closure_3.default(tmp3);
  obj.color = closure_3.default(tmp3).fade(0.85).string();
  obj.android_ripple = Object.assign(obj, android_ripple);
  obj.pressOpacity = 1;
  const obj1 = { color: tmp3 };
  obj.hoverEffect = obj1;
  const obj2 = { backgroundColor: str3 };
  const items = [obj2, closure_9.button, style];
  obj.style = items;
  const obj3 = { color: tmp3 };
  const items1 = [obj3, theme.fonts.regular, closure_9.text];
  obj.children = React.jsx(Text.Text, { style: items1, children });
  return React.jsx(PlatformPressable.PlatformPressable, Object.assign({}, defaultResult, obj));
}
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(Color);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_6 = ["screen", "params", "action", "href"];
let closure_7 = ["variant", "color", "android_ripple", "style", "children"];
let c8 = 40;
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ button: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 40 }, text: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, textAlign: "center" } });

export function Button(arg0) {
  if (!("screen" in arg0)) {
    if (!("action" in arg0)) {
      const _Object = Object;
      return <ButtonBase {...Object.assign({}, arg0)} />;
    }
  }
  return <ButtonLink {...Object.assign({}, arg0)} />;
}
