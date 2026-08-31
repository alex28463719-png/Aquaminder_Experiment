// Module ID: 938
// Function ID: 9848
// Name: NativeStackNavigator
// Dependencies: [1, 203, 119, 251, 529, 851]
// Exports: createNativeStackNavigator

// Module 938 (NativeStackNavigator)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod529 from "module_529" /* 529 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

function NativeStackNavigator(arg0) {
  ({ id, initialRouteName, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router } = arg0);
  const navigationBuilder = state(navigation[4]).useNavigationBuilder(state(navigation[4]).StackRouter, { id, initialRouteName, children, layout, screenListeners, screenOptions, screenLayout, UNSTABLE_router });
  state = navigationBuilder.state;
  navigation = navigationBuilder.navigation;
  const items = [navigation, , ];
  ({ index: arr[1], key: arr[2] } = state);
  ({ describe, descriptors, NavigationContent } = navigationBuilder);
  const effect = React.useEffect(() => {
    let addListenerResult;
    if (navigation != null) {
      if (navigation.addListener != null) {
        addListenerResult = navigation.addListener("tabPress", (arg0) => {
          closure_0 = arg0;
          closure_1 = closure_1_1.isFocused();
          const animationFrame = requestAnimationFrame(() => {
            if (closure_2_0.index > 0) {
              if (closure_1) {
                if (!defaultPrevented.defaultPrevented) {
                  const _Object = Object;
                  const StackActions = state(navigation[4]).StackActions;
                  const obj = { target: closure_2_0.key };
                  closure_2_1.dispatch(Object.assign({}, StackActions.popToTop(), obj));
                }
              }
            }
          });
        });
      }
    }
    return addListenerResult;
  }, items);
  let obj = {};
  ({ jsx, jsx: jsx2 } = closure_4);
  obj.children = jsx2(state(navigation[5]).NativeStackView, Object.assign({}, closure_2.default(arg0, closure_5), { state, navigation, descriptors, describe }));
  return <NavigationContent />;
}
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_5 = ["id", "initialRouteName", "children", "layout", "screenListeners", "screenOptions", "screenLayout", "UNSTABLE_router"];

export function createNativeStackNavigator(arg0) {
  return _mod529.createNavigatorFactory(NativeStackNavigator)(arg0);
}
