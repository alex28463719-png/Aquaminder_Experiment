// Module ID: 535
// Function ID: 5961
// Name: BaseNavigationContainer
// Dependencies: [1, 203, 119, 536, 251, 538, 539, 541, 543, 544, 545, 546, 554, 555, 556, 540, 558, 557, 559, 560, 561, 562]

// Module 535 (BaseNavigationContainer)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod536 from "module_536" /* 536 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "jsxProd" /* 251 */;

let closure_2 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_4 = module_1(_mod536);
let closure_6 = ["key", "routeNames"];
function getPartialState(routes) {
  if (routes !== undefined) {
    ({ key, routeNames } = routes);
    let _Object = Object;
    let obj = { stale: true };
    routes = routes.routes;
    obj.routes = routes.map((state) => {
      if (state.state === undefined) {
        return state;
      } else {
        const _Object = Object;
        const obj = { state: closure_1_7(state.state) };
        return Object.assign({}, state, obj);
      }
    });
    return Object.assign({}, closure_2.default(routes, closure_6), obj);
  }
}

export const BaseNavigationContainer = getIteratorFn.forwardRef(function BaseNavigationContainer(onReady) {
  ({ initialState: require, onStateChange } = onReady);
  onReady = onReady.onReady;
  ({ onUnhandledAction, navigationInChildEnabled } = onReady);
  let flag = false;
  if (navigationInChildEnabled !== undefined) {
    flag = navigationInChildEnabled;
  }
  ({ theme, children } = onReady);
  const context = state.useContext(require(onStateChange[5]).NavigationStateContext);
  if (!context.isDefault) {
    if (!require(onStateChange[6]).useNavigationIndependentTree()) {
      const _Error = Error;
      let error = new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, wrap the container in 'NavigationIndependentTree' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
      throw error;
    }
  }
  const syncState = require(onStateChange[7]).useSyncState(() => {
    let tmp2;
    if (closure_0 != null) {
      tmp2 = closure_0;
    }
    return flushUpdates(tmp2);
  });
  state = syncState.state;
  let getState = syncState.getState;
  const setState = syncState.setState;
  const scheduleUpdate = syncState.scheduleUpdate;
  const flushUpdates = syncState.flushUpdates;
  closure_8 = state.useRef(true);
  closure_9 = state.useRef(undefined);
  const callback = state.useCallback(() => ref2.current, []);
  const callback1 = state.useCallback((current) => {
    closure_9.current = current;
  }, []);
  const childListeners = require(onStateChange[8]).useChildListeners();
  ({ listeners: closure_12, addListener } = childListeners);
  const keyedChildListeners = require(onStateChange[9]).useKeyedChildListeners();
  ({ keyedListeners: closure_14, addKeyedListener } = keyedChildListeners);
  const defaultResult = getState.default((arg0) => {
    closure_0 = arg0;
    if (closure_12.focus[0] == null) {
      const _console = console;
      console.error(closure_1_0(onStateChange[10]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = closure_12.focus;
      focus[0]((dispatch) => dispatch.dispatch(closure_0));
    }
  });
  const defaultResult1 = getState.default(() => {
    if (closure_12.focus[0] == null) {
      return false;
    } else {
      const focus = closure_12.focus;
      const tmp2 = focus[0]((canGoBack) => canGoBack.canGoBack());
      if (tmp2.handled) {
        return tmp2.result;
      } else {
        return false;
      }
    }
  });
  const defaultResult2 = getState.default((key) => {
    closure_0 = key;
    key = undefined;
    if (key != null) {
      key = key.key;
    }
    if (key == null) {
      let key1;
      if (closure_14.getState.root != null) {
        getState = closure_14.getState;
        key1 = getState.root().key;
      }
      key = key1;
    }
    if (key == null) {
      const _console = console;
      console.error(closure_1_0(onStateChange[10]).NOT_INITIALIZED_ERROR);
    } else {
      const focus = closure_12.focus;
      focus[0]((dispatch) => {
        const CommonActions = closure_2_0(onStateChange[11]).CommonActions;
        return dispatch.dispatch(Object.assign({}, CommonActions.reset(closure_0), { target: key }));
      });
    }
  });
  const defaultResult3 = getState.default(() => {
    let rootResult;
    if (closure_14.getState.root != null) {
      getState = closure_14.getState;
      rootResult = getState.root();
    }
    return rootResult;
  });
  const defaultResult4 = getState.default(() => {
    const tmp = defaultResult3();
    if (tmp != null) {
      return closure_1_0(onStateChange[12]).findFocusedRoute(tmp);
    }
  });
  const defaultResult5 = getState.default(() => closure_12.focus[0] != null);
  const eventEmitter = require(onStateChange[13]).useEventEmitter();
  const optionsGetters = require(onStateChange[14]).useOptionsGetters({});
  const addOptionsGetter = optionsGetters.addOptionsGetter;
  const getCurrentOptions = optionsGetters.getCurrentOptions;
  const items = [defaultResult1, defaultResult, eventEmitter, getCurrentOptions, defaultResult4, defaultResult3, getState, defaultResult5, defaultResult2];
  const memo = state.useMemo(() => {
    const keys = Object.keys(closure_1_0(onStateChange[11]).CommonActions);
    const reduced = keys.reduce((arg0, arg1) => {
      closure_0 = arg1;
      arg0[arg1] = () => closure_2_16(closure_3_0(onStateChange[11]).CommonActions[closure_0](...arguments));
      return arg0;
    }, {});
    return Object.assign({}, reduced, eventEmitter.create("root"), {
      dispatch: closure_16,
      resetRoot: defaultResult2,
      isFocused() {
        return true;
      },
      canGoBack: defaultResult1,
      getParent() {

      },
      getState,
      getRootState: defaultResult3,
      getCurrentRoute: defaultResult4,
      getCurrentOptions,
      isReady: defaultResult5,
      setOptions() {
        const error = new Error("Cannot call setOptions outside a screen");
        throw error;
      }
    });
  }, items);
  const items1 = [memo];
  const imperativeHandle = state.useImperativeHandle(arg1, () => memo, items1);
  const defaultResult6 = getState.default((action, noop) => {
    eventEmitter.emit({ type: "__unsafe_action__", data: { action, noop, stack: ref4.current } });
  });
  closure_27 = state.useRef(undefined);
  const defaultResult7 = getState.default((current) => {
    if (ref3.current !== current) {
      ref3.current = current;
      let obj = { type: "options" };
      obj = { options: current };
      obj.data = obj;
      eventEmitter.emit(obj);
    }
  });
  closure_29 = state.useRef(undefined);
  const items2 = [addListener, addKeyedListener, defaultResult6, defaultResult7, scheduleUpdate, flushUpdates];
  const memo1 = state.useMemo(() => ({ addListener, addKeyedListener, onDispatchAction: defaultResult6, onOptionsChange: defaultResult7, scheduleUpdate, flushUpdates, stackRef: closure_29 }), items2);
  closure_30 = state.useRef(true);
  const callback2 = state.useCallback(() => ref5.current, []);
  const items3 = [state, getState, setState, callback, callback1, callback2, addOptionsGetter];
  const memo2 = state.useMemo(() => ({ state, getState, setState, getKey: callback, setKey: callback1, getIsInitial: callback2, addOptionsGetter }), items3);
  closure_32 = state.useRef(onReady);
  closure_33 = state.useRef(onStateChange);
  const effect = state.useEffect(() => {
    closure_30.current = false;
    closure_33.current = onStateChange;
    closure_32.current = onReady;
  });
  closure_34 = state.useRef(false);
  const items4 = [state, defaultResult5, eventEmitter];
  const effect1 = state.useEffect(() => {
    if (!ref8.current) {
      if (defaultResult5()) {
        ref8.current = true;
        if (ref6.current != null) {
          ref6.current();
        }
        const obj = { type: "ready" };
        eventEmitter.emit(obj);
      }
    }
  }, items4);
  const items5 = [defaultResult3, eventEmitter, state];
  const effect2 = state.useEffect(() => {
    eventEmitter.emit({ type: "state", data: { state } });
    if (!ref.current) {
      if (ref7.current) {
        ref7.current(tmp);
      }
    }
    ref.current = false;
  }, items5);
  let defaultResult8 = getState.default((arg0) => {

  });
  let obj = { value: false };
  obj = { value: memo };
  obj = { value: memo1 };
  const obj1 = { value: memo2 };
  const obj2 = {};
  if (onUnhandledAction != null) {
    defaultResult8 = onUnhandledAction;
  }
  obj2.value = defaultResult8;
  const obj3 = { value: flag };
  const obj4 = { children: setState.jsx(require(onStateChange[21]).ThemeProvider, { value: theme, children }) };
  obj3.children = setState.jsx(require(onStateChange[20]).EnsureSingleNavigator, { children: setState.jsx(require(onStateChange[21]).ThemeProvider, { value: theme, children }) });
  obj2.children = setState.jsx(require(onStateChange[19]).DeprecatedNavigationInChildContext.Provider, { value: flag });
  obj1.children = setState.jsx(require(onStateChange[18]).UnhandledActionContext.Provider, {});
  obj.children = setState.jsx(require(onStateChange[5]).NavigationStateContext.Provider, { value: memo2 });
  obj.children = setState.jsx(require(onStateChange[17]).NavigationBuilderContext.Provider, { value: memo1 });
  obj.children = setState.jsx(require(onStateChange[16]).NavigationContainerRefContext.Provider, { value: memo1 });
  return setState.jsx(require(onStateChange[15]).NavigationIndependentTreeContext.Provider, { value: memo1 });
});
