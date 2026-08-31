// Module ID: 611
// Function ID: 6615
// Name: useNavigationCache
// Dependencies: [1, 99, 203, 119, 557, 546]
// Exports: useNavigationCache

// Module 611 (useNavigationCache)
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_defineProperty);
let closure_3 = module_1(_objectWithoutProperties);
let closure_4 = _interopRequireWildcard(getIteratorFn);
let closure_5 = ["emit"];

export function useNavigationCache(getState) {
  getState = getState.getState;
  const navigation = getState.navigation;
  const setOptions = getState.setOptions;
  const router = getState.router;
  const emitter = getState.emitter;
  const stackRef = emitter.useContext(getState(navigation[4]).NavigationBuilderContext).stackRef;
  const items = [navigation, router.actionCreators];
  const memo = emitter.useMemo(() => {
    const defaultResult = router.default(dispatch, memo);
    getState = defaultResult;
    dispatch = function dispatch() {
      const error = new Error("Actions cannot be dispatched from a placeholder screen.");
      throw error;
    };
    const keys = Object.keys(Object.assign({}, router.actionCreators, getState(navigation[5]).CommonActions));
    return Object.assign({}, defaultResult, keys.reduce((arg0, arg1) => {
      arg0[arg1] = dispatch;
      return arg0;
    }, {}), {
      addListener() {
        return () => {

        };
      },
      removeListener() {

      },
      dispatch,
      getParent(arg0) {
        if (arg0 !== undefined) {
          if (arg0 === defaultResult.getId()) {
            return closure_1_5;
          }
        }
        return defaultResult.getParent(arg0);
      },
      setOptions() {
        const error = new Error("Options cannot be set from a placeholder screen.");
        throw error;
      },
      isFocused() {
        return false;
      }
    });
  }, items);
  const items1 = [memo, getState, navigation, setOptions, emitter];
  const memo1 = emitter.useMemo(() => ({ current: {} }), items1);
  const routes = getState.state.routes;
  memo1.current = routes.reduce((arg0, key) => {
    closure_0 = arg0;
    closure_1 = key;
    if (memo1.current[key.key]) {
      arg0[key.key] = tmp;
    } else {
      function dispatch(fn) {
        let tmp = fn;
        if (typeof fn === "function") {
          tmp = fn(dependencyMap());
        }
        if (tmp != null) {
          const _Object = Object;
          const obj = { source: key.key };
          key.dispatch(Object.assign(obj, tmp));
        }
      }
      function withStack(arg0) {
        arg0();
      }
      let _Object = Object;
      const merged = Object.assign({}, withStack.actionCreators, getState(navigation[5]).CommonActions);
      const _Object2 = Object;
      const keys = Object.keys(merged);
      const _Object3 = Object;
      const reduced = keys.reduce((arg0, arg1) => {
        closure_0 = arg1;
        arg0[arg1] = () => {
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          return closure_1_3(() => closure_2_2(closure_2_4[array].apply(closure_2_4, array)));
        };
        return arg0;
      }, {});
      let obj = {
        dispatch(arg0) {
            closure_0 = arg0;
            return withStack(() => closure_1_2(closure_0));
          },
        getParent(arg0) {
            if (arg0 !== undefined) {
              if (arg0 === closure_1_5.getId()) {
                return dependencyMap[key.key];
              }
            }
            return closure_1_5.getParent(arg0);
          },
        setOptions(arg0) {
            closure_0 = arg0;
            dispatch((arg0) => Object.assign({}, arg0, setOptions.default({}, closure_1_1.key, Object.assign({}, arg0[closure_1_1.key], closure_0))));
          },
        isFocused() {
            const state = closure_1_5.getState();
            if (state.routes[state.index].key !== key.key) {
              return false;
            } else {
              let flag = true;
              if (key) {
                flag = key.isFocused();
              }
              return flag;
            }
          }
      };
      const _Object4 = Object;
      arg0[key.key] = Object.assign({}, memo, reduced, merged.create(key.key), obj);
    }
    return arg0;
  }, {});
  return { base: memo, navigations: memo1.current };
}
