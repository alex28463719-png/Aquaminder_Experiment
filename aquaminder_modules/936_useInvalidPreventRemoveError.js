// Module ID: 936
// Function ID: 9840
// Name: useInvalidPreventRemoveError
// Dependencies: [119, 529]
// Exports: useInvalidPreventRemoveError

// Module 936 (useInvalidPreventRemoveError)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useInvalidPreventRemoveError(descriptors) {
  first = Object.keys(first(prop[1]).usePreventRemoveContext().preventedRoutes)[0];
  prop = undefined;
  if (descriptors[first] != null) {
    const options = tmp2.options;
    if (options != null) {
      prop = options.headerBackButtonMenuEnabled;
    }
  }
  let name;
  if (descriptors[first] != null) {
    const route = tmp2.route;
    if (route != null) {
      name = route.name;
    }
  }
  const items = [first, prop, name];
  const effect = name.useEffect(() => {
    if (first != null) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        const combined = "The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\n";
        const _console = console;
        console.error(combined + "Consider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
}
