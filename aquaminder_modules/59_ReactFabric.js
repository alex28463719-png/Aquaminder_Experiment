// Module ID: 59
// Function ID: 469
// Name: ReactFabric
// Dependencies: [60, 261]

// Module 59 (ReactFabric)
import get_BatchedBridge from "get BatchedBridge" /* 261 */;
import getIteratorFn from "getIteratorFn" /* 60 */;

global.RN$stopSurface = getIteratorFn.stopSurface;
if (global.RN$Bridgeless !== true) {
  const BatchedBridge = get_BatchedBridge.BatchedBridge;
  const result = BatchedBridge.registerCallableModule("ReactFabric", getIteratorFn);
}

export default getIteratorFn;
