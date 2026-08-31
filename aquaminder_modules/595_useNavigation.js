// Module ID: 595
// Function ID: 6472
// Name: useNavigation
// Dependencies: [119, 558, 565]
// Exports: useNavigation

// Module 595 (useNavigation)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 558 */;
import NavigationContext from "NavigationContext" /* 565 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useNavigation() {
  let context = React.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  const context1 = React.useContext(NavigationContext.NavigationContext);
  if (context1 === undefined) {
    if (context === undefined) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 != null) {
    context = context1;
  }
  return context;
}
