// Module ID: 594
// Function ID: 6463
// Name: useFocusEffect
// Dependencies: [119, 595]
// Exports: useFocusEffect

// Module 594 (useFocusEffect)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useFocusEffect(closure_5) {
  const _require = closure_5;
  navigation = _require(navigation[1]).useNavigation();
  if (arguments[1] !== undefined) {
    const _console = console;
    console.error("You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect");
  }
  const items = [closure_5, navigation];
  const effect = React.useEffect(() => {
    c0 = false;
    function callback() {
      const tmp = _true();
      return tmp;
    }
    if (navigation.isFocused()) {
      navigation = callback();
      c0 = true;
    }
    closure_3 = navigation.addListener("focus", () => {
      if (!c0) {
        if (callback !== undefined) {
          callback();
        }
        callback = callback();
        c0 = true;
      }
    });
    closure_4 = navigation.addListener("blur", () => {
      if (callback !== undefined) {
        callback();
      }
      callback = undefined;
      c0 = false;
    });
    return () => {
      if (callback !== undefined) {
        callback();
      }
      callback2();
      callback3();
    };
  }, items);
}
