// Module ID: 832
// Function ID: 9100
// Name: keys1
// Dependencies: []

// Module 832 (keys1)
arg5.isCancelledResponse = function isCancelledResponse(type) {
  return type.type === "cancelled";
};
arg5.isErrorWithCode = undefined;
arg5.isNoSavedCredentialFoundResponse = function isNoSavedCredentialFoundResponse(type) {
  return type.type === "noSavedCredentialFound";
};
arg5.isSuccessResponse = function isSuccessResponse(type) {
  return type.type === "success";
};
arg5.isErrorWithCode = function isErrorWithCode(code) {
  let tmp = typeof code === "object";
  if (tmp) {
    tmp = code != null;
  }
  let tmp3 = code instanceof Error || tmp;
  if (tmp3) {
    tmp3 = "code" in code;
  }
  return tmp3;
};
