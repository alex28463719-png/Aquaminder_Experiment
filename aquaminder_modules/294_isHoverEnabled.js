// Module ID: 294
// Function ID: 3379
// Name: isHoverEnabled
// Dependencies: [1, 33]
// Exports: isHoverEnabled

// Module 294 (isHoverEnabled)
import get_Version from "get Version" /* 33 */;
import module_1 from "module_1" /* 1 */;

let c0 = false;
if (module_1(get_Version).default.OS === "web") {
  const _window3 = window;
  let createElement = typeof window !== "undefined";
  if (createElement) {
    const _window = window;
    createElement = window.document;
  }
  if (createElement) {
    const _window2 = window;
    createElement = window.document.createElement;
  }
  if (Boolean(createElement)) {
    let c1 = 1000;
    let c2 = 0;
    function disableHover() {
      closure_2 = Date.now();
      if (c0) {
        c0 = false;
      }
    }
    const _document = document;
    const listener = document.addEventListener("touchstart", disableHover, true);
    const _document2 = document;
    const listener1 = document.addEventListener("touchmove", disableHover, true);
    const _document3 = document;
    const listener2 = document.addEventListener("mousemove", function enableHover() {
      if (!c0) {
        const _Date = Date;
        if (Date.now() - c2 >= c1) {
          c0 = true;
        }
      }
    }, true);
  }
}

export function isHoverEnabled() {
  return c0;
}
