// Module ID: 561
// Function ID: 6219
// Name: EnsureSingleNavigator
// Dependencies: [119, 251]
// Exports: EnsureSingleNavigator

// Module 561 (EnsureSingleNavigator)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import closure_1 from "jsxProd" /* 251 */;

let getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let c2 = "Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.";
const context = getIteratorFn.createContext(undefined);

export function EnsureSingleNavigator(children) {
  getIteratorFn = getIteratorFn.useRef(undefined);
  return <context.Provider value={getIteratorFn.useMemo(() => ({
    register(current) {
      current = closure_1_0.current;
      if (current !== undefined) {
        if (current !== current) {
          const _Error = Error;
          const error = new Error(closure_2_2);
          throw error;
        }
      }
      closure_1_0.current = current;
    },
    unregister(arg0) {
      if (arg0 === closure_1_0.current) {
        closure_1_0.current = undefined;
      }
    }
  }), [])}>{arg0.children}</context.Provider>;
}
export const SingleNavigatorContext = context;
