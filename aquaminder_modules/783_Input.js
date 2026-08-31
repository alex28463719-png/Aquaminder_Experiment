// Module ID: 783
// Function ID: 8069
// Name: Input
// Dependencies: [1, 119, 2, 251, 512, 644, 780]
// Exports: default

// Module 783 (Input)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import date from "date" /* 512 */;
import useTheme from "useTheme" /* 644 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flexDirection: "row", alignItems: "center", width: "100%", borderRadius: require("module_48"), paddingHorizontal: require("module_10") };
obj.container = obj;
obj = { flex: 1, height: require("module_48"), fontSize: require("module_14"), color: "#000" };
obj.input = obj;
obj.iconContainer = { marginLeft: require("module_8") };
let obj1 = { marginLeft: require("module_8") };
obj.leftIconContainer = { marginRight: require("module_8") };
const styles = StyleSheet.create(obj);

export default function Input(placeholderTextColor) {
  placeholderTextColor = placeholderTextColor.placeholderTextColor;
  let str = "gray";
  let str2 = "gray";
  ({ onChangeText, value, inputStyle, placeholder } = placeholderTextColor);
  if (placeholderTextColor !== undefined) {
    str2 = placeholderTextColor;
  }
  ({ rightIcon, borderColor, borderWidth, leftIcon } = placeholderTextColor);
  ({ keyboardType, onBlur, onFocus, containerStyle, secureTextEntry, iconPress, multiline } = placeholderTextColor);
  const t = date.useTranslation().t;
  const theme = useTheme.useTheme();
  let obj = {};
  const items = [closure_4.container, containerStyle, ];
  obj = {};
  if (borderColor) {
    str = borderColor;
  }
  obj.borderColor = str;
  let num = 0.4;
  if (borderWidth) {
    num = borderWidth;
  }
  obj.borderWidth = num;
  items[2] = obj;
  obj.style = items;
  let jsxResult = leftIcon;
  if (leftIcon) {
    obj = { style: closure_4.leftIconContainer, children: leftIcon };
    jsxResult = <get registerCallableModule.View style={closure_4.leftIconContainer}>{leftIcon}</get registerCallableModule.View>;
  }
  const items1 = [jsxResult, , ];
  const obj1 = { style: items2, onChangeText, value, placeholder };
  items2 = [closure_4.input, inputStyle];
  obj1.placeholderTextColor = str2;
  obj1.onFocus = onFocus;
  obj1.onBlur = onBlur;
  obj1.keyboardType = keyboardType;
  obj1.secureTextEntry = secureTextEntry;
  obj1.autoCapitalize = "none";
  obj1.multiline = multiline;
  items1[1] = <get registerCallableModule.TextInput style={items2} onChangeText={onChangeText} value={value} placeholder={placeholder} />;
  let jsxResult1 = rightIcon;
  if (rightIcon) {
    const obj2 = { style: closure_4.iconContainer, onPress: iconPress, children: rightIcon };
    jsxResult1 = <get registerCallableModule.Pressable style={closure_4.iconContainer} onPress={iconPress}>{rightIcon}</get registerCallableModule.Pressable>;
  }
  items1[2] = jsxResult1;
  obj.children = items1;
  return <get registerCallableModule.View />;
};
