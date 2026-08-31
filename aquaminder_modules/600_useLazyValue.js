// Module ID: 600
// Function ID: 6532
// Name: useLazyValue
// Dependencies: [119]
// Exports: useLazyValue

// Module 600 (useLazyValue)
import getIteratorFn from "getIteratorFn" /* 119 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);

export function useLazyValue(arg0) {
  const ref = React.useRef(undefined);
  if (ref.current === undefined) {
    ref.current = arg0();
  }
  return ref.current;
}
