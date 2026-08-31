// Module ID: 831
// Function ID: 9098
// Name: translateCancellationError
// Dependencies: [832, 833, 834]

// Module 831 (translateCancellationError)
import keys1 from "keys1" /* 832 */;
import SIGN_IN_CANCELLED_CODE from "SIGN_IN_CANCELLED_CODE" /* 833 */;
import _mod834 from "module_834" /* 834 */;

require = arg1;
const dependencyMap = arg6;
arg5.translateCancellationError = function translateCancellationError(code) {
  if (keys1.isErrorWithCode(code)) {
    if (code.code === SIGN_IN_CANCELLED_CODE.SIGN_IN_CANCELLED_CODE) {
      return _mod834.cancelledResult;
    }
  }
  throw code;
};
