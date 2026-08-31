// Module ID: 320
// Function ID: 3821
// Name: reject
// Dependencies: [20]

// Module 320 (reject)
import invariant from "invariant" /* 20 */;

require = arg1;
const dependencyMap = arg6;
function reject(arg0) {
  closure_0 = arg0;
  const timerId = setTimeout(() => {
    throw closure_0;
  }, 0);
}
arg5.default = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const immediate = setImmediate(() => {
        if (typeof lib === "object") {
          if (lib !== null) {
            if (typeof lib.gen === "function") {
              lib.gen().then(lib, closure_2_2);
              const genResult = lib.gen();
            } else if (typeof lib.run === "function") {
              try {
                lib.run();
                lib();
              } catch (tmp31) {
                closure_2_2(tmp31);
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal = HermesInternal;
              const typeError = new TypeError("Task \"" + lib.name + "\" missing gen or run.");
              closure_2_2(typeError);
            }
          }
        }
        if (typeof lib === "function") {
          try {
            lib();
            lib();
          } catch (tmp15) {
            closure_2_2(tmp15);
          }
        } else {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Invalid task of type: " + typeof lib);
          closure_2_2(typeError1);
        }
      });
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        clearImmediate(closure_1);
      }
    };
  },
  createInteractionHandle() {
    return -1;
  },
  clearInteractionHandle(arg0) {
    invariant(arg0, "InteractionManager: Must provide a handle to clear.");
  },
  addListener() {
    return {
      remove() {

      }
    };
  },
  setDeadline(arg0) {

  }
};
