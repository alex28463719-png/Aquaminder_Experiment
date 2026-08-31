// Module ID: 813
// Function ID: 8886
// Name: DiscoverScreen
// Dependencies: [1, 363, 38, 119, 2, 501, 500, 251, 529, 512, 644, 669, 671, 689, 780]
// Exports: default

// Module 813 (DiscoverScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_8 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod501);
let closure_7 = module_1(_mod500);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15"), marginTop: require("module_20") };
obj.mainContainer = obj;
obj = { fontSize: require("module_28"), fontWeight: "bold" };
obj.title = obj;
obj.section = { marginBottom: require("module_0") };
let obj1 = { marginBottom: require("module_0") };
obj.sectionTitle = { fontSize: require("module_20"), fontWeight: "600", marginBottom: require("module_15") };
let obj3 = { backgroundColor: "#F0F7FE", borderRadius: require("module_12"), overflow: "hidden", marginBottom: require("module_15") };
obj.articleCard = obj3;
obj.featuredCard = {};
let obj2 = { fontSize: require("module_20"), fontWeight: "600", marginBottom: require("module_15") };
obj.smallCard = { margin: require("module_5") };
const obj5 = { width: "100%", height: require("module_150"), backgroundColor: "#E1EFFF" };
obj.featuredImage = obj5;
const obj6 = { width: "100%", height: require("module_100"), backgroundColor: "#E1EFFF", padding: require("get registerCallableModule") };
obj.smallImage = obj6;
const obj4 = { margin: require("module_5") };
obj.articleContent = { padding: require("module_15") };
const obj7 = { padding: require("module_15") };
obj.featuredTitle = { fontSize: require("module_14"), fontWeight: "600", marginBottom: require("module_5") };
const obj8 = { fontSize: require("module_14"), fontWeight: "600", marginBottom: require("module_5") };
obj.smallTitle = { fontSize: require("module_14"), fontWeight: "600", marginBottom: require("module_5") };
const obj9 = { fontSize: require("module_14"), fontWeight: "600", marginBottom: require("module_5") };
obj.articleDescription = { fontSize: require("module_14"), color: "#555", marginBottom: require("module_10") };
obj.readMoreContainer = { flexDirection: "row", alignItems: "center" };
const obj11 = { fontSize: require("module_14"), color: "#FFF", fontWeight: "500" };
obj.readMoreText = obj11;
obj.readMoreIcon = { marginLeft: 5 };
const obj12 = { flexDirection: "row", flexWrap: "wrap", marginHorizontal: require("module_4294967291") };
obj.tipsContainer = obj12;
const obj10 = { fontSize: require("module_14"), color: "#555", marginBottom: require("module_10") };
obj.updateCard = { backgroundColor: "#F0F7FE", borderRadius: require("module_12"), padding: require("module_15") };
const obj14 = { flexDirection: "row", alignItems: "center", marginBottom: require("module_10") };
obj.updateHeader = obj14;
const obj13 = { backgroundColor: "#F0F7FE", borderRadius: require("module_12"), padding: require("module_15") };
obj.updateTitle = { fontSize: require("module_16"), fontWeight: "600" };
const obj15 = { fontSize: require("module_16"), fontWeight: "600" };
obj.updateDescription = { fontSize: require("module_14"), color: "#555", marginBottom: require("module_15") };
const obj16 = { fontSize: require("module_14"), color: "#555", marginBottom: require("module_15") };
obj.updateButton = { backgroundColor: "#4285F4", borderRadius: require("module_8"), paddingVertical: require("module_10"), paddingHorizontal: require("module_15"), alignSelf: "flex-start" };
const obj17 = { backgroundColor: "#4285F4", borderRadius: require("module_8"), paddingVertical: require("module_10"), paddingHorizontal: require("module_15"), alignSelf: "flex-start" };
obj.updateButtonText = { fontSize: require("module_14"), fontWeight: "500" };
const obj18 = { fontSize: require("module_14"), fontWeight: "500" };
obj.cardImageBg = { width: "100%", height: require("module_328"), borderRadius: require("module_20"), marginBottom: require("module_15") };
const obj20 = { flex: 1, justifyContent: "space-between", paddingVertical: require("module_30"), paddingHorizontal: require("module_15") };
obj.cardFormate = obj20;
const obj21 = { backgroundColor: "#2B86C9", paddingHorizontal: require("module_3"), borderRadius: require("module_10"), overflow: "hidden", paddingVertical: require("module_5"), width: "50%", alignItems: "center", justifyContent: "center" };
obj.tagBg = obj21;
const obj22 = { color: "#FFF", fontSize: require("module_10"), fontWeight: "700", overflow: "hidden" };
obj.titleText = obj22;
const styles = StyleSheet.create(obj);

export default function DiscoverScreen() {
  _require = _require(529).useNavigation();
  dependencyMap = _require(512).useTranslation().t;
  const theme = _require(644).useTheme();
  closure_2 = closure_3.default(React.useState(false), 2)[1];
  const defaultResult = closure_3.default(React.useState(false), 2);
  [arr, closure_3] = closure_3.default(React.useState([]), 2);
  const effect = React.useEffect(() => {
    callback();
  }, []);
  React = (() => {
    closure_0 = closure_2.default(async () => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_2(true);
        const discoverApi = callback(table[11]).getDiscoverApi({}, {});
        discoverApi.then((data) => {
          closure_3_2(false);
          let discover;
          if (data != null) {
            data = data.data;
            if (data != null) {
              discover = data.discover;
            }
          }
          closure_3_3(discover);
        }).catch((arg0) => {
          closure_3_2(false);
        });
      }
    });
    return function getDiscoverData() {
      return callback(...arguments);
    };
  })();
  function renderCard(image, arg1) {
    closure_0 = image;
    let obj = { style: closure_1_9.cardImageBg };
    obj = {};
    image = undefined;
    if (image != null) {
      image = image.image;
    }
    obj.uri = image;
    obj.source = obj;
    obj.resizeMode = "contain";
    obj = { style: closure_1_9.cardFormate };
    const obj1 = { style: closure_1_9.tagBg };
    const obj2 = { style: closure_1_9.titleText };
    let title;
    if (image != null) {
      title = image.title;
    }
    obj2.children = title;
    obj1.children = <renderCard.Text style={closure_1_9.titleText} />;
    const items = [<renderCard.View style={closure_1_9.tagBg} />, ];
    const obj3 = {
      onPress() {
        image.navigate(closure_2_7.default.DiscoverDetail, { data: image });
      },
      children: <renderCard.Text style={closure_1_9.readMoreText}>{t(closure_1_6.default.READ_MORE)}</renderCard.Text>
    };
    items[1] = <renderCard.Pressable onPress={function onPress() {
      image.navigate(closure_2_7.default.DiscoverDetail, { data: image });
    }}><renderCard.Text style={closure_1_9.readMoreText}>{t(closure_1_6.default.READ_MORE)}</renderCard.Text></renderCard.Pressable>;
    obj.children = items;
    obj.children = <renderCard.View style={closure_1_9.cardFormate} />;
    return <renderCard.ImageBackground key={arg1} style={closure_1_9.cardFormate} />;
  }
  let obj = { edges: ["top"] };
  obj = { showsVerticalScrollIndicator: false };
  obj = {
    isBack: false,
    title: mod.default.NEW_LAUNCHES,
    rightIcon: _require(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(closure_1_7.default.User);
    }
  };
  let items = [
    React2.jsx(_require(671).Header, {
      isBack: false,
      title: mod.default.NEW_LAUNCHES,
      rightIcon: _require(689).Icons.userCircle,
      rightIconPress() {
        navigation.navigate(closure_1_7.default.User);
      }
    }),

  ];
  let obj1 = { style: closure_9.mainContainer };
  const defaultResult1 = closure_3.default(React.useState([]), 2);
  obj1.children = <renderCard.View style={closure_9.section}>{arr.map((image) => renderCard(image, arg1))}</renderCard.View>;
  items[1] = <renderCard.View style={closure_9.mainContainer} />;
  obj.children = items;
  obj.children = <renderCard.ScrollView isBack={false} title={mod.default.NEW_LAUNCHES} rightIcon={_require(689).Icons.userCircle} rightIconPress={function rightIconPress() {
    navigation.navigate(closure_1_7.default.User);
  }} />;
  return React2.jsx(_require(671).Container, {
    isBack: false,
    title: mod.default.NEW_LAUNCHES,
    rightIcon: _require(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(closure_1_7.default.User);
    }
  });
};
