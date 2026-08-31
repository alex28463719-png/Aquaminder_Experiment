// Module ID: 239
// Function ID: 2601
// Name: getReactTree
// Dependencies: []

// Module 239 (getReactTree)
function getReactTree() {
  return "React tree dumps have been temporarily disabled while React is upgraded to Fiber.";
}
arg5.default = function dumpReactTree() {
  try {
    getReactTree();
    return "React tree dumps have been temporarily disabled while React is upgraded to Fiber.";
  } catch (tmp3) {
    return "Failed to dump react tree: " + tmp3;
  }
};
