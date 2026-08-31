// Module ID: 916
// Function ID: 9758
// Dependencies: [1, 119, 2, 917, 251, 904]

// Module 916
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import Commands2 from "Commands" /* 917 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;
import closure_4 from "jsxProd" /* 251 */;

const getIteratorFn = module_1(getIteratorFn2);
const Commands = _interopRequireWildcard(Commands2);
({ default: closure_5, Commands: closure_6 } = Commands);

export default getIteratorFn.default.forwardRef(function SearchBar(arg0, arg1) {
  const ref = getIteratorFn.default.useRef(null);
  const imperativeHandle = getIteratorFn.default.useImperativeHandle(arg1, () => ({
    blur() {
      closure_1_1((arg0) => closure_3_6.blur(arg0));
    },
    focus() {
      closure_1_1((arg0) => closure_3_6.focus(arg0));
    },
    toggleCancelButton(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => closure_3_6.toggleCancelButton(arg0, closure_0));
    },
    clearText() {
      closure_1_1((arg0) => closure_3_6.clearText(arg0));
    },
    setText(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => closure_3_6.setText(arg0, closure_0));
    },
    cancelSearch() {
      closure_1_1((arg0) => closure_3_6.cancelSearch(arg0));
    }
  }));
  const items = [ref];
  dependencyMap = getIteratorFn.default.useCallback((arg0) => {
    const current = ref.current;
    if (current) {
      arg0(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(904).isSearchBarAvailableForCurrentPlatform) {
    const _Object = Object;
    let obj = { ref };
    obj = {};
    ({ onFocus: obj2.onSearchFocus, onBlur: obj2.onSearchBlur, onSearchButtonPress: obj2.onSearchButtonPress, onCancelButtonPress: obj2.onCancelButtonPress, onChangeText: obj2.onChangeText } = arg0);
    return <closure_5 {...Object.assign(obj, arg0, obj)} />;
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return RN.View;
  }
  const _default = getIteratorFn.default;
  const _default2 = getIteratorFn.default;
  const _default3 = getIteratorFn.default;
});
