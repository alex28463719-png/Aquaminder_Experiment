// Module ID: 256
// Function ID: 2662
// Name: coerceDisplayMode
// Dependencies: []

// Module 256 (coerceDisplayMode)
arg5.coerceDisplayMode = function coerceDisplayMode(arg0) {
  if (frozen.SUSPENDED === arg0) {
    return frozen.SUSPENDED;
  } else if (frozen.HIDDEN === arg0) {
    return frozen.HIDDEN;
  } else {
    return frozen.VISIBLE;
  }
};
arg5.default = undefined;
const frozen = Object.freeze({ VISIBLE: 1, SUSPENDED: 2, HIDDEN: 3 });
arg5.default = frozen;
