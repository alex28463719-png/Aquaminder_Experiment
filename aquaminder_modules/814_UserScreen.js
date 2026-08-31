// Module ID: 814
// Function ID: 8901
// Name: UserScreen
// Dependencies: [1, 363, 38, 119, 2, 500, 501, 815, 658, 251, 512, 529, 644, 657, 669, 646, 689, 671, 780]
// Exports: default

// Module 814 (UserScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import _mod658 from "module_658" /* 658 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import _mod815 from "module_815" /* 815 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_10 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(_mod501);
let closure_8 = module_1(_mod815);
let closure_9 = module_1(_mod658);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.mainContainer = obj;
obj.scrollContainer = { flex: 1, backgroundColor: "#FFFFFF" };
obj = { marginTop: require("module_10"), borderBottomWidth: 1, borderBottomColor: "#F0F0F0" };
obj.line = obj;
obj.backButton = { padding: require("module_5") };
let obj2 = { flexDirection: "row", alignItems: "center", marginTop: require("module_20") };
obj.profileSection = obj2;
let obj1 = { padding: require("module_5") };
obj.avatar = { width: require("module_70"), height: require("module_70"), borderRadius: require("module_35"), backgroundColor: "#FFFFFF" };
let obj4 = { width: require("module_70"), height: require("module_70"), borderRadius: require("module_35"), backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" };
obj.avatarPlaceholder = obj4;
let obj3 = { width: require("module_70"), height: require("module_70"), borderRadius: require("module_35"), backgroundColor: "#FFFFFF" };
obj.profileInfo = { marginLeft: require("module_5") };
let obj6 = { fontSize: require("module_20"), fontWeight: "bold", color: "#000", marginBottom: require("module_5") };
obj.userName = obj6;
let obj5 = { marginLeft: require("module_5") };
obj.userEmail = { fontSize: require("module_14"), color: "#000" };
let obj8 = { flexDirection: "row", backgroundColor: "#F0F7FE", borderRadius: require("module_10"), marginTop: require("module_10"), padding: require("module_15"), shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 };
obj.statsContainer = obj8;
obj.statItem = { flex: 1, alignItems: "center" };
let obj9 = { fontSize: require("module_18"), fontWeight: "bold", color: "#0066B0", marginBottom: require("module_5") };
obj.statValue = obj9;
let obj7 = { fontSize: require("module_14"), color: "#000" };
obj.statLabel = { fontSize: require("module_12"), color: "#666" };
obj.statDivider = { width: 1, height: "80%", backgroundColor: "#EEEEEE" };
let obj10 = { fontSize: require("module_12"), color: "#666" };
obj.menuContainer = { marginTop: require("module_30") };
let obj12 = { flexDirection: "row", alignItems: "center", paddingVertical: require("module_15"), borderBottomWidth: 1, borderBottomColor: "#F0F0F0", backgroundColor: "#FFFFFF" };
obj.menuItem = obj12;
let obj11 = { marginTop: require("module_30") };
obj.menuIcon = { marginRight: require("module_15") };
let obj14 = { flex: 1, fontSize: require("module_16"), color: "#000000", fontWeight: "400", marginLeft: require("module_8") };
obj.menuText = obj14;
let obj15 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: require("module_30"), paddingVertical: require("module_15"), borderRadius: require("module_10"), backgroundColor: "#FFF0F0", borderWidth: 1, borderColor: "#FF6B6B", marginBottom: require("module_5") };
obj.logoutButton = obj15;
let obj13 = { marginRight: require("module_15") };
obj.logoutIcon = { marginRight: require("module_10") };
let obj17 = { fontSize: require("module_16"), color: "#F44336", fontWeight: "600" };
obj.logoutText = obj17;
let obj16 = { marginRight: require("module_10") };
obj.versionText = { textAlign: "center", marginTop: require("module_20"), marginBottom: require("module_5"), fontSize: require("module_12"), color: "#999" };
obj.btnContainer = { position: "absolute", bottom: 20, width: "100%", alignSelf: "center" };
let obj18 = { textAlign: "center", marginTop: require("module_20"), marginBottom: require("module_5"), fontSize: require("module_12"), color: "#999" };
obj.menuIconStyle = { height: require("module_18"), width: require("module_18") };
obj.webview = { flex: 1 };
const styles = StyleSheet.create(obj);

export default function UserScreen() {
  _require = _require(529).useNavigation();
  dependencyMap = _require(644).useTheme();
  const defaultResult = closure_3.default(React.useState(null), 2);
  const first = defaultResult[0];
  closure_2 = defaultResult[1];
  [tmp4, closure_3] = closure_3.default(React.useState(false), 2);
  React = _require(529).useIsFocused();
  const defaultResult1 = closure_3.default(React.useState(false), 2);
  [tmp6, get_registerCallableModule] = closure_3.default(React.useState(null), 2);
  const defaultResult2 = closure_3.default(React.useState(null), 2);
  [closure_6, closure_7] = closure_3.default(React.useState(null), 2);
  const effect = React.useEffect(() => {
    if (closure_4) {
      callback2();
      callback3();
    }
  }, []);
  const mod2 = (() => {
    closure_0 = lib.default(async () => {
      const tmp = yield closure_0(closure_1[13]).getUserData();
      let id;
      if (tmp != null) {
        const user = tmp.user;
        if (user != null) {
          id = user.id;
        }
      }
      const profileApi = callback(669).getProfileApi(id, {}, {});
      profileApi.then((data) => {
        data = undefined;
        if (data != null) {
          data = data.data;
        }
        closure_3_5(data);
      }).catch((arg0) => {

      });
    });
    return function getUserDetail() {
      return callback(...arguments);
    };
  })();
  closure_9 = (() => {
    closure_0 = lib.default(async () => {
      try {
        const tmp3 = yield mod.default.getItem("deviceData");
        let parsed = null;
        if (tmp3) {
          const _JSON = JSON;
          parsed = JSON.parse(tmp3);
        }
        if (parsed) {
          if (tmp8.deviceId) {
            const tmp12 = yield closure_0(closure_1[15]).connectDevice(parsed);
            if (tmp12) {
              const obj = {};
              let id;
              if (tmp13 != null) {
                id = tmp13.id;
              }
              obj.deviceId = id;
              let mac;
              if (tmp13 != null) {
                mac = tmp13.mac;
              }
              obj.mac = mac;
              let deviceImage;
              if (tmp13 != null) {
                deviceImage = tmp12.deviceImage;
              }
              let str2 = deviceImage;
              if (!deviceImage) {
                str2 = "Default";
              }
              obj.deviceImage = str2;
              closure_2_7(Object.assign({}, tmp13, obj));
            } else {
              closure_2_7(null);
            }
          }
        }
      } catch (err) {
        closure_2_7(null);
      }
    });
    return function checkConnectDevice() {
      return callback(...arguments);
    };
  })();
  let obj = {
    id: mod.default.MY_PROFILE,
    title: mod.default.MY_PROFILE,
    iconName: _require(689).Icons.profile,
    action() {
      callback(false);
      navigation.navigate(closure_1_6.default.Profile);
    }
  };
  let items = [obj, , ];
  obj = {
    id: mod.default.FAQ,
    title: mod.default.FAQ,
    iconName: _require(689).Icons.faq,
    action() {
      callback(false);
      navigation.navigate(closure_1_6.default.FAQ);
    }
  };
  items[1] = obj;
  obj = {
    id: mod.default.CONTACT_US,
    title: mod.default.CONTACT_US,
    iconName: _require(689).Icons.about,
    action() {
      callback(false);
      navigation.navigate(closure_1_6.default.ContactUs);
    }
  };
  items[2] = obj;
  const React2 = (() => {
    closure_0 = lib.default(async () => {
      if (obj) {
        return obj.resume();
      } else {
        const Alert = closure_3_5.Alert;
        obj = {
          text: closure_3_7.default.NO,
          onPress() {

            },
          style: "cancel"
        };
        const items = [obj, ];
        obj = {
          text: closure_3_7.default.YES,
          onPress: (() => {
              closure_0 = closure_2.default(async () => {
                yield closure_0(closure_1[13]).clearUserData();
                yield closure_0(closure_1[13]).clearAsyncStorate();
                yield closure_0(closure_1[15]).closeBLEConnection(closure_5_6);
                navigation.navigate(closure_6_6.default.Login);
              });
              return function onPress() {
                return callback(...arguments);
              };
            })()
        };
        items[1] = obj;
        const obj1 = { cancelable: false };
        Alert.alert(closure_3_7.default.CONFIRM_LOGOUT, closure_3_7.default.ARE_YOU_SURE_YOU_WANT_TO_LOGOUT, items, obj1);
      }
    });
    return function handleLogout() {
      return callback(...arguments);
    };
  })();
  let obj1 = {};
  if (tmp4) {
    if (first) {
      const obj2 = {};
      const obj3 = {
        isBack: true,
        title: "",
        backPress() {
              lib(null);
              callback(false);
            }
      };
      const items1 = [
        React2.jsx(_require(671).Header, {
              isBack: true,
              title: "",
              backPress() {
                    lib(null);
                    callback(false);
                  }
            }),

      ];
      const obj4 = {};
      const obj5 = { uri: first };
      obj4.source = obj5;
      obj4.style = closure_11.webview;
      items1[1] = <mod2.default />;
      obj2.children = items1;
      let jsxsResult = React2.jsxs(_require(671).Container, {});
    }
    obj1.children = jsxsResult;
    return tmp9(tmp10, obj1);
  }
  const obj6 = {};
  const items2 = [
    React2.jsx(_require(671).Header, {
      isBack: true,
      title: mod.default.PROFILE,
      backPress() {
        navigation.goBack();
      }
    }),
    <get registerCallableModule.View style={closure_11.line} />,

  ];
  const obj9 = { style: closure_11.mainContainer };
  const obj10 = { style: closure_11.scrollContainer, showsVerticalScrollIndicator: false };
  const obj11 = { style: closure_11.profileSection };
  const obj12 = { style: closure_11.profileInfo };
  const obj13 = { style: closure_11.userName };
  let str = "John Doe";
  if (tmp6) {
    let name;
    if (tmp6 != null) {
      name = tmp6.name;
    }
    str = name;
  }
  obj13.children = str;
  const items3 = [<get registerCallableModule.Text style={closure_11.userName} />, ];
  const obj14 = { style: closure_11.userEmail };
  let str2 = "john.doe@example.com";
  if (tmp6) {
    let email;
    if (tmp6 != null) {
      email = tmp6.email;
    }
    str2 = email;
  }
  obj14.children = str2;
  items3[1] = <get registerCallableModule.Text style={closure_11.userEmail} />;
  obj12.children = items3;
  obj11.children = <get registerCallableModule.View style={closure_11.profileInfo} />;
  const items4 = [<get registerCallableModule.View style={closure_11.profileSection} />, ];
  const defaultResult3 = closure_3.default(React.useState(null), 2);
  const obj7 = {
    isBack: true,
    title: mod.default.PROFILE,
    backPress() {
      navigation.goBack();
    }
  };
  const obj8 = { style: closure_11.line };
  items4[1] = <get registerCallableModule.View style={closure_11.menuContainer}>{items.map((action) => {
    let obj = { style: closure_1_11.menuItem, onPress: action.action };
    obj = {};
    let iconName;
    if (action != null) {
      iconName = action.iconName;
    }
    obj.source = iconName;
    obj.style = closure_1_11.menuIconStyle;
    obj.resizeMode = "contain";
    obj.tintColor = black.black;
    const items = [<closure_1_5.Image />, , ];
    obj = { style: closure_1_11.menuText, children: action.title };
    items[1] = <closure_1_5.Text style={closure_1_11.menuText}>{arg0.title}</closure_1_5.Text>;
    const obj1 = { name: navigation(black[16]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" };
    items[2] = React.jsx(navigation(black[16]).VectorIcons.chevronRight.component, { name: navigation(black[16]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" });
    obj.children = items;
    return <closure_1_5.TouchableOpacity key={arg0.id} style={closure_1_11.menuText}>{arg0.title}</closure_1_5.TouchableOpacity>;
  })}</get registerCallableModule.View>;
  obj10.children = items4;
  const items5 = [<get registerCallableModule.ScrollView style={closure_11.scrollContainer} showsVerticalScrollIndicator={false} />, ];
  const obj16 = { style: closure_11.btnContainer };
  const obj17 = {
    style: closure_11.logoutButton,
    onPress() {
      React();
    }
  };
  const obj18 = { name: _require(689).VectorIcons.logout.name, size: 20, color: "#F44336", style: closure_11.logoutIcon };
  const items6 = [React2.jsx(_require(689).VectorIcons.logout.component, { name: _require(689).VectorIcons.logout.name, size: 20, color: "#F44336", style: closure_11.logoutIcon }), ];
  const obj15 = {
    style: closure_11.menuContainer,
    children: items.map((action) => {
      let obj = { style: closure_1_11.menuItem, onPress: action.action };
      obj = {};
      let iconName;
      if (action != null) {
        iconName = action.iconName;
      }
      obj.source = iconName;
      obj.style = closure_1_11.menuIconStyle;
      obj.resizeMode = "contain";
      obj.tintColor = black.black;
      const items = [<closure_1_5.Image />, , ];
      obj = { style: closure_1_11.menuText, children: action.title };
      items[1] = <closure_1_5.Text style={closure_1_11.menuText}>{arg0.title}</closure_1_5.Text>;
      const obj1 = { name: navigation(black[16]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" };
      items[2] = React.jsx(navigation(black[16]).VectorIcons.chevronRight.component, { name: navigation(black[16]).VectorIcons.chevronRight.name, size: 24, color: "#CCCCCC" });
      obj.children = items;
      return <closure_1_5.TouchableOpacity key={arg0.id} style={closure_1_11.menuText}>{arg0.title}</closure_1_5.TouchableOpacity>;
    })
  };
  items6[1] = <get registerCallableModule.Text style={closure_11.logoutText}>{_require(512).useTranslation().t("Log Out")}</get registerCallableModule.Text>;
  obj17.children = items6;
  obj16.children = <get registerCallableModule.TouchableOpacity style={closure_11.logoutButton} onPress={function onPress() {
    React();
  }} />;
  items5[1] = <get registerCallableModule.View style={closure_11.btnContainer} />;
  obj9.children = items5;
  items2[2] = <get registerCallableModule.View style={closure_11.mainContainer} />;
  obj6.children = items2;
  jsxsResult = React2.jsxs(_require(671).Container, {});
};
