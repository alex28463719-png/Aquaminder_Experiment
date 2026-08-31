// Module ID: 786
// Function ID: 8078
// Name: DeviceChooseVariantScreen
// Dependencies: [1, 363, 38, 119, 2, 658, 500, 683, 251, 512, 529, 644, 689, 669, 657, 671, 780]
// Exports: default

// Module 786 (DeviceChooseVariantScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod658 from "module_658" /* 658 */;
import LinearGradient from "LinearGradient" /* 683 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_9 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod658);
let closure_7 = module_1(_mod500);
let closure_8 = module_1(LinearGradient);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { marginHorizontal: require("module_15"), marginTop: require("module_10"), alignItems: "center" };
obj.mainContainer = obj;
obj = { width: require("module_30"), height: require("module_30") };
obj.settingsIcon = obj;
obj.cupImage = { width: "100%", height: require("module_300") };
let obj1 = { width: "100%", height: require("module_300") };
obj.variantsContainer = { paddingHorizontal: require("module_10"), marginTop: require("module_30") };
let obj3 = { alignItems: "center", height: require("module_150"), width: require("module_140"), justifyContent: "center", borderRadius: require("module_10"), backgroundColor: "#F0F7FE", marginHorizontal: require("module_7") };
obj.variantItem = obj3;
let obj4 = { backgroundColor: "#C7E5FF", borderWidth: require("get registerCallableModule"), borderColor: "#0066B0" };
obj.selectedVariantItem = obj4;
let obj2 = { paddingHorizontal: require("module_10"), marginTop: require("module_30") };
obj.variantIcon = { width: require("module_80"), height: require("module_80"), marginBottom: require("module_20") };
let obj6 = { fontSize: require("module_15"), color: "#4B5F6D", textAlign: "center", fontWeight: "500" };
obj.variantText = obj6;
let obj7 = { flexDirection: "row", alignItems: "center", width: "100%", position: "absolute", bottom: 0, paddingHorizontal: require("module_20"), justifyContent: "center", backgroundColor: "#fff", height: require("module_60") };
obj.resetBox = obj7;
const obj8 = { backgroundColor: "#F1F8FE", width: require("module_140"), alignItems: "center", justifyContent: "center", height: require("module_43"), borderRadius: require("module_10"), marginRight: require("module_10") };
obj.setItemViewActive = obj8;
let obj9 = { color: "#677E8F", fontSize: require("module_16"), fontWeight: "600" };
obj.skipButtonText = obj9;
let obj10 = { width: require("module_140"), alignItems: "center", justifyContent: "center", height: require("module_43"), borderRadius: require("module_10") };
obj.setItemView = obj10;
const obj11 = { width: require("module_140"), alignItems: "center", justifyContent: "center", height: require("module_43"), borderRadius: require("module_10") };
obj.gradientButton = obj11;
let obj5 = { width: require("module_80"), height: require("module_80"), marginBottom: require("module_20") };
obj.doneButtonText = { fontSize: require("module_16"), fontWeight: "600" };
const obj13 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: require("module_30"), marginBottom: require("module_80") };
obj.colorsList = obj13;
const obj12 = { fontSize: require("module_16"), fontWeight: "600" };
obj.colorItem = { width: require("module_50"), height: require("module_50"), borderWidth: PREDEF_RES.perfectSize(2.5), borderColor: "#C7E5FF", borderRadius: require("module_60"), marginRight: require("module_15"), marginBottom: require("module_10"), justifyContent: "center", alignItems: "center" };
const obj14 = { width: require("module_50"), height: require("module_50"), borderWidth: PREDEF_RES.perfectSize(2.5), borderColor: "#C7E5FF", borderRadius: require("module_60"), marginRight: require("module_15"), marginBottom: require("module_10"), justifyContent: "center", alignItems: "center" };
obj.colorItemSelected = { borderColor: "#FFFFFF", borderWidth: PREDEF_RES.perfectSize(2.5) };
const obj16 = { width: require("module_35"), height: require("module_35"), backgroundColor: "#C7E5FF", borderRadius: require("module_60"), justifyContent: "center", alignItems: "center" };
obj.colorItemSmall = obj16;
const obj15 = { borderColor: "#FFFFFF", borderWidth: PREDEF_RES.perfectSize(2.5) };
obj.bottleImageContainer = { paddingHorizontal: require("module_10") };
const obj18 = { alignItems: "center", height: require("module_120"), width: require("module_140"), justifyContent: "center", borderRadius: require("module_10"), backgroundColor: "#F0F7FE", marginHorizontal: require("module_7"), marginBottom: require("module_8") };
obj.bottleImageItem = obj18;
const obj17 = { paddingHorizontal: require("module_10") };
obj.selectedBottleImage = { borderWidth: require("get registerCallableModule"), borderColor: "#0066B0" };
obj.bottleImageIcon = { width: "90%", height: "90%" };
const styles = StyleSheet.create(obj);

export default function DeviceChooseVariantScreen() {
  _require = _require(529).useNavigation();
  const defaultResult = items.default(first.useState("Chug"), 2);
  dependencyMap = defaultResult[0];
  closure_2 = defaultResult[1];
  let obj = { id: "Chug", name: "Chug" };
  const theme = _require(644).useTheme();
  obj.image = _require(689).Icons.chug;
  items = [obj, ];
  obj = { id: "Sipper", name: "Sipper", image: _require(689).Icons.sipper };
  items[1] = obj;
  first = items.default(first.useState(["#ff316f", "#73e460", "#47b1ff", "#a5a5a5"]), 2)[0];
  const defaultResult1 = items.default(first.useState(["#ff316f", "#73e460", "#47b1ff", "#a5a5a5"]), 2);
  [get_registerCallableModule, closure_6] = items.default(first.useState(0), 2);
  const defaultResult2 = items.default(first.useState(0), 2);
  [r10061, closure_7] = items.default(first.useState(false), 2);
  const defaultResult4 = items.default(first.useState([]), 2);
  const first1 = defaultResult4[0];
  const React = defaultResult4[1];
  const defaultResult3 = items.default(first.useState(false), 2);
  [closure_10, _interopRequireWildcard] = items.default(first.useState(null), 2);
  const effect = first.useEffect(() => {
    callback3();
  }, []);
  closure_12 = (() => {
    closure_0 = lib.default(async () => {
      if (obj) {
        return obj.resume();
      } else {
        closure_2_7(true);
        const imageApi = callback(table[13]).getImageApi({}, {});
        imageApi.then((data) => {
          closure_3_7(false);
          let device_images;
          if (data != null) {
            data = data.data;
            if (data != null) {
              device_images = data.device_images;
            }
          }
          closure_3_9(device_images);
        }).catch((arg0) => {
          closure_3_7(false);
        });
      }
    });
    return function getImageList() {
      return callback(...arguments);
    };
  })();
  let items1 = [first1];
  const effect1 = first.useEffect(() => {
    if (first1.length > 0) {
      callback2(first1[0].id);
    }
  }, items1);
  const focusEffect = _require(529).useFocusEffect(first.useCallback(() => {
    closure_0 = closure_1_5.BackHandler.addEventListener("hardwareBackPress", function onBackPress() {
      return true;
    });
    return () => closure_0.remove();
  }, []));
  function handleVariantSelect(arg0) {
    lib(arg0);
  }
  const defaultResult5 = items.default(first.useState(null), 2);
  const tmp12 = (() => {
    closure_0 = lib.default(async () => {
      try {
        const tmp2 = yield closure_3_6.default.getItem("deviceData");
        let parsed = null;
        if (tmp2) {
          const _JSON = JSON;
          parsed = JSON.parse(tmp2);
        }
        const found = closure_2_3.find((id) => id.id === closure_3_1);
        const tmp14 = yield closure_0(closure_1[14]).getUserData();
        let id;
        if (tmp14 != null) {
          const user = tmp14.user;
          if (user != null) {
            id = user.id;
          }
        }
        if (parsed !== null) {
          const obj = {};
          let device_id;
          if (tmp7 != null) {
            device_id = tmp7.device_id;
          }
          obj.deviceId = device_id;
          let name;
          if (tmp7 != null) {
            name = tmp7.name;
          }
          obj.name = name;
          let mac_address;
          if (tmp7 != null) {
            mac_address = tmp7.mac_address;
          }
          obj.mac = mac_address;
          obj.user_id = id;
          let deviceImage;
          if (tmp7 != null) {
            deviceImage = parsed.deviceImage;
          }
          let str2 = deviceImage;
          if (!deviceImage) {
            str2 = "Default";
          }
          obj.deviceImage = str2;
          let name1;
          if (found != null) {
            name1 = found.name;
          }
          obj.variant_modal = name1;
          obj.variant_color = closure_2_4[closure_2_5];
          obj.device_image_id = closure_2_10;
          const registerDeviceApiResult = callback(669).registerDeviceApi(obj, {});
          callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_2.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((message) => {
            const Alert = closure_4_5.Alert;
            message = undefined;
            if (message != null) {
              message = message.message;
            }
            Alert.alert(message);
          });
          const nextPromise = callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_2.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })());
        }
      } catch (err) {
      }
    });
    return function handleSkip() {
      return callback(...arguments);
    };
  })();
  obj = {};
  const items2 = [React.jsx(_require(671).Header, { isBack: false, title: "Choose Your Variant" }), , ];
  const obj1 = { nestedScrollEnabled: true };
  const obj2 = { style: closure_10.mainContainer };
  const obj3 = {
    data: first1,
    numColumns: 2,
    keyExtractor(id) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return id;
    },
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: closure_10.bottleImageContainer,
    renderItem(item) {
      item = item.item;
      let obj = {};
      items = [closure_1_10.bottleImageItem, ];
      let id;
      if (item != null) {
        id = item.id;
      }
      let selectedBottleImage = closure_10 === id;
      if (selectedBottleImage) {
        selectedBottleImage = closure_1_10.selectedBottleImage;
      }
      items[1] = selectedBottleImage;
      obj.style = items;
      obj.onPress = function onPress() {
        let id;
        if (item != null) {
          id = item.id;
        }
        closure_1_11(id);
      };
      obj = {};
      obj = {};
      let url;
      if (item != null) {
        url = item.url;
      }
      obj.uri = url;
      obj.source = obj;
      obj.style = closure_1_10.bottleImageIcon;
      obj.resizeMode = "contain";
      obj.children = <closure_1_5.Image />;
      return <closure_1_5.TouchableOpacity />;
    }
  };
  const items3 = [
    <get registerCallableModule.FlatList data={first1} numColumns={2} keyExtractor={function keyExtractor(id) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return id;
    }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={closure_10.bottleImageContainer} renderItem={function renderItem(item) {
      item = item.item;
      let obj = {};
      items = [closure_1_10.bottleImageItem, ];
      let id;
      if (item != null) {
        id = item.id;
      }
      let selectedBottleImage = closure_10 === id;
      if (selectedBottleImage) {
        selectedBottleImage = closure_1_10.selectedBottleImage;
      }
      items[1] = selectedBottleImage;
      obj.style = items;
      obj.onPress = function onPress() {
        let id;
        if (item != null) {
          id = item.id;
        }
        closure_1_11(id);
      };
      obj = {};
      obj = {};
      let url;
      if (item != null) {
        url = item.url;
      }
      obj.uri = url;
      obj.source = obj;
      obj.style = closure_1_10.bottleImageIcon;
      obj.resizeMode = "contain";
      obj.children = <closure_1_5.Image />;
      return <closure_1_5.TouchableOpacity />;
    }} />,
  ,

  ];
  const obj4 = {
    data: items,
    numColumns: 2,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: closure_10.variantsContainer,
    renderItem(item) {
      item = item.item;
      let obj = {};
      items = [closure_1_10.variantItem, ];
      let selectedVariantItem = closure_1 === item.id;
      if (selectedVariantItem) {
        selectedVariantItem = closure_1_10.selectedVariantItem;
      }
      items[1] = selectedVariantItem;
      obj.style = items;
      obj.onPress = function onPress() {
        closure_1_13(item.id);
      };
      obj = { source: item.image, style: closure_1_10.variantIcon, resizeMode: "contain" };
      const items1 = [<closure_1_5.Image source={item.image} style={closure_1_10.variantIcon} resizeMode="contain" />, ];
      obj = { style: closure_1_10.variantText, children: item.name };
      items1[1] = <closure_1_5.Text style={closure_1_10.variantText}>{item.name}</closure_1_5.Text>;
      obj.children = items1;
      return <closure_1_5.TouchableOpacity style={closure_1_10.variantText}>{item.name}</closure_1_5.TouchableOpacity>;
    }
  };
  items3[1] = <get registerCallableModule.FlatList data={items} numColumns={2} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={closure_10.variantsContainer} renderItem={function renderItem(item) {
    item = item.item;
    let obj = {};
    items = [closure_1_10.variantItem, ];
    let selectedVariantItem = closure_1 === item.id;
    if (selectedVariantItem) {
      selectedVariantItem = closure_1_10.selectedVariantItem;
    }
    items[1] = selectedVariantItem;
    obj.style = items;
    obj.onPress = function onPress() {
      closure_1_13(item.id);
    };
    obj = { source: item.image, style: closure_1_10.variantIcon, resizeMode: "contain" };
    const items1 = [<closure_1_5.Image source={item.image} style={closure_1_10.variantIcon} resizeMode="contain" />, ];
    obj = { style: closure_1_10.variantText, children: item.name };
    items1[1] = <closure_1_5.Text style={closure_1_10.variantText}>{item.name}</closure_1_5.Text>;
    obj.children = items1;
    return <closure_1_5.TouchableOpacity style={closure_1_10.variantText}>{item.name}</closure_1_5.TouchableOpacity>;
  }} />;
  const tmp13 = (() => {
    closure_0 = lib.default(async () => {
      try {
        const tmp2 = yield closure_3_6.default.getItem("deviceData");
        let parsed = null;
        if (tmp2) {
          const _JSON = JSON;
          parsed = JSON.parse(tmp2);
        }
        const found = closure_2_3.find((id) => id.id === closure_3_1);
        const tmp14 = yield closure_0(closure_1[14]).getUserData();
        let id;
        if (tmp14 != null) {
          const user = tmp14.user;
          if (user != null) {
            id = user.id;
          }
        }
        if (parsed !== null) {
          const obj = {};
          let device_id;
          if (tmp7 != null) {
            device_id = tmp7.device_id;
          }
          obj.deviceId = device_id;
          let name;
          if (tmp7 != null) {
            name = tmp7.name;
          }
          obj.name = name;
          let mac_address;
          if (tmp7 != null) {
            mac_address = tmp7.mac_address;
          }
          obj.mac = mac_address;
          obj.user_id = id;
          let deviceImage;
          if (tmp7 != null) {
            deviceImage = parsed.deviceImage;
          }
          let str2 = deviceImage;
          if (!deviceImage) {
            str2 = "Default";
          }
          obj.deviceImage = str2;
          let name1;
          if (found != null) {
            name1 = found.name;
          }
          obj.variant_modal = name1;
          obj.variant_color = closure_2_4[closure_2_5];
          obj.device_image_id = closure_2_10;
          const registerDeviceApiResult = callback(669).registerDeviceApi(obj, {});
          callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_2.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })()).catch((message) => {
            const Alert = closure_4_5.Alert;
            message = undefined;
            if (message != null) {
              message = message.message;
            }
            Alert.alert(message);
          });
          const nextPromise = callback(669).registerDeviceApi(obj, {}).then((() => {
            closure_0 = closure_2.default(async (arg0) => {
              let device;
              if (arg0 != null) {
                const data = arg0.data;
                if (data != null) {
                  device = data.device;
                }
              }
              const merged = Object.assign({}, device);
              yield closure_0(closure_1[14]).setDeviceData(merged);
              navigation.navigate(closure_6_7.default.Main, { screen: closure_6_7.default.Home });
            });
            return function(arg0) {
              return callback(...arguments);
            };
          })());
        }
      } catch (err) {
      }
    });
    return function handleDone() {
      return callback(...arguments);
    };
  })();
  items3[2] = <get registerCallableModule.View style={closure_10.colorsList}>{first.map((backgroundColor) => {
    const callback = arg1;
    let obj = {
      onPress() {
        closure_1_6(closure_0);
      }
    };
    items = [closure_1_10.colorItem, ];
    obj = {};
    let str = "#fff";
    if (closure_5 === arg1) {
      str = backgroundColor;
    }
    obj.borderColor = str;
    let num = 0;
    if (closure_5 === arg1) {
      num = callback(table[16]).perfectSize(2.2);
    }
    obj.borderWidth = num;
    items[1] = obj;
    obj.style = items;
    const items1 = [closure_1_10.colorItemSmall, { backgroundColor }];
    obj.children = <closure_1_5.View style={items1} />;
    return <closure_1_5.TouchableOpacity key={arg1} />;
  })}</get registerCallableModule.View>;
  obj2.children = items3;
  obj1.children = <get registerCallableModule.View style={closure_10.mainContainer} />;
  items2[1] = <get registerCallableModule.ScrollView nestedScrollEnabled />;
  const obj6 = { style: closure_10.resetBox };
  const obj5 = {
    style: closure_10.colorsList,
    children: first.map((backgroundColor) => {
      const callback = arg1;
      let obj = {
        onPress() {
          closure_1_6(closure_0);
        }
      };
      items = [closure_1_10.colorItem, ];
      obj = {};
      let str = "#fff";
      if (closure_5 === arg1) {
        str = backgroundColor;
      }
      obj.borderColor = str;
      let num = 0;
      if (closure_5 === arg1) {
        num = callback(table[16]).perfectSize(2.2);
      }
      obj.borderWidth = num;
      items[1] = obj;
      obj.style = items;
      const items1 = [closure_1_10.colorItemSmall, { backgroundColor }];
      obj.children = <closure_1_5.View style={items1} />;
      return <closure_1_5.TouchableOpacity key={arg1} />;
    })
  };
  const items4 = [<get registerCallableModule.TouchableOpacity style={closure_10.setItemViewActive} onPress={tmp12}><get registerCallableModule.Text {...obj8} /></get registerCallableModule.TouchableOpacity>, ];
  const obj9 = { style: items5, onPress: tmp13 };
  items5 = [closure_10.setItemView];
  const obj10 = { colors: ["#7DC4F8", "#0066B0"], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: closure_10.gradientButton };
  const obj7 = { style: closure_10.setItemViewActive, onPress: tmp12, children: <get registerCallableModule.Text {...obj8} /> };
  const items6 = [closure_10.doneButtonText, { color: theme.white }];
  obj10.children = <get registerCallableModule.Text style={items6}>{_require(512).useTranslation().t("Done")}</get registerCallableModule.Text>;
  obj9.children = <first1.default colors={["#7DC4F8", "#0066B0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_10.gradientButton} />;
  items4[1] = <get registerCallableModule.TouchableOpacity style={items5} onPress={tmp13} />;
  obj6.children = items4;
  items2[2] = <get registerCallableModule.View style={closure_10.resetBox} />;
  obj.children = items2;
  return React.jsxs(_require(671).Container, {});
};
