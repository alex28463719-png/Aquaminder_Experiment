// Module ID: 953
// Function ID: 9947
// Name: BottomTabNavigator
// Dependencies: [1, 203, 251, 529, 947]
// Exports: createBottomTabNavigator

// Module 953 (BottomTabNavigator)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import BottomTabView from "BottomTabView" /* 947 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "jsxProd" /* 251 */;

function BottomTabNavigator(arg0) {
  ({ id, initialRouteName, backBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  const navigationBuilder = _mod529.useNavigationBuilder(_mod529.TabRouter, { id, initialRouteName, backBehavior, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  const obj = {};
  ({ state, descriptors, navigation, NavigationContent } = navigationBuilder);
  ({ jsx, jsx: jsx2 } = closure_3);
  obj.children = jsx2(BottomTabView.BottomTabView, Object.assign({}, closure_2.default(arg0, closure_4), { state, navigation, descriptors }));
  return <NavigationContent />;
}
let closure_2 = module_1(_objectWithoutProperties);
let closure_4 = ["id", "initialRouteName", "backBehavior", "children", "layout", "screenListeners", "screenOptions", "screenLayout", "UNSTABLE_router"];

export function createBottomTabNavigator(arg0) {
  return _mod529.createNavigatorFactory(BottomTabNavigator)(arg0);
}
