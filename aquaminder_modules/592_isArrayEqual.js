// Module ID: 592
// Function ID: 6457
// Name: isArrayEqual
// Dependencies: []

// Module 592 (isArrayEqual)
arg5.isArrayEqual = function isArrayEqual(routeNames, mapped) {
  closure_0 = mapped;
  if (routeNames === mapped) {
    return true;
  } else if (routeNames.length !== mapped.length) {
    return false;
  } else {
    return routeNames.every((arg0, arg1) => arg0 === mapped[arg1]);
  }
};
