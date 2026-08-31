// Module ID: 911
// Function ID: 9739
// Name: Suspender
// Dependencies: [119, 251]
// Exports: Freeze

// Module 911 (Suspender)
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_1 from "jsxProd" /* 251 */;

function Suspender(freeze) {
  if (freeze.freeze) {
    throw closure_2;
  } else {
    const obj = { children: tmp };
    return <>{tmp}</>;
  }
}
let closure_0 = _interopRequireWildcard(getIteratorFn);
let closure_2 = {
  then() {

  }
};

export function Freeze(placeholder) {
  placeholder = placeholder.placeholder;
  let tmp = null;
  ({ freeze, children } = placeholder);
  if (placeholder !== undefined) {
    tmp = placeholder;
  }
  const obj = { fallback: tmp, children: <Suspender freeze={freeze}>{children}</Suspender> };
  return <React.Suspense fallback={tmp}><Suspender freeze={freeze}>{children}</Suspender></React.Suspense>;
}
