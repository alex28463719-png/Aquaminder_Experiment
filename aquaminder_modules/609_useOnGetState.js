// Module ID: 609
// Function ID: 6592
// Name: useOnGetState
// Dependencies: [119, 557, 568, 592]
// Exports: useOnGetState

// Module 609 (useOnGetState)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useOnGetState(getState) {
  getState = getState.getState;
  const getStateListeners = getState.getStateListeners;
  addKeyedListener = addKeyedListener.useContext(getState(getStateListeners[1]).NavigationBuilderContext).addKeyedListener;
  const context = addKeyedListener.useContext(getState(getStateListeners[2]).NavigationRouteContext);
  let str = "root";
  if (context) {
    str = context.key;
  }
  const items = [getState, getStateListeners];
  const callback = addKeyedListener.useCallback(() => {
    const tmp = getState();
    const routes = tmp.routes;
    const mapped = routes.map((state) => {
      let obj = closure_1_1[state.key];
      let callResult;
      if (obj != null) {
        callResult = obj.call(closure_1_1);
      }
      if (state.state === callResult) {
        return state;
      } else {
        const _Object = Object;
        obj = { state: callResult };
        return Object.assign({}, state, obj);
      }
    });
    if (getState(getStateListeners[3]).isArrayEqual(tmp.routes, mapped)) {
      return tmp;
    } else {
      let _Object = Object;
      let obj = { routes: mapped };
      return Object.assign({}, tmp, obj);
    }
  }, items);
  const items1 = [addKeyedListener, callback, str];
  const effect = addKeyedListener.useEffect(() => {
    let tmp;
    if (addKeyedListener != null) {
      tmp = addKeyedListener("getState", str, callback);
    }
    return tmp;
  }, items1);
}
