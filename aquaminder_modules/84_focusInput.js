// Module ID: 84
// Function ID: 1188
// Name: focusInput
// Dependencies: [57, 85]

// Module 84 (focusInput)
import keys from "keys" /* 57 */;
import Commands2 from "Commands" /* 85 */;

require = arg1;
const dependencyMap = arg6;
function focusInput(current) {
  if (closure_2 !== current) {
    if (current != null) {
      closure_2 = current;
    }
  }
}
function blurInput(current) {
  if (c2 === current) {
    if (current != null) {
      c2 = null;
    }
  }
}
arg5.default = undefined;
let c2 = null;
const set = new Set();
arg5.default = {
  currentlyFocusedInput() {
    return c2;
  },
  focusInput,
  blurInput,
  currentlyFocusedField() {
    return keys.findNodeHandle(c2);
  },
  focusField(arg0) {

  },
  blurField(arg0) {

  },
  focusTextInput(current) {
    if (typeof current !== "number") {
      if (current != null) {
        let tmp3 = c2 !== current;
        if (tmp3) {
          const currentProps = current.currentProps;
          let editable;
          if (currentProps != null) {
            editable = currentProps.editable;
          }
          tmp3 = editable !== false;
        }
        if (tmp3) {
          focusInput(current);
          const Commands = Commands2.Commands;
          Commands.focus(current);
        }
      }
    }
  },
  blurTextInput(result) {
    if (typeof result !== "number") {
      if (c2 === result) {
        if (result != null) {
          blurInput(result);
          const Commands = Commands2.Commands;
          Commands.blur(result);
        }
      }
    }
  },
  registerInput(current) {
    if (typeof current !== "number") {
      set.add(current);
    }
  },
  unregisterInput(current) {
    if (typeof current !== "number") {
      set.delete(current);
    }
  },
  isTextInput(result) {
    if (typeof result === "number") {
      return false;
    } else {
      return set.has(result);
    }
  }
};
