// Module ID: 610
// Function ID: 6599
// Name: _toPropertyKey
// Dependencies: [1, 203, 6, 38, 119, 251, 563, 557, 611, 580, 612, 565, 568]
// Exports: useDescriptors

// Module 610 (_toPropertyKey)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_6 from "jsxProd" /* 251 */;

function _toPropertyKey(arg0) {
  const tmp = _toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" !== typeof tmp) {
    text = `${tmp}`;
  }
  return text;
}
function _toPrimitive(closure_1) {
  if ("object" === typeof closure_1) {
    if (closure_1) {
      const _Symbol = Symbol;
      if (undefined !== closure_1[Symbol.toPrimitive]) {
        const callResult = obj.call(closure_1, "string");
        if ("object" !== typeof callResult) {
          return callResult;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        return String(closure_1);
      }
    }
  }
  return closure_1;
}
let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_slicedToArray);
let closure_5 = _interopRequireWildcard(getIteratorFn);

export function useDescriptors(state) {
  state = state.state;
  ({ screens: dependencyMap, navigation } = state);
  ({ screenOptions: closure_3, screenLayout: closure_4, onAction } = state);
  const getState = state.getState;
  ({ setState: _interopRequireWildcard, addListener } = state);
  const addKeyedListener = state.addKeyedListener;
  const onRouteFocus = state.onRouteFocus;
  ({ router, emitter } = state);
  closure_11 = onAction.useContext(state(563).ThemeContext);
  const defaultResult = closure_4.default(onAction.useState({}), 2);
  closure_12 = defaultResult[0];
  closure_13 = tmp2;
  const context = onAction.useContext(state(557).NavigationBuilderContext);
  const onDispatchAction = context.onDispatchAction;
  const onOptionsChange = context.onOptionsChange;
  const scheduleUpdate = context.scheduleUpdate;
  const flushUpdates = context.flushUpdates;
  const stackRef = context.stackRef;
  let items = [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, scheduleUpdate, flushUpdates, stackRef];
  closure_19 = onAction.useMemo(() => ({ navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, scheduleUpdate, flushUpdates, stackRef }), items);
  const navigationCache = state(611).useNavigationCache({ state, getState, navigation, setOptions: tmp2, router, emitter });
  ({ base: closure_20, navigations: closure_21 } = navigationCache);
  const routeCache = state(580).useRouteCache(state.routes);
  function getOptions(route, closure_20, arg2) {
    closure_0 = route;
    dependencyMap = closure_20;
    const items = [closure_3];
    if (dependencyMap[route.name].options) {
      const options = tmp.options;
      const _Boolean = Boolean;
      let found = options.filter(Boolean);
    } else {
      found = [];
    }
    const items1 = [dependencyMap[route.name].props.options, arg2];
    const combined = items.concat(closure_1_3.default(found), items1);
    return combined.reduce((arg0, fn) => {
      let tmp = fn;
      if (typeof fn === "function") {
        const obj = { route: closure_0, navigation: closure_1, theme: closure_1_11 };
        tmp = fn(obj);
      }
      return Object.assign(arg0, tmp);
    }, {});
  }
  function render(route, navigation, options, routeState) {
    closure_0 = route;
    const props = tmp.props;
    let layout = props.layout;
    if (layout == null) {
      layout = tmp.layout;
    }
    if (layout == null) {
      layout = closure_4;
    }
    let obj = {
      navigation,
      route,
      screen: props,
      routeState,
      getState,
      setState: closure_7,
      options,
      clearOptions() {
        return closure_1_13((arg0) => {
          if (closure_1_0.key in arg0) {
            const items = [closure_1_0.key];
            return navigation.default(arg0, items.map(addListener));
          } else {
            return arg0;
          }
        });
      }
    };
    const jsxResult = getState.jsx(state(closure_1_1[10]).SceneView, {
      navigation,
      route,
      screen: props,
      routeState,
      getState,
      setState: closure_7,
      options,
      clearOptions() {
        return closure_1_13((arg0) => {
          if (closure_1_0.key in arg0) {
            const items = [closure_1_0.key];
            return navigation.default(arg0, items.map(addListener));
          } else {
            return arg0;
          }
        });
      }
    });
    let layoutResult = jsxResult;
    if (layout != null) {
      obj = { route, navigation, options, theme: closure_11, children: jsxResult };
      layoutResult = layout(obj);
    }
    obj = { value: closure_19 };
    const obj1 = { value: navigation };
    const obj2 = { value: route, children: layoutResult };
    obj1.children = getState.jsx(state(closure_1_1[12]).NavigationRouteContext.Provider, { value: route, children: layoutResult });
    obj.children = getState.jsx(state(closure_1_1[11]).NavigationContext.Provider, { value: navigation });
    return getState.jsx(state(closure_1_1[7]).NavigationBuilderContext.Provider, { value: closure_19 }, route.key);
  }
  const reduced = routeCache.reduce((arg0, key) => {
    const tmp2 = getOptions(key, table2[key.key], table[key.key]);
    state = render(key, tmp, tmp2, state.routes[arg2].state);
    arg0[key.key] = {
      route: key,
      navigation: table2[key.key],
      render() {
        return closure_0;
      },
      options: tmp2
    };
    return arg0;
  }, {});
  return {
    describe(route, arg1) {
      if (arg1) {
        const tmp10 = getOptions(route, closure_20, {});
        closure_0 = render(route, closure_20, tmp10, undefined);
        const obj = {
          route,
          navigation: closure_20,
          render() {
              return closure_0;
            },
          options: tmp10
        };
        return obj;
      } else if (route.key in reduced) {
        return reduced[route.key];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Couldn't find a route with the key " + route.key + ".");
        throw error;
      }
    },
    descriptors: reduced
  };
}
