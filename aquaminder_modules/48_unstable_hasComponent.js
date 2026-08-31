// Module ID: 48
// Function ID: 410
// Name: unstable_hasComponent
// Dependencies: []

// Module 48 (unstable_hasComponent)
const global = arg0;
arg5.unstable_hasComponent = function unstable_hasComponent(unstable_hasComponent) {
  let value = map.get(unstable_hasComponent);
  if (value == null) {
    if (global.__nativeComponentRegistry__hasComponent) {
      const result = global.__nativeComponentRegistry__hasComponent(unstable_hasComponent);
      const result1 = map.set(unstable_hasComponent, result);
      value = result;
    } else {
      const _HermesInternal = HermesInternal;
      throw "unstable_hasComponent('" + unstable_hasComponent + "'): Global function is not registered";
    }
  }
  return value;
};
const map = new Map();
