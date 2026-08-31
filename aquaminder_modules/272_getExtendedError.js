// Module ID: 272
// Function ID: 2776
// Name: getExtendedError
// Dependencies: [159]
// Exports: onCaughtError, onRecoverableError, onUncaughtError

// Module 272 (getExtendedError)
import _callSuper from "_callSuper" /* 159 */;

function getExtendedError(value, arg1) {
  let tmp = value;
  let flag = arg1;
  if (value instanceof Error) {
    let syntheticError2 = tmp;
  } else if (typeof tmp === "string") {
    const SyntheticError2 = mod.SyntheticError;
    const prototype2 = SyntheticError2.prototype;
    syntheticError2 = new SyntheticError2(tmp);
  } else {
    const SyntheticError = mod.SyntheticError;
    const prototype = SyntheticError.prototype;
    syntheticError2 = new SyntheticError("Unspecified error");
  }
  try {
    tmp = syntheticError2;
    syntheticError2.componentStack = flag.componentStack;
    flag = true;
    syntheticError2.isComponentError = true;
  } catch (err) {
  }
}
let closure_0 = _interopRequireWildcard(_callSuper);

export function onCaughtError(value, arg1) {
  mod.default.handleException(getExtendedError(value, arg1), false);
}
export function onRecoverableError(value) {
  console.warn(getExtendedError(value, arg1));
}
export function onUncaughtError(value, arg1) {
  mod.default.handleException(getExtendedError(value, arg1), true);
}
