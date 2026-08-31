// Module ID: 782
// Function ID: 8067
// Name: CustomButton
// Dependencies: [1, 119, 2, 251, 780, 644]
// Exports: default

// Module 782 (CustomButton)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import useTheme from "useTheme" /* 644 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { height: require("module_48"), width: "100%", borderWidth: 0.2, borderColor: "gray" };
obj.buttonContainer = obj;
obj = { fontSize: require("module_16"), textAlign: "center", lineHeight: require("module_22"), fontWeight: "bold" };
obj.buttonText = obj;
obj.leftIconStyle = { height: require("module_24"), width: require("module_24"), marginLeft: require("module_10") };
let obj1 = { height: require("module_24"), width: require("module_24"), marginLeft: require("module_10") };
obj.rightIconStyle = { height: require("module_20"), width: require("module_20"), marginRight: require("module_5") };
obj.defaultButtonContainer = { height: "100%", alignItems: "center", justifyContent: "center", width: "100%", flexDirection: "row" };
let obj3 = { height: require("module_48"), width: require("module_48"), borderWidth: 0.2, borderColor: "gray", borderRadius: require("module_48"), alignItems: "center", justifyContent: "center" };
obj.socialButtonContainer = obj3;
let obj2 = { height: require("module_20"), width: require("module_20"), marginRight: require("module_5") };
obj.socialIconStyle = { height: require("module_22"), width: require("module_22") };
let obj5 = { height: require("module_48"), width: "100%", borderWidth: 0.2, borderColor: "gray", justifyContent: "center", alignItems: "center" };
obj.loadingContainer = obj5;
const styles = StyleSheet.create(obj);

export default function CustomButton(marginTop) {
  ({ containerStyle, rightIcon, onPress, borderRadius } = marginTop);
  ({ btnText, btnStyle } = marginTop);
  if (borderRadius === undefined) {
    borderRadius = PREDEF_RES.perfectSize(48);
  }
  marginTop = marginTop.marginTop;
  let num3 = 0;
  if (marginTop !== undefined) {
    num3 = marginTop;
  }
  const marginBottom = marginTop.marginBottom;
  let num4 = 0;
  if (marginBottom !== undefined) {
    num4 = marginBottom;
  }
  let textStyle = marginTop.textStyle;
  if (textStyle === undefined) {
    textStyle = {};
  }
  ({ backgroundColor, rightIconStyle, leftIcon, disable } = marginTop);
  let flag = false;
  if (disable !== undefined) {
    flag = disable;
  }
  ({ textColor, rightTintColor, isLoading } = marginTop);
  let flag2 = false;
  ({ leftTintColor, isSocial, socialContainerStyle } = marginTop);
  if (isLoading !== undefined) {
    flag2 = isLoading;
  }
  const theme = useTheme.useTheme();
  const jsx = React.jsx;
  if (isSocial) {
    let obj = { disabled: flag };
    const items = [closure_4.socialButtonContainer, , ];
    obj = {};
    if (!backgroundColor) {
      backgroundColor = theme.white;
    }
    obj.backgroundColor = backgroundColor;
    items[1] = obj;
    items[2] = socialContainerStyle;
    obj.style = items;
    obj.onPress = onPress;
    const obj1 = { source: rightIcon, resizeMode: "contain" };
    const items1 = [closure_4.socialIconStyle, rightIconStyle];
    obj1.style = items1;
    obj1.tintColor = rightTintColor;
    obj.children = <get registerCallableModule.Image source={rightIcon} resizeMode="contain" />;
    let jsxResult = <tmp4.TouchableOpacity />;
  } else if (flag2) {
    const obj2 = {};
    const items2 = [closure_4.loadingContainer, , ];
    const obj3 = { marginTop: num3, marginBottom: num4, borderRadius };
    let primary = backgroundColor;
    if (!backgroundColor) {
      primary = theme.primary;
    }
    obj3.backgroundColor = primary;
    items2[1] = obj3;
    items2[2] = containerStyle;
    obj2.style = items2;
    const obj4 = { size: "small", color: theme.white };
    obj2.children = <get registerCallableModule.ActivityIndicator size="small" color={theme.white} />;
    jsxResult = <tmp4.View />;
  } else {
    const obj5 = { disabled: flag };
    const items3 = [closure_4.buttonContainer, , ];
    const obj6 = { marginTop: num3, marginBottom: num4, borderRadius };
    let white = backgroundColor;
    if (!backgroundColor) {
      white = theme.white;
    }
    obj6.backgroundColor = white;
    items3[1] = obj6;
    items3[2] = containerStyle;
    obj5.style = items3;
    obj5.onPress = onPress;
    const obj7 = {};
    const items4 = [closure_4.defaultButtonContainer, , ];
    const obj8 = { borderRadius };
    items4[1] = obj8;
    items4[2] = btnStyle;
    obj7.style = items4;
    let jsxResult1 = rightIcon;
    if (rightIcon) {
      const obj9 = { source: rightIcon, resizeMode: "contain" };
      const items5 = [closure_4.rightIconStyle, rightIconStyle];
      obj9.style = items5;
      obj9.tintColor = rightTintColor;
      jsxResult1 = <get registerCallableModule.Image source={rightIcon} resizeMode="contain" />;
    }
    const items6 = [jsxResult1, , ];
    const obj10 = { numberOfLines: 1 };
    const items7 = [closure_4.buttonText, textStyle, ];
    const obj11 = {};
    if (!textColor) {
      textColor = theme.black;
    }
    obj11.color = textColor;
    items7[2] = obj11;
    obj10.style = items7;
    obj10.children = btnText;
    items6[1] = <get registerCallableModule.Text numberOfLines={1} />;
    let jsxResult2 = leftIcon;
    if (leftIcon) {
      const obj12 = { source: leftIcon, style: closure_4.leftIconStyle, tintColor: leftTintColor };
      jsxResult2 = <get registerCallableModule.Image source={leftIcon} style={closure_4.leftIconStyle} tintColor={leftTintColor} />;
    }
    items6[2] = jsxResult2;
    obj7.children = items6;
    obj5.children = <get registerCallableModule.View />;
    jsxResult = <tmp4.TouchableOpacity disabled={flag} />;
  }
  return jsxResult;
};
