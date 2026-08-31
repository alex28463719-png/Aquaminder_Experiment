// Module ID: 194
// Function ID: 2101
// Name: binaryToBase64
// Dependencies: [189]

// Module 194 (binaryToBase64)
import getLens from "getLens" /* 189 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function binaryToBase64(uint8Array) {
  if (uint8Array instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    uint8Array = new Uint8Array(uint8Array);
  }
  if (uint8Array instanceof Uint8Array) {
    return getLens.fromByteArray(uint8Array);
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(uint8Array)) {
      const buffer = uint8Array.buffer;
      ({ byteOffset, byteLength } = uint8Array);
      const _Uint8Array2 = Uint8Array;
      const uint8Array1 = new Uint8Array(buffer, byteOffset, byteLength);
      return getLens.fromByteArray(uint8Array1);
    } else {
      const _Error = Error;
      const error = new Error("data must be ArrayBuffer or typed array");
      throw error;
    }
  }
};
