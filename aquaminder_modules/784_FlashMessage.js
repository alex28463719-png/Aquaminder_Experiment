// Module ID: 784
// Function ID: 8071
// Name: FlashMessage
// Dependencies: [1, 119, 2, 251]
// Exports: default

// Module 784 (FlashMessage)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import closure_1 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ container: { position: "absolute", top: 5, left: 15, right: 15, padding: 15, backgroundColor: "#000", borderRadius: 10, zIndex: 999 }, text: { color: "#fff", fontWeight: "bold" } });

export default function FlashMessage(children) {
  obj = { style: closure_2.container, children: <get registerCallableModule.Text {...obj} /> };
  obj = { style: closure_2.text, children: children.message };
  return <get registerCallableModule.View style={closure_2.text}>{arg0.message}</get registerCallableModule.View>;
};
