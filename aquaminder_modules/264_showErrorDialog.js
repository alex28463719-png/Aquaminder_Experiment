// Module ID: 264
// Function ID: 2709
// Name: showErrorDialog
// Dependencies: [159]

// Module 264 (showErrorDialog)
import _callSuper from "_callSuper" /* 159 */;

let closure_0 = _interopRequireWildcard(_callSuper);

export default {
  showErrorDialog(arg0) {
    ({ componentStack, error } = arg0);
    if (error instanceof Error) {
      let syntheticError2 = error;
    } else if (typeof error === "string") {
      const SyntheticError2 = mod.SyntheticError;
      const prototype2 = SyntheticError2.prototype;
      syntheticError2 = new SyntheticError2(error);
    } else {
      const SyntheticError = mod.SyntheticError;
      const prototype = SyntheticError.prototype;
      syntheticError2 = new SyntheticError("Unspecified error");
    }
    try {
      error = syntheticError2;
      syntheticError2.componentStack = componentStack;
      componentStack = true;
      syntheticError2.isComponentError = true;
    } catch (err) {
      mod.default.handleException(tmp, false);
      const _default = mod.default;
    }
  }
};
