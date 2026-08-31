// Module ID: 158
// Function ID: 1719
// Name: _callSuper
// Dependencies: [159, 18]

// Module 158 (_callSuper)
import _mod18 from "module_18" /* 18 */;
import _callSuper from "_callSuper" /* 159 */;

if (global.RN$useAlwaysAvailableJSErrorHandling !== true) {
  const _default = _callSuper.default;
  const result = _default.installConsoleErrorReporter();
  if (!global.__fbDisableExceptionsManager) {
    _mod18.default.setGlobalHandler(function handleError(extendedError) {
      try {
        _default.handleException(extendedError, arg1);
      } catch (tmp5) {
        const _console = console;
        console.log("Failed to print error: ", tmp5.message);
        throw tmp;
      }
    });
    const _default2 = _mod18.default;
  }
}
