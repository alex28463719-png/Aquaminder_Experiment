// Module ID: 490
// Function ID: 5406
// Name: useAnimatedValue
// Dependencies: [1, 299, 119]
// Exports: default

// Module 490 (useAnimatedValue)
import get_FlatList from "get FlatList" /* 299 */;
import module_1 from "module_1" /* 1 */;
import closure_1 from "getIteratorFn" /* 119 */;

let closure_0 = module_1(get_FlatList);

export default function useAnimatedValue(frameSize) {
  const ref = React.useRef(null);
  if (ref.current == null) {
    const Value = mod.default.Value;
    const prototype = Value.prototype;
    const value = new Value(frameSize, arg1);
    ref.current = value;
  }
  return ref.current;
};
