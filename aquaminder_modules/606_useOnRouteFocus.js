// Module ID: 606
// Function ID: 6568
// Name: useOnRouteFocus
// Dependencies: [119, 557]
// Exports: useOnRouteFocus

// Module 606 (useOnRouteFocus)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  const onRouteFocus = key.useContext(router(getState[1]).NavigationBuilderContext).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return key.useCallback((arg0) => {
    const tmp = getState();
    const stateForRouteFocus = router.getStateForRouteFocus(tmp, arg0);
    if (stateForRouteFocus !== tmp) {
      setState(stateForRouteFocus);
    }
    if (onRouteFocus !== undefined) {
      if (key !== undefined) {
        onRouteFocus(key);
      }
    }
  }, items);
}
