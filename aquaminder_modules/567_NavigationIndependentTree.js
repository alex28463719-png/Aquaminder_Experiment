// Module ID: 567
// Function ID: 6242
// Name: NavigationIndependentTree
// Dependencies: [119, 251, 568, 565, 540]
// Exports: NavigationIndependentTree

// Module 567 (NavigationIndependentTree)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 540 */;
import NavigationContext from "NavigationContext" /* 565 */;
import NavigationRouteContext from "NavigationRouteContext" /* 568 */;
import closure_2 from "jsxProd" /* 251 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export function NavigationIndependentTree(children) {
  let obj = { value: undefined };
  obj = { value: undefined, children: React.jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj.children = React.jsx(NavigationContext.NavigationContext.Provider, { value: undefined, children: React.jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  return React.jsx(NavigationRouteContext.NavigationRouteContext.Provider, { value: undefined, children: React.jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
}
