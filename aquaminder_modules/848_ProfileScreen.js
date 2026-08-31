// Module ID: 848
// Function ID: 9267
// Name: ProfileScreen
// Dependencies: [1, 6, 363, 38, 2, 119, 500, 501, 251, 644, 529, 512, 657, 669, 671, 689, 780]
// Exports: default

// Module 848 (ProfileScreen)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(asyncGeneratorStep);
let closure_4 = module_1(_slicedToArray);
let closure_6 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(_mod500);
let closure_8 = module_1(_mod501);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj = { marginTop: require("module_30") };
obj.menuContainer = obj;
let obj1 = { flexDirection: "row", alignItems: "center", paddingVertical: require("module_15"), borderBottomWidth: 1, borderBottomColor: "#F0F0F0", backgroundColor: "#FFFFFF" };
obj.menuItem = obj1;
const obj2 = { flex: 1, fontSize: require("module_16"), color: "#000000", fontWeight: "400", marginLeft: require("module_8") };
obj.menuText = obj2;
const styles = StyleSheet.create(obj);

export default function ProfileScreen() {
  const theme = _require(first[9]).useTheme();
  _require = _require(first[10]).useNavigation();
  const t = _require(first[11]).useTranslation().t;
  const defaultResult = closure_4.default(React.useState(null), 2);
  first = defaultResult[0];
  closure_2 = defaultResult[1];
  const effect = React.useEffect(() => {
    lib();
  }, []);
  closure_3 = (() => {
    closure_0 = lib.default(async () => {
      const tmp = yield closure_0(first[12]).getUserData();
      let id;
      if (tmp != null) {
        const user = tmp.user;
        if (user != null) {
          id = user.id;
        }
      }
      if (id) {
        const profileApi = callback(first[13]).getProfileApi(id, {}, {});
        profileApi.then((data) => {
          data = undefined;
          if (data != null) {
            data = data.data;
          }
          closure_3_2(data);
        }).catch((arg0) => {
          closure_3_2(null);
        });
        const nextPromise = profileApi.then((data) => {
          data = undefined;
          if (data != null) {
            data = data.data;
          }
          closure_3_2(data);
        });
      }
    });
    return function getUserDetail() {
      return callback(...arguments);
    };
  })();
  let obj = {};
  if (first) {
    let name;
    if (first != null) {
      name = first.name;
    }
    let NAME = name;
  } else {
    NAME = mod2.default.NAME;
  }
  obj.id = NAME;
  if (first) {
    let name1;
    if (first != null) {
      name1 = first.name;
    }
    let NAME2 = name1;
  } else {
    NAME2 = mod2.default.NAME;
  }
  obj.title = NAME2;
  obj.action = function action() {
    const obj = { isName: true };
    let name;
    if (first != null) {
      name = first.name;
    }
    obj.profileName = name;
    navigation.navigate(closure_1_7.default.ProfileEdit, obj);
  };
  let items = [obj];
  let social_login;
  if (first != null) {
    social_login = first.social_login;
  }
  if (social_login === false) {
    obj = {
      id: mod2.default.CHANGE_PASSWORD,
      title: mod2.default.CHANGE_PASSWORD,
      action() {
          navigation.navigate(closure_1_7.default.ProfileEdit, { isName: false });
        }
    };
    const items1 = [obj];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj = {
    id: mod2.default.DELETE_ACCOUNT,
    title: mod2.default.DELETE_ACCOUNT,
    action() {
      let Alert = closure_1_5.Alert;
      let obj = {
        text: closure_1_8.default.NO,
        onPress() {

        },
        style: "cancel"
      };
      const items = [obj, ];
      obj = {
        text: closure_1_8.default.YES,
        onPress: (() => {
          closure_0 = closure_3.default(async () => {
            if (obj) {
              return obj.resume();
            } else {
              const deleteAccountApiResult = callback(first[13]).deleteAccountApi({}, {});
              callback(first[13]).deleteAccountApi({}, {}).then((() => {
                closure_0 = closure_3.default(/* F9287 */ function*() { ... });
                return /* F9289 */ function() { ... };
              })()).catch((message) => {
                const Alert = closure_5_5.Alert;
                message = undefined;
                if (message != null) {
                  message = message.message;
                }
                Alert.alert(message);
              });
            }
          });
          return function onPress() {
            return callback(...arguments);
          };
        })()
      };
      items[1] = obj;
      obj = { cancelable: false };
      Alert.alert(closure_1_8.default.CONFIRM_ACCOUNT, closure_1_8.default.ARE_YOU_SURE_YOU_WANT_TO_DELETE_ACCOUNT, items, obj);
    }
  };
  const items3 = [obj];
  const combined = items.concat(closure_2.default(items2), items3);
  const obj1 = {};
  const items4 = [
    React2.jsx(_require(first[14]).Header, {
      isBack: true,
      title: mod.default.Profile,
      backPress() {
        navigation.goBack();
      }
    }),

  ];
  const obj3 = {
    style: closure_10.mainContainer,
    children: <get registerCallableModule.View style={closure_10.menuContainer}>{combined.map((action) => {
      let obj = { style: closure_1_10.menuItem, onPress: action.action };
      obj = { style: closure_1_10.menuText, children: action.title };
      const items = [<closure_1_5.Text style={closure_1_10.menuText}>{arg0.title}</closure_1_5.Text>, ];
      obj = { name: navigation(first[15]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" };
      items[1] = closure_1_9.jsx(navigation(first[15]).VectorIcons.chevronRight.component, { name: navigation(first[15]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" });
      obj.children = items;
      return <closure_1_5.TouchableOpacity key={arg0.id} name={navigation(first[15]).VectorIcons.chevronRight.name} size={24} color="#CCCCCC" />;
    })}</get registerCallableModule.View>
  };
  items4[1] = <get registerCallableModule.View style={closure_10.mainContainer}><get registerCallableModule.View style={closure_10.menuContainer}>{combined.map((action) => {
    let obj = { style: closure_1_10.menuItem, onPress: action.action };
    obj = { style: closure_1_10.menuText, children: action.title };
    const items = [<closure_1_5.Text style={closure_1_10.menuText}>{arg0.title}</closure_1_5.Text>, ];
    obj = { name: navigation(first[15]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" };
    items[1] = closure_1_9.jsx(navigation(first[15]).VectorIcons.chevronRight.component, { name: navigation(first[15]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" });
    obj.children = items;
    return <closure_1_5.TouchableOpacity key={arg0.id} name={navigation(first[15]).VectorIcons.chevronRight.name} size={24} color="#CCCCCC" />;
  })}</get registerCallableModule.View></get registerCallableModule.View>;
  obj1.children = items4;
  return React2.jsxs(_require(first[14]).Container, {});
};
