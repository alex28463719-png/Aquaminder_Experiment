// Module ID: 629
// Function ID: 6748
// Name: useBackButton
// Dependencies: [119, 2]
// Exports: useBackButton

// Module 629 (useBackButton)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_1 from "get registerCallableModule" /* 2 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useBackButton(ref) {
  const React = ref;
  const items = [ref];
  const effect = React.useEffect(() => {
    closure_0 = closure_1_1.BackHandler.addEventListener("hardwareBackPress", () => {
      const current = ref.current;
      if (current == null) {
        return false;
      } else if (current.canGoBack()) {
        current.goBack();
        return true;
      } else {
        return false;
      }
    });
    return () => ref.remove();
  }, items);
}
