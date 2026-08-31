// Module ID: 641
// Function ID: 6826
// Name: useLocale
// Dependencies: [119, 627]
// Exports: useLocale

// Module 641 (useLocale)
import getIteratorFn from "getIteratorFn" /* 119 */;
import LocaleDirContext from "LocaleDirContext" /* 627 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useLocale() {
  const context = React.useContext(LocaleDirContext.LocaleDirContext);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't determine the text direction. Is your component inside NavigationContainer?");
    throw error;
  } else {
    const obj = { direction: context };
    return obj;
  }
}
