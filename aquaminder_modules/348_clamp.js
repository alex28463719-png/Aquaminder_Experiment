// Module ID: 348
// Function ID: 4360
// Name: clamp
// Dependencies: []

// Module 348 (clamp)
arg5.default = function clamp(arg0, arg1, arg2) {
  if (arg1 < arg0) {
    return arg0;
  } else {
    return arg1 > arg2 ? arg2 : arg1;
  }
};
