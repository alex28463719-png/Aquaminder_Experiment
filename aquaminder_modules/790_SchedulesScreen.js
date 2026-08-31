// Module ID: 790
// Function ID: 8275
// Name: SchedulesScreen
// Dependencies: [1, 363, 38, 119, 2, 500, 501, 658, 683, 701, 251, 512, 529, 644, 646, 669, 689, 780, 671]
// Exports: default

// Module 790 (SchedulesScreen)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import _mod658 from "module_658" /* 658 */;
import LinearGradient from "LinearGradient" /* 683 */;
import Button from "Button" /* 701 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_11 from "jsxProd" /* 251 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod500);
let closure_7 = module_1(_mod501);
let closure_8 = module_1(_mod658);
let closure_9 = module_1(LinearGradient);
let closure_10 = module_1(Button);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: require("module_15"), marginTop: require("module_20") };
obj.container = obj;
obj.schedulesList = { flexGrow: 1 };
obj = { backgroundColor: "#eef7ff", borderRadius: require("module_10"), width: "100%", height: require("module_130"), marginBottom: require("module_19"), paddingHorizontal: require("module_21"), justifyContent: "center" };
obj.scheduleItem = obj;
obj.cardFormate = { alignItems: "center", flexDirection: "row" };
obj.titleContainer = { flexDirection: "row", alignItems: "center" };
obj.nameText = { fontSize: require("module_22"), fontWeight: "600" };
let obj1 = { fontSize: require("module_22"), fontWeight: "600" };
obj.rightIcon = { height: require("module_10"), width: require("module_10"), marginLeft: require("module_15") };
let obj2 = { height: require("module_10"), width: require("module_10"), marginLeft: require("module_15") };
obj.iconStyle = { height: require("module_20"), width: require("module_20") };
obj.scheduleInfo = { flex: 1 };
let obj3 = { height: require("module_20"), width: require("module_20") };
obj.scheduleTime = { fontSize: require("module_15"), fontWeight: "500", marginLeft: require("module_8"), color: "#717171" };
let obj4 = { fontSize: require("module_15"), fontWeight: "500", marginLeft: require("module_8"), color: "#717171" };
obj.scheduleInterval = { fontSize: require("module_14"), marginBottom: require("module_3") };
let obj6 = { fontSize: require("module_15"), color: "#666666", fontWeight: "500", marginLeft: require("module_8") };
obj.scheduleDays = obj6;
let obj7 = { flexDirection: "row", borderRadius: require("module_10"), padding: require("module_15"), alignItems: "center", justifyContent: "center", marginBottom: require("module_20") };
obj.addButton = obj7;
let obj8 = { backgroundColor: "#E8F3FF", borderRadius: require("module_10"), padding: require("module_15"), alignItems: "center", justifyContent: "center", marginBottom: require("module_5"), borderWidth: 1 };
obj.saveToDeviceButton = obj8;
let obj5 = { fontSize: require("module_14"), marginBottom: require("module_3") };
obj.saveToDeviceText = { fontSize: require("module_16"), fontWeight: "600" };
let obj9 = { fontSize: require("module_16"), fontWeight: "600" };
obj.addButtonText = { fontSize: require("module_16"), fontWeight: "600", marginLeft: require("module_10") };
let obj11 = { flexDirection: "row", backgroundColor: "#F0F7FE", borderRadius: require("module_10"), padding: require("module_15") };
obj.infoBox = obj11;
let obj10 = { fontSize: require("module_16"), fontWeight: "600", marginLeft: require("module_10") };
obj.infoIcon = { marginRight: require("module_10") };
let obj13 = { flex: 1, fontSize: require("module_14"), color: "#555", lineHeight: require("module_20") };
obj.infoText = obj13;
let obj12 = { marginRight: require("module_10") };
obj.floatingAddButton = { position: "absolute", bottom: require("module_30"), right: require("module_30"), width: require("module_60"), height: require("module_60"), borderRadius: require("module_30"), justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: "#ebf5f8", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3 };
let obj15 = { justifyContent: "center", alignItems: "center", width: require("module_60"), height: require("module_60"), borderRadius: require("module_30") };
obj.gradientButton = obj15;
const obj14 = { position: "absolute", bottom: require("module_30"), right: require("module_30"), width: require("module_60"), height: require("module_60"), borderRadius: require("module_30"), justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: "#ebf5f8", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3 };
obj.plusIcon = { height: require("module_33"), width: require("module_33") };
obj.iconFormate = { flexDirection: "row", alignItems: "center" };
const styles = StyleSheet.create(obj);

export default function SchedulesScreen() {
  const t = _require(512).useTranslation().t;
  _require = _require(529).useNavigation();
  dependencyMap = _require(644).useTheme();
  const isFocused = _require(529).useIsFocused();
  let defaultResult = first.default(React.useState(null), 2);
  first = defaultResult[0];
  React = defaultResult[1];
  [r10040, get_registerCallableModule] = first.default(React.useState(false), 2);
  let defaultResult1 = first.default(React.useState(false), 2);
  [closure_6, closure_7] = first.default(React.useState(false), 2);
  const defaultResult2 = first.default(React.useState(false), 2);
  [r10052, closure_8] = first.default(React.useState(null), 2);
  const defaultResult3 = first.default(React.useState(null), 2);
  [tmp8, closure_9] = first.default(React.useState(""), 2);
  const defaultResult5 = first.default(React.useState([]), 2);
  const first1 = defaultResult5[0];
  const React2 = defaultResult5[1];
  let items = [isFocused];
  const effect = React.useEffect(() => {
    if (isFocused) {
      lib();
    }
  }, items);
  closure_12 = (() => {
    closure_0 = isFocused.default(async () => {
      let callback;
      closure_2_5(true);
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
        let id;
        if (parsed != null) {
          id = tmp9.id;
        }
        const tmp21 = yield closure_0(closure_1[14]).connectDevice(parsed);
        if (tmp21) {
          if (obj) {
            const tmp24 = yield obj.discoverAllServicesAndCharacteristics();
            callback = tmp24;
            closure_2_7(true);
            let nickname;
            if (tmp9 != null) {
              nickname = parsed.nickname;
            }
            closure_2_9(nickname);
            closure_2_4(tmp24);
            if (tmp17) {
              const scheduleApi = callback(669).getScheduleApi(tmp17, {}, {});
              scheduleApi.then((data) => {
                closure_3_5(false);
                let date = new Date();
                let schedules;
                if (data != null) {
                  data = data.data;
                  if (data != null) {
                    schedules = data.schedules;
                  }
                }
                const mapped = schedules.map((start_time) => {
                  const parts = start_time.start_time.split(":");
                  [tmp2, tmp3] = first.default(parts.map(Number), 2);
                  date = new Date();
                  date.setHours(tmp2);
                  date.setMinutes(tmp3);
                  const defaultResult = first.default(parts.map(Number), 2);
                  const str = start_time.start_time;
                  let tmp7 = start_time.repeat_type === "once";
                  if (tmp7) {
                    tmp7 = start_time.status === "active";
                  }
                  if (tmp7) {
                    tmp7 = date > date1;
                  }
                  let merged = start_time;
                  if (tmp7) {
                    const _Object = Object;
                    const obj = { status: "inactive" };
                    merged = Object.assign({}, start_time, obj);
                  }
                  return merged;
                });
                closure_3_11(mapped);
                closure_3_19(mapped, date);
              }).catch((message) => {
                closure_3_5(false);
                const Alert = closure_4_5.Alert;
                message = undefined;
                if (message != null) {
                  message = message.message;
                }
                Alert.alert(message);
              });
              const nextPromise = scheduleApi.then((data) => {
                closure_3_5(false);
                let date = new Date();
                let schedules;
                if (data != null) {
                  data = data.data;
                  if (data != null) {
                    schedules = data.schedules;
                  }
                }
                const mapped = schedules.map((start_time) => {
                  const parts = start_time.start_time.split(":");
                  [tmp2, tmp3] = first.default(parts.map(Number), 2);
                  date = new Date();
                  date.setHours(tmp2);
                  date.setMinutes(tmp3);
                  const defaultResult = first.default(parts.map(Number), 2);
                  const str = start_time.start_time;
                  let tmp7 = start_time.repeat_type === "once";
                  if (tmp7) {
                    tmp7 = start_time.status === "active";
                  }
                  if (tmp7) {
                    tmp7 = date > date1;
                  }
                  let merged = start_time;
                  if (tmp7) {
                    const _Object = Object;
                    const obj = { status: "inactive" };
                    merged = Object.assign({}, start_time, obj);
                  }
                  return merged;
                });
                closure_3_11(mapped);
                closure_3_19(mapped, date);
              });
            }
            const tmp28 = closure_2_9;
          }
        }
        const _default = closure_3_8.default;
      } catch (err) {
        closure_2_9("");
        closure_2_5(false);
        closure_2_7(false);
        closure_2_4(null);
        closure_2_11([]);
      }
    });
    return function connectFlow() {
      return callback(...arguments);
    };
  })();
  const effect1 = React.useEffect(() => {
    function updateSchedules() {
      closure_1_11((arr) => {
        let date = new Date();
        return arr.map((repeat_type) => {
          if (repeat_type.repeat_type === "once") {
            if (repeat_type.status === "active") {
              const parts = repeat_type.start_time.split(":");
              const _Number = Number;
              const _Date = Date;
              [tmp4, tmp5] = first.default(parts.map(Number), 2);
              date = new Date();
              date.setHours(tmp4);
              date.setMinutes(tmp5);
              const _Date2 = Date;
              const date1 = new Date(date.getTime() + 60000);
              if (date > date1) {
                const _Object = Object;
                const obj = { status: "inactive" };
                return Object.assign({}, repeat_type, obj);
              }
              const defaultResult = first.default(parts.map(Number), 2);
              const str3 = repeat_type.start_time;
            }
          }
          return repeat_type;
        });
      });
    }
    updateSchedules();
    const interval = setInterval(updateSchedules, 60000);
    return () => clearInterval(closure_0);
  }, []);
  const defaultResult4 = first.default(React.useState(""), 2);
  [_interopRequireWildcard, closure_14] = first.default(React.useState([]), 2);
  let items1 = [first1, first];
  const effect2 = React.useEffect(() => {
    if (first) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const json = JSON.stringify(first1);
      if (json !== JSON.stringify(closure_13)) {
        callback2(first1, first);
        callback(first1);
      }
    }
  }, items1);
  closure_15 = { enableTimezoneConversion: true, targetTimezoneOffset: 8 };
  function convertToTargetTimezone(hour, minute) {
    if (closure_15.enableTimezoneConversion) {
      const _Date = Date;
      const date = new Date();
      date.setHours(hour, minute, 0, 0);
      let sum = hour * 60 + minute + (date.getTimezoneOffset() - -closure_15.targetTimezoneOffset * 60);
      let tmp11 = sum;
      if (sum < 0) {
        do {
          sum = sum + 1440;
          tmp11 = sum;
        } while (sum < 0);
      }
      const result = tmp11 % 1440;
      const _Math = Math;
      let obj = { hour: Math.floor(result / 60), minute: result % 60 };
      return obj;
    } else {
      obj = { hour, minute };
      return obj;
    }
  }
  function scheduleSpansMidnight(arg0, arg1, arg2, arg3) {
    return arg2 * 60 + arg3 <= arg0 * 60 + arg1;
  }
  function createScheduleCommand(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const padLeftResult = navigation(closure_1[14]).padLeft(arg2.toString(16), 2);
    const padLeftResult1 = navigation(closure_1[14]).padLeft(arg3.toString(16), 2);
    return arg0 + arg1 + padLeftResult + padLeftResult1 + navigation(closure_1[14]).padLeft(arg4.toString(16), 2) + navigation(closure_1[14]).padLeft(arg5.toString(16), 2) + arg6 + arg7;
  }
  closure_19 = (() => {
    closure_0 = isFocused.default(async (arg0, arg1) => {
      try {
        let str = "AA05";
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          let str6 = "00";
          if (nextResult.status === "active") {
            str6 = "01";
          }
          let tmp7 = str6;
          let tmp8 = callback;
          let tmp9 = dependencyMap;
          let tmp10 = nextResult;
          let padRightResult = callback(646).padRight(callback(646).encodeStringToHex(tmp6.description), 24);
          let str7 = tmp6.start_time;
          let parts = str7.split(":");
          let _Number = Number;
          let tmp12 = first;
          let defaultResult = first.default(parts.map(Number), 2);
          let str8 = tmp6.end_time;
          [tmp14, tmp15] = defaultResult;
          let parts1 = str8.split(":");
          let _Number2 = Number;
          let defaultResult1 = first.default(parts1.map(Number), 2);
          let tmp19 = closure_2_16;
          [tmp17, tmp18] = defaultResult1;
          let tmp20 = closure_2_16(tmp14, tmp15);
          let tmp21 = closure_2_16(tmp17, tmp18);
          if (tmp6.repeat_days !== null) {
            let tmp22 = nextResult;
            let repeat_days = tmp6.repeat_days;
          } else {
            repeat_days = [];
          }
          let tmp23 = callback;
          let tmp24 = dependencyMap;
          let tmp25 = nextResult;
          let cycleByte = callback(646).buildCycleByte(tmp6.repeat_type, repeat_days);
          let cycleInfo = callback(646).getCycleInfo(tmp6.repeat_type, repeat_days);
          ({ cycleType, cycleWeekList } = cycleInfo);
          let str9 = tmp6.interval;
          let padLeftResult = callback(646).padLeft(str9.toString(16), 4);
          let tmp29 = closure_2_15;
          if (closure_2_15.enableTimezoneConversion) {
            let tmp30 = closure_2_17;
            let tmp31 = tmp20;
            let tmp32 = tmp21;
            if (closure_2_17(tmp20.hour, tmp20.minute, tmp21.hour, tmp21.minute)) {
              let tmp41 = closure_2_18;
              let tmp42 = str6;
              let tmp43 = padRightResult;
              let tmp44 = tmp20;
              let tmp45 = cycleByte;
              let tmp46 = padLeftResult;
              let tmp47 = tmp7;
              let tmp48 = padRightResult;
              let num10 = 23;
              let num11 = 59;
              let tmp49 = cycleByte;
              let tmp50 = padLeftResult;
              let tmp52 = tmp21;
              let tmp53 = tmp7;
              let tmp54 = padRightResult;
              let num12 = 0;
              let num13 = 0;
              let tmp55 = cycleByte;
              let tmp56 = padLeftResult;
              let tmp51 = closure_2_18(str6, padRightResult, tmp20.hour, tmp20.minute, 23, 59, cycleByte, padLeftResult);
              let tmp57 = str;
              str = str + (tmp51 + closure_2_18(str6, padRightResult, 0, 0, tmp21.hour, tmp21.minute, cycleByte, padLeftResult));
              continue;
            }
          }
          let tmp33 = closure_2_18;
          let tmp34 = str6;
          let tmp35 = padRightResult;
          let tmp36 = tmp20;
          let tmp37 = tmp21;
          let tmp38 = cycleByte;
          let tmp39 = padLeftResult;
          let tmp40 = str;
          str = str + closure_2_18(tmp7, padRightResult, tmp20.hour, tmp20.minute, tmp21.hour, tmp21.minute, cycleByte, padLeftResult);
        }
        yield closure_0(closure_1[14]).writeBLECharacteristicValue(str, arg1);
      } catch (err) {
      }
    });
    return function syncSchedulesToDevice(arg0, arg1) {
      return callback(...arguments);
    };
  })();
  function toggleSchedule(closure_2_3, start_time) {
    const parts = start_time.start_time.split(":");
    const date = new Date();
    const str = start_time.start_time;
    [tmp2, tmp3] = first.default(parts.map(Number), 2);
    const date1 = new Date();
    date1.setHours(tmp2, tmp3, 0, 0);
    let tmp5 = start_time.repeat_type === "once";
    if (tmp5) {
      const time = date1.getTime();
      tmp5 = time <= date.getTime();
    }
    if (tmp5) {
      if (start_time.status === "inactive") {
        let Alert = closure_1_5.Alert;
        Alert.alert("Schedule expired", "This one-time schedule has already passed. Please set a new time.");
      }
    }
    const obj = {};
    let id;
    if (first != null) {
      id = first.id;
    }
    obj.device_id = id;
    start_time = undefined;
    if (start_time != null) {
      start_time = start_time.start_time;
    }
    obj.start_time = start_time;
    let end_time;
    if (start_time != null) {
      end_time = start_time.end_time;
    }
    obj.end_time = end_time;
    let interval;
    if (start_time != null) {
      interval = start_time.interval;
    }
    obj.interval = interval;
    let repeat_type;
    if (start_time != null) {
      repeat_type = start_time.repeat_type;
    }
    obj.repeat_type = repeat_type;
    let repeat_days;
    if (start_time != null) {
      repeat_days = start_time.repeat_days;
    }
    obj.repeat_days = repeat_days;
    let status;
    if (start_time != null) {
      status = start_time.status;
    }
    let str3 = "active";
    if (status === "active") {
      str3 = "inactive";
    }
    obj.status = str3;
    let description;
    if (start_time != null) {
      description = start_time.description;
    }
    obj.description = description;
    const defaultResult = first.default(parts.map(Number), 2);
    const editScheduleApiResult = navigation(closure_1[15]).editScheduleApi(closure_2_3, obj, {});
    navigation(closure_1[15]).editScheduleApi(closure_2_3, obj, {}).then((() => {
      closure_0 = isFocused.default(async (arg0) => {
        if (obj) {
          return obj.resume();
        } else {
          closure_3_12();
        }
      });
      return function(arg0) {
        return callback(...arguments);
      };
    })()).catch((message) => {
      const Alert = closure_2_5.Alert;
      message = undefined;
      if (message != null) {
        message = message.message;
      }
      Alert.alert(message);
    });
  }
  function editSchedule(id) {
    navigation.navigate(closure_1_6.default.ScheduleEdit, { detail: { id: id.id, startTime: id.start_time, endTime: id.end_time, days: id.repeat_days, enabled: id.status, interval: id.interval, repeat: id.repeat_type, name: id.description }, isNew: false });
  }
  closure_22 = (() => {
    closure_0 = isFocused.default(async (arg0) => {
      if (obj) {
        return obj.resume();
      } else {
        closure_0 = arg0;
        let Alert = closure_3_5.Alert;
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
              closure_0 = isFocused.default(async () => {
                if (obj) {
                  return obj.resume();
                } else {
                  let id;
                  if (lib != null) {
                    id = lib.id;
                  }
                  const deleteScheduleApiResult = lib(table[15]).deleteScheduleApi(id, {}, {});
                  lib(table[15]).deleteScheduleApi(id, {}, {}).then((/* F8317 */ function() { ... })()).catch(/* F8321 */ function() { ... });
                }
              });
              return function onPress() {
                return callback(...arguments);
              };
            })()
        };
        items[1] = obj;
        const obj1 = { cancelable: false };
        Alert.alert(closure_3_7.default.CONFIRM_DELETE, closure_3_7.default.ARE_YOU_SURE_YOU_WANT_TO_DELETE, items, obj1);
      }
    });
    return function handleDeleteSchedule(arg0) {
      return callback(...arguments);
    };
  })();
  let obj = { edges: ["top"] };
  obj = {
    isBack: false,
    title: mod.default.HYDRATION_SCHEDULE,
    deviceName: tmp8,
    rightIcon: _require(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(closure_1_6.default.User);
    }
  };
  let items2 = [
    React2.jsx(_require(671).Header, {
      isBack: false,
      title: mod.default.HYDRATION_SCHEDULE,
      deviceName: tmp8,
      rightIcon: _require(689).Icons.userCircle,
      rightIconPress() {
        navigation.navigate(closure_1_6.default.User);
      }
    }),

  ];
  obj = { style: closure_12.container };
  const defaultResult6 = first.default(React.useState([]), 2);
  let items3 = [
    <get registerCallableModule.FlatList data={first1} renderItem={function renderScheduleItem(item) {
      item = item.item;
      let obj = { style: lib.scheduleItem };
      obj = { style: items };
      items = [lib.cardFormate, { justifyContent: "space-between" }];
      obj = {
        style: lib.titleContainer,
        onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }
      };
      const obj1 = { style: lib.nameText };
      let description;
      if (item != null) {
        description = item.description;
      }
      obj1.children = description;
      const items1 = [<closure_1_5.Text style={lib.nameText} />, <closure_1_5.Image source={navigation(closure_1[16]).Icons.rightArrow} style={lib.rightIcon} resizeMode="contain" />];
      obj.children = items1;
      const items2 = [
        <closure_1_5.Pressable style={lib.titleContainer} onPress={function onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }} />,

      ];
      const obj3 = { style: lib.iconFormate };
      const obj4 = {};
      let status;
      if (item != null) {
        status = item.status;
      }
      obj4.value = status === "active";
      obj4.onValueChange = function onValueChange() {
        if (closure_1_6) {
          closure_1_20(item.id, item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      };
      obj4.trackColor = { false: "#D1D1D1", true: closure_1.primary };
      obj4.thumbColor = closure_1.white;
      const items3 = [<closure_1_5.Switch />, ];
      const obj6 = {
        onPress() {
          if (closure_1_6) {
            closure_1_22(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }
      };
      const obj7 = { justifyContent: "center", alignItems: "center", height: navigation(closure_1[17]).perfectSize(25), width: navigation(closure_1[17]).perfectSize(25) };
      obj6.style = obj7;
      obj6.children = <first1.default name="delete-outline" size={22} color="#BF0000" />;
      items3[1] = <closure_1_5.Pressable onPress={function onPress() {
        if (closure_1_6) {
          closure_1_22(item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      }} />;
      obj3.children = items3;
      items2[1] = <closure_1_5.View style={lib.iconFormate} />;
      obj.children = items2;
      const items4 = [
        <closure_1_5.View style={lib.titleContainer} onPress={function onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }} />,
      ,

      ];
      const obj8 = {};
      const items5 = [lib.cardFormate, ];
      const obj2 = { source: navigation(closure_1[16]).Icons.rightArrow, style: lib.rightIcon, resizeMode: "contain" };
      const obj5 = { false: "#D1D1D1", true: closure_1.primary };
      items5[1] = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      obj8.style = items5;
      const obj9 = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      const items6 = [<closure_1_5.Image source={navigation(closure_1[16]).Icons.time} style={lib.iconStyle} resizeMode="contain" />, ];
      const obj11 = { style: lib.scheduleTime };
      let start_time;
      if (item != null) {
        start_time = item.start_time;
      }
      const items7 = [start_time, " - ", ];
      let end_time;
      if (item != null) {
        end_time = item.end_time;
      }
      items7[2] = end_time;
      obj11.children = items7;
      items6[1] = <closure_1_5.Text style={lib.scheduleTime} />;
      obj8.children = items6;
      items4[1] = <closure_1_5.View />;
      const obj12 = {};
      const items8 = [lib.cardFormate, ];
      const obj10 = { source: navigation(closure_1[16]).Icons.time, style: lib.iconStyle, resizeMode: "contain" };
      items8[1] = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      obj12.style = items8;
      const obj13 = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      const items9 = [<closure_1_5.Image source={navigation(closure_1[16]).Icons.calendar} style={lib.iconStyle} resizeMode="contain" />, ];
      const obj15 = { style: lib.scheduleDays };
      let repeat_type;
      if (item != null) {
        repeat_type = item.repeat_type;
      }
      if (repeat_type === "daily") {
        let str = closure_1_7.default.EVERY_DAY;
      } else {
        let repeat_days;
        if (item != null) {
          repeat_days = item.repeat_days;
        }
        str = "Today";
        if (repeat_days !== null) {
          let joined;
          if (item != null) {
            repeat_days = item.repeat_days;
            joined = repeat_days.join(", ");
          }
          str = joined;
        }
      }
      obj15.children = str;
      items9[1] = <closure_1_5.Text style={lib.scheduleDays} />;
      obj12.children = items9;
      items4[2] = <closure_1_5.View />;
      obj.children = items4;
      return <closure_1_5.View style={lib.titleContainer} onPress={function onPress() {
        if (closure_1_6) {
          closure_1_21(item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      }} />;
    }} keyExtractor={function keyExtractor(id) {
      return "" + id.id + "-" + arg1;
    }} contentContainerStyle={closure_12.schedulesList} showsVerticalScrollIndicator={false} ListEmptyComponent={<get registerCallableModule.Text style={{ fontSize: 16, color: "#999", textAlign: "center" }}>{"No schedules found. Tap the \"+\" icon below to add a schedule."}</get registerCallableModule.Text>} />,

  ];
  let obj2 = {
    style: items4,
    onPress: function addNewSchedule() {
      if (closure_6) {
        let length;
        if (first1 != null) {
          length = first1.filter((status) => status.status === "active").length;
        }
        if (length > 10) {
          const Alert2 = closure_1_5.Alert;
          Alert2.alert("You can only enable up to 10 schedules. Please disable an existing one before adding another.");
        } else {
          const obj = { detail: {}, isNew: true };
          navigation.navigate(closure_1_6.default.ScheduleEdit, obj);
        }
      } else {
        const Alert = closure_1_5.Alert;
        Alert.alert("Please connect device");
      }
    }
  };
  items4 = [closure_12.floatingAddButton];
  let obj3 = { colors: ["#7DC4F8", "#0066B0"], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: closure_12.gradientButton };
  let obj1 = {
    data: first1,
    renderItem: function renderScheduleItem(item) {
      item = item.item;
      let obj = { style: lib.scheduleItem };
      obj = { style: items };
      items = [lib.cardFormate, { justifyContent: "space-between" }];
      obj = {
        style: lib.titleContainer,
        onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }
      };
      const obj1 = { style: lib.nameText };
      let description;
      if (item != null) {
        description = item.description;
      }
      obj1.children = description;
      const items1 = [<closure_1_5.Text style={lib.nameText} />, <closure_1_5.Image source={navigation(closure_1[16]).Icons.rightArrow} style={lib.rightIcon} resizeMode="contain" />];
      obj.children = items1;
      const items2 = [
        <closure_1_5.Pressable style={lib.titleContainer} onPress={function onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }} />,

      ];
      const obj3 = { style: lib.iconFormate };
      const obj4 = {};
      let status;
      if (item != null) {
        status = item.status;
      }
      obj4.value = status === "active";
      obj4.onValueChange = function onValueChange() {
        if (closure_1_6) {
          closure_1_20(item.id, item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      };
      obj4.trackColor = { false: "#D1D1D1", true: closure_1.primary };
      obj4.thumbColor = closure_1.white;
      const items3 = [<closure_1_5.Switch />, ];
      const obj6 = {
        onPress() {
          if (closure_1_6) {
            closure_1_22(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }
      };
      const obj7 = { justifyContent: "center", alignItems: "center", height: navigation(closure_1[17]).perfectSize(25), width: navigation(closure_1[17]).perfectSize(25) };
      obj6.style = obj7;
      obj6.children = <first1.default name="delete-outline" size={22} color="#BF0000" />;
      items3[1] = <closure_1_5.Pressable onPress={function onPress() {
        if (closure_1_6) {
          closure_1_22(item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      }} />;
      obj3.children = items3;
      items2[1] = <closure_1_5.View style={lib.iconFormate} />;
      obj.children = items2;
      const items4 = [
        <closure_1_5.View style={lib.titleContainer} onPress={function onPress() {
          if (closure_1_6) {
            closure_1_21(item);
          } else {
            const Alert = closure_2_5.Alert;
            Alert.alert("Please connect device");
          }
        }} />,
      ,

      ];
      const obj8 = {};
      const items5 = [lib.cardFormate, ];
      const obj2 = { source: navigation(closure_1[16]).Icons.rightArrow, style: lib.rightIcon, resizeMode: "contain" };
      const obj5 = { false: "#D1D1D1", true: closure_1.primary };
      items5[1] = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      obj8.style = items5;
      const obj9 = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      const items6 = [<closure_1_5.Image source={navigation(closure_1[16]).Icons.time} style={lib.iconStyle} resizeMode="contain" />, ];
      const obj11 = { style: lib.scheduleTime };
      let start_time;
      if (item != null) {
        start_time = item.start_time;
      }
      const items7 = [start_time, " - ", ];
      let end_time;
      if (item != null) {
        end_time = item.end_time;
      }
      items7[2] = end_time;
      obj11.children = items7;
      items6[1] = <closure_1_5.Text style={lib.scheduleTime} />;
      obj8.children = items6;
      items4[1] = <closure_1_5.View />;
      const obj12 = {};
      const items8 = [lib.cardFormate, ];
      const obj10 = { source: navigation(closure_1[16]).Icons.time, style: lib.iconStyle, resizeMode: "contain" };
      items8[1] = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      obj12.style = items8;
      const obj13 = { marginTop: navigation(closure_1[17]).perfectSize(13) };
      const items9 = [<closure_1_5.Image source={navigation(closure_1[16]).Icons.calendar} style={lib.iconStyle} resizeMode="contain" />, ];
      const obj15 = { style: lib.scheduleDays };
      let repeat_type;
      if (item != null) {
        repeat_type = item.repeat_type;
      }
      if (repeat_type === "daily") {
        let str = closure_1_7.default.EVERY_DAY;
      } else {
        let repeat_days;
        if (item != null) {
          repeat_days = item.repeat_days;
        }
        str = "Today";
        if (repeat_days !== null) {
          let joined;
          if (item != null) {
            repeat_days = item.repeat_days;
            joined = repeat_days.join(", ");
          }
          str = joined;
        }
      }
      obj15.children = str;
      items9[1] = <closure_1_5.Text style={lib.scheduleDays} />;
      obj12.children = items9;
      items4[2] = <closure_1_5.View />;
      obj.children = items4;
      return <closure_1_5.View style={lib.titleContainer} onPress={function onPress() {
        if (closure_1_6) {
          closure_1_21(item);
        } else {
          const Alert = closure_2_5.Alert;
          Alert.alert("Please connect device");
        }
      }} />;
    },
    keyExtractor(id) {
      return "" + id.id + "-" + arg1;
    },
    contentContainerStyle: closure_12.schedulesList,
    showsVerticalScrollIndicator: false,
    ListEmptyComponent: <get registerCallableModule.Text style={{ fontSize: 16, color: "#999", textAlign: "center" }}>{"No schedules found. Tap the \"+\" icon below to add a schedule."}</get registerCallableModule.Text>
  };
  obj3.children = <get registerCallableModule.Image source={_require(689).Icons.plus_IC} tintColor="#FFFFFF" style={closure_12.plusIcon} />;
  obj2.children = <mod2.default colors={["#7DC4F8", "#0066B0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_12.gradientButton} />;
  items3[1] = <get registerCallableModule.TouchableOpacity style={items4} onPress={function addNewSchedule() {
    if (closure_6) {
      let length;
      if (first1 != null) {
        length = first1.filter((status) => status.status === "active").length;
      }
      if (length > 10) {
        const Alert2 = closure_1_5.Alert;
        Alert2.alert("You can only enable up to 10 schedules. Please disable an existing one before adding another.");
      } else {
        const obj = { detail: {}, isNew: true };
        navigation.navigate(closure_1_6.default.ScheduleEdit, obj);
      }
    } else {
      const Alert = closure_1_5.Alert;
      Alert.alert("Please connect device");
    }
  }} />;
  obj.children = items3;
  items2[1] = <get registerCallableModule.View style={closure_12.container} />;
  obj.children = items2;
  return React2.jsxs(_require(671).Container, { style: closure_12.container });
};
