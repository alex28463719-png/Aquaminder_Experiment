// Module ID: 602
// Function ID: 6540
// Name: useClientLayoutEffect
// Dependencies: [119]

// Module 602 (useClientLayoutEffect)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
if (typeof document !== "undefined") {
  let useEffect = getIteratorFn.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = getIteratorFn.useEffect;
}

export const useClientLayoutEffect = useEffect;
