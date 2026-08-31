// Module ID: 604
// Function ID: 6552
// Name: useOnAction
// Dependencies: [119, 557, 560, 605]
// Exports: useOnAction

// Module 604 (useOnAction)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useOnAction(router) {
  router = router.router;
  const getState = router.getState;
  const setState = router.setState;
  const key = router.key;
  const actionListeners = router.actionListeners;
  const beforeRemoveListeners = router.beforeRemoveListeners;
  const routerConfigOptions = router.routerConfigOptions;
  const emitter = router.emitter;
  const context = setState.useContext(router(getState[1]).NavigationBuilderContext);
  const onAction = context.onAction;
  const onRouteFocus = context.onRouteFocus;
  const addListener = context.addListener;
  const onDispatchAction = context.onDispatchAction;
  const context1 = setState.useContext(router(getState[2]).DeprecatedNavigationInChildContext);
  closure_13 = setState.useRef(routerConfigOptions);
  const effect = setState.useEffect(() => {
    closure_13.current = routerConfigOptions;
  });
  const items = [actionListeners, beforeRemoveListeners, emitter, getState, context1, key, onAction, onDispatchAction, onRouteFocus, router, setState];
  const callback = setState.useCallback((target) => {
    if (arguments.length > 1) {
      if (arguments[1] !== undefined) {
        let set = arguments[1];
      }
      const tmp2 = getState();
      if (set.has(tmp2.key)) {
        return false;
      } else {
        set.add(tmp2.key);
        if (typeof target.target !== "string") {
          const stateForAction = router.getStateForAction(tmp2, target, ref.current);
          let tmp9 = stateForAction;
          if (stateForAction === null) {
            tmp9 = stateForAction;
            if (target.target === tmp2.key) {
              tmp9 = tmp2;
            }
          }
          if (tmp9 !== null) {
            onDispatchAction(target, tmp2 === tmp9);
            if (tmp2 !== tmp9) {
              if (router(getState[3]).shouldPreventRemove(emitter, beforeRemoveListeners, tmp2.routes, tmp9.routes, target)) {
                return true;
              } else {
                setState(tmp9);
              }
            }
            if (onRouteFocus !== undefined) {
              if (router.shouldActionChangeFocus(target)) {
                if (key !== undefined) {
                  onRouteFocus(key);
                }
              }
            }
            return true;
          }
        }
        if (onAction !== undefined) {
          if (onAction(target, set)) {
            return true;
          }
        }
        if (typeof target.target !== "string") {
          return false;
        }
        let diff = actionListeners.length - 1;
        if (diff >= 0) {
          while (!actionListeners[diff](target, set)) {
            diff = diff - 1;
          }
          return true;
        }
      }
    }
    set = new Set();
  }, items);
  const onPreventRemove = router(getState[3]).useOnPreventRemove({ getState, emitter, beforeRemoveListeners });
  const items1 = [addListener, callback];
  const effect1 = setState.useEffect(() => {
    let tmp;
    if (addListener != null) {
      tmp = addListener("action", callback);
    }
    return tmp;
  }, items1);
  return callback;
}
