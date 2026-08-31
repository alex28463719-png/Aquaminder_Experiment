// Module ID: 539
// Function ID: 6008
// Name: useNavigationIndependentTree
// Dependencies: [119, 540]
// Exports: useNavigationIndependentTree

// Module 539 (useNavigationIndependentTree)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 540 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
}
