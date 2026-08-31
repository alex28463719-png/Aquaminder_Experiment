// Module ID: 791
// Function ID: 8329
// Name: ScheduleEditScreen
// Dependencies: [1, 6, 363, 38, 119, 2, 792, 500, 501, 683, 658, 251, 644, 529, 512, 669, 671, 689, 780, 808]
// Exports: default

// Module 791 (ScheduleEditScreen)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod500 from "module_500" /* 500 */;
import _mod501 from "module_501" /* 501 */;
import _mod658 from "module_658" /* 658 */;
import LinearGradient from "LinearGradient" /* 683 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import _mod792 from "module_792" /* 792 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_12 from "jsxProd" /* 251 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(asyncGeneratorStep);
let closure_4 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(_mod792);
let closure_8 = module_1(_mod500);
let closure_9 = module_1(_mod501);
let closure_10 = module_1(LinearGradient);
let closure_11 = module_1(_mod658);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { paddingVertical: require("module_16"), paddingHorizontal: require("module_20"), flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj.header = obj;
obj = { fontSize: require("module_18"), fontWeight: "600" };
obj.headerTitle = obj;
obj.content = { paddingHorizontal: require("module_20") };
let obj1 = { paddingHorizontal: require("module_20") };
obj.section = { marginBottom: require("module_20") };
let obj3 = { fontSize: require("module_18"), fontWeight: "500", color: "#575757", marginBottom: require("module_12") };
obj.sectionTitle = obj3;
let obj2 = { marginBottom: require("module_20") };
obj.timeButton = { paddingHorizontal: require("module_10"), borderRadius: require("module_8"), width: "49%", height: require("module_130") };
let obj5 = { fontSize: require("module_48"), color: "#677E8F", textAlign: "center", fontWeight: "500" };
obj.timeText = obj5;
let obj4 = { paddingHorizontal: require("module_10"), borderRadius: require("module_8"), width: "49%", height: require("module_130") };
obj.picker = { borderRadius: require("module_10"), paddingHorizontal: require("module_5"), paddingVertical: require("module_8") };
let obj6 = { borderRadius: require("module_10"), paddingHorizontal: require("module_5"), paddingVertical: require("module_8") };
obj.saveButton = { borderRadius: require("module_8"), marginTop: require("module_24") };
let obj8 = { borderRadius: require("module_8"), alignItems: "center", height: require("module_50"), width: "100%", justifyContent: "center" };
obj.gradientButton = obj8;
let obj7 = { borderRadius: require("module_8"), marginTop: require("module_24") };
obj.saveButtonText = { fontSize: require("module_16"), fontWeight: "600" };
obj.sectionInterval = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj10 = { marginBottom: require("module_12"), flexDirection: "row", alignItems: "center" };
obj.valueContainer = obj10;
obj.value = { fontSize: 13, color: "#6b7280" };
let obj9 = { fontSize: require("module_16"), fontWeight: "600" };
obj.editContainer = { height: require("module_25"), width: require("module_25"), alignItems: "center", justifyContent: "center", marginLeft: require("module_5") };
let obj11 = { height: require("module_25"), width: require("module_25"), alignItems: "center", justifyContent: "center", marginLeft: require("module_5") };
obj.editIcon = { height: require("module_18"), width: require("module_18") };
obj.labelsRow = { flexDirection: "row", justifyContent: "space-between" };
obj.label = { fontSize: 12, color: "#4b5563" };
obj.modalOverlay = { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center" };
let obj13 = { backgroundColor: "#FFFFFF", borderRadius: require("module_15"), padding: require("module_24"), width: "85%", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 10 };
obj.modalContent = obj13;
let obj12 = { height: require("module_18"), width: require("module_18") };
obj.modalTitle = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_20"), textAlign: "center" };
let obj15 = { borderWidth: 1, borderColor: "#E0E0E0", borderRadius: require("module_8"), padding: require("module_12"), fontSize: require("module_16"), marginBottom: require("module_20") };
obj.nameInput = obj15;
obj.modalButtons = { flexDirection: "row", justifyContent: "space-between" };
let obj16 = { flex: 1, padding: require("module_12"), borderRadius: require("module_8"), alignItems: "center", marginHorizontal: require("module_5"), backgroundColor: "#F0F7FE" };
obj.modalButton = obj16;
let obj14 = { fontSize: require("module_18"), fontWeight: "600", marginBottom: require("module_20"), textAlign: "center" };
obj.modalButtonText = { fontSize: require("module_16"), fontWeight: "500" };
let obj17 = { fontSize: require("module_16"), fontWeight: "500" };
obj.modalButtonTextPrimary = { fontSize: require("module_15"), fontWeight: "500" };
obj.timeFormate = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", alignSelf: "center" };
let obj19 = { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: require("module_15"), paddingVertical: require("module_5") };
obj.btnContainer = obj19;
obj.intervalContainer = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" };
let obj18 = { fontSize: require("module_15"), fontWeight: "500" };
obj.intervalButton = { height: require("module_60"), width: require("module_60"), borderRadius: require("module_60"), justifyContent: "center", alignItems: "center", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 0.2, backgroundColor: "#eef7ff" };
const obj20 = { height: require("module_60"), width: require("module_60"), borderRadius: require("module_60"), justifyContent: "center", alignItems: "center", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 0.2, backgroundColor: "#eef7ff" };
obj.intervalBtnText = { fontSize: require("module_16"), fontWeight: "500" };
let obj22 = { alignItems: "center", marginBottom: require("module_20"), flexDirection: "row", justifyContent: "center" };
obj.pickerRow = obj22;
let obj21 = { fontSize: require("module_16"), fontWeight: "500" };
obj.dotText = { fontSize: require("module_15"), fontWeight: "bold" };
let obj24 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: require("module_10"), width: "100%", marginTop: require("module_5") };
obj.labelContainer = obj24;
obj.lbelView = { width: 100, alignItems: "center", justifyContent: "center" };
let obj23 = { fontSize: require("module_15"), fontWeight: "bold" };
obj.labelText = { fontSize: require("module_18"), fontWeight: "500" };
const obj26 = { color: "#575757", fontWeight: "500", fontSize: require("module_22"), marginBottom: require("module_5") };
obj.cardTitle = obj26;
let obj27 = { flexDirection: "row", alignItems: "center", marginTop: require("module_19"), marginBottom: require("module_13") };
obj.nameContainer = obj27;
let obj28 = { fontWeight: "500", fontSize: require("module_23"), color: "#4D4D4D" };
obj.titleText = obj28;
const styles = StyleSheet.create(obj);

export default function ScheduleEditScreen() {
  theme = theme(644).useTheme();
  dependencyMap = theme(529).useNavigation();
  const route = theme(529).useRoute();
  let detail;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      detail = params.detail;
    }
  }
  let isNew;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      isNew = params2.isNew;
    }
  }
  let id;
  if (detail != null) {
    id = detail.id;
  }
  let str;
  if (detail != null) {
    str = detail.startTime;
  }
  if (!str) {
    str = "08:00";
  }
  let defaultResult = isNew.default(first.useState(str), 2);
  first = defaultResult[0];
  const RN = defaultResult[1];
  let str2;
  if (detail != null) {
    str2 = detail.endTime;
  }
  if (!str2) {
    str2 = "20:00";
  }
  let defaultResult1 = isNew.default(first.useState(str2), 2);
  let TouchableOpacity = defaultResult1[0];
  closure_8 = defaultResult1[1];
  let num;
  if (detail != null) {
    num = detail.interval;
  }
  if (!num) {
    num = 1;
  }
  [closure_9, closure_10] = isNew.default(first.useState(num), 2);
  let str3;
  if (detail != null) {
    str3 = detail.repeat;
  }
  if (!str3) {
    str3 = "daily";
  }
  const defaultResult3 = isNew.default(first.useState(str3), 2);
  let first1 = defaultResult3[0];
  const React = defaultResult3[1];
  const defaultResult2 = isNew.default(first.useState(num), 2);
  [tmp13, closure_13] = isNew.default(first.useState(false), 2);
  const defaultResult5 = isNew.default(first.useState(false), 2);
  const first2 = defaultResult5[0];
  closure_15 = defaultResult5[1];
  const defaultResult4 = isNew.default(first.useState(false), 2);
  [tmp17, closure_16] = isNew.default(first.useState(false), 2);
  let days;
  if (detail != null) {
    days = detail.days;
  }
  if (!days) {
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  }
  const defaultResult7 = isNew.default(first.useState(days), 2);
  const first3 = defaultResult7[0];
  closure_18 = defaultResult7[1];
  const t = theme(512).useTranslation().t;
  const defaultResult8 = isNew.default(first.useState(false), 2);
  closure_19 = defaultResult8[1];
  let str4;
  if (detail != null) {
    str4 = detail.name;
  }
  if (!str4) {
    str4 = "Schedule";
  }
  const defaultResult9 = isNew.default(first.useState(str4), 2);
  const first4 = defaultResult9[0];
  closure_21 = defaultResult9[1];
  let str5;
  if (detail != null) {
    str5 = detail.name;
  }
  if (!str5) {
    str5 = "";
  }
  const defaultResult10 = isNew.default(first.useState(str5), 2);
  const first5 = defaultResult10[0];
  closure_23 = tmp24;
  const defaultResult11 = isNew.default(first.useState(false), 2);
  closure_24 = defaultResult11[1];
  let arr = Array.from({ length: 24 }, (arg0, value) => {
    const obj = { label: value.toString().padStart(2, "0"), value };
    return obj;
  });
  arr = Array.from({ length: 60 }, (arg0, value) => {
    const obj = { label: value.toString().padStart(2, "0"), value };
    return obj;
  });
  const defaultResult12 = isNew.default(first.useState(0), 2);
  const first6 = defaultResult12[0];
  closure_26 = defaultResult12[1];
  const defaultResult13 = isNew.default(first.useState(1), 2);
  const first7 = defaultResult13[0];
  closure_28 = defaultResult13[1];
  c29 = 21;
  c30 = 180;
  let interval;
  if (detail != null) {
    interval = detail.interval;
  }
  let items = [interval];
  const effect = first.useEffect(() => {
    let interval;
    if (detail != null) {
      interval = detail.interval;
    }
    if (interval != null) {
      const _Math = Math;
      const result = detail.interval % 60;
      callback9(Math.floor(detail.interval / 60));
      callback10(result);
    }
  }, items);
  let items1 = [first6, first7];
  const effect1 = first.useEffect(() => {
    callback(first6 * 60 + first7);
  }, items1);
  const items2 = [first1];
  const effect2 = first.useEffect(() => {
    if (first1 !== "custom") {
      const obj = { daily: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], custom: [] };
    }
  }, items2);
  function getTimeAsDate(TouchableOpacity) {
    const parts = TouchableOpacity.split(":");
    [tmp2, tmp3] = isNew.default(parts.map(Number), 2);
    const date = new Date();
    date.setHours(tmp2, tmp3, 0, 0);
    return date;
  }
  function onTimeSelected(arg0, getHours, arg2) {
    if (RN.Platform.OS === "android") {
      if (arg2) {
        callback2(false);
      } else {
        callback3(false);
      }
    }
    if (getHours) {
      let str = getHours.getHours();
      str = str.toString();
      const padStartResult = str.padStart(2, "0");
      const str3 = getHours.getMinutes();
      const _HermesInternal = HermesInternal;
      const combined = "" + padStartResult + ":" + getHours.getMinutes().toString().padStart(2, "0");
      if (arg2) {
        const hours = getHours.getHours();
        if (hours < c29) {
          RN(combined);
        }
        const Alert3 = RN.Alert;
        Alert3.alert("Invalid Start Time", "Start time cannot be later than 9:00 PM");
      } else {
        const parts = first.split(":");
        const _Number = Number;
        const defaultResult = isNew.default(parts.map(Number), 2);
        const sum = defaultResult[0] * 60 + defaultResult[1];
        const hours1 = getHours.getHours();
        const sum1 = hours1 * 60 + getHours.getMinutes();
        if (sum1 <= sum) {
          const Alert2 = RN.Alert;
          Alert2.alert("Invalid Time", "End time must be after start time");
        } else if (sum1 - sum < c30) {
          const Alert = RN.Alert;
          Alert.alert("Invalid End Time", "End time must be at least 3 hours after start time");
        } else {
          lib(combined);
        }
      }
      const str1 = getHours.getMinutes().toString();
    }
  }
  let obj = {};
  let length;
  const defaultResult6 = isNew.default(first.useState(false), 2);
  if (first3 != null) {
    length = first3.length;
  }
  let str6 = "Daily";
  if (length > 0) {
    str6 = first3.join(", ");
  }
  obj.daily = str6;
  let length1;
  if (first3 != null) {
    length1 = first3.length;
  }
  let str8 = "Custom";
  if (length1 > 0) {
    str8 = first3.join(", ");
  }
  obj.custom = str8;
  const defaultResult14 = isNew.default(first.useState(false), 2);
  closure_32 = defaultResult14[1];
  const items3 = [{ label: "00:10", value: 10 }, { label: "00:15", value: 15 }, { label: "00:30", value: 30 }, { label: "01:00", value: 1 }];
  let str10 = "1";
  if (detail != null) {
    str10 = "1";
    if (detail.interval) {
      str = undefined;
      if (detail != null) {
        str = detail.interval.toString();
        const str11 = detail.interval;
      }
      str10 = str;
    }
  }
  const tmp36 = (() => {
    closure_0 = id.default(async () => {
      closure_0 = undefined;
      let table;
      closure_2_24(true);
      if (closure_2_20) {
        if (closure_2_20.length <= 12) {
          const tmp50 = yield first1.default.getItem("deviceData");
          let parsed = null;
          if (tmp50) {
            const _JSON = JSON;
            parsed = JSON.parse(tmp50);
          }
          if (parsed != null) {
            const device_id = parsed.device_id;
          }
          const parts = closure_2_5.split(":");
          const _Number = Number;
          const defaultResult = isNew.default(parts.map(Number), 2);
          first = defaultResult[0];
          const parts1 = closure_2_7.split(":");
          const _Number2 = Number;
          const defaultResult1 = isNew.default(parts1.map(Number), 2);
          first1 = defaultResult1[0];
          if (first <= first1) {
            const items = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            closure_0 = { Mon: "Mon", Tue: "Tue", Wed: "Wed", Thu: "Thu", Fri: "Fri", Sat: "Sat", Sun: "Sun" };
            if (closure_2_11 === "once") {
              const _Date = Date;
              const date = new Date();
              const _Date2 = Date;
              const date1 = new Date();
              date1.setHours(first, tmp11, 0, 0);
              date.setSeconds(0, 0);
              date1.setSeconds(0, 0);
              const _Math = Math;
              const time = date1.getTime();
              if (Math.floor((time - date.getTime()) / 86400000) <= 0) {
                let items1 = [];
              }
            } else if (closure_2_11 === "custom") {
              const mapped = closure_2_17.map((arg0) => table[arg0]);
              table = mapped.filter((arg0) => arg0);
              items1 = items.filter((name) => closure_1.includes(name));
            } else {
              let obj = { daily: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] };
              items1 = obj[closure_2_11] || [];
            }
            obj = { device_id, start_time: closure_2_5, end_time: closure_2_7, interval: closure_2_9, repeat_type: closure_2_11, repeat_days: items1, status: "active", description: closure_2_20 };
            const obj5 = theme(table[15]);
            if (closure_2_4) {
              const storeScheduleApiResult = obj5.storeScheduleApi(obj, {});
              obj5.storeScheduleApi(obj, {}).then((() => {
                closure_0 = id.default(async (arg0) => {
                  if (obj) {
                    return obj.resume();
                  } else {
                    closure_5_24(false);
                    obj = { screen: mod.default.Schedules };
                    closure_5_1.navigate(mod.default.Main, obj);
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })()).catch((message) => {
                closure_3_24(false);
                const Alert = closure_6.Alert;
                message = undefined;
                if (message != null) {
                  message = message.message;
                }
                Alert.alert(message);
              });
              const nextPromise = obj5.storeScheduleApi(obj, {}).then((() => {
                closure_0 = id.default(async (arg0) => {
                  if (obj) {
                    return obj.resume();
                  } else {
                    closure_5_24(false);
                    obj = { screen: mod.default.Schedules };
                    closure_5_1.navigate(mod.default.Main, obj);
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })());
            } else {
              const editScheduleApiResult = obj5.editScheduleApi(closure_2_3, obj, {});
              obj5.editScheduleApi(closure_2_3, obj, {}).then((() => {
                closure_0 = id.default(async (arg0) => {
                  if (obj) {
                    return obj.resume();
                  } else {
                    closure_5_24(false);
                    obj = { screen: mod.default.Schedules };
                    closure_5_1.navigate(mod.default.Main, obj);
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })()).catch((message) => {
                closure_3_24(false);
                const Alert = closure_6.Alert;
                message = undefined;
                if (message != null) {
                  message = message.message;
                }
                Alert.alert(message);
              });
              const nextPromise1 = obj5.editScheduleApi(closure_2_3, obj, {}).then((() => {
                closure_0 = id.default(async (arg0) => {
                  if (obj) {
                    return obj.resume();
                  } else {
                    closure_5_24(false);
                    obj = { screen: mod.default.Schedules };
                    closure_5_1.navigate(mod.default.Main, obj);
                  }
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })());
            }
          }
          closure_2_24(false);
          let Alert = closure_6.Alert;
          Alert.alert("Invalid Time", "End time must be after start time");
        }
      }
      closure_2_24(false);
      const Alert2 = closure_6.Alert;
      Alert2.alert("Invalid Name", "Name must be 12 characters or fewer");
    });
    return function saveSchedule() {
      return callback(...arguments);
    };
  })();
  [str12, closure_33] = isNew.default(first.useState(str10), 2);
  obj = {};
  obj = {
    isBack: true,
    backPress() {
      navigation.goBack();
    },
    title: mod.default.SCHEDULE,
    rightIcon: theme(689).Icons.userCircle,
    rightIconPress() {
      navigation.navigate(lib.default.User);
    }
  };
  const items4 = [
    React.jsx(theme(671).Header, {
      isBack: true,
      backPress() {
        navigation.goBack();
      },
      title: mod.default.SCHEDULE,
      rightIcon: theme(689).Icons.userCircle,
      rightIconPress() {
        navigation.navigate(lib.default.User);
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj1 = { showsVerticalScrollIndicator: false };
  const obj2 = { style: closure_13.content };
  const obj3 = {
    onPress: function editName() {
      callback6(true);
    },
    style: closure_13.nameContainer
  };
  const items5 = [<RN.Text style={closure_13.titleText}>{first4}</RN.Text>, ];
  let obj5 = { source: theme(689).Icons.edit };
  const defaultResult15 = isNew.default(first.useState(str10), 2);
  const obj4 = { style: closure_13.titleText, children: first4 };
  obj5.style = { height: theme(780).perfectSize(25), width: theme(780).perfectSize(25), marginLeft: theme(780).perfectSize(10) };
  items5[1] = <RN.Image source={theme(689).Icons.edit} />;
  obj3.children = items5;
  const items6 = [
    <RN.TouchableOpacity onPress={function editName() {
      callback6(true);
    }} style={closure_13.nameContainer} />,
  ,
  ,

  ];
  const obj7 = { style: closure_13.section };
  const obj8 = { style: closure_13.timeFormate };
  const obj9 = {
    style: items7,
    onPress() {
      callback3(false);
      callback2(true);
      if (RN.Platform.OS === "ios") {
        callback11(true);
      }
    }
  };
  items7 = [closure_13.timeButton, { backgroundColor: theme.card }];
  const items8 = [<RN.Text style={closure_13.cardTitle}>{mod.default.START}</RN.Text>, <RN.Text style={closure_13.timeText}>{first}</RN.Text>];
  obj9.children = items8;
  const items9 = [
    <RN.TouchableOpacity style={items7} onPress={function onPress() {
      callback3(false);
      callback2(true);
      if (RN.Platform.OS === "ios") {
        callback11(true);
      }
    }} />,

  ];
  const obj12 = {
    style: items10,
    onPress() {
      callback2(false);
      callback3(true);
      if (RN.Platform.OS === "ios") {
        callback11(true);
      }
    }
  };
  items10 = [closure_13.timeButton, { backgroundColor: theme.card }];
  const items11 = [<RN.Text style={closure_13.cardTitle}>{mod.default.END}</RN.Text>, ];
  const obj14 = { style: closure_13.timeText, children: TouchableOpacity };
  items11[1] = <RN.Text style={closure_13.timeText}>{TouchableOpacity}</RN.Text>;
  obj12.children = items11;
  items9[1] = <RN.TouchableOpacity style={items10} onPress={function onPress() {
    callback2(false);
    callback3(true);
    if (RN.Platform.OS === "ios") {
      callback11(true);
    }
  }} />;
  obj8.children = items9;
  const items12 = [<RN.View style={closure_13.timeFormate} />, , ];
  let jsxResult = tmp13;
  if (tmp13) {
    jsxResult = RN.Platform.OS === "android";
  }
  if (jsxResult) {
    const obj15 = {
      value: getTimeAsDate(first),
      mode: "time",
      is24Hour: false,
      textColor: theme.black,
      display: "spinner",
      onChange(arg0, getHours) {
          return onTimeSelected(arg0, getHours, true);
        }
    };
    jsxResult = <TouchableOpacity.default value={getTimeAsDate(first)} mode="time" is24Hour={false} textColor={theme.black} display="spinner" onChange={function onChange(arg0, getHours) {
      return onTimeSelected(arg0, getHours, true);
    }} />;
  }
  items12[1] = jsxResult;
  let jsxResult1 = first2;
  if (first2) {
    jsxResult1 = RN.Platform.OS === "android";
  }
  if (jsxResult1) {
    const obj16 = {
      value: getTimeAsDate(TouchableOpacity),
      mode: "time",
      is24Hour: false,
      textColor: theme.black,
      display: "spinner",
      onChange(arg0, getHours) {
          return onTimeSelected(arg0, getHours, false);
        }
    };
    jsxResult1 = <TouchableOpacity.default value={getTimeAsDate(TouchableOpacity)} mode="time" is24Hour={false} textColor={theme.black} display="spinner" onChange={function onChange(arg0, getHours) {
      return onTimeSelected(arg0, getHours, false);
    }} />;
  }
  items12[2] = jsxResult1;
  obj7.children = items12;
  items6[1] = <RN.View style={closure_13.section} />;
  const obj17 = { style: items13 };
  items13 = [closure_13.section];
  const obj18 = {
    style: items14,
    onPress() {
      callback3(false);
      callback2(false);
      callback4(true);
    }
  };
  items14 = [closure_13.picker, { backgroundColor: theme.card }];
  const obj10 = { style: closure_13.cardTitle, children: mod.default.START };
  const obj11 = { style: closure_13.timeText, children: first };
  const obj13 = { style: closure_13.cardTitle, children: mod.default.END };
  const obj6 = { height: theme(780).perfectSize(25), width: theme(780).perfectSize(25), marginLeft: theme(780).perfectSize(10) };
  const items15 = [<RN.View style={closure_13.sectionInterval}><RN.Text {...obj20} /></RN.View>, ];
  const obj21 = { style: { color: "#333" } };
  if (first3.length === 0) {
    let ONLY_ONCE = mod.default.ONLY_ONCE;
  } else {
    ONLY_ONCE = obj[first1];
  }
  obj21.children = ONLY_ONCE;
  items15[1] = <RN.Text style={{ color: "#333" }} />;
  obj18.children = items15;
  obj17.children = <RN.TouchableOpacity style={items14} onPress={function onPress() {
    callback3(false);
    callback2(false);
    callback4(true);
  }} />;
  items6[2] = <RN.View style={items13} />;
  const obj22 = { style: items16 };
  items16 = [closure_13.section, {}];
  const obj23 = {};
  const items17 = [closure_13.picker, ];
  const obj19 = { style: closure_13.sectionInterval, children: <RN.Text {...obj20} /> };
  items17[1] = { backgroundColor: theme.card, marginBottom: theme(780).perfectSize(60) };
  obj23.style = items17;
  const obj24 = { backgroundColor: theme.card, marginBottom: theme(780).perfectSize(60) };
  const items18 = [<RN.View style={closure_13.sectionInterval}><RN.Text {...obj26} /></RN.View>, , , ];
  const obj27 = { style: closure_13.labelContainer };
  const obj25 = { style: closure_13.sectionInterval, children: <RN.Text {...obj26} /> };
  const items19 = [<RN.View style={closure_13.lbelView}><RN.Text {...obj29} /></RN.View>, ];
  const obj28 = { style: closure_13.lbelView, children: <RN.Text {...obj29} /> };
  items19[1] = <RN.View style={closure_13.lbelView}><RN.Text {...obj31} /></RN.View>;
  obj27.children = items19;
  items18[1] = <RN.View style={closure_13.labelContainer} />;
  const obj32 = { style: closure_13.pickerRow };
  const obj34 = { height: 150, width: 100, backgroundColor: theme.card, color: "#000" };
  const items20 = [
    React.jsx(theme(808).Picker, {
      style: obj34,
      selectedValue: first6,
      pickerData: arr,
      onValueChange(arg0) {
        callback9(arg0);
      },
      selectTextColor: "black"
    }),
    <RN.Text style={closure_13.dotText}>{":"}</RN.Text>,

  ];
  const obj37 = { height: 150, width: 100, backgroundColor: theme.card, color: "#000" };
  items20[2] = React.jsx(theme(808).Picker, {
    style: obj37,
    selectedValue: first7,
    pickerData: arr,
    onValueChange(arg0) {
      callback10(arg0);
    }
  });
  obj32.children = items20;
  items18[2] = <RN.View style={closure_13.pickerRow} />;
  const obj38 = { style: closure_13.intervalContainer };
  let mapped;
  if (items3 != null) {
    mapped = items3.map((label) => {
      theme = label;
      let tmp = label.label === "01:00";
      if (tmp) {
        tmp = first6 === 1;
      }
      if (tmp) {
        tmp = first7 === 0;
      }
      if (!tmp) {
        let tmp4 = label.label !== "01:00";
        if (tmp4) {
          tmp4 = first6 === 0;
        }
        if (tmp4) {
          tmp4 = first7 === label.value;
        }
        tmp = tmp4;
      }
      let obj = {};
      const items = [closure_1_13.intervalButton, ];
      obj = {};
      let num4 = 0.2;
      if (tmp) {
        num4 = 1;
      }
      obj.borderWidth = num4;
      let str = "gray";
      if (tmp) {
        str = theme.primary;
      }
      obj.borderColor = str;
      items[1] = obj;
      obj.style = items;
      obj.onPress = function onPress() {
        label = undefined;
        if (label != null) {
          label = label.label;
        }
        if (label === "01:00") {
          closure_1_26(1);
          closure_1_28(0);
        } else {
          closure_1_26(0);
          let value;
          if (label != null) {
            value = label.value;
          }
          closure_1_28(value);
          const tmp5 = closure_1_28;
        }
      };
      obj = { style: closure_1_13.intervalBtnText };
      label = undefined;
      if (label != null) {
        label = label.label;
      }
      obj.children = label;
      obj.children = <RN.Text style={closure_1_13.intervalBtnText} />;
      return <RN.Pressable key={arg1} style={closure_1_13.intervalBtnText} />;
    });
  }
  obj38.children = mapped;
  items18[3] = <RN.View style={closure_13.intervalContainer} />;
  obj23.children = items18;
  obj22.children = <RN.View />;
  items6[3] = <RN.View style={items16} />;
  obj2.children = items6;
  obj1.children = <RN.View style={closure_13.content} />;
  items4[1] = <RN.ScrollView showsVerticalScrollIndicator={false} />;
  let jsxResult2 = tmp17;
  if (tmp17) {
    const obj39 = {
      visible: tmp17,
      onClose() {
          return callback4(false);
        },
      onConfirm(arg0) {
          callback5(arg0);
          const sorted = detail.default(arg0).sort();
          const joined = sorted.join(",");
          if (joined === "Fri,Mon,Sat,Sun,Thu,Tue,Wed") {
            React("daily");
          } else if (joined === "") {
            React("once");
          } else {
            React("custom");
          }
        },
      initialSelectedDays: first3
    };
    jsxResult2 = React.jsx(theme(671).RepeatModal, {
      visible: tmp17,
      onClose() {
          return callback4(false);
        },
      onConfirm(arg0) {
          callback5(arg0);
          const sorted = detail.default(arg0).sort();
          const joined = sorted.join(",");
          if (joined === "Fri,Mon,Sat,Sun,Thu,Tue,Wed") {
            React("daily");
          } else if (joined === "") {
            React("once");
          } else {
            React("custom");
          }
        },
      initialSelectedDays: first3
    });
  }
  items4[2] = jsxResult2;
  const obj40 = {
    visible: defaultResult14[0],
    transparent: true,
    animationType: "fade",
    onRequestClose() {
      return callback11(false);
    }
  };
  const obj41 = { style: closure_13.modalOverlay };
  if (!tmp13) {
    if (!first2) {
      const obj42 = { style: closure_13.modalContent };
      const obj43 = {};
      const items21 = [closure_13.modalTitle, ];
      const obj44 = { color: theme.primary };
      items21[1] = obj44;
      obj43.style = items21;
      obj43.children = t(mod.default.SET_INTERVAL);
      const items22 = [<RN.Text />, , ];
      const obj45 = {
        style: closure_13.nameInput,
        value: str12.toString(),
        onChangeText: function handleTextChange(replaced) {
              if (replaced === "") {
                callback12("");
              } else if (obj.test(replaced)) {
                callback12(replaced);
                const _parseFloat = parseFloat;
                const parsed = parseFloat(replaced);
                const _isNaN = isNaN;
                if (!isNaN(parsed)) {
                  callback(parsed);
                }
              }
            },
        keyboardType: "numeric"
      };
      items22[1] = <RN.TextInput style={closure_13.nameInput} value={str12.toString()} onChangeText={function handleTextChange(replaced) {
        if (replaced === "") {
          callback12("");
        } else if (obj.test(replaced)) {
          callback12(replaced);
          const _parseFloat = parseFloat;
          const parsed = parseFloat(replaced);
          const _isNaN = isNaN;
          if (!isNaN(parsed)) {
            callback(parsed);
          }
        }
      }} keyboardType="numeric" />;
      const obj46 = { style: closure_13.modalButtons };
      const obj47 = {
        style: closure_13.modalButton,
        onPress() {
              return callback11(false);
            }
      };
      const obj48 = {};
      const items23 = [closure_13.modalButtonText, ];
      const obj49 = { color: theme.primary };
      items23[1] = obj49;
      obj48.style = items23;
      obj48.children = mod.default.CANCEL;
      obj47.children = <RN.Text />;
      const items24 = [
        <RN.TouchableOpacity style={closure_13.modalButton} onPress={function onPress() {
              return callback11(false);
            }} />,

      ];
      const obj50 = {};
      const items25 = [closure_13.modalButton, ];
      const obj51 = { backgroundColor: theme.primary };
      items25[1] = obj51;
      obj50.style = items25;
      obj50.onPress = function onPress() {
        if (closure_9 >= 1) {
          if (closure_9 <= 180) {
            callback(closure_9);
            callback11(false);
          }
        }
        const Alert = RN.Alert;
        Alert.alert("set greater than 1 to less than 180 min value");
      };
      const obj52 = {};
      const items26 = [closure_13.modalButtonTextPrimary, ];
      const obj53 = { color: theme.white };
      items26[1] = obj53;
      obj52.style = items26;
      obj52.children = mod.default.SAVE;
      obj50.children = <RN.Text />;
      items24[1] = <RN.TouchableOpacity />;
      obj46.children = items24;
      items22[2] = <RN.View style={closure_13.modalButtons} />;
      obj42.children = items22;
      obj41.children = <RN.View style={closure_13.modalContent} />;
      obj40.children = tmp58(tmp59, obj41);
      items4[3] = tmp56(tmp57, obj40);
      const obj54 = { style: closure_13.btnContainer };
      let obj61 = React;
      const jsx3 = React.jsx;
      if (defaultResult11[0]) {
        const obj55 = {};
        const items27 = [closure_13.saveButton];
        obj55.style = items27;
        const obj56 = { colors: ["#7DC4F8", "#0066B0"], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: closure_13.gradientButton };
        const obj57 = { size: "small", color: theme.white };
        obj56.children = <tmp76.ActivityIndicator size="small" color={theme.white} />;
        obj55.children = <mod2.default colors={["#7DC4F8", "#0066B0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_13.gradientButton} />;
        let jsx3Result = jsx3(tmp76.View, obj55);
      } else {
        const obj58 = {};
        const items28 = [closure_13.saveButton];
        obj58.style = items28;
        obj58.onPress = tmp36;
        const obj59 = { colors: ["#7DC4F8", "#0066B0"], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: closure_13.gradientButton };
        const obj60 = {};
        const items29 = [closure_13.saveButtonText, ];
        obj61 = { color: theme.white };
        items29[1] = obj61;
        obj60.style = items29;
        obj60.children = mod.default.SAVE;
        obj59.children = <tmp76.Text />;
        obj58.children = <mod2.default colors={["#7DC4F8", "#0066B0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={closure_13.gradientButton} />;
        jsx3Result = jsx3(tmp76.TouchableOpacity, obj58);
      }
      obj54.children = jsx3Result;
      items4[4] = <RN.View style={closure_13.btnContainer} />;
      const obj62 = {
        visible: defaultResult8[0],
        transparent: true,
        animationType: "fade",
        onRequestClose() {
              return callback6(false);
            }
      };
      const obj63 = { style: closure_13.modalOverlay };
      const obj64 = { style: closure_13.modalContent };
      const obj65 = {};
      const items30 = [closure_13.modalTitle, ];
      const obj66 = { color: theme.primary };
      items30[1] = obj66;
      obj65.style = items30;
      obj65.children = t(mod.default.DEVICE_NAME);
      const items31 = [<RN.Text />, , ];
      const obj67 = { style: closure_13.nameInput, value: first5, onChangeText: tmp24, placeholder: "Enter Schedule Name" };
      items31[1] = <RN.TextInput style={closure_13.nameInput} value={first5} onChangeText={tmp24} placeholder="Enter Schedule Name" />;
      const obj68 = { style: closure_13.modalButtons };
      const obj69 = {
        style: closure_13.modalButton,
        onPress() {
              return callback6(false);
            }
      };
      const obj70 = { style: closure_13.modalButtonText, children: mod.default.CANCEL };
      obj69.children = <RN.Text style={closure_13.modalButtonText}>{mod.default.CANCEL}</RN.Text>;
      const items32 = [
        <RN.TouchableOpacity style={closure_13.modalButton} onPress={function onPress() {
              return callback6(false);
            }} />,

      ];
      const obj71 = {};
      const items33 = [closure_13.modalButton, closure_13.modalButtonPrimary];
      obj71.style = items33;
      obj71.onPress = function onPress() {
        callback7(first5);
        callback8("");
        callback6(false);
      };
      const obj72 = { style: closure_13.modalButtonTextPrimary, children: mod.default.SAVE };
      obj71.children = <RN.Text style={closure_13.modalButtonTextPrimary}>{mod.default.SAVE}</RN.Text>;
      items32[1] = <RN.TouchableOpacity />;
      obj68.children = items32;
      items31[2] = <RN.View style={closure_13.modalButtons} />;
      obj64.children = items31;
      obj63.children = <RN.View style={closure_13.modalContent} />;
      obj62.children = <RN.View style={closure_13.modalOverlay} />;
      items4[5] = <RN.Modal visible={defaultResult8[0]} transparent animationType="fade" onRequestClose={function onRequestClose() {
        return callback6(false);
      }} />;
      obj.children = items4;
      return React.jsxs(theme(671).Container, obj);
    }
  }
  const obj73 = { style: closure_13.modalContent };
  let View = React.jsx;
  let _default = TouchableOpacity.default;
  let obj74 = {
    value: first2 ? getTimeAsDate(TouchableOpacity) : getTimeAsDate(first),
    mode: "time",
    is24Hour: false,
    textColor: theme.black,
    display: "spinner",
    onChange(arg0, arg1) {
      if (first2) {
        tmp(arg0, arg1, false);
      } else {
        tmp(arg0, arg1, true);
      }
    }
  };
  const obj30 = { style: closure_13.lbelView, children: <RN.Text {...obj31} /> };
  const obj33 = {
    style: obj34,
    selectedValue: first6,
    pickerData: arr,
    onValueChange(arg0) {
      callback9(arg0);
    },
    selectTextColor: "black"
  };
  const obj35 = { style: closure_13.dotText, children: ":" };
  const obj36 = {
    style: obj37,
    selectedValue: first7,
    pickerData: arr,
    onValueChange(arg0) {
      callback10(arg0);
    }
  };
  obj74 = [, ];
  obj74[0] = View(_default, obj74);
  View = RN.View;
  const obj75 = { style: closure_13.modalButtons };
  TouchableOpacity = RN.TouchableOpacity;
  const ViewResult = View(_default, obj74);
  const items34 = [closure_13.modalButtonText, { color: theme.primary }];
  ({ jsx, jsx: jsx2 } = React);
  getTimeAsDate = jsx2(TouchableOpacity, {
    style: closure_13.modalButton,
    onPress() {
      return callback11(false);
    },
    children: <RN.Text {...obj77} />
  });
  obj75.children = getTimeAsDate;
  _default = <View style={closure_13.modalButtons} />;
  obj74[1] = _default;
  obj73.children = obj74;
  <RN.View style={closure_13.modalContent} />;
};
