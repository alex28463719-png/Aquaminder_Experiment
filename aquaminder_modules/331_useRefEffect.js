// Module ID: 331
// Function ID: 4033
// Name: useRefEffect
// Dependencies: [119]
// Exports: default

// Module 331 (useRefEffect)
import closure_0 from "getIteratorFn" /* 119 */;


export default function useRefEffect(arg0) {
  const React = arg0;
  closure_1 = React.useRef(undefined);
  const items = [arg0];
  return React.useCallback((arg0) => {
    if (ref.current) {
      ref.current();
      ref.current = undefined;
    }
    if (arg0 != null) {
      ref.current = callback(arg0);
    }
  }, items);
};
