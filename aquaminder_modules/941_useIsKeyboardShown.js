// Module ID: 941
// Function ID: 9886
// Name: useIsKeyboardShown
// Dependencies: [1, 38, 119, 2]
// Exports: useIsKeyboardShown

// Module 941 (useIsKeyboardShown)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "get registerCallableModule" /* 2 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = _interopRequireWildcard(getIteratorFn);

export function useIsKeyboardShown() {
  const defaultResult = closure_0.default(React.useState(false), 2);
  closure_0 = defaultResult[1];
  const effect = React.useEffect(() => {
    function handleKeyboardShow() {
      return items1(true);
    }
    function handleKeyboardHide() {
      return items1(false);
    }
    if (closure_1_2.Platform.OS === "ios") {
      const Keyboard3 = closure_1_2.Keyboard;
      const items = [Keyboard3.addListener("keyboardWillShow", handleKeyboardShow), ];
      const Keyboard4 = closure_1_2.Keyboard;
      items[1] = Keyboard4.addListener("keyboardWillHide", handleKeyboardHide);
      let items1 = items;
    } else {
      const Keyboard = closure_1_2.Keyboard;
      items1 = [Keyboard.addListener("keyboardDidShow", handleKeyboardShow), ];
      const Keyboard2 = closure_1_2.Keyboard;
      items1[1] = Keyboard2.addListener("keyboardDidHide", handleKeyboardHide);
    }
    return () => {
      const item = items1.forEach((remove) => remove.remove());
    };
  }, []);
  return defaultResult[0];
}
