// Module ID: 562
// Function ID: 6226
// Name: ThemeProvider
// Dependencies: [119, 251, 563]
// Exports: ThemeProvider

// Module 562 (ThemeProvider)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import ThemeContext from "ThemeContext" /* 563 */;
import closure_2 from "jsxProd" /* 251 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export function ThemeProvider(arg0) {
  ({ value, children } = arg0);
  return React.jsx(ThemeContext.ThemeContext.Provider, { value, children });
}
