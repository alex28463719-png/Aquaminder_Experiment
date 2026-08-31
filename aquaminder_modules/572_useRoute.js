// Module ID: 572
// Function ID: 6288
// Name: useRoute
// Dependencies: [119, 568]
// Exports: useRoute

// Module 572 (useRoute)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NavigationRouteContext from "NavigationRouteContext" /* 568 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useRoute() {
  const context = React.useContext(NavigationRouteContext.NavigationRouteContext);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}
