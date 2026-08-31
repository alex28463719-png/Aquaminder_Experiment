// Module ID: 624
// Function ID: 6718
// Name: useTheme
// Dependencies: [119, 563]
// Exports: useTheme

// Module 624 (useTheme)
import getIteratorFn from "getIteratorFn" /* 119 */;
import ThemeContext from "ThemeContext" /* 563 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useTheme() {
  const context = React.useContext(ThemeContext.ThemeContext);
  if (context == null) {
    const _Error = Error;
    const error = new Error("Couldn't find a theme. Is your component inside NavigationContainer or does it have a theme?");
    throw error;
  } else {
    return context;
  }
}
