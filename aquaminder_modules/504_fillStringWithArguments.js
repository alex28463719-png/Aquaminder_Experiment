// Module ID: 504
// Function ID: 5501
// Name: fillStringWithArguments
// Dependencies: [2]
// Exports: fillStringWithArguments, fullUUID

// Module 504 (fillStringWithArguments)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;


export function fillStringWithArguments(_errorCodesToMessagesMapping, arg1) {
  closure_0 = arg1;
  return _errorCodesToMessagesMapping.replace(/\{([^}]+)\}/g, (arg0, arg1) => table[arg1] || "?");
}
export function fullUUID(str) {
  if (str.length === 4) {
    return "0000" + str.toLowerCase() + "-0000-1000-8000-00805f9b34fb";
  } else if (str.length === 8) {
    return str.toLowerCase() + "-0000-1000-8000-00805f9b34fb";
  } else {
    return str.toLowerCase();
  }
}
export const isIOS = get_registerCallableModule.Platform.OS === "ios";
