// Module ID: 935
// Function ID: 9834
// Name: useDismissedRouteError
// Dependencies: [1, 38, 119]
// Exports: useDismissedRouteError

// Module 935 (useDismissedRouteError)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = _interopRequireWildcard(getIteratorFn);

export function useDismissedRouteError(state) {
  const setNextDismissedKey = first.default(name.useState(null), 2);
  first = setNextDismissedKey[0];
  let tmp3 = null;
  if (first) {
    const routes = state.routes;
    const found = routes.find((key) => key.key === first);
    name = undefined;
    if (found != null) {
      name = found.name;
    }
    tmp3 = name;
  }
  name = tmp3;
  const items = [tmp3];
  const effect = name.useEffect(() => {
    if (name) {
      const _HermesInternal = HermesInternal;
      const _console = console;
      console.error(`${"The screen '" + name + "' was removed natively but didn't get removed from JS state. "}This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.

    Consider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.`);
    }
  }, items);
  return { setNextDismissedKey: setNextDismissedKey[1] };
}
