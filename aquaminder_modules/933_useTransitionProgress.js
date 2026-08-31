// Module ID: 933
// Function ID: 9826
// Name: useTransitionProgress
// Dependencies: [1, 119, 909]
// Exports: default

// Module 933 (useTransitionProgress)
import getIteratorFn from "getIteratorFn" /* 119 */;
import getIteratorFn2 from "getIteratorFn" /* 909 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = _interopRequireWildcard(getIteratorFn);
let closure_1 = module_1(getIteratorFn2);

export default function useTransitionProgress() {
  const context = React.useContext(mod.default);
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
