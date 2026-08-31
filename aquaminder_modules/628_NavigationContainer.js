// Module ID: 628
// Function ID: 6735
// Name: NavigationContainer
// Dependencies: [1, 38, 203, 119, 2, 536, 251, 532, 534, 629, 630, 631, 634, 627, 635, 626]

// Module 628 (NavigationContainer)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import _mod536 from "module_536" /* 536 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "get registerCallableModule" /* 2 */;
import closure_7 from "jsxProd" /* 251 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_6 = module_1(_mod536);
let closure_8 = ["direction", "theme", "linking", "fallback", "documentTitle", "onReady", "onStateChange"];
let weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = getIteratorFn.forwardRef(function NavigationContainerInner(direction) {
  direction = direction.direction;
  if (direction === undefined) {
    const I18nManager = first.I18nManager;
    let str = "ltr";
    if (I18nManager.getConstants().isRTL) {
      str = "rtl";
    }
    direction = str;
  }
  let DefaultTheme = direction.theme;
  if (DefaultTheme === undefined) {
    DefaultTheme = linking(532).DefaultTheme;
  }
  linking = direction.linking;
  const fallback = direction.fallback;
  let tmp4 = null;
  if (fallback !== undefined) {
    tmp4 = fallback;
  }
  ({ onReady: dependencyMap, onStateChange: closure_2 } = direction);
  const defaultResult = flag.default(direction, closure_8);
  flag = false;
  if (linking) {
    flag = linking.enabled !== false;
  }
  if (linking != null) {
    if (linking.config) {
      linking(534).validatePathConfig(linking.config);
    }
  }
  ref = ref.useRef(null);
  const backButton = linking(629).useBackButton(ref);
  const documentTitle = linking(630).useDocumentTitle(ref, direction.documentTitle);
  const defaultResult1 = closure_2.default(ref.useState(), 2);
  first = defaultResult1[0];
  closure_6 = tmp14;
  let obj = { enabled: flag, prefixes: [] };
  const items = [linking];
  const items1 = [first, defaultResult1[1]];
  const memo = ref.useMemo(() => ({ options: linking }), items);
  const memo1 = ref.useMemo(() => ({ lastUnhandledLink: first, setLastUnhandledLink: closure_6 }), items1);
  const defaultResult2 = closure_6.default(() => {
    const current = ref.current;
    let path;
    if (current != null) {
      const currentRoute = current.getCurrentRoute();
      if (currentRoute != null) {
        path = currentRoute.path;
      }
    }
    callback3((arg0) => arg0 === path ? undefined : arg0);
    if (callback != null) {
      callback();
    }
  });
  const effect = ref.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = { enabled: closure_1_3 };
            let prefixes;
            if (closure_1_0 != null) {
              prefixes = closure_1_0.prefixes;
            }
            if (prefixes == null) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (closure_1_0 != null) {
              getStateFromPath = closure_1_0.getStateFromPath;
            }
            if (getStateFromPath == null) {
              getStateFromPath = linking(closure_2_1[8]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (closure_1_0 != null) {
              getPathFromState = closure_1_0.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = linking(closure_2_1[8]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (closure_1_0 != null) {
              getActionFromState = closure_1_0.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = linking(closure_2_1[8]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return Object.assign({}, closure_1_0, obj);
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(ref.current, obj);
    }
  });
  const defaultResult4 = closure_2.default(linking(634).useThenable(linking(631).useLinking(ref, Object.assign(obj, linking), defaultResult1[1]).getInitialState), 2);
  let initialState = defaultResult4[1];
  const imperativeHandle = ref.useImperativeHandle(arg1, () => ref.current);
  const jsx = React.jsx;
  const Provider = linking(627).LocaleDirContext.Provider;
  obj = { value: direction };
  const jsx2 = React.jsx;
  if (tmp22) {
    obj = { value: memo1 };
    const obj1 = { value: memo };
    const obj2 = { theme: DefaultTheme, onReady: defaultResult2, onStateChange: defaultResult3 };
    if (defaultResult.initialState != null) {
      initialState = defaultResult.initialState;
    }
    obj2.initialState = initialState;
    obj2.ref = ref;
    obj1.children = React.jsx(tmp23(534).BaseNavigationContainer, Object.assign({}, defaultResult, obj2));
    obj.children = React.jsx(tmp23(626).LinkingContext.Provider, { value: memo });
    obj.children = jsx2(tmp23(635).UnhandledLinkingContext.Provider, obj);
    return <Provider value={memo1} />;
  } else {
    const obj3 = { value: DefaultTheme, children: tmp4 };
    obj.children = jsx2(tmp23(534).ThemeProvider, obj3);
    return <Provider {...obj} />;
  }
  defaultResult3 = closure_6.default((arg0) => {
    const current = ref.current;
    let path;
    if (current != null) {
      const currentRoute = current.getCurrentRoute();
      if (currentRoute != null) {
        path = currentRoute.path;
      }
    }
    callback3((arg0) => arg0 === path ? undefined : arg0);
    if (callback2 != null) {
      callback2(arg0);
    }
  });
  tmp22 = defaultResult.initialState != null || !flag || defaultResult4[0];
});
