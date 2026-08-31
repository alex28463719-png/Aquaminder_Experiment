// Module ID: 295
// Function ID: 3383
// Name: createSquare
// Dependencies: []

// Module 295 (createSquare)
function createSquare(bottom) {
  return { bottom, left: bottom, right: bottom, top: bottom };
}
arg5.createSquare = createSquare;
arg5.normalizeRect = function normalizeRect(hitSlop) {
  let tmp = hitSlop;
  if (typeof hitSlop === "number") {
    tmp = createSquare(hitSlop);
  }
  return tmp;
};
