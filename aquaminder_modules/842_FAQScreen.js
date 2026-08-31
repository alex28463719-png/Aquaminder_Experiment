// Module ID: 842
// Function ID: 9152
// Name: FAQScreen
// Dependencies: [1, 363, 38, 2, 119, 500, 501, 251, 644, 529, 512, 669, 671, 689, 780]
// Exports: default

// Module 842 (FAQScreen)
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
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(_mod501);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { backgroundColor: "#FFFFFF", borderRadius: require("module_8"), padding: require("module_15"), marginTop: require("module_20"), shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 };
obj.cardContainer = obj;
obj.titleContainer = { flexDirection: "row", alignItems: "center" };
let obj1 = { color: "#000", fontSize: require("module_15"), fontWeight: "500" };
obj.numText = obj1;
let obj2 = { color: "#000", fontSize: require("module_15"), fontWeight: "500", flex: 1, marginLeft: require("module_8") };
obj.queText = obj2;
let obj3 = { color: "#000", fontSize: require("module_15"), fontWeight: "300", marginTop: require("module_20") };
obj.ansText = obj3;
obj.noDataText = { textAlign: "center", marginTop: require("module_10") };
obj.loadingContainer = { flex: 1, alignItems: "center" };
const styles = StyleSheet.create(obj);

export default function FAQScreen() {
  const theme = _require(644).useTheme();
  _require = _require(529).useNavigation();
  const defaultResult = closure_3.default(React.useState(null), 2);
  dependencyMap = defaultResult[0];
  closure_2 = defaultResult[1];
  closure_3 = _require(529).useIsFocused();
  [arr, get_registerCallableModule] = closure_3.default(React.useState([]), 2);
  const defaultResult1 = closure_3.default(React.useState([]), 2);
  [tmp5, closure_5] = closure_3.default(React.useState(false), 2);
  const effect = React.useEffect(() => {
    if (closure_3) {
      callback();
    }
  }, []);
  const mod = (() => {
    closure_0 = closure_2.default(async () => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_5(true);
        const faqApi = callback(table[11]).getFaqApi({}, {});
        faqApi.then((data) => {
          closure_3_5(false);
          data = undefined;
          if (data != null) {
            data = data.data;
          }
          closure_3_4(data);
        }).catch((message) => {
          closure_3_5(false);
          const Alert = closure_4_4.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
      }
    });
    return function getUserDetail() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = {
    isBack: true,
    title: mod.default.FAQ,
    backPress() {
      navigation.goBack();
    }
  };
  let items = [
    React2.jsx(_require(671).Header, {
      isBack: true,
      title: mod.default.FAQ,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  obj = { style: closure_9.mainContainer };
  if (tmp5) {
    let obj1 = { style: closure_9.loadingContainer };
    let obj2 = { size: "small", color: theme.primary };
    obj1.children = <get registerCallableModule.ActivityIndicator size="small" color={theme.primary} />;
    let jsxResult = <get registerCallableModule.View style={closure_9.loadingContainer} />;
  } else {
    let length;
    if (arr != null) {
      length = arr.length;
    }
    if (length > 0) {
      let mapped;
      if (arr != null) {
        mapped = arr.map((question) => {
          const navigation = arg1;
          let obj = {
            style: closure_1_9.cardContainer,
            onPress() {
              closure_1_2(closure_0);
            }
          };
          obj = { style: closure_1_9.titleContainer };
          obj = { style: closure_1_9.numText, children: arg1 + 1 };
          const items = [<closure_1_4.Text style={closure_1_9.numText}>{arg1 + 1}</closure_1_4.Text>, , ];
          const obj1 = { style: closure_1_9.queText };
          question = undefined;
          if (question != null) {
            question = question.question;
          }
          obj1.children = question;
          items[1] = <closure_1_4.Text style={closure_1_9.queText} />;
          const obj2 = { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" };
          items[2] = closure_1_8.jsx(navigation(689).VectorIcons.chevronRight.component, { name: navigation(689).VectorIcons.chevronRight.name, size: 22, color: "#000" });
          obj.children = items;
          const items1 = [<closure_1_4.View style={closure_1_9.numText}>{arg1 + 1}</closure_1_4.View>, ];
          let jsxResult = dependencyMap === arg1;
          if (jsxResult) {
            const obj3 = { style: closure_1_9.ansText };
            let answer;
            if (question != null) {
              answer = question.answer;
            }
            obj3.children = answer;
            jsxResult = <closure_1_4.Text style={closure_1_9.ansText} />;
          }
          items1[1] = jsxResult;
          obj.children = items1;
          return <closure_1_4.Pressable key={arg1} style={closure_1_9.numText}>{arg1 + 1}</closure_1_4.Pressable>;
        });
      }
      jsxResult = mapped;
    } else {
      let obj3 = {};
      const obj4 = { style: closure_9.noDataText, children: _require(512).useTranslation().t(mod2.default.DATA_NOT_FOUND) };
      obj3.children = <get registerCallableModule.Text style={closure_9.noDataText}>{_require(512).useTranslation().t(mod2.default.DATA_NOT_FOUND)}</get registerCallableModule.Text>;
      jsxResult = <get registerCallableModule.View />;
    }
  }
  obj.children = jsxResult;
  items[1] = <get registerCallableModule.View style={closure_9.mainContainer} />;
  obj.children = items;
  return React2.jsxs(_require(671).Container, { style: closure_9.mainContainer });
};
