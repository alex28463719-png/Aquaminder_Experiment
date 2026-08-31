// Module ID: 287
// Function ID: 3305
// Name: usePressability
// Dependencies: [1, 288, 119]
// Exports: default

// Module 287 (usePressability)
import normalizeDelay from "normalizeDelay" /* 288 */;
import module_1 from "module_1" /* 1 */;
import closure_1 from "getIteratorFn" /* 119 */;

let closure_0 = module_1(normalizeDelay);

export default function usePressability(arg0) {
  const mod = arg0;
  const ref = current.useRef(null);
  if (arg0 != null) {
    if (ref.current == null) {
      let _default = mod.default;
      const prototype = _default.prototype;
      _default = new _default(arg0);
      ref.current = _default;
    }
  }
  current = ref.current;
  const items = [arg0, current];
  const effect = current.useEffect(() => {
    if (closure_0 != null) {
      if (current != null) {
        current.configure(closure_0);
      }
    }
  }, items);
  const items1 = [current];
  const effect1 = current.useEffect(() => current != null ? (() => {
    closure_1_1.reset();
  }) : undefined, items1);
  let eventHandlers = null;
  if (current != null) {
    eventHandlers = current.getEventHandlers();
  }
  return eventHandlers;
};
