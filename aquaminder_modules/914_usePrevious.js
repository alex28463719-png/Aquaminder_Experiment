// Module ID: 914
// Function ID: 9749
// Name: usePrevious
// Dependencies: [119]
// Exports: usePrevious

// Module 914 (usePrevious)
import closure_0 from "getIteratorFn" /* 119 */;


export function usePrevious(arg0) {
  const React = arg0;
  const ref = React.useRef();
  const effect = React.useEffect(() => {
    ref.current = closure_0;
  });
  return ref.current;
}
