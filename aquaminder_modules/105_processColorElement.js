// Module ID: 105
// Function ID: 1285
// Name: processColorElement
// Dependencies: [1, 89]
// Exports: default

// Module 105 (processColorElement)
import processColor from "processColor" /* 89 */;
import module_1 from "module_1" /* 1 */;

function processColorElement(arg0) {
  const defaultResult = closure_0.default(arg0);
  if (defaultResult == null) {
    const _console = console;
    console.error("Invalid value in color array:", arg0);
    return c1;
  } else {
    return defaultResult;
  }
}
let closure_0 = module_1(processColor);
let c1 = 0;

export default function processColorArray(arr) {
  let mapped = null;
  if (arr != null) {
    mapped = arr.map(processColorElement);
  }
  return mapped;
};
