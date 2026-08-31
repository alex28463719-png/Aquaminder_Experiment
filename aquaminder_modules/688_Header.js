// Module ID: 688
// Function ID: 7877
// Name: Header
// Dependencies: [1, 2, 119, 251, 512, 644, 689, 780]
// Exports: default

// Module 688 (Header)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import date from "date" /* 512 */;
import useTheme from "useTheme" /* 644 */;
import CupVariants from "CupVariants" /* 689 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { width: "100%", paddingHorizontal: require("module_15"), height: require("module_50"), justifyContent: "center", backgroundColor: "#fff" };
obj.mainContainer = obj;
obj.topBox = { flexDirection: "row", alignItems: "center" };
obj = { fontSize: require("module_24"), fontWeight: "700" };
obj.pageTitleText = obj;
obj.userIcon = { height: require("module_40"), width: require("module_40") };
let obj2 = { fontSize: require("module_13"), fontWeight: "500", marginBottom: 0 };
obj.deviceNameText = obj2;
let obj1 = { height: require("module_40"), width: require("module_40") };
obj.backIconStyle = { height: require("module_10"), width: require("module_10") };
let obj3 = { height: require("module_10"), width: require("module_10") };
obj.backContainer = { marginRight: require("module_10"), height: require("module_20"), width: require("module_20"), justifyContent: "center", alignItems: "center" };
const styles = StyleSheet.create(obj);

export default function Header(isBack) {
  isBack = isBack.isBack;
  let flag = false;
  ({ title, children } = isBack);
  if (isBack !== undefined) {
    flag = isBack;
  }
  ({ rightIcon, deviceName } = isBack);
  ({ backPress, titleStyle, rightIconPress, deviceNameStyle } = isBack);
  const t = date.useTranslation().t;
  let obj = { style: closure_4.mainContainer };
  obj = { style: items };
  items = [closure_4.topBox, { justifyContent: "space-between" }];
  obj = { style: closure_4.topBox };
  const theme = useTheme.useTheme();
  if (flag) {
    const obj1 = { onPress: backPress };
    const items1 = [closure_4.backContainer];
    obj1.style = items1;
    const obj2 = { source: CupVariants.Icons.back, style: closure_4.backIconStyle };
    obj1.children = <get registerCallableModule.Image source={CupVariants.Icons.back} style={closure_4.backIconStyle} />;
    flag = <get registerCallableModule.TouchableOpacity onPress={backPress} />;
  }
  const items2 = [flag, , ];
  const obj3 = {};
  let jsxResult = deviceName;
  if (deviceName) {
    const obj4 = {};
    const items3 = [closure_4.deviceNameText, , ];
    const obj5 = { color: "#ABABAB" };
    items3[1] = obj5;
    items3[2] = deviceNameStyle;
    obj4.style = items3;
    obj4.children = t(deviceName);
    jsxResult = <get registerCallableModule.Text />;
  }
  const items4 = [jsxResult, ];
  const items5 = [closure_4.pageTitleText, { color: theme.text }, titleStyle];
  items4[1] = <get registerCallableModule.Text style={items5}>{t(title)}</get registerCallableModule.Text>;
  obj3.children = items4;
  items2[1] = <get registerCallableModule.View />;
  items2[2] = children;
  obj.children = items2;
  const items6 = [<get registerCallableModule.View style={closure_4.topBox} />, ];
  let jsxResult1 = rightIcon;
  if (rightIcon) {
    const obj7 = { onPress: rightIconPress };
    const obj8 = { source: rightIcon, style: closure_4.userIcon };
    obj7.children = <get registerCallableModule.Image source={rightIcon} style={closure_4.userIcon} />;
    jsxResult1 = <get registerCallableModule.TouchableOpacity onPress={rightIconPress} />;
  }
  items6[1] = jsxResult1;
  obj.children = items6;
  obj.children = <get registerCallableModule.View style={closure_4.topBox} />;
  return <get registerCallableModule.View style={closure_4.topBox} />;
};
