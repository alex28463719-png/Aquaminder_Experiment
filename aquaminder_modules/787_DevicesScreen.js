// Module ID: 787
// Function ID: 8122
// Name: DevicesScreen
// Dependencies: [1, 363, 38, 119, 2, 500, 501, 658, 683, 251, 529, 512, 644, 646, 657, 669, 788, 671, 689, 780]
// Exports: default

// Module 787 (DevicesScreen)
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
import closure_10 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(_mod501);
let closure_8 = module_1(_mod658);
let closure_9 = module_1(LinearGradient);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, paddingHorizontal: require("module_15"), paddingTop: require("module_30"), backgroundColor: "#FFF" };
obj.mainContainer = obj;
obj.loadingOverlay = { justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 100 };
obj.devicesList = {};
obj = { height: require("module_252"), width: "48%", backgroundColor: "#edf6fe", borderRadius: require("module_10"), marginBottom: require("module_15"), marginRight: require("module_5"), marginTop: require("module_15") };
obj.deviceItem = obj;
obj.deviceItemContent = { alignItems: "center", justifyContent: "center", width: "100%", height: "100%" };
obj.connectedDevice = { borderWidth: 1, borderColor: "#0066B0" };
obj.deviceImageContainer = { justifyContent: "center", alignItems: "center", width: "100%", height: "65%" };
obj.cardImage = { height: "98%", width: "100%", alignSelf: "center" };
let obj1 = { height: "110%", position: "absolute", top: -20, width: require("module_80"), alignSelf: "center", zIndex: 1 };
obj.staticCardImage = obj1;
let obj2 = { flexDirection: "row", alignItems: "center", width: "100%", height: "35%", paddingHorizontal: require("module_11"), justifyContent: "space-between", overflow: "hidden" };
obj.deviceInfoStyle = obj2;
obj.deviceInfo = { width: "60%", overflow: "hidden" };
obj.deviceName = { fontSize: require("module_16"), fontWeight: "600" };
let obj4 = { fontSize: require("module_11"), color: "#A2A2A2", fontWeight: "500", marginTop: require("module_5") };
obj.deviceStatus = obj4;
obj.emptyState = { alignItems: "center", justifyContent: "center", padding: 50 };
let obj3 = { fontSize: require("module_16"), fontWeight: "600" };
obj.emptyStateText = { fontSize: require("module_16"), color: "#677E8F", marginBottom: require("module_20") };
let obj5 = { fontSize: require("module_16"), color: "#677E8F", marginBottom: require("module_20") };
obj.floatingAddButton = { position: "absolute", bottom: require("module_30"), right: require("module_30"), width: require("module_60"), height: require("module_60"), borderRadius: require("module_30"), justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: "#ebf5f8", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3 };
let obj6 = { position: "absolute", bottom: require("module_30"), right: require("module_30"), width: require("module_60"), height: require("module_60"), borderRadius: require("module_30"), justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: "#ebf5f8", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3 };
obj.plusIcon = { height: require("module_33"), width: require("module_33") };
let obj8 = { justifyContent: "center", alignItems: "center", width: require("module_60"), height: require("module_60"), borderRadius: require("module_30") };
obj.gradientButton = obj8;
obj.loadingOverlayView = { justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 100, position: "absolute" };
const styles = StyleSheet.create(obj);

export default function DevicesScreen() {
  _require = _require(529).useNavigation();
  const defaultResult = closure_3.default(React.useState([]), 2);
  dependencyMap = defaultResult[1];
  [closure_2, closure_3] = closure_3.default(React.useState(null), 2);
  React = _require(512).useTranslation().t;
  const theme = _require(644).useTheme();
  const isFocused = _require(529).useIsFocused();
  const defaultResult1 = closure_3.default(React.useState(null), 2);
  [closure_7, closure_8] = closure_3.default(React.useState(null), 2);
  const defaultResult2 = closure_3.default(React.useState(null), 2);
  [r10052, closure_9] = closure_3.default(React.useState(null), 2);
  const defaultResult3 = closure_3.default(React.useState(null), 2);
  [tmp8, closure_10] = closure_3.default(React.useState(false), 2);
  const defaultResult4 = closure_3.default(React.useState(false), 2);
  [r10065, closure_11] = closure_3.default(React.useState(false), 2);
  const defaultResult5 = closure_3.default(React.useState(false), 2);
  [tmp11, _interopRequireWildcard] = closure_3.default(React.useState(false), 2);
  const defaultResult7 = closure_3.default(React.useState(""), 2);
  closure_13 = defaultResult7[1];
  let items = [isFocused];
  const effect = React.useEffect(() => {
    if (isFocused) {
      callback(true);
      callback2();
      callback3();
    }
  }, items);
  closure_14 = (() => {
    closure_0 = closure_1_2.default(async () => {
      closure_2_11(true);
      try {
        const tmp4 = yield closure_3_8.default.getItem("deviceData");
        let parsed = null;
        if (tmp4) {
          const _JSON = JSON;
          parsed = JSON.parse(tmp4);
        }
        if (parsed) {
          tmp10(tmp9);
        } else {
          tmp10(null);
        }
        if (parsed) {
          if (tmp9.device_id) {
            const tmp21 = yield closure_0(closure_1[13]).connectDevice(tmp9);
            if (tmp21) {
              const obj = {};
              let id;
              if (tmp22 != null) {
                id = tmp22.id;
              }
              obj.deviceId = id;
              let mac;
              if (tmp22 != null) {
                mac = tmp22.mac;
              }
              obj.mac = mac;
              let deviceImage;
              if (tmp22 != null) {
                deviceImage = tmp21.deviceImage;
              }
              let str3 = deviceImage;
              if (!deviceImage) {
                str3 = "Default";
              }
              obj.deviceImage = str3;
              const merged = Object.assign({}, tmp22, obj);
              closure_2_11(false);
              closure_2_3(merged);
              closure_2_8(merged);
              let nickname;
              if (tmp9 != null) {
                nickname = parsed.nickname;
              }
              closure_2_13(nickname);
              const tmp43 = closure_2_13;
            } else {
              closure_2_11(false);
              closure_2_13("");
            }
          }
        }
        closure_2_11(false);
      } catch (err) {
        closure_2_11(false);
        closure_2_3(null);
        closure_2_8(null);
        closure_2_9(null);
        closure_2_13("");
      }
    });
    return function checkConnectDevice() {
      return callback(...arguments);
    };
  })();
  closure_15 = (() => {
    closure_0 = closure_1_2.default(async () => {
      const tmp = yield closure_0(closure_1[14]).getUserData();
      let id;
      if (tmp != null) {
        const user = tmp.user;
        if (user != null) {
          id = user.id;
        }
      }
      const myDevicesApi = callback(669).getMyDevicesApi(id, {}, {});
      myDevicesApi.then((data) => {
        closure_3_10(false);
        let devices;
        if (data != null) {
          data = data.data;
          if (data != null) {
            devices = data.devices;
          }
        }
        closure_3_1(devices);
      }).catch((arg0) => {
        closure_3_10(false);
      });
    });
    return function loadSavedDevices() {
      return callback(...arguments);
    };
  })();
  closure_16 = (() => {
    closure_0 = closure_1_2.default(async (arg0) => {
      closure_2_12(true);
      try {
        let obj = {};
        let device_id;
        if (arg0 != null) {
          device_id = arg0.device_id;
        }
        obj.id = device_id;
        let name;
        if (arg0 != null) {
          name = arg0.name;
        }
        obj.name = name;
        let mac_address;
        if (arg0 != null) {
          mac_address = arg0.mac_address;
        }
        obj.mac = mac_address;
        let url;
        if (arg0 != null) {
          const device_image = arg0.device_image;
          if (device_image != null) {
            url = device_image.url;
          }
        }
        obj.deviceImage = url;
        if (yield closure_0(closure_1[13]).connectDevice(obj)) {
          const tmp23 = yield closure_0(closure_1[14]).getUserData();
          let id;
          if (tmp23 != null) {
            const user = tmp23.user;
            if (user != null) {
              id = user.id;
            }
          }
          obj = {};
          let device_id1;
          if (arg0 != null) {
            device_id1 = arg0.device_id;
          }
          obj.deviceId = device_id1;
          let name1;
          if (arg0 != null) {
            name1 = arg0.name;
          }
          obj.name = name1;
          if (arg0.mac) {
            device_id = arg0.mac;
          } else if (arg0 != null) {
            device_id = arg0.device_id;
          }
          obj.mac = device_id;
          obj.user_id = id;
          let url1;
          if (arg0 != null) {
            const device_image2 = arg0.device_image;
            if (device_image2 != null) {
              url1 = device_image2.url;
            }
          }
          let str2 = url1;
          if (!url1) {
            str2 = "Default";
          }
          obj.deviceImage = str2;
          const registerDeviceApiResult = callback(669).registerDeviceApi(obj, {});
          callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_4_2.default(async (arg0) => {
              closure_5_12(false);
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              closure_5_14();
              closure_5_15();
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((message) => {
            closure_3_12(false);
            const Alert = theme.Alert;
            message = undefined;
            if (message != null) {
              message = message.message;
            }
            Alert.alert(message);
          });
          const nextPromise = callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_4_2.default(async (arg0) => {
              closure_5_12(false);
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              closure_5_14();
              closure_5_15();
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })());
        } else {
          const _console = console;
          console.log("Device not connected.");
        }
        closure_2_12(false);
      } catch (tmp45) {
        closure_2_12(false);
        throw tmp45;
      }
    });
    return function handleConnectDevice(arg0) {
      return callback(...arguments);
    };
  })();
  closure_17 = (() => {
    closure_0 = closure_1_2.default(async (arg0, arg1) => {
      if (obj) {
        return obj.resume();
      } else {
        closure_0 = arg0;
        closure_1 = arg1;
        let Alert = theme.Alert;
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
              closure_0 = closure_4_2.default(async () => {
                if (closure_2_1) {
                  yield closure_0(closure_1[13]).closeBLEConnection(closure_5_7);
                }
                let id;
                if (lib != null) {
                  id = lib.id;
                }
                const deleteDeviceApiResult = lib(669).deleteDeviceApi(id, {}, {});
                lib(669).deleteDeviceApi(id, {}, {}).then((/* F8155 */ function() { ... })()).catch(/* F8159 */ function() { ... });
              });
              return function onPress() {
                return callback(...arguments);
              };
            })()
        };
        items[1] = obj;
        const obj1 = { cancelable: false };
        Alert.alert(closure_3_7.default.CONFIRM_FORGOT, closure_3_7.default.ARE_YOU_SURE_YOU_WANT_TO_FORGOT, items, obj1);
      }
    });
    return function handleForgot(arg0, arg1) {
      return callback(...arguments);
    };
  })();
  let obj = { edges: ["top"] };
  obj = {
    isBack: false,
    title: mod.default.MY_DEVICES,
    deviceName: defaultResult7[0],
    rightIcon: _require(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(isFocused.default.User);
    }
  };
  let items1 = [
    React2.jsx(_require(671).Header, {
      isBack: false,
      title: mod.default.MY_DEVICES,
      deviceName: defaultResult7[0],
      rightIcon: _require(689).Icons.userCircle,
      rightIconPress() {
        navigation.navigate(isFocused.default.User);
      }
    }),
  ,

  ];
  let obj2 = React2;
  if (tmp8) {
    obj = {};
    let items2 = [theme.StyleSheet.absoluteFillObject, closure_11.loadingOverlay];
    obj.style = items2;
    let obj1 = { size: "large", color: theme.primary2 };
    obj.children = <theme.ActivityIndicator size="large" color={theme.primary2} />;
    let jsxResult = <theme.View />;
  } else {
    obj2 = { style: closure_11.mainContainer };
    let obj3 = {
      data: defaultResult[0],
      numColumns: 2,
      renderItem: function renderDeviceItem(item) {
          item = item.item;
          let id;
          if (id != null) {
            id = id.id;
          }
          const table = tmp3;
          let obj = {};
          const items = [closure_1_11.deviceItem, ];
          let connectedDevice = tmp3;
          if (id === item.device_id) {
            connectedDevice = closure_1_11.connectedDevice;
          }
          items[1] = connectedDevice;
          obj.style = items;
          obj = {
            style: closure_1_11.deviceItemContent,
            onPress() {

            },
            onLongPress() {
              closure_1_17(item, closure_1);
            }
          };
          obj = { style: closure_1_11.deviceImageContainer };
          const obj1 = {};
          if (item != null) {
            const device_image = item.device_image;
            if (device_image != null) {
              if (device_image.url) {
                const obj2 = {};
                let url;
                if (item != null) {
                  const device_image2 = item.device_image;
                  if (device_image2 != null) {
                    url = device_image2.url;
                  }
                }
                obj2.uri = url;
                let tmp11 = obj2;
              }
              obj1.source = tmp11;
              obj1.style = closure_1_11.cardImage;
              obj1.resizeMode = "contain";
              obj.children = tmp9(tmp10, obj1);
              const items1 = [tmp7(tmp8, obj), ];
              const obj3 = { style: closure_1_11.deviceInfoStyle };
              const obj4 = { style: closure_1_11.deviceInfo };
              let name;
              if (item != null) {
                name = item.name;
              }
              let nickname;
              if (item != null) {
                nickname = item.nickname;
              }
              let jsxResult = name !== nickname;
              if (jsxResult) {
                const obj5 = {};
                let nickname1;
                if (item != null) {
                  nickname1 = item.nickname;
                }
                obj5.children = nickname1;
                jsxResult = <theme.Text />;
              }
              const items2 = [jsxResult, ];
              const obj6 = {};
              const items3 = [closure_1_11.deviceName, ];
              const obj7 = { color: theme.secondary };
              items3[1] = obj7;
              obj6.style = items3;
              obj6.children = item.name;
              items2[1] = <theme.Text />;
              obj4.children = items2;
              const items4 = [<theme.View style={closure_1_11.deviceInfo} />, ];
              const obj8 = {
                value: tmp3,
                onValueChange: (() => {
                      closure_0 = closure_2_2.default(async (arg0) => {
                        if (yield closure_0(closure_1[13]).checkBluetoothStatus()) {
                          if (arg0 === true) {
                            closure_3_16(callback);
                          } else {
                            yield closure_0(closure_1[13]).closeBLEConnection(closure_3_7);
                            closure_3_3(null);
                            closure_3_8(null);
                          }
                        }
                      });
                      return function(arg0) {
                        return callback(...arguments);
                      };
                    })(),
                trackColor: { false: "#E0E0E0", true: "#C7E5FF" },
                thumbColor: tmp3 ? theme.primary : theme.white
              };
              items4[1] = <theme.Switch value={tmp3} onValueChange={(() => {
                closure_0 = closure_2_2.default(async (arg0) => {
                  if (yield closure_0(closure_1[13]).checkBluetoothStatus()) {
                    if (arg0 === true) {
                      closure_3_16(callback);
                    } else {
                      yield closure_0(closure_1[13]).closeBLEConnection(closure_3_7);
                      closure_3_3(null);
                      closure_3_8(null);
                    }
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })()} trackColor={{ false: "#E0E0E0", true: "#C7E5FF" }} thumbColor={tmp3 ? theme.primary : theme.white} />;
              obj3.children = items4;
              items1[1] = <theme.View style={closure_1_11.deviceInfoStyle} />;
              obj.children = items1;
              obj.children = tmp5(tmp6, obj);
              return <theme.View {...obj} />;
            }
          }
          tmp11 = navigation(table[16]);
        },
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
      keyExtractor(id) {
          return id.id;
        },
      contentContainerStyle: closure_11.devicesList,
      ListEmptyComponent() {
          let obj = { style: closure_1_11.emptyState };
          obj = { style: closure_1_11.emptyStateText, children: t(closure_1_7.default.NO_DEVICES_FOUND) };
          obj.children = <theme.Text style={closure_1_11.emptyStateText}>{t(closure_1_7.default.NO_DEVICES_FOUND)}</theme.Text>;
          return <theme.View style={closure_1_11.emptyStateText}>{t(closure_1_7.default.NO_DEVICES_FOUND)}</theme.View>;
        }
    };
    let items3 = [
      <theme.FlatList data={defaultResult[0]} numColumns={2} renderItem={function renderDeviceItem(item) {
          item = item.item;
          let id;
          if (id != null) {
            id = id.id;
          }
          const table = tmp3;
          let obj = {};
          const items = [closure_1_11.deviceItem, ];
          let connectedDevice = tmp3;
          if (id === item.device_id) {
            connectedDevice = closure_1_11.connectedDevice;
          }
          items[1] = connectedDevice;
          obj.style = items;
          obj = {
            style: closure_1_11.deviceItemContent,
            onPress() {

            },
            onLongPress() {
              closure_1_17(item, closure_1);
            }
          };
          obj = { style: closure_1_11.deviceImageContainer };
          const obj1 = {};
          if (item != null) {
            const device_image = item.device_image;
            if (device_image != null) {
              if (device_image.url) {
                const obj2 = {};
                let url;
                if (item != null) {
                  const device_image2 = item.device_image;
                  if (device_image2 != null) {
                    url = device_image2.url;
                  }
                }
                obj2.uri = url;
                let tmp11 = obj2;
              }
              obj1.source = tmp11;
              obj1.style = closure_1_11.cardImage;
              obj1.resizeMode = "contain";
              obj.children = tmp9(tmp10, obj1);
              const items1 = [tmp7(tmp8, obj), ];
              const obj3 = { style: closure_1_11.deviceInfoStyle };
              const obj4 = { style: closure_1_11.deviceInfo };
              let name;
              if (item != null) {
                name = item.name;
              }
              let nickname;
              if (item != null) {
                nickname = item.nickname;
              }
              let jsxResult = name !== nickname;
              if (jsxResult) {
                const obj5 = {};
                let nickname1;
                if (item != null) {
                  nickname1 = item.nickname;
                }
                obj5.children = nickname1;
                jsxResult = <theme.Text />;
              }
              const items2 = [jsxResult, ];
              const obj6 = {};
              const items3 = [closure_1_11.deviceName, ];
              const obj7 = { color: theme.secondary };
              items3[1] = obj7;
              obj6.style = items3;
              obj6.children = item.name;
              items2[1] = <theme.Text />;
              obj4.children = items2;
              const items4 = [<theme.View style={closure_1_11.deviceInfo} />, ];
              const obj8 = {
                value: tmp3,
                onValueChange: (() => {
                      closure_0 = closure_2_2.default(async (arg0) => {
                        if (yield closure_0(closure_1[13]).checkBluetoothStatus()) {
                          if (arg0 === true) {
                            closure_3_16(callback);
                          } else {
                            yield closure_0(closure_1[13]).closeBLEConnection(closure_3_7);
                            closure_3_3(null);
                            closure_3_8(null);
                          }
                        }
                      });
                      return function(arg0) {
                        return callback(...arguments);
                      };
                    })(),
                trackColor: { false: "#E0E0E0", true: "#C7E5FF" },
                thumbColor: tmp3 ? theme.primary : theme.white
              };
              items4[1] = <theme.Switch value={tmp3} onValueChange={(() => {
                closure_0 = closure_2_2.default(async (arg0) => {
                  if (yield closure_0(closure_1[13]).checkBluetoothStatus()) {
                    if (arg0 === true) {
                      closure_3_16(callback);
                    } else {
                      yield closure_0(closure_1[13]).closeBLEConnection(closure_3_7);
                      closure_3_3(null);
                      closure_3_8(null);
                    }
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })()} trackColor={{ false: "#E0E0E0", true: "#C7E5FF" }} thumbColor={tmp3 ? theme.primary : theme.white} />;
              obj3.children = items4;
              items1[1] = <theme.View style={closure_1_11.deviceInfoStyle} />;
              obj.children = items1;
              obj.children = tmp5(tmp6, obj);
              return <theme.View {...obj} />;
            }
          }
          tmp11 = navigation(table[16]);
        }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyExtractor={function keyExtractor(id) {
          return id.id;
        }} contentContainerStyle={closure_11.devicesList} ListEmptyComponent={function ListEmptyComponent() {
          let obj = { style: closure_1_11.emptyState };
          obj = { style: closure_1_11.emptyStateText, children: t(closure_1_7.default.NO_DEVICES_FOUND) };
          obj.children = <theme.Text style={closure_1_11.emptyStateText}>{t(closure_1_7.default.NO_DEVICES_FOUND)}</theme.Text>;
          return <theme.View style={closure_1_11.emptyStateText}>{t(closure_1_7.default.NO_DEVICES_FOUND)}</theme.View>;
        }} />,

    ];
    let obj4 = {};
    let items4 = [closure_11.floatingAddButton, ];
    let obj5 = { backgroundColor: "#ebf5f8" };
    items4[1] = obj5;
    obj4.style = items4;
    obj4.onPress = function handleAddNewDevice() {
      navigation.navigate(isFocused.default.DeviceSearch);
    };
    let obj6 = { colors: ["#7DC4F8", "#0066B0"], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: closure_11.gradientButton };
    let obj7 = { source: _require(689).Icons.plus_IC, tintColor: "#FFFFFF", style: closure_11.plusIcon };
    obj6.children = <theme.Image source={_require(689).Icons.plus_IC} tintColor="#FFFFFF" style={closure_11.plusIcon} />;
    obj4.children = <mod2.default colors={["#7DC4F8", "#0066B0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_11.gradientButton} />;
    items3[1] = <theme.TouchableOpacity />;
    obj2.children = items3;
    jsxResult = <theme.View style={closure_11.mainContainer} />;
  }
  items1[1] = jsxResult;
  if (jsxResult1) {
    let obj8 = {};
    const items5 = [theme.StyleSheet.absoluteFillObject, closure_11.loadingOverlayView];
    obj8.style = items5;
    const obj9 = { size: "large", color: theme.primary2 };
    obj8.children = <theme.ActivityIndicator size="large" color={theme.primary2} />;
    jsxResult1 = <theme.View />;
  }
  items1[2] = jsxResult1;
  obj.children = items1;
  return React2.jsxs(_require(671).Container, {
    isBack: false,
    title: mod.default.MY_DEVICES,
    deviceName: defaultResult7[0],
    rightIcon: _require(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(isFocused.default.User);
    }
  });
};
