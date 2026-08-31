// Module ID: 1009
// Function ID: 10759
// Name: enableExperimentalWebImplementation
// Dependencies: [2, 971]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 1009 (enableExperimentalWebImplementation)
import hasProperty from "hasProperty" /* 971 */;
import closure_2 from "get registerCallableModule" /* 2 */;

let c3 = true;
let c4 = false;

export function enableExperimentalWebImplementation() {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
  }
  console.warn(hasProperty.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
}
export function enableLegacyWebImplementation() {
  let flag = true;
  if (arguments.length > 0) {
    flag = true;
    if (arguments[0] !== undefined) {
      flag = arguments[0];
    }
  }
  console.warn(hasProperty.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
  if (Platform.Platform.OS === "web") {
    if (closure_3 !== !flag) {
      if (c4) {
        const _console = console;
        console.error("Some parts of this application have already started using the new gesture handler implementation. No changes will be applied. You can try enabling legacy implementation earlier.");
      } else {
        closure_3 = !flag;
      }
    }
  }
}
export function isNewWebImplementationEnabled() {
  c4 = true;
  return c3;
}
