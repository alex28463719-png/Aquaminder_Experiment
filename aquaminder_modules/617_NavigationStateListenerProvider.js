// Module ID: 617
// Function ID: 6676
// Name: NavigationStateListenerProvider
// Dependencies: [1, 119, 536, 251, 618, 602]
// Exports: NavigationStateListenerProvider, useNavigationState

// Module 617 (NavigationStateListenerProvider)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _mod536 from "module_536" /* 536 */;
import is from "is" /* 618 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_3 = module_1(_mod536);
const context = getIteratorFn.createContext(undefined);

export function NavigationStateListenerProvider(children) {
  const state = children.state;
  dependencyMap = getIteratorFn.useRef([]);
  const defaultResult = defaultResult1.default(() => state);
  getIteratorFn = defaultResult;
  defaultResult1 = defaultResult1.default((arg0) => {
    closure_0 = arg0;
    let current = ref.current;
    current.push(arg0);
    return () => {
      const current = closure_1_1.current;
      closure_1_1.current = current.filter((arg0) => arg0 !== closure_1_0);
    };
  });
  const items = [state];
  const clientLayoutEffect = state(602).useClientLayoutEffect(() => {
    const current = ref.current;
    const item = current.forEach((arg0) => arg0());
  }, items);
  const items1 = [defaultResult, defaultResult1];
  return <redux.Provider value={getIteratorFn.useMemo(() => ({ getState: closure_2, subscribe: defaultResult1 }), items1)}>{arg0.children}</redux.Provider>;
}
export function useNavigationState(arg0) {
  const store = getIteratorFn.useContext(closure_5);
  if (store == null) {
    const _Error = Error;
    const error = new Error("Couldn't get the navigation state. Is your component inside a navigator?");
    throw error;
  } else {
    return is.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getState, arg0);
  }
}
