// Module ID: 620
// Function ID: 6697
// Name: useNavigationContainerRef
// Dependencies: [119, 545]
// Exports: useNavigationContainerRef

// Module 620 (useNavigationContainerRef)
import getIteratorFn from "getIteratorFn" /* 119 */;
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 545 */;

let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useNavigationContainerRef() {
  const ref = React.useRef(null);
  if (ref.current == null) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
}
