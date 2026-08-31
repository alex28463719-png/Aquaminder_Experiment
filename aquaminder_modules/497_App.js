// Module ID: 497
// Function ID: 5428
// Name: App
// Dependencies: [1, 119, 2, 498, 955, 251, 961, 673]
// Exports: default

// Module 497 (App)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import TabNavigator from "TabNavigator" /* 498 */;
import _mod673 from "module_673" /* 673 */;
import _mod961 from "module_961" /* 961 */;
import module_1 from "module_1" /* 1 */;
import get_registerCallableModule from "get registerCallableModule" /* 2 */;
import module_955 from "module_955" /* 955 */;
import closure_4 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
let closure_3 = module_1(TabNavigator);
const StyleSheet = get_registerCallableModule.StyleSheet;
const styles = StyleSheet.create({ gestureView: { flex: 1 } });

export default function App() {
  let obj = { style: gestureView.gestureView };
  obj = {};
  const items = [<get registerCallableModule.StatusBar translucent barStyle="dark-content" backgroundColor="#FFFFFF" />, <mod.default />];
  obj.children = items;
  obj.children = React.jsxs(_mod673.SafeAreaProvider, {});
  return React.jsx(_mod961.GestureHandlerRootView, {});
};
