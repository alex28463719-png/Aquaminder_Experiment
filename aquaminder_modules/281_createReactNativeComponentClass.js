// Module ID: 281
// Function ID: 3270
// Name: createReactNativeComponentClass
// Dependencies: [261]
// Exports: default

// Module 281 (createReactNativeComponentClass)
import get_BatchedBridge from "get BatchedBridge" /* 261 */;

const register = get_BatchedBridge.ReactNativeViewConfigRegistry.register;

export default function createReactNativeComponentClass(arg0, arg1) {
  return register(arg0, arg1);
};
