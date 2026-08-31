// Module ID: 580
// Function ID: 6322
// Name: CHILD_STATE
// Dependencies: [1, 203, 119, 581]
// Exports: useRouteCache

// Module 580 (CHILD_STATE)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;

const _objectWithoutProperties = module_1(_objectWithoutProperties2);
let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useRouteCache(routes) {
  const memo = React.useMemo(() => {
    const obj = { current: new Map() };
    return obj;
  }, []);
  return routes;
}
export const CHILD_STATE = Symbol("CHILD_STATE");
