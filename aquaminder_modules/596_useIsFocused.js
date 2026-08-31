// Module ID: 596
// Function ID: 6476
// Name: useIsFocused
// Dependencies: [119, 595]
// Exports: useIsFocused

// Module 596 (useIsFocused)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useIsFocused() {
  navigation = navigation(595).useNavigation();
  const items = [navigation];
  return React.useSyncExternalStore(React.useCallback((arg0) => {
    navigation = navigation.addListener("focus", arg0);
    closure_1 = navigation.addListener("blur", arg0);
    return () => {
      callback();
      callback2();
    };
  }, items), navigation.isFocused, navigation.isFocused);
}
