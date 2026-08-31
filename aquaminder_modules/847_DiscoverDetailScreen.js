// Module ID: 847
// Function ID: 9264
// Name: DiscoverDetailScreen
// Dependencies: [1, 2, 119, 251, 529, 671, 780]
// Exports: default

// Module 847 (DiscoverDetailScreen)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { height: require("module_250"), width: "100%", borderRadius: require("module_15") };
obj.imageContainer = obj;
obj.titleText = { fontSize: require("module_18"), fontWeight: "600", marginTop: require("module_20"), color: "#000" };
let obj1 = { fontSize: require("module_18"), fontWeight: "600", marginTop: require("module_20"), color: "#000" };
obj.detailText = { fontSize: require("module_15"), fontWeight: "400", marginTop: require("module_20"), color: "#000" };
const styles = StyleSheet.create(obj);

export default function DiscoverDetailScreen() {
  _require = _require(529).useNavigation();
  const data = _require(529).useRoute().params.data;
  let obj = {};
  obj = {
    isBack: true,
    title: "",
    backPress() {
      navigation.goBack();
    }
  };
  const items = [
    React.jsx(_require(671).Header, {
      isBack: true,
      title: "",
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: closure_4.mainContainer };
  const obj1 = {};
  const obj2 = {};
  let image;
  if (data != null) {
    image = data.image;
  }
  obj2.uri = image;
  obj1.source = obj2;
  obj1.style = closure_4.imageContainer;
  obj1.resizeMode = "contain";
  const items1 = [<get registerCallableModule.Image />, , ];
  const obj3 = { style: closure_4.titleText };
  let title;
  if (data != null) {
    title = data.title;
  }
  obj3.children = title;
  items1[1] = <get registerCallableModule.Text style={closure_4.titleText} />;
  const obj4 = { style: closure_4.detailText };
  let detail;
  if (data != null) {
    detail = data.detail;
  }
  obj4.children = detail;
  items1[2] = <get registerCallableModule.Text style={closure_4.detailText} />;
  obj.children = items1;
  items[1] = <get registerCallableModule.View style={closure_4.mainContainer} />;
  obj.children = items;
  return React.jsxs(_require(671).Container, { style: closure_4.mainContainer });
};
