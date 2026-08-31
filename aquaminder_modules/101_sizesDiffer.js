// Module ID: 101
// Function ID: 1277
// Name: sizesDiffer
// Dependencies: []

// Module 101 (sizesDiffer)
arg5.default = undefined;
let closure_0 = { width: undefined, height: undefined };
arg5.default = function sizesDiffer(arg0, arg1) {
  let size = arg0;
  let size2 = arg1;
  if (!arg0) {
    size = closure_0;
  }
  if (!size2) {
    size2 = closure_0;
  }
  let tmp = size !== size2;
  if (tmp) {
    tmp = size.width !== size2.width || size.height !== size2.height;
    const tmp2 = size.width !== size2.width || size.height !== size2.height;
  }
  return tmp;
};
