// Module ID: 245
// Function ID: 2630
// Name: usePerformanceLogger
// Dependencies: [1, 186, 119]
// Exports: usePerformanceLogger

// Module 245 (usePerformanceLogger)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _mod186 from "module_186" /* 186 */;
import module_1 from "module_1" /* 1 */;

const module_186 = module_1(_mod186);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const context = getIteratorFn.createContext(module_186.default);

export function usePerformanceLogger() {
  return getIteratorFn.useContext(context);
}
export default context;
