// Module ID: 789
// Function ID: 8172
// Name: HomeScreen
// Dependencies: [1, 6, 363, 38, 119, 2, 683, 501, 500, 658, 251, 644, 512, 529, 657, 669, 646, 655, 671, 689, 788, 780]
// Exports: default

// Module 789 (HomeScreen)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import _mod658 from "module_658" /* 658 */;
import LinearGradient from "LinearGradient" /* 683 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_11 from "jsxProd" /* 251 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(asyncGeneratorStep);
let closure_4 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(LinearGradient);
let closure_8 = module_1(_mod501);
let closure_9 = module_1(_mod500);
let closure_10 = module_1(_mod658);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, marginTop: require("module_30"), paddingHorizontal: require("module_15"), paddingBottom: require("module_10"), backgroundColor: "#FFF" };
obj.mainContainer = obj;
obj.loadingOverlay = { justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 100 };
obj.scrollContent = {};
obj = { backgroundColor: "#F0F7FE", borderRadius: require("module_20"), padding: require("module_8"), marginLeft: require("module_10") };
obj.editButton = obj;
let obj1 = { flexDirection: "row", alignItems: "center", marginTop: require("module_8"), marginLeft: require("module_15"), backgroundColor: "#fff" };
obj.connectionStatus = obj1;
obj.connectionDot = { width: require("module_8"), height: require("module_8"), borderRadius: require("module_4"), backgroundColor: "#4CAF50", marginRight: require("_toConsumableArray") };
obj.disconnectedDot = { backgroundColor: "#FF5252" };
let obj3 = { fontSize: require("module_14"), color: "#4CAF50", fontWeight: "500" };
obj.connectionText = obj3;
obj.disconnectedText = { color: "#FF5252" };
obj.topRight = { justifyContent: "center", alignItems: "center" };
let obj2 = { width: require("module_8"), height: require("module_8"), borderRadius: require("module_4"), backgroundColor: "#4CAF50", marginRight: require("_toConsumableArray") };
obj.settingsButton = { backgroundColor: "#F0F7FE", borderRadius: require("module_25"), padding: require("module_10") };
let obj5 = { alignItems: "center", justifyContent: "center", marginBottom: require("module_25"), position: "relative", height: require("module_360"), borderRadius: require("module_20") };
obj.indexContent = obj5;
let obj6 = { width: "100%", height: require("module_350"), borderRadius: require("module_20"), alignItems: "center", justifyContent: "center", position: "absolute", boxSizing: "border-box" };
obj.cupBackground = obj6;
let obj4 = { backgroundColor: "#F0F7FE", borderRadius: require("module_25"), padding: require("module_10") };
obj.indexCup = { width: require("module_180"), height: require("module_400") };
let obj7 = { width: require("module_180"), height: require("module_400") };
obj.cupInfo = { position: "absolute", bottom: require("module_30"), right: require("module_20"), alignItems: "center", borderRadius: require("module_20") };
let obj9 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("module_12"), paddingVertical: require("_toConsumableArray"), borderRadius: require("module_20") };
obj.batteryBadge = obj9;
let obj10 = { color: "#FFFFFF", fontSize: require("module_12"), fontWeight: "500", textAlign: "center" };
obj.batteryNum = obj10;
let obj8 = { position: "absolute", bottom: require("module_30"), right: require("module_20"), alignItems: "center", borderRadius: require("module_20") };
obj.sectionCard = { backgroundColor: "#FFFFFF", borderRadius: require("module_16"), padding: require("module_20"), marginBottom: require("module_20") };
let obj12 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: require("module_15"), borderBottomWidth: 0 };
obj.sectionHeader = obj12;
let obj13 = { fontSize: PREDEF_RES.perfectSize(22.81), fontWeight: "600", marginBottom: 0 };
obj.sectionTitleText = obj13;
let obj11 = { backgroundColor: "#FFFFFF", borderRadius: require("module_16"), padding: require("module_20"), marginBottom: require("module_20") };
obj.iconButton = { backgroundColor: "#F0F7FE", borderRadius: require("module_20"), padding: require("module_8") };
let obj15 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: PREDEF_RES.perfectSize(12.5), marginBottom: PREDEF_RES.perfectSize(12.5), flexWrap: "wrap" };
obj.colorsList = obj15;
let obj14 = { backgroundColor: "#F0F7FE", borderRadius: require("module_20"), padding: require("module_8") };
obj.colorItem = { width: require("module_33"), height: require("module_33"), borderWidth: PREDEF_RES.perfectSize(2.5), borderColor: "#FFFFFF", borderRadius: require("module_50"), marginRight: require("module_15"), marginBottom: require("module_10"), justifyContent: "center", alignItems: "center" };
let obj16 = { width: require("module_33"), height: require("module_33"), borderWidth: PREDEF_RES.perfectSize(2.5), borderColor: "#FFFFFF", borderRadius: require("module_50"), marginRight: require("module_15"), marginBottom: require("module_10"), justifyContent: "center", alignItems: "center" };
obj.colorItemSelected = { borderColor: "#FFFFFF", borderWidth: PREDEF_RES.perfectSize(2.5) };
let obj18 = { width: require("module_25"), height: require("module_25"), backgroundColor: "#FFFFFF", borderRadius: require("module_50"), justifyContent: "center", alignItems: "center" };
obj.colorItemSmall = obj18;
let obj17 = { borderColor: "#FFFFFF", borderWidth: PREDEF_RES.perfectSize(2.5) };
obj.colorIcon = { width: require("module_25"), height: require("module_25") };
let obj19 = { width: require("module_25"), height: require("module_25") };
obj.addColor = { width: require("module_33"), height: require("module_33"), justifyContent: "center", alignItems: "center", marginRight: require("module_15"), borderRadius: require("module_50") };
let obj20 = { width: require("module_33"), height: require("module_33"), justifyContent: "center", alignItems: "center", marginRight: require("module_15"), borderRadius: require("module_50") };
obj.addColorIcon = { width: require("module_33"), height: require("module_33") };
let obj21 = { width: require("module_33"), height: require("module_33") };
obj.colorPickerContainer = { marginTop: PREDEF_RES.perfectSize(22.5), padding: require("module_10"), backgroundColor: "#FFFFFF", borderRadius: require("module_8") };
let obj23 = { height: require("module_100"), justifyContent: "center", alignItems: "center" };
obj.colorPickerPlaceholder = obj23;
let obj22 = { marginTop: PREDEF_RES.perfectSize(22.5), padding: require("module_10"), backgroundColor: "#FFFFFF", borderRadius: require("module_8") };
obj.colorPickerText = { fontSize: require("module_16"), marginBottom: require("module_10") };
let obj24 = { fontSize: require("module_16"), marginBottom: require("module_10") };
obj.colorPreview = { width: require("module_50"), height: require("module_50"), borderRadius: require("module_25") };
obj.colorBox = { color: "#FFFFFF" };
let obj26 = { flexDirection: "row", marginTop: require("module_19"), alignItems: "center", alignSelf: "center" };
obj.controlsContainer = obj26;
let obj27 = { alignItems: "center", justifyContent: "center", borderRadius: require("module_20"), width: "48%", height: PREDEF_RES.perfectSize(62.72), marginRight: require("module_10") };
obj.controlButton = obj27;
let obj28 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("module_20"), height: "100%", width: "100%" };
obj.button = obj28;
let obj29 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("module_20"), backgroundColor: "#eff8ff", height: "100%", width: "100%" };
obj.activeButton = obj29;
obj.controlButtonActive = { backgroundColor: "#0066B0" };
let obj25 = { width: require("module_50"), height: require("module_50"), borderRadius: require("module_25") };
obj.controlIcon = { width: require("module_22"), height: require("module_22"), marginRight: require("module_10") };
let obj30 = { width: require("module_22"), height: require("module_22"), marginRight: require("module_10") };
obj.controlIconActive = { tintColor: "#FFFFFF", width: require("module_22"), height: require("module_22"), marginRight: require("module_10") };
let obj32 = { fontSize: require("module_16"), fontWeight: "500", color: "#677E8F" };
obj.controlText = obj32;
let obj33 = { fontSize: require("module_16"), fontWeight: "500", color: "#FFFFFF" };
obj.controlTextActive = obj33;
let obj31 = { tintColor: "#FFFFFF", width: require("module_22"), height: require("module_22"), marginRight: require("module_10") };
obj.connectButton = { marginTop: require("module_20"), borderRadius: require("module_12"), overflow: "hidden" };
let obj35 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("module_12"), overflow: "hidden", padding: require("module_16") };
obj.connectButtonGradient = obj35;
let obj34 = { marginTop: require("module_20"), borderRadius: require("module_12"), overflow: "hidden" };
obj.connectIcon = { marginRight: require("module_10"), tintColor: "#FFFFFF" };
let obj37 = { fontSize: require("module_16"), fontWeight: "600", color: "#FFFFFF" };
obj.connectButtonText = obj37;
obj.modalOverlay = { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center" };
let obj38 = { backgroundColor: "#FFFFFF", borderRadius: require("module_15"), padding: require("module_24"), width: "85%", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 10 };
obj.modalContent = obj38;
let obj36 = { marginRight: require("module_10"), tintColor: "#FFFFFF" };
obj.modalTitle = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_20"), textAlign: "center" };
let obj40 = { borderWidth: 1, borderColor: "#E0E0E0", borderRadius: require("module_8"), padding: require("module_12"), fontSize: require("module_16"), marginBottom: require("module_20") };
obj.nameInput = obj40;
obj.modalButtons = { flexDirection: "row", justifyContent: "space-between" };
let obj41 = { flex: 1, padding: require("module_12"), borderRadius: require("module_8"), alignItems: "center", marginHorizontal: require("module_5"), backgroundColor: "#F0F7FE" };
obj.modalButton = obj41;
obj.modalButtonPrimary = { backgroundColor: "#0066B0" };
let obj42 = { fontSize: require("module_16"), color: "#0066B0", fontWeight: "500" };
obj.modalButtonText = obj42;
obj.modalButtonTextPrimary = { color: "#FFFFFF" };
let obj39 = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_20"), textAlign: "center" };
obj.gradient = { height: require("module_40"), width: "100%", borderRadius: require("module_20") };
let obj44 = { height: require("module_30"), width: "25%", alignItems: "center", justifyContent: "center", alignSelf: "center", borderRadius: require("module_4") };
obj.colorSetBtn = obj44;
let obj45 = { fontSize: require("module_13"), fontWeight: "500", color: "#fff" };
obj.colorBtnText = obj45;
const styles = StyleSheet.create(obj);

export default function HomeScreen() {
  let theme = _require(first[11]).useTheme();
  const t = _require(first[12]).useTranslation().t;
  _require = _require(first[13]).useNavigation();
  const defaultResult = first1.default(React.useState("My Aquaminder"), 2);
  first = defaultResult[0];
  closure_2 = defaultResult[1];
  const defaultResult1 = first1.default(React.useState(false), 2);
  closure_3 = defaultResult1[1];
  const defaultResult2 = first1.default(React.useState(""), 2);
  first1 = defaultResult2[0];
  React = defaultResult2[1];
  [tmp8, get_registerCallableModule] = first1.default(React.useState(0), 2);
  const defaultResult3 = first1.default(React.useState(0), 2);
  [tmp10, r10056] = first1.default(React.useState(false), 2);
  const defaultResult5 = first1.default(React.useState(false), 2);
  const first2 = defaultResult5[0];
  const mod = defaultResult5[1];
  const isFocused = _require(first[13]).useIsFocused();
  const defaultResult4 = first1.default(React.useState(false), 2);
  [r10072, r10073] = first1.default(React.useState("default"), 2);
  const defaultResult6 = first1.default(React.useState("default"), 2);
  [closure_10, closure_11] = first1.default(React.useState(false), 2);
  const defaultResult7 = first1.default(React.useState(false), 2);
  [r10084, closure_12] = first1.default(React.useState(0), 2);
  const defaultResult8 = first1.default(React.useState(0), 2);
  [_interopRequireWildcard, closure_14] = first1.default(React.useState([]), 2);
  const defaultResult9 = first1.default(React.useState([]), 2);
  [r10098, closure_15] = first1.default(React.useState("#FFFFFF"), 2);
  const defaultResult10 = first1.default(React.useState("#FFFFFF"), 2);
  const first3 = first1.default(React.useState(0), 2)[0];
  const defaultResult12 = first1.default(React.useState(0), 2);
  const first4 = defaultResult12[0];
  closure_18 = defaultResult12[1];
  const defaultResult13 = first1.default(React.useState(0), 2);
  const first5 = defaultResult13[0];
  closure_20 = defaultResult13[1];
  const defaultResult11 = first1.default(React.useState(0), 2);
  [closure_21, closure_22] = first1.default(React.useState(""), 2);
  const defaultResult14 = first1.default(React.useState(""), 2);
  [r10129, closure_23] = first1.default(React.useState(null), 2);
  const defaultResult16 = first1.default(React.useState(null), 2);
  const first6 = defaultResult16[0];
  closure_25 = defaultResult16[1];
  const defaultResult17 = first1.default(React.useState(null), 2);
  const first7 = defaultResult17[0];
  closure_27 = defaultResult17[1];
  const defaultResult15 = first1.default(React.useState(null), 2);
  [r10147, closure_28] = first1.default(React.useState(false), 2);
  const defaultResult18 = first1.default(React.useState(false), 2);
  [r10154, closure_29] = first1.default(React.useState([]), 2);
  const defaultResult19 = first1.default(React.useState([]), 2);
  [r10160, closure_30] = first1.default(React.useState(false), 2);
  const defaultResult20 = first1.default(React.useState(false), 2);
  [tmp35, closure_31] = first1.default(React.useState(false), 2);
  const focusEffect = _require(first[13]).useFocusEffect(React.useCallback(() => {
    closure_0 = closure_1_6.BackHandler.addEventListener("hardwareBackPress", function onBackPress() {
      return true;
    });
    return () => closure_0.remove();
  }, []));
  let items = [isFocused];
  const effect = React.useEffect(() => {
    if (isFocused) {
      callback4();
    }
  }, items);
  closure_32 = (() => {
    closure_0 = lib.default(async () => {
      try {
        closure_2_28(true);
        const tmp5 = yield closure_3_10.default.getItem("deviceData");
        let parsed = null;
        if (tmp5) {
          const _JSON = JSON;
          parsed = JSON.parse(tmp5);
        }
        const tmp13 = yield closure_0(first[14]).getUserData();
        let id;
        if (tmp13 != null) {
          const user = tmp13.user;
          if (user != null) {
            id = user.id;
          }
        }
        closure_2_22(id);
        if (parsed) {
          closure_2_27(parsed);
          closure_2_34(parsed);
          closure_2_33(parsed);
        } else {
          closure_2_14(["#FFFFFF"]);
          closure_2_28(false);
          closure_2_18(0);
          closure_2_20(0);
          closure_2_8(false);
          closure_2_2("My Aquaminder");
          closure_2_6(0);
          closure_2_27(null);
        }
      } catch (err) {
        closure_2_28(false);
      }
    });
    return function getData() {
      return callback(...arguments);
    };
  })();
  closure_33 = (() => {
    closure_0 = lib.default(async (arg0) => {
      if (obj) {
        return obj.resume();
      } else {
        let id;
        if (arg0 != null) {
          id = arg0.id;
        }
        const myDeviceColorApi = callback(first[15]).getMyDeviceColorApi(id, {}, {});
        myDeviceColorApi.then((data) => {
          let prop;
          if (data != null) {
            data = data.data;
            if (data != null) {
              prop = data.device_available_colors;
            }
          }
          closure_3_29(prop);
          let found;
          if (data != null) {
            const data2 = data.data;
            if (data2 != null) {
              const prop1 = data2.device_available_colors;
              if (prop1 != null) {
                const mapped = prop1.map((hex_color) => {
                  hex_color = undefined;
                  if (hex_color != null) {
                    hex_color = hex_color.hex_color;
                  }
                  return hex_color;
                });
                if (mapped != null) {
                  found = mapped.filter((replaced) => /^#([A-Fa-f0-9]{6})$/.test(replaced));
                }
              }
            }
          }
          const items = ["#FFFFFF"];
          if (Array.isArray(found)) {
            tmp5(items.concat(closure_2.default(found.filter((arg0) => arg0 !== "#FFFFFF"))));
          } else {
            tmp5(items);
          }
        }).catch((message) => {
          const Alert = closure_4_6.Alert;
          message = undefined;
          if (message != null) {
            message = message.message;
          }
          Alert.alert(message);
        });
      }
    });
    return function getColorList(arg0) {
      return callback(...arguments);
    };
  })();
  closure_34 = (() => {
    closure_0 = lib.default(async (arg0) => {
      try {
        const tmp5 = yield closure_0(first[16]).connectDevice(arg0);
        if (tmp5) {
          if (tmp6) {
            let str3 = "My Aquaminder";
            if (arg0 != null) {
              str3 = "My Aquaminder";
              if (arg0.nickname) {
                let nickname;
                if (arg0 != null) {
                  nickname = arg0.nickname;
                }
                str3 = nickname;
              }
            }
            closure_2_2(str3);
            closure_2_8(true);
            closure_2_25(tmp5);
            const tmp23 = closure_2_2;
          }
        } else {
          closure_2_8(false);
          closure_2_25(null);
          closure_2_28(false);
          closure_2_18(0);
          closure_2_20(0);
          closure_2_2("My Aquaminder");
          closure_2_6(0);
        }
      } catch (err) {
        closure_2_8(false);
        closure_2_25(null);
        closure_2_28(false);
        closure_2_18(0);
        closure_2_20(0);
        closure_2_2("My Aquaminder");
        closure_2_6(0);
      }
    });
    return function getDeviceData(arg0) {
      return callback(...arguments);
    };
  })();
  closure_35 = React.useRef(false);
  const items1 = [first6, first7];
  const effect1 = React.useEffect(() => {
    if (first6) {
      if (first7) {
        if (!ref.current) {
          ref.current = true;
          callback5(first6, first7);
        }
      }
    }
  }, items1);
  closure_36 = (() => {
    closure_0 = lib.default(async (arg0, arg1) => {
      closure_0 = arg1;
      if (arg1) {
        let light_status;
        if (arg1 != null) {
          light_status = arg1.light_status;
        }
        closure_2_18(light_status);
        let sound_status;
        if (arg1 != null) {
          sound_status = arg1.sound_status;
        }
        closure_2_20(sound_status);
        let led_color;
        if (arg1 != null) {
          led_color = arg1.led_color;
        }
        closure_2_15(led_color);
        if (arg1 != null) {
          if (arg1.led_color) {
            if (closure_2_13.length > 0) {
              const findIndexResult = closure_2_13.findIndex((str) => {
                const formatted = str.toLowerCase();
                return formatted === light_status.led_color.toLowerCase();
              });
              let num2 = -1;
              if (findIndexResult >= 0) {
                num2 = findIndexResult;
              }
              closure_2_12(num2);
              const tmp14 = closure_2_12;
            }
          }
        }
        const tmp = closure_2_18;
        const tmp5 = closure_2_20;
        const tmp8 = closure_2_15;
      }
      yield closure_2_37(arg0, arg1);
      closure_2_28(false);
    });
    return function syncAndSetData(arg0, arg1) {
      return callback(...arguments);
    };
  })();
  closure_37 = (() => {
    closure_0 = lib.default(async (arg0, arg1) => {
      try {
        let light_status;
        if (arg1 != null) {
          light_status = arg1.light_status;
        }
        let led_color;
        if (arg1 != null) {
          led_color = arg1.led_color;
        }
        let sound_status;
        if (arg1 != null) {
          sound_status = arg1.sound_status;
        }
        let name;
        if (arg1 != null) {
          name = arg1.name;
        }
        yield closure_2_39(arg0, light_status, led_color, sound_status, name);
      } catch (err) {
      }
    });
    return function syncDeviceData(arg0, arg1) {
      return callback(...arguments);
    };
  })();
  const items2 = [first6];
  const effect2 = React.useEffect(() => {
    if (first6) {
      callback6(first6);
    }
  }, items2);
  closure_38 = (() => {
    closure_0 = lib.default(async (arg0) => {
      const tmp = yield closure_0(first[16]).readBatteryStatusWithoutMonitor(arg0);
      if (tmp !== undefined) {
        closure_2_6(tmp);
      } else {
        closure_2_6(0);
      }
    });
    return function getReadDeviceData(arg0) {
      return callback(...arguments);
    };
  })();
  closure_39 = (() => {
    closure_0 = lib.default(async (arg0, arg1, arg2, arg3, arg4) => {
      const replaced = arg2.replace("#", "");
      let str = arg4.trim();
      const replaced1 = str.replace(/\s+/g, "");
      const substr = replaced1.slice(0, 12);
      const _Buffer = callback(first[17]).Buffer;
      str = _Buffer.from(substr, "utf8").toString("hex");
      yield closure_2_40(arg0, "AA060" + arg1 + replaced + "0" + arg3 + "01" + str.padEnd(24, "0"));
    });
    return function sendSettings(arg0, arg1, arg2, arg3, arg4) {
      return callback(...arguments);
    };
  })();
  closure_40 = (() => {
    closure_0 = lib.default(async (arg0, arg1) => {
      const replaced = arg1.replace(/[\s\r\n]+/g, "");
      if (obj.test(replaced)) {
        if (replaced.length % 2 !== 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("Hex string must have even length: \"" + replaced + "\"");
          throw error;
        } else {
          yield closure_0(first[16]).writeBLECharacteristicValue(replaced, arg0);
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("Invalid hex string format: \"" + replaced + "\"");
        throw error1;
      }
      obj = /^[0-9A-Fa-f]+$/;
    });
    return function sendHexCommand(arg0, arg1) {
      return callback(...arguments);
    };
  })();
  closure_41 = (() => {
    closure_0 = lib.default(async (arg0) => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_31(true);
        if (closure_2_24) {
          let num = 0;
          if (arg0 === 0) {
            num = 1;
          }
          if (closure_2_26) {
            obj = {};
            let device_id;
            if (closure_2_26 != null) {
              device_id = closure_2_26.device_id;
            }
            obj.deviceId = device_id;
            let name;
            if (closure_2_26 != null) {
              name = closure_2_26.name;
            }
            obj.name = name;
            let mac_address;
            if (closure_2_26 != null) {
              mac_address = closure_2_26.mac_address;
            }
            obj.mac = mac_address;
            obj.user_id = closure_2_21;
            let str;
            if (closure_2_26 != null) {
              str = closure_2_26.deviceImage;
            }
            if (!str) {
              str = "Default";
            }
            obj.deviceImage = str;
            let nickname;
            if (closure_2_26 != null) {
              nickname = closure_2_26.nickname;
            }
            obj.nickname = nickname;
            obj.light_status = num;
            const registerDeviceApiResult = callback(first[15]).registerDeviceApi(obj, {});
            callback(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                closure_5_31(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_5_36(closure_5_24, merged);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })()).catch((message) => {
              closure_3_31(false);
              const Alert = closure_4_6.Alert;
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              Alert.alert(message);
            });
            const nextPromise = callback(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                closure_5_31(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_5_36(closure_5_24, merged);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })());
          }
        } else {
          closure_2_31(false);
        }
      }
    });
    return function switchLight(arg0) {
      return callback(...arguments);
    };
  })();
  closure_42 = (() => {
    closure_0 = lib.default(async (arg0) => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_31(true);
        if (closure_2_24) {
          let num = 0;
          if (arg0 === 0) {
            num = 1;
          }
          if (closure_2_26) {
            obj = {};
            let device_id;
            if (closure_2_26 != null) {
              device_id = closure_2_26.device_id;
            }
            obj.deviceId = device_id;
            let name;
            if (closure_2_26 != null) {
              name = closure_2_26.name;
            }
            obj.name = name;
            let mac_address;
            if (closure_2_26 != null) {
              mac_address = closure_2_26.mac_address;
            }
            obj.mac = mac_address;
            obj.user_id = closure_2_21;
            let str;
            if (closure_2_26 != null) {
              str = closure_2_26.deviceImage;
            }
            if (!str) {
              str = "Default";
            }
            obj.deviceImage = str;
            let nickname;
            if (closure_2_26 != null) {
              nickname = closure_2_26.nickname;
            }
            obj.nickname = nickname;
            obj.sound_status = num;
            const registerDeviceApiResult = callback(first[15]).registerDeviceApi(obj, {});
            callback(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                closure_5_31(false);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_5_36(closure_5_24, merged);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })()).catch((message) => {
              closure_3_31(false);
              const Alert = closure_4_6.Alert;
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              Alert.alert(message);
            });
            const nextPromise = callback(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                closure_5_31(false);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_5_36(closure_5_24, merged);
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })());
          }
        } else {
          closure_2_31(false);
        }
      }
    });
    return function switchSound(arg0) {
      return callback(...arguments);
    };
  })();
  (() => {
    closure_0 = lib.default(async (arg0) => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_31(true);
        closure_2_12(arg0);
        let str2 = "#FFFFFF";
        if (arg0 >= 0) {
          str2 = "#FFFFFF";
          if (arg0 < closure_2_13.length) {
            str2 = closure_2_13[arg0];
          }
        }
        if (closure_2_26) {
          obj = {};
          let device_id;
          if (closure_2_26 != null) {
            device_id = closure_2_26.device_id;
          }
          obj.deviceId = device_id;
          let name;
          if (closure_2_26 != null) {
            name = closure_2_26.name;
          }
          obj.name = name;
          let mac_address;
          if (closure_2_26 != null) {
            mac_address = closure_2_26.mac_address;
          }
          obj.mac = mac_address;
          obj.user_id = closure_2_21;
          let str3;
          if (closure_2_26 != null) {
            str3 = closure_2_26.deviceImage;
          }
          if (!str3) {
            str3 = "Default";
          }
          obj.deviceImage = str3;
          let nickname;
          if (closure_2_26 != null) {
            nickname = closure_2_26.nickname;
          }
          obj.nickname = nickname;
          obj.led_color = str2;
          const registerDeviceApiResult = callback(first[15]).registerDeviceApi(obj, {});
          callback(first[15]).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_3.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              closure_5_31(false);
              yield closure_0(first[14]).setDeviceData(merged);
              closure_5_36(closure_5_24, merged);
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((message) => {
            closure_3_31(false);
            const Alert = closure_4_6.Alert;
            message = undefined;
            if (message != null) {
              message = message.message;
            }
            Alert.alert(message);
          });
          const nextPromise = callback(first[15]).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_3.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              closure_5_31(false);
              yield closure_0(first[14]).setDeviceData(merged);
              closure_5_36(closure_5_24, merged);
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })());
        }
      }
    });
    return function changeDefaultColor(arg0) {
      return callback(...arguments);
    };
  })();
  function getRGB(result1) {
    const bound = Math.max(0, Math.min(1530, result1));
    let num = 255;
    let num2 = bound;
    let num3 = 0;
    if (bound >= 255) {
      if (bound < 510) {
        num = 510 - bound;
        num2 = 255;
        num3 = 0;
      } else if (bound < 765) {
        num3 = bound - 510;
        num = 0;
        num2 = 255;
      } else if (bound < 1020) {
        num2 = 1020 - bound;
        num = 0;
        num3 = 255;
      } else if (bound < 1275) {
        num = bound - 1020;
        num2 = 0;
        num3 = 255;
      } else {
        num3 = 1530 - bound;
        num = 255;
        num2 = 0;
      }
    }
    const obj = { r: Math.round(num), g: Math.round(num2), b: Math.round(num3) };
    return obj;
  }
  function rgbToHex(rGB) {
    const items = [, , ];
    ({ r: arr[0], g: arr[1], b: arr[2] } = rGB);
    const mapped = items.map((arg0) => arg0.toString(16).padStart(2, "0"));
    return "#" + mapped.join("").toUpperCase();
  }
  const items3 = [first3];
  const effect3 = React.useEffect(() => {
    callback2(rgbToHex(getRGB(first3)));
  }, items3);
  function showNameClick() {
    callback(first);
    lib(true);
  }
  (() => {
    closure_0 = lib.default(async () => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_31(true);
        if (closure_2_10) {
          obj = {};
          let id;
          if (closure_2_26 != null) {
            id = closure_2_26.id;
          }
          obj.device_id = id;
          obj.hex_color = closure_2_44(closure_2_43(closure_2_16));
          const tmp11 = closure_2_44(closure_2_43(closure_2_16));
          const addMyDeviceColorApiResult = callback(first[15]).addMyDeviceColorApi(obj, {});
          callback(first[15]).addMyDeviceColorApi(obj, {}).then((() => {
            closure_0 = closure_3.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                closure_5_31(false);
                closure_5_11(false);
                closure_5_33(closure_5_26);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((message) => {
            closure_3_31(false);
            const Alert = closure_4_6.Alert;
            message = undefined;
            if (message != null) {
              message = message.message;
            }
            Alert.alert(message);
          });
          const nextPromise = callback(first[15]).addMyDeviceColorApi(obj, {}).then((() => {
            closure_0 = closure_3.default(async (arg0) => {
              if (obj) {
                return obj.resume();
              } else {
                closure_5_31(false);
                closure_5_11(false);
                closure_5_33(closure_5_26);
              }
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })());
        } else {
          closure_2_31(false);
          closure_2_11(true);
        }
      }
    });
    return function addDefaultColor() {
      return callback(...arguments);
    };
  })();
  let obj = { edges: ["top"] };
  obj = { showsVerticalScrollIndicator: false, contentContainerStyle: closure_12.scrollContent };
  obj = {
    isBack: false,
    title: first,
    rightIcon: _require(first[19]).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(isFocused.default.User);
    }
  };
  const obj1 = {
    onPress() {
      if (first2) {
        showNameClick();
      } else {
        const Alert = closure_1_6.Alert;
        Alert.alert("Please connect device");
      }
    },
    style: closure_12.editButton
  };
  const obj2 = { name: _require(first[19]).VectorIcons.edit.name, size: 20, color: theme.primary };
  obj1.children = React2.jsx(_require(first[19]).VectorIcons.edit.component, { name: _require(first[19]).VectorIcons.edit.name, size: 20, color: theme.primary });
  obj.children = <get registerCallableModule.TouchableOpacity onPress={function onPress() {
    if (first2) {
      showNameClick();
    } else {
      const Alert = closure_1_6.Alert;
      Alert.alert("Please connect device");
    }
  }} style={closure_12.editButton} />;
  const items4 = [
    React2.jsx(_require(first[18]).Header, {
      isBack: false,
      title: first,
      rightIcon: _require(first[19]).Icons.userCircle,
      rightIconPress() {
        navigation.navigate(isFocused.default.User);
      }
    }),
  ,

  ];
  let obj5 = React2;
  const jsxs = React2.jsxs;
  const View = get_registerCallableModule.View;
  const obj3 = { style: closure_12.connectionStatus };
  const jsx = React2.jsx;
  const View2 = get_registerCallableModule.View;
  const obj4 = {};
  const connectionDot = closure_12.connectionDot;
  const items5 = [, ];
  if (first2) {
    obj4.style = connectionDot;
    items5[0] = <View2 {...obj4} />;
    obj5 = { style: closure_12.connectionText, children: t(mod.default.CONNECTED) };
    items5[1] = <tmp43.Text style={closure_12.connectionText}>{t(mod.default.CONNECTED)}</tmp43.Text>;
    obj3.children = items5;
    let jsxsResult = <View {...obj3} />;
  } else {
    items5[0] = connectionDot;
    items5[1] = closure_12.disconnectedDot;
    obj4.style = items5;
    const items6 = [<View2 {...obj4} />, ];
    const obj6 = {};
    const items7 = [closure_12.connectionText, closure_12.disconnectedText];
    obj6.style = items7;
    obj6.children = t(mod.default.DISCONNECTED);
    items6[1] = <tmp43.Text />;
    obj3.children = items6;
    jsxsResult = <View {...obj3} />;
  }
  items4[1] = jsxsResult;
  const obj7 = { style: items8 };
  items8 = [closure_12.mainContainer];
  const obj8 = { style: items9 };
  items9 = [closure_12.indexContent, { backgroundColor: "#e7e7e7" }];
  const obj9 = {};
  if (first7 != null) {
    const device_image = first7.device_image;
    if (device_image != null) {
      if (device_image.url) {
        const obj10 = {};
        let url;
        if (first7 != null) {
          const device_image2 = first7.device_image;
          if (device_image2 != null) {
            url = device_image2.url;
          }
        }
        obj10.uri = url;
        let tmp57 = obj10;
      }
      obj9.source = tmp57;
      obj9.style = { height: "98%", width: "100%" };
      obj9.resizeMode = "contain";
      const items10 = [tmp55(tmp56, obj9), ];
      const obj11 = { style: closure_12.cupInfo };
      const obj12 = {};
      if (jsxResult) {
        let items11 = ["#4CAF50", "#2E7D32"];
      } else {
        items11 = [, ];
        ({ primary2: arr12[0], primary2: arr12[1] } = theme);
      }
      obj12.colors = items11;
      const obj13 = { borderRadius: _require(first[21]).perfectSize(20) };
      obj12.style = obj13;
      obj12.start = { x: 0, y: 0 };
      obj12.end = { x: 1, y: 1 };
      const obj14 = { style: closure_12.batteryBadge };
      const obj15 = { style: closure_12.batteryNum };
      const items12 = [tmp8, "%"];
      obj15.children = items12;
      const items13 = [<get registerCallableModule.Text style={closure_12.batteryNum} />, ];
      if (jsxResult) {
        const obj16 = { name: _require(first[19]).VectorIcons.batteryCharging.name, size: 14, color: "#FFFFFF" };
        const obj17 = { marginLeft: 4 };
        obj16.style = obj17;
        jsxResult = React2.jsx(_require(first[19]).VectorIcons.batteryCharging.component, { name: _require(first[19]).VectorIcons.batteryCharging.name, size: 14, color: "#FFFFFF" });
      }
      items13[1] = jsxResult;
      obj14.children = items13;
      obj12.children = <get registerCallableModule.View style={closure_12.batteryBadge} />;
      obj11.children = <first2.default />;
      items10[1] = <get registerCallableModule.View style={closure_12.cupInfo} />;
      obj8.children = items10;
      const items14 = [tmp53(tmp54, obj8), , , ];
      const obj18 = {};
      const items15 = [closure_12.controlsContainer, ];
      const obj19 = {};
      let num3 = 0;
      if (first2) {
        num3 = _require(first[21]).perfectSize(20);
      }
      obj19.marginBottom = num3;
      items15[1] = obj19;
      obj18.style = items15;
      const obj20 = {
        onPress() {
              if (first2) {
                callback7(first4);
              } else {
                const Alert = closure_1_6.Alert;
                Alert.alert("Please connect device");
              }
            }
      };
      const items16 = [closure_12.controlButton];
      obj20.style = items16;
      if (first4 === 1) {
        const obj21 = { colors: ["#01AEF0", "#0087BA"], start: { x: -0.08, y: 0.5 }, end: { x: 1.45, y: 0.5 } };
        const items17 = [closure_12.button];
        obj21.style = items17;
        const obj22 = { name: _require(first[19]).VectorIcons.light.on.name, size: 24, color: "#FFFFFF" };
        const items18 = [closure_12.controlIconActive];
        obj22.style = items18;
        const items19 = [React2.jsx(_require(first[19]).VectorIcons.light.on.component, { name: _require(first[19]).VectorIcons.light.on.name, size: 24, color: "#FFFFFF" }), ];
        const obj23 = {};
        const items20 = [closure_12.controlTextActive];
        obj23.style = items20;
        obj23.children = t(mod.default.LIGHT);
        items19[1] = <get registerCallableModule.Text />;
        obj21.children = items19;
        let jsxsResult1 = <first2.default colors={["#01AEF0", "#0087BA"]} start={{ x: -0.08, y: 0.5 }} end={{ x: 1.45, y: 0.5 }} />;
      } else {
        theme = React2;
        theme = get_registerCallableModule;
        const obj24 = {};
        theme = closure_12;
        obj24.style = closure_12.activeButton;
        theme = _require;
        theme = first;
        const obj25 = { name: _require(first[19]).VectorIcons.light.off.name, size: 24, color: "#677E8F" };
        theme = closure_12;
        const items21 = [closure_12.controlIcon];
        obj25.style = items21;
        const items22 = [React2.jsx(_require(first[19]).VectorIcons.light.off.component, { name: _require(first[19]).VectorIcons.light.off.name, size: 24, color: "#677E8F" }), ];
        const obj26 = {};
        theme = closure_12;
        const items23 = [closure_12.controlText];
        obj26.style = items23;
        theme = mod;
        obj26.children = t(mod.default.LIGHT);
        items22[1] = <get registerCallableModule.Text />;
        obj24.children = items22;
        jsxsResult1 = <get registerCallableModule.View />;
      }
      obj20.children = jsxsResult1;
      const items24 = [
        <get registerCallableModule.TouchableOpacity onPress={function onPress() {
              if (first2) {
                callback7(first4);
              } else {
                const Alert = closure_1_6.Alert;
                Alert.alert("Please connect device");
              }
            }} />,

      ];
      const obj27 = {
        onPress() {
              if (first2) {
                callback8(first5);
              } else {
                const Alert = closure_1_6.Alert;
                Alert.alert("Please connect device");
              }
            }
      };
      const items25 = [closure_12.controlButton];
      obj27.style = items25;
      if (first5 === 1) {
        const obj28 = { colors: ["#01AEF0", "#0087BA"], start: { x: -0.08, y: 0.5 }, end: { x: 1.45, y: 0.5 } };
        const items26 = [closure_12.button];
        obj28.style = items26;
        const obj29 = { name: _require(first[19]).VectorIcons.sound.on.name, size: 24, color: "#FFFFFF" };
        const items27 = [closure_12.controlIconActive];
        obj29.style = items27;
        const items28 = [React2.jsx(_require(first[19]).VectorIcons.sound.on.component, { name: _require(first[19]).VectorIcons.sound.on.name, size: 24, color: "#FFFFFF" }), ];
        const obj30 = {};
        theme = closure_12;
        const items29 = [closure_12.controlTextActive];
        obj30.style = items29;
        theme = mod;
        obj30.children = t(mod.default.SOUND);
        items28[1] = <get registerCallableModule.Text />;
        obj28.children = items28;
        theme = <first2.default colors={["#01AEF0", "#0087BA"]} start={{ x: -0.08, y: 0.5 }} end={{ x: 1.45, y: 0.5 }} />;
      } else {
        theme = React2;
        theme = get_registerCallableModule;
        const obj31 = {};
        theme = closure_12;
        obj31.style = closure_12.activeButton;
        theme = _require;
        theme = first;
        const obj32 = { name: _require(first[19]).VectorIcons.sound.off.name, size: 24, color: "#677E8F" };
        theme = closure_12;
        const items30 = [closure_12.controlIcon];
        obj32.style = items30;
        const items31 = [React2.jsx(_require(first[19]).VectorIcons.sound.off.component, { name: _require(first[19]).VectorIcons.sound.off.name, size: 24, color: "#677E8F" }), ];
        const obj33 = {};
        theme = closure_12;
        const items32 = [closure_12.controlText];
        obj33.style = items32;
        theme = mod;
        obj33.children = t(mod.default.SOUND);
        items31[1] = <get registerCallableModule.Text />;
        obj31.children = items31;
        theme = <get registerCallableModule.View />;
      }
      obj27.children = theme;
      items24[1] = <get registerCallableModule.TouchableOpacity onPress={function onPress() {
        if (first2) {
          callback8(first5);
        } else {
          const Alert = closure_1_6.Alert;
          Alert.alert("Please connect device");
        }
      }} />;
      obj18.children = items24;
      items14[1] = <get registerCallableModule.View />;
      theme = !first2;
      if (theme) {
        theme = React2;
        theme = get_registerCallableModule;
        const obj34 = {};
        theme = closure_12;
        const items33 = [closure_12.connectButton, ];
        const obj35 = {};
        theme = _require;
        theme = first;
        obj35.marginBottom = _require(first[21]).perfectSize(20);
        items33[1] = obj35;
        obj34.style = items33;
        obj34.onPress = function onPress() {
          return navigation.navigate(isFocused.default.DeviceSearch);
        };
        theme = first2;
        const obj36 = {};
        const items34 = [theme.primary, "#004D8C"];
        obj36.colors = items34;
        obj36.start = { x: 0, y: 0 };
        obj36.end = { x: 1, y: 1 };
        const obj37 = {};
        theme = closure_12;
        obj37.style = closure_12.connectButtonGradient;
        const obj38 = {};
        theme = closure_12;
        obj38.style = closure_12.connectButtonText;
        theme = mod;
        obj38.children = t(mod.default.CONNECT_TO_CUP);
        obj37.children = <get registerCallableModule.Text />;
        obj36.children = <get registerCallableModule.View />;
        obj34.children = <first2.default />;
        theme = <get registerCallableModule.TouchableOpacity />;
      }
      items14[2] = theme;
      theme = React2;
      theme = get_registerCallableModule;
      const obj39 = {
        visible: defaultResult1[0],
        transparent: true,
        animationType: "fade",
        onRequestClose() {
              return lib(false);
            }
      };
      const obj40 = {};
      theme = closure_12;
      obj40.style = closure_12.modalOverlay;
      const obj41 = {};
      theme = closure_12;
      obj41.style = closure_12.modalContent;
      const obj42 = {};
      theme = closure_12;
      const items35 = [closure_12.modalTitle, ];
      const obj43 = { color: theme.primary };
      items35[1] = obj43;
      obj42.style = items35;
      theme = mod;
      obj42.children = t(mod.default.DEVICE_NAME);
      const items36 = [<get registerCallableModule.Text />, , ];
      const obj44 = {};
      theme = closure_12;
      obj44.style = closure_12.nameInput;
      obj44.value = first1;
      obj44.onChangeText = function onChangeText(arg0) {
        return callback(arg0);
      };
      obj44.placeholder = "Enter device name";
      items36[1] = <get registerCallableModule.TextInput />;
      const obj45 = {};
      theme = closure_12;
      obj45.style = closure_12.modalButtons;
      const obj46 = {};
      theme = closure_12;
      obj46.style = closure_12.modalButton;
      obj46.onPress = function onPress() {
        return lib(false);
      };
      const obj47 = {};
      theme = closure_12;
      obj47.style = closure_12.modalButtonText;
      obj47.children = mod.default.CANCEL;
      obj46.children = <get registerCallableModule.Text />;
      const items37 = [<get registerCallableModule.TouchableOpacity />, ];
      const obj48 = {};
      theme = closure_12;
      const items38 = [closure_12.modalButton, ];
      theme = closure_12;
      items38[1] = closure_12.modalButtonPrimary;
      obj48.style = items38;
      obj48.onPress = function nameConfirm() {
        callback3(true);
        if (first1) {
          if (first7) {
            const obj = {};
            let device_id;
            if (first7 != null) {
              device_id = first7.device_id;
            }
            obj.deviceId = device_id;
            let name;
            if (first7 != null) {
              name = first7.name;
            }
            obj.name = name;
            let mac_address;
            if (first7 != null) {
              mac_address = first7.mac_address;
            }
            obj.mac = mac_address;
            obj.user_id = closure_21;
            let str;
            if (first7 != null) {
              str = first7.deviceImage;
            }
            if (!str) {
              str = "Default";
            }
            obj.deviceImage = str;
            obj.nickname = first1;
            const registerDeviceApiResult = navigation(first[15]).registerDeviceApi(obj, {});
            navigation(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                closure_3_30(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_3_3(false);
                closure_3_32();
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })()).catch((message) => {
              closure_1_30(false);
              closure_1_3(true);
              const Alert = closure_2_6.Alert;
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              Alert.alert(message);
            });
            const nextPromise = navigation(first[15]).registerDeviceApi(obj, {}).then((() => {
              closure_0 = closure_3.default(async (arg0) => {
                closure_3_30(false);
                let device;
                if (arg0 != null) {
                  const data = arg0.data;
                  if (data != null) {
                    device = data.device;
                  }
                }
                const merged = Object.assign({}, device);
                yield closure_0(first[14]).setDeviceData(merged);
                closure_3_3(false);
                closure_3_32();
              });
              return function(arg0) {
                return callback(...arguments);
              };
            })());
          }
        }
      };
      const obj49 = {};
      theme = closure_12;
      obj49.style = closure_12.modalButtonTextPrimary;
      obj49.children = mod.default.SAVE;
      obj48.children = <get registerCallableModule.Text />;
      items37[1] = <get registerCallableModule.TouchableOpacity />;
      obj45.children = items37;
      items36[2] = <get registerCallableModule.View />;
      obj41.children = items36;
      obj40.children = <get registerCallableModule.View />;
      obj39.children = <get registerCallableModule.View />;
      items14[3] = <get registerCallableModule.Modal visible={defaultResult1[0]} transparent animationType="fade" onRequestClose={function onRequestClose() {
        return lib(false);
      }} />;
      obj7.children = items14;
      items4[2] = tmp51(tmp52, obj7);
      obj.children = items4;
      const items39 = [<get registerCallableModule.ScrollView {...obj} />, ];
      if (jsxResult1) {
        theme = React2;
        theme = _require;
        theme = first;
        const obj50 = {};
        theme = mod;
        obj50.message = mod.default.SYNCING;
        jsxResult1 = React2.jsx(_require(first[18]).FlashMessage, {});
      }
      items39[1] = jsxResult1;
      obj.children = items39;
      return React2.jsxs(_require(first[18]).Container, obj);
    }
  }
  tmp57 = _require(first[20]);
};
