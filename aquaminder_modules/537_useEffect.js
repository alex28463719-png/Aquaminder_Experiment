// Module ID: 537
// Function ID: 5996
// Name: useEffect
// Dependencies: [119]

// Module 537 (useEffect)
import getIteratorFn from "getIteratorFn" /* 119 */;

if (typeof document !== "undefined") {
  let useEffect = getIteratorFn.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = getIteratorFn.useEffect;
}

export default function useLatestCallback(arg0) {
  getIteratorFn = arg0;
  useEffect = getIteratorFn.useRef(arg0);
  useEffect(() => {
    closure_1.current = closure_0;
  });
  return getIteratorFn.useRef(function latestCallback() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    const current = ref.current;
    return current.apply(this, items);
  }).current;
};
