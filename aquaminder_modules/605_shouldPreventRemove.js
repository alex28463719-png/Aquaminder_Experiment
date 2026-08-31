// Module ID: 605
// Function ID: 6559
// Name: shouldPreventRemove
// Dependencies: [1, 99, 119, 557, 568]
// Exports: useOnPreventRemove

// Module 605 (shouldPreventRemove)
import _defineProperty from "_defineProperty" /* 99 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_defineProperty);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_4 = Symbol("VISITED_ROUTE_KEYS");
function shouldPreventRemove(emitter, beforeRemoveListeners, routes, routes2, target) {
  closure_0 = routes2.map((key) => key.key);
  const found = routes.filter((key) => !closure_0.includes(key.key));
  const reversed = found.reverse();
  let set = target[closure_4];
  if (set == null) {
    const _Set = Set;
    set = new Set();
  }
  const merged = Object.assign({}, target, closure_2.default({}, closure_4, set));
  const iter = reversed[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp8 = nextResult;
    let tmp9 = set;
    if (obj2.has(nextResult.key)) {
      continue;
    } else {
      let tmp10 = beforeRemoveListeners;
      let tmp11 = nextResult;
      let tmp12 = beforeRemoveListeners[tmp8.key];
      let obj3 = tmp12;
      let callResult;
      if (tmp12 != null) {
        let tmp14 = tmp12;
        let tmp15 = beforeRemoveListeners;
        let tmp16 = merged;
        callResult = obj3.call(beforeRemoveListeners, merged);
      }
      if (callResult) {
        iter.return();
        return true;
      } else {
        let tmp17 = set;
        let tmp18 = nextResult;
        let addResult = obj2.add(tmp8.key);
        let tmp20 = emitter;
        let obj = { type: "beforeRemove", target: tmp8.key };
        obj = {};
        let tmp21 = merged;
        obj.action = merged;
        obj.data = obj;
        obj.canPreventDefault = true;
        if (emitter.emit(obj).defaultPrevented) {
          iter.return();
          return true;
        }
      }
    }
    continue;
  }
  return false;
}

export function useOnPreventRemove(getState) {
  getState = getState.getState;
  const emitter = getState.emitter;
  const beforeRemoveListeners = getState.beforeRemoveListeners;
  addKeyedListener = addKeyedListener.useContext(getState(emitter[3]).NavigationBuilderContext).addKeyedListener;
  const context = addKeyedListener.useContext(getState(emitter[4]).NavigationRouteContext);
  let key;
  if (context != null) {
    key = context.key;
  }
  const items = [addKeyedListener, beforeRemoveListeners, emitter, getState, key];
  const effect = addKeyedListener.useEffect(() => {
    if (key) {
      let tmp3;
      if (addKeyedListener != null) {
        tmp3 = addKeyedListener("beforeRemove", key, (arg0) => closure_2_5(closure_1_1, closure_1_2, closure_1_0().routes, [], arg0));
      }
      return tmp3;
    }
  }, items);
}
export { shouldPreventRemove };
