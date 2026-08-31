// Module ID: 959
// Function ID: 10301
// Name: _typeof
// Dependencies: []

// Module 959 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    let _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      let fn = (arg0) => typeof arg0;
    }
    return fn(arg0);
  }
  fn = (arg0) => {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}
function _classCallCheck(arg0, arg1) {
  if (!(arg0 instanceof arg1)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot call a class as a function");
    throw typeError;
  }
}
function _defineProperties(arg0, arg1) {
  for (let num = 0; num < arg1.length; num = num + 1) {
    let tmp = arg1[num];
    let flag = tmp.enumerable;
    let tmp2 = num;
    if (!flag) {
      flag = false;
    }
    tmp.enumerable = flag;
    tmp.configurable = true;
    if ("value" in tmp) {
      tmp.writable = true;
    }
    let _Object = Object;
    let tmp3 = _toPropertyKey;
    let definePropertyResult = Object.defineProperty(arg0, _toPropertyKey(tmp.key), tmp);
  }
}
function _createClass(arg0, arg1, arg2) {
  if (arg1) {
    _defineProperties(arg0.prototype, arg1);
  }
  if (arg2) {
    _defineProperties(arg0, arg2);
  }
  Object.defineProperty(arg0, "prototype", { writable: false });
  return arg0;
}
function _toPrimitive(closure_1) {
  if (typeof closure_1 === "object") {
    if (closure_1 !== null) {
      const _Symbol = Symbol;
      if (closure_1[Symbol.toPrimitive] !== undefined) {
        const callResult = obj.call(closure_1, "string");
        if (typeof callResult !== "object") {
          return callResult;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        return String(closure_1);
      }
    }
  }
  return closure_1;
}
function _toPropertyKey(arg0) {
  const tmp = _toPrimitive(arg0, "string");
  let StringResult = tmp;
  if (typeof tmp !== "symbol") {
    const _String = String;
    StringResult = String(tmp);
  }
  return StringResult;
}
function _classPrivateFieldGet(closure_1, has) {
  return _classApplyDescriptorGet(closure_1, _classExtractFieldDescriptor(closure_1, has, "get"));
}
function _classPrivateFieldSet(closure_1, has, value) {
  _classApplyDescriptorSet(closure_1, _classExtractFieldDescriptor(closure_1, has, "set"), value);
  return value;
}
function _classExtractFieldDescriptor(closure_1, has, get) {
  if (has.has(closure_1)) {
    return has.get(closure_1);
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to " + get + " private field on non-instance");
    throw typeError;
  }
}
function _classApplyDescriptorGet(closure_1, get) {
  if (get.get) {
    get = get.get;
    return get.call(closure_1);
  } else {
    return get.value;
  }
}
function _classApplyDescriptorSet(closure_1, set, value) {
  if (set.set) {
    set.set.call(closure_1, value);
    set = set.set;
  } else if (set.writable) {
    set.value = value;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("attempted to set read only private field");
    throw typeError;
  }
}
function _checkPrivateRedeclaration(arg0, has) {
  if (has.has(arg0)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot initialize the same private elements twice on an object");
    throw typeError;
  }
}
function _classPrivateFieldInitSpec(arg0, set) {
  _checkPrivateRedeclaration(arg0, set);
  const result = set.set(arg0, arg2);
}
function getType(type) {
  const tmp = hasOwnProperty.call(type, "type") && type.type;
  if (tmp) {
    if (tmp !== "cardinal") {
      if (tmp !== "ordinal") {
        const _RangeError = RangeError;
        const _JSON = JSON;
        const rangeError = new RangeError("Not a valid plural type: " + JSON.stringify(tmp));
        throw rangeError;
      }
    }
    return tmp;
  } else {
    return "cardinal";
  }
}
function toNumber(arg0) {
  const tmp = _typeof(arg0);
  if ("number" === tmp) {
    return arg0;
  } else if ("bigint" === tmp) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert a BigInt value to a number");
    throw typeError;
  } else {
    const _Number = Number;
    return Number(arg0);
  }
}
function canonicalizeLocaleList(arg0) {
  let str4;
  if (arg0) {
    const _Array = Array;
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    const obj = {};
    let num2 = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp3 = arr[num2];
        let tmp4 = num2;
        str4 = tmp3;
        if (tmp3) {
          let tmp5 = _typeof;
          str4 = tmp3;
          if (_typeof(tmp3) === "object") {
            let _String = String;
            str4 = String(tmp3);
          }
        }
        if (typeof str4 !== "string") {
          break;
        } else {
          let parts = str4.split("-");
          if (parts.every((replaced) => /[a-z0-9]+/i.test(replaced))) {
            let str7 = parts[0];
            let formatted = str7.toLowerCase();
            let tmp11 = { in: "id", iw: "he", ji: "yi" }[formatted];
            let tmp12 = formatted;
            if (tmp11 !== null) {
              tmp12 = formatted;
              if (tmp11 !== undefined) {
                tmp12 = tmp11;
              }
            }
            parts[0] = tmp12;
            obj[parts.join("-")] = true;
            num2 = num2 + 1;
          } else {
            let _JSON = JSON;
            let str5 = "The locale ";
            let concat = "The locale ".concat;
            let str6 = " is not a structurally valid BCP 47 language tag.";
            let _RangeError = RangeError;
            let tmp6 = new.target;
            let tmp7 = new.target;
            let rangeError = new RangeError("The locale ".concat(JSON.stringify(str4), " is not a structurally valid BCP 47 language tag."));
            let tmp9 = rangeError;
            throw rangeError;
          }
        }
      }
      const concat2 = "Locales should be strings, ".concat;
      const _JSON2 = JSON;
      const _TypeError = TypeError;
      const typeError = new TypeError("Locales should be strings, ".concat(JSON.stringify(str4), " isn't."));
      throw typeError;
    }
    const _Object = Object;
    return Object.keys(obj);
  } else {
    return [];
  }
}

export default function getPluralRules(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  function findLocale(PluralRules, items, items1) {
    let str = PluralRules;
    while (!callback2(str)) {
      str = str.replace(/-?[^-]*$/, "");
      if (str) {
        continue;
      } else {
        let tmp = null;
        return null;
      }
    }
    return str;
  }
  function resolveLocale(arg0) {
    const arr = callback(arg0);
    let num = 0;
    if (0 < arr.length) {
      const tmp2 = findLocale(arr[num]);
      while (!tmp2) {
        num = num + 1;
      }
      return tmp2;
    }
    return findLocale(new callback().resolvedOptions().locale);
  }
  const weakMap = new WeakMap();
  const weakMap1 = new WeakMap();
  const weakMap2 = new WeakMap();
  const weakMap3 = new WeakMap();
  const weakMap4 = new WeakMap();
  const tmp6 = (() => {
    class PluralRules {
      constructor() {
        self = this;
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            first = arguments[0];
          }
          num = 1;
          if (arguments.length > 1) {
            if (arguments[1] !== undefined) {
              obj = arguments[1];
            }
            tmp2 = closure_2;
            tmp3 = PluralRules;
            tmp4 = closure_2(self, PluralRules);
            tmp5 = closure_2_13;
            tmp6 = closure_1_6;
            obj = {};
            flag = true;
            obj.writable = true;
            obj.value = undefined;
            tmp7 = closure_2_13(self, closure_1_6, obj);
            tmp8 = closure_1_7;
            obj1 = {};
            obj1.writable = true;
            obj1.value = undefined;
            tmp9 = closure_2_13(self, closure_1_7, obj1);
            tmp10 = closure_1_8;
            obj2 = {};
            obj2.writable = true;
            obj2.value = undefined;
            tmp11 = closure_2_13(self, closure_1_8, obj2);
            tmp12 = closure_1_9;
            obj3 = {};
            obj3.writable = true;
            obj3.value = undefined;
            tmp13 = closure_2_13(self, closure_1_9, obj3);
            tmp14 = closure_1_10;
            obj4 = {};
            obj4.writable = true;
            obj4.value = undefined;
            tmp15 = closure_2_13(self, closure_1_10, obj4);
            tmp16 = closure_8;
            tmp17 = closure_1_5;
            tmp18 = closure_8(self, closure_1_6, closure_1_5([]));
            tmp19 = closure_1_1;
            tmp20 = closure_7;
            tmp21 = closure_8(self, closure_1_8, closure_1_1(closure_7(self, closure_1_6)));
            tmp22 = closure_1_3;
            tmp23 = closure_8(self, closure_1_7, closure_1_3(closure_7(self, closure_1_6)));
            tmp24 = closure_2_14;
            tmp25 = closure_8(self, closure_1_9, closure_2_14(obj));
            tmp26 = PluralRules;
            prototype = PluralRules.prototype;
            tmp27 = new.target;
            str = "en";
            tmp28 = new.target;
            tmp29 = obj;
            tmp30 = new PluralRules("en", obj);
            tmp31 = tmp30;
            tmp32 = closure_8(self, closure_1_10, tmp30);
            return;
          }
          obj = {};
        }
        return;
      }
    }
    let obj = {
      key: "resolvedOptions",
      value: function resolvedOptions() {
        const self = this;
        let obj = weakMap1(this, closure_1_10);
        const resolvedOptionsResult = obj.resolvedOptions();
        ({ minimumSignificantDigits, roundingPriority } = resolvedOptionsResult);
        obj = { locale: weakMap1(this, closure_1_6), type: weakMap1(this, closure_1_9), minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits };
        ({ minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, maximumSignificantDigits } = resolvedOptionsResult);
        if (typeof minimumSignificantDigits === "number") {
          obj.minimumSignificantDigits = minimumSignificantDigits;
          obj.maximumSignificantDigits = maximumSignificantDigits;
        }
        const tmp2 = weakMap1(self, closure_1_6);
        obj.pluralCategories = closure_1_2(weakMap1(self, closure_1_6), weakMap1(self, closure_1_9) === "ordinal").slice(0);
        if (!roundingPriority) {
          roundingPriority = "auto";
        }
        obj.roundingPriority = roundingPriority;
        return obj;
      }
    };
    const items = [obj, , ];
    obj = {
      key: "select",
      value: function select(_days) {
        const self = this;
        if (this instanceof PluralRules) {
          let NumberResult = _days;
          if (typeof _days !== "number") {
            const _Number = Number;
            NumberResult = Number(_days);
          }
          const _isFinite = isFinite;
          if (isFinite(NumberResult)) {
            const _Math = Math;
            const obj = weakMap1(self, closure_1_10);
            const formatResult = weakMap1(self, closure_1_10).format(Math.abs(NumberResult));
            return weakMap1(self, closure_1_8).call(self, formatResult, weakMap1(self, closure_1_9) === "ordinal");
          } else {
            return "other";
          }
        } else {
          const _TypeError = TypeError;
          const concat = "select() called on incompatible ".concat;
          const typeError = new TypeError("select() called on incompatible ".concat(self));
          throw typeError;
        }
      }
    };
    items[1] = obj;
    obj = {
      key: "selectRange",
      value: function selectRange(arg0, arg1) {
        const self = this;
        if (this instanceof PluralRules) {
          if (arg0 === undefined) {
            const _TypeError3 = TypeError;
            const typeError = new TypeError("start is undefined");
            throw typeError;
          } else if (arg1 === undefined) {
            const _TypeError2 = TypeError;
            const typeError1 = new TypeError("end is undefined");
            throw typeError1;
          } else {
            const tmp28 = closure_2_15(arg0);
            const tmp29 = closure_2_15(arg1);
            const _isFinite2 = isFinite;
            if (isFinite(tmp28)) {
              const _isFinite = isFinite;
              if (isFinite(tmp29)) {
                const obj = weakMap1(self, closure_1_7);
                return obj.call(self, self.select(tmp28), self.select(tmp29));
              } else {
                const _RangeError2 = RangeError;
                const rangeError = new RangeError("end must be finite");
                throw rangeError;
              }
            } else {
              const _RangeError = RangeError;
              const rangeError1 = new RangeError("start must be finite");
              throw rangeError1;
            }
          }
        } else {
          const _TypeError = TypeError;
          const concat = "selectRange() called on incompatible ".concat;
          const typeError2 = new TypeError("selectRange() called on incompatible ".concat(self));
          throw typeError2;
        }
      }
    };
    items[2] = obj;
    const items1 = [
      {
        key: "supportedLocalesOf",
        value: function supportedLocalesOf(items) {
          return PluralRules(items).filter(closure_1_4);
        }
      }
    ];
    findLocale(PluralRules, items, items1);
    return PluralRules;
  })();
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    if (Symbol.toStringTag) {
      const _Object = Object;
      const _Symbol2 = Symbol;
      Object.defineProperty(tmp6.prototype, Symbol.toStringTag, { value: "Intl.PluralRules", writable: false, configurable: true });
    }
  }
  Object.defineProperty(tmp6, "prototype", { writable: false });
  return tmp6;
};
