// Module ID: 257
// Function ID: 2664
// Name: getCachedComponentWithDisplayName
// Dependencies: [119]
// Exports: default

// Module 257 (getCachedComponentWithDisplayName)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
const map = new Map();

export default function getCachedComponentWithDisplayName(displayName) {
  let value = map.get(displayName);
  if (!value) {
    class ComponentWithDisplayName {
      constructor(arg0) {
        return displayName.children;
      }
    }
    ComponentWithDisplayName.displayName = displayName;
    const result = map.set(displayName, ComponentWithDisplayName);
    value = ComponentWithDisplayName;
  }
  return value;
};
