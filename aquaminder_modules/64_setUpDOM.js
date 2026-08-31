// Module ID: 64
// Function ID: 934
// Name: setUpDOM
// Dependencies: [65, 66, 67, 68, 70, 71, 72, 82, 130, 131, 80, 83]

// Module 64 (setUpDOM)
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function setUpDOM() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("DOMRect", () => closure_1_0(closure_1_1[1]).default);
    polyfillObjectProperty.polyfillGlobal("DOMRectReadOnly", () => closure_1_0(closure_1_1[2]).default);
    polyfillObjectProperty.polyfillGlobal("DOMRectList", () => closure_1_0(closure_1_1[3]).default);
    polyfillObjectProperty.polyfillGlobal("HTMLCollection", () => closure_1_0(closure_1_1[4]).default);
    polyfillObjectProperty.polyfillGlobal("NodeList", () => closure_1_0(closure_1_1[5]).default);
    polyfillObjectProperty.polyfillGlobal("Node", () => closure_1_0(closure_1_1[6]).default);
    polyfillObjectProperty.polyfillGlobal("Document", () => closure_1_0(closure_1_1[7]).default);
    polyfillObjectProperty.polyfillGlobal("CharacterData", () => closure_1_0(closure_1_1[8]).default);
    polyfillObjectProperty.polyfillGlobal("Text", () => closure_1_0(closure_1_1[9]).default);
    polyfillObjectProperty.polyfillGlobal("Element", () => closure_1_0(closure_1_1[10]).default);
    polyfillObjectProperty.polyfillGlobal("HTMLElement", () => closure_1_0(closure_1_1[11]).default);
  }
};
let c2 = false;
