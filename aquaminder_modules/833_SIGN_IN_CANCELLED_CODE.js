// Module ID: 833
// Function ID: 9105
// Name: SIGN_IN_CANCELLED_CODE
// Dependencies: [830]

// Module 833 (SIGN_IN_CANCELLED_CODE)
import NativeModule2 from "NativeModule" /* 830 */;

const NativeModule = NativeModule2.NativeModule;
const constants = NativeModule.getConstants();
({ SIGN_IN_CANCELLED, SIGN_IN_REQUIRED } = constants);

export const SIGN_IN_REQUIRED_CODE = SIGN_IN_REQUIRED;
export const SIGN_IN_CANCELLED_CODE = SIGN_IN_CANCELLED;
export const ios_only_SCOPES_ALREADY_GRANTED = constants.SCOPES_ALREADY_GRANTED;
export const statusCodes = Object.freeze({ SIGN_IN_CANCELLED, IN_PROGRESS: constants.IN_PROGRESS, PLAY_SERVICES_NOT_AVAILABLE: constants.PLAY_SERVICES_NOT_AVAILABLE, SIGN_IN_REQUIRED });
