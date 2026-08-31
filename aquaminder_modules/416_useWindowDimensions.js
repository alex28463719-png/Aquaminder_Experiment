// Module ID: 416
// Function ID: 4923
// Name: useWindowDimensions
// Dependencies: [1, 38, 113, 119]
// Exports: default

// Module 416 (useWindowDimensions)
import _slicedToArray from "_slicedToArray" /* 38 */;
import Dimensions from "Dimensions" /* 113 */;
import module_1 from "module_1" /* 1 */;
import closure_2 from "getIteratorFn" /* 119 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(Dimensions);

export default function useWindowDimensions() {
  const defaultResult = first.default(React.useState(() => mod.default.get("window")), 2);
  first = defaultResult[0];
  closure_1 = defaultResult[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function handleChange(window) {
      const _window = window.window;
      closure_1_1(_window);
    }
    closure_0 = mod.default.addEventListener("change", handleChange);
    handleChange({ window: _default2.get("window") });
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
};
