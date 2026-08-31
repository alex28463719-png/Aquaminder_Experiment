// Module ID: 383
// Function ID: 4711
// Name: dismissKeyboard
// Dependencies: [84]

// Module 383 (dismissKeyboard)
import focusInput from "focusInput" /* 84 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = focusInput.default;
  _default.blurTextInput(focusInput.default.currentlyFocusedInput());
};
