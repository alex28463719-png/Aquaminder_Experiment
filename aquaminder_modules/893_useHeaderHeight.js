// Module ID: 893
// Function ID: 9656
// Name: useHeaderHeight
// Dependencies: [119, 884]
// Exports: useHeaderHeight

// Module 893 (useHeaderHeight)
import getIteratorFn from "getIteratorFn" /* 119 */;
import HeaderHeightContext from "HeaderHeightContext" /* 884 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useHeaderHeight() {
  const context = React.useContext(HeaderHeightContext.HeaderHeightContext);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
}
