// Module ID: 499
// Function ID: 5442
// Name: DeviceSearchScreen
// Dependencies: [1, 363, 6, 38, 119, 2, 500, 501, 251, 502, 512, 529, 644, 646, 657, 669, 671, 689, 780]
// Exports: default

// Module 499 (DeviceSearchScreen)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import _mod502 from "module_502" /* 502 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(_mod500);
let closure_8 = module_1(_mod501);
const bleManager = new _mod502.BleManager();
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15") };
obj.container = obj;
obj = { marginBottom: require("module_20") };
obj.topBox = obj;
let obj1 = { fontSize: require("module_20"), fontWeight: "600", color: "#000000", textAlign: "center" };
obj.topBoxText = obj1;
let obj2 = { position: "relative", width: require("module_250"), height: require("module_250"), alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: require("module_25"), marginBottom: require("module_20") };
obj.waveContainer = obj2;
obj.circle = { position: "absolute", borderRadius: require("module_125"), width: require("module_250"), height: require("module_250"), borderWidth: require("module_10"), borderColor: "#8bb1de" };
let obj3 = { position: "absolute", borderRadius: require("module_125"), width: require("module_250"), height: require("module_250"), borderWidth: require("module_10"), borderColor: "#8bb1de" };
obj.content = { borderRadius: require("module_75"), width: require("module_150"), height: require("module_150"), alignItems: "center", justifyContent: "center", padding: require("_toConsumableArray") };
obj.logoImg = { opacity: 0.7 };
let obj4 = { borderRadius: require("module_75"), width: require("module_150"), height: require("module_150"), alignItems: "center", justifyContent: "center", padding: require("_toConsumableArray") };
obj.listBox = { marginTop: require("module_20"), flex: 1, paddingBottom: require("module_100") };
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f0f7fe", padding: require("module_15"), borderRadius: require("module_10"), marginBottom: require("module_15") };
obj.listItem = obj6;
let obj5 = { marginTop: require("module_20"), flex: 1, paddingBottom: require("module_100") };
obj.itemCenter = { width: require("module_200"), marginLeft: require("module_25") };
let obj7 = { width: require("module_200"), marginLeft: require("module_25") };
obj.itemRight = { textAlign: "right", width: require("module_60"), marginRight: require("module_25") };
let obj9 = { fontWeight: "500", color: "#677e8f", fontSize: require("module_16") };
obj.devName = obj9;
let obj8 = { textAlign: "right", width: require("module_60"), marginRight: require("module_25") };
obj.devId = { fontSize: require("module_15"), paddingTop: require("module_5"), color: "#cad7e0" };
obj.connectText = { fontWeight: "600" };
let obj11 = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: require("module_50") };
obj.emptyContainer = obj11;
let obj12 = { fontSize: require("module_16"), color: "#677e8f", textAlign: "center", marginTop: require("module_20") };
obj.emptyText = obj12;
let obj13 = { color: "#FF3B30", textAlign: "center", marginTop: require("module_10") };
obj.errorText = obj13;
let obj14 = { width: "100%", height: require("module_50"), borderRadius: require("module_10"), alignItems: "center", flexDirection: "row", justifyContent: "center" };
obj.searchBtn = obj14;
obj.disabledButton = { backgroundColor: "#CCCCCC", opacity: 0.7 };
let obj15 = { color: "#FFFFFF", fontSize: require("module_16"), fontWeight: "600" };
obj.searchBtnText = obj15;
let obj16 = { width: "100%", alignItems: "center", alignSelf: "center", marginTop: require("module_20") };
obj.skipButton = obj16;
let obj10 = { fontSize: require("module_15"), paddingTop: require("module_5"), color: "#cad7e0" };
obj.skipText = { fontSize: require("module_14"), textAlign: "center" };
let obj18 = { position: "absolute", bottom: 0, width: "100%", paddingVertical: require("module_10"), paddingHorizontal: require("module_15"), justifyContent: "center", backgroundColor: "#fff" };
obj.btnContainer = obj18;
let obj19 = { position: "absolute", left: 0, justifyContent: "center", alignItems: "center", height: require("module_25"), width: require("module_25"), borderRadius: require("module_25"), backgroundColor: "rgba(0,0,0,0.5)" };
obj.backButtonContainer = obj19;
let obj17 = { fontSize: require("module_14"), textAlign: "center" };
obj.iconStyle = { height: require("module_130"), width: require("module_130"), borderRadius: require("module_130") };
const styles = StyleSheet.create(obj);

export default function DeviceSearchScreen() {
  let t = _require(512).useTranslation().t;
  _require = t;
  dependencyMap = _require(529).useNavigation();
  const defaultResult = closure_4.default(React.useState([]), 2);
  const first = defaultResult[0];
  closure_2 = defaultResult[1];
  const defaultResult1 = closure_4.default(React.useState(false), 2);
  const first1 = defaultResult1[0];
  closure_4 = defaultResult1[1];
  [tmp5, closure_5] = closure_4.default(React.useState(false), 2);
  const defaultResult2 = closure_4.default(React.useState(false), 2);
  [tmp7, get_registerCallableModule] = closure_4.default(React.useState(null), 2);
  const defaultResult3 = closure_4.default(React.useState(null), 2);
  [closure_7, closure_8] = closure_4.default(React.useState(null), 2);
  const theme = _require(644).useTheme();
  let value = new get_registerCallableModule.Animated.Value(0);
  let items = [React.useRef(value).current, , , , , ];
  value = new get_registerCallableModule.Animated.Value(0);
  items[1] = React.useRef(value).current;
  const value1 = new get_registerCallableModule.Animated.Value(0);
  items[2] = React.useRef(value1).current;
  const value2 = new get_registerCallableModule.Animated.Value(0);
  items[3] = React.useRef(value2).current;
  const value3 = new get_registerCallableModule.Animated.Value(0);
  items[4] = React.useRef(value3).current;
  const value4 = new get_registerCallableModule.Animated.Value(0);
  items[5] = React.useRef(value4).current;
  const effect = React.useEffect(() => {
    (function startRippleAnimations() {
      const item = closure_1_10.forEach((arg0, arg1) => {
        ({ Animated, Animated: Animated2 } = closure_3_6);
        const obj = { toValue: 1, duration: 2000, easing: closure_3_6.Easing.linear, useNativeDriver: true, delay: arg1 * 300 };
        Animated.loop(Animated2.timing(arg0, obj)).start();
      });
    })();
    return () => {
      const item = closure_1_10.forEach((stopAnimation) => stopAnimation.stopAnimation());
    };
  }, []);
  const effect1 = React.useEffect(() => {
    handleScan();
  }, []);
  function handleScan() {
    const permissions = t(navigation[13]).requestPermissions();
    permissions.then(() => {
      closure_1_2([]);
      closure_1_5(true);
      callback(646).checkBluetoothStatus();
      callback(646).startScan({
        onDeviceFound(arg0) {
          closure_0 = arg0;
          closure_2_2((arr) => {
            let combined = arr;
            if (!arr.find(/* F5456 */ function() { ... })) {
              items = [];
              const items1 = [closure_0];
              combined = items.concat(first1.default(arr), items1);
            }
            return combined;
          });
        },
        onError(arg0) {

        },
        onDone() {
          closure_2_5(false);
        }
      });
    });
  }
  closure_12 = (() => {
    closure_0 = closure_2.default(async (arg0) => {
      if (!closure_2_3) {
        closure_2_4(true);
        closure_2_8(arg0.id);
        closure_2_6(null);
        try {
          if (yield closure_0(closure_1[13]).connectDevice(arg0)) {
            const tmp16 = yield closure_0(closure_1[14]).getUserData();
            let id;
            if (tmp16 != null) {
              const user = tmp16.user;
              if (user != null) {
                id = user.id;
              }
            }
            let obj = { deviceId: arg0.id };
            let name;
            if (arg0 != null) {
              name = arg0.name;
            }
            obj.name = name;
            obj.mac = arg0.mac;
            obj.user_id = id;
            const deviceImage = arg0.deviceImage;
            let str = deviceImage;
            if (!deviceImage) {
              str = "Default";
            }
            obj.deviceImage = str;
            const registerDeviceApiResult = callback(669).registerDeviceApi(obj, {});
            callback(669).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_2.default(async (arg0) => {
                closure_5_4(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(closure_1[14]).setDeviceData(merged);
                if (arg0 != null) {
                  const data2 = arg0.data;
                  if (data2 != null) {
                    if (data2.is_exist) {
                      const obj = { screen: closure_6_7.default.Home };
                      closure_5_1.navigate(closure_6_7.default.Main, obj);
                    }
                  }
                }
                closure_5_1.navigate(closure_6_7.default.DeviceChooseVariant);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })()).catch((message) => {
              const Alert = closure_4_6.Alert;
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              Alert.alert(message);
            });
            const nextPromise = callback(669).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_2.default(async (arg0) => {
                closure_5_4(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(closure_1[14]).setDeviceData(merged);
                if (arg0 != null) {
                  const data2 = arg0.data;
                  if (data2 != null) {
                    if (data2.is_exist) {
                      const obj = { screen: closure_6_7.default.Home };
                      closure_5_1.navigate(closure_6_7.default.Main, obj);
                    }
                  }
                }
                closure_5_1.navigate(closure_6_7.default.DeviceChooseVariant);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })());
          }
          closure_2_4(false);
          closure_2_8(null);
        } catch (tmp31) {
          closure_2_4(false);
          closure_2_8(tmp2);
          throw tmp31;
        }
      }
    });
    return function connectToDevice(arg0) {
      return callback(...arguments);
    };
  })();
  let obj = {};
  obj = { style: items1 };
  items1 = [items.container, { backgroundColor: theme.white }];
  obj = { style: items.topBox };
  let obj1 = { style: items.topBoxText, children: t(mod.default.SEARCHING_DEVICES) };
  let items2 = [<get registerCallableModule.Text style={items.topBoxText}>{t(mod.default.SEARCHING_DEVICES)}</get registerCallableModule.Text>, ];
  let obj2 = {
    style: items.backButtonContainer,
    onPress() {
      navigation.goBack();
    }
  };
  let obj3 = { name: _require(689).VectorIcons.backArrow.name, size: 20, color: theme.white };
  obj2.children = theme.jsx(_require(689).VectorIcons.backArrow.component, { name: _require(689).VectorIcons.backArrow.name, size: 20, color: theme.white });
  items2[1] = <get registerCallableModule.Pressable style={items.backButtonContainer} onPress={function onPress() {
    navigation.goBack();
  }} />;
  obj.children = items2;
  const items3 = [<get registerCallableModule.View style={items.topBox} />, , ];
  let jsxsResult = jsxResult;
  if (jsxResult) {
    const obj4 = { style: items.waveContainer };
    const items4 = [
      items.map((interpolate) => {
          let obj = {};
          items = [, ];
          items[0] = items.circle;
          obj = {};
          obj = { scale: interpolate.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
          const items1 = [obj];
          obj.transform = items1;
          obj.opacity = interpolate.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
          items[1] = obj;
          obj.style = items;
          return theme.jsx(closure_1_6.Animated.View, { scale: interpolate.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }, arg1);
        }),

    ];
    const obj5 = { style: items.content };
    const obj6 = { source: _require(689).Icons.logo, style: items.iconStyle, resizeMode: "contain" };
    obj5.children = <get registerCallableModule.Image source={_require(689).Icons.logo} style={items.iconStyle} resizeMode="contain" />;
    items4[1] = <get registerCallableModule.View style={items.content} />;
    obj4.children = items4;
    jsxsResult = <get registerCallableModule.View style={items.waveContainer} />;
  }
  items3[1] = jsxsResult;
  if (!!jsxResult) {
    items3[2] = tmp26;
    obj.children = items3;
    const items5 = [<get registerCallableModule.View {...obj} />, ];
    const obj7 = { style: items.btnContainer };
    const obj8 = {};
    const items6 = [items.searchBtn, , ];
    let disabledButton = jsxResult;
    if (!jsxResult) {
      disabledButton = first1;
    }
    if (disabledButton) {
      disabledButton = items.disabledButton;
    }
    items6[1] = disabledButton;
    const obj9 = { backgroundColor: theme.primary };
    items6[2] = obj9;
    obj8.style = items6;
    obj8.onPress = function onPress() {
      handleScan();
    };
    let tmp46 = jsxResult;
    if (!jsxResult) {
      tmp46 = first1;
    }
    obj8.disabled = tmp46;
    const obj10 = { style: items.searchBtnText };
    if (jsxResult) {
      let tResult = t(_default.SCANNING);
    } else {
      tResult = t(_default.SEARCH_FOR_MORE_DEVICES);
    }
    obj10.children = tResult;
    const items7 = [<get registerCallableModule.Text style={items.searchBtnText} />, ];
    if (jsxResult) {
      const obj11 = { size: "small", color: "#FFFFFF" };
      const obj12 = { marginLeft: 10 };
      obj11.style = obj12;
      jsxResult = <get registerCallableModule.ActivityIndicator size="small" color="#FFFFFF" />;
    }
    items7[1] = jsxResult;
    obj8.children = items7;
    const items8 = [<get registerCallableModule.TouchableOpacity />, ];
    const obj13 = {
      style: items.skipButton,
      onPress() {
          return navigation.navigate(closure_1_7.default.DeviceConnTip);
        }
    };
    const obj14 = {};
    const items9 = [items.skipText, ];
    const obj15 = { color: theme.black };
    items9[1] = obj15;
    obj14.style = items9;
    obj14.children = t(mod.default.NEED_HELP_CONNECTING_DEVICE);
    obj13.children = <get registerCallableModule.Text />;
    items8[1] = <get registerCallableModule.TouchableOpacity style={items.skipButton} onPress={function onPress() {
      return navigation.navigate(closure_1_7.default.DeviceConnTip);
    }} />;
    obj7.children = items8;
    items5[1] = <get registerCallableModule.View style={items.btnContainer} />;
    obj.children = items5;
    return theme.jsxs(_require(671).Container, obj);
  } else {
    const obj16 = { showsVerticalScrollIndicator: false };
    let obj17 = { style: items.listBox };
    if (first.length > 0) {
      let mapped = first.map((name) => {
        const t = name;
        let obj = {
          style: items.listItem,
          onPress() {
            closure_1_12(closure_0);
          },
          disabled: first1
        };
        obj = { style: items.itemCenter };
        obj = { style: items.devName };
        name = name.name;
        if (!name) {
          name = t(closure_1_8.default.UNKNOWN_DEVICE);
        }
        obj.children = name;
        items = [<closure_1_6.Text style={items.devName} />, ];
        const obj1 = { style: items.devId };
        let id = name.mac;
        if (!id) {
          id = name.id;
        }
        obj1.children = id;
        items[1] = <closure_1_6.Text style={items.devId} />;
        obj.children = items;
        const items1 = [<closure_1_6.View style={items.devName} />, ];
        const obj2 = { style: items.itemRight };
        if (first1) {
          if (closure_7 === name.id) {
            const obj3 = { size: "small", color: theme.primary };
            let jsxResult = <closure_1_6.ActivityIndicator size="small" color={theme.primary} />;
          }
          obj2.children = jsxResult;
          items1[1] = tmp3(tmp4, obj2);
          obj.children = items1;
          return <closure_1_6.TouchableOpacity key={arg0.id} {...obj} />;
        }
        const items2 = [items.connectText, { color: theme.primary }];
        jsxResult = <closure_1_6.Text style={items2}>{t(closure_1_8.default.CONNECT)}</closure_1_6.Text>;
      });
    } else {
      const obj18 = { style: items.emptyContainer };
      ({ jsx, jsxs } = theme);
      if (tmp7) {
        const obj19 = {};
        const obj20 = { style: items.errorText, children: tmp7 };
        obj19.children = <get registerCallableModule.Text style={items.errorText}>{tmp7}</get registerCallableModule.Text>;
        let jsxResult1 = <></>;
      } else {
        const obj21 = {};
        const items10 = [items.emptyText, ];
        const obj22 = { color: theme.black };
        items10[1] = obj22;
        obj21.style = items10;
        if (jsxResult) {
          let tResult1 = t("Scanning for devices...");
        } else {
          tResult1 = t("No devices found");
        }
        obj21.children = tResult1;
        jsxResult1 = <get registerCallableModule.Text />;
      }
      const items11 = [jsxResult1, ];
      let jsxResult2 = jsxResult;
      if (jsxResult) {
        jsxResult2 = !tmp7;
      }
      if (jsxResult2) {
        const obj23 = {};
        const obj24 = { marginTop: 10 };
        obj23.style = obj24;
        obj23.color = theme.primary;
        jsxResult2 = <get registerCallableModule.ActivityIndicator />;
      }
      items11[1] = jsxResult2;
      obj18.children = items11;
      mapped = <get registerCallableModule.View style={items.emptyContainer} />;
    }
    obj17.children = mapped;
    obj17 = <get registerCallableModule.View style={items.listBox} />;
    obj16.children = obj17;
    <get registerCallableModule.ScrollView showsVerticalScrollIndicator={false} />;
  }
};
