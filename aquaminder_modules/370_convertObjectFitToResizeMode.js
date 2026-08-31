// Module ID: 370
// Function ID: 4577
// Name: convertObjectFitToResizeMode
// Dependencies: []

// Module 370 (convertObjectFitToResizeMode)
arg5.convertObjectFitToResizeMode = function convertObjectFitToResizeMode(objectFit) {
  let tmp;
  if (objectFit != null) {
    tmp = table[objectFit];
  }
  return tmp;
};
let closure_0 = { contain: "contain", cover: "cover", fill: "stretch", "scale-down": "contain", none: "none" };
