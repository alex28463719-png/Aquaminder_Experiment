// Module ID: 453
// Function ID: 5182
// Name: getState
// Dependencies: [1, 191, 30, 20, 454]
// Exports: addChangeListener, getColorScheme, setColorScheme

// Module 453 (getState)
import invariant from "invariant" /* 20 */;
import allocate from "allocate" /* 30 */;
import NativeEventEmitter from "NativeEventEmitter" /* 191 */;
import module_1 from "module_1" /* 1 */;

function getState() {
  if (obj != null) {
    return obj;
  } else {
    let _default2 = mod2.default;
    const prototype2 = _default2.prototype;
    _default2 = new _default2();
    const _default3 = _default2(obj[4]).default;
    if (_default3 == null) {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: _default2 };
    } else {
      obj = { NativeAppearance: _default3, appearance: null, eventEmitter: _default2 };
      let _default = mod.default;
      const prototype = _default.prototype;
      _default = new _default(_default3);
      _default.addListener("appearanceChanged", (colorScheme) => {
        obj = {};
        colorScheme = colorScheme.colorScheme;
        closure_1_7(colorScheme);
        obj.colorScheme = colorScheme;
        obj.appearance = obj;
        _default2.emit("change", obj.appearance);
      });
    }
    return obj;
  }
}
function toColorScheme(colorScheme) {
  let tmp = colorScheme === "dark";
  if (!tmp) {
    tmp = colorScheme === "light";
  }
  if (!tmp) {
    tmp = colorScheme == null;
  }
  closure_4.default(tmp, "Unrecognized color scheme. Did you mean 'dark', 'light' or null?");
  return colorScheme;
}
let closure_2 = module_1(NativeEventEmitter);
let closure_3 = module_1(allocate);
let closure_4 = module_1(invariant);

export function addChangeListener(arg0) {
  const eventEmitter = getState().eventEmitter;
  return eventEmitter.addListener("change", arg0);
}
export function getColorScheme() {
  const tmp = getState();
  const NativeAppearance = tmp.NativeAppearance;
  let colorScheme1 = null;
  if (NativeAppearance != null) {
    if (tmp.appearance == null) {
      const obj = {};
      const colorScheme = NativeAppearance.getColorScheme();
      toColorScheme(colorScheme);
      obj.colorScheme = colorScheme;
      tmp.appearance = obj;
    }
    colorScheme1 = tmp.appearance.colorScheme;
  }
  return colorScheme1;
}
export function setColorScheme(arg0) {
  const tmp = getState();
  const NativeAppearance = tmp.NativeAppearance;
  if (NativeAppearance != null) {
    let str = "unspecified";
    if (arg0 != null) {
      str = arg0;
    }
    NativeAppearance.setColorScheme(str);
    const obj = {};
    const colorScheme = NativeAppearance.getColorScheme();
    toColorScheme(colorScheme);
    obj.colorScheme = colorScheme;
    tmp.appearance = obj;
  }
}
