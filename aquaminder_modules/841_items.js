// Module ID: 841
// Function ID: 9148
// Name: items
// Dependencies: [1, 2, 119, 500, 251, 689, 644, 529, 512, 671, 780]
// Exports: default

// Module 841 (items)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _mod500 from "module_500" /* 500 */;
import CupVariants from "CupVariants" /* 689 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
let closure_3 = module_1(_mod500);
let obj = { title: "Telephone", icon: CupVariants.Icons.tel, desc: "+8613312913000" };
let items = [obj, , ];
obj = { title: "Mailbox", icon: CupVariants.Icons.email, desc: "2256004419@qq.com" };
items[1] = obj;
obj = { title: "Address", icon: CupVariants.Icons.locationIcon, desc: "1801-01, Building B1, Phase I B, Baoneng Technology Park (South District), Qinghu Industrial Zone, Gangtou Community, Bantian Street, Longgang District, Shenzhen City" };
items[2] = obj;
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj1 = { mainContainer: { flex: 1, paddingHorizontal: require("module_15") } };
let obj2 = { flex: 1, paddingHorizontal: require("module_15") };
obj1.logo = { height: require("module_70"), width: require("module_70"), alignSelf: "center", marginTop: require("module_20"), marginBottom: require("module_20") };
const obj4 = { flexDirection: "row", marginTop: require("module_10"), overflow: "hidden", paddingHorizontal: require("module_8"), paddingVertical: require("module_5") };
obj1.cardContainer = obj4;
const obj3 = { height: require("module_70"), width: require("module_70"), alignSelf: "center", marginTop: require("module_20"), marginBottom: require("module_20") };
obj1.iconStyle = { height: require("module_20"), width: require("module_20"), marginRight: require("module_10"), marginTop: require("module_1") };
const obj5 = { height: require("module_20"), width: require("module_20"), marginRight: require("module_10"), marginTop: require("module_1") };
obj1.titleText = { fontSize: require("module_18"), fontWeight: "600" };
const obj6 = { fontSize: require("module_18"), fontWeight: "600" };
obj1.descText = { fontSize: require("module_16"), fontWeight: "400", marginTop: require("module_10") };
const styles = StyleSheet.create(obj1);

export default function AboutScreen() {
  _require = _require(644).useTheme();
  dependencyMap = _require(529).useNavigation();
  const t = _require(512).useTranslation().t;
  let obj = {};
  obj = {
    isBack: true,
    title: mod.default.About,
    backPress() {
      navigation.goBack();
    }
  };
  items = [
    React.jsx(_require(671).Header, {
      isBack: true,
      title: mod.default.About,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: closure_6.mainContainer };
  let items1 = [<get registerCallableModule.Image source={_require(689).Icons.logo} style={closure_6.logo} resizeMode="contain" />, ];
  let mapped;
  if (items != null) {
    mapped = items.map((icon) => {
      let obj = { style: closure_1_6.cardContainer };
      obj = {};
      icon = undefined;
      if (icon != null) {
        icon = icon.icon;
      }
      obj.source = icon;
      obj.style = closure_1_6.iconStyle;
      obj.resizeMode = "contain";
      obj.tintColor = black.black;
      items = [<closure_1_2.Image />, ];
      obj = { style: { flex: 1 } };
      const obj1 = { style: closure_1_6.titleText };
      let title;
      if (icon != null) {
        title = icon.title;
      }
      obj1.children = title;
      const items1 = [<closure_1_2.Text style={closure_1_6.titleText} />, ];
      const obj2 = { style: closure_1_6.descText };
      let desc;
      if (icon != null) {
        desc = icon.desc;
      }
      obj2.children = desc;
      items1[1] = <closure_1_2.Text style={closure_1_6.descText} />;
      obj.children = items1;
      items[1] = <closure_1_2.View style={{ flex: 1 }} />;
      obj.children = items;
      return <closure_1_2.View key={arg1} style={{ flex: 1 }} />;
    });
  }
  items1[1] = mapped;
  obj.children = items1;
  items[1] = <get registerCallableModule.View style={closure_6.mainContainer} />;
  obj.children = items;
  return React.jsxs(_require(671).Container, { style: closure_6.mainContainer });
};
