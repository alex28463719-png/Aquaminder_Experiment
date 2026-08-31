// Module ID: 371
// Function ID: 4579
// Name: unstable_getImageComponentDecorator
// Dependencies: [1, 334, 119]
// Exports: unstable_getImageComponentDecorator, unstable_registerImageAttachedCallback, unstable_setImageComponentDecorator, unstable_unregisterImageAttachedCallback, useWrapRefWithImageAttachedCallbacks

// Module 371 (unstable_getImageComponentDecorator)
import getIteratorFn from "getIteratorFn" /* 119 */;
import useMergeRefs from "useMergeRefs" /* 334 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(useMergeRefs);
let closure_1 = _interopRequireWildcard(getIteratorFn);
const set = new Set();

export function unstable_getImageComponentDecorator() {
  return closure_2;
}
export function unstable_registerImageAttachedCallback(arg0) {
  set.add(arg0);
}
export function unstable_setImageComponentDecorator(arg0) {
  closure_2 = arg0;
}
export function unstable_unregisterImageAttachedCallback(arg0) {
  set.delete(arg0);
}
export function useWrapRefWithImageAttachedCallbacks(arg0) {
  closure_0 = React.useRef([]);
  const ref = React.useRef(null);
  if (ref.current == null) {
    ref.current = (arg0) => {
      if (arg0 == null) {
        if (ref.current.length > 0) {
          let current = ref.current;
          const item = current.forEach((arg0) => arg0());
          ref.current = [];
        }
      } else {
        const item1 = closure_1_3.forEach((arg0) => {
          const tmp = arg0(ref);
          if (tmp != null) {
            const current = ref.current;
            current.push(tmp);
          }
        });
      }
    };
  }
  return closure_0.default(arg0, ref.current);
}
