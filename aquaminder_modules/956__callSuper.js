// Module ID: 956
// Function ID: 9955
// Name: _callSuper
// Dependencies: [1, 134, 99, 633, 6, 23, 25, 28, 38, 12, 13]

// Module 956 (_callSuper)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import _defineProperty from "_defineProperty" /* 99 */;
import _readOnlyError2 from "_readOnlyError" /* 134 */;
import _toArray from "_toArray" /* 633 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_4.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_4.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_3.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const _readOnlyError = module_1(_readOnlyError2);
let closure_0 = module_1(_defineProperty);
let closure_1 = module_1(_toArray);
let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_possibleConstructorReturn);
let closure_4 = module_1(_getPrototypeOf);
let closure_5 = module_1(_inherits);
let closure_6 = module_1(_slicedToArray);
let closure_7 = module_1(_classCallCheck);
let closure_8 = module_1(_defineProperties);
function isString(str) {
  return typeof str === "string";
}
function defer() {
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
  });
  promise.resolve = closure_0;
  promise.reject = closure_1;
  return promise;
}
function makeString(arg0) {
  if (arg0 == null) {
    return "";
  } else {
    return "" + arg0;
  }
}
function copy(arr) {
  closure_0 = arg1;
  closure_1 = arg2;
  const item = arr.forEach((arg0) => {
    if (dependencyMap[arg0]) {
      closure_1[arg0] = dependencyMap[arg0];
    }
  });
}
const re13 = /###/g;
function cleanKey(arr) {
  let replaced = arr;
  if (arr) {
    replaced = arr;
    if (arr.indexOf("###") > -1) {
      replaced = arr.replace(closure_13, ".");
    }
  }
  return replaced;
}
function canNotTraverseDeeper(closure_1) {
  let tmp = !closure_1;
  if (!tmp) {
    tmp = isString(closure_1);
  }
  return tmp;
}
function getLastOfPath(closure_1, substr, Object) {
  let parts = substr;
  if (isString(substr)) {
    parts = substr.split(".");
  }
  let num = 0;
  let tmp = closure_1;
  let tmp2 = closure_1;
  let num2 = 0;
  if (0 < parts.length - 1) {
    while (!canNotTraverseDeeper(tmp)) {
      let tmp6 = cleanKey;
      let tmp7 = cleanKey(parts[num]);
      if (!tmp[tmp7]) {
        if (Object) {
          let prototype = Object.prototype;
          let tmp8 = new.target;
          let tmp9 = new.target;
          let tmp10 = new Object();
          let tmp11 = tmp10;
          tmp[tmp7] = tmp10;
        }
      }
      let _Object = Object;
      let tmp12 = hasOwnProperty.call(tmp, tmp7) ? tmp[tmp7] : {};
      num = num + 1;
      tmp = tmp12;
      tmp2 = tmp12;
      num2 = num;
    }
    return {};
  }
  if (canNotTraverseDeeper(tmp2)) {
    return {};
  } else {
    obj = { obj: tmp2, k: cleanKey(parts[num2]) };
    return obj;
  }
}
function setPath(closure_1, arr) {
  ({ obj, k } = getLastOfPath(closure_1, arr, Object));
  if (obj === undefined) {
    if (arr.length !== 1) {
      let substr = arr.slice(0, arr.length - 1);
      const _Object2 = Object;
      const tmp10 = getLastOfPath(closure_1, substr, Object);
      let tmp5 = tmp8;
      let tmp6 = tmp10;
      if (tmp10.obj === undefined) {
        let tmp7 = tmp8;
        tmp5 = tmp8;
        tmp6 = tmp10;
        if (substr.length) {
          while (true) {
            let _HermesInternal = HermesInternal;
            let combined = "" + substr[substr.length - 1] + "." + tmp7;
            let substr1 = substr.slice(0, substr.length - 1);
            let tmp3 = getLastOfPath;
            let _Object = Object;
            let tmp4 = getLastOfPath(closure_1, substr1, Object);
            if (tmp4 != null) {
              if (tmp4.obj) {
                let _HermesInternal2 = HermesInternal;
                if (typeof tmp4.obj["" + tmp4.k + "." + combined] !== "undefined") {
                  tmp4.obj = undefined;
                }
              }
            }
            tmp5 = combined;
            tmp6 = tmp4;
            if (tmp4.obj !== undefined) {
              break;
            } else {
              tmp7 = combined;
              substr = substr1;
              tmp5 = combined;
              tmp6 = tmp4;
              if (!substr1.length) {
                break;
              }
            }
          }
        }
      }
      const _HermesInternal3 = HermesInternal;
      tmp6.obj["" + tmp6.k + "." + tmp5] = arg2;
    }
  }
  obj[k] = arg2;
}
function pushPath(closure_1, substr) {
  ({ obj, k } = getLastOfPath(closure_1, substr, Object));
  obj[k] = obj[k] || [];
  let arr = obj[k];
  arr = arr.push(arg2);
}
function getPath(closure_1, substr) {
  ({ obj, k } = getLastOfPath(closure_1, substr));
  if (obj) {
    const _Object = Object;
    if (hasOwnProperty.call(obj, k)) {
      return obj[k];
    }
  }
  const tmp = getLastOfPath(closure_1, substr);
}
function getPathWithDefaults(closure_1, closure_1, substr) {
  const tmp = getPath(closure_1, substr);
  if (tmp !== undefined) {
    return tmp;
  } else {
    return getPath(closure_1, substr);
  }
}
function deepExtend(arg0, obj, arg2) {
  for (const key10009 in arg1) {
    let tmp5 = key10009;
    if (key10009 === "__proto__") {
      continue;
    } else {
      if (key10009 === "constructor") {
        continue;
      } else {
        if (key10009 in arg0) {
          let tmp = isString;
          if (!isString(arg0[key10009])) {
            let _String = String;
            if (!(arg0[key10009] instanceof String)) {
              let tmp2 = isString;
              if (!isString(arg1[key10009])) {
                let _String2 = String;
                if (!(arg1[key10009] instanceof String)) {
                  let tmp3 = deepExtend;
                  let tmp4 = deepExtend(arg0[key10009], arg1[key10009], arg2);
                  continue;
                }
                continue;
              }
            }
          }
          if (!arg2) {
            continue;
          } else {
            arg0[key10009] = arg1[key10009];
            continue;
          }
          continue;
        } else {
          arg0[key10009] = arg1[key10009];
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  return arg0;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
let closure_23 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;", "/": "&#x2F;" };
function escape(str) {
  if (isString(str)) {
    return str.replace(/[&<>"'\/]/g, (arg0) => closure_1_23[arg0]);
  } else {
    return str;
  }
}
let tmp4 = (() => {
  class RegExpCache {
    constructor(arg0) {
      defaultResult = closure_1_7.default(this, RegExpCache);
      this.capacity = arg0;
      map = new Map();
      this.regExpMap = map;
      this.regExpQueue = [];
      return;
    }
  }
  const items = [
    {
      key: "getRegExp",
      value: function getRegExp(arg0) {
        const self = this;
        const regExpMap = this.regExpMap;
        const value = regExpMap.get(arg0);
        if (value !== undefined) {
          return value;
        } else {
          const _RegExp = RegExp;
          const regExp = new RegExp(arg0);
          if (self.regExpQueue.length === self.capacity) {
            ({ regExpMap: regExpMap2, regExpQueue } = self);
            regExpMap2.delete(regExpQueue.shift());
          }
          const regExpMap3 = self.regExpMap;
          const result = regExpMap3.set(arg0, regExp);
          regExpQueue = self.regExpQueue;
          regExpQueue.push(arg0);
          return regExp;
        }
      }
    }
  ];
  return closure_8.default(RegExpCache, items);
})();
let closure_25 = [" ", ",", "?", "!", ";"];
tmp4 = new tmp4(20);
let closure_26 = tmp4;
function looksLikeObjectPath(arr) {
  let str = arg1;
  let str2 = arg2;
  str = arg1;
  str2 = arg2;
  if (!arg1) {
    str = "";
  }
  if (!str2) {
    str2 = "";
  }
  const found = closure_25.filter((arg0) => {
    let tmp = str.indexOf(arg0) < 0;
    if (tmp) {
      tmp = str2.indexOf(arg0) < 0;
    }
    return tmp;
  });
  if (found.length === 0) {
    return true;
  } else {
    const mapped = found.map((arg0) => {
      str = "\\?";
      if (arg0 !== "?") {
        str = arg0;
      }
      return str;
    });
    const _HermesInternal = HermesInternal;
    regExp = regExp.getRegExp("(" + mapped.join("|") + ")");
    const tmp4 = !regExp.test(arr);
    let flag = tmp4;
    if (!tmp4) {
      const index = arr.indexOf(str2);
      flag = tmp4;
      if (index > 0) {
        flag = tmp4;
        if (!regExp.test(arr.substring(0, index))) {
          flag = true;
        }
      }
    }
    return flag;
  }
}
function deepFind(closure_1, key10018, arg2) {
  let str = ".";
  if (arguments.length > 2) {
    str = ".";
    if (arguments[2] !== undefined) {
      str = arguments[2];
    }
  }
  if (closure_1) {
    if (closure_1[key10018]) {
      const _Object = Object;
      if (hasOwnProperty.call(closure_1, key10018)) {
        return closure_1[key10018];
      }
    } else {
      const parts = key10018.split(str);
      let num = 0;
      let tmp = closure_1;
      let tmp2 = closure_1;
      if (0 < parts.length) {
        while (tmp) {
          if (typeof tmp !== "object") {
            break;
          } else {
            let str4 = "";
            let sum1 = num;
            let sum2 = num;
            let tmp11;
            if (num < parts.length) {
              while (true) {
                let tmp5 = str4;
                let tmp6 = sum1;
                let text = str4;
                if (sum1 !== num) {
                  text = `${str}`;
                }
                let sum = text + parts[sum1];
                let tmp9 = tmp[sum];
                if (tmp9 === undefined) {
                  sum1 = sum1 + 1;
                  str4 = sum;
                  sum2 = num;
                  tmp11 = tmp9;
                } else {
                  let items = ["string", "number", "boolean"];
                  if (items.indexOf(typeof tmp9) <= -1) {
                    break;
                  } else if (sum1 >= parts.length - 1) {
                    break;
                  }
                }
              }
              sum2 = num + (sum1 - num + 1);
              tmp11 = tmp9;
            }
            num = sum2;
            tmp = tmp11;
            tmp2 = tmp11;
          }
        }
      }
      return tmp2;
    }
  }
}
function getCleanedCode(str) {
  let replaced;
  if (str != null) {
    replaced = str.replace("_", "-");
  }
  return replaced;
}
let obj = {
  type: "logger",
  log(arg0) {
    this.output("log", arg0);
  },
  warn(arg0) {
    this.output("warn", arg0);
  },
  error(arg0) {
    this.output("error", arg0);
  },
  output(error, arg1) {
    let tmp2 = console == null;
    let _console = console;
    if (!tmp2) {
      tmp2 = tmp4 == null;
      _console = tmp4;
    }
    if (!tmp2) {
      tmp2 = _console.apply == null;
    }
    if (!tmp2) {
      const _console2 = console;
      _console.apply(console, arg1);
    }
  }
};
let tmp6 = (() => {
  class Logger {
    constructor(arg0) {
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          tmp = arguments[1];
        }
        tmp2 = closure_1_7;
        tmp3 = Logger;
        defaultResult = closure_1_7.default(self, Logger);
        tmp5 = arg0;
        initResult = self.init(arg0, {});
        return;
      }
      return;
    }
  }
  obj = {
    key: "init",
    value: function init(arg0) {
      let tmp = arg0;
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          obj = arguments[1];
        }
        self.prefix = obj.prefix || "i18next:";
        if (!tmp) {
          tmp = closure_1_30;
        }
        self.logger = tmp;
        self.options = obj;
        self.debug = obj.debug;
      }
      obj = {};
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "log",
    value: function log() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self.forward(array, "log", "", true);
    }
  };
  items[1] = obj;
  obj = {
    key: "warn",
    value: function warn() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self.forward(array, "warn", "", true);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "error",
    value: function error() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self.forward(array, "error", "");
    }
  };
  items[4] = {
    key: "deprecate",
    value: function deprecate() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      return self.forward(array, "warn", "WARNING DEPRECATED: ", true);
    }
  };
  items[5] = {
    key: "forward",
    value: function forward(array, warn, arg2, arg3) {
      const self = this;
      if (arg3) {
        if (!self.debug) {
          return null;
        }
      }
      if (closure_1_9(array[0])) {
        const _HermesInternal = HermesInternal;
        array[0] = "" + arg2 + self.prefix + " " + array[0];
      }
      const logger = self.logger;
      return logger[warn](array);
    }
  };
  items[6] = {
    key: "create",
    value: function create(arg0) {
      obj = { prefix: "" + this.prefix + ":" + arg0 + ":" };
      return new Logger(this.logger, Object.assign({}, { prefix: "" + this.prefix + ":" + arg0 + ":" }, this.options));
    }
  };
  items[7] = {
    key: "clone",
    value: function clone(options) {
      const self = this;
      if (!options) {
        options = self.options;
      }
      options.prefix = options.prefix || self.prefix;
      return new Logger(self.logger, options);
    }
  };
  return closure_8.default(Logger, items);
})();
tmp6 = new tmp6();
let closure_31 = tmp6;
let tmp8 = (() => {
  class EventEmitter {
    constructor() {
      defaultResult = closure_1_7.default(this, EventEmitter);
      this.observers = {};
      return;
    }
  }
  obj = {
    key: "on",
    value: function on(bindI18n, boundReset) {
      closure_0 = boundReset;
      const self = this;
      const parts = bindI18n.split(" ");
      const item = parts.forEach((arg0) => {
        if (!self.observers[arg0]) {
          const _Map = Map;
          const map = new Map();
          self.observers[arg0] = map;
        }
        const result = self.observers[arg0].set(closure_0, (self.observers[arg0].get(closure_0) || 0) + 1);
      });
      return this;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "off",
    value: function off(initialized, closure_1_2) {
      if (this.observers[initialized]) {
        if (closure_1_2) {
          this.observers[initialized].delete(closure_1_2);
        } else {
          delete tmp[tmp2];
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "emit",
    value: function emit(arg0) {
      const self = this;
      closure_0 = arg0;
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      if (self.observers[arg0]) {
        const _Array = Array;
        let arr = Array.from(self.observers[arg0].entries());
        const item = arr.forEach((arg0) => {
          const defaultResult = closure_2_6.default(arg0, 2);
          let num = 0;
          const first = defaultResult[0];
          if (0 < defaultResult[1]) {
            do {
              let tmp3 = array;
              let applyResult = first.apply(undefined, array);
              num = num + 1;
            } while (num < tmp2);
          }
        });
        obj = self.observers[arg0];
      }
      if (self.observers["*"]) {
        const _Array2 = Array;
        _ = self.observers["*"];
        arr = Array.from(_.entries());
        const item1 = arr.forEach((arg0) => {
          const defaultResult = closure_2_6.default(arg0, 2);
          let num = 0;
          const first = defaultResult[0];
          if (0 < defaultResult[1]) {
            do {
              let tmp3 = closure_0;
              let items = [closure_0];
              let tmp4 = array;
              let applyResult = first.apply(first, items.concat(array));
              num = num + 1;
            } while (num < tmp2);
          }
        });
      }
    }
  };
  items[2] = obj;
  return closure_8.default(EventEmitter, items);
})();
let closure_32 = ((arg0) => {
  class ResourceStore {
    constructor(arg0) {
      obj = arg0;
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          tmp = arguments[1];
        }
        tmp2 = closure_1_7;
        tmp3 = ResourceStore;
        defaultResult = closure_1_7.default(self, ResourceStore);
        tmp5 = closure_1_54;
        tmp6 = closure_1_54(self, ResourceStore);
        if (!obj) {
          obj = {};
        }
        tmp6.data = obj;
        tmp6.options = { ns: ["translation"], defaultNS: "translation" };
        if (tmp6.options.keySeparator === undefined) {
          str = ".";
          tmp6.options.keySeparator = ".";
        }
        if (tmp6.options.ignoreJSONStructure === undefined) {
          flag = true;
          tmp6.options.ignoreJSONStructure = true;
        }
        return tmp6;
      }
      return;
    }
  }
  closure_5.default(ResourceStore, arg0);
  obj = {
    key: "addNamespaces",
    value: function addNamespaces(closure_3) {
      const ns = this.options.ns;
      if (ns.indexOf(closure_3) < 0) {
        const ns1 = this.options.ns;
        ns1.push(closure_3);
      }
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "removeNamespaces",
    value: function removeNamespaces(arg0) {
      const ns = this.options.ns;
      const index = ns.indexOf(arg0);
      if (index > -1) {
        const ns1 = this.options.ns;
        ns1.splice(index, 1);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getResource",
    value: function getResource(arr, arg1, str) {
      const self = this;
      if (arguments.length > 3) {
        if (arguments[3] !== undefined) {
          obj = arguments[3];
        }
        if (obj.keySeparator !== undefined) {
          let keySeparator = obj.keySeparator;
        } else {
          keySeparator = self.options.keySeparator;
        }
        if (obj.ignoreJSONStructure !== undefined) {
          let ignoreJSONStructure = obj.ignoreJSONStructure;
        } else {
          ignoreJSONStructure = self.options.ignoreJSONStructure;
        }
        if (arr.indexOf(".") > -1) {
          let parts = arr.split(".");
        } else {
          const items = [arr, arg1];
          parts = items;
          if (str) {
            const _Array = Array;
            if (Array.isArray(str)) {
              const push2 = items.push;
              push2.apply(items, closure_1_2.default(str));
              parts = items;
            } else {
              if (closure_1_9(str)) {
                if (keySeparator) {
                  const push = items.push;
                  push.apply(items, closure_1_2.default(str.split(keySeparator)));
                  parts = items;
                }
              }
              items.push(str);
              parts = items;
            }
          }
        }
        const tmp9 = closure_1_19(self.data, parts);
        let first = arr;
        let tmp12 = arg1;
        let joined = str;
        if (!tmp9) {
          first = arr;
          joined = str;
          tmp12 = arg1;
          if (!arg1) {
            first = arr;
            tmp12 = arg1;
            joined = str;
            if (!str) {
              first = arr;
              tmp12 = arg1;
              joined = str;
              if (arr.indexOf(".") > -1) {
                first = parts[0];
                tmp12 = parts[1];
                const substr = parts.slice(2);
                joined = substr.join(".");
              }
            }
          }
        }
        if (!tmp9) {
          if (ignoreJSONStructure) {
            if (closure_1_9(joined)) {
              const data = self.data;
              let tmp17;
              if (data != null) {
                if (data[first] != null) {
                  tmp17 = tmp18[tmp12];
                }
              }
              return closure_1_28(tmp17, joined, keySeparator);
            }
          }
        }
        return tmp9;
      }
      obj = {};
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addResource",
    value: function addResource(arr, closure_3, key, defaultValue, arg4) {
      let tmp = defaultValue;
      const self = this;
      if (arguments.length > 4) {
        if (arguments[4] !== undefined) {
          obj = arguments[4];
        }
        if (obj.keySeparator !== undefined) {
          let keySeparator = obj.keySeparator;
        } else {
          keySeparator = self.options.keySeparator;
        }
        const items = [arr, closure_3];
        let combined = items;
        if (key) {
          let parts = key;
          if (keySeparator) {
            parts = key.split(keySeparator);
          }
          combined = items.concat(parts);
        }
        let tmp4 = closure_3;
        if (arr.indexOf(".") > -1) {
          const parts1 = arr.split(".");
          tmp4 = parts1[1];
          tmp = closure_3;
          combined = parts1;
        }
        self.addNamespaces(tmp4);
        closure_1_17(self.data, combined, tmp);
        if (!obj.silent) {
          self.emit("added", arr, tmp9, key, tmp10);
        }
      }
      obj = { silent: false };
    }
  };
  items[4] = {
    key: "addResources",
    value: function addResources(arr, closure_3, obj) {
      const self = this;
      if (arguments.length > 3) {
        for (const key10015 in arg2) {
          let tmp16 = closure_1_9;
          let tmp15 = key10015;
          if (closure_1_9(arg2[key10015])) {
            obj = { silent: true };
            let tmp4 = self;
            let tmp5 = arg0;
            let tmp6 = arg1;
            let tmp7 = key10015;
            let tmp8 = obj;
            let addResourceResult = self.addResource(arg0, arg1, tmp15, arg2[key10015], obj);
            continue;
          } else {
            let _Array = Array;
          }
          continue;
        }
        if (!{ silent: false }.silent) {
          self.emit("added", arr, closure_3, obj);
        }
      }
    }
  };
  items[5] = {
    key: "addResourceBundle",
    value: function addResourceBundle(first, navigationKey, arg2, arg3, arg4, arg5) {
      let tmp = arg3;
      const self = this;
      if (arguments.length > 5) {
        if (arguments[5] !== undefined) {
          obj = arguments[5];
        }
        let items = [first, navigationKey];
        let tmp2 = navigationKey;
        let tmp3 = arg2;
        if (first.indexOf(".") > -1) {
          const parts = first.split(".");
          tmp2 = parts[1];
          tmp3 = navigationKey;
          tmp = arg2;
          items = parts;
        }
        self.addNamespaces(tmp2);
        const tmp7 = closure_1_19(self.data, items);
        obj = tmp7;
        if (!tmp7) {
          obj = {};
        }
        let parsed = tmp3;
        if (!obj.skipCopy) {
          const _JSON = JSON;
          const _JSON2 = JSON;
          parsed = JSON.parse(JSON.stringify(tmp3));
        }
        if (tmp) {
          closure_1_21(obj, parsed, arg4);
          let merged = obj;
        } else {
          const _Object = Object;
          merged = Object.assign({}, obj, parsed);
        }
        closure_1_17(self.data, items, merged);
        if (!obj.silent) {
          self.emit("added", first, tmp2, parsed);
        }
      }
      obj = { silent: false, skipCopy: false };
    }
  };
  items[6] = {
    key: "removeResourceBundle",
    value: function removeResourceBundle(closure_0) {
      const self = this;
      if (this.hasResourceBundle(closure_0, arg1)) {
        delete tmp[tmp2];
      }
      self.removeNamespaces(arg1);
      self.emit("removed", closure_0, arg1);
    }
  };
  items[7] = {
    key: "hasResourceBundle",
    value: function hasResourceBundle(closure_0, arg1) {
      return this.getResource(closure_0, arg1) !== undefined;
    }
  };
  items[8] = {
    key: "getResourceBundle",
    value: function getResourceBundle(closure_0, arg1) {
      let defaultNS = arg1;
      const self = this;
      if (!arg1) {
        defaultNS = self.options.defaultNS;
      }
      return self.getResource(closure_0, defaultNS);
    }
  };
  items[9] = {
    key: "getDataByLanguage",
    value: function getDataByLanguage(bestMatchFromCodes) {
      return this.data[bestMatchFromCodes];
    }
  };
  items[10] = {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(bestMatchFromCodes) {
      const dataByLanguage = this.getDataByLanguage(bestMatchFromCodes);
      let keys = dataByLanguage;
      if (dataByLanguage) {
        let _Object = Object;
        keys = Object.keys(dataByLanguage);
      }
      if (!keys) {
        keys = [];
      }
      return keys.find((arg0) => {
        let tmp = dataByLanguage[arg0];
        if (tmp) {
          const _Object = Object;
          tmp = Object.keys(dataByLanguage[arg0]).length > 0;
        }
        return tmp;
      });
    }
  };
  items[11] = {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  };
  return closure_8.default(ResourceStore, items);
})(tmp8);
let closure_33 = {
  processors: {},
  addPostProcessor(name) {
    this.processors[name.name] = name;
  },
  handle(arr) {
    closure_0 = arg1;
    closure_1 = arg2;
    closure_2 = arg3;
    closure_3 = arg4;
    const self = this;
    const item = arr.forEach((arg0) => {
      let processResult;
      if (self.processors[arg0] != null) {
        processResult = obj.process(closure_0, closure_1, closure_2, closure_3);
      }
      if (processResult == null) {
        processResult = closure_0;
      }
      closure_0 = processResult;
    });
    return closure_0;
  }
};
let closure_34 = {};
function shouldHandleAsObject(flag) {
  const tmp = isString(flag);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = typeof flag !== "boolean";
  }
  if (tmp2) {
    tmp2 = typeof flag !== "number";
  }
  return tmp2;
}
let closure_36 = ((arg0) => {
  class Translator {
    constructor(arg0) {
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          tmp = arguments[1];
        }
        tmp2 = closure_1_7;
        tmp3 = Translator;
        defaultResult = closure_1_7.default(self, Translator);
        tmp5 = closure_1_54;
        tmp6 = closure_1_54(self, Translator);
        tmp7 = closure_1_12;
        tmp8 = arg0;
        tmp9 = closure_1_12(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], arg0, tmp6);
        tmp6.options = {};
        if (tmp6.options.keySeparator === undefined) {
          str = ".";
          tmp6.options.keySeparator = ".";
        }
        tmp10 = closure_1_31;
        str2 = "translator";
        tmp6.logger = closure_1_31.create("translator");
        return tmp6;
      }
      return;
    }
  }
  closure_5.default(Translator, arg0);
  obj = {
    key: "changeLanguage",
    value: function changeLanguage(language) {
      if (language) {
        const self = this;
        this.language = language;
      }
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "exists",
    value: function exists(arg0) {
      const self = this;
      if (arguments.length > 1) {
        const _Object = Object;
        if (arg0 == null) {
          return false;
        } else {
          const resolveResult = self.resolve(arg0, tmp3);
          let res;
          if (resolveResult != null) {
            res = resolveResult.res;
          }
          return res !== undefined;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "extractFromKey",
    value: function extractFromKey(arr, closure_1) {
      const self = this;
      if (closure_1.nsSeparator !== undefined) {
        let str = closure_1.nsSeparator;
      } else {
        str = self.options.nsSeparator;
      }
      if (str === undefined) {
        str = ":";
      }
      if (closure_1.keySeparator !== undefined) {
        let keySeparator = closure_1.keySeparator;
      } else {
        keySeparator = self.options.keySeparator;
      }
      const tmp = closure_1.ns || self.options.defaultNS || [];
      let tmp2 = str;
      if (str) {
        tmp2 = arr.indexOf(str) > -1;
      }
      let tmp3 = !self.options.userDefinedKeySeparator && !closure_1.keySeparator && !self.options.userDefinedNsSeparator && !closure_1.nsSeparator;
      if (tmp3) {
        tmp3 = !closure_1_27(arr, str, keySeparator);
      }
      let joined = arr;
      let tmp6 = tmp;
      if (tmp2) {
        joined = arr;
        tmp6 = tmp;
        if (!tmp3) {
          const match = arr.match(self.interpolator.nestingRegexp);
          if (match) {
            if (match.length > 0) {
              obj = { key: arr };
              let tmp9 = tmp;
              if (closure_1_9(tmp)) {
                const items = [tmp];
                tmp9 = items;
              }
              obj.namespaces = tmp9;
              return obj;
            }
          }
          const parts = arr.split(str);
          if (str !== keySeparator) {
            arr = parts.shift();
          } else {
            arr = tmp;
            if (str === keySeparator) {
              const ns = self.options.ns;
              arr = tmp;
            }
          }
          joined = parts.join(keySeparator);
          tmp6 = arr;
        }
      }
      obj = { key: joined };
      let tmp10 = tmp6;
      if (closure_1_9(tmp6)) {
        const items1 = [tmp6];
        tmp10 = items1;
      }
      obj.namespaces = tmp10;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "translate",
    value: function translate(combined1, obj, resolveResult) {
      let length;
      let self = this;
      self = this;
      let merged = obj;
      if (typeof obj === "object") {
        const _Object = Object;
        merged = Object.assign({}, obj);
      }
      obj = merged;
      let tmp3 = merged;
      if (typeof merged !== "object") {
        tmp3 = merged;
        if (self.options.overloadTranslationOptionHandler) {
          let options = self.options;
          const result = options.overloadTranslationOptionHandler(arguments);
          obj = result;
          tmp3 = result;
        }
      }
      let tmp6 = tmp3;
      if (typeof globalThis.options === "object") {
        const _Object2 = Object;
        const merged1 = Object.assign({}, tmp3);
        obj = merged1;
        tmp6 = merged1;
      }
      if (!tmp6) {
        obj = {};
        tmp6 = obj;
      }
      if (combined1 == null) {
        return "";
      } else {
        const _Array4 = Array;
        let arr2 = combined1;
        if (!Array.isArray(combined1)) {
          const _String = String;
          let items = [String(combined1)];
          arr2 = items;
        }
        if (tmp6.returnDetails !== undefined) {
          let returnDetails = tmp6.returnDetails;
        } else {
          returnDetails = self.options.returnDetails;
        }
        if (tmp6.keySeparator !== undefined) {
          let keySeparator = tmp6.keySeparator;
        } else {
          keySeparator = self.options.keySeparator;
        }
        const extractFromKeyResult = self.extractFromKey(arr2[arr2.length - 1], tmp6);
        let key = extractFromKeyResult.key;
        const namespaces = extractFromKeyResult.namespaces;
        closure_3 = tmp9;
        if (tmp6.nsSeparator !== undefined) {
          let str = tmp6.nsSeparator;
        } else {
          str = self.options.nsSeparator;
        }
        if (str === undefined) {
          str = ":";
        }
        let formatted;
        if ((tmp6.lng || self.language) != null) {
          formatted = str2.toLowerCase();
        }
        if (formatted === "cimode") {
          if (tmp10) {
            const _HermesInternal8 = HermesInternal;
            const combined = "" + tmp9 + str + key;
            if (returnDetails) {
              obj = { res: combined, usedKey: key, exactUsedKey: key, usedLng: str2, usedNS: tmp9, usedParams: self.getUsedParamsDetails(tmp6) };
              return obj;
            } else {
              return combined;
            }
          } else if (returnDetails) {
            obj = { res: key, usedKey: key, exactUsedKey: key, usedLng: str2, usedNS: tmp9, usedParams: self.getUsedParamsDetails(tmp6) };
            return obj;
          } else {
            return key;
          }
        } else {
          resolveResult = self.resolve(arr2, tmp6);
          let res;
          if (resolveResult != null) {
            res = resolveResult.res;
          }
          let result2 = res;
          let usedKey;
          if (resolveResult != null) {
            usedKey = resolveResult.usedKey;
          }
          if (!usedKey) {
            usedKey = key;
          }
          let exactUsedKey;
          if (resolveResult != null) {
            exactUsedKey = resolveResult.exactUsedKey;
          }
          if (!exactUsedKey) {
            exactUsedKey = key;
          }
          const items1 = ["[object Number]", "[object Function]", "[object RegExp]"];
          if (tmp6.joinArrays !== undefined) {
            let joinArrays = tmp6.joinArrays;
          } else {
            joinArrays = self.options.joinArrays;
          }
          let tmp16 = tmp6.count !== undefined;
          if (tmp16) {
            tmp16 = !closure_1_9(tmp6.count);
          }
          const hasDefaultValueResult = self.hasDefaultValue(tmp6);
          let str5 = "";
          if (tmp16) {
            let pluralResolver = self.pluralResolver;
            str5 = pluralResolver.getSuffix(str2, tmp6.count, tmp6);
          }
          let str6 = "";
          if (tmp6.ordinal) {
            str6 = "";
            if (tmp16) {
              const pluralResolver2 = self.pluralResolver;
              const obj1 = { ordinal: false };
              str6 = pluralResolver2.getSuffix(str2, tmp6.count, obj1);
            }
          }
          let defaultValue = tmp16;
          if (tmp16) {
            defaultValue = !tmp6.ordinal;
          }
          if (defaultValue) {
            defaultValue = tmp6.count === 0;
          }
          if (defaultValue) {
            let _HermesInternal = HermesInternal;
            defaultValue = tmp6["defaultValue" + self.options.pluralSeparator + "zero"];
          }
          if (!defaultValue) {
            let _HermesInternal2 = HermesInternal;
            defaultValue = tmp6["defaultValue" + str5];
          }
          if (!defaultValue) {
            let _HermesInternal3 = HermesInternal;
            defaultValue = tmp6["defaultValue" + str6];
          }
          if (!defaultValue) {
            defaultValue = tmp6.defaultValue;
          }
          let tmp20 = res;
          if (!self.i18nFormat || self.i18nFormat.handleAsObject) {
            tmp20 = res;
            if (!res) {
              tmp20 = res;
              if (hasDefaultValueResult) {
                tmp20 = defaultValue;
              }
            }
          }
          const _Object3 = Object;
          if (!self.i18nFormat || self.i18nFormat.handleAsObject) {
            if (tmp20) {
              if (tmp22) {
                if (items1.indexOf(tmp23) < 0) {
                  if (closure_1_9(joinArrays)) {
                    const _Array = Array;
                    if (returnDetails) {
                      resolveResult.res = tmp28;
                      resolveResult.usedParams = self.getUsedParamsDetails(tmp6);
                      return resolveResult;
                    } else {
                      return tmp28;
                    }
                  }
                  if (!tmp6.returnObjects) {
                    if (!self.options.returnObjects) {
                      if (!self.options.returnedObjectHandler) {
                        const logger = self.logger;
                        logger.warn("accessing an object - but returnObjects options is not enabled!");
                      }
                      if (self.options.returnedObjectHandler) {
                        const options2 = self.options;
                        const _Object4 = Object;
                        const obj2 = { ns: namespaces };
                        let result1 = options2.returnedObjectHandler(usedKey, tmp20, Object.assign({}, tmp6, obj2));
                      } else {
                        const _HermesInternal4 = HermesInternal;
                        result1 = "key '" + key + " (" + self.language + ")' returned an object instead of string.";
                      }
                      if (returnDetails) {
                        resolveResult.res = result1;
                        resolveResult.usedParams = self.getUsedParamsDetails(tmp6);
                        return resolveResult;
                      } else {
                        return result1;
                      }
                    }
                  }
                  tmp28 = res;
                  if (keySeparator) {
                    const _Array2 = Array;
                    const isArray = Array.isArray(tmp20);
                    const tmp30 = isArray ? [] : {};
                    let tmp31 = usedKey;
                    if (isArray) {
                      tmp31 = exactUsedKey;
                    }
                    for (const key10166 in tmp24) {
                      let tmp82 = key10166;
                      let _Object8 = Object;
                      if (!hasOwnProperty.call(tmp20, key10166)) {
                        continue;
                      } else {
                        let _HermesInternal5 = HermesInternal;
                        combined1 = "" + tmp31 + keySeparator + key10166;
                        if (hasDefaultValueResult) {
                          if (!res) {
                            let _Object5 = Object;
                            let obj3 = {};
                            let tmp34 = closure_1_35;
                            let tmp35;
                            if (closure_1_35(defaultValue)) {
                              tmp35 = defaultValue[key10166];
                            }
                            obj3.defaultValue = tmp35;
                            let obj4 = { joinArrays: false, ns: namespaces };
                            let tmp36 = _Object5;
                            let tmp37 = tmp6;
                            let tmp38 = obj3;
                            let tmp39 = obj4;
                            tmp30[key10166] = self.translate(combined1, Object.assign({}, tmp6, obj3, obj4));
                          }
                          let tmp40 = combined1;
                          if (tmp30[key10166] !== combined1) {
                            continue;
                          } else {
                            tmp30[key10166] = tmp20[key10166];
                            let tmp83 = combined1;
                            continue;
                          }
                          continue;
                        }
                        let _Object6 = Object;
                        let obj5 = { joinArrays: false, ns: namespaces };
                        tmp30[key10166] = self.translate(combined1, Object.assign({}, tmp6, obj5));
                      }
                      continue;
                    }
                    result2 = tmp30;
                    tmp28 = tmp30;
                  }
                }
              }
            }
          }
          if (!self.i18nFormat || self.i18nFormat.handleAsObject) {
            if (closure_1_9(joinArrays)) {
              const _Array3 = Array;
              if (Array.isArray(res)) {
                const joined = res.join(joinArrays);
                result2 = joined;
                tmp28 = joined;
                if (joined) {
                  const extendTranslationResult = self.extendTranslation(joined, arr2, tmp6, resolveResult);
                  result2 = extendTranslationResult;
                  tmp28 = extendTranslationResult;
                }
              }
            }
          }
          let tmp42 = res;
          let flag4 = false;
          if (!self.isValidLookup(res)) {
            tmp42 = res;
            flag4 = false;
            if (hasDefaultValueResult) {
              result2 = defaultValue;
              flag4 = true;
              tmp42 = defaultValue;
            }
          }
          let tmp43 = tmp42;
          let flag5 = false;
          if (!self.isValidLookup(tmp42)) {
            result2 = key;
            flag5 = true;
            tmp43 = key;
          }
          if (!tmp44) {
            const tmp45 = tmp43;
          }
          key = tmp45;
          let updateMissing = hasDefaultValueResult;
          if (hasDefaultValueResult) {
            updateMissing = defaultValue !== tmp43;
          }
          if (updateMissing) {
            updateMissing = self.options.updateMissing;
          }
          if (!flag5) {
            const extendTranslationResult1 = self.extendTranslation(tmp43, arr2, tmp6, resolveResult, resolveResult);
            result2 = extendTranslationResult1;
            let tmp67 = extendTranslationResult1;
            if (flag5) {
              tmp67 = extendTranslationResult1;
              if (extendTranslationResult1 === key) {
                tmp67 = extendTranslationResult1;
                if (self.options.appendNamespaceToMissingKey) {
                  const _HermesInternal6 = HermesInternal;
                  const combined2 = "" + tmp9 + str + key;
                  result2 = combined2;
                  tmp67 = combined2;
                }
              }
            }
            if (flag5) {
              tmp28 = tmp67;
              if (self.options.parseMissingKeyHandler) {
                const options3 = self.options;
                let combined3 = key;
                if (self.options.appendNamespaceToMissingKey) {
                  const _HermesInternal7 = HermesInternal;
                  combined3 = "" + tmp9 + str + key;
                }
                let tmp70;
                if (flag4) {
                  tmp70 = tmp67;
                }
                result2 = options3.parseMissingKeyHandler(combined3, tmp70, tmp6);
                tmp28 = result2;
              }
            } else {
              tmp28 = tmp67;
            }
          }
          const logger2 = self.logger;
          let str15 = "missingKey";
          if (updateMissing) {
            str15 = "updateKey";
          }
          let tmp46 = tmp43;
          if (updateMissing) {
            tmp46 = defaultValue;
          }
          logger2.log(str15, str2, tmp9, key, tmp46);
          if (keySeparator) {
            const _Object7 = Object;
            const obj6 = { keySeparator: false };
            const resolveResult1 = self.resolve(key, Object.assign({}, tmp6, obj6));
            if (resolveResult1) {
              if (resolveResult1.res) {
                const logger3 = self.logger;
                logger3.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
            }
          }
          const items2 = [];
          const languageUtils = self.languageUtils;
          let language = tmp6.lng;
          if (!language) {
            language = self.language;
          }
          const fallbackCodes = languageUtils.getFallbackCodes(self.options.fallbackLng, language);
          if (self.options.saveMissingTo === "fallback") {
            if (fallbackCodes) {
              if (fallbackCodes[0]) {
                let num5 = 0;
                let toResolveHierarchyResult = items2;
                if (0 < fallbackCodes.length) {
                  do {
                    let arr = items2.push(fallbackCodes[num5]);
                    num5 = num5 + 1;
                    toResolveHierarchyResult = items2;
                    length = fallbackCodes.length;
                  } while (num5 < length);
                }
              }
              function send(toResolveHierarchyResult, key, defaultValue) {
                let tmp = defaultValue;
                if (!closure_5) {
                  tmp = key;
                }
                if (self.options.missingKeyHandler) {
                  const options = tmp3.options;
                  options.missingKeyHandler(toResolveHierarchyResult, closure_3, key, tmp, updateMissing, obj);
                } else {
                  const backendConnector = tmp3.backendConnector;
                  if (backendConnector != null) {
                    if (backendConnector.saveMissing) {
                      const backendConnector2 = self.backendConnector;
                      backendConnector2.saveMissing(toResolveHierarchyResult, closure_3, key, tmp, updateMissing, obj);
                    }
                  }
                }
                self.emit("missingKey", toResolveHierarchyResult, closure_3, key, result2);
              }
              if (self.options.saveMissing) {
                if (self.options.saveMissingPlurals) {
                  if (tmp16) {
                    let item = toResolveHierarchyResult.forEach((dev) => {
                      const _self = dev;
                      const pluralResolver = _self.pluralResolver;
                      const suffixes = pluralResolver.getSuffixes(dev, obj);
                      if (defaultValue) {
                        const _HermesInternal = HermesInternal;
                        if (obj["defaultValue" + _self.options.pluralSeparator + "zero"]) {
                          const _HermesInternal2 = HermesInternal;
                          if (suffixes.indexOf("" + _self.options.pluralSeparator + "zero") < 0) {
                            const _HermesInternal3 = HermesInternal;
                            suffixes.push("" + _self.options.pluralSeparator + "zero");
                          }
                        }
                      }
                      const item = suffixes.forEach((arg0) => {
                        const items = [closure_0];
                        const sum = closure_1_2 + arg0;
                        closure_1_10(items, sum, closure_1_1["defaultValue" + arg0] || closure_1_7);
                      });
                    });
                  }
                }
                send(toResolveHierarchyResult, key, defaultValue);
              }
            }
          }
          if (self.options.saveMissingTo === "all") {
            const languageUtils2 = self.languageUtils;
            let language3 = tmp6.lng;
            if (!language3) {
              language3 = self.language;
            }
            toResolveHierarchyResult = languageUtils2.toResolveHierarchy(language3);
          } else {
            let language2 = tmp6.lng;
            if (!language2) {
              language2 = self.language;
            }
            items2.push(language2);
            toResolveHierarchyResult = items2;
          }
          tmp22 = closure_1_35(tmp20);
          tmp44 = tmp6.missingKeyNoValueFallbackToKey || self.options.missingKeyNoValueFallbackToKey;
        }
        tmp10 = tmp6.appendNamespaceToCIMode || self.options.appendNamespaceToCIMode;
      }
    }
  };
  items[4] = {
    key: "extendTranslation",
    value: function extendTranslation(joined, arr2, lng, resolveResult, resolveResult) {
      let self = this;
      closure_0 = arr2;
      closure_1 = lng;
      closure_2 = resolveResult;
      self = this;
      const i18nFormat = this.i18nFormat;
      if (i18nFormat != null) {
        if (i18nFormat.parse) {
          const i18nFormat2 = self.i18nFormat;
          const _Object4 = Object;
          const merged = Object.assign({}, self.options.interpolation.defaultVariables, lng);
          obj = { resolved: resolveResult };
          let parsed = i18nFormat2.parse(joined, merged, tmp21, resolveResult.usedNS, resolveResult.usedKey, obj);
        }
        let arr3 = tmp27;
        if (closure_1_9(lng.postProcess || self.options.postProcess)) {
          let items = [tmp27];
          arr3 = items;
        }
        let handleResult = parsed;
        if (parsed != null) {
          handleResult = parsed;
          if (arr3 != null) {
            handleResult = parsed;
            if (arr3.length) {
              handleResult = parsed;
              if (lng.applyPostProcessor !== false) {
                let merged1 = lng;
                if (self.options) {
                  merged1 = lng;
                  if (self.options.postProcessPassResolved) {
                    const _Object5 = Object;
                    obj = {};
                    const _Object6 = Object;
                    const obj1 = { usedParams: self.getUsedParamsDetails(lng) };
                    obj.i18nResolved = Object.assign({}, resolveResult, obj1);
                    merged1 = Object.assign(obj, lng);
                  }
                }
                handleResult = closure_1_33.handle(arr3, parsed, arr2, merged1, self);
                const tmp38 = closure_1_33;
              }
            }
          }
        }
        return handleResult;
      }
      parsed = joined;
      if (!lng.skipInterpolation) {
        if (lng.interpolation) {
          const interpolator = self.interpolator;
          const _Object = Object;
          obj = {};
          const _Object2 = Object;
          obj.interpolation = Object.assign({}, self.options.interpolation, lng.interpolation);
          interpolator.init(Object.assign({}, lng, obj));
        }
        const tmp5 = closure_1_9(joined);
        if (!tmp5) {
          if (tmp5) {
            const match = joined.match(self.interpolator.nestingRegexp);
            let length = match;
            if (match) {
              length = match.length;
            }
            const tmp8 = length;
          }
          let replace = lng;
          if (lng.replace) {
            replace = lng;
            if (!closure_1_9(lng.replace)) {
              replace = lng.replace;
            }
          }
          let merged2 = replace;
          if (self.options.interpolation.defaultVariables) {
            const _Object3 = Object;
            merged2 = Object.assign({}, self.options.interpolation.defaultVariables, replace);
          }
          const interpolator2 = self.interpolator;
          let usedLng = lng.lng;
          if (!usedLng) {
            usedLng = self.language;
          }
          if (!usedLng) {
            usedLng = resolveResult.usedLng;
          }
          const str = interpolator2.interpolate(joined, merged2, usedLng, lng);
          if (tmp5) {
            const match1 = str.match(self.interpolator.nestingRegexp);
            let length2 = match1;
            if (match1) {
              length2 = match1.length;
            }
            if (tmp8 < length2) {
              lng.nest = false;
            }
          }
          if (!lng.lng) {
            if (resolveResult) {
              if (resolveResult.res) {
                lng.lng = self.language || resolveResult.usedLng;
              }
            }
          }
          let nestResult = str;
          if (lng.nest !== false) {
            const interpolator3 = self.interpolator;
            nestResult = interpolator3.nest(str, () => {
              const length = arguments.length;
              const array = new Array(length);
              for (let num = 0; num < length; num = num + 1) {
                array[num] = arguments[num];
              }
              let first;
              if (table != null) {
                first = table[0];
              }
              if (first === array[0]) {
                if (!lng.context) {
                  const logger = self.logger;
                  const _HermesInternal = HermesInternal;
                  logger.warn("It seems you are nesting recursively key: " + array[0] + " in key: " + arr2[0]);
                  return null;
                }
              }
              const translate = self.translate;
              const items = [arr2];
              return translate.apply(self, array.concat(items));
            }, lng);
          }
          parsed = nestResult;
          if (lng.interpolation) {
            const interpolator4 = self.interpolator;
            interpolator4.reset();
            parsed = nestResult;
          }
        } else {
          let skipOnVariables;
          if (lng != null) {
            const interpolation = lng.interpolation;
            if (interpolation != null) {
              skipOnVariables = interpolation.skipOnVariables;
            }
          }
          if (skipOnVariables !== undefined) {
            skipOnVariables = lng.interpolation.skipOnVariables;
          } else {
            skipOnVariables = self.options.interpolation.skipOnVariables;
          }
        }
      }
    }
  };
  items[5] = {
    key: "resolve",
    value: function resolve(arg0) {
      const self = this;
      if (arguments.length > 1) {
        closure_1 = {};
        let arr = arg0;
        if (closure_1_9(arg0)) {
          let items = [arg0];
          arr = items;
        }
        let item = arr.forEach((arr) => {
          if (!key.isValidLookup(closure_2)) {
            const extractFromKeyResult = key.extractFromKey(arr, closure_1);
            key = extractFromKeyResult.key;
            closure_3 = key;
            const namespaces = extractFromKeyResult.namespaces;
            let combined = namespaces;
            if (key.options.fallbackNS) {
              combined = namespaces.concat(key.options.fallbackNS);
            }
            let tmp7 = closure_1.count !== undefined;
            if (tmp7) {
              tmp7 = !closure_2_9(closure_1.count);
            }
            closure_1 = tmp7;
            if (tmp7) {
              tmp7 = !closure_1.ordinal;
            }
            if (tmp7) {
              tmp7 = closure_1.count === 0;
            }
            closure_2 = tmp7;
            let tmp13 = closure_1.context !== undefined;
            if (tmp13) {
              let tmp16 = closure_2_9(closure_1.context);
              if (!tmp16) {
                tmp16 = typeof closure_1.context === "number";
              }
              tmp13 = tmp16;
            }
            if (tmp13) {
              tmp13 = closure_1.context !== "";
            }
            closure_3 = tmp13;
            if (closure_1.lngs) {
              let lngs = closure_1.lngs;
            } else {
              const languageUtils = key.languageUtils;
              let language = closure_1.lng;
              if (!language) {
                language = key.language;
              }
              lngs = languageUtils.toResolveHierarchy(language, closure_1.fallbackLng);
            }
            let item = combined.forEach((arg0) => {
              closure_0 = arg0;
              if (!key.isValidLookup(closure_2)) {
                closure_6 = arg0;
                let _HermesInternal = HermesInternal;
                if (!closure_3_34["" + arr[0] + "-" + arg0]) {
                  const utils = key.utils;
                  if (utils != null) {
                    if (utils.hasLoadedNamespace) {
                      const utils2 = key.utils;
                      if (utils2 == null) {
                        let _HermesInternal2 = HermesInternal;
                        closure_3_34["" + arr[0] + "-" + arg0] = true;
                        const logger = key.logger;
                        let _HermesInternal3 = HermesInternal;
                        logger.warn("key \"" + closure_3 + "\" for languages \"" + arr.join(", ") + "\" won't get resolved as namespace \"" + closure_6 + "\" was not yet loaded", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                      }
                    }
                  }
                }
                const item = arr.forEach((dev) => {
                  let resource;
                  if (!key.isValidLookup(resource)) {
                    closure_5 = dev;
                    const items = [closure_0];
                    const i18nFormat = key.i18nFormat;
                    if (i18nFormat != null) {
                      if (i18nFormat.addLookupKeys) {
                        const i18nFormat2 = key.i18nFormat;
                        i18nFormat2.addLookupKeys(items, closure_0, dev, closure_0, closure_1);
                      }
                      arr = items.pop();
                      while (arr) {
                        let tmp44 = key;
                        let tmp45 = resource;
                        if (!key.isValidLookup(resource)) {
                          let tmp47 = key;
                          let tmp48 = closure_0;
                          let tmp49 = closure_1;
                          let tmp50 = key;
                          let tmp51 = dev;
                          let tmp52 = arr;
                          resource = key.getResource(dev, closure_0, tmp46, closure_1);
                        }
                        arr = items.pop();
                      }
                    }
                    if (closure_1_1) {
                      const pluralResolver = key.pluralResolver;
                      const suffix = pluralResolver.getSuffix(dev, closure_1.count, closure_1);
                    }
                    const _HermesInternal = HermesInternal;
                    const combined = "" + key.options.pluralSeparator + "zero";
                    const _HermesInternal2 = HermesInternal;
                    const combined1 = "" + key.options.pluralSeparator + "ordinal" + key.options.pluralSeparator;
                    if (closure_1_1) {
                      arr = items.push(closure_0 + suffix);
                      if (closure_1.ordinal) {
                        if (suffix.indexOf(combined1) === 0) {
                          items.push(closure_0 + suffix.replace(combined1, key.options.pluralSeparator));
                        }
                      }
                      if (closure_1_2) {
                        items.push(closure_0 + combined);
                      }
                    }
                    if (closure_1_3) {
                      const _HermesInternal3 = HermesInternal;
                      const combined2 = "" + closure_0 + key.options.contextSeparator + closure_1.context;
                      items.push(combined2);
                      if (closure_1_1) {
                        items.push(combined2 + suffix);
                        if (closure_1.ordinal) {
                          if (suffix.indexOf(combined1) === 0) {
                            items.push(combined2 + suffix.replace(combined1, key.options.pluralSeparator));
                          }
                        }
                        if (closure_1_2) {
                          items.push(combined2 + combined);
                        }
                      }
                    }
                  }
                });
              }
            });
          }
        });
        obj = { res: closure_2, usedKey: closure_3, exactUsedKey: closure_4, usedLng: closure_5, usedNS: closure_6 };
        return obj;
      }
    }
  };
  items[6] = {
    key: "isValidLookup",
    value: function isValidLookup(closure_2) {
      const self = this;
      let tmp = closure_2 !== undefined;
      if (tmp) {
        let tmp2 = !self.options.returnNull;
        if (tmp2) {
          tmp2 = closure_2 === null;
        }
        tmp = !tmp2;
      }
      if (tmp) {
        let tmp4 = !self.options.returnEmptyString;
        if (tmp4) {
          tmp4 = closure_2 === "";
        }
        tmp = !tmp4;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "getResource",
    value: function getResource(arg0, arg1, arg2) {
      const self = this;
      if (arguments.length > 3) {
        if (arguments[3] !== undefined) {
          obj = arguments[3];
        }
        const i18nFormat = self.i18nFormat;
        if (i18nFormat != null) {
          if (i18nFormat.getResource) {
            const i18nFormat2 = self.i18nFormat;
            return i18nFormat2.getResource(arg0, arg1, arg2, obj);
          }
        }
        const resourceStore = self.resourceStore;
        return resourceStore.getResource(arg0, arg1, arg2, obj);
      }
      obj = {};
    }
  };
  items[8] = {
    key: "getUsedParamsDetails",
    value: function getUsedParamsDetails(lng) {
      const self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          let first = arguments[0];
        }
        let replace = first.replace;
        if (replace) {
          replace = !closure_1_9(first.replace);
        }
        let replace2 = first;
        if (replace) {
          replace2 = first.replace;
        }
        let merged = replace2;
        if (replace) {
          if (typeof first.count !== "undefined") {
            merged.count = first.count;
          }
        }
        if (self.options.interpolation.defaultVariables) {
          const _Object = Object;
          merged = Object.assign({}, self.options.interpolation.defaultVariables, merged);
        }
        if (!replace) {
          const _Object2 = Object;
          merged = Object.assign({}, merged);
          for (const item10037 of ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]) {
            let tmp10 = merged;
            delete tmp[tmp2];
            continue;
          }
        }
        return merged;
      }
      first = {};
    }
  };
  let items1 = [
    {
      key: "hasDefaultValue",
      value: function hasDefaultValue(closure_1) {
        for (const key10007 in arg0) {
          let tmp = key10007;
          let _Object = Object;
          if (!hasOwnProperty.call(arg0, key10007)) {
            continue;
          } else {
            let length = "defaultValue".length;
            if ("defaultValue" !== key10007.substring(0, "defaultValue".length)) {
              continue;
            } else if (undefined === arg0[key10007]) {
              continue;
            } else {
              let flag = true;
              return true;
            }
            continue;
          }
          continue;
        }
        return false;
      }
    }
  ];
  return closure_8.default(Translator, items, items1);
})(tmp8);
let closure_37 = (() => {
  class LanguageUtil {
    constructor(arg0) {
      self = this;
      defaultResult = closure_1_7.default(this, LanguageUtil);
      this.options = arg0;
      self.supportedLngs = this.options.supportedLngs || false;
      self.logger = closure_1_31.create("languageUtils");
      return;
    }
  }
  obj = {
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(language) {
      const self = this;
      let arr = closure_1_29(language);
      if (arr) {
        if (arr.indexOf("-") >= 0) {
          const parts = arr.split("-");
          if (parts.length === 2) {
            return null;
          } else {
            arr = parts.pop();
            if (str2.toLowerCase() === "x") {
              return null;
            } else {
              return self.formatLanguageCode(parts.join("-"));
            }
            str2 = parts[parts.length - 1];
          }
        }
      }
      return null;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(language) {
      const self = this;
      const arr = closure_1_29(language);
      if (arr) {
        if (arr.indexOf("-") >= 0) {
          return self.formatLanguageCode(arr.split("-")[0]);
        }
      }
      return arr;
    }
  };
  items[1] = obj;
  obj = {
    key: "formatLanguageCode",
    value: function formatLanguageCode(parts) {
      const self = this;
      if (closure_1_9(parts)) {
        if (parts.indexOf("-") > -1) {
          try {
            const _Intl = Intl;
            let str2 = Intl.getCanonicalLocales(parts)[0];
            if (str2) {
              if (self.options.lowerCaseLng) {
                str2 = str2.toLowerCase();
              }
            }
            if (str2) {
              return str2;
            } else {
              return self.options.lowerCaseLng ? parts.toLowerCase() : parts;
            }
          } catch (err) {
          }
        }
      }
      if (!self.options.cleanCode) {
        if (!self.options.lowerCaseLng) {
          let formatted = parts;
        }
        return formatted;
      }
      formatted = parts.toLowerCase();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSupportedCode",
    value: function isSupportedCode(formatLanguageCodeResult) {
      const self = this;
      if (this.options.load === "languageOnly") {
        let languagePartFromCode = self.getLanguagePartFromCode(formatLanguageCodeResult);
      } else {
        languagePartFromCode = formatLanguageCodeResult;
      }
      let tmp2 = !self.supportedLngs || !self.supportedLngs.length;
      if (!tmp2) {
        const supportedLngs = self.supportedLngs;
        tmp2 = supportedLngs.indexOf(languagePartFromCode) > -1;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(arr) {
      let self = this;
      self = this;
      if (arr) {
        const item = arr.forEach((parts) => {
          if (!formatLanguageCodeResult) {
            formatLanguageCodeResult = self.formatLanguageCode(parts);
          }
        });
        if (!closure_1) {
          if (self.options.supportedLngs) {
            const item1 = arr.forEach((language) => {
              if (!closure_1) {
                const scriptPartFromCode = languagePartFromCode.getScriptPartFromCode(language);
                if (languagePartFromCode.isSupportedCode(scriptPartFromCode)) {
                  closure_1 = scriptPartFromCode;
                  return scriptPartFromCode;
                } else {
                  languagePartFromCode = languagePartFromCode.getLanguagePartFromCode(language);
                  if (languagePartFromCode.isSupportedCode(languagePartFromCode)) {
                    closure_1 = languagePartFromCode;
                    return languagePartFromCode;
                  } else {
                    const supportedLngs = languagePartFromCode.options.supportedLngs;
                    closure_1 = supportedLngs.find((arr) => {
                      if (arr === languagePartFromCode) {
                        return arr;
                      } else {
                        if (arr.indexOf("-") > 0) {
                          if (languagePartFromCode.indexOf("-") < 0) {
                            if (arr.substring(0, arr.indexOf("-")) === languagePartFromCode) {
                              return arr;
                            }
                          }
                        }
                        if (arr.indexOf(languagePartFromCode) === 0) {
                          if (languagePartFromCode.length > 1) {
                            return arr;
                          }
                        }
                      }
                    });
                  }
                }
              }
            });
          }
        }
        if (!closure_1) {
          closure_1 = self.getFallbackCodes(self.options.fallbackLng)[0];
        }
        return closure_1;
      } else {
        return null;
      }
    }
  };
  items[5] = {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbackLng, language) {
      const self = this;
      if (fallbackLng) {
        let tmp = fallbackLng;
        if (typeof fallbackLng === "function") {
          tmp = fallbackLng(language);
        }
        let tmp4 = tmp;
        if (closure_1_9(tmp)) {
          const items = [tmp];
          tmp4 = items;
        }
        const _Array = Array;
        if (Array.isArray(tmp4)) {
          return tmp4;
        } else if (language) {
          return tmp4[language] || tmp4[self.getScriptPartFromCode(self, language)] || tmp4[self.formatLanguageCode(self, language)] || tmp4[self.getLanguagePartFromCode(self, language)] || tmp4.default || [];
        } else {
          return tmp4.default || [];
        }
      } else {
        return [];
      }
    }
  };
  items[6] = {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(language, fallbackLng) {
      let items = fallbackLng;
      let self = this;
      self = this;
      if (fallbackLng === false) {
        items = [];
      }
      if (!items) {
        items = self.options.fallbackLng;
      }
      if (!items) {
        items = [];
      }
      const fallbackCodes = this.getFallbackCodes(items, language);
      const items1 = [];
      function addCode(self) {
        if (self) {
          if (self.isSupportedCode(self)) {
            items1.push(self);
          } else {
            const logger = self.logger;
            const _HermesInternal = HermesInternal;
            logger.warn("rejecting language code not found in supportedLngs: " + self);
          }
        }
      }
      if (closure_1_9(language)) {
        if (language.indexOf("-") <= -1) {
          const item = fallbackCodes.forEach((parts) => {
            if (items1.indexOf(parts) < 0) {
              addCode(self.formatLanguageCode(parts));
            }
          });
          return items1;
        }
        if (self.options.load !== "languageOnly") {
          addCode(self.formatLanguageCode(language));
        }
        if (self.options.load !== "languageOnly") {
          if (self.options.load !== "currentOnly") {
            addCode(self.getScriptPartFromCode(language));
          }
        }
        if (self.options.load !== "currentOnly") {
          addCode(self.getLanguagePartFromCode(language));
        }
      }
      if (closure_1_9(language)) {
        addCode(self.formatLanguageCode(language));
      }
    }
  };
  return closure_8.default(LanguageUtil, items);
})();
let closure_38 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
let closure_39 = {
  select(arg0) {
    let str = "other";
    if (arg0 === 1) {
      str = "one";
    }
    return str;
  },
  resolvedOptions() {
    return { pluralCategories: ["one", "other"] };
  }
};
let closure_40 = (() => {
  class PluralResolver {
    constructor(arg0) {
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          tmp = arguments[1];
        }
        tmp2 = closure_1_7;
        tmp3 = PluralResolver;
        defaultResult = closure_1_7.default(self, PluralResolver);
        tmp5 = arg0;
        self.languageUtils = arg0;
        self.options = {};
        tmp6 = closure_1_31;
        str = "pluralResolver";
        self.logger = closure_1_31.create("pluralResolver");
        self.pluralRulesCache = {};
        return;
      }
      return;
    }
  }
  obj = {
    key: "addRule",
    value: function addRule(arg0, arg1) {
      this.rules[arg0] = arg1;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "clearCache",
    value: function clearCache() {
      this.pluralRulesCache = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "getRule",
    value: function getRule(dev, arg1) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          let obj1 = arguments[1];
        }
        let str2 = "en";
        if (dev !== "dev") {
          str2 = dev;
        }
        const tmp4Result = closure_1_29(str2);
        let str4 = "cardinal";
        if (tmp3.ordinal) {
          str4 = "ordinal";
        }
        const _JSON = JSON;
        obj = { cleanedCode: tmp4Result, type: str4 };
        const json = JSON.stringify(obj);
        if (json in self.pluralRulesCache) {
          return self.pluralRulesCache[json];
        } else {
          try {
            const _Intl = Intl;
            obj = { type: str4 };
            const prototype = PluralRules.prototype;
            let pluralRules = new PluralRules(tmp4Result, obj);
            self.pluralRulesCache[tmp12] = pluralRules;
            return pluralRules;
          } catch (err) {
            if (tmp2.Intl) {
              if (str.match(/-|_/)) {
                const languageUtils = obj.languageUtils;
                pluralRules = obj.getRule(languageUtils.getLanguagePartFromCode(str), tmp);
              } else {
                return closure_1_39;
              }
            } else {
              const logger = obj.logger;
              logger.error("No Intl support, please use an Intl polyfill!");
              return closure_1_39;
            }
          }
        }
        tmp3 = obj1;
        const tmp4 = closure_1_29;
      }
      obj1 = {};
    }
  };
  items[2] = obj;
  items[3] = {
    key: "needsPlural",
    value: function needsPlural(dev) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          obj = arguments[1];
        }
        const rule = self.getRule(dev, obj);
        let rule1 = rule;
        if (!rule) {
          rule1 = self.getRule("dev", obj);
        }
        let length;
        if (rule1 != null) {
          length = rule1.resolvedOptions().pluralCategories.length;
        }
        return length > 1;
      }
      obj = {};
    }
  };
  items[4] = {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(dev) {
      const self = this;
      closure_0 = arg1;
      if (arguments.length > 2) {
        const suffixes = self.getSuffixes(dev, {});
        return suffixes.map((arg0) => "" + closure_0 + arg0);
      }
    }
  };
  items[5] = {
    key: "getSuffixes",
    value: function getSuffixes(dev, arg1) {
      let self = this;
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          obj = arguments[1];
        }
        const rule = self.getRule(dev, obj);
        let rule1 = rule;
        if (!rule) {
          rule1 = self.getRule("dev", obj);
        }
        if (rule1) {
          const pluralCategories = rule1.resolvedOptions().pluralCategories;
          const sorted = pluralCategories.sort((arg0, arg1) => closure_2_38[arg0] - closure_2_38[arg1]);
          return sorted.map((arg0) => {
            let str = "";
            if (obj.ordinal) {
              const _HermesInternal = HermesInternal;
              str = "ordinal" + self.options.prepend;
            }
            return "" + self.options.prepend + str + arg0;
          });
        } else {
          return [];
        }
      }
      obj = {};
    }
  };
  items[6] = {
    key: "getSuffix",
    value: function getSuffix(dev, count, closure_1) {
      const self = this;
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        const rule = self.getRule(dev, obj);
        if (rule) {
          let str4 = "";
          if (obj.ordinal) {
            const _HermesInternal2 = HermesInternal;
            str4 = "ordinal" + self.options.prepend;
          }
          const _HermesInternal3 = HermesInternal;
          return "" + self.options.prepend + str4 + rule.select(count);
        } else {
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("no plural rule found for: " + dev);
          return self.getSuffix("dev", count, obj);
        }
      }
      obj = {};
    }
  };
  return closure_8.default(PluralResolver, items);
})();
function deepFindWithDefaults(closure_1, closure_1, substr) {
  let str = ".";
  if (arguments.length > 3) {
    str = ".";
    if (arguments[3] !== undefined) {
      str = arguments[3];
    }
  }
  let flag = true;
  if (arguments.length > 4) {
    flag = true;
    if (arguments[4] !== undefined) {
      flag = arguments[4];
    }
  }
  const tmp = getPathWithDefaults(closure_1, closure_1, substr);
  let tmp2 = tmp;
  if (!tmp) {
    tmp2 = tmp;
    if (flag) {
      tmp2 = tmp;
      if (isString(substr)) {
        tmp2 = deepFind(closure_1, substr, str);
        if (tmp2 === undefined) {
          tmp2 = deepFind(closure_1, substr, str);
        }
      }
    }
  }
  return tmp2;
}
function regexSafe(str) {
  return str.replace(/\$/g, "$$$$");
}
let closure_43 = (() => {
  class Interpolator {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        tmp = closure_1_7;
        tmp2 = Interpolator;
        defaultResult = closure_1_7.default(self, Interpolator);
        tmp4 = closure_1_31;
        str = "interpolator";
        self.logger = closure_1_31.create("interpolator");
        self.options = first;
        tmp5 = null;
        fn = undefined;
        if (first != null) {
          interpolation = first.interpolation;
          if (interpolation != null) {
            fn = interpolation.format;
          }
        }
        if (!fn) {
          fn = (arg0) => arg0;
        }
        self.format = fn;
        initResult = self.init(first);
        return;
      }
      first = {};
      return;
    }
  }
  obj = {
    key: "init",
    value: function init() {
      const self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          let first = arguments[0];
        }
        if (!first.interpolation) {
          obj = { escapeValue: true };
          first.interpolation = obj;
        }
        ({ escape: _escape, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = first.interpolation);
        if (_escape === undefined) {
          _escape = closure_1_24;
        }
        self.escape = _escape;
        let flag2 = true;
        if (escapeValue !== undefined) {
          flag2 = escapeValue;
        }
        self.escapeValue = flag2;
        let flag3 = false;
        if (useRawValueToEscape !== undefined) {
          flag3 = useRawValueToEscape;
        }
        self.useRawValueToEscape = flag3;
        if (prefix) {
          prefixEscaped = closure_1_22(prefix);
        } else if (!prefixEscaped) {
          prefixEscaped = "{{";
        }
        self.prefix = prefixEscaped;
        if (suffix) {
          suffixEscaped = closure_1_22(suffix);
        } else if (!suffixEscaped) {
          suffixEscaped = "}}";
        }
        self.suffix = suffixEscaped;
        if (!formatSeparator) {
          formatSeparator = ",";
        }
        self.formatSeparator = formatSeparator;
        let str2 = "";
        if (!unescapeSuffix) {
          if (!unescapePrefix) {
            unescapePrefix = "-";
          }
          str2 = unescapePrefix;
        }
        self.unescapePrefix = str2;
        let str3 = "";
        if (!self.unescapePrefix) {
          if (!unescapeSuffix) {
            unescapeSuffix = "";
          }
          str3 = unescapeSuffix;
        }
        self.unescapeSuffix = str3;
        if (nestingPrefix) {
          nestingPrefixEscaped = closure_1_22(nestingPrefix);
        } else if (!nestingPrefixEscaped) {
          nestingPrefixEscaped = closure_1_22("$t(");
        }
        self.nestingPrefix = nestingPrefixEscaped;
        if (nestingSuffix) {
          nestingSuffixEscaped = closure_1_22(nestingSuffix);
        } else if (!nestingSuffixEscaped) {
          nestingSuffixEscaped = closure_1_22(")");
        }
        self.nestingSuffix = nestingSuffixEscaped;
        if (!nestingOptionsSeparator) {
          nestingOptionsSeparator = ",";
        }
        self.nestingOptionsSeparator = nestingOptionsSeparator;
        if (!maxReplaces) {
          maxReplaces = 1000;
        }
        self.maxReplaces = maxReplaces;
        let flag4 = false;
        if (alwaysFormat !== undefined) {
          flag4 = alwaysFormat;
        }
        self.alwaysFormat = flag4;
        self.resetRegExp();
      }
      first = {};
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "reset",
    value: function reset() {
      const self = this;
      if (this.options) {
        self.init(self.options);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "resetRegExp",
    value: function resetRegExp() {
      function getOrResetRegExp(nestingRegexp, arg1) {
        let source;
        if (nestingRegexp != null) {
          source = nestingRegexp.source;
        }
        if (source === arg1) {
          nestingRegexp.lastIndex = 0;
          return nestingRegexp;
        } else {
          const _RegExp = RegExp;
          const regExp = new RegExp(arg1, "g");
          return regExp;
        }
      }
      this.regexp = getOrResetRegExp(this.regexp, "" + this.prefix + "(.+?)" + this.suffix);
      this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix);
      this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, "" + this.nestingPrefix + "(.+?)" + this.nestingSuffix);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "interpolate",
    value: function interpolate(arg0, arg1, arg2, missingInterpolationHandler) {
      let self = this;
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_3 = missingInterpolationHandler;
      self = this;
      closure_8 = this.options && self.options.interpolation && self.options.interpolation.defaultVariables || {};
      function handleFormat(trimmed) {
        if (trimmed.indexOf(self.formatSeparator) < 0) {
          const tmp6 = closure_2_41(closure_1, closure_8, trimmed, self.options.keySeparator, self.options.ignoreJSONStructure);
          let formatResult = tmp6;
          if (self.alwaysFormat) {
            const _Object = Object;
            obj = { interpolationkey: trimmed };
            const _Object2 = Object;
            formatResult = self.format(tmp6, undefined, closure_2, Object.assign({}, closure_3, closure_1, obj));
          }
          return formatResult;
        } else {
          const parts = trimmed.split(self.formatSeparator);
          trimmed = parts.shift().trim();
          const str = parts.shift();
          const trimmed1 = parts.join(self.formatSeparator).trim();
          const tmp25 = closure_2_41(closure_1, closure_8, trimmed, self.options.keySeparator, self.options.ignoreJSONStructure);
          const _Object3 = Object;
          obj = { interpolationkey: trimmed };
          const _Object4 = Object;
          return self.format(tmp25, trimmed1, closure_2, Object.assign({}, closure_3, closure_1, obj));
        }
      }
      self.resetRegExp();
      let prop;
      if (missingInterpolationHandler != null) {
        prop = missingInterpolationHandler.missingInterpolationHandler;
      }
      if (!prop) {
        prop = self.options.missingInterpolationHandler;
      }
      let skipOnVariables;
      if (missingInterpolationHandler != null) {
        const interpolation = missingInterpolationHandler.interpolation;
        if (interpolation != null) {
          skipOnVariables = interpolation.skipOnVariables;
        }
      }
      if (skipOnVariables !== undefined) {
        skipOnVariables = missingInterpolationHandler.interpolation.skipOnVariables;
      } else {
        skipOnVariables = self.options.interpolation.skipOnVariables;
      }
      const items = [
        {
          regex: self.regexpUnescape,
          safeValue(arg0) {
            return closure_2_42(arg0);
          }
        },
        {
          regex: self.regexp,
          safeValue(arg0) {
            if (self.escapeValue) {
              let tmpResult = tmp(self.escape(arg0));
            } else {
              tmpResult = tmp(arg0);
            }
            return tmpResult;
          }
        }
      ];
      const item = items.forEach((regex) => {
        c7 = 0;
        regex = regex.regex;
        const match = regex.exec(closure_0);
        let match1 = match;
        if (match) {
          while (true) {
            let tmp3 = match1;
            let str = match1[1];
            let trimmed = str.trim();
            let tmp5 = handleFormat;
            let tmp6 = handleFormat(trimmed);
            let length = tmp6;
            let tmp7 = tmp2;
            if (tmp6 === undefined) {
              let tmp14 = prop;
              if (typeof prop === "function") {
                let tmp22 = prop;
                let tmp23 = closure_0;
                let tmp24 = match1;
                let tmp25 = closure_3;
                let tmp26 = prop(closure_0, match1, closure_3);
                let tmp27 = closure_2_9;
                let str2 = "";
                if (closure_2_9(tmp26)) {
                  str2 = tmp26;
                }
                length = str2;
                let tmp10 = tmp26;
              } else {
                let tmp39 = closure_3;
                if (closure_3) {
                  let _Object = Object;
                  let tmp15 = closure_3;
                  if (hasOwnProperty.call(closure_3, trimmed)) {
                    length = "";
                    tmp10 = tmp2;
                  }
                }
                let tmp16 = skipOnVariables;
                if (skipOnVariables) {
                  let tmp20 = match1;
                  length = match1[0];
                  let tmp21 = tmp2;
                } else {
                  let tmp17 = self;
                  let logger = self.logger;
                  let tmp18 = closure_0;
                  let _HermesInternal = HermesInternal;
                  let warnResult = logger.warn("missed to pass in variable " + trimmed + " for interpolating " + closure_0);
                  length = "";
                  tmp10 = tmp2;
                }
              }
              let regex4 = regex.regex;
              let tmp37 = closure_0;
              match1 = regex4.exec(closure_0);
              tmp2 = tmp21;
              if (!match1) {
                break;
              }
            } else {
              let tmp8 = closure_2_9;
              let tmp9 = length;
              tmp10 = tmp2;
              if (!closure_2_9(length)) {
                let tmp11 = self;
                tmp10 = tmp2;
                if (!self.useRawValueToEscape) {
                  let tmp12 = closure_2_11;
                  let tmp13 = length;
                  length = closure_2_11(length);
                  tmp10 = tmp2;
                }
              }
            }
            let tmp28 = length;
            let tmp29 = closure_0;
            let tmp30 = match1;
            closure_0 = closure_0.replace(match1[0], regex.safeValue(length));
            let tmp31 = skipOnVariables;
            let regex2 = regex.regex;
            if (skipOnVariables) {
              let tmp32 = length;
              regex2.lastIndex = regex2.lastIndex + length.length;
              let regex3 = regex.regex;
              let tmp33 = match1;
              regex3.lastIndex = regex3.lastIndex - match1[0].length;
            } else {
              regex2.lastIndex = 0;
            }
            let tmp34 = c7;
            let sum = c7 + 1;
            c7 = sum;
            let tmp36 = self;
            tmp21 = tmp10;
            if (sum >= self.maxReplaces) {
              break;
            }
          }
        }
      });
      return closure_0;
    }
  };
  items[4] = {
    key: "nest",
    value: function nest(arg0, arg1, lng) {
      let tmp13;
      let self = this;
      self = this;
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        function handleHasOptions(arr) {
          const nestingOptionsSeparator = self.nestingOptionsSeparator;
          if (arr.indexOf(nestingOptionsSeparator) < 0) {
            return arr;
          } else {
            const _RegExp = RegExp;
            const _HermesInternal = HermesInternal;
            const regExp = new RegExp("" + nestingOptionsSeparator + "[ ]*{");
            const parts = arr.split(regExp);
            const _HermesInternal2 = HermesInternal;
            const combined = "{" + parts[1];
            const first = parts[0];
            const str7 = self.interpolate(combined, closure_3);
            let str2 = str7;
            const match = str7.match(/'/g);
            match1 = str7.match(/"/g);
            let length;
            if (match != null) {
              length = match.length;
            }
            let num = 0;
            if (length != null) {
              num = length;
            }
            if (num % 2 !== 0) {
              try {
                const _JSON = JSON;
                closure_3 = JSON.parse(str2);
                if (arg1) {
                  const _Object = Object;
                  closure_3 = Object.assign({}, arg1, closure_3);
                }
                if (closure_3.defaultValue) {
                  const defaultValue = closure_3.defaultValue;
                  if (defaultValue.indexOf(self.prefix) > -1) {
                    delete tmp6.defaultValue;
                  }
                }
                return first;
              } catch (tmp18) {
                const logger = self.logger;
                logger.warn("failed parsing options string in nesting for key " + tmp, tmp18);
                return tmp5 + tmp + tmp4 + tmp3;
              }
            }
            str2 = str2.replace(/'/g, "\"");
          }
        }
        const nestingRegexp = self.nestingRegexp;
        let match = nestingRegexp.exec(arg0);
        let match1 = match;
        let str4 = arg0;
        let tmp4 = arg0;
        if (match) {
          while (true) {
            let items = [];
            let _Object = Object;
            let str5 = Object.assign({}, obj);
            let replace = str5;
            let tmp5 = str4;
            let tmp6 = match;
            if (str5.replace) {
              let tmp7 = closure_1_9;
              let tmp8 = replace;
              if (!closure_1_9(replace.replace)) {
                let tmp9 = replace;
                replace = replace.replace;
              }
              replace.applyPostProcessor = false;
              let tmp10 = replace;
              delete tmp.defaultValue;
              let first = match[0];
              let arr3 = items;
              let flag2 = false;
              if (first.indexOf(self.formatSeparator) !== -1) {
                let obj2 = /{.*}/;
                arr3 = items;
                flag2 = false;
                if (!obj2.test(match[1])) {
                  let str6 = match[1];
                  let parts = str6.split(self.formatSeparator);
                  let mapped = parts.map((str) => str.trim());
                  match[1] = mapped.shift();
                  arr3 = mapped;
                  flag2 = true;
                }
              }
              let str7 = match[1];
              let tmp11 = replace;
              let tmp12 = replace;
              tmp13 = arg1(handleHasOptions.call(self, str7.trim(), replace), replace);
              if (tmp13) {
                if (match[0] === str4) {
                  let tmp14 = closure_1_9;
                  if (!closure_1_9(tmp13)) {
                    break;
                  }
                }
              }
              let tmp15 = closure_1_9;
              let str8 = tmp13;
              if (!closure_1_9(tmp13)) {
                let tmp16 = closure_1_11;
                str8 = closure_1_11(tmp13);
              }
              if (!str8) {
                let logger = self.logger;
                let _HermesInternal = HermesInternal;
                let warnResult = logger.warn("missed to resolve " + match[1] + " for nesting " + str4);
                str8 = "";
              }
              let reduced = str8;
              if (flag2) {
                reduced = arr3.reduce((arg0, arg1) => {
                  obj = { interpolationkey: str.trim() };
                  return self.format(arg0, arg1, obj.lng, Object.assign({}, obj, obj));
                }, str8.trim());
              }
              let replaced = str4.replace(match[0], reduced);
              self.regexp.lastIndex = 0;
              let nestingRegexp2 = self.nestingRegexp;
              match1 = nestingRegexp2.exec(replaced);
              str4 = replaced;
              tmp4 = replaced;
              match = match1;
            }
          }
          return tmp13;
        }
        return tmp4;
      }
      obj = {};
    }
  };
  return closure_8.default(Interpolator, items);
})();
function parseFormatStr(str) {
  let trimmed = str.toLowerCase().trim();
  obj = {};
  if (str.indexOf("(") > -1) {
    const parts = str.split("(");
    const trimmed1 = parts[0].toLowerCase().trim();
    let substr = parts[1].substring(0, parts[1].length - 1);
    if (trimmed1 === "currency") {
      if (substr.indexOf(":") < 0) {
        trimmed = trimmed1;
        if (!obj.currency) {
          obj.currency = substr.trim();
          trimmed = trimmed1;
        }
      }
    }
    if (trimmed1 === "relativetime") {
      if (substr.indexOf(":") < 0) {
        trimmed = trimmed1;
        if (!obj.range) {
          obj.range = substr.trim();
          trimmed = trimmed1;
        }
      }
    }
    const parts1 = substr.split(";");
    const item = parts1.forEach((str) => {
      if (str) {
        const defaultResult = closure_1_1.default(str.split(":"));
        const substr = defaultResult.slice(1);
        const str2 = defaultResult[0];
        const str3 = substr.join(":");
        const replaced = substr.join(":").trim().replace(/^'+|'+$/g, "");
        const trimmed = str2.trim();
        if (!obj[trimmed]) {
          obj[trimmed] = replaced;
        }
        if (replaced === "false") {
          obj[trimmed] = false;
        }
        if (replaced === "true") {
          obj[trimmed] = true;
        }
        const _isNaN = isNaN;
        if (!isNaN(replaced)) {
          const _parseInt = parseInt;
          obj[trimmed] = parseInt(replaced, 10);
        }
        const str4 = substr.join(":").trim();
      }
    });
    trimmed = trimmed1;
    const str6 = parts[0];
    const str7 = parts[0].toLowerCase();
    const str8 = parts[1];
  }
  obj = { formatName: trimmed };
  obj.formatOptions = obj;
  return obj;
}
function createCachedFormatter(arg0) {
  closure_0 = arg0;
  closure_1 = {};
  return (arg0, arg1, interpolationkey) => {
    let merged = interpolationkey;
    if (interpolationkey) {
      merged = interpolationkey;
      if (interpolationkey.interpolationkey) {
        merged = interpolationkey;
        if (interpolationkey.formatParams) {
          merged = interpolationkey;
          if (interpolationkey.formatParams[interpolationkey.interpolationkey]) {
            merged = interpolationkey;
            if (interpolationkey[interpolationkey.interpolationkey]) {
              const _Object = Object;
              merged = Object.assign({}, interpolationkey, lib.default({}, interpolationkey.interpolationkey, undefined));
            }
          }
        }
      }
    }
    const sum = arg1 + JSON.stringify(merged);
    let tmp5 = table[sum];
    if (!tmp5) {
      const tmp8 = lib(closure_1_29(arg1), interpolationkey);
      table[sum] = tmp8;
      tmp5 = tmp8;
    }
    return tmp5(arg0);
  };
}
function createNonCachedFormatter(arg0) {
  closure_0 = arg0;
  return (arg0, arg1, arg2) => callback(closure_1_29(arg1), arg2)(arg0);
}
let closure_47 = (() => {
  class Formatter {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        tmp = closure_1_7;
        tmp2 = Formatter;
        defaultResult = closure_1_7.default(self, Formatter);
        tmp4 = closure_1_31;
        str = "formatter";
        self.logger = closure_1_31.create("formatter");
        self.options = first;
        initResult = self.init(first);
        return;
      }
      first = {};
      return;
    }
  }
  obj = {
    key: "init",
    value: function init(arg0) {
      const self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          obj = arguments[1];
        }
        self.formatSeparator = obj.interpolation.formatSeparator || ",";
        const tmp = obj.cacheInBuiltFormats ? closure_1_45 : closure_1_46;
        obj = {
          number: tmp((arg0, arg1) => {
              const numberFormat = new Intl.NumberFormat(arg0, Object.assign({}, arg1));
              return (arg0) => numberFormat.format(arg0);
            }),
          currency: tmp((arg0, arg1) => {
              const numberFormat = new Intl.NumberFormat(arg0, Object.assign({}, arg1, { style: "currency" }));
              return (arg0) => numberFormat.format(arg0);
            }),
          datetime: tmp((arg0, arg1) => {
              const dateTimeFormat = new Intl.DateTimeFormat(arg0, Object.assign({}, arg1));
              return (arg0) => dateTimeFormat.format(arg0);
            }),
          relativetime: tmp((arg0, arg1) => {
              closure_0 = arg1;
              const relativeTimeFormat = new Intl.RelativeTimeFormat(arg0, Object.assign({}, arg1));
              return (arg0) => {
                let str = range.range;
                if (!str) {
                  str = "day";
                }
                return relativeTimeFormat.format(arg0, str);
              };
            }),
          list: tmp((arg0, arg1) => {
              const listFormat = new Intl.ListFormat(arg0, Object.assign({}, arg1));
              return (arg0) => listFormat.format(arg0);
            })
        };
        self.formats = obj;
      }
      obj = { interpolation: {} };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "add",
    value: function add(str) {
      this.formats[str.toLowerCase().trim()] = arg1;
    }
  };
  items[1] = obj;
  obj = {
    key: "addCached",
    value: function addCached(str) {
      const trimmed = str.toLowerCase().trim();
      this.formats[trimmed] = closure_1_45(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "format",
    value: function format(arg0, str) {
      let self = this;
      closure_0 = arg2;
      self = this;
      if (arguments.length > 3) {
        closure_2 = {};
        const parts = str.split(self.formatSeparator);
        if (parts.length > 1) {
          const first = parts[0];
          if (first.indexOf("(") > 1) {
            const first1 = parts[0];
            if (first1.indexOf(")") < 0) {
              if (parts.find((arr) => arr.indexOf(")") > -1)) {
                const items = [parts[0]];
                const combined = items.concat(closure_1_2.default(parts.splice(1, parts.findIndex((arr) => arr.indexOf(")") > -1))));
                parts[0] = combined.join(self.formatSeparator);
              }
            }
          }
        }
        return parts.reduce((arg0, arg1) => {
          ({ formatName, formatOptions } = closure_2_44(arg1));
          if (self.formats[formatName]) {
            try {
              let tmp11;
              if (closure_2 != null) {
                const formatParams = closure_2.formatParams;
                if (formatParams != null) {
                  tmp11 = tmp13[closure_2.interpolationkey];
                }
              }
              obj = tmp11;
              if (!tmp11) {
                obj = {};
              }
              const locale = obj.locale;
              let lng = locale;
              if (!locale) {
                lng = tmp17.lng;
              }
              let locale2 = lng;
              if (!lng) {
                locale2 = closure_2.locale;
              }
              let lng2 = locale2;
              if (!locale2) {
                lng2 = closure_2.lng;
              }
              let tmp21 = lng2;
              if (!lng2) {
                tmp21 = closure_0;
              }
              const formats = self.formats;
              const _Object = Object;
              const _Object2 = Object;
              return formats[formatName](arg0, tmp21, Object.assign({}, formatOptions, closure_2, obj));
            } catch (tmp28) {
              const logger2 = self.logger;
              logger2.warn(tmp28);
            }
          } else {
            const logger = self.logger;
            const _HermesInternal = HermesInternal;
            logger.warn("there was no format function for " + tmp2);
            return arg0;
          }
        }, arg0);
      }
    }
  };
  return closure_8.default(Formatter, items);
})();
function removePending(pending) {
  if (pending.pending[arg1] !== undefined) {
    pending = pending.pending;
    delete tmp[tmp2];
    pending.pendingCount = pending.pendingCount - 1;
  }
}
let closure_49 = ((arg0) => {
  class Connector {
    constructor(arg0, arg1, arg2) {
      self = this;
      if (arguments.length > 3) {
        if (arguments[3] !== undefined) {
          obj = arguments[3];
        }
        tmp = closure_1_7;
        tmp2 = Connector;
        defaultResult = closure_1_7.default(self, Connector);
        tmp4 = closure_1_54;
        tmp5 = closure_1_54(self, Connector);
        tmp6 = arg0;
        tmp5.backend = arg0;
        tmp7 = arg1;
        tmp5.store = arg1;
        tmp5.services = arg2;
        tmp5.languageUtils = arg2.languageUtils;
        tmp5.options = obj;
        tmp8 = closure_1_31;
        str = "backendConnector";
        tmp5.logger = closure_1_31.create("backendConnector");
        tmp5.waitingReads = [];
        tmp5.maxParallelReads = obj.maxParallelReads || 10;
        num = 0;
        tmp5.readingCalls = 0;
        num2 = 5;
        if (obj.maxRetries >= 0) {
          num2 = obj.maxRetries;
        }
        tmp5.maxRetries = num2;
        num3 = 1;
        num4 = 350;
        if (obj.retryTimeout >= 1) {
          num4 = obj.retryTimeout;
        }
        tmp5.retryTimeout = num4;
        tmp5.state = {};
        tmp5.queue = [];
        backend = tmp5.backend;
        tmp9 = null;
        tmp10 = backend == null || backend.init == null;
        if (!tmp10) {
          initResult = backend.init(arg2, obj.backend, obj);
        }
        return tmp5;
      }
      obj = {};
      return;
    }
  }
  closure_5.default(Connector, arg0);
  obj = {
    key: "queueLoad",
    value: function queueLoad(toResolveHierarchyResult, arg1, arg2, callback) {
      closure_0 = arg1;
      closure_1 = arg2;
      const self = this;
      obj = {};
      obj = {};
      obj = {};
      const obj1 = {};
      let item = toResolveHierarchyResult.forEach((arg0) => {
        closure_0 = arg0;
        c1 = true;
        const item = closure_0.forEach((arg0) => {
          const combined = "" + closure_0 + "|" + arg0;
          if (!_true.reload) {
            const store = closure_1_2.store;
            if (store.hasResourceBundle(closure_0, arg0)) {
              closure_1_2.state[combined] = 2;
            }
          }
          if (closure_1_2.state[combined] >= 0) {
            if (closure_1_2.state[combined] === 1) {
              if (closure_1_4[combined] === undefined) {
                closure_1_4[combined] = true;
              }
            } else {
              closure_1_2.state[combined] = 1;
              _true = false;
              if (closure_1_4[combined] === undefined) {
                closure_1_4[combined] = true;
              }
              if (closure_1_3[combined] === undefined) {
                closure_1_3[combined] = true;
              }
              if (closure_1_6[arg0] === undefined) {
                closure_1_6[arg0] = true;
              }
            }
          }
        });
        if (!c1) {
          obj[arg0] = true;
        }
      });
      if (Object.keys(obj).length) {
        const queue = this.queue;
        const obj2 = { pending: obj };
        const _Object2 = Object;
        obj2.pendingCount = Object.keys(obj).length;
        obj2.loaded = {};
        obj2.errors = [];
        obj2.callback = callback;
        queue.push(obj2);
      } else {
        const _Object = Object;
      }
      return { toLoad: Object.keys(obj), pending: Object.keys(obj), toLoadLanguages: Object.keys(obj), toLoadNamespaces: Object.keys(obj1) };
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "loaded",
    value: function loaded(closure_0, arg1, arg2) {
      const self = this;
      closure_1 = arg1;
      const parts = closure_0.split("|");
      const first = parts[0];
      closure_3 = tmp3;
      if (arg1) {
        self.emit("failedLoading", first, tmp3, arg1);
      }
      if (!arg1) {
        if (arg2) {
          const store = self.store;
          obj = { skipCopy: true };
          store.addResourceBundle(first, tmp3, arg2, undefined, undefined, obj);
        }
      }
      let num = 2;
      if (arg1) {
        num = -1;
      }
      self.state[closure_0] = num;
      if (arg1) {
        if (arg2) {
          self.state[closure_0] = 0;
        }
      }
      obj = {};
      const queue = self.queue;
      let item = queue.forEach((loaded) => {
        closure_0 = loaded;
        const items = [first];
        closure_2_18(loaded.loaded, items, closure_3);
        closure_2_48(loaded, closure_0);
        if (closure_1) {
          const errors = loaded.errors;
          errors.push(closure_1);
        }
        if (loaded.pendingCount === 0) {
          if (!loaded.done) {
            const _Object = Object;
            const keys = Object.keys(loaded.loaded);
            let item = keys.forEach((arg0) => {
              loaded = arg0;
              if (!closure_1_4[arg0]) {
                closure_1_4[arg0] = {};
              }
              if (loaded.loaded[arg0].length) {
                const item = arr.forEach((arg0) => {
                  if (closure_2_4[closure_0][arg0] === undefined) {
                    closure_2_4[closure_0][arg0] = true;
                  }
                });
              }
            });
            loaded.done = true;
            const callback = loaded.callback;
            if (loaded.errors.length) {
              callback(loaded.errors);
            } else {
              callback();
            }
          }
        }
      });
      self.emit("loaded", obj);
      const queue1 = self.queue;
      self.queue = queue1.filter((done) => !done.done);
    }
  };
  items[1] = obj;
  obj = {
    key: "read",
    value: function read(lng, ns, fcName) {
      let self = this;
      closure_0 = lng;
      closure_1 = ns;
      closure_2 = fcName;
      self = this;
      let num = 0;
      if (arguments.length > 3) {
        num = 0;
        if (arguments[3] !== undefined) {
          num = arguments[3];
        }
      }
      if (arguments.length > 4) {
        if (arguments[4] !== undefined) {
          let retryTimeout = arguments[4];
        }
        let tmp3;
        if (arguments.length > 5) {
          tmp3 = arguments[5];
        }
        closure_6 = tmp3;
        if (lng.length) {
          if (self.readingCalls >= self.maxParallelReads) {
            let waitingReads = self.waitingReads;
            obj = { lng, ns, fcName, tried: num, wait: retryTimeout, callback: tmp3 };
            waitingReads.push(obj);
          } else {
            self.readingCalls = self.readingCalls + 1;
            function resolver(arg0, arg1) {
              self.readingCalls = self.readingCalls - 1;
              if (self.waitingReads.length > 0) {
                const waitingReads = self.waitingReads;
                const arr = waitingReads.shift();
                self.read(arr.lng, arr.ns, arr.fcName, arr.tried, arr.wait, arr.callback);
              }
              if (arg0) {
                if (arg1) {
                  if (num < self.maxRetries) {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(() => {
                      const read = closure_1_3.read;
                      read.call(closure_1_3, closure_1_0, closure_1_1, closure_1_2, closure_1_4 + 1, closure_1_5 * 2, closure_1_6);
                    }, retryTimeout);
                  }
                }
              }
              callback(arg0, arg1);
            }
            const bindResult = self.backend[fcName].bind(self.backend);
            if (bindResult.length === 2) {
              try {
                const tmp26Result = tmp26(lng, ns);
                if (tmp26Result) {
                  if (typeof promise.then === "function") {
                    promise.then((arg0) => resolver(null, arg0)).catch(tmp25);
                    const nextPromise = promise.then((arg0) => resolver(null, arg0));
                  }
                }
                tmp25(null, tmp26Result);
              } catch (tmp22) {
                tmp2(tmp22);
              }
            } else {
              return tmp26(lng, ns, tmp25);
            }
            const obj2 = self.backend[fcName];
          }
        } else {
          return tmp3(null, {});
        }
      }
      retryTimeout = self.retryTimeout;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "prepareLoading",
    value: function prepareLoading(language, arg1, arg2, arg3) {
      let self = this;
      self = this;
      if (arguments.length > 2) {
        if (arguments[2] !== undefined) {
          obj = arguments[2];
        }
        if (arguments.length > 3) {
          const tmp = arguments[3];
        }
        if (self.backend) {
          let toResolveHierarchyResult = language;
          if (closure_1_9(language)) {
            const languageUtils = self.languageUtils;
            toResolveHierarchyResult = languageUtils.toResolveHierarchy(language);
          }
          let tmp7 = arg1;
          if (closure_1_9(arg1)) {
            const items = [arg1];
            tmp7 = items;
          }
          const queueLoadResult = self.queueLoad(toResolveHierarchyResult, tmp7, obj, tmp);
          if (queueLoadResult.toLoad.length) {
            const toLoad = queueLoadResult.toLoad;
            const item = toLoad.forEach((arg0) => {
              const one = self.loadOne(arg0);
            });
          } else {
            if (!queueLoadResult.pending.length) {
              let tmpResult = tmp();
            }
            return null;
          }
        } else {
          const logger = self.logger;
          logger.warn("No backend was added via i18next.use. Will not load resources.");
          tmpResult = tmp;
          if (tmp) {
            tmpResult = tmp();
          }
          return tmpResult;
        }
      }
      obj = {};
    }
  };
  items[4] = {
    key: "load",
    value: function load(language) {
      this.prepareLoading(language, arg1, {}, arg2);
    }
  };
  items[5] = {
    key: "reload",
    value: function reload(language) {
      this.prepareLoading(language, arg1, { reload: true }, arg2);
    }
  };
  items[6] = {
    key: "loadOne",
    value: function loadOne(str) {
      let self = this;
      closure_0 = str;
      self = this;
      str = "";
      if (arguments.length > 1) {
        str = "";
        if (arguments[1] !== undefined) {
          str = arguments[1];
        }
      }
      const parts = str.split("|");
      const first = parts[0];
      closure_4 = tmp3;
      self.read(first, parts[1], "read", undefined, undefined, (arg0, arg1) => {
        if (arg0) {
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("" + "" + "loading namespace " + closure_4 + " for language " + first + " failed", arg0);
        }
        if (!arg0) {
          if (arg1) {
            const logger2 = self.logger;
            const _HermesInternal2 = HermesInternal;
            logger2.log("" + str + "loaded namespace " + closure_4 + " for language " + first, arg1);
          }
        }
        self.loaded(closure_0, arg0, arg1);
      });
    }
  };
  items[7] = {
    key: "saveMissing",
    value: function saveMissing(toResolveHierarchyResult, closure_3, key, defaultValue, updateMissing, arg5) {
      const self = this;
      if (arguments.length > 5) {
        if (arguments.length > 6) {
          if (arguments[6] !== undefined) {
            let fn = arguments[6];
          }
          const services = self.services;
          if (services != null) {
            const utils = services.utils;
            if (utils != null) {
              if (utils.hasLoadedNamespace) {
                const services2 = self.services;
                if (services2 != null) {
                  const utils2 = services2.utils;
                }
                const logger = self.logger;
                const _HermesInternal = HermesInternal;
                logger.warn("did not save key \"" + key + "\" as the namespace \"" + closure_3 + "\" was not yet loaded", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
              }
            }
          }
          if (key !== undefined) {
            if (key !== null) {
              if (key !== "") {
                const backend = self.backend;
                if (backend != null) {
                  if (backend.create) {
                    const _Object = Object;
                    obj = { isUpdate: updateMissing };
                    const merged = Object.assign({}, {}, obj);
                    const create = self.backend.create;
                    const bindResult = create.bind(self.backend);
                    if (bindResult.length < 6) {
                      try {
                        if (arr2.length === 5) {
                          let arr2Result = arr2(toResolveHierarchyResult, closure_3, key, defaultValue, merged);
                        } else {
                          arr2Result = arr2(toResolveHierarchyResult, closure_3, key, defaultValue);
                        }
                        if (arr2Result) {
                          if (typeof arr2Result.then === "function") {
                            arr2Result.then((arg0) => fn(null, arg0)).catch(tmp4);
                            const nextPromise = arr2Result.then((arg0) => fn(null, arg0));
                          }
                        }
                        tmp4(null, arr2Result);
                      } catch (tmp43) {
                        tmp2(tmp43);
                      }
                    } else {
                      arr2Result = arr2(toResolveHierarchyResult, closure_3, key, defaultValue, tmp4, merged);
                    }
                  }
                }
                if (toResolveHierarchyResult) {
                  if (toResolveHierarchyResult[0]) {
                    const store = self.store;
                    store.addResource(toResolveHierarchyResult[0], closure_3, key, defaultValue);
                  }
                }
              }
            }
          }
        }
        fn = () => {

        };
      }
    }
  };
  return closure_8.default(Connector, items);
})(tmp8);
function get() {
  obj = {
    debug: false,
    initAsync: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler(items) {
      obj = {};
      closure_0 = obj;
      if (typeof items[1] === "object") {
        closure_0 = tmp;
        obj = tmp;
      }
      if (closure_1_9(items[1])) {
        obj.defaultValue = items[1];
      }
      if (closure_1_9(items[2])) {
        obj.tDescription = items[2];
      }
      if (typeof items[2] === "object") {
        closure_1 = tmp2;
        const _Object = Object;
        const keys = Object.keys(tmp2);
        const item = keys.forEach((arg0) => {
          closure_0[arg0] = table[arg0];
        });
      }
      return obj;
    }
  };
  obj = {
    escapeValue: true,
    format(arg0) {
      return arg0;
    },
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1000,
    skipOnVariables: true
  };
  obj.interpolation = obj;
  obj.cacheInBuiltFormats = true;
  return obj;
}
function transformOptions(ns) {
  if (isString(ns.ns)) {
    const items = [ns.ns];
    ns.ns = items;
  }
  if (isString(ns.fallbackLng)) {
    const items1 = [ns.fallbackLng];
    ns.fallbackLng = items1;
  }
  if (isString(ns.fallbackNS)) {
    const items2 = [ns.fallbackNS];
    ns.fallbackNS = items2;
  }
  let supportedLngs = ns.supportedLngs;
  let index;
  if (supportedLngs != null) {
    if (supportedLngs.indexOf != null) {
      index = supportedLngs.indexOf("cimode");
    }
  }
  if (index < 0) {
    supportedLngs = ns.supportedLngs;
    ns.supportedLngs = supportedLngs.concat(["cimode"]);
  }
  if (typeof ns.initImmediate === "boolean") {
    ns.initAsync = ns.initImmediate;
  }
  return ns;
}
function noop() {

}
function bindMemberFunctions(arg0) {
  closure_0 = arg0;
  const ownPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(arg0));
  const item = ownPropertyNames.forEach((arg0) => {
    if (typeof dependencyMap[arg0] === "function") {
      dependencyMap[arg0] = dependencyMap[arg0].bind(dependencyMap);
      obj = dependencyMap[arg0];
    }
  });
}
let obj2 = ((arg0) => {
  class I18n {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        closure_1 = first;
        num = 1;
        tmp = undefined;
        if (arguments.length > 1) {
          tmp = arguments[1];
        }
        closure_2 = tmp;
        tmp2 = closure_1_7;
        tmp3 = closure_0;
        defaultResult = closure_1_7.default(self, closure_0);
        tmp5 = closure_1_54;
        obj2 = closure_1_54(self, closure_0);
        closure_0 = obj2;
        tmp6 = closure_1_51;
        tmp7 = closure_1_51(first);
        obj2.options = first;
        obj2.services = {};
        tmp8 = closure_1_31;
        obj2.logger = closure_1_31;
        obj = {};
        obj.external = [];
        obj2.modules = obj;
        tmp9 = closure_1_53;
        tmp10 = closure_1_53(obj2);
        if (tmp) {
          if (!obj2.isInitialized) {
            if (!first.isClone) {
              if (obj2.options.initAsync) {
                tmp13 = globalThis;
                _setTimeout = setTimeout;
                timerId = setTimeout(() => {
                  obj2.init(first, closure_2);
                }, 0);
              } else {
                initResult = obj2.init(first, tmp);
                tmp12 = closure_1_3;
                return closure_1_3.default(obj2, obj2);
              }
            }
          }
        }
        return obj2;
      }
      first = {};
      return;
    }
  }
  closure_5.default(I18n, arg0);
  obj = {
    key: "init",
    value: function init() {
      let self = this;
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          let first = arguments[0];
        }
        let tmp;
        if (arguments.length > 1) {
          tmp = arguments[1];
        }
        closure_1 = tmp;
        self.isInitializing = true;
        obj = first;
        if (typeof first === "function") {
          closure_1 = first;
          obj = {};
          tmp = first;
        }
        if (obj.defaultNS == null) {
          if (obj.ns) {
            const ns = obj.ns;
            if (closure_1_9(obj.ns)) {
              obj.defaultNS = ns;
            } else if (ns.indexOf("translation") < 0) {
              obj.defaultNS = obj.ns[0];
            }
          }
        }
        const tmp5 = closure_1_50();
        const _Object = Object;
        closure_1_51(obj);
        const _Object2 = Object;
        self.options = Object.assign({}, tmp5, self.options, obj);
        const _Object3 = Object;
        self.options.interpolation = Object.assign({}, tmp5.interpolation, self.options.interpolation);
        if (obj.keySeparator !== undefined) {
          self.options.userDefinedKeySeparator = obj.keySeparator;
        }
        if (obj.nsSeparator !== undefined) {
          self.options.userDefinedNsSeparator = obj.nsSeparator;
        }
        function createClassOnDemand(backend) {
          if (backend) {
            if (typeof backend === "function") {
              const prototype = backend.prototype;
              const tmp4 = new backend();
              return tmp4;
            } else {
              return backend;
            }
          } else {
            return null;
          }
        }
        if (!self.options.isClone) {
          const init = closure_1_31.init;
          if (self.modules.logger) {
            init(createClassOnDemand(self.modules.logger), self.options);
          } else {
            init(null, self.options);
          }
          if (self.modules.formatter) {
            let formatter = self.modules.formatter;
          } else {
            formatter = closure_1_47;
          }
          let prototype = closure_1_37.prototype;
          const tmp17 = new closure_1_37(self.options);
          const prototype2 = closure_1_32.prototype;
          const tmp22 = new closure_1_32(self.options.resources, self.options);
          self.store = tmp22;
          const services = self.services;
          services.logger = closure_1_31;
          services.resourceStore = self.store;
          services.languageUtils = tmp17;
          obj = { prepend: self.options.pluralSeparator, simplifyPluralSuffix: self.options.simplifyPluralSuffix };
          const prototype3 = closure_1_40.prototype;
          const tmp30 = new closure_1_40(tmp17, obj);
          services.pluralResolver = tmp30;
          if (formatter) {
            if (!self.options.interpolation.format) {
              services.formatter = createClassOnDemand(formatter);
              const formatter2 = services.formatter;
              formatter2.init(services, self.options);
              const format = services.formatter.format;
              self.options.interpolation.format = format.bind(services.formatter);
            }
          }
          const prototype4 = closure_1_43.prototype;
          const tmp36 = new closure_1_43(self.options);
          services.interpolator = tmp36;
          const obj1 = {};
          const hasLoadedNamespace = self.hasLoadedNamespace;
          obj1.hasLoadedNamespace = hasLoadedNamespace.bind(self);
          services.utils = obj1;
          const prototype5 = closure_1_49.prototype;
          const tmp42 = new closure_1_49(createClassOnDemand(self.modules.backend), services.resourceStore, services, self.options);
          services.backendConnector = tmp42;
          const backendConnector = services.backendConnector;
          backendConnector.on("*", (arg0) => {
            const length = arguments.length;
            let num = 0;
            if (length > 1) {
              num = length - 1;
            }
            const array = new Array(num);
            for (let num2 = 1; num2 < length; num2 = num2 + 1) {
              array[num2 - 1] = arguments[num2];
            }
            const emit = self.emit;
            const items = [arg0];
            emit.apply(self, items.concat(array));
          });
          if (self.modules.languageDetector) {
            services.languageDetector = createClassOnDemand(self.modules.languageDetector);
            if (services.languageDetector.init) {
              const languageDetector = services.languageDetector;
              languageDetector.init(services, self.options.detection, self.options);
            }
          }
          if (self.modules.i18nFormat) {
            services.i18nFormat = createClassOnDemand(self.modules.i18nFormat);
            if (services.i18nFormat.init) {
              const i18nFormat = services.i18nFormat;
              i18nFormat.init(self);
            }
          }
          const prototype6 = closure_1_36.prototype;
          const tmp50 = new closure_1_36(self.services, self.options);
          self.translator = tmp50;
          const translator = self.translator;
          translator.on("*", (arg0) => {
            const length = arguments.length;
            let num = 0;
            if (length > 1) {
              num = length - 1;
            }
            const array = new Array(num);
            for (let num2 = 1; num2 < length; num2 = num2 + 1) {
              array[num2 - 1] = arguments[num2];
            }
            const emit = self.emit;
            const items = [arg0];
            emit.apply(self, items.concat(array));
          });
          const external = self.modules.external;
          const item = external.forEach((init) => {
            if (init.init) {
              init.init(self);
            }
          });
        }
        self.format = self.options.interpolation.format;
        if (!tmp) {
          closure_1 = closure_1_52;
        }
        if (self.options.fallbackLng) {
          if (!self.services.languageDetector) {
            if (!self.options.lng) {
              const languageUtils = self.services.languageUtils;
              const fallbackCodes = languageUtils.getFallbackCodes(self.options.fallbackLng);
              if (fallbackCodes.length > 0) {
                if (fallbackCodes[0] !== "dev") {
                  self.options.lng = fallbackCodes[0];
                }
              }
            }
          }
        }
        if (!self.services.languageDetector) {
          if (!self.options.lng) {
            let logger = self.logger;
            logger.warn("init: no languageDetector is used and no lng is defined");
          }
        }
        let items = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        const item1 = items.forEach((arg0) => {
          closure_0 = arg0;
          closure_0[arg0] = () => {
            store = store.store;
            return store[store](...arguments);
          };
        });
        const items1 = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
        const item2 = items1.forEach((arg0) => {
          closure_0 = arg0;
          closure_0[arg0] = () => {
            store = store.store;
            store[store](...arguments);
            return store;
          };
        });
        const tmp59 = closure_1_10();
        closure_2 = tmp59;
        function load() {
          function finish(arg0, arg1) {
            closure_1_0.isInitializing = false;
            if (closure_1_0.isInitialized) {
              if (!closure_1_0.initializedStoreOnce) {
                const logger = closure_1_0.logger;
                logger.warn("init: i18next is already initialized. You should call init just once!");
              }
            }
            closure_1_0.isInitialized = true;
            if (!closure_1_0.options.isClone) {
              const logger2 = closure_1_0.logger;
              logger2.log("initialized", closure_1_0.options);
            }
            closure_1_0.emit("initialized", closure_1_0.options);
            closure_1_2.resolve(arg1);
            closure_1_1(arg0, arg1);
          }
          if (self.languages) {
            if (!self.isInitialized) {
              const t = self.t;
              finish(null, t.bind(self));
            }
          }
          self.changeLanguage(self.options.lng, finish);
        }
        if (!self.options.resources) {
          if (self.options.initAsync) {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(load, 0);
          }
          return tmp59;
        }
        load();
      }
      first = {};
    }
  };
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "loadResources",
    value: function loadResources(bestMatchFromCodes, arg1) {
      let self = this;
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          let tmp = arguments[1];
        }
        closure_1 = tmp;
        let str = bestMatchFromCodes;
        if (!closure_1_9(bestMatchFromCodes)) {
          str = self.language;
        }
        if (typeof bestMatchFromCodes === "function") {
          closure_1 = bestMatchFromCodes;
          tmp = bestMatchFromCodes;
        }
        if (self.options.resources) {
          if (!self.options.partialBundledLanguages) {
            tmp(null);
          }
        }
        let formatted;
        if (str != null) {
          formatted = str.toLowerCase();
        }
        if (formatted === "cimode") {
          return tmp();
        }
        const items = [];
        function append(bestMatchFromCodes) {
          if (bestMatchFromCodes) {
            if (bestMatchFromCodes !== "cimode") {
              const languageUtils = self.services.languageUtils;
              const item = languageUtils.toResolveHierarchy(bestMatchFromCodes).forEach((arg0) => {
                if (arg0 !== "cimode") {
                  if (closure_1_2.indexOf(arg0) < 0) {
                    closure_1_2.push(arg0);
                  }
                }
              });
            }
          }
        }
        if (str) {
          append(str);
        } else {
          let languageUtils = self.services.languageUtils;
          const fallbackCodes = languageUtils.getFallbackCodes(self.options.fallbackLng);
          let item = fallbackCodes.forEach((arg0) => append(arg0));
        }
        const preload = self.options.preload;
        if (!tmp9) {
          const item1 = preload.forEach((arg0) => append(arg0));
        }
        const backendConnector = self.services.backendConnector;
        backendConnector.load(items, self.options.ns, (arg0) => {
          if (!arg0) {
            if (!self.resolvedLanguage) {
              if (self.language) {
                self.setResolvedLanguage(self.language);
              }
            }
          }
          bestMatchFromCodes(arg0);
        });
        tmp9 = preload == null || preload.forEach == null;
      }
      tmp = closure_1_52;
    }
  };
  items[1] = obj;
  obj = {
    key: "reloadResources",
    value: function reloadResources(fn, fn2) {
      let tmp = arg2;
      const self = this;
      closure_0 = arg2;
      const tmp2 = closure_1_10();
      closure_1 = tmp2;
      let languages = fn;
      if (typeof fn === "function") {
        closure_0 = fn;
        tmp = fn;
      }
      let ns = fn2;
      if (typeof fn2 === "function") {
        closure_0 = fn2;
        tmp = fn2;
      }
      if (!languages) {
        languages = self.languages;
      }
      if (!ns) {
        ns = self.options.ns;
      }
      if (!tmp) {
        closure_0 = closure_1_52;
      }
      const backendConnector = self.services.backendConnector;
      backendConnector.reload(languages, ns, (arg0) => {
        closure_1.resolve();
        callback(arg0);
      });
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "use",
    value: function use(type) {
      const self = this;
      if (type) {
        if (type.type) {
          if (type.type === "backend") {
            self.modules.backend = type;
          }
          if (type.type === "logger") {
            self.modules.logger = type;
          }
          if (type.type === "languageDetector") {
            self.modules.languageDetector = type;
          }
          if (type.type === "i18nFormat") {
            self.modules.i18nFormat = type;
          }
          if (type.type === "postProcessor") {
            closure_1_33.addPostProcessor(type);
          }
          if (type.type === "formatter") {
            self.modules.formatter = type;
          }
          if (type.type === "3rdParty") {
            const external = self.modules.external;
            external.push(type);
          }
          return self;
        } else {
          const _Error2 = Error;
          const error = new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        throw error1;
      }
    }
  };
  items[4] = {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(language) {
      let tmp;
      const self = this;
      if (language) {
        if (self.languages) {
          const items = ["cimode", "dev"];
          if (items.indexOf(language) <= -1) {
            let num2 = 0;
            if (0 < self.languages.length) {
              while (true) {
                tmp = self.languages[num2];
                let items1 = ["cimode", "dev"];
                let tmp2 = num2;
                if (items1.indexOf(tmp) <= -1) {
                  let store = self.store;
                  if (store.hasLanguageSomeTranslations(tmp)) {
                    break;
                  }
                }
                num2 = num2 + 1;
              }
              self.resolvedLanguage = tmp;
            }
            if (!self.resolvedLanguage) {
              const languages = self.languages;
              if (languages.indexOf(language) < 0) {
                const store2 = self.store;
                if (store2.hasLanguageSomeTranslations(language)) {
                  self.resolvedLanguage = language;
                  const languages1 = self.languages;
                  languages1.unshift(language);
                }
              }
            }
          }
        }
      }
    }
  };
  items[5] = {
    key: "changeLanguage",
    value: function changeLanguage(isLanguageChangingTo) {
      let self = this;
      closure_0 = isLanguageChangingTo;
      closure_1 = arg1;
      self = this;
      this.isLanguageChangingTo = isLanguageChangingTo;
      const tmp = closure_1_10();
      closure_3 = tmp;
      this.emit("languageChanging", isLanguageChangingTo);
      function setLngProps(bestMatchFromCodes) {
        self.language = bestMatchFromCodes;
        const languageUtils = self.services.languageUtils;
        self.languages = languageUtils.toResolveHierarchy(bestMatchFromCodes);
        self.resolvedLanguage = undefined;
        self.setResolvedLanguage(bestMatchFromCodes);
      }
      function done(arg0, bestMatchFromCodes) {
        if (bestMatchFromCodes) {
          if (tmp.isLanguageChangingTo === closure_0) {
            setLngProps(bestMatchFromCodes);
            const translator = self.translator;
            translator.changeLanguage(bestMatchFromCodes);
            self.isLanguageChangingTo = undefined;
            self.emit("languageChanged", bestMatchFromCodes);
            const logger = self.logger;
            logger.log("languageChanged", bestMatchFromCodes);
          }
        } else {
          tmp.isLanguageChangingTo = undefined;
        }
        closure_3.resolve(() => {
          const t = closure_1_2.t;
          return t(...arguments);
        });
        if (callback) {
          callback(arg0, () => {
            const t = closure_1_2.t;
            return t(...arguments);
          });
        }
      }
      function setLng(languageDetector) {
        let items = languageDetector;
        if (!bestMatchFromCodes) {
          items = languageDetector;
          if (!languageDetector) {
            items = languageDetector;
            if (self.services.languageDetector) {
              items = [];
            }
          }
        }
        bestMatchFromCodes = items;
        if (!closure_2_9(items)) {
          let first = items;
          if (items) {
            first = items[0];
          }
          bestMatchFromCodes = first;
        }
        const store = self.store;
        if (!store.hasLanguageSomeTranslations(bestMatchFromCodes)) {
          const languageUtils = self.services.languageUtils;
          let tmp6 = items;
          if (closure_2_9(items)) {
            const items1 = [items];
            tmp6 = items1;
          }
          bestMatchFromCodes = languageUtils.getBestMatchFromCodes(tmp6);
        }
        if (bestMatchFromCodes) {
          if (!self.language) {
            setLngProps(bestMatchFromCodes);
          }
          if (!self.translator.language) {
            const translator = self.translator;
            translator.changeLanguage(bestMatchFromCodes);
          }
          languageDetector = self.services.languageDetector;
          if (!tmp15) {
            languageDetector.cacheUserLanguage(bestMatchFromCodes);
          }
          tmp15 = languageDetector == null || languageDetector.cacheUserLanguage == null;
        }
        const resources = self.loadResources(bestMatchFromCodes, (arg0) => {
          closure_1_5(arg0, bestMatchFromCodes);
        });
      }
      if (!isLanguageChangingTo) {
        if (self.services.languageDetector) {
          if (!self.services.languageDetector.async) {
            let languageDetector = self.services.languageDetector;
            setLng(languageDetector.detect());
          }
          return tmp;
        }
      }
      if (!isLanguageChangingTo) {
        if (self.services.languageDetector) {
          if (self.services.languageDetector.async) {
            if (self.services.languageDetector.detect.length === 0) {
              const languageDetector3 = self.services.languageDetector;
              languageDetector3.detect().then(setLng);
              const detectResult = languageDetector3.detect();
            } else {
              const languageDetector2 = self.services.languageDetector;
              languageDetector2.detect(setLng);
            }
          }
        }
      }
      setLng(isLanguageChangingTo);
    }
  };
  items[6] = {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      closure_0 = keyPrefix;
      const self = this;
      function fixedT(arr, obj) {
        if (typeof obj !== "object") {
          const length = arguments.length;
          let _Array = Array;
          let num2 = 0;
          if (length > 2) {
            num2 = length - 2;
          }
          const prototype = _Array.prototype;
          _Array = new _Array(num2);
          for (let num3 = 2; num3 < length; num3 = num3 + 1) {
            _Array[num3 - 2] = arguments[num3];
          }
          const options = _self.options;
          const items = [arr, obj];
          const result = options.overloadTranslationOptionHandler(items.concat(_Array));
          let merged = result;
          let tmp3 = result;
        } else {
          const _Object = Object;
          merged = Object.assign({}, obj);
          tmp3 = merged;
        }
        let lng = tmp3.lng;
        if (!lng) {
          lng = fixedT.lng;
        }
        tmp3.lng = lng;
        let lngs = tmp3.lngs;
        if (!lngs) {
          lngs = fixedT.lngs;
        }
        tmp3.lngs = lngs;
        let ns = tmp3.ns;
        if (!ns) {
          ns = fixedT.ns;
        }
        tmp3.ns = ns;
        if (tmp3.keyPrefix !== "") {
          keyPrefix = tmp3.keyPrefix || merged;
          if (!keyPrefix) {
            keyPrefix = fixedT.keyPrefix;
          }
          tmp3.keyPrefix = keyPrefix;
        }
        _self = tmp16;
        if (tmp3.keyPrefix) {
          const _Array2 = Array;
          if (Array.isArray(arr)) {
            let mapped = arr.map((arg0) => "" + merged.keyPrefix + closure_1 + arg0);
          }
          return _self.t(mapped, tmp3);
        }
        mapped = arr;
        if (tmp3.keyPrefix) {
          const _HermesInternal = HermesInternal;
          mapped = "" + tmp3.keyPrefix + tmp16 + arr;
        }
      }
      if (closure_1_9(lng)) {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  };
  items[7] = {
    key: "t",
    value: function t(DEVICE_NAME, arg1) {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const translator = this.translator;
      let applyResult;
      if (translator != null) {
        const translate = translator.translate;
        applyResult = translate.apply(translator, array);
      }
      return applyResult;
    }
  };
  items[8] = {
    key: "exists",
    value: function exists() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const translator = this.translator;
      let applyResult;
      if (translator != null) {
        const exists = translator.exists;
        applyResult = exists.apply(translator, array);
      }
      return applyResult;
    }
  };
  items[9] = {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(defaultNS) {
      this.options.defaultNS = defaultNS;
    }
  };
  items[10] = {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(arg0) {
      let self = this;
      self = this;
      if (arguments.length > 1) {
        if (arguments[1] !== undefined) {
          obj = arguments[1];
        }
        if (self.isInitialized) {
          if (self.languages) {
            if (self.languages.length) {
              let str3 = obj.lng || self.resolvedLanguage;
              if (!str3) {
                str3 = self.languages[0];
              }
              let flag4 = false;
              if (self.options) {
                flag4 = self.options.fallbackLng;
              }
              if (str3.toLowerCase() === "cimode") {
                return true;
              } else {
                function loadNotPending(arg0, arg1) {
                  const tmp = self.services.backendConnector.state["" + arg0 + "|" + arg1];
                  let tmp2 = tmp === -1;
                  if (!tmp2) {
                    tmp2 = tmp === 0;
                  }
                  if (!tmp2) {
                    tmp2 = tmp === 2;
                  }
                  return tmp2;
                }
                if (obj.precheck) {
                  const precheckResult = obj.precheck(self, loadNotPending);
                  if (precheckResult !== undefined) {
                    return precheckResult;
                  }
                }
                if (self.hasResourceBundle(str3, arg0)) {
                  return true;
                } else {
                  if (self.services.backendConnector.backend) {
                    if (loadNotPending(str3, arg0)) {
                      return true;
                    }
                    return false;
                  }
                  return true;
                }
              }
            }
          }
          const logger2 = self.logger;
          logger2.warn("hasLoadedNamespace: i18n.languages were undefined or empty", self.languages);
          return false;
        } else {
          const logger = self.logger;
          logger.warn("hasLoadedNamespace: i18next was not initialized", self.languages);
          return false;
        }
      }
      obj = {};
    }
  };
  items[11] = {
    key: "loadNamespaces",
    value: function loadNamespaces(arg0, arg1) {
      let self = this;
      closure_0 = arg1;
      self = this;
      const tmp = closure_1_10();
      closure_2 = tmp;
      if (this.options.ns) {
        let arr = arg0;
        if (closure_1_9(arg0)) {
          const items = [arg0];
          arr = items;
        }
        const item = arr.forEach((arg0) => {
          const ns = self.options.ns;
          if (ns.indexOf(arg0) < 0) {
            const ns1 = self.options.ns;
            ns1.push(arg0);
          }
        });
        const resources = self.loadResources((arg0) => {
          closure_2.resolve();
          if (callback) {
            callback(arg0);
          }
        });
        return tmp;
      } else {
        if (arg1) {
          arg1();
        }
        return Promise.resolve();
      }
    }
  };
  items[12] = {
    key: "loadLanguages",
    value: function loadLanguages(arg0, arg1) {
      let self = this;
      closure_0 = arg1;
      self = this;
      const tmp = closure_1_10();
      closure_2 = tmp;
      let arr = arg0;
      if (closure_1_9(arg0)) {
        const items = [arg0];
        arr = items;
      }
      obj = self.options.preload || [];
      const found = arr.filter((formatLanguageCodeResult) => {
        let isSupportedCodeResult = obj.indexOf(formatLanguageCodeResult) < 0;
        if (isSupportedCodeResult) {
          const languageUtils = self.services.languageUtils;
          isSupportedCodeResult = languageUtils.isSupportedCode(formatLanguageCodeResult);
        }
        return isSupportedCodeResult;
      });
      if (found.length) {
        self.options.preload = obj.concat(found);
        const resources = self.loadResources((arg0) => {
          closure_2.resolve();
          if (callback) {
            callback(arg0);
          }
        });
        return tmp;
      } else {
        if (arg1) {
          arg1();
        }
        return Promise.resolve();
      }
    }
  };
  items[13] = {
    key: "dir",
    value: function dir(language) {
      let str = language;
      const self = this;
      if (!language) {
        const resolvedLanguage = self.resolvedLanguage;
        if (resolvedLanguage) {
          str = resolvedLanguage;
        } else {
          const languages = self.languages;
          let length;
          if (languages != null) {
            length = languages.length;
          }
          if (length > 0) {
            language = self.languages[0];
          } else {
            language = self.language;
          }
        }
      }
      if (str) {
        const items = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
        const services = self.services;
        let languageUtils;
        if (services != null) {
          languageUtils = services.languageUtils;
        }
        if (!languageUtils) {
          const prototype = closure_1_37.prototype;
          languageUtils = new closure_1_37(closure_1_50());
        }
        if (items.indexOf(languageUtils.getLanguagePartFromCode(str)) > -1) {
          let str4 = "rtl";
        } else {
          const formatted = str.toLowerCase();
          str4 = "ltr";
        }
        return str4;
      } else {
        return "rtl";
      }
    }
  };
  items[14] = {
    key: "cloneInstance",
    value: function cloneInstance() {
      let self = this;
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          let first = arguments[0];
        }
        if (arguments.length > 1) {
          if (arguments[1] !== undefined) {
            let tmp2 = arguments[1];
          }
          const forkResourceStore = first.forkResourceStore;
          if (forkResourceStore) {
            delete tmp.forkResourceStore;
          }
          const _Object = Object;
          obj = { isClone: true };
          const _Object2 = Object;
          const merged = Object.assign({}, self.options, first, obj);
          const prototype = self.prototype;
          const obj3 = new self(merged);
          if (first.debug !== undefined) {
            const logger = obj3.logger;
            obj3.logger = logger.clone(first);
          }
          let items = ["store", "services", "language"];
          const item = items.forEach((arg0) => {
            obj3[arg0] = self[arg0];
          });
          const _Object3 = Object;
          obj3.services = Object.assign({}, self.services);
          obj = {};
          ({ hasLoadedNamespace, services } = obj3);
          obj.hasLoadedNamespace = hasLoadedNamespace.bind(obj3);
          services.utils = obj;
          if (forkResourceStore) {
            const _Object4 = Object;
            let keys = Object.keys(self.store.data);
            const prototype2 = closure_1_32.prototype;
            const tmp17 = new closure_1_32(keys.reduce((arg0, arg1) => {
              const _self = arg0;
              closure_1 = arg1;
              arg0[arg1] = Object.assign({}, _self.store.data[arg1]);
              const keys = Object.keys(arg0[arg1]);
              arg0[arg1] = keys.reduce((arg0, arg1) => {
                arg0[arg1] = Object.assign({}, table[closure_1][arg1]);
                return arg0;
              }, arg0[arg1]);
              return arg0;
            }, {}), merged);
            obj3.store = tmp17;
            obj3.services.resourceStore = obj3.store;
          }
          const prototype3 = closure_1_36.prototype;
          const tmp23 = new closure_1_36(obj3.services, merged);
          obj3.translator = tmp23;
          const translator = obj3.translator;
          translator.on("*", (arg0) => {
            const length = arguments.length;
            let num = 0;
            if (length > 1) {
              num = length - 1;
            }
            const array = new Array(num);
            for (let num2 = 1; num2 < length; num2 = num2 + 1) {
              array[num2 - 1] = arguments[num2];
            }
            const emit = obj3.emit;
            const items = [arg0];
            emit.apply(obj3, items.concat(array));
          });
          obj3.init(merged, tmp2);
          obj3.translator.options = merged;
          const obj1 = {};
          const hasLoadedNamespace2 = obj3.hasLoadedNamespace;
          obj1.hasLoadedNamespace = hasLoadedNamespace2.bind(obj3);
          obj3.translator.backendConnector.services.utils = obj1;
          return obj3;
        }
        tmp2 = closure_1_52;
      }
      first = {};
    }
  };
  items[15] = {
    key: "toJSON",
    value: function toJSON() {
      return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
    }
  };
  let items1 = [
    {
      key: "createInstance",
      value: function createInstance() {
        if (arguments.length > 0) {
          if (arguments[0] !== undefined) {
            let first = arguments[0];
          }
          let tmp;
          if (arguments.length > 1) {
            tmp = arguments[1];
          }
          const prototype = I18n.prototype;
          const tmp7 = new I18n(first, tmp);
          return tmp7;
        }
        first = {};
      }
    }
  ];
  return closure_8.default(I18n, items, items1);
})(tmp8);
const instance = obj2.createInstance();
instance.createInstance = obj2.createInstance;
({ createInstance: exports.createInstance, dir: exports.dir, init: exports.init, loadResources: exports.loadResources, reloadResources: exports.reloadResources, use: exports.use, changeLanguage: exports.changeLanguage, getFixedT: exports.getFixedT, t: exports.t, exists: exports.exists, setDefaultNamespace: exports.setDefaultNamespace, hasLoadedNamespace: exports.hasLoadedNamespace, loadNamespaces: exports.loadNamespaces, loadLanguages: exports.loadLanguages } = instance);

export default instance;
