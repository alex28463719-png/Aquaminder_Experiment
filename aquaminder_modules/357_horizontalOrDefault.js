// Module ID: 357
// Function ID: 4468
// Name: horizontalOrDefault
// Dependencies: [119]
// Exports: horizontalOrDefault, initialNumToRenderOrDefault, maxToRenderPerBatchOrDefault, onEndReachedThresholdOrDefault, onStartReachedThresholdOrDefault, windowSizeOrDefault

// Module 357 (horizontalOrDefault)
import getIteratorFn2 from "getIteratorFn" /* 119 */;

const getIteratorFn = _interopRequireWildcard(getIteratorFn2);

export function horizontalOrDefault(horizontal) {
  let flag = false;
  if (horizontal != null) {
    flag = horizontal;
  }
  return flag;
}
export function initialNumToRenderOrDefault(initialNumToRender) {
  let num = 10;
  if (initialNumToRender != null) {
    num = initialNumToRender;
  }
  return num;
}
export function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  let num = 10;
  if (maxToRenderPerBatch != null) {
    num = maxToRenderPerBatch;
  }
  return num;
}
export function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  let num = 2;
  if (onEndReachedThreshold != null) {
    num = onEndReachedThreshold;
  }
  return num;
}
export function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  let num = 2;
  if (onStartReachedThreshold != null) {
    num = onStartReachedThreshold;
  }
  return num;
}
export function windowSizeOrDefault(windowSize) {
  let num = 21;
  if (windowSize != null) {
    num = windowSize;
  }
  return num;
}
