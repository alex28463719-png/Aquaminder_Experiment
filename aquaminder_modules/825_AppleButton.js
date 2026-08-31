// Module ID: 825
// Function ID: 9047
// Name: AppleButton
// Dependencies: [1, 99, 119, 2, 251, 826]

// Module 825 (AppleButton)
import _defineProperty2 from "_defineProperty" /* 99 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import ButtonTexts from "ButtonTexts" /* 826 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

class AppleButton {
  constructor(arg0) {
    cornerRadius = global.cornerRadius;
    num = 5;
    ({ style, textStyle } = global);
    if (cornerRadius !== undefined) {
      num = cornerRadius;
    }
    DEFAULT = global.buttonStyle;
    if (DEFAULT === undefined) {
      tmp = closure_0;
      tmp2 = closure_1;
      DEFAULT = require("ButtonTexts").ButtonVariants.DEFAULT;
    }
    DEFAULT2 = global.buttonType;
    if (DEFAULT2 === undefined) {
      tmp3 = closure_0;
      tmp4 = closure_1;
      DEFAULT2 = require("ButtonTexts").ButtonTypes.DEFAULT;
    }
    ({ leftView, buttonText } = global);
    items = [, , , ];
    items[0] = closure_4.base;
    obj = {};
    obj.borderRadius = num;
    items[1] = obj;
    items[2] = closure_4[DEFAULT];
    items[3] = style;
    items1 = [, , ];
    items1[0] = closure_5.base;
    items1[1] = closure_5[DEFAULT];
    items1[2] = textStyle;
    if (!buttonText) {
      tmp5 = closure_0;
      tmp6 = closure_1;
      buttonText = require("ButtonTexts").ButtonTexts[DEFAULT2];
    }
    obj = { onPress: global.onPress, activeOpacity: 0.8, style: items };
    obj1 = { style: { flexDirection: "row" } };
    tmp7 = !leftView;
    tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = leftView;
    }
    items2 = [, ];
    items2[0] = tmp8;
    obj2 = { style: items1 };
    obj2.children = buttonText;
    items2[1] = closure_3.jsx(closure_2.Text, obj2);
    obj1.children = items2;
    obj.children = closure_3.jsxs(closure_2.View, obj1);
    return closure_3.jsx(closure_2.TouchableOpacity, obj);
  }
}
const _defineProperty = module_1(_defineProperty2);
const getIteratorFn = module_1(getIteratorFn2);
AppleButton.Style = ButtonTexts.ButtonVariants;
AppleButton.Type = ButtonTexts.ButtonTypes;
const StyleSheet = get_registerCallableModule.StyleSheet;
({ default: _default, default: _default2, default: _default3 } = _defineProperty);
const _default3Result = _default3({ base: { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 200, height: 40 } }, ButtonTexts.ButtonVariants.WHITE, { backgroundColor: "#fff" });
const styles = StyleSheet.create(_default(_default2(_default3({ base: { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 200, height: 40 } }, ButtonTexts.ButtonVariants.WHITE, { backgroundColor: "#fff" }), ButtonTexts.ButtonVariants.WHITE_OUTLINE, { backgroundColor: "#fff", borderWidth: 1, borderColor: "#000" }), ButtonTexts.ButtonVariants.BLACK, { backgroundColor: "#000" }));
const StyleSheet2 = get_registerCallableModule.StyleSheet;
({ default: _default4, default: _default5, default: _default6 } = _defineProperty);
const _default2Result = _default2(_default3({ base: { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 200, height: 40 } }, ButtonTexts.ButtonVariants.WHITE, { backgroundColor: "#fff" }), ButtonTexts.ButtonVariants.WHITE_OUTLINE, { backgroundColor: "#fff", borderWidth: 1, borderColor: "#000" });
const _default6Result = _default6({ base: { fontSize: 14 } }, ButtonTexts.ButtonVariants.WHITE, { color: "#000" });
const styles2 = StyleSheet2.create(_default4(_default5(_default6({ base: { fontSize: 14 } }, ButtonTexts.ButtonVariants.WHITE, { color: "#000" }), ButtonTexts.ButtonVariants.WHITE_OUTLINE, { color: "#000" }), ButtonTexts.ButtonVariants.BLACK, { color: "#fff" }));

export default AppleButton;
