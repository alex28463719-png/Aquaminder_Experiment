// Module ID: 622
// Function ID: 6710
// Name: usePreventRemoveContext
// Dependencies: [119, 569]
// Exports: usePreventRemoveContext

// Module 622 (usePreventRemoveContext)
import getIteratorFn from "getIteratorFn" /* 119 */;
import PreventRemoveContext from "PreventRemoveContext" /* 569 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function usePreventRemoveContext() {
  const context = React.useContext(PreventRemoveContext.PreventRemoveContext);
  if (context == null) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
}
