// Module ID: 827
// Function ID: 9050
// Name: ErrorComponent
// Dependencies: [1, 119, 2, 251, 689, 780]
// Exports: default

// Module 827 (ErrorComponent)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import CupVariants from "CupVariants" /* 689 */;
import PREDEF_RES from "PREDEF_RES" /* 780 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_3 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
let obj = {};
obj = { flexDirection: "row", alignItems: "center", marginTop: require("module_10"), paddingLeft: require("module_5") };
obj.rowStyle = obj;
obj = { fontSize: require("module_13"), color: "red", marginLeft: require("module_5") };
obj.title = obj;
obj.errorIcon = { height: require("module_15"), width: require("module_15") };
const styles = StyleSheet.create(obj);

export default function ErrorComponent(children) {
  let obj = { style: closure_4.rowStyle };
  obj = { source: CupVariants.Icons.ic_warning, style: closure_4.errorIcon, resizeMode: "contain" };
  const items = [<get registerCallableModule.Image source={CupVariants.Icons.ic_warning} style={closure_4.errorIcon} resizeMode="contain" />, ];
  obj = { style: closure_4.title, children: children.error };
  items[1] = <get registerCallableModule.Text style={closure_4.title}>{arg0.error}</get registerCallableModule.Text>;
  obj.children = items;
  return <get registerCallableModule.View style={closure_4.title}>{arg0.error}</get registerCallableModule.View>;
};
