// Module ID: 103
// Function ID: 1281
// Name: pointsDiffer
// Dependencies: []

// Module 103 (pointsDiffer)
arg5.default = undefined;
let closure_0 = { x: undefined, y: undefined };
arg5.default = function pointsDiffer(arg0, arg1) {
  let point = arg0;
  let point2 = arg1;
  if (!arg0) {
    point = closure_0;
  }
  if (!point2) {
    point2 = closure_0;
  }
  let tmp = point !== point2;
  if (tmp) {
    tmp = point.x !== point2.x || point.y !== point2.y;
    const tmp2 = point.x !== point2.x || point.y !== point2.y;
  }
  return tmp;
};
