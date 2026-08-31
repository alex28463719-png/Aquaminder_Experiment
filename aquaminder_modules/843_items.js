// Module ID: 843
// Function ID: 9166
// Name: items
// Dependencies: [1, 38, 2, 119, 500, 251, 644, 529, 512, 671, 689, 780]
// Exports: default

// Module 843 (items)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod500 from "module_500" /* 500 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_6 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_5 = module_1(_mod500);
let items = [{ title: "Clock settings" }, { title: "Frequency" }, { title: "Notifications" }, { title: "App updates" }];
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { backgroundColor: "#FFFFFF", borderRadius: require("module_8"), padding: require("module_15"), marginTop: require("module_20"), shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 };
obj.cardContainer = obj;
obj.titleContainer = { flexDirection: "row", alignItems: "center" };
let obj1 = { color: "#000", fontSize: require("module_15"), fontWeight: "500", flex: 1 };
obj.titleText = obj1;
const styles = StyleSheet.create(obj);

export default function SettingsScreen() {
  const theme = _require(644).useTheme();
  _require = _require(529).useNavigation();
  dependencyMap = closure_2.default(React.useState(null), 2)[1];
  const t = _require(512).useTranslation().t;
  let obj = {};
  obj = {
    isBack: true,
    title: mod.default.Settings,
    backPress() {
      navigation.goBack();
    }
  };
  items = [
    React2.jsx(_require(671).Header, {
      isBack: true,
      title: mod.default.Settings,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = {
    style: mainContainer.mainContainer,
    children: items.map((title) => {
      const navigation = arg1;
      let obj = {
        style: closure_1_8.cardContainer,
        onPress() {
          closure_1_1(closure_0);
        }
      };
      obj = { style: closure_1_8.titleContainer };
      obj = { style: closure_1_8.titleText };
      title = undefined;
      if (title != null) {
        title = title.title;
      }
      obj.children = title;
      items = [<closure_1_3.Text style={closure_1_8.titleText} />, ];
      const obj1 = { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" };
      items[1] = closure_1_6.jsx(navigation(689).VectorIcons.chevronRight.component, { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" });
      obj.children = items;
      obj.children = <closure_1_3.View style={closure_1_8.titleText} />;
      return <closure_1_3.Pressable key={arg1} style={closure_1_8.titleText} />;
    })
  };
  items[1] = <get registerCallableModule.View style={mainContainer.mainContainer}>{items.map((title) => {
    const navigation = arg1;
    let obj = {
      style: closure_1_8.cardContainer,
      onPress() {
        closure_1_1(closure_0);
      }
    };
    obj = { style: closure_1_8.titleContainer };
    obj = { style: closure_1_8.titleText };
    title = undefined;
    if (title != null) {
      title = title.title;
    }
    obj.children = title;
    items = [<closure_1_3.Text style={closure_1_8.titleText} />, ];
    const obj1 = { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" };
    items[1] = closure_1_6.jsx(navigation(689).VectorIcons.chevronRight.component, { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" });
    obj.children = items;
    obj.children = <closure_1_3.View style={closure_1_8.titleText} />;
    return <closure_1_3.Pressable key={arg1} style={closure_1_8.titleText} />;
  })}</get registerCallableModule.View>;
  obj.children = items;
  return React2.jsxs(_require(671).Container, {
    style: mainContainer.mainContainer,
    children: items.map((title) => {
      const navigation = arg1;
      let obj = {
        style: closure_1_8.cardContainer,
        onPress() {
          closure_1_1(closure_0);
        }
      };
      obj = { style: closure_1_8.titleContainer };
      obj = { style: closure_1_8.titleText };
      title = undefined;
      if (title != null) {
        title = title.title;
      }
      obj.children = title;
      items = [<closure_1_3.Text style={closure_1_8.titleText} />, ];
      const obj1 = { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" };
      items[1] = closure_1_6.jsx(navigation(689).VectorIcons.chevronRight.component, { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" });
      obj.children = items;
      obj.children = <closure_1_3.View style={closure_1_8.titleText} />;
      return <closure_1_3.Pressable key={arg1} style={closure_1_8.titleText} />;
    })
  });
};
