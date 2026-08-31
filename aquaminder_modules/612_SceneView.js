// Module ID: 612
// Function ID: 6641
// Name: SceneView
// Dependencies: [1, 203, 119, 251, 556, 613, 538, 561, 614]
// Exports: SceneView

// Module 612 (SceneView)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_5 = ["state", "screen", "params", "initial"];

export function SceneView(getState) {
  ({ screen, route } = getState);
  ({ navigation, routeState } = getState);
  getState = getState.getState;
  const setState = getState.setState;
  const clearOptions = getState.clearOptions;
  closure_5 = setState.useRef(undefined);
  const callback = setState.useCallback(() => ref.current, []);
  let obj = { key: route.key, options: getState.options, navigation };
  const addOptionsGetter = route(routeState[4]).useOptionsGetters(obj).addOptionsGetter;
  const callback1 = setState.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let items = [getState, route.key];
  const callback2 = setState.useCallback(() => {
    let state;
    const routes = getState().routes;
    const found = routes.find((key) => key.key === closure_1_0.key);
    if (found) {
      state = found.state;
    }
    return state;
  }, items);
  const items1 = [getState, route.key, setState];
  const callback3 = setState.useCallback((arg0) => {
    closure_0 = arg0;
    const tmp = getState();
    const routes = tmp.routes;
    setState(Object.assign({}, tmp, {
      routes: routes.map((key) => {
        if (key.key !== key.key) {
          return key;
        } else {
          const _Object2 = Object;
          const obj = { state: key };
          const merged = Object.assign({}, key, obj);
          if (merged.params) {
            if ("state" in merged.params) {
              const params = merged.params;
              ({ state, screen, params: params2, initial } = params);
              const defaultResult = getState.default(params, closure_5);
              const _Object = Object;
              if (Object.keys(defaultResult).length) {
                merged.params = defaultResult;
              } else {
                delete tmp.params;
              }
            }
          }
          return merged;
        }
      })
    }));
  }, items1);
  closure_11 = setState.useRef(true);
  const effect = setState.useEffect(() => {
    closure_11.current = false;
  });
  const effect1 = setState.useEffect(() => clearOptions, []);
  const callback4 = setState.useCallback(() => ref2.current, []);
  const context = setState.useContext(route(routeState[5]).NavigationFocusedRouteStateContext);
  const items2 = [context, , , , ];
  ({ key: arr3[1], name: arr3[2], params: arr3[3], path: arr3[4] } = route);
  const items3 = [routeState, callback2, callback3, callback, callback1, callback4, addOptionsGetter];
  const memo = setState.useMemo(() => {
    let items = [{ key: closure_0.key, name: closure_0.name, params: closure_0.params, path: closure_0.path }];
    closure_0 = { routes: items };
    function addState(context) {
      let first;
      if (context != null) {
        first = context.routes[0];
      }
      if (first) {
        let obj = {};
        const _Object = Object;
        obj = { state: addState(first.state) };
        const items = [Object.assign({}, first, obj)];
        obj.routes = items;
        return obj;
      } else {
        return closure_0;
      }
    }
    return addState(context);
  }, items2);
  const memo1 = setState.useMemo(() => ({ state: routeState, getState: callback2, setState: callback3, getKey: callback, setKey: callback1, getIsInitial: callback4, addOptionsGetter }), items3);
  if (screen.getComponent) {
    let component = screen.getComponent();
  } else {
    component = screen.component;
  }
  obj = { value: memo1 };
  obj = { value: memo };
  const obj1 = {};
  const obj2 = { name: screen.name };
  let children = component;
  if (!component) {
    children = screen.children;
  }
  obj2.render = children;
  obj2.navigation = navigation;
  obj2.route = route;
  if (component !== undefined) {
    const obj3 = { navigation, route };
    let jsxResult = <component navigation={navigation} route={route} />;
  } else {
    jsxResult = null;
    if (screen.children !== undefined) {
      const obj4 = { navigation, route };
      jsxResult = screen.children(obj4);
    }
  }
  obj2.children = jsxResult;
  obj1.children = clearOptions.jsx(route(routeState[8]).StaticContainer, { name: screen.name });
  obj.children = clearOptions.jsx(route(routeState[7]).EnsureSingleNavigator, {});
  obj.children = clearOptions.jsx(route(routeState[5]).NavigationFocusedRouteStateContext.Provider, { value: memo });
  return clearOptions.jsx(route(routeState[6]).NavigationStateContext.Provider, { value: memo });
}
