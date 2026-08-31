// Module ID: 597
// Function ID: 6482
// Name: useNavigationBuilder
// Dependencies: [1, 38, 99, 203, 6, 119, 536, 251, 598, 576, 577, 599, 568, 600, 538, 592, 581, 546, 601, 602, 542, 555, 603, 543, 544, 604, 606, 607, 608, 609, 610, 615, 616, 566, 617, 570]
// Exports: useNavigationBuilder

// Module 597 (useNavigationBuilder)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod536 from "module_536" /* 536 */;
import Screen from "Screen" /* 576 */;
import Group from "Group" /* 577 */;
import keys2 from "keys" /* 598 */;
import module_1 from "module_1" /* 1 */;
import closure_8 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_defineProperty);
let closure_4 = module_1(_objectWithoutProperties);
let closure_5 = module_1(_toConsumableArray);
let closure_6 = _interopRequireWildcard(getIteratorFn);
let closure_7 = module_1(_mod536);
let closure_9 = ["children", "layout", "screenOptions", "screenLayout", "screenListeners", "UNSTABLE_router"];
const PrivateValueStore = keys2.PrivateValueStore;
function isScreen(type) {
  return type.type === Screen.Screen;
}
function isGroup(type) {
  let tmp = type.type === React.Fragment;
  if (!tmp) {
    tmp = type.type === Group.Group;
  }
  return tmp;
}
function isValidKey(str) {
  let tmp = str === undefined;
  if (!tmp) {
    let tmp2 = typeof str === "string";
    if (tmp2) {
      tmp2 = str !== "";
    }
    tmp = tmp2;
  }
  return tmp;
}
function getRouteConfigsFromChildren(arg0, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  const Children = React.Children;
  return Children.toArray(arg0).reduce((arr, props) => {
    if (closure_1_6.isValidElement(props)) {
      if (closure_1_10(props)) {
        if (typeof props.props === "object") {
          if (props.props !== null) {
            if (typeof props.props.name === "string") {
              if (props.props.name !== "") {
                if (props.props.navigationKey !== undefined) {
                  const _Error2 = Error;
                  const _JSON3 = JSON;
                  const _HermesInternal5 = HermesInternal;
                  const error = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(props.props.navigationKey) + ") for the screen '" + props.props.name + "'. It must be a non-empty string or 'undefined'.");
                  throw error;
                }
                const obj = {};
                const items = [callback, props.props.navigationKey];
                obj.keys = items;
                obj.options = table;
                obj.layout = closure_2;
                obj.props = props.props;
                arr.push(obj);
                return arr;
              }
            }
            const _Error3 = Error;
            const _JSON4 = JSON;
            const _HermesInternal6 = HermesInternal;
            const error1 = new Error("Got an invalid name (" + JSON.stringify(props.props.name) + ") for the screen. It must be a non-empty string.");
            throw error1;
          }
        }
        const _Error4 = Error;
        const error2 = new Error("Got an invalid element for screen.");
        throw error2;
      } else if (closure_1_11(props)) {
        if (closure_1_12(props.props.navigationKey)) {
          const push = arr.push;
          const children = props.props.children;
          const navigationKey = props.props.navigationKey;
          if (props.type !== callback(table[10]).Group) {
            let combined = table;
          } else if (table != null) {
            const items1 = [];
            const items2 = [props.props.screenOptions];
            combined = items1.concat(closure_1_5.default(table), items2);
          } else {
            combined = [props.props.screenOptions];
          }
          if (typeof props.props.screenLayout === "function") {
            let screenLayout = props.props.screenLayout;
          } else {
            screenLayout = closure_2;
          }
          push.apply(arr, closure_1_5.default(closure_1_13(children, navigationKey, combined, screenLayout)));
          return arr;
        } else {
          const _Error = Error;
          const _JSON2 = JSON;
          const _HermesInternal4 = HermesInternal;
          const error3 = new Error("Got an invalid 'navigationKey' prop (" + JSON.stringify(props.props.navigationKey) + ") for the group. It must be a non-empty string or 'undefined'.");
          throw error3;
        }
      }
    }
    if (closure_1_6.isValidElement(props)) {
      if (typeof props.type === "string") {
        let name = props.type;
      } else {
        const type = props.type;
        if (type != null) {
          name = type.name;
        }
      }
      let str5 = "";
      if (props.props != null) {
        str5 = "";
        if (typeof props.props === "object") {
          str5 = "";
          if ("name" in props.props) {
            props = props.props;
            str5 = "";
            if (props != null) {
              str5 = "";
              if (props.name) {
                const _HermesInternal2 = HermesInternal;
                str5 = " for the screen '" + props.props.name + "'";
              }
            }
          }
        }
      }
      const _HermesInternal3 = HermesInternal;
      let combined1 = "'" + name + "'" + str5;
    } else if (typeof props === "object") {
      const _JSON = JSON;
      combined1 = JSON.stringify(props);
    } else {
      const _String = String;
      const _HermesInternal = HermesInternal;
      combined1 = "'" + String(props) + "'";
    }
    const error4 = new Error("A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found " + combined1 + "). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.");
    throw error4;
  }, []);
}

export function useNavigationBuilder(StackRouter, id) {
  const _require = StackRouter;
  dependencyMap = _require(599).useRegisterNavigator();
  const context = React.useContext(_require(568).NavigationRouteContext);
  ({ layout: closure_3, screenListeners: closure_4, UNSTABLE_router: closure_5 } = id);
  ({ children, screenOptions, screenLayout } = id);
  React = closure_4.default(id, reduced);
  const arr = callback(children);
  const lazyValue = _require(600).useLazyValue(() => {
    if (closure_6.initialRouteName != null) {
      if (arr.every((props) => props.props.name !== closure_1_6.initialRouteName)) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Couldn't find a screen named '" + closure_6.initialRouteName + "' to use as 'initialRouteName'.");
        throw error;
      }
    }
    const tmp2 = StackRouter(closure_6);
    if (callback2 != null) {
      const _Object = Object;
      return Object.assign({}, tmp2, callback2(tmp2));
    } else {
      return tmp2;
    }
  });
  reduced = arr.reduce((arg0, props) => {
    if (props.props.name in arg0) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '" + props.props.name + "')");
      throw error;
    } else {
      arg0[props.props.name] = props;
      return arg0;
    }
  }, {});
  let mapped = arr.map((props) => props.props.name);
  const reduced1 = mapped.reduce((arg0, arg1) => {
    const keys = reduced[arg1].keys;
    mapped = keys.map((arg0) => {
      let str = "";
      if (arg0 != null) {
        str = arg0;
      }
      return str;
    });
    arg0[arg1] = mapped.join(":");
    return arg0;
  }, {});
  const reduced2 = mapped.reduce((arg0, arg1) => {
    arg0[arg1] = reduced[arg1].props.initialParams;
    return arg0;
  }, {});
  const reduced3 = mapped.reduce((arg0, arg1) => Object.assign(arg0, closure_1_3.default({}, arg1, reduced[arg1].props.getId)), {});
  if (mapped.length) {
    let items = [lazyValue.type];
    callback = React.useCallback((type) => {
      let tmp = type.type === undefined;
      if (!tmp) {
        tmp = type.type === lazyValue.type;
      }
      return tmp;
    }, items);
    let items1 = [callback];
    const callback1 = React.useCallback((stale) => {
      let tmp = stale !== undefined;
      if (tmp) {
        tmp = stale.stale === false;
      }
      if (tmp) {
        tmp = callback(stale);
      }
      return tmp;
    }, items1);
    const context1 = React.useContext(_require(538).NavigationStateContext);
    let state = context1.state;
    ({ getState: closure_16, setState: closure_17, setKey: closure_18, getKey: closure_19, getIsInitial: closure_20 } = context1);
    closure_21 = React.useRef(false);
    const defaultResult = arr.default((arg0) => {
      if (!ref.current) {
        callback4(arg0);
      }
    });
    let items2 = [state, lazyValue, callback];
    const defaultResult1 = context.default(React.useMemo(() => {
      reduced = mapped.reduce((arg0, arg1) => {
        const initialParams = closure_1_9[arg1].props.initialParams;
        state = undefined;
        if (closure_1_2 != null) {
          const params = closure_1_2.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (state == null) {
          let initial;
          if (closure_1_2 != null) {
            const params3 = closure_1_2.params;
            if (params3 != null) {
              initial = params3.initial;
            }
          }
          if (initial !== false) {
            let screen;
            if (closure_1_2 != null) {
              const params4 = closure_1_2.params;
              if (params4 != null) {
                screen = params4.screen;
              }
            }
            if (screen === arg1) {
              const params2 = closure_1_2.params.params;
            }
          }
        }
        if (initialParams !== undefined) {
          const _Object = Object;
          const merged = Object.assign({}, initialParams, params2);
        }
        arg0[arg1] = merged;
        return arg0;
      }, {});
      if (state === undefined) {
        state = undefined;
        if (context != null) {
          let params = context.params;
          if (params != null) {
            state = params.state;
          }
        }
        if (state == null) {
          let screen;
          if (context != null) {
            let params2 = context.params;
            if (params2 != null) {
              screen = params2.screen;
            }
          }
          if (typeof screen === "string") {
            let initial;
            if (context != null) {
              let params3 = context.params;
              if (params3 != null) {
                initial = params3.initial;
              }
            }
          }
          let obj = { routeNames: mapped, routeParamList: reduced, routeGetIdList: reduced3 };
          const items = [lazyValue.getInitialState(obj), true];
          return items;
        }
      }
      let state1;
      if (context != null) {
        let params4 = context.params;
        if (params4 != null) {
          state1 = params4.state;
        }
      }
      if (state1 != null) {
        state = context.params.state;
      } else {
        let screen1;
        if (context != null) {
          const params5 = context.params;
          if (params5 != null) {
            screen1 = params5.screen;
          }
        }
        if (typeof screen1 === "string") {
          let initial1;
          if (context != null) {
            const params6 = context.params;
            if (params6 != null) {
              initial1 = params6.initial;
            }
          }
          if (initial1 !== false) {
            obj = { index: 0 };
            obj = { name: context.params.screen, params: context.params.params, path: context.params.path };
            const items1 = [obj];
            obj.routes = items1;
            state = obj;
          }
        }
      }
      const items2 = [lazyValue.getRehydratedState(state, { routeNames: mapped, routeParamList: reduced, routeGetIdList: reduced3 }), false];
      return items2;
    }, items2), 2);
    let first = defaultResult1[0];
    const ref = React.useRef(reduced1);
    const effect = React.useEffect(() => {
      ref.current = reduced1;
    });
    const current = ref.current;
    if (callback1(state)) {
      first = state;
    }
    let rehydratedState = first;
    rehydratedState = first;
    if (!_require(592).isArrayEqual(first.routeNames, mapped)) {
      let obj = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
      let _Object = Object;
      let keys = Object.keys(reduced1);
      obj.routeKeyChanges = keys.filter((arg0) => {
        let tmp = arg0 in current;
        if (tmp) {
          tmp = reduced1[arg0] !== current[arg0];
        }
        return tmp;
      });
      const stateForRouteNamesChange = lazyValue.getStateForRouteNamesChange(first, obj);
      rehydratedState = stateForRouteNamesChange;
      rehydratedState = stateForRouteNamesChange;
    } else {
      rehydratedState = first;
    }
    let params;
    if (context != null) {
      params = context.params;
    }
    const ref1 = React.useRef(params);
    let params1;
    if (context != null) {
      params1 = context.params;
    }
    const items3 = [params1];
    const effect1 = React.useEffect(() => {
      let params;
      if (context != null) {
        params = context.params;
      }
      ref1.current = params;
    }, items3);
    let tmp44 = rehydratedState;
    if (context != null) {
      tmp44 = rehydratedState;
      if (context.params) {
        const current2 = ref1.current;
        if (typeof context.params.state === "object") {
          if (context.params.state != null) {
            if (context.params !== current2) {
              const CommonActions2 = _require(546).CommonActions;
              let resetResult = CommonActions2.reset(context.params.state);
            }
            let stateForAction = null;
            if (resetResult) {
              obj = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
              stateForAction = lazyValue.getStateForAction(rehydratedState, resetResult, obj);
            }
            if (stateForAction !== null) {
              let obj1 = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
              rehydratedState = lazyValue.getRehydratedState(stateForAction, obj1);
            }
            tmp44 = rehydratedState;
          }
        }
        if (typeof context.params.screen === "string") {
          const CommonActions = _require(546).CommonActions;
          const obj2 = { name: context.params.screen, params: context.params.params, path: context.params.path, merge: context.params.merge, pop: context.params.pop };
          resetResult = CommonActions.navigate(obj2);
        }
      }
    }
    closure_29 = first !== tmp44;
    const scheduleUpdate = _require(601).useScheduleUpdate(() => {
      if (closure_29) {
        defaultResult(rehydratedState);
      }
    });
    rehydratedState = tmp44;
    const effect2 = React.useEffect(() => {
      closure_21.current = false;
      callback5(closure_1);
      if (!callback6()) {
        defaultResult(rehydratedState);
      }
      return () => {
        if (closure_1_16() !== undefined) {
          if (closure_1_19() === closure_1_1) {
            closure_1_17(undefined);
            closure_1_21.current = true;
          }
        }
      };
    }, []);
    const ref2 = React.useRef(tmp44);
    ref2.current = tmp44;
    const clientLayoutEffect = _require(602).useClientLayoutEffect(() => {
      ref2.current = null;
    });
    const defaultResult2 = arr.default(() => {
      let tmp = callback3();
      if (!callback1(tmp)) {
        tmp = first;
      }
      return StackRouter(542).deepFreeze(tmp);
    });
    const eventEmitter = _require(555).useEventEmitter((target) => {
      closure_0 = target;
      const items = [];
      const routes = rehydratedState.routes;
      if (target.target) {
        let found = routes.find((key) => key.key === target.target);
        closure_1 = found;
        let tmp2 = found;
        if (found != null) {
          tmp2 = found;
          if (found.name) {
            items.push(found.name);
            tmp2 = found;
          }
        }
      } else {
        closure_1 = routes[rehydratedState.index];
        const push = items.push;
        let _Object = Object;
        let keys = Object.keys(reduced);
        push.apply(items, closure_1_5.default(keys.filter((arg0) => {
          let name;
          if (name != null) {
            name = name.name;
          }
          return name === arg0;
        })));
      }
      if (tmp2 != null) {
        const navigation = descriptors[tmp2.key].navigation;
        const items1 = [];
        const concat = items1.concat;
        const items2 = [closure_4];
        const combined = items2.concat(closure_1_5.default(items.map((arg0) => closure_1_9[arg0].props.listeners)));
        const found1 = concat.apply(items1, closure_1_5.default(combined.map((fn) => {
          let tmp = fn;
          if (typeof fn === "function") {
            const obj = { route: closure_1, navigation };
            tmp = fn(obj);
          }
          closure_0 = tmp;
          mapped = undefined;
          if (tmp) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const found = keys.filter((arg0) => arg0 === type.type);
            mapped = found.map((arg0) => {
              let tmp;
              if (type != null) {
                tmp = type[arg0];
              }
              return tmp;
            });
          }
          return mapped;
        }))).filter((fromResult, arg1, arr) => {
          let tmp = fromResult;
          if (fromResult) {
            tmp = arr.lastIndexOf(fromResult) === arg1;
          }
          return tmp;
        });
        const item = found1.forEach((arg0) => {
          let tmp;
          if (arg0 != null) {
            tmp = arg0(closure_0);
          }
          return tmp;
        });
      }
    });
    const obj3 = { state: tmp44, emitter: eventEmitter };
    const focusEvents = _require(603).useFocusEvents(obj3);
    const items4 = [eventEmitter, tmp44];
    const effect3 = React.useEffect(() => {
      eventEmitter.emit({ type: "state", data: { state: rehydratedState } });
    }, items4);
    const childListeners = _require(543).useChildListeners();
    const listeners = childListeners.listeners;
    const keyedChildListeners = _require(544).useKeyedChildListeners();
    const keyedListeners = keyedChildListeners.keyedListeners;
    const obj4 = { router: lazyValue, getState: defaultResult2, setState: defaultResult };
    let key;
    if (context != null) {
      key = context.key;
    }
    obj4.key = key;
    obj4.actionListeners = listeners.action;
    obj4.beforeRemoveListeners = keyedListeners.beforeRemove;
    const obj5 = { routeNames: mapped, routeParamList: reduced2, routeGetIdList: reduced3 };
    obj4.routerConfigOptions = obj5;
    obj4.emitter = eventEmitter;
    const onAction = _require(604).useOnAction(obj4);
    const obj6 = { router: lazyValue };
    let key1;
    if (context != null) {
      key1 = context.key;
    }
    obj6.key = key1;
    obj6.getState = defaultResult2;
    obj6.setState = defaultResult;
    const onRouteFocus = _require(606).useOnRouteFocus(obj6);
    const obj7 = { id: id.id, onAction, getState: defaultResult2, emitter: eventEmitter, router: lazyValue, stateRef: ref2 };
    const navigationHelpers = _require(607).useNavigationHelpers(obj7);
    const obj8 = { navigation: navigationHelpers, focusedListeners: listeners.focus };
    const focusedListenersChildrenAdapter = _require(608).useFocusedListenersChildrenAdapter(obj8);
    const obj9 = { getState: defaultResult2, getStateListeners: keyedListeners.getState };
    const onGetState = _require(609).useOnGetState(obj9);
    const obj10 = { state: tmp44, screens: reduced, navigation: navigationHelpers, screenOptions, screenLayout, onAction, getState: defaultResult2, setState: defaultResult, onRouteFocus, addListener: childListeners.addListener, addKeyedListener: keyedChildListeners.addKeyedListener, router: lazyValue, emitter: eventEmitter };
    let descriptors = _require(610).useDescriptors(obj10);
    descriptors = descriptors.descriptors;
    const obj11 = { state: tmp44, navigation: navigationHelpers, descriptors };
    const currentRender = _require(615).useCurrentRender(obj11);
    const obj12 = {
      state: tmp44,
      navigation: navigationHelpers,
      describe: descriptors.describe,
      descriptors,
      NavigationContent: _require(616).useComponent((children) => {
          let tmp = children;
          if (callback != null) {
            let obj = { state: rehydratedState, descriptors, navigation: navigationHelpers, children };
            tmp = callback(obj);
          }
          obj = { value: navigationHelpers };
          obj = { state: rehydratedState };
          const obj1 = { children: tmp };
          obj.children = lazyValue.jsx(StackRouter(570).PreventRemoveProvider, { children: tmp });
          obj.children = lazyValue.jsx(StackRouter(617).NavigationStateListenerProvider, { state: rehydratedState });
          return lazyValue.jsx(StackRouter(566).NavigationHelpersContext.Provider, { state: rehydratedState });
        })
    };
    return obj12;
  } else {
    let _Error = Error;
    let error = new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
    throw error;
  }
}
