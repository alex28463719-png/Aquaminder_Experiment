// Module ID: 826
// Function ID: 9049
// Name: ButtonTexts
// Dependencies: [1, 99]

// Module 826 (ButtonTexts)
import _defineProperty2 from "_defineProperty" /* 99 */;
import module_1 from "module_1" /* 1 */;

const _defineProperty = module_1(_defineProperty2);
const obj = { DEFAULT: "SignIn", SIGN_IN: "SignIn", CONTINUE: "Continue", SIGN_UP: "SignUp" };
({ default: _default, default: _default2 } = _defineProperty);

export const ButtonVariants = { DEFAULT: "White", WHITE: "White", WHITE_OUTLINE: "WhiteOutline", BLACK: "Black" };
export const ButtonTypes = obj;
export const ButtonTexts = _default(_default2(_defineProperty.default({}, obj.CONTINUE, "Continue with Apple"), obj.SIGN_IN, "Sign in with Apple"), obj.SIGN_UP, "Sign up with Apple");
