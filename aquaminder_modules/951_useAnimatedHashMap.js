// Module ID: 951
// Function ID: 9936
// Name: useAnimatedHashMap
// Dependencies: [119, 2]
// Exports: useAnimatedHashMap

// Module 951 (useAnimatedHashMap)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_1 from "get registerCallableModule" /* 2 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useAnimatedHashMap(state) {
  ({ routes, index: closure_0 } = state);
  const ref = React.useRef({});
  const current = ref.current;
  const keys = Object.keys(current);
  if (routes.length === keys.length) {
    if (routes.every((key) => keys.includes(key.key))) {
      return current;
    }
  }
  ref.current = {};
  const item = routes.forEach((key) => {
    let value = current[key];
    if (value == null) {
      const Value = ref.Animated.Value;
      let num = 0;
      if (arg1 !== closure_0) {
        let num2 = -1;
        if (arg1 >= closure_0) {
          num2 = 1;
        }
        num = num2;
      }
      const prototype = Value.prototype;
      value = new Value(num);
    }
    ref.current[key.key] = value;
  });
  return ref.current;
}
