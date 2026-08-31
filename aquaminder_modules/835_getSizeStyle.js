// Module ID: 835
// Function ID: 9107
// Name: getSizeStyle
// Dependencies: [1, 203, 119, 2, 836, 251, 830, 837]

// Module 835 (getSizeStyle)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import NativeModule2 from "NativeModule" /* 830 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 836 */;
import _mod837 from "module_837" /* 837 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

function getSizeStyle(size) {
  if (BUTTON_SIZE_ICON === size) {
    return closure_9.iconSize;
  } else if (BUTTON_SIZE_WIDE === size) {
    return closure_9.wideSize;
  } else {
    return closure_9.standardSize;
  }
}
let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = _interopRequireWildcard(getIteratorFn);
let closure_3 = module_1(__INTERNAL_VIEW_CONFIG);
let closure_5 = ["onPress", "style", "color", "size"];
const NativeModule = NativeModule2.NativeModule;
const constants = NativeModule.getConstants();
const BUTTON_SIZE_WIDE = constants.BUTTON_SIZE_WIDE;
const BUTTON_SIZE_ICON = constants.BUTTON_SIZE_ICON;
const BUTTON_SIZE_STANDARD = constants.BUTTON_SIZE_STANDARD;
class GoogleSigninButton {
  constructor(arg0) {
    onPress = global.onPress;
    ({ color, size } = global);
    if (size === undefined) {
      size = BUTTON_SIZE_STANDARD;
    }
    defaultResult = onPress.default(global, closure_5);
    colorScheme = closure_2.useColorScheme();
    if (color != null) {
      colorScheme = color;
    }
    str = "light";
    if (colorScheme != null) {
      str = colorScheme;
    }
    items = [];
    items[0] = onPress;
    tmp3 = getSizeStyle(size);
    obj = {};
    obj.size = size;
    obj.onPress = closure_1.useCallback(() => {
      if (onPress != null) {
        onPress();
      }
    }, items);
    obj.color = str;
    StyleSheet = closure_2.StyleSheet;
    obj.style = StyleSheet.compose(tmp3, global.style);
    return closure_4.jsx(closure_3.default, Object.assign({}, defaultResult, obj));
  }
}
GoogleSigninButton.Size = { Icon: BUTTON_SIZE_ICON, Standard: BUTTON_SIZE_STANDARD, Wide: BUTTON_SIZE_WIDE };
GoogleSigninButton.Color = _mod837.Color;
let StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ iconSize: { width: 48, height: 48 }, standardSize: { width: 230, height: 48 }, wideSize: { width: 312, height: 48 } });

export { GoogleSigninButton };
