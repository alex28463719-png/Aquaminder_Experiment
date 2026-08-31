// Module ID: 623
// Function ID: 6714
// Name: useStateForPath
// Dependencies: [119, 613]
// Exports: useStateForPath

// Module 623 (useStateForPath)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 613 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
}
