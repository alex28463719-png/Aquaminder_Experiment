// Module ID: 89
// Function ID: 1226
// Name: processColor
// Dependencies: [90, 92]

// Module 89 (processColor)
import normalizeColor from "normalizeColor" /* 90 */;
import PlatformColor from "PlatformColor" /* 92 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function processColor(arg0) {
  if (arg0 !== undefined) {
    if (arg0 !== null) {
      const defaultResult = normalizeColor.default(arg0);
      if (defaultResult !== null) {
        if (defaultResult !== undefined) {
          if (typeof defaultResult === "object") {
            const processColorObjectResult = PlatformColor.processColorObject(defaultResult);
            if (processColorObjectResult != null) {
              return processColorObjectResult;
            }
          }
          if (typeof defaultResult !== "number") {
            return null;
          } else {
            return (defaultResult << 24 | defaultResult >>> 8) >>> 0 | 0;
          }
        }
      }
    }
  }
  return arg0;
};
