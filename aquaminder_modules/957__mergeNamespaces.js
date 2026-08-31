// Module ID: 957
// Function ID: 10201
// Name: _mergeNamespaces
// Dependencies: [958]

// Module 957 (_mergeNamespaces)
import _mergeNamespaces from "_mergeNamespaces" /* 958 */;

if (_mergeNamespaces) {
  if (typeof _mergeNamespaces === "object") {
    let obj = _mergeNamespaces;
  }
  const _Intl = Intl;
  if (typeof Intl === "undefined") {
    if (typeof global !== "undefined") {
      obj = {};
      obj.PluralRules = obj.default;
      global.Intl = obj;
      obj = true;
      obj.default.polyfill = true;
    } else {
      const _window = window;
      if (typeof window === "undefined") {
        obj = {};
        obj.PluralRules = obj.default;
        const self = this;
        this.Intl = obj;
      }
    }
    const obj1 = { PluralRules: obj.default };
    tmp2.window.Intl = obj1;
  } else {
    const _Intl5 = Intl;
    if (Intl.PluralRules) {
      const _Intl2 = Intl;
      if (Intl.PluralRules.prototype.selectRange) {
        const items = ["en", "es", "ru", "zh"];
        const _Intl4 = Intl;
        if (PluralRules.supportedLocalesOf(items).length < items.length) {
          const _Intl6 = Intl;
          Intl.PluralRules = obj.default;
          obj.default.polyfill = true;
        }
      }
    }
    const _Intl3 = Intl;
    Intl.PluralRules = obj.default;
    obj.default.polyfill = true;
  }
  tmp2 = globalThis;
}
obj = { default: _mergeNamespaces };
