// Module ID: 581
// Function ID: 6327
// Name: isRecordEqual
// Dependencies: []

// Module 581 (isRecordEqual)
arg5.isRecordEqual = function isRecordEqual(reduced1, current) {
  closure_0 = reduced1;
  closure_1 = current;
  if (reduced1 === current) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(reduced1);
    const _Object2 = Object;
    if (keys.length !== Object.keys(current).length) {
      return false;
    } else {
      return keys.every((arg0) => table[arg0] === table2[arg0]);
    }
  }
};
