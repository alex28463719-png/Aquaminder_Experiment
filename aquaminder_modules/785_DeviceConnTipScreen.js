// Module ID: 785
// Function ID: 8073
// Name: DeviceConnTipScreen
// Dependencies: [1, 119, 2, 701, 703, 500, 501, 251, 512, 529, 644, 671, 780]
// Exports: default

// Module 785 (DeviceConnTipScreen)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import Button from "Button" /* 701 */;
import Button2 from "Button" /* 703 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
let closure_3 = module_1(Button);
let closure_4 = module_1(Button2);
let closure_5 = module_1(_mod500);
let closure_6 = module_1(_mod501);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = { container: { flex: 1, backgroundColor: "#FFFFFF" }, scrollContainer: { flex: 1, backgroundColor: "#FFFFFF" } };
obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFFFFF", paddingTop: require("module_20"), paddingBottom: require("module_20"), paddingHorizontal: require("module_5"), borderBottomWidth: 1, borderBottomColor: "#F0F0F0" };
obj.header = obj;
obj = { padding: require("module_5") };
obj.backButton = obj;
obj.content = { padding: require("module_20"), paddingTop: require("module_20") };
let obj2 = { backgroundColor: "#F0F7FE", borderRadius: require("module_12"), padding: require("module_20"), marginBottom: require("module_20"), alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 };
obj.tipCard = obj2;
let obj3 = { width: require("module_60"), height: require("module_60"), borderRadius: require("module_30"), backgroundColor: "#E0EFFF", justifyContent: "center", alignItems: "center", marginBottom: require("module_15") };
obj.iconContainer = obj3;
let obj1 = { padding: require("module_20"), paddingTop: require("module_20") };
obj.tipTitle = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_10") };
let obj5 = { fontSize: require("module_14"), color: "#4B5F6D", textAlign: "center", lineHeight: require("module_20") };
obj.tipText = obj5;
let obj6 = { borderRadius: require("module_10"), padding: require("module_15"), flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: require("module_20"), marginBottom: require("module_15") };
obj.button = obj6;
let obj4 = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_10") };
obj.buttonText = { fontSize: require("module_16"), fontWeight: "600" };
let obj8 = { padding: require("module_15"), flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.secondaryButton = obj8;
let obj7 = { fontSize: require("module_16"), fontWeight: "600" };
obj.secondaryButtonText = { fontSize: require("module_16"), fontWeight: "500" };
const styles = StyleSheet.create(obj);

export default function DeviceConnTipScreen() {
  const t = _require(512).useTranslation().t;
  _require = _require(529).useNavigation();
  const theme = _require(644).useTheme();
  let obj = {};
  obj = {
    isBack: true,
    title: t(mod3.default.CONNECTION_TIPS),
    backPress() {
      navigation.goBack();
    }
  };
  const items = [
    React.jsx(_require(671).Header, {
      isBack: true,
      title: t(mod3.default.CONNECTION_TIPS),
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: closure_8.scrollContainer, showsVerticalScrollIndicator: false };
  const obj1 = { style: closure_8.content };
  const obj2 = { style: closure_8.tipCard };
  const obj4 = { name: "bluetooth", size: 40, color: theme.primary };
  const items1 = [<get registerCallableModule.View style={closure_8.iconContainer}><mod.default name="bluetooth" size={40} color={theme.primary} /></get registerCallableModule.View>, , ];
  const obj3 = { style: closure_8.iconContainer, children: <mod.default name="bluetooth" size={40} color={theme.primary} /> };
  const items2 = [closure_8.tipTitle, { color: theme.primary }];
  items1[1] = <get registerCallableModule.Text style={items2}>{t(mod3.default.ENABLE_BLUETOOTH)}</get registerCallableModule.Text>;
  const obj5 = { style: items2, children: t(mod3.default.ENABLE_BLUETOOTH) };
  items1[2] = <get registerCallableModule.Text style={closure_8.tipText}>{t(mod3.default.MAKE_SURE_YOUR_DEVICES_BLUETOOTH_IS_TURNED_ON)}</get registerCallableModule.Text>;
  obj2.children = items1;
  const items3 = [<get registerCallableModule.View style={closure_8.tipCard} />, , , , ];
  const obj7 = { style: closure_8.tipCard };
  const obj6 = { style: closure_8.tipText, children: t(mod3.default.MAKE_SURE_YOUR_DEVICES_BLUETOOTH_IS_TURNED_ON) };
  const obj9 = { name: "battery-high", size: 40, color: theme.primary };
  const items4 = [<get registerCallableModule.View style={closure_8.iconContainer}><mod2.default name="battery-high" size={40} color={theme.primary} /></get registerCallableModule.View>, , ];
  const items5 = [closure_8.tipTitle, { color: theme.primary }];
  items4[1] = <get registerCallableModule.Text style={items5}>{mod3.default.CHECK_BATTERY}</get registerCallableModule.Text>;
  const obj10 = { style: items5, children: mod3.default.CHECK_BATTERY };
  const obj8 = { style: closure_8.iconContainer, children: <mod2.default name="battery-high" size={40} color={theme.primary} /> };
  items4[2] = <get registerCallableModule.Text style={closure_8.tipText}>{t(mod3.default.ENSURE_YOUR_CUP_HAS_SUFFICIENT_BATTERY_POWER)}</get registerCallableModule.Text>;
  obj7.children = items4;
  items3[1] = <get registerCallableModule.View style={closure_8.tipCard} />;
  const obj12 = { style: closure_8.tipCard };
  const obj11 = { style: closure_8.tipText, children: t(mod3.default.ENSURE_YOUR_CUP_HAS_SUFFICIENT_BATTERY_POWER) };
  const obj14 = { name: "signal-distance-variant", size: 40, color: theme.primary };
  const items6 = [<get registerCallableModule.View style={closure_8.iconContainer}><mod2.default name="signal-distance-variant" size={40} color={theme.primary} /></get registerCallableModule.View>, , ];
  const obj13 = { style: closure_8.iconContainer, children: <mod2.default name="signal-distance-variant" size={40} color={theme.primary} /> };
  const items7 = [closure_8.tipTitle, { color: theme.primary }];
  items6[1] = <get registerCallableModule.Text style={items7}>{t(mod3.default.KEEP_CLOSE)}</get registerCallableModule.Text>;
  const obj15 = { style: items7, children: t(mod3.default.KEEP_CLOSE) };
  items6[2] = <get registerCallableModule.Text style={closure_8.tipText}>{t(mod3.default.YOUR_CUP_SHOULD_BE_WITHIN_10_METERS)}</get registerCallableModule.Text>;
  obj12.children = items6;
  items3[2] = <get registerCallableModule.View style={closure_8.tipCard} />;
  const obj17 = {
    style: items8,
    onPress() {
      return navigation.navigate(closure_1_5.default.Main);
    }
  };
  items8 = [closure_8.button, { backgroundColor: theme.primary }];
  const obj18 = { name: "arrow-forward", size: 20, color: theme.white, style: { marginRight: 8 } };
  const items9 = [<mod.default name="arrow-forward" size={20} color={theme.white} style={{ marginRight: 8 }} />, ];
  const obj16 = { style: closure_8.tipText, children: t(mod3.default.YOUR_CUP_SHOULD_BE_WITHIN_10_METERS) };
  const items10 = [closure_8.buttonText, { color: theme.white }];
  items9[1] = <get registerCallableModule.Text style={items10}>{t(mod3.default.CONTINUE_TO_APP)}</get registerCallableModule.Text>;
  obj17.children = items9;
  items3[3] = <get registerCallableModule.TouchableOpacity style={items8} onPress={function onPress() {
    return navigation.navigate(closure_1_5.default.Main);
  }} />;
  const obj20 = {
    style: closure_8.secondaryButton,
    onPress() {
      return navigation.goBack();
    }
  };
  const obj21 = { name: "refresh", size: 20, color: theme.primary, style: { marginRight: 8 } };
  const items11 = [<mod.default name="refresh" size={20} color={theme.primary} style={{ marginRight: 8 }} />, ];
  const obj19 = { style: items10, children: t(mod3.default.CONTINUE_TO_APP) };
  const items12 = [closure_8.secondaryButtonText, { color: theme.primary }];
  items11[1] = <get registerCallableModule.Text style={items12}>{t(mod3.default.TRY_CONNECTING_AGAIN)}</get registerCallableModule.Text>;
  obj20.children = items11;
  items3[4] = <get registerCallableModule.TouchableOpacity style={closure_8.secondaryButton} onPress={function onPress() {
    return navigation.goBack();
  }} />;
  obj1.children = items3;
  obj.children = <get registerCallableModule.View style={closure_8.content} />;
  items[1] = <get registerCallableModule.ScrollView style={closure_8.scrollContainer} showsVerticalScrollIndicator={false} />;
  obj.children = items;
  return React.jsxs(_require(671).Container, { style: closure_8.scrollContainer, showsVerticalScrollIndicator: false });
};
