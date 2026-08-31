// Module ID: 781
// Function ID: 8056
// Name: RepeatModal
// Dependencies: [1, 6, 38, 119, 2, 501, 251, 644, 512, 689, 780]
// Exports: default

// Module 781 (RepeatModal)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _mod501 from "module_501" /* 501 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_slicedToArray);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_6 = module_1(_mod501);
let closure_8 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center", paddingHorizontal: require("module_15") };
obj.overlay = obj;
obj = { width: "100%", backgroundColor: "#fff", borderRadius: 10, padding: require("module_20") };
obj.modalView = obj;
obj.title = { fontSize: require("module_22"), fontWeight: "bold", marginBottom: require("module_10") };
let obj2 = { flexDirection: "row", alignItems: "center", marginVertical: require("module_5"), justifyContent: "space-between" };
obj.dayRow = obj2;
let obj1 = { fontSize: require("module_22"), fontWeight: "bold", marginBottom: require("module_10") };
obj.dayText = { fontSize: require("module_18"), marginLeft: require("module_10") };
let obj4 = { flexDirection: "row", justifyContent: "flex-end", marginTop: require("module_20") };
obj.buttonRow = obj4;
let obj3 = { fontSize: require("module_18"), marginLeft: require("module_10") };
obj.cancelButton = { marginRight: require("module_10"), paddingHorizontal: require("module_20"), paddingVertical: require("module_10"), borderRadius: 6 };
let obj5 = { marginRight: require("module_10"), paddingHorizontal: require("module_20"), paddingVertical: require("module_10"), borderRadius: 6 };
obj.okButton = { paddingHorizontal: require("module_20"), paddingVertical: require("module_10"), borderRadius: 6 };
obj.buttonText = { fontWeight: "600" };
const styles = StyleSheet.create(obj);

export default function RepeatModal(arg0) {
  ({ visible, onClose } = arg0);
  ({ onConfirm: dependencyMap, initialSelectedDays } = arg0);
  if (initialSelectedDays === undefined) {
    initialSelectedDays = [];
  }
  const theme = onClose(644).useTheme();
  const t = onClose(512).useTranslation().t;
  if (initialSelectedDays.length <= 0) {
    let items = [];
    initialSelectedDays = items.concat(closure_8);
  }
  const defaultResult = theme.default(first.useState(initialSelectedDays), 2);
  first = defaultResult[0];
  const RN = defaultResult[1];
  let items1 = [visible];
  const effect = first.useEffect(() => {
    if (initialSelectedDays.length > 0) {
      RN(initialSelectedDays);
    } else {
      const items = [];
      RN(items.concat(closure_1_8));
    }
  }, items1);
  function toggleDay(name) {
    closure_0 = name;
    if (first.includes(name)) {
      tmp(first.filter((arg0) => arg0 !== closure_0));
    } else {
      const items = [];
      const items1 = [name];
      tmp(items.concat(initialSelectedDays.default(first), items1));
    }
  }
  let obj = { animationType: "slide", transparent: true, visible };
  obj = { style: closure_9.overlay };
  obj = { style: closure_9.modalView };
  const items2 = [closure_9.title, { color: theme.primary }];
  const items3 = [<RN.Text style={items2}>{t(toggleDay.default.REPEAT_DAYS)}</RN.Text>, , , ];
  const obj2 = {
    style: closure_9.dayRow,
    onPress: function toggleAllDays() {
      if (first.length === closure_1_8.length) {
        RN([]);
      } else {
        const items = [];
        RN(items.concat(closure_1_8));
      }
    }
  };
  let obj1 = { style: items2, children: t(toggleDay.default.REPEAT_DAYS) };
  const items4 = [closure_9.dayText, { color: theme.black }];
  const items5 = [<RN.Text style={items4}>{t(toggleDay.default.ALL_DAYS)}</RN.Text>, ];
  const obj4 = {};
  if (first.length === closure_8.length) {
    let name = onClose(689).VectorIcons.checkBox.name;
  } else {
    name = onClose(689).VectorIcons.uncheckBox.name;
  }
  obj4.name = name;
  obj4.size = 20;
  obj4.color = theme.primary;
  items5[1] = React.jsx(onClose(689).VectorIcons.checkBox.component, {});
  obj2.children = items5;
  items3[1] = <RN.TouchableOpacity style={closure_9.dayRow} onPress={function toggleAllDays() {
    if (first.length === closure_1_8.length) {
      RN([]);
    } else {
      const items = [];
      RN(items.concat(closure_1_8));
    }
  }} />;
  items3[2] = closure_8.map((children) => {
    closure_0 = children;
    let obj = {
      style: closure_1_9.dayRow,
      onPress() {
        return closure_1_6(closure_0);
      }
    };
    obj = { style: items, children };
    items = [closure_1_9.dayText, ];
    obj = { color: theme.black };
    items[1] = obj;
    const items1 = [<RN.Text color={theme.black} />, ];
    const obj1 = {};
    const hasItem = first.includes(children);
    const VectorIcons = onClose(closure_1_1[9]).VectorIcons;
    if (hasItem) {
      let name = VectorIcons.checkBox.name;
    } else {
      name = VectorIcons.uncheckBox.name;
    }
    obj1.name = name;
    obj1.size = 20;
    obj1.color = theme.primary;
    items1[1] = closure_1_7.jsx(onClose(closure_1_1[9]).VectorIcons.checkBox.component, {});
    obj.children = items1;
    return <RN.TouchableOpacity key={arg0} color={theme.black} />;
  });
  const obj5 = { style: closure_9.buttonRow };
  const obj6 = { style: items6, onPress: onClose };
  items6 = [closure_9.cancelButton, { backgroundColor: theme.gray_secondary }];
  const obj3 = { style: items4, children: t(toggleDay.default.ALL_DAYS) };
  const items7 = [closure_9.buttonText, { color: theme.black }];
  obj6.children = <RN.Text style={items7}>{t(toggleDay.default.CANCEL)}</RN.Text>;
  const items8 = [<RN.Pressable style={items6} onPress={onClose} />, ];
  const obj8 = {
    style: items9,
    onPress() {
      callback(first);
      onClose();
    }
  };
  items9 = [closure_9.okButton, { backgroundColor: theme.primary }];
  const obj7 = { style: items7, children: t(toggleDay.default.CANCEL) };
  const items10 = [closure_9.buttonText, { color: theme.white }];
  obj8.children = <RN.Text style={items10}>{t(toggleDay.default.OK)}</RN.Text>;
  items8[1] = <RN.Pressable style={items9} onPress={function onPress() {
    callback(first);
    onClose();
  }} />;
  obj5.children = items8;
  items3[3] = <RN.View style={closure_9.buttonRow} />;
  obj.children = items3;
  obj.children = <RN.View style={closure_9.modalView} />;
  obj.children = <RN.View style={closure_9.modalView} />;
  return <RN.Modal style={closure_9.modalView} />;
};
