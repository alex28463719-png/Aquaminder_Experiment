// Module ID: 192
// Function ID: 2089
// Name: convertRequestBody
// Dependencies: [183, 193, 194]

// Module 192 (convertRequestBody)
import Blob from "Blob" /* 183 */;
import encodeFilename from "encodeFilename" /* 193 */;
import binaryToBase64 from "binaryToBase64" /* 194 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function convertRequestBody(str) {
  if (typeof str === "string") {
    let obj = { string: str };
    return obj;
  } else if (str instanceof Blob.default) {
    obj = { blob: str.data };
    return obj;
  } else if (str instanceof encodeFilename.default) {
    let obj1 = { formData: str.getParts() };
    return obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (!(str instanceof ArrayBuffer)) {
      const _ArrayBuffer2 = ArrayBuffer;
      if (!ArrayBuffer.isView(str)) {
        return str;
      }
    }
    obj = {};
    obj1 = binaryToBase64;
    obj.base64 = obj1.default(str);
    return obj;
  }
};
