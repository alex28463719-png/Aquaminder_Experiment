// Module ID: 640
// Function ID: 6821
// Name: useLinkTo
// Dependencies: [119, 534, 639]
// Exports: useLinkTo

// Module 640 (useLinkTo)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useLinkTo() {
  context = React.useContext(context(buildAction[1]).NavigationContainerRefContext);
  buildAction = context(buildAction[2]).useLinkBuilder().buildAction;
  const items = [buildAction, context];
  return React.useCallback((arg0) => {
    if (context === undefined) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      context.dispatch(buildAction(arg0));
    }
  }, items);
}
