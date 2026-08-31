// Module ID: 812
// Function ID: 8526
// Name: hooks
// Dependencies: []

// Module 812 (hooks)
let fn = () => {
  class hooks {
    constructor() {
      return createLocal(...arguments);
    }
    static parseTwoDigitYear(arg0) {
      tmp = toInt(arg0);
      num = 2000;
      if (toInt(arg0) > 68) {
        num = 1900;
      }
      return tmp + num;
    }
    static ISO_8601() {
      return;
    }
    static RFC_2822() {
      return;
    }
    static updateOffset() {
      return;
    }
    static min() {
      slice = [].slice;
      return pickBy("isBefore", slice.call(arguments, 0));
    }
    static max() {
      slice = [].slice;
      return pickBy("isAfter", slice.call(arguments, 0));
    }
    static now() {
      _Date = Date;
      if (Date.now) {
        nowResult = _Date.now();
      } else {
        prototype = _Date.prototype;
        tmp = new.target;
        tmp2 = new.target;
        _Date = new _Date();
        tmp4 = _Date;
        nowResult = +_Date;
      }
      return nowResult;
    }
    static unix(arg0) {
      return createLocal(arg0 * 1000);
    }
    static months(arg0, arg1) {
      return listMonthsImpl(arg0, arg1, "months");
    }
    static weekdays(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
    }
    static parseZone() {
      applyResult = createLocal(...arguments);
      return applyResult.parseZone();
    }
    static monthsShort(arg0, arg1) {
      return listMonthsImpl(arg0, arg1, "monthsShort");
    }
    static weekdaysMin(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
    }
    static updateLocale(arg0, arg1) {
      if (arg1 != null) {
        _config = closure_36;
        tmp7 = closure_37;
        if (closure_37[arg0] == null) {
          tmp9 = loadLocale;
          tmp10 = loadLocale(arg0);
          if (tmp10 != null) {
            _config = tmp10._config;
          }
          tmp11 = mergeConfigs;
          tmp12 = mergeConfigs(_config, arg1);
          if (tmp10 == null) {
            tmp12.abbr = arg0;
          }
          tmp13 = Locale;
          prototype = Locale.prototype;
          tmp14 = new.target;
          tmp15 = new.target;
          tmp16 = tmp12;
          tmp17 = new Locale(tmp12);
          tmp18 = tmp17;
          tmp19 = closure_37;
          tmp17.parentLocale = closure_37[arg0];
          tmp20 = closure_37;
          closure_37[arg0] = tmp17;
          tmp25 = getSetGlobalLocale;
          tmp26 = getSetGlobalLocale(arg0);
        } else {
          tmp8 = closure_37;
        }
        tmp21 = closure_37;
        obj = closure_37[arg0];
        tmp22 = mergeConfigs;
        tmp23 = closure_37;
        result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
      } else {
        tmp3 = closure_37;
        if (closure_37[arg0] != null) {
          tmp28 = closure_37;
          if (closure_37[arg0].parentLocale != null) {
            tmp5 = closure_37;
            closure_37[arg0] = closure_37[arg0].parentLocale;
            tmp6 = getSetGlobalLocale;
            if (arg0 === getSetGlobalLocale()) {
              tmp30 = getSetGlobalLocale;
              tmp31 = getSetGlobalLocale(arg0);
            }
          } else {
            tmp4 = closure_37;
            if (closure_37[arg0] != null) {
              tmp29 = closure_37;
              delete tmp2[tmp];
            }
          }
        }
        tmp27 = closure_37;
        return closure_37[arg0];
      }
      return;
    }
    static locales() {
      return keys(closure_37);
    }
    static weekdaysShort(arg0, arg1, arg2) {
      return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
    }
    static relativeTimeRounding(arg0) {
      if (arg0 === undefined) {
        tmp = closure_57;
        return closure_57;
      } else {
        str = "function";
        if (typeof arg0 === "function") {
          closure_57 = arg0;
          flag2 = true;
          return true;
        } else {
          flag = false;
          return false;
        }
      }
    }
    static relativeTimeThreshold(arg0, arg1) {
      if (closure_58[arg0] === undefined) {
        flag2 = false;
        return false;
      } else if (arg1 === undefined) {
        tmp3 = closure_58;
        return closure_58[arg0];
      } else {
        tmp = closure_58;
        closure_58[arg0] = arg1;
        str = "s";
        if (arg0 === "s") {
          tmp2 = closure_58;
          num = 1;
          closure_58.ss = arg1 - 1;
        }
        flag = true;
        return true;
      }
    }
    static calendarFormat(arg0, arg1) {
      diffResult = arg0.diff(arg1, "days", true);
      str = "sameElse";
      str2 = "sameElse";
      if (diffResult >= -6) {
        num = -1;
        str3 = "lastWeek";
        if (diffResult >= -1) {
          num2 = 0;
          str4 = "lastDay";
          if (diffResult >= 0) {
            num3 = 1;
            str5 = "sameDay";
            if (diffResult >= 1) {
              num4 = 2;
              str6 = "nextDay";
              if (diffResult >= 2) {
                num5 = 7;
                if (diffResult < 7) {
                  str = "nextWeek";
                }
                str6 = str;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return str2;
    }
  }
  function isArray(closure_1) {
    let tmp = closure_1 instanceof Array;
    if (!tmp) {
      const _Object = Object;
      tmp = toString.call(closure_1) === "[object Array]";
    }
    return tmp;
  }
  function isObject(closure_1) {
    let tmp = closure_1 != null;
    if (tmp) {
      const _Object = Object;
      tmp = toString.call(closure_1) === "[object Object]";
    }
    return tmp;
  }
  function hasOwnProp(closure_0, key10005) {
    return hasOwnProperty.call(closure_0, key10005);
  }
  function isObjectEmpty(_a) {
    if (Object.getOwnPropertyNames) {
      const _Object = Object;
      return Object.getOwnPropertyNames(_a).length === 0;
    } else {
      for (const key10007 in arg0) {
        let tmp2 = key10007;
        let tmp3 = hasOwnProp;
        if (!hasOwnProp(arg0, key10007)) {
          continue;
        } else {
          let flag = false;
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(arg0) {
    return arg0 === undefined;
  }
  function isNumber(closure_1) {
    let tmp = typeof closure_1 === "number";
    if (!tmp) {
      const _Object = Object;
      tmp = toString.call(closure_1) === "[object Number]";
    }
    return tmp;
  }
  function isDate(closure_1) {
    let tmp = closure_1 instanceof Date;
    if (!tmp) {
      const _Object = Object;
      tmp = toString.call(closure_1) === "[object Date]";
    }
    return tmp;
  }
  function map(Number, closure_0) {
    items = [];
    for (let num = 0; num < length; num = num + 1) {
      let arr = items.push(closure_0(Number[num], num));
    }
    return items;
  }
  function extend(arg0, closure_0) {
    for (const key10005 in arg1) {
      let tmp = key10005;
      let tmp2 = hasOwnProp;
      if (!hasOwnProp(arg1, key10005)) {
        continue;
      } else {
        arg0[key10005] = arg1[key10005];
        continue;
      }
      continue;
    }
    if (hasOwnProp(closure_0, "toString")) {
      arg0.toString = closure_0.toString;
    }
    if (hasOwnProp(closure_0, "valueOf")) {
      arg0.valueOf = closure_0.valueOf;
    }
    return arg0;
  }
  function createUTC(items) {
    return createLocalOrUTC(items, arg1, arg2, arg3, true).utc();
  }
  function defaultParsingFlags() {
    obj = { empty: false, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: [], era: null, meridiem: null, rfc2822: false, weekdayMismatch: false };
    return obj;
  }
  function getParsingFlags(_pf) {
    if (_pf._pf == null) {
      _pf._pf = defaultParsingFlags();
    }
    return _pf._pf;
  }
  function isValid(_d) {
    _d = _d._d;
    if (_d) {
      const _isNaN = isNaN;
      const _d2 = _d._d;
      _d = !isNaN(_d2.getTime());
    }
    if (_d) {
      const tmp3 = getParsingFlags(_d);
      let tmp6 = tmp3.overflow < 0;
      if (tmp6) {
        tmp6 = !tmp3.empty;
      }
      if (tmp6) {
        tmp6 = !tmp3.invalidEra;
      }
      if (tmp6) {
        tmp6 = !tmp3.invalidMonth;
      }
      if (tmp6) {
        tmp6 = !tmp3.invalidWeekday;
      }
      if (tmp6) {
        tmp6 = !tmp3.weekdayMismatch;
      }
      if (tmp6) {
        tmp6 = !tmp3.nullInput;
      }
      if (tmp6) {
        tmp6 = !tmp3.invalidFormat;
      }
      if (tmp6) {
        tmp6 = !tmp3.userInvalidated;
      }
      if (tmp6) {
        let tmp7 = !tmp3.meridiem;
        if (!tmp7) {
          tmp7 = tmp3.meridiem && callResult;
          const tmp8 = tmp3.meridiem && callResult;
        }
        tmp6 = tmp7;
      }
      _d = tmp6;
      if (_d._strict) {
        let tmp9 = tmp6;
        if (tmp6) {
          tmp9 = tmp3.charsLeftOver === 0;
        }
        if (tmp9) {
          tmp9 = tmp3.unusedTokens.length === 0;
        }
        if (tmp9) {
          tmp9 = tmp3.bigHour === undefined;
        }
        _d = tmp9;
      }
      callResult = some.call(tmp3.parsedDateParts, (arg0) => arg0 != null);
    }
    if (Object.isFrozen != null) {
      const _Object = Object;
      if (Object.isFrozen(_d)) {
        return _d;
      }
    }
    _d._isValid = _d;
    return _d._isValid;
  }
  function createInvalid(arg0) {
    const tmp = createUTC(NaN);
    if (arg0 != null) {
      extend(getParsingFlags(tmp), arg0);
    } else {
      getParsingFlags(tmp).userInvalidated = true;
    }
    return tmp;
  }
  function copyConfig(arg0, self) {
    if (!isUndefined(self._isAMomentObject)) {
      arg0._isAMomentObject = self._isAMomentObject;
    }
    if (!isUndefined(self._i)) {
      arg0._i = self._i;
    }
    if (!isUndefined(self._f)) {
      arg0._f = self._f;
    }
    if (!isUndefined(self._l)) {
      arg0._l = self._l;
    }
    if (!isUndefined(self._strict)) {
      arg0._strict = self._strict;
    }
    if (!isUndefined(self._tzm)) {
      arg0._tzm = self._tzm;
    }
    if (!isUndefined(self._isUTC)) {
      arg0._isUTC = self._isUTC;
    }
    if (!isUndefined(self._offset)) {
      arg0._offset = self._offset;
    }
    if (!isUndefined(self._pf)) {
      arg0._pf = getParsingFlags(self);
    }
    if (!isUndefined(self._locale)) {
      arg0._locale = self._locale;
    }
    if (items.length > 0) {
      for (let num = 0; num < length; num = num + 1) {
        let tmp2 = items;
        let tmp3 = items[num];
        let tmp4 = self[tmp3];
        let tmp5 = isUndefined;
        let tmp6 = num;
        if (!isUndefined(tmp4)) {
          arg0[tmp3] = tmp4;
        }
      }
    }
    return arg0;
  }
  class Moment {
    constructor(arg0) {
      self = this;
      tmp = copyConfig(this, arg0);
      if (arg0._d != null) {
        _d = arg0._d;
        _NaN = _d.getTime();
      } else {
        _NaN = NaN;
      }
      date = new Date(_NaN);
      self._d = date;
      if (!self.isValid()) {
        _Date = Date;
        _NaN2 = NaN;
        prototype = Date.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        date1 = new Date(NaN);
        tmp6 = date1;
        self._d = date1;
      }
      if (c3 === false) {
        flag = true;
        c3 = true;
        tmp7 = hooks;
        updateOffsetResult = hooks.updateOffset(self);
        c3 = false;
      }
      return;
    }
  }
  function isMoment(_isAMomentObject) {
    let tmp = _isAMomentObject instanceof Moment;
    if (!tmp) {
      tmp = _isAMomentObject != null && _isAMomentObject._isAMomentObject != null;
      const tmp3 = _isAMomentObject != null && _isAMomentObject._isAMomentObject != null;
    }
    return tmp;
  }
  function warn(arg0) {
    if (hooks.suppressDeprecationWarnings === false) {
      const _console = console;
      if (typeof console !== "undefined") {
        const _console2 = console;
        if (console.warn) {
          const _console3 = console;
          console.warn(`Deprecation warning: ${arg0}`);
        }
      }
    }
  }
  function deprecate(arg0, getLocale) {
    closure_0 = arg0;
    closure_1 = getLocale;
    c2 = true;
    const fn = function() {
      if (closure_1_60.deprecationHandler != null) {
        closure_1_60.deprecationHandler(null, closure_0);
      }
      if (c2) {
        items = [];
        const length = arguments.length;
        let num3 = 0;
        if (0 < length) {
          do {
            let tmp6 = num3;
            let tmp7 = tmp5;
            if (typeof arguments[num3] === "object") {
              let text = `${"\n[" + num3}] `;
              let tmp11 = tmp5;
              let arr2 = text;
              let tmp12 = tmp5;
              keys = Object.keys();
              if (keys !== undefined) {
                tmp12 = tmp11;
                arr2 = text;
                let tmp15 = keys[tmp];
                while (tmp15 !== undefined) {
                  let tmp27 = tmp15;
                  let tmp28 = closure_1_63;
                  tmp11 = tmp15;
                  if (!closure_1_63(arguments[0], tmp15)) {
                    continue;
                  } else {
                    text = `${tmp14}${tmp15}: ${arguments[0][tmp15]}, `;
                    tmp11 = tmp15;
                    continue;
                  }
                  continue;
                }
              }
              let substr = arr2.slice(0, -2);
              let tmp9 = tmp12;
            } else {
              substr = arguments[num3];
              tmp9 = tmp5;
            }
            let arr = items.push(substr);
            num3 = num3 + 1;
            tmp5 = tmp9;
          } while (num3 < length);
        }
        const _Array = Array;
        const text1 = `${closure_0}
      Arguments: `;
        slice.call(items);
        const _Error = Error;
        const text2 = `${closure_0}
      Arguments: ${obj.join("")}`;
        const error = new Error();
        closure_1_78(`${`${closure_0}
      Arguments: ${obj.join("")}`}
      ${tmp24.stack}`);
        c2 = false;
      }
      return getLocale(...arguments);
    };
    extend(fn, getLocale);
    return fn;
  }
  function deprecateSimple(defineLocaleOverride, arg1) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(defineLocaleOverride, arg1);
    }
    if (!table[defineLocaleOverride]) {
      warn(arg1);
      table[defineLocaleOverride] = true;
    }
  }
  function isFunction(closure_1) {
    let tmp = typeof Function !== "undefined";
    if (tmp) {
      const _Function = Function;
      tmp = closure_1 instanceof Function;
    }
    if (!tmp) {
      const _Object = Object;
      tmp = toString.call(closure_1) === "[object Function]";
    }
    return tmp;
  }
  function mergeConfigs(_config, parentLocale) {
    obj = {};
    extend(obj, _config);
    for (const key10009 in arg1) {
      let tmp13 = key10009;
      let tmp14 = hasOwnProp;
      if (!hasOwnProp(arg1, key10009)) {
        continue;
      } else {
        let tmp4 = isObject;
        if (isObject(arg0[key10009])) {
          let tmp5 = isObject;
          if (isObject(arg1[key10009])) {
            obj[key10009] = {};
            let tmp6 = extend;
            let tmp7 = extend(obj[key10009], arg0[key10009]);
            let tmp8 = extend(obj[key10009], arg1[key10009]);
            continue;
          }
        }
        if (arg1[key10009] != null) {
          obj[key10009] = arg1[key10009];
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
      continue;
    }
    for (const key10028 in arg0) {
      let tmp15 = key10028;
      let tmp16 = hasOwnProp;
      if (!hasOwnProp(arg0, key10028)) {
        continue;
      } else {
        let tmp9 = hasOwnProp;
        if (hasOwnProp(arg1, key10028)) {
          continue;
        } else {
          let tmp10 = isObject;
          if (!isObject(arg0[key10028])) {
            continue;
          } else {
            let tmp11 = extend;
            obj = {};
            let tmp12 = extend(obj, obj[key10028]);
            obj[key10028] = obj;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
  class Locale {
    constructor(arg0) {
      self = this;
      if (arg0 != null) {
        result = self.set(arg0);
      }
      return;
    }
  }
  function zeroFill(yearResult, arg1) {
    const text = `${Math.abs(yearResult)}`;
    let str = "-";
    const diff = arg1 - `${Math.abs(yearResult)}`.length;
    if (yearResult >= 0) {
      let str2 = "";
      if (arg2) {
        str2 = "+";
      }
      str = str2;
    }
    const str3 = Math.pow(10, Math.max(0, diff));
    return str + Math.pow(10, Math.max(0, diff)).toString().substr(1) + text;
  }
  function addFormatToken(D, items, DDDo, eraYear) {
    let tmp = eraYear;
    closure_0 = D;
    closure_1 = items;
    closure_2 = eraYear;
    let func = eraYear;
    if (typeof eraYear === "string") {
      func = function func() {
        return this[closure_2]();
      };
      tmp = func;
    }
    if (D) {
      closure_9[D] = tmp;
    }
    if (items) {
      closure_9[items[0]] = function() {
        return closure_1_83(func(...arguments), items[1], items[2]);
      };
    }
    if (DDDo) {
      closure_9[DDDo] = function() {
        return this.localeData().ordinal(func(...arguments), closure_0);
      };
    }
  }
  function removeFormattingTokens(str) {
    const replace = str.replace;
    if (str.match(/\[[\s\S]/)) {
      return replace(/^\[|\]$/g, "");
    } else {
      return replace(/\\/g, "");
    }
  }
  function makeFormatFunction(str) {
    closure_0 = str;
    const match = str.match(closure_6);
    const length = match.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp = dependencyMap2;
      let tmp2 = num;
      if (dependencyMap2[match[num]]) {
        let tmp4 = dependencyMap2;
        match[num] = dependencyMap2[match[num]];
      } else {
        let tmp3 = removeFormattingTokens;
        match[num] = removeFormattingTokens(match[num]);
      }
    }
    return (closure_1) => {
      let num = 0;
      str = "";
      let str2 = "";
      if (0 < length) {
        do {
          let tmp = closure_1_80;
          let tmp2 = match;
          let tmp3 = match;
          obj = match[num];
          let tmp4 = str;
          let tmp5 = num;
          if (closure_1_80(match[num])) {
            let tmp7 = closure_0;
            let callResult = obj.call(closure_1, closure_0);
          } else {
            callResult = obj;
          }
          str = str + callResult;
          num = num + 1;
          let tmp8 = length;
          str2 = str;
        } while (num < length);
      }
      return str2;
    };
  }
  function formatMoment(self, Z) {
    if (self.isValid()) {
      const tmp3 = expandFormat(Z, self.localeData());
      let tmp5 = dependencyMap[tmp3];
      if (!tmp5) {
        tmp5 = makeFormatFunction(tmp3);
      }
      dependencyMap[tmp3] = tmp5;
      return dependencyMap[tmp3](self);
    } else {
      return self.localeData().invalidDate();
    }
  }
  function expandFormat(_f, _locale) {
    closure_0 = _locale;
    regex.lastIndex = 0;
    function replaceLongDateFormatTokens(arg0) {
      return _locale.longDateFormat(arg0) || arg0;
    }
    let num = 5;
    let str = _f;
    let tmp = _f;
    if (regex.test(_f)) {
      const replaced = str.replace(regex, replaceLongDateFormatTokens);
      regex.lastIndex = 0;
      const diff = num - 1;
      tmp = replaced;
      while (diff >= 0) {
        let tmp6 = regex;
        str = replaced;
        num = diff;
        tmp = replaced;
        if (!regex.test(replaced)) {
          break;
        }
      }
    }
    return tmp;
  }
  function normalizeUnits(key10006) {
    let tmp;
    if (typeof key10006 === "string") {
      let tmp3 = dependencyMap3[key10006];
      if (!tmp3) {
        tmp3 = dependencyMap3[key10006.toLowerCase(key10006)];
      }
      tmp = tmp3;
    }
    return tmp;
  }
  function normalizeObjectUnits(_i) {
    obj = {};
    for (const key10006 in arg0) {
      let tmp5 = key10006;
      let tmp6 = hasOwnProp;
      if (!hasOwnProp(arg0, key10006)) {
        continue;
      } else {
        let tmp = normalizeUnits;
        let tmp2 = normalizeUnits(key10006);
        let tmp3 = tmp2;
        if (!tmp2) {
          continue;
        } else {
          obj[tmp2] = arg0[key10006];
          let tmp4 = tmp2;
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
  function getPrioritizedUnits(closure_0) {
    items = [];
    for (const key10005 in arg0) {
      let tmp4 = key10005;
      let tmp5 = hasOwnProp;
      if (!hasOwnProp(arg0, key10005)) {
        continue;
      } else {
        obj = { unit: key10005 };
        let tmp = table2;
        obj.priority = table2[key10005];
        let arr = items.push(obj);
        continue;
      }
      continue;
    }
    const sorted = items.sort((priority, priority2) => priority.priority - priority2.priority);
    return items;
  }
  function addRegexToken(A, matchEraAbbr, offsetResult) {
    let fn = matchEraAbbr;
    closure_0 = matchEraAbbr;
    closure_1 = offsetResult;
    if (!isFunction(matchEraAbbr)) {
      fn = (arg0, arg1) => {
        if (arg0) {
          if (closure_1) {
            let tmp2 = closure_1;
          }
          return tmp2;
        }
        tmp2 = closure_0;
      };
    }
    closure_16[A] = fn;
  }
  function getParseRegexForToken(key10005, _strict) {
    if (hasOwnProp(dependencyMap4, key10005)) {
      return dependencyMap4[key10005](_strict._strict, _strict._locale);
    } else {
      const _RegExp = RegExp;
      const regExp = new RegExp(unescapeFormat(key10005));
      return regExp;
    }
  }
  function unescapeFormat(key10005) {
    return regexEscape(key10005.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (arg0, arg1, arg2, arg3, arg4) => {
      let tmp = arg1;
      if (!arg1) {
        tmp = arg2;
      }
      if (!tmp) {
        tmp = arg3;
      }
      if (!tmp) {
        tmp = arg4;
      }
      return tmp;
    }));
  }
  function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function absFloor(result1) {
    if (result1 < 0) {
      const _Math2 = Math;
      return Math.ceil(result1) || 0;
    } else {
      const _Math = Math;
      return Math.floor(result1);
    }
  }
  function toInt(bound) {
    let num = 0;
    if (+bound !== 0) {
      const _isFinite = isFinite;
      num = 0;
      if (isFinite(tmp)) {
        num = absFloor(tmp);
      }
    }
    return num;
  }
  function addParseToken(Do, arg1) {
    let func = arg1;
    closure_0 = arg1;
    let arr = Do;
    if (typeof Do === "string") {
      items = [Do];
      arr = items;
    }
    if (isNumber(func)) {
      func = function func(arg0, arg1) {
        arg1[closure_0] = closure_1_96(arg0);
      };
    }
    for (let num = 0; num < length; num = num + 1) {
      let tmp = closure_17;
      closure_17[arr[num]] = func;
    }
  }
  function addWeekParseToken(Do, arg1) {
    closure_0 = arg1;
    addParseToken(Do, (arg0, arg1, _w) => {
      _w._w = _w._w || {};
      callback(arg0, _w._w, _w, arg3);
    });
  }
  function addTimeToArrayFromToken(key10005, first, _a) {
    if (first != null) {
      if (hasOwnProp(dependencyMap5, key10005)) {
        dependencyMap5[key10005](first, _a._a, _a, key10005);
      }
    }
  }
  function isLeapYear(diff1) {
    let tmp = diff1 % 4 === 0;
    if (tmp) {
      tmp = diff1 % 100 !== 0;
    }
    if (!tmp) {
      tmp = diff1 % 400 === 0;
    }
    return tmp;
  }
  function daysInYear(diff1) {
    let num = 365;
    if (isLeapYear(diff1)) {
      num = 366;
    }
    return num;
  }
  function makeGetSet(Date, arg1) {
    closure_0 = Date;
    closure_1 = arg1;
    return function(arg0) {
      const self = this;
      if (arg0 != null) {
        closure_1_102(self, closure_0, arg0);
        closure_1_60.updateOffset(self, closure_1);
        return self;
      } else {
        return closure_1_101(self, closure_0);
      }
    };
  }
  function get(isValid) {
    if (isValid.isValid()) {
      ({ _d, _isUTC } = isValid);
      if ("Milliseconds" === arg1) {
        if (_isUTC) {
          let uTCMilliseconds = _d.getUTCMilliseconds();
        } else {
          uTCMilliseconds = _d.getMilliseconds();
        }
        return uTCMilliseconds;
      } else if ("Seconds" === arg1) {
        if (_isUTC) {
          let uTCSeconds = _d.getUTCSeconds();
        } else {
          uTCSeconds = _d.getSeconds();
        }
        return uTCSeconds;
      } else if ("Minutes" === arg1) {
        if (_isUTC) {
          let uTCMinutes = _d.getUTCMinutes();
        } else {
          uTCMinutes = _d.getMinutes();
        }
        return uTCMinutes;
      } else if ("Hours" === arg1) {
        if (_isUTC) {
          let uTCHours = _d.getUTCHours();
        } else {
          uTCHours = _d.getHours();
        }
        return uTCHours;
      } else if ("Date" === arg1) {
        if (_isUTC) {
          let uTCDate = _d.getUTCDate();
        } else {
          uTCDate = _d.getDate();
        }
        return uTCDate;
      } else if ("Day" === arg1) {
        if (_isUTC) {
          let uTCDay = _d.getUTCDay();
        } else {
          uTCDay = _d.getDay();
        }
        return uTCDay;
      } else if ("Month" === arg1) {
        if (_isUTC) {
          let uTCMonth = _d.getUTCMonth();
        } else {
          uTCMonth = _d.getMonth();
        }
        return uTCMonth;
      } else if ("FullYear" === arg1) {
        if (_isUTC) {
          let uTCFullYear = _d.getUTCFullYear();
        } else {
          uTCFullYear = _d.getFullYear();
        }
        return uTCFullYear;
      } else {
        const _NaN2 = NaN;
        return NaN;
      }
    } else {
      const _NaN = NaN;
      return NaN;
    }
  }
  function set$1(isValid, Date, diff1) {
    if (isValid.isValid()) {
      const _isNaN = isNaN;
      if (!isNaN(diff1)) {
        ({ _d, _isUTC } = isValid);
        if ("Milliseconds" === Date) {
          if (_isUTC) {
            _d.setUTCMilliseconds(diff1);
          } else {
            _d.setMilliseconds(diff1);
          }
        } else if ("Seconds" === Date) {
          if (_isUTC) {
            _d.setUTCSeconds(diff1);
          } else {
            _d.setSeconds(diff1);
          }
        } else if ("Minutes" === Date) {
          if (_isUTC) {
            _d.setUTCMinutes(diff1);
          } else {
            _d.setMinutes(diff1);
          }
        } else if ("Hours" === Date) {
          if (_isUTC) {
            _d.setUTCHours(diff1);
          } else {
            _d.setHours(diff1);
          }
        } else if ("Date" === Date) {
          if (_isUTC) {
            _d.setUTCDate(diff1);
          } else {
            _d.setDate(diff1);
          }
        } else if ("FullYear" === Date) {
          const monthResult = isValid.month();
          const dateResult = isValid.date();
          if (dateResult === 29) {
            if (monthResult === 1) {
              let num3 = 28;
            }
            if (_isUTC) {
              _d.setUTCFullYear(diff1, monthResult, num3);
            } else {
              _d.setFullYear(diff1, monthResult, num3);
            }
          }
          num3 = dateResult;
        }
      }
    }
  }
  function mod(bound, arg1) {
    return (bound % 12 + 12) % 12;
  }
  function daysInMonth(yearResult, bound) {
    if (!isNaN(yearResult)) {
      const _isNaN = isNaN;
      if (!isNaN(bound)) {
        const tmp2 = mod(bound, 12);
        if (tmp2 === 1) {
          let num6 = 28;
          if (isLeapYear(tmp3)) {
            num6 = 29;
          }
          let diff = num6;
        } else {
          diff = 31 - tmp2 % 7 % 2;
        }
        return diff;
      }
    }
    return NaN;
  }
  function handleStrictParse(toLocaleLowerCase) {
    const self = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._monthsParse) {
      self._monthsParse = [];
      self._longMonthsParse = [];
      self._shortMonthsParse = [];
      let num2 = 0;
      do {
        let tmp2 = createUTC;
        items = [2000, num2];
        let tmp3 = createUTC(items);
        let monthsShortResult = self.monthsShort(tmp3, "");
        self._shortMonthsParse[num2] = monthsShortResult.toLocaleLowerCase();
        let monthsResult = self.months(tmp3, "");
        self._longMonthsParse[num2] = monthsResult.toLocaleLowerCase();
        num2 = num2 + 1;
      } while (num2 < 12);
    }
    if (arg2) {
      if (arg1 === "MMM") {
        const callResult = indexOf.call(self._shortMonthsParse, toLocaleLowerCaseResult);
        let tmp19 = null;
        if (callResult !== -1) {
          tmp19 = callResult;
        }
        return tmp19;
      } else {
        const callResult1 = indexOf.call(self._longMonthsParse, toLocaleLowerCaseResult);
        let tmp16 = null;
        if (callResult1 !== -1) {
          tmp16 = callResult1;
        }
        return tmp16;
      }
    } else if (arg1 === "MMM") {
      const callResult2 = indexOf.call(self._shortMonthsParse, toLocaleLowerCaseResult);
      if (callResult2 !== -1) {
        return callResult2;
      } else {
        const callResult3 = indexOf.call(self._longMonthsParse, toLocaleLowerCaseResult);
        let tmp13 = null;
        if (callResult3 !== -1) {
          tmp13 = callResult3;
        }
        return tmp13;
      }
    } else {
      const callResult4 = indexOf.call(self._longMonthsParse, toLocaleLowerCaseResult);
      if (callResult4 !== -1) {
        return callResult4;
      } else {
        const callResult5 = indexOf.call(self._shortMonthsParse, toLocaleLowerCaseResult);
        let tmp8 = null;
        if (callResult5 !== -1) {
          tmp8 = callResult5;
        }
        return tmp8;
      }
    }
  }
  function setMonth(self, bound) {
    if (self.isValid()) {
      let tmp = bound;
      if (typeof bound === "string") {
        if (obj.test(bound)) {
          tmp = toInt(bound);
        } else {
          const monthsParseResult = self.localeData().monthsParse(bound);
          tmp = monthsParseResult;
          if (!isNumber(monthsParseResult)) {
            return self;
          }
          const localeDataResult = self.localeData();
        }
        obj = /^\d+$/;
      }
      const dateResult = self.date();
      bound = dateResult;
      if (dateResult >= 29) {
        const _Math = Math;
        bound = Math.min(dateResult, daysInMonth(self.year(), tmp));
      }
      const _d = self._d;
      if (self._isUTC) {
        _d.setUTCMonth(tmp, bound);
      } else {
        _d.setMonth(tmp, bound);
      }
      return self;
    } else {
      return self;
    }
  }
  function getSetMonth(bound) {
    const self = this;
    if (bound != null) {
      setMonth(self, bound);
      hooks.updateOffset(self, true);
      return self;
    } else {
      return get(self, "Month");
    }
  }
  function computeMonthsParse() {
    const self = this;
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    items = [];
    const items1 = [];
    items2 = [];
    let num = 0;
    do {
      let tmp = createUTC;
      let items3 = [2000, num];
      let tmp2 = createUTC(items3);
      let tmp3 = regexEscape;
      let tmp4 = regexEscape(self.monthsShort(tmp2, ""));
      let tmp5 = regexEscape(self.months(tmp2, ""));
      let arr = items.push(tmp4);
      arr = items1.push(tmp5);
      let arr1 = items2.push(tmp5);
      let arr2 = items2.push(tmp4);
      num = num + 1;
    } while (num < 12);
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    const regExp = new RegExp("^(" + items2.join("|") + ")", "i");
    self._monthsRegex = regExp;
    self._monthsShortRegex = self._monthsRegex;
    const regExp1 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._monthsStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items.join("|") + ")", "i");
    self._monthsShortStrictRegex = regExp2;
  }
  function createDate(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        const date = new Date(arg0 + 400, arg1, arg2, arg3, arg4, arg5, arg6);
        const _isFinite = isFinite;
        let date1 = date;
        if (isFinite(date.getFullYear())) {
          date.setFullYear(arg0);
          date1 = date;
        }
      }
      return date1;
    }
    date1 = new Date(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
  }
  function createUTCDate(year, arg1, _dayOfYear) {
    if (year < 100) {
      if (year >= 0) {
        const _Array = Array;
        const callResult = slice.call(arguments);
        callResult[0] = year + 400;
        const _Date = Date;
        const _Date2 = Date;
        const date = new Date(UTC2.apply(null, callResult));
        const _isFinite = isFinite;
        let date1 = date;
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(year);
          date1 = date;
        }
      }
      return date1;
    }
    date1 = new Date(UTC(...arguments));
  }
  function firstWeekOffset(diff, dow, doy) {
    diff = 7 + dow - doy;
    return -(7 + createUTCDate(diff, 0, diff).getUTCDay() - dow) % 7 + diff - 1;
  }
  function dayOfYearFromWeeks(diff, arg1, arg2, dow, doy) {
    diff = 7 + arg2 - dow;
    const sum = 1 + 7 * (arg1 - 1) + diff % 7 + firstWeekOffset(diff, dow, doy);
    if (sum <= 0) {
      const diff1 = diff - 1;
      let sum1 = daysInYear(diff1) + sum;
      let sum2 = diff1;
    } else {
      sum2 = diff;
      sum1 = sum;
      if (sum > daysInYear(diff)) {
        sum2 = diff + 1;
        sum1 = sum - daysInYear(diff);
      }
    }
    obj = { year: sum2, dayOfYear: sum1 };
    return obj;
  }
  function weekOfYear(local, dow, doy) {
    const sum = Math.floor((local.dayOfYear() - firstWeekOffset(local.year(), dow, doy) - 1) / 7) + 1;
    if (sum < 1) {
      const diff = local.year() - 1;
      let sum1 = sum + weeksInYear(diff, dow, doy);
      let sum2 = diff;
    } else if (sum > weeksInYear(local.year(), dow, doy)) {
      sum1 = sum - weeksInYear(local.year(), dow, doy);
      sum2 = local.year() + 1;
    } else {
      sum2 = local.year();
      sum1 = sum;
    }
    obj = { week: sum1, year: sum2 };
    return obj;
  }
  function weeksInYear(diff, dow, doy) {
    const tmp = firstWeekOffset(diff, dow, doy);
    return (daysInYear(diff) - tmp + firstWeekOffset(diff + 1, dow, doy)) / 7;
  }
  function getSetWeek(arg0) {
    const self = this;
    const weekResult = this.localeData().week(this);
    let addResult = weekResult;
    if (arg0 != null) {
      addResult = self.add((arg0 - weekResult) * 7, "d");
    }
    return addResult;
  }
  function getSetISOWeek(arg0) {
    const self = this;
    const week = weekOfYear(this, 1, 4).week;
    let addResult = week;
    if (arg0 != null) {
      addResult = self.add((arg0 - week) * 7, "d");
    }
    return addResult;
  }
  function parseWeekday(str, self) {
    if (typeof str !== "string") {
      return str;
    } else {
      const _isNaN = isNaN;
      if (isNaN(str)) {
        const weekdaysParseResult = self.weekdaysParse(str);
        if (typeof weekdaysParseResult === "number") {
          return weekdaysParseResult;
        } else {
          return null;
        }
      } else {
        const _parseInt = parseInt;
        return parseInt(str, 10);
      }
    }
  }
  function parseIsoWeekday(str, self) {
    if (typeof str === "string") {
      return self.weekdaysParse(str) % 7 || 7;
    } else {
      const _isNaN = isNaN;
      let tmp2 = null;
      if (!isNaN(str)) {
        tmp2 = str;
      }
      return tmp2;
    }
  }
  function shiftWeekdays(_weekdaysMin, dow) {
    const substr = _weekdaysMin.slice(dow, 7);
    return substr.concat(_weekdaysMin.slice(0, dow));
  }
  function handleStrictParse$1(toLocaleLowerCase) {
    const self = this;
    const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      self._weekdaysParse = [];
      self._shortWeekdaysParse = [];
      self._minWeekdaysParse = [];
      let num2 = 0;
      do {
        let tmp2 = createUTC;
        obj = createUTC([2000, 1]);
        let dayResult = obj.day(num2);
        let weekdaysMinResult = self.weekdaysMin(dayResult, "");
        self._minWeekdaysParse[num2] = weekdaysMinResult.toLocaleLowerCase();
        let weekdaysShortResult = self.weekdaysShort(dayResult, "");
        self._shortWeekdaysParse[num2] = weekdaysShortResult.toLocaleLowerCase();
        let weekdaysResult = self.weekdays(dayResult, "");
        self._weekdaysParse[num2] = weekdaysResult.toLocaleLowerCase();
        num2 = num2 + 1;
      } while (num2 < 7);
    }
    if (arg2) {
      if (arg1 === "dddd") {
        const callResult = indexOf.call(self._weekdaysParse, toLocaleLowerCaseResult);
        let tmp33 = null;
        if (callResult !== -1) {
          tmp33 = callResult;
        }
        return tmp33;
      } else if (arg1 === "ddd") {
        const callResult1 = indexOf.call(self._shortWeekdaysParse, toLocaleLowerCaseResult);
        let tmp30 = null;
        if (callResult1 !== -1) {
          tmp30 = callResult1;
        }
        return tmp30;
      } else {
        const callResult2 = indexOf.call(self._minWeekdaysParse, toLocaleLowerCaseResult);
        let tmp27 = null;
        if (callResult2 !== -1) {
          tmp27 = callResult2;
        }
        return tmp27;
      }
    } else if (arg1 === "dddd") {
      const callResult3 = indexOf.call(self._weekdaysParse, toLocaleLowerCaseResult);
      if (callResult3 !== -1) {
        return callResult3;
      } else {
        const callResult4 = indexOf.call(self._shortWeekdaysParse, toLocaleLowerCaseResult);
        if (callResult4 !== -1) {
          return callResult4;
        } else {
          const callResult5 = indexOf.call(self._minWeekdaysParse, toLocaleLowerCaseResult);
          let tmp24 = null;
          if (callResult5 !== -1) {
            tmp24 = callResult5;
          }
          return tmp24;
        }
      }
    } else if (arg1 === "ddd") {
      const callResult6 = indexOf.call(self._shortWeekdaysParse, toLocaleLowerCaseResult);
      if (callResult6 !== -1) {
        return callResult6;
      } else {
        const callResult7 = indexOf.call(self._weekdaysParse, toLocaleLowerCaseResult);
        if (callResult7 !== -1) {
          return callResult7;
        } else {
          const callResult8 = indexOf.call(self._minWeekdaysParse, toLocaleLowerCaseResult);
          let tmp17 = null;
          if (callResult8 !== -1) {
            tmp17 = callResult8;
          }
          return tmp17;
        }
      }
    } else {
      const callResult9 = indexOf.call(self._minWeekdaysParse, toLocaleLowerCaseResult);
      if (callResult9 !== -1) {
        return callResult9;
      } else {
        const callResult10 = indexOf.call(self._weekdaysParse, toLocaleLowerCaseResult);
        if (callResult10 !== -1) {
          return callResult10;
        } else {
          const callResult11 = indexOf.call(self._shortWeekdaysParse, toLocaleLowerCaseResult);
          let tmp10 = null;
          if (callResult11 !== -1) {
            tmp10 = callResult11;
          }
          return tmp10;
        }
      }
    }
  }
  function getSetDayOfWeek(arg0) {
    const self = this;
    if (this.isValid()) {
      const tmp4 = get(self, "Day");
      if (arg0 != null) {
        return self.add(parseWeekday(arg0, self.localeData()) - tmp4, "d");
      } else {
        return tmp4;
      }
    } else {
      let _NaN = self;
      if (arg0 == null) {
        _NaN = NaN;
      }
      return _NaN;
    }
  }
  function computeWeekdaysParse() {
    const self = this;
    function cmpLenRev(arg0, arg1) {
      return arg1.length - arg0.length;
    }
    items = [];
    const items1 = [];
    items2 = [];
    const items3 = [];
    let num = 0;
    do {
      let tmp = createUTC;
      obj = createUTC([2000, 1]);
      let dayResult = obj.day(num);
      let tmp3 = regexEscape;
      let tmp4 = regexEscape(self.weekdaysMin(dayResult, ""));
      let tmp5 = regexEscape(self.weekdaysShort(dayResult, ""));
      let tmp6 = regexEscape(self.weekdays(dayResult, ""));
      let arr = items.push(tmp4);
      arr = items1.push(tmp5);
      let arr1 = items2.push(tmp6);
      let arr2 = items3.push(tmp4);
      let arr3 = items3.push(tmp5);
      let arr4 = items3.push(tmp6);
      num = num + 1;
    } while (num < 7);
    const sorted = items.sort(cmpLenRev);
    const sorted1 = items1.sort(cmpLenRev);
    const sorted2 = items2.sort(cmpLenRev);
    const sorted3 = items3.sort(cmpLenRev);
    const regExp = new RegExp("^(" + items3.join("|") + ")", "i");
    self._weekdaysRegex = regExp;
    ({ _weekdaysRegex: self._weekdaysShortRegex, _weekdaysRegex: self._weekdaysMinRegex } = self);
    const regExp1 = new RegExp("^(" + items2.join("|") + ")", "i");
    self._weekdaysStrictRegex = regExp1;
    const regExp2 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._weekdaysShortStrictRegex = regExp2;
    const regExp3 = new RegExp("^(" + items.join("|") + ")", "i");
    self._weekdaysMinStrictRegex = regExp3;
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function meridiem(A, arg1, closure_0) {
    closure_0 = arg1;
    addFormatToken(A, 0, 0, function() {
      const localeDataResult = this.localeData();
      return localeDataResult.meridiem(this.hours(), this.minutes(), closure_0);
    });
  }
  function matchMeridiem(arg0, _meridiemParse) {
    return _meridiemParse._meridiemParse;
  }
  function commonPrefix(parts, parts1) {
    const bound = Math.min(parts.length, parts1.length);
    let num = 0;
    if (0 < bound) {
      while (parts[num] === parts1[num]) {
        num = num + 1;
      }
      return num;
    }
    return bound;
  }
  function normalizeLocale(str) {
    let replaced = str;
    if (str) {
      replaced = str.toLowerCase().replace("_", "-");
      str = str.toLowerCase();
    }
    return replaced;
  }
  function chooseLocale(arg0) {
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp2 = normalizeLocale;
        let str = normalizeLocale(arg0[num]);
        let parts = str.split("-");
        let length = parts.length;
        let str2 = normalizeLocale(arg0[num + 1]);
        let tmp3 = num;
        let tmp4 = tmp;
        parts1 = null;
        if (str2) {
          parts1 = str2.split("-");
        }
        if (length > 0) {
          let tmp6 = loadLocale;
          let substr = parts.slice(0, length);
          let tmp7 = loadLocale(substr.join("-"));
          let tmp8 = length;
          while (!tmp7) {
            if (parts1) {
              if (parts1.length >= length) {
                let tmp9 = commonPrefix;
                tmp4 = tmp7;
              }
            }
            length = length - 1;
            tmp4 = tmp7;
          }
          return tmp7;
        }
        num = num + 1;
        tmp = tmp4;
      }
    }
    return closure_39;
  }
  function isLocaleNameSane(_abbr) {
    let match = _abbr;
    if (_abbr) {
      match = _abbr.match("^[^/\\\\]*$");
    }
    return match;
  }
  function loadLocale(_abbr) {
    if (dependencyMap6[_abbr] === undefined) {
      if (typeof some !== "undefined") {
        if (some) {
          if (some.exports) {
            if (isLocaleNameSane(_abbr)) {
              try {
                createLocal("./locale/" + _abbr);
                getSetGlobalLocale(closure_39._abbr);
              } catch (err) {
                dependencyMap6[tmp] = null;
              }
            }
          }
        }
      }
    }
    return dependencyMap6[_abbr];
  }
  function getSetGlobalLocale(_abbr, parentLocale) {
    if (_abbr) {
      if (isUndefined(parentLocale)) {
        let tmp3 = getLocale(_abbr);
      } else {
        tmp3 = defineLocale(_abbr, parentLocale);
      }
      if (tmp3) {
        closure_39 = tmp3;
      } else {
        const _console = console;
        if (typeof console !== "undefined") {
          const _console2 = console;
          if (console.warn) {
            const _console3 = console;
            console.warn(`Locale ${_abbr} not found. Did you forget to load it?`);
          }
        }
      }
    }
    return closure_39._abbr;
  }
  function defineLocale(abbr, parentLocale) {
    if (parentLocale !== null) {
      let _config = obj;
      parentLocale.abbr = abbr;
      if (dependencyMap6[abbr] != null) {
        deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
        _config = dependencyMap6[abbr]._config;
      } else if (parentLocale.parentLocale != null) {
        if (dependencyMap6[parentLocale.parentLocale] != null) {
          _config = dependencyMap6[parentLocale.parentLocale]._config;
        } else {
          const tmp6 = loadLocale(parentLocale.parentLocale);
          if (tmp6 != null) {
            _config = tmp6._config;
          } else {
            if (!dependencyMap7[parentLocale.parentLocale]) {
              dependencyMap7[parentLocale.parentLocale] = [];
            }
            let arr = dependencyMap7[parentLocale.parentLocale];
            obj = { name: abbr, config: parentLocale };
            arr = arr.push(obj);
            return null;
          }
        }
      }
      const prototype = Locale.prototype;
      const tmp20 = new Locale(mergeConfigs(_config, parentLocale));
      dependencyMap6[abbr] = tmp20;
      if (dependencyMap7[abbr]) {
        const item = dependencyMap7[abbr].forEach((name) => {
          closure_1_126(name.name, name.config);
        });
        const arr2 = dependencyMap7[abbr];
      }
      getSetGlobalLocale(abbr);
      return dependencyMap6[abbr];
    } else {
      delete tmp[tmp2];
      return null;
    }
  }
  function getLocale(_l) {
    let _abbr = _l;
    if (_l) {
      _abbr = _l;
      if (_l._locale) {
        _abbr = _l;
        if (_l._locale._abbr) {
          _abbr = _l._locale._abbr;
        }
      }
    }
    if (_abbr) {
      let tmp3 = _abbr;
      if (!isArray(_abbr)) {
        const tmp5 = loadLocale(_abbr);
        if (tmp5) {
          return tmp5;
        } else {
          items = [_abbr];
          tmp3 = items;
        }
      }
      return chooseLocale(tmp3);
    } else {
      return closure_39;
    }
  }
  function checkOverflow(_a) {
    _a = _a._a;
    if (_a) {
      if (getParsingFlags(_a).overflow === -2) {
        if (_a[c19] >= 0) {
          if (_a[c19] <= 11) {
            if (_a[c20] >= 1) {
              if (_a[c20] <= daysInMonth(_a[c18], _a[c19])) {
                if (_a[c21] >= 0) {
                  if (_a[c21] <= 24) {
                    if (_a[c21] !== 24) {
                      if (_a[c22] >= 0) {
                        if (_a[c22] <= 59) {
                          if (_a[c23] >= 0) {
                            if (_a[c23] <= 59) {
                              if (_a[c24] < 0) {
                                let num4 = c24;
                              } else {
                                num4 = -1;
                              }
                            }
                          }
                          num4 = c23;
                        }
                      }
                      num4 = c22;
                    }
                  }
                }
                num4 = c21;
              }
            }
            num4 = c20;
          }
          let tmp11 = num4;
          if (getParsingFlags(_a)._overflowDayOfYear) {
            if (num4 < c18) {
              tmp11 = c20;
            } else {
              tmp11 = num4;
            }
          }
          let tmp15 = tmp11;
          if (getParsingFlags(_a)._overflowWeeks) {
            tmp15 = tmp11;
            if (tmp11 === -1) {
              tmp15 = c25;
            }
          }
          let tmp17 = tmp15;
          if (getParsingFlags(_a)._overflowWeekday) {
            tmp17 = tmp15;
            if (tmp15 === -1) {
              tmp17 = c26;
            }
          }
          getParsingFlags(_a).overflow = tmp17;
        }
        num4 = c19;
      }
    }
    return _a;
  }
  function configFromISO(_i) {
    _i = _i._i;
    let match = regex3.exec(_i);
    if (!match) {
      match = regex4.exec(_i);
    }
    if (match) {
      getParsingFlags(_i).iso = true;
      let num3 = 0;
      let first;
      if (0 < length) {
        while (!obj.exec(match[1])) {
          let sum = num3 + 1;
          num3 = sum;
        }
        first = items2[num3][0];
        obj = items2[num3][1];
        const tmp4 = items2[num3][2] !== false;
      }
      if (first == null) {
        _i._isValid = false;
      } else {
        let str;
        if (match[3]) {
          let num5 = 0;
          let sum2;
          if (0 < length2) {
            while (!obj2.exec(match[3])) {
              let sum1 = num5 + 1;
              num5 = sum1;
            }
            sum2 = (match[2] || " ") + items16[num5][0];
            obj2 = items16[num5][1];
            const tmp16 = match[2] || " ";
          }
          str = sum2;
          if (sum2 == null) {
            _i._isValid = false;
          }
        }
        if (!tmp4) {
          if (str != null) {
            _i._isValid = false;
          }
        }
        let str2;
        if (match[4]) {
          str2 = "Z";
          if (!regex5.exec(match[4])) {
            _i._isValid = false;
          }
        }
        if (!str) {
          str = "";
        }
        const sum3 = first + str;
        if (!str2) {
          str2 = "";
        }
        _i._f = sum3 + str2;
        configFromStringAndFormat(_i);
      }
    } else {
      _i._isValid = false;
    }
  }
  function extractFromRFC2822Strings(arg0, arg1, arg2, arg3, arg4, arg5) {
    items = [untruncateYear(arg0), parts1.indexOf(arg1), parseInt(arg2, 10), parseInt(arg3, 10), parseInt(arg4, 10)];
    if (arg5) {
      const _parseInt = parseInt;
      items.push(parseInt(arg5, 10));
    }
    return items;
  }
  function untruncateYear(arg0) {
    const parsed = parseInt(arg0, 10);
    if (parsed <= 49) {
      return 2000 + parsed;
    } else if (parsed <= 999) {
      return 1900 + parsed;
    } else {
      return parsed;
    }
  }
  function preprocessRFC2822(_i) {
    const str = _i.replace(/\([^()]*\)|[\n\t]/g, " ");
    const str2 = _i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ");
    return _i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(arg0, arg1, _i) {
    if (arg0) {
      const _Date = Date;
      const index = parts3.indexOf(arg0);
      const date = new Date(arg1[0], arg1[1], arg1[2]);
      if (index !== date.getDay()) {
        getParsingFlags(_i).weekdayMismatch = true;
        _i._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(arg0, arg1, arg2) {
    if (arg0) {
      return table3[arg0];
    } else if (arg1) {
      return 0;
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(arg2, 10);
      const result = parsed % 100;
      return (parsed - result) / 100 * 60 + result;
    }
  }
  function configFromRFC2822(_i) {
    const match = regex7.exec(preprocessRFC2822(_i._i));
    if (match) {
      const tmp3 = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (checkWeekday(match[1], tmp3, _i)) {
        _i._a = tmp3;
        _i._tzm = calculateOffset(match[8], match[9], match[10]);
        _i._d = createUTCDate.apply(null, _i._a);
        ({ _d, _d: _d2 } = _i);
        _d.setUTCMinutes(_d2.getUTCMinutes() - _i._tzm);
        getParsingFlags(_i).rfc2822 = true;
      }
    } else {
      _i._isValid = false;
    }
  }
  function configFromString(_i) {
    const match = regex6.exec(_i._i);
    if (match !== null) {
      const _Date = Date;
      const date = new Date(+match[1]);
      _i._d = date;
    } else {
      configFromISO(_i);
      if (_i._isValid === false) {
        delete tmp._isValid;
        configFromRFC2822(_i);
        if (_i._isValid === false) {
          delete tmp._isValid;
          if (_i._strict) {
            _i._isValid = false;
          } else {
            const fromInputFallback = hooks.createFromInputFallback(_i);
          }
        }
      }
    }
  }
  function defaults(E, week, year) {
    if (E != null) {
      return E;
    } else if (week != null) {
      return week;
    } else {
      return year;
    }
  }
  function currentDateArray(_useUTC) {
    const date = new Date(hooks.now());
    if (_useUTC._useUTC) {
      items = [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
      return items;
    } else {
      const items1 = [date.getFullYear(), date.getMonth(), date.getDate()];
      return items1;
    }
  }
  function configFromArray(_d) {
    items = [];
    if (!_d._d) {
      const tmp2 = currentDateArray(_d);
      if (_d._w) {
        if (_d._a[c20] == null) {
          if (_d._a[c19] == null) {
            dayOfYearFromWeekInfo(_d);
          }
        }
      }
      if (_d._dayOfYear != null) {
        const tmp29 = defaults(_d._a[c18], tmp2[c18]);
        if (_d._dayOfYear > daysInYear(tmp29)) {
          getParsingFlags(_d)._overflowDayOfYear = true;
        }
        obj = createUTCDate(tmp29, 0, _d._dayOfYear);
        _d._a[c19] = obj.getUTCMonth();
        _d._a[c20] = obj.getUTCDate();
      }
      let num5 = 0;
      let num6 = 0;
      if (_d._a[0] == null) {
        items[num5] = tmp2[num5];
        _d._a[num5] = tmp2[num5];
        const sum = num5 + 1;
        num6 = sum;
        while (sum < 3) {
          num5 = sum;
          num6 = sum;
          if (_d._a[sum] != null) {
            break;
          }
        }
      }
      if (num6 < 7) {
        do {
          let tmp15 = num6;
          if (_d._a[num6] == null) {
            let num10 = 0;
            if (num6 === 2) {
              num10 = 1;
            }
            let tmp16 = num10;
          } else {
            tmp16 = _d._a[num6];
          }
          items[num6] = tmp16;
          _d._a[num6] = tmp16;
          num6 = num6 + 1;
        } while (num6 < 7);
      }
      if (_d._a[c21] === 24) {
        if (_d._a[c22] === 0) {
          if (_d._a[c23] === 0) {
            if (_d._a[c24] === 0) {
              _d._nextDay = true;
              _d._a[c21] = 0;
            }
          }
        }
      }
      _d._d = _d._useUTC ? createUTCDate : createDate.apply(null, items);
      _d = _d._d;
      if (_d._useUTC) {
        let uTCDay = _d.getUTCDay();
      } else {
        uTCDay = _d.getDay();
      }
      if (_d._tzm != null) {
        ({ _d: _d2, _d: _d3 } = _d);
        _d2.setUTCMinutes(_d3.getUTCMinutes() - _d._tzm);
      }
      if (_d._nextDay) {
        _d._a[c21] = 24;
      }
      if (_d._w) {
        if (typeof _d._w.d !== "undefined") {
          if (_d._w.d !== uTCDay) {
            getParsingFlags(_d).weekdayMismatch = true;
          }
        }
      }
    }
  }
  function dayOfYearFromWeekInfo(_w) {
    _w = _w._w;
    if (_w.GG == null) {
      if (_w.W == null) {
        if (_w.E == null) {
          const dow = _w._locale._week.dow;
          const doy = _w._locale._week.doy;
          const tmp21 = weekOfYear(createLocal(), dow, doy);
          const tmp24 = defaults(_w.gg, _w._a[c18], tmp21.year);
          const tmp25 = defaults(_w.w, tmp21.week);
          if (_w.d != null) {
            const d = _w.d;
            if (d < 0) {
              let flag = true;
              let tmp = tmp24;
              let tmp2 = tmp25;
              let tmp3 = d;
              let num = dow;
              let num2 = doy;
            } else {
              tmp = tmp24;
              tmp2 = tmp25;
              tmp3 = d;
              num = dow;
              num2 = doy;
            }
          } else {
            tmp = tmp24;
            tmp2 = tmp25;
            tmp3 = dow;
            num = dow;
            num2 = doy;
            if (_w.e != null) {
              const sum = _w.e + dow;
              if (_w.e < 0) {
                flag = true;
                tmp = tmp24;
                tmp2 = tmp25;
                tmp3 = sum;
                num = dow;
                num2 = doy;
              } else {
                tmp = tmp24;
                tmp2 = tmp25;
                tmp3 = sum;
                num = dow;
                num2 = doy;
              }
            }
          }
        }
        if (tmp2 >= 1) {
          if (tmp2 <= weeksInYear(tmp, num, num2)) {
            if (flag != null) {
              getParsingFlags(_w)._overflowWeekday = true;
            } else {
              ({ year: _w._a[c18], dayOfYear: _w._dayOfYear } = dayOfYearFromWeeks(tmp, tmp2, tmp3, num, num2));
              const tmp15 = dayOfYearFromWeeks(tmp, tmp2, tmp3, num, num2);
            }
          }
        }
        getParsingFlags(_w)._overflowWeeks = true;
      }
    }
    const tmp5 = defaults(_w.GG, _w._a[c18], weekOfYear(createLocal(), 1, 4).year);
    const tmp6 = defaults(_w.W, 1);
    const tmp7 = defaults(_w.E, 1);
    if (tmp7 < 1) {
      flag = true;
      tmp = tmp5;
      tmp2 = tmp6;
      tmp3 = tmp7;
      num = 1;
      num2 = 4;
    } else {
      tmp = tmp5;
      tmp2 = tmp6;
      tmp3 = tmp7;
      num = 1;
      num2 = 4;
    }
  }
  function configFromStringAndFormat(_f) {
    let first;
    let tmp2;
    if (_f._f === hooks.ISO_8601) {
      configFromISO(_f);
    } else if (_f._f === hooks.RFC_2822) {
      configFromRFC2822(_f);
    } else {
      _f._a = [];
      getParsingFlags(_f).empty = true;
      const text = `${_f._i}`;
      let arr = expandFormat(_f._f, _f._locale).match(closure_6) || [];
      let str = text;
      let num2 = 0;
      let num3 = 0;
      let arr1 = text;
      let num4 = 0;
      if (0 < arr.length) {
        while (true) {
          tmp2 = arr[num2];
          let tmp3 = getParseRegexForToken;
          let match = str.match(getParseRegexForToken(tmp2, _f));
          let tmp4 = str;
          let tmp5 = num2;
          let tmp6 = tmp;
          let tmp7 = num3;
          if (!match) {
            match = [];
          }
          first = match[0];
          let substr1 = str;
          let sum = num3;
          if (first) {
            let substr = str.substr(0, str.indexOf(first));
            if (substr.length > 0) {
              let tmp10 = getParsingFlags;
              let unusedInput = getParsingFlags(_f).unusedInput;
              arr = unusedInput.push(substr);
            }
            substr1 = str.slice(str.indexOf(first) + first.length);
            sum = num3 + first.length;
            tmp6 = substr;
          }
          let tmp12 = dependencyMap2;
          if (dependencyMap2[tmp2]) {
            break;
          } else {
            if (_f._strict) {
              if (!first) {
                let tmp13 = getParsingFlags;
                let unusedTokens = getParsingFlags(_f).unusedTokens;
                arr = unusedTokens.push(tmp2);
              }
            }
            num2 = num2 + 1;
            str = substr1;
            tmp = tmp6;
            num3 = sum;
            arr1 = substr1;
            num4 = sum;
          }
        }
        let tmp16 = getParsingFlags(_f);
        if (first) {
          tmp16.empty = false;
        } else {
          const unusedTokens1 = tmp16.unusedTokens;
          arr1 = unusedTokens1.push(tmp2);
        }
        tmp16 = addTimeToArrayFromToken(tmp2, first, _f);
      }
      getParsingFlags(_f).charsLeftOver = `${_f._i}`.length - num4;
      if (arr1.length > 0) {
        const unusedInput1 = getParsingFlags(_f).unusedInput;
        unusedInput1.push(arr1);
      }
      if (_f._a[c21] <= 12) {
        if (getParsingFlags(_f).bigHour === true) {
          if (_f._a[c21] > 0) {
            getParsingFlags(_f).bigHour = undefined;
          }
        }
      }
      const _a = _f._a;
      const str2 = expandFormat(_f._f, _f._locale);
      getParsingFlags(_f).parsedDateParts = _a.slice(0);
      getParsingFlags(_f).meridiem = _f._meridiem;
      _f._a[c21] = meridiemFixWrap(_f._locale, _f._a[c21], _f._meridiem);
      const era = getParsingFlags(_f).era;
      if (era !== null) {
        const _locale = _f._locale;
        _f._a[c18] = _locale.erasConvertYear(era, _f._a[c18]);
      }
      configFromArray(_f);
      checkOverflow(_f);
    }
  }
  function meridiemFixWrap(_locale, arg1, _meridiem) {
    if (_meridiem == null) {
      return arg1;
    } else if (_locale.meridiemHour != null) {
      return _locale.meridiemHour(arg1, _meridiem);
    } else if (_locale.isPM != null) {
      const isPMResult = _locale.isPM(_meridiem);
      let sum = arg1;
      if (isPMResult) {
        sum = arg1;
        if (arg1 < 12) {
          sum = arg1 + 12;
        }
      }
      let num2 = sum;
      if (!isPMResult) {
        num2 = sum;
        if (sum === 12) {
          num2 = 0;
        }
      }
      return num2;
    } else {
      return arg1;
    }
  }
  function configFromStringAndArray(_f) {
    let tmp16;
    if (_f._f.length === 0) {
      getParsingFlags(_f).invalidFormat = true;
      const _Date = Date;
      const _NaN = NaN;
      const date = new Date(NaN);
      _f._d = date;
    } else {
      let num = 0;
      let flag3 = false;
      let tmp17;
      if (0 < length) {
        do {
          let tmp = copyConfig;
          obj = {};
          let tmp2 = copyConfig(obj, _f);
          let tmp3 = tmp14;
          let tmp4 = tmp15;
          let tmp5 = num;
          let tmp6 = flag3;
          if (_f._useUTC != null) {
            obj._useUTC = _f._useUTC;
          }
          obj._f = _f._f[num];
          let tmp7 = configFromStringAndFormat;
          let tmp8 = configFromStringAndFormat(obj);
          let tmp9 = isValid;
          let flag = false;
          if (isValid(obj)) {
            flag = true;
          }
          let tmp10 = getParsingFlags;
          let sum = getParsingFlags(obj).charsLeftOver + getParsingFlags(obj).unusedTokens.length * 10;
          getParsingFlags(obj).score = sum;
          if (flag3) {
            let tmp12 = tmp14;
            let tmp13 = tmp15;
            let flag2 = flag3;
            if (sum < tmp15) {
              tmp12 = obj;
              tmp13 = sum;
              flag2 = flag3;
            }
          } else {
            if (tmp15 != null) {
              if (sum >= tmp15) {
                tmp12 = tmp14;
                tmp13 = tmp15;
                flag2 = flag3;
              }
            }
            tmp12 = obj;
            tmp13 = sum;
            flag2 = flag3;
            if (flag) {
              tmp12 = obj;
              tmp13 = sum;
              flag2 = true;
            }
          }
          num = num + 1;
          tmp14 = tmp12;
          tmp15 = tmp13;
          flag3 = flag2;
          tmp16 = obj;
          tmp17 = tmp12;
        } while (num < length);
      }
      if (!tmp17) {
        tmp17 = tmp16;
      }
      extend(_f, tmp17);
    }
  }
  function configFromObject(_d) {
    if (!_d._d) {
      const tmp2 = normalizeObjectUnits(_d._i);
      items = [, , , , , , ];
      ({ year: arr[0], month: arr[1] } = tmp2);
      items[2] = tmp2.day === undefined ? tmp2.date : tmp2.day;
      ({ hour: arr[3], minute: arr[4], second: arr[5], millisecond: arr[6] } = tmp2);
      _d._a = map(items, (arg0) => {
        let parsed = arg0;
        if (arg0) {
          const _parseInt = parseInt;
          parsed = parseInt(arg0, 10);
        }
        return parsed;
      });
      configFromArray(_d);
    }
  }
  function createFromConfig(_l) {
    const tmp = prepareConfig(_l);
    checkOverflow(tmp);
    obj = new Moment(tmp);
    if (obj._nextDay) {
      obj.add(1, "d");
      obj._nextDay = undefined;
    }
    return obj;
  }
  function prepareConfig(_l) {
    ({ _i, _f, _locale } = _l);
    if (!_locale) {
      _locale = getLocale(_l._l);
    }
    _l._locale = _locale;
    if (_i !== null) {
      let tmp2 = _i;
      if (typeof _i === "string") {
        const _locale2 = _l._locale;
        const preparseResult = _locale2.preparse(_i);
        _l._i = preparseResult;
        tmp2 = preparseResult;
      }
      if (isMoment(tmp2)) {
        checkOverflow(tmp2);
        const prototype = Moment.prototype;
        const tmp20 = new Moment(tmp2);
        return tmp20;
      } else {
        if (isDate(tmp2)) {
          _l._d = tmp2;
        } else if (isArray(_f)) {
          configFromStringAndArray(_l);
        } else if (_f) {
          configFromStringAndFormat(_l);
        } else {
          configFromInput(_l);
        }
        if (!isValid(_l)) {
          _l._d = null;
        }
        return _l;
      }
    }
    return createInvalid({ nullInput: true });
  }
  function configFromInput(_i) {
    _i = _i._i;
    if (isUndefined(_i)) {
      const _Date3 = Date;
      const date = new Date(hooks.now());
      _i._d = date;
    } else if (isDate(_i)) {
      const _Date2 = Date;
      const date1 = new Date(_i.valueOf());
      _i._d = date1;
    } else if (typeof _i === "string") {
      configFromString(_i);
    } else if (isArray(_i)) {
      _i._a = map(_i.slice(0), (arg0) => parseInt(arg0, 10));
      configFromArray(_i);
    } else if (isObject(_i)) {
      configFromObject(_i);
    } else if (isNumber(_i)) {
      const _Date = Date;
      const date2 = new Date(_i);
      _i._d = date2;
    } else {
      const fromInputFallback = hooks.createFromInputFallback(_i);
    }
  }
  function createLocalOrUTC(_a, arg1, arg2, arg3, _isUTC) {
    let tmp = arg3;
    obj = {};
    if (arg1 === true) {
      tmp = arg1;
    } else {
      const tmp2 = arg1;
    }
    if (arg2 === true) {
      tmp = arg2;
    } else {
      const tmp3 = arg2;
    }
    if (!isObject(_a)) {
      let tmp6 = _a;
      if (isArray(_a)) {
        tmp6 = _a;
      }
      obj._isAMomentObject = true;
      obj._isUTC = _isUTC;
      obj._useUTC = _isUTC;
      obj._l = tmp3;
      obj._i = tmp6;
      obj._f = tmp2;
      obj._strict = tmp;
      return createFromConfig(obj);
    }
  }
  function createLocal(_a) {
    return createLocalOrUTC(_a, arg1, arg2, arg3, false);
  }
  function pickBy(isAfter, slice) {
    let num = 1;
    let first = slice;
    if (slice.length === 1) {
      first = slice;
      if (isArray(slice[0])) {
        first = slice[0];
      }
    }
    if (first.length) {
      let first1 = first[0];
      let tmp4 = first1;
      while (num < first.length) {
        obj = first[num];
        let tmp5 = first1;
        let tmp6 = num;
        if (!obj.isValid()) {
          tmp5 = first[num];
        } else {
          let tmp7 = first[num];
        }
        num = num + 1;
        first1 = tmp5;
        tmp4 = tmp5;
      }
      return tmp4;
    } else {
      return createLocal();
    }
  }
  function isDurationValid(closure_0) {
    for (const key10009 in arg0) {
      let tmp10 = key10009;
      let tmp11 = hasOwnProp;
      if (!hasOwnProp(arg0, key10009)) {
        continue;
      } else {
        let tmp = indexOf;
        let tmp2 = length;
        if (indexOf.call(length, key10009) !== -1) {
          if (arg0[key10009] == null) {
            continue;
          } else {
            let _isNaN = isNaN;
          }
          continue;
        }
        let flag = false;
        return false;
      }
      continue;
    }
    let num = 0;
    let flag2 = false;
    if (0 < length.length) {
      while (true) {
        let tmp3 = length;
        let tmp4 = flag2;
        let tmp5 = num;
        let flag3 = flag2;
        if (closure_0[length[num]]) {
          if (flag2) {
            break;
          } else {
            let _parseFloat = parseFloat;
            let tmp6 = length;
            let tmp8 = toInt;
            let tmp9 = length;
            let parsed = parseFloat(closure_0[length[num]]);
            flag3 = flag2;
            if (parsed !== toInt(closure_0[length[num]])) {
              flag3 = true;
            }
          }
        }
        num = num + 1;
        flag2 = flag3;
      }
      return false;
    }
    return true;
  }
  class Duration {
    constructor(arg0) {
      self = this;
      tmp = normalizeObjectUnits(arg0);
      tmp2 = tmp.year || 0;
      tmp3 = tmp.quarter || 0;
      tmp4 = tmp.month || 0;
      tmp5 = tmp.week || tmp.isoWeek || 0;
      tmp6 = tmp.day || 0;
      tmp7 = tmp.hour || 0;
      tmp8 = tmp.minute || 0;
      tmp9 = tmp.second || 0;
      tmp10 = tmp.millisecond || 0;
      self._isValid = isDurationValid(tmp);
      self._milliseconds = +tmp10 + tmp9 * 1000 + tmp8 * 60000 + tmp7 * 1000 * 60 * 60;
      self._days = +tmp6 + tmp5 * 7;
      self._months = +tmp4 + tmp3 * 3 + tmp2 * 12;
      self._data = {};
      self._locale = getLocale();
      _bubbleResult = self._bubble();
      return;
    }
  }
  function isDuration(self) {
    return self instanceof Duration;
  }
  function absRound(_days) {
    if (_days < 0) {
      const _Math2 = Math;
      return Math.round(-1 * _days) * -1;
    } else {
      const _Math = Math;
      return Math.round(_days);
    }
  }
  function compareArrays(_a, arg1) {
    const bound = Math.min(_a.length, arg1.length);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    const absolute = Math.abs(_a.length - arg1.length);
    if (0 < bound) {
      do {
        let tmp3 = toInt;
        let tmp4 = toInt(_a[num3]);
        let tmp5 = num2;
        let tmp6 = num3;
        let sum = num2;
        if (tmp4 !== toInt(arg1[num3])) {
          sum = num2 + 1;
        }
        num3 = num3 + 1;
        num2 = sum;
        num = sum;
      } while (num3 < bound);
    }
    return num + absolute;
  }
  function offset(Z, arg1) {
    closure_0 = arg1;
    addFormatToken(Z, 0, 0, function() {
      const utcOffsetResult = this.utcOffset();
      let str = "+";
      let tmp2 = utcOffsetResult;
      if (utcOffsetResult < 0) {
        tmp2 = -utcOffsetResult;
        str = "-";
      }
      const sum = str + closure_1_83(~~tmp2 / 60, 2) + closure_0;
      return sum + closure_1_83(~~tmp2 % 60, 2);
    });
  }
  function offsetFromString(closure_15, _i) {
    let str = _i;
    if (!_i) {
      str = "";
    }
    const match = str.match(closure_15);
    if (match === null) {
      return null;
    } else {
      const tmp = match[match.length - 1] || [];
      const text = `${tmp}`;
      const tmp4 = `${tmp}`.match(closure_49) || ["-", 0, 0];
      const result = tmp4[1] * 60;
      const sum = result + toInt(tmp4[2]);
      let num5 = 0;
      if (sum !== 0) {
        let tmp8 = sum;
        if (tmp4[0] !== "+") {
          tmp8 = -sum;
        }
        num5 = tmp8;
      }
      return num5;
    }
  }
  function cloneWithOffset(first, self) {
    if (self._isUTC) {
      const cloneResult = self.clone();
      if (!isMoment(first)) {
        if (!isDate(first)) {
          let valueOfResult = createLocal(first).valueOf();
          const obj3 = createLocal(first);
        }
        ({ _d, _d: _d2 } = cloneResult);
        const diff = valueOfResult - cloneResult.valueOf();
        _d.setTime(_d2.valueOf() + diff);
        hooks.updateOffset(cloneResult, false);
        return cloneResult;
      }
      valueOfResult = first.valueOf();
    } else {
      return createLocal(first).local();
    }
  }
  function getDateOffset(self) {
    const _d = self._d;
    return -Math.round(_d.getTimezoneOffset());
  }
  function isUtc() {
    const self = this;
    let flag = false;
    if (this.isValid()) {
      let _isUTC = self._isUTC;
      if (_isUTC) {
        _isUTC = self._offset === 0;
      }
      flag = _isUTC;
    }
    return flag;
  }
  function createDuration(self, m) {
    if (isDuration(self)) {
      obj = {};
      ({ _milliseconds: obj6.ms, _days: obj6.d, _months: obj6.M } = self);
    } else {
      if (!isNumber(self)) {
        const _isNaN = isNaN;
        if (isNaN(+self)) {
          const match = regex8.exec(self);
          if (match) {
            let num9 = 1;
            if (match[1] === "-") {
              num9 = -1;
            }
            obj = { y: 0, d: toInt(match[c20]) * num9, h: toInt(match[c21]) * num9, m: toInt(match[c22]) * num9, s: toInt(match[c23]) * num9, ms: toInt(absRound(match[c24] * 1000)) * num9 };
          } else {
            const match1 = regex9.exec(self);
            if (match1) {
              let num = 1;
              if (match1[1] === "-") {
                num = -1;
              }
              const obj1 = { y: parseIso(match1[2], num), M: parseIso(match1[3], num), w: parseIso(match1[4], num), d: parseIso(match1[5], num), h: parseIso(match1[6], num), m: parseIso(match1[7], num), s: parseIso(match1[8], num) };
              obj = obj1;
            } else if (self == null) {
              obj = {};
            } else {
              obj = self;
              if (typeof self === "object") {
                if ("from" in self) {
                  const tmp10 = createLocal(self.from);
                  const obj2 = {};
                  ({ milliseconds: obj2.ms, months: obj2.M } = momentsDifference(createLocal(self.from), createLocal(self.to)));
                  obj = obj2;
                  const tmp11 = momentsDifference(createLocal(self.from), createLocal(self.to));
                } else {
                  obj = self;
                }
              }
            }
          }
        }
      }
      const obj3 = {};
      if (m) {
        obj3[m] = tmp20;
        obj = obj3;
      } else {
        obj3.milliseconds = tmp20;
        obj = obj3;
      }
    }
    const tmp21 = new Duration(obj);
    if (isDuration(self)) {
      if (hasOwnProp(self, "_locale")) {
        tmp21._locale = self._locale;
      }
    }
    if (isDuration(self)) {
      if (hasOwnProp(self, "_isValid")) {
        tmp21._isValid = self._isValid;
      }
    }
    return tmp21;
  }
  function parseIso(str, arg1) {
    let parsed = str;
    if (str) {
      const _parseFloat = parseFloat;
      parsed = parseFloat(str.replace(",", "."));
    }
    let num = 0;
    if (!isNaN(parsed)) {
      num = parsed;
    }
    return num * arg1;
  }
  function positiveMomentsDifference(month, month2) {
    obj = {};
    const diff = month2.month() - month.month();
    const monthResult = month2.month();
    obj.months = diff + (month2.year() - month.year()) * 12;
    const yearResult = month2.year();
    const cloneResult = month.clone();
    if (addResult.isAfter(month2)) {
      obj.months = obj.months - 1;
    }
    addResult = month.clone().add(obj.months, "M");
    const tmp4 = +month2;
    obj.milliseconds = tmp4 - +month.clone().add(obj.months, "M");
    return obj;
  }
  function momentsDifference(isValid, local) {
    if (isValid.isValid()) {
      if (local.isValid()) {
        const tmp2 = cloneWithOffset(local, isValid);
        if (isValid.isBefore(tmp2)) {
          let tmp3Result = tmp3(isValid, tmp2);
        } else {
          tmp3Result = tmp3(tmp2, isValid);
          tmp3Result.milliseconds = -tmp3Result.milliseconds;
          tmp3Result.months = -tmp3Result.months;
        }
        return tmp3Result;
      }
    }
    return { milliseconds: 0, months: 0 };
  }
  function createAdder(arg0, add) {
    closure_0 = arg0;
    closure_1 = add;
    return function(arg0, arg1) {
      const self = this;
      let tmp = arg0;
      let tmp2 = arg1;
      if (arg1 !== null) {
        const _isNaN = isNaN;
        tmp = arg0;
        tmp2 = arg1;
        if (!isNaN(+arg1)) {
          closure_1_79(closure_1, `moment().${closure_1}(period, number) is deprecated. Please use moment().${closure_1}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`);
          tmp = arg1;
          tmp2 = arg0;
        }
      }
      closure_1_163(self, closure_1_159(tmp, tmp2), closure_0);
      return self;
    };
  }
  function addSubtract(self, duration, arg2, arg3) {
    const _milliseconds = duration._milliseconds;
    let tmp = absRound(duration._days);
    const tmp2 = absRound(duration._months);
    if (self.isValid()) {
      let flag = true;
      if (arg3 != null) {
        flag = arg3;
      }
      if (tmp2) {
        setMonth(self, get(self, "Month") + tmp2 * arg2);
      }
      if (tmp) {
        set$1(self, "Date", get(self, "Date") + tmp * arg2);
      }
      if (_milliseconds) {
        ({ _d, _d: _d2 } = self);
        _d.setTime(_d2.valueOf() + _milliseconds * arg2);
      }
      if (flag) {
        if (!tmp) {
          tmp = tmp2;
        }
        hooks.updateOffset(self, tmp);
      }
    }
  }
  function isString(str) {
    let tmp = typeof str === "string";
    if (!tmp) {
      const _String = String;
      tmp = str instanceof String;
    }
    return tmp;
  }
  function isMomentInput(_isAMomentObject) {
    let tmp = isMoment(_isAMomentObject);
    if (!tmp) {
      tmp = isDate(_isAMomentObject);
    }
    if (!tmp) {
      tmp = isString(_isAMomentObject);
    }
    if (!tmp) {
      tmp = isNumber(_isAMomentObject);
    }
    if (!tmp) {
      tmp = isNumberOrStringArray(_isAMomentObject);
    }
    if (!tmp) {
      tmp = isMomentInputObject(_isAMomentObject);
    }
    if (!tmp) {
      tmp = _isAMomentObject === null;
    }
    if (!tmp) {
      tmp = _isAMomentObject === undefined;
    }
    return tmp;
  }
  function isMomentInputObject(closure_0) {
    let tmp = isObject(closure_0);
    if (tmp) {
      tmp = !isObjectEmpty(closure_0);
    }
    const length = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"].length;
    let num = 0;
    let flag = false;
    let flag2 = false;
    if (0 < length) {
      do {
        let tmp4 = flag;
        let tmp5 = num;
        if (!flag) {
          let tmp6 = hasOwnProp;
          tmp4 = hasOwnProp(closure_0, tmp3);
        }
        num = num + 1;
        flag = tmp4;
        flag2 = tmp4;
      } while (num < length);
    }
    if (tmp) {
      tmp = flag2;
    }
    return tmp;
  }
  function isNumberOrStringArray(arr) {
    closure_0 = arr;
    let tmp = isArray(arr);
    let flag = false;
    if (tmp) {
      flag = arr.filter((arg0) => {
        const tmp = closure_1_66(arg0);
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = closure_1_164(closure_0);
        }
        return tmp2;
      }).length === 0;
    }
    if (tmp) {
      tmp = flag;
    }
    return tmp;
  }
  function isCalendarSpec(closure_0) {
    let tmp = isObject(closure_0);
    if (tmp) {
      tmp = !isObjectEmpty(closure_0);
    }
    items = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
    let num = 0;
    let flag = false;
    let flag2 = false;
    if (0 < items.length) {
      do {
        let tmp4 = flag;
        let tmp5 = num;
        if (!flag) {
          let tmp6 = hasOwnProp;
          tmp4 = hasOwnProp(closure_0, tmp3);
        }
        num = num + 1;
        flag = tmp4;
        flag2 = tmp4;
      } while (num < items.length);
    }
    if (tmp) {
      tmp = flag2;
    }
    return tmp;
  }
  function monthDiff(self, date2) {
    if (dateResult < date2.date()) {
      return -monthDiff(date2, self);
    } else {
      const result = (date2.year() - self.year()) * 12;
      const yearResult = date2.year();
      const sum = result + (date2.month() - self.month());
      const monthResult = date2.month();
      const addResult = self.clone().add(sum, "months");
      if (date2 - addResult < 0) {
        let result1 = (date2 - addResult) / (addResult - self.clone().add(sum - 1, "months"));
        const cloneResult1 = self.clone();
      } else {
        result1 = (date2 - addResult) / (self.clone().add(sum + 1, "months") - addResult);
        const cloneResult2 = self.clone();
      }
      return -sum + result1 || 0;
    }
    dateResult = self.date();
  }
  function locale(self) {
    self = this;
    if (self === undefined) {
      return self._locale._abbr;
    } else {
      const tmp2 = getLocale(self);
      if (tmp2 != null) {
        self._locale = tmp2;
      }
      return self;
    }
  }
  function localeData() {
    return this._locale;
  }
  function mod$1(valueOfResult, c52) {
    return (valueOfResult % c52 + c52) % c52;
  }
  function localStartOfDate(arg0, arg1, arg2) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        const date = new Date(arg0 + 400, arg1, arg2);
        return date - c55;
      }
    }
    return new Date(arg0, arg1, arg2).valueOf();
  }
  function utcStartOfDate(arg0, arg1, arg2) {
    if (arg0 < 100) {
      if (arg0 >= 0) {
        const _Date = Date;
        return Date.UTC(arg0 + 400, arg1, arg2) - c55;
      }
    }
    return Date.UTC(arg0, arg1, arg2);
  }
  function matchEraAbbr(arg0, erasAbbrRegex) {
    return erasAbbrRegex.erasAbbrRegex(arg0);
  }
  function computeErasParse() {
    const self = this;
    items = [];
    const items1 = [];
    items2 = [];
    const items3 = [];
    const erasResult = this.eras();
    for (let num = 0; num < length; num = num + 1) {
      let tmp = regexEscape;
      let tmp2 = regexEscape(erasResult[num].name);
      let tmp3 = regexEscape(erasResult[num].abbr);
      let tmp4 = regexEscape(erasResult[num].narrow);
      let arr = items1.push(tmp2);
      arr = items.push(tmp3);
      let arr1 = items2.push(tmp4);
      let arr2 = items3.push(tmp2);
      let arr3 = items3.push(tmp3);
      let arr4 = items3.push(tmp4);
    }
    const regExp = new RegExp("^(" + items3.join("|") + ")", "i");
    self._erasRegex = regExp;
    const regExp1 = new RegExp("^(" + items1.join("|") + ")", "i");
    self._erasNameRegex = regExp1;
    const regExp2 = new RegExp("^(" + items.join("|") + ")", "i");
    self._erasAbbrRegex = regExp2;
    const regExp3 = new RegExp("^(" + items2.join("|") + ")", "i");
    self._erasNarrowRegex = regExp3;
  }
  function addWeekYearFormatToken(GGGG, isoWeekYear) {
    items = [GGGG, GGGG.length];
    addFormatToken(0, items, 0, isoWeekYear);
  }
  function getSetWeekYearHelper(key10018, channels, arr2, closure_1_8, doy) {
    let tmp = channels;
    const self = this;
    if (key10018 == null) {
      return weekOfYear(self, closure_1_8, doy).year;
    } else {
      const tmp3 = weeksInYear(key10018, closure_1_8, doy);
      if (tmp > tmp3) {
        tmp = tmp3;
      }
      return setWeekAll.call(self, key10018, tmp, arr2, closure_1_8, doy);
    }
  }
  function setWeekAll(diff, arg1, arg2, dow, doy) {
    const tmp = dayOfYearFromWeeks(diff, arg1, arg2, dow, doy);
    obj = createUTCDate(tmp.year, 0, tmp.dayOfYear);
    this.year(obj.getUTCFullYear());
    this.month(obj.getUTCMonth());
    this.date(obj.getUTCDate());
    return this;
  }
  function getSetQuarter(arg0) {
    const self = this;
    if (arg0 == null) {
      const _Math = Math;
      let rounded = Math.ceil((self.month() + 1) / 3);
    } else {
      const diff = arg0 - 1;
      rounded = self.month(diff * 3 + self.month() % 3);
    }
    return rounded;
  }
  function preParsePostFormat(arg0) {
    return arg0;
  }
  function get$1(flag, flag, weekdays, day) {
    const tmp = getLocale();
    return tmp[weekdays](createUTC().set(day, flag), flag);
  }
  function listMonthsImpl(flag, arg1, months) {
    let tmp = arg1;
    let str = flag;
    if (isNumber(flag)) {
      tmp = flag;
    }
    if (!str) {
      str = "";
    }
    if (tmp != null) {
      return get$1(str, tmp, months, "month");
    } else {
      items = [];
      let num2 = 0;
      do {
        let tmp2 = get$1;
        let tmp3 = str;
        let tmp4 = num2;
        let tmp5 = months;
        let str3 = "month";
        items[num2] = get$1(str, num2, months, "month");
        num2 = num2 + 1;
      } while (num2 < 12);
      return items;
    }
  }
  function listWeekdaysImpl(flag, arg1, arg2, weekdays) {
    let tmp = arg2;
    if (typeof flag === "boolean") {
      let str2 = arg1;
      if (isNumber(arg1)) {
        tmp = arg1;
      }
      if (!str2) {
        str2 = "";
      }
      let str = str2;
      let tmp3 = tmp;
    } else {
      str = flag;
      if (!str) {
        str = "";
      }
      flag = false;
      tmp3 = flag;
    }
    let num = 0;
    if (flag) {
      num = getLocale()._week.dow;
    }
    items = [];
    let num2 = 0;
    if (tmp3 != null) {
      return get$1(str, (tmp3 + num) % 7, weekdays, "day");
    } else {
      do {
        let tmp5 = get$1;
        let tmp6 = str;
        let tmp7 = weekdays;
        let str3 = "day";
        items[num2] = get$1(str, (num2 + num) % 7, weekdays, "day");
        num2 = num2 + 1;
      } while (num2 < 7);
      return items;
    }
  }
  function addSubtract$1(_milliseconds, self, m, arg3) {
    const tmp = createDuration(self, m);
    _milliseconds._milliseconds = _milliseconds._milliseconds + arg3 * tmp._milliseconds;
    _milliseconds._days = _milliseconds._days + arg3 * tmp._days;
    _milliseconds._months = _milliseconds._months + arg3 * tmp._months;
    return _milliseconds._bubble();
  }
  function absCeil(arg0) {
    if (arg0 < 0) {
      const _Math2 = Math;
      return Math.floor(arg0);
    } else {
      const _Math = Math;
      return Math.ceil(arg0);
    }
  }
  function daysToMonths(sum) {
    return sum * 4800 / 146097;
  }
  function monthsToDays(_months) {
    return _months * 146097 / 4800;
  }
  function makeAs(M) {
    closure_0 = M;
    return function() {
      return this.as(closure_0);
    };
  }
  function makeGetter(days) {
    closure_0 = days;
    return function() {
      if (this.isValid()) {
        let _NaN = this._data[closure_0];
      } else {
        _NaN = NaN;
      }
      return _NaN;
    };
  }
  function substituteTimeAgo(arg0, displayName, arg2, arg3, relativeTime) {
    let num = displayName;
    if (!displayName) {
      num = 1;
    }
    return relativeTime.relativeTime(num, arg2, arg0, arg3);
  }
  function relativeTime$1(self, arg1, ss, localeDataResult) {
    const absResult = createDuration(self).abs();
    const tmp = round(absResult.as("s"));
    const tmp2 = round(absResult.as("m"));
    const tmp3 = round(absResult.as("h"));
    const tmp4 = round(absResult.as("d"));
    const tmp5 = round(absResult.as("M"));
    const tmp6 = round(absResult.as("w"));
    const tmp7 = round(absResult.as("y"));
    let tmp8 = tmp <= ss.ss;
    if (tmp8) {
      items = ["s", tmp];
      tmp8 = items;
    }
    if (!tmp8) {
      let tmp9 = tmp < ss.s;
      if (tmp9) {
        const items1 = ["ss", tmp];
        tmp9 = items1;
      }
      tmp8 = tmp9;
    }
    if (!tmp8) {
      tmp8 = tmp2 <= 1 && ["m"];
      const tmp10 = tmp2 <= 1 && ["m"];
    }
    if (!tmp8) {
      let tmp11 = tmp2 < ss.m;
      if (tmp11) {
        items2 = ["mm", tmp2];
        tmp11 = items2;
      }
      tmp8 = tmp11;
    }
    if (!tmp8) {
      tmp8 = tmp3 <= 1 && ["h"];
      const tmp12 = tmp3 <= 1 && ["h"];
    }
    if (!tmp8) {
      let tmp13 = tmp3 < ss.h;
      if (tmp13) {
        const items3 = ["hh", tmp3];
        tmp13 = items3;
      }
      tmp8 = tmp13;
    }
    if (!tmp8) {
      tmp8 = tmp4 <= 1 && ["d"];
      const tmp14 = tmp4 <= 1 && ["d"];
    }
    if (!tmp8) {
      let tmp15 = tmp4 < ss.d;
      if (tmp15) {
        const items4 = ["dd", tmp4];
        tmp15 = items4;
      }
      tmp8 = tmp15;
    }
    let tmp16 = tmp8;
    if (ss.w != null) {
      let tmp17 = tmp8;
      if (!tmp8) {
        tmp17 = tmp6 <= 1 && ["w"];
        const tmp18 = tmp6 <= 1 && ["w"];
      }
      if (!tmp17) {
        let tmp19 = tmp6 < ss.w;
        if (tmp19) {
          const items5 = ["ww", tmp6];
          tmp19 = items5;
        }
        tmp17 = tmp19;
      }
      tmp16 = tmp17;
    }
    if (!tmp16) {
      tmp16 = tmp5 <= 1 && ["M"];
      const tmp20 = tmp5 <= 1 && ["M"];
    }
    if (!tmp16) {
      let tmp21 = tmp5 < ss.M;
      if (tmp21) {
        const items6 = ["MM", tmp5];
        tmp21 = items6;
      }
      tmp16 = tmp21;
    }
    if (!tmp16) {
      tmp16 = tmp7 <= 1 && ["y"];
      const tmp22 = tmp7 <= 1 && ["y"];
    }
    if (!tmp16) {
      const items7 = ["yy", tmp7];
      tmp16 = items7;
    }
    tmp16[2] = arg1;
    tmp16[3] = +self > 0;
    tmp16[4] = localeDataResult;
    return substituteTimeAgo.apply(null, tmp16);
  }
  function sign(asSecondsResult) {
    return (asSecondsResult > 0) - (asSecondsResult < 0) || +asSecondsResult;
  }
  function toISOString$1() {
    const self = this;
    if (this.isValid()) {
      const result = abs(self._milliseconds) / 1000;
      const tmp4 = abs(self._days);
      const tmp6 = abs(self._months);
      const asSecondsResult = self.asSeconds();
      if (asSecondsResult) {
        const tmp9 = absFloor(result / 60);
        const tmp10 = absFloor(tmp9 / 60);
        const result1 = result % 60;
        const result2 = tmp9 % 60;
        const tmp12 = absFloor(tmp6 / 12);
        const result3 = tmp6 % 12;
        let str2 = "";
        let str3 = "";
        if (result1) {
          str3 = result1.toFixed(3).replace(/\.?0+$/, ``);
          const str4 = result1.toFixed(3);
        }
        let str5 = str2;
        if (asSecondsResult < 0) {
          str5 = "-";
        }
        let str6 = str2;
        if (tmp15 !== sign(asSecondsResult)) {
          str6 = "-";
        }
        tmp15 = sign(self._months);
        let str7 = str2;
        if (tmp17 !== sign(asSecondsResult)) {
          str7 = "-";
        }
        tmp17 = sign(self._days);
        let str8 = str2;
        if (tmp19 !== sign(asSecondsResult)) {
          str8 = "-";
        }
        let text = str2;
        if (tmp12) {
          text = `${str6 + tmp12}Y`;
        }
        let text1 = str2;
        if (result3) {
          text1 = `${str6 + tmp13}M`;
        }
        let text2 = str2;
        if (tmp4) {
          text2 = `${str7 + tmp4}D`;
        }
        if (!tmp10) {
          if (!result2) {
            let str12 = str2;
          }
          let text3 = str2;
          if (tmp10) {
            text3 = `${str8 + tmp10}H`;
          }
          let text4 = str2;
          if (result2) {
            text4 = `${str8 + tmp11}M`;
          }
          if (result1) {
            str2 = `${str8 + str3}S`;
          }
          return str5 + "P" + text + text1 + text2 + str12 + text3 + text4 + str2;
        }
        str12 = "T";
        tmp19 = sign(self._milliseconds);
      } else {
        return "P0D";
      }
    } else {
      return self.localeData().invalidDate();
    }
  }
  if (Array.prototype.some) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  let items = [];
  hooks.momentProperties = items;
  c3 = false;
  closure_4 = {};
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  if (Object.keys) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  const re6 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  const re7 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  closure_8 = {};
  closure_9 = {};
  closure_10 = { D: "date", dates: "date", date: "date", d: "day", days: "day", day: "day", e: "weekday", weekdays: "weekday", weekday: "weekday", E: "isoWeekday", isoweekdays: "isoWeekday", isoweekday: "isoWeekday", DDD: "dayOfYear", dayofyears: "dayOfYear", dayofyear: "dayOfYear", h: "hour", hours: "hour", hour: "hour", ms: "millisecond", milliseconds: "millisecond", millisecond: "millisecond", m: "minute", minutes: "minute", minute: "minute", M: "month", months: "month", month: "month", Q: "quarter", quarters: "quarter", quarter: "quarter", s: "second", seconds: "second", second: "second", gg: "weekYear", weekyears: "weekYear", weekyear: "weekYear", GG: "isoWeekYear", isoweekyears: "isoWeekYear", isoweekyear: "isoWeekYear", w: "week", weeks: "week", week: "week", W: "isoWeek", isoweeks: "isoWeek", isoweek: "isoWeek", y: "year", years: "year", year: "year" };
  closure_11 = { date: 9, day: 11, weekday: 11, isoWeekday: 11, dayOfYear: 4, hour: 13, millisecond: 16, minute: 14, month: 8, quarter: 7, second: 15, weekYear: 1, isoWeekYear: 1, week: 5, isoWeek: 5, year: 1 };
  let offsetResult = /\d/;
  let tmp2 = /\d\d/;
  let tmp3 = /\d{3}/;
  let tmp4 = /\d{4}/;
  let tmp5 = /[+-]?\d{6}/;
  let tmp6 = /\d\d?/;
  const re12 = tmp6;
  let tmp7 = /\d\d\d\d?/;
  let tmp8 = /\d\d\d\d\d\d?/;
  let tmp9 = /\d{1,3}/;
  let tmp10 = /\d{1,4}/;
  let tmp11 = /[+-]?\d{1,6}/;
  let tmp12 = /\d+/;
  const re13 = tmp12;
  let tmp13 = /[+-]?\d+/;
  const re14 = /Z|[+-]\d\d:?\d\d/gi;
  let tmp14 = /Z|[+-]\d\d(?::?\d\d)?/gi;
  const re15 = tmp14;
  let tmp15 = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  let tmp16 = /^[1-9]\d?/;
  let tmp17 = /^([1-9]\d|\d)/;
  closure_16 = {};
  closure_17 = {};
  c18 = 0;
  c19 = 1;
  c20 = 2;
  c21 = 3;
  c22 = 4;
  c23 = 5;
  c24 = 6;
  c25 = 7;
  c26 = 8;
  addFormatToken("Y", 0, 0, function() {
    const yearResult = this.year();
    if (yearResult <= 9999) {
      let text = zeroFill(yearResult, 4);
    } else {
      text = `+${tmp}`;
    }
    return text;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addRegexToken("Y", tmp13);
  addRegexToken("YY", tmp6, tmp2);
  addRegexToken("YYYY", tmp10, tmp4);
  addRegexToken("YYYYY", tmp11, tmp5);
  addRegexToken("YYYYYY", tmp11, tmp5);
  addParseToken(["YYYYY", "YYYYYY"], 0);
  addParseToken("YYYY", (bound) => {
    if (bound.length === 2) {
      let parseTwoDigitYearResult = hooks.parseTwoDigitYear(bound);
    } else {
      parseTwoDigitYearResult = toInt(bound);
    }
    arg1[c18] = parseTwoDigitYearResult;
  });
  addParseToken("YY", (arg0, arg1) => {
    arg1[c18] = hooks.parseTwoDigitYear(arg0);
  });
  addParseToken("Y", (arg0, arg1) => {
    arg1[c18] = parseInt(arg0, 10);
  });
  const getSet = makeGetSet("FullYear", true);
  if (Array.prototype.indexOf) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  } else {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(arg0) {
    return this.localeData().monthsShort(this, arg0);
  });
  addFormatToken("MMMM", 0, 0, function(arg0) {
    return this.localeData().months(this, arg0);
  });
  addRegexToken("M", tmp6, tmp16);
  addRegexToken("MM", tmp6, tmp2);
  addRegexToken("MMM", (arg0, monthsShortRegex) => monthsShortRegex.monthsShortRegex(arg0));
  addRegexToken("MMMM", (arg0, monthsRegex) => monthsRegex.monthsRegex(arg0));
  addParseToken(["M", "MM"], (bound) => {
    arg1[c19] = toInt(bound) - 1;
  });
  addParseToken(["MMM", "MMMM"], (invalidMonth, arg1, _locale) => {
    _locale = _locale._locale;
    const monthsParseResult = _locale.monthsParse(invalidMonth, arg3, _locale._strict);
    if (monthsParseResult != null) {
      arg1[c19] = monthsParseResult;
    } else {
      getParsingFlags(_locale).invalidMonth = invalidMonth;
    }
  });
  let parts = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  let parts1 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  const re29 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  closure_30 = tmp15;
  closure_31 = tmp15;
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addRegexToken("w", tmp6, tmp16);
  addRegexToken("ww", tmp6, tmp2);
  addRegexToken("W", tmp6, tmp16);
  addRegexToken("WW", tmp6, tmp2);
  addWeekParseToken(["w", "ww", "W", "WW"], (bound, arg1, arg2, str) => {
    const substr = str.substr(0, 1);
    arg1[substr] = toInt(bound);
  });
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(arg0) {
    return this.localeData().weekdaysMin(this, arg0);
  });
  addFormatToken("ddd", 0, 0, function(arg0) {
    return this.localeData().weekdaysShort(this, arg0);
  });
  addFormatToken("dddd", 0, 0, function(arg0) {
    return this.localeData().weekdays(this, arg0);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addRegexToken("d", tmp6);
  addRegexToken("e", tmp6);
  addRegexToken("E", tmp6);
  addRegexToken("dd", (arg0, weekdaysMinRegex) => weekdaysMinRegex.weekdaysMinRegex(arg0));
  addRegexToken("ddd", (arg0, weekdaysShortRegex) => weekdaysShortRegex.weekdaysShortRegex(arg0));
  addRegexToken("dddd", (arg0, weekdaysRegex) => weekdaysRegex.weekdaysRegex(arg0));
  addWeekParseToken(["dd", "ddd", "dddd"], (invalidWeekday, arg1, _locale) => {
    _locale = _locale._locale;
    const weekdaysParseResult = _locale.weekdaysParse(invalidWeekday, arg3, _locale._strict);
    if (weekdaysParseResult != null) {
      arg1.d = weekdaysParseResult;
    } else {
      getParsingFlags(_locale).invalidWeekday = invalidWeekday;
    }
  });
  addWeekParseToken(["d", "e", "E"], (bound) => {
    arg1[arg3] = toInt(bound);
  });
  const parts2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  const parts3 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  closure_33 = tmp15;
  closure_34 = tmp15;
  closure_35 = tmp15;
  const parts4 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, function kFormat() {
    return this.hours() || 24;
  });
  addFormatToken("hmm", 0, 0, function() {
    const text = `${hFormat.apply(this)}`;
    return `${hFormat.apply(this)}` + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    const text = `${hFormat.apply(this)}`;
    const text1 = `${hFormat.apply(this)}${zeroFill(this.minutes(), 2)}`;
    return `${hFormat.apply(this)}${zeroFill(this.minutes(), 2)}` + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    const text = `${this.hours()}`;
    return `${this.hours()}` + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    const text = `${this.hours()}`;
    const text1 = `${this.hours()}${zeroFill(this.minutes(), 2)}`;
    return `${this.hours()}${zeroFill(this.minutes(), 2)}` + zeroFill(this.seconds(), 2);
  });
  meridiem("a", true);
  meridiem("A", false);
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", tmp6, tmp17);
  addRegexToken("h", tmp6, tmp16);
  addRegexToken("k", tmp6, tmp16);
  addRegexToken("HH", tmp6, tmp2);
  addRegexToken("hh", tmp6, tmp2);
  addRegexToken("kk", tmp6, tmp2);
  addRegexToken("hmm", tmp7);
  addRegexToken("hmmss", tmp8);
  addRegexToken("Hmm", tmp7);
  addRegexToken("Hmmss", tmp8);
  addParseToken(["H", "HH"], 3);
  addParseToken(["k", "kk"], (bound) => {
    const tmp = toInt(bound);
    let num = 0;
    if (tmp !== 24) {
      num = tmp;
    }
    arg1[c21] = num;
  });
  addParseToken(["a", "A"], (_meridiem, arg1, _locale) => {
    _locale = _locale._locale;
    _locale._isPm = _locale.isPM(_meridiem);
    _locale._meridiem = _meridiem;
  });
  addParseToken(["h", "hh"], (bound, arg1, _pf) => {
    arg1[c21] = toInt(bound);
    getParsingFlags(_pf).bigHour = true;
  });
  addParseToken("hmm", (str, arg1, _pf) => {
    const diff = str.length - 2;
    arg1[c21] = toInt(str.substr(0, diff));
    arg1[c22] = toInt(str.substr(diff));
    getParsingFlags(_pf).bigHour = true;
  });
  addParseToken("hmmss", (str, arg1, _pf) => {
    const diff = str.length - 4;
    const diff1 = str.length - 2;
    arg1[c21] = toInt(str.substr(0, diff));
    arg1[c22] = toInt(str.substr(diff, 2));
    arg1[c23] = toInt(str.substr(diff1));
    getParsingFlags(_pf).bigHour = true;
  });
  addParseToken("Hmm", (str) => {
    const diff = str.length - 2;
    arg1[c21] = toInt(str.substr(0, diff));
    arg1[c22] = toInt(str.substr(diff));
  });
  addParseToken("Hmmss", (str) => {
    const diff = str.length - 4;
    const diff1 = str.length - 2;
    arg1[c21] = toInt(str.substr(0, diff));
    arg1[c22] = toInt(str.substr(diff, 2));
    arg1[c23] = toInt(str.substr(diff1));
  });
  const getSet1 = makeGetSet("Hours", true);
  let obj = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: parts, monthsShort: parts1, week: { dow: 0, doy: 6 }, weekdays: parts2, weekdaysMin: parts4, weekdaysShort: parts3, meridiemParse: /[ap]\.?m?\.?/i };
  closure_37 = {};
  closure_38 = {};
  const re40 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const re41 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const re42 = /Z|[+-]\d\d(?::?\d\d)?/;
  let items1 = ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/];
  let items2 = [items1, , , , , , , , , , , , ];
  let items3 = ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/];
  items2[1] = items3;
  let items4 = ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/];
  items2[2] = items4;
  let items5 = ["GGGG-[W]WW", /\d{4}-W\d\d/, false];
  items2[3] = items5;
  let items6 = ["YYYY-DDD", /\d{4}-\d{3}/];
  items2[4] = items6;
  let items7 = ["YYYY-MM", /\d{4}-\d\d/, false];
  items2[5] = items7;
  const items8 = ["YYYYYYMMDD", /[+-]\d{10}/];
  items2[6] = items8;
  const items9 = ["YYYYMMDD", /\d{8}/];
  items2[7] = items9;
  const items10 = ["GGGG[W]WWE", /\d{4}W\d{3}/];
  items2[8] = items10;
  const items11 = ["GGGG[W]WW", /\d{4}W\d{2}/, false];
  items2[9] = items11;
  const items12 = ["YYYYDDD", /\d{7}/];
  items2[10] = items12;
  const items13 = ["YYYYMM", /\d{6}/, false];
  items2[11] = items13;
  const items14 = ["YYYY", /\d{4}/, false];
  items2[12] = items14;
  const items15 = ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/];
  const items16 = [items15, , , , , , , , ];
  const items17 = ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/];
  items16[1] = items17;
  const items18 = ["HH:mm:ss", /\d\d:\d\d:\d\d/];
  items16[2] = items18;
  const items19 = ["HH:mm", /\d\d:\d\d/];
  items16[3] = items19;
  const items20 = ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/];
  items16[4] = items20;
  const items21 = ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/];
  items16[5] = items21;
  const items22 = ["HHmmss", /\d\d\d\d\d\d/];
  items16[6] = items22;
  const items23 = ["HHmm", /\d\d\d\d/];
  items16[7] = items23;
  const items24 = ["HH", /\d\d/];
  items16[8] = items24;
  const re45 = /^\/?Date\((-?\d+)/i;
  const re46 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  closure_47 = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
  hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (_useUTC) => {
    let str = "";
    if (_useUTC._useUTC) {
      str = " UTC";
    }
    _useUTC._d = new Date(_useUTC._i + str);
  });
  closure_48 = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
  const deprecateResult = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    let self = this;
    const applyResult = createLocal(...arguments);
    if (this.isValid()) {
      if (applyResult.isValid()) {
        if (applyResult >= self) {
          self = applyResult;
        }
        return self;
      }
    }
    return createInvalid();
  });
  offsetResult = offset("Z", ":");
  offsetResult = offset("ZZ", "");
  offsetResult = addRegexToken("Z", tmp14);
  offsetResult = addRegexToken("ZZ", tmp14);
  offsetResult = addParseToken(["Z", "ZZ"], (_i) => {
    arg2._useUTC = true;
    arg2._tzm = offsetFromString(closure_15, _i);
  });
  const re49 = /([\+\-]|\d\d)/gi;
  const re50 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  const re51 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  createDuration.fn = Duration.prototype;
  createDuration.invalid = function createInvalid$1() {
    return createDuration(NaN);
  };
  offsetResult = createAdder(1, "add");
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  offsetResult = createAdder(-1, "subtract");
  offsetResult = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(self) {
    self = this;
    if (self === undefined) {
      return self.localeData();
    } else {
      return self.locale(self);
    }
  });
  c52 = 1000;
  c53 = 60000;
  c54 = 3600000;
  c55 = 12622780800000;
  offsetResult = addFormatToken("N", 0, 0, "eraAbbr");
  offsetResult = addFormatToken("NN", 0, 0, "eraAbbr");
  offsetResult = addFormatToken("NNN", 0, 0, "eraAbbr");
  offsetResult = addFormatToken("NNNN", 0, 0, "eraName");
  offsetResult = addFormatToken("NNNNN", 0, 0, "eraNarrow");
  offsetResult = addFormatToken("y", ["y", 1], "yo", "eraYear");
  offsetResult = addFormatToken("y", ["yy", 2], 0, "eraYear");
  offsetResult = addFormatToken("y", ["yyy", 3], 0, "eraYear");
  offsetResult = addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  offsetResult = addRegexToken("N", matchEraAbbr);
  offsetResult = addRegexToken("NN", matchEraAbbr);
  offsetResult = addRegexToken("NNN", matchEraAbbr);
  offsetResult = addRegexToken("NNNN", function matchEraName(arg0, erasNameRegex) {
    return erasNameRegex.erasNameRegex(arg0);
  });
  offsetResult = addRegexToken("NNNNN", function matchEraNarrow(arg0, erasNarrowRegex) {
    return erasNarrowRegex.erasNarrowRegex(arg0);
  });
  offsetResult = addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], (invalidEra, arg1, _locale) => {
    _locale = _locale._locale;
    const erasParseResult = _locale.erasParse(invalidEra, arg3, _locale._strict);
    const tmp2 = getParsingFlags(_locale);
    if (erasParseResult) {
      tmp2.era = erasParseResult;
    } else {
      tmp2.invalidEra = invalidEra;
    }
  });
  offsetResult = addRegexToken("y", tmp12);
  offsetResult = addRegexToken("yy", tmp12);
  offsetResult = addRegexToken("yyy", tmp12);
  offsetResult = addRegexToken("yyyy", tmp12);
  offsetResult = addRegexToken("yo", function matchEraYearOrdinal(arg0, _eraYearOrdinalRegex) {
    return _eraYearOrdinalRegex._eraYearOrdinalRegex || closure_13;
  });
  offsetResult = addParseToken(["y", "yy", "yyy", "yyyy"], 0);
  offsetResult = addParseToken(["yo"], (str, arg1, _locale) => {
    if (_locale._locale._eraYearOrdinalRegex) {
      const match = str.match(_locale._locale._eraYearOrdinalRegex);
    }
    if (_locale._locale.eraYearOrdinalParse) {
      _locale = _locale._locale;
      arg1[tmp2] = _locale.eraYearOrdinalParse(str, match);
    } else {
      const _parseInt = parseInt;
      arg1[tmp2] = parseInt(str, 10);
    }
  });
  offsetResult = addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  offsetResult = addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  offsetResult = addWeekYearFormatToken("gggg", "weekYear");
  offsetResult = addWeekYearFormatToken("ggggg", "weekYear");
  offsetResult = addWeekYearFormatToken("GGGG", "isoWeekYear");
  offsetResult = addWeekYearFormatToken("GGGGG", "isoWeekYear");
  offsetResult = addRegexToken("G", tmp13);
  offsetResult = addRegexToken("g", tmp13);
  offsetResult = addRegexToken("GG", tmp6, tmp2);
  offsetResult = addRegexToken("gg", tmp6, tmp2);
  offsetResult = addRegexToken("GGGG", tmp10, tmp4);
  offsetResult = addRegexToken("gggg", tmp10, tmp4);
  offsetResult = addRegexToken("GGGGG", tmp11, tmp5);
  offsetResult = addRegexToken("ggggg", tmp11, tmp5);
  offsetResult = addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], (bound, arg1, arg2, str) => {
    const substr = str.substr(0, 2);
    arg1[substr] = toInt(bound);
  });
  offsetResult = addWeekParseToken(["gg", "GG"], (arg0, arg1, arg2, arg3) => {
    arg1[arg3] = hooks.parseTwoDigitYear(arg0);
  });
  offsetResult = addFormatToken("Q", 0, "Qo", "quarter");
  offsetResult = addRegexToken("Q", offsetResult);
  offsetResult = addParseToken("Q", (bound) => {
    arg1[c19] = (toInt(bound) - 1) * 3;
  });
  offsetResult = addFormatToken("D", ["DD", 2], "Do", "date");
  offsetResult = addRegexToken("D", tmp6, tmp16);
  offsetResult = addRegexToken("DD", tmp6, tmp2);
  offsetResult = addRegexToken("Do", (arg0, _dayOfMonthOrdinalParse) => {
    if (arg0) {
      let _dayOfMonthOrdinalParseLenient = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParse || _dayOfMonthOrdinalParse._ordinalParse;
      const tmp = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParse || _dayOfMonthOrdinalParse._ordinalParse;
    } else {
      _dayOfMonthOrdinalParseLenient = _dayOfMonthOrdinalParse._dayOfMonthOrdinalParseLenient;
    }
    return _dayOfMonthOrdinalParseLenient;
  });
  offsetResult = addParseToken(["D", "DD"], 2);
  offsetResult = addParseToken("Do", (arg0, arg1) => {
    arg1[c20] = toInt(arg0.match(closure_12)[0]);
  });
  offsetResult = makeGetSet("Date", true);
  offsetResult = addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  offsetResult = addRegexToken("DDD", tmp9);
  offsetResult = addRegexToken("DDDD", tmp3);
  offsetResult = addParseToken(["DDD", "DDDD"], (bound) => {
    arg2._dayOfYear = toInt(bound);
  });
  offsetResult = addFormatToken("m", ["mm", 2], 0, "minute");
  offsetResult = addRegexToken("m", tmp6, tmp17);
  offsetResult = addRegexToken("mm", tmp6, tmp2);
  offsetResult = addParseToken(["m", "mm"], 4);
  offsetResult = makeGetSet("Minutes", false);
  offsetResult = addFormatToken("s", ["ss", 2], 0, "second");
  offsetResult = addRegexToken("s", tmp6, tmp17);
  offsetResult = addRegexToken("ss", tmp6, tmp2);
  offsetResult = addParseToken(["s", "ss"], 5);
  offsetResult = makeGetSet("Seconds", false);
  offsetResult = addFormatToken("S", 0, 0, function() {
    return ~~this.millisecond() / 100;
  });
  offsetResult = addFormatToken(0, ["SS", 2], 0, function() {
    return ~~this.millisecond() / 10;
  });
  offsetResult = addFormatToken(0, ["SSS", 3], 0, "millisecond");
  offsetResult = addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  offsetResult = addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  offsetResult = addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1000;
  });
  offsetResult = addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 10000;
  });
  offsetResult = addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 100000;
  });
  offsetResult = addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1000000;
  });
  offsetResult = addRegexToken("S", tmp9, offsetResult);
  offsetResult = addRegexToken("SS", tmp9, tmp2);
  offsetResult = addRegexToken("SSS", tmp9, tmp3);
  if ("SSSS".length <= 9) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  if ("S".length <= 9) {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
  }
  offsetResult = makeGetSet("Milliseconds", false);
  offsetResult = addFormatToken("z", 0, 0, "zoneAbbr");
  offsetResult = addFormatToken("zz", 0, 0, "zoneName");
  let prototype = Moment.prototype;
  prototype.add = offsetResult;
  prototype.calendar = function calendar$1(key10018) {
    const self = this;
    let first = key10018;
    let first1 = arg1;
    if (arguments.length === 1) {
      if (arguments[0]) {
        if (isMomentInput(arguments[0])) {
          first = arguments[0];
        } else {
          first = key10018;
          first1 = arg1;
          if (isCalendarSpec(arguments[0])) {
            first1 = arguments[0];
          }
        }
      }
    }
    if (!first) {
      first = createLocal();
    }
    let str = hooks.calendarFormat(self, cloneWithOffset(first, self).startOf("day"));
    if (!str) {
      str = "sameElse";
    }
    let calendarResult = first1;
    if (!first1) {
      if (!calendarResult) {
        calendarResult = self.localeData().calendar(str, self, createLocal(first));
        const localeDataResult = self.localeData();
      }
      return self.format(calendarResult);
    } else if (isFunction(first1[str])) {
      let callResult = obj2.call(self, first);
    } else {
      callResult = obj2;
    }
  };
  prototype.clone = function clone() {
    return new Moment(this);
  };
  prototype.diff = function diff(first, key10006) {
    const self = this;
    if (this.isValid()) {
      obj = cloneWithOffset(first, self);
      if (obj.isValid()) {
        const result = (obj.utcOffset() - self.utcOffset()) * 60000;
        const tmp9 = normalizeUnits(key10006);
        if ("year" === tmp9) {
          let result1 = monthDiff(self, obj) / 12;
        } else if ("month" === tmp9) {
          result1 = monthDiff(self, obj);
        } else if ("quarter" === tmp9) {
          result1 = monthDiff(self, obj) / 3;
        } else if ("second" === tmp9) {
          result1 = (self - obj) / 1000;
        } else if ("minute" === tmp9) {
          result1 = (self - obj) / 60000;
        } else if ("hour" === tmp9) {
          result1 = (self - obj) / 3600000;
        } else if ("day" === tmp9) {
          result1 = (self - obj - result) / 86400000;
        } else if ("week" === tmp9) {
          result1 = (self - obj - result) / 604800000;
        } else {
          result1 = self - obj;
        }
        let tmp15 = result1;
        if (!arg2) {
          tmp15 = absFloor(result1);
        }
        return tmp15;
      } else {
        const _NaN2 = NaN;
        return NaN;
      }
    } else {
      const _NaN = NaN;
      return NaN;
    }
  };
  prototype.endOf = function endOf(key10006) {
    const self = this;
    const tmp = normalizeUnits(key10006);
    if (tmp !== undefined) {
      if (tmp !== "millisecond") {
        if (self.isValid()) {
          const tmp2 = self._isUTC ? utcStartOfDate : localStartOfDate;
          if ("year" === tmp) {
            let diff = tmp2(self.year() + 1, 0, 1) - 1;
          } else if ("quarter" === tmp) {
            const yearResult = self.year();
            diff = tmp2(yearResult, self.month() - self.month() % 3 + 3, 1) - 1;
            const monthResult = self.month();
          } else if ("month" === tmp) {
            diff = tmp2(self.year(), self.month() + 1, 1) - 1;
            const yearResult1 = self.year();
          } else if ("week" === tmp) {
            const yearResult2 = self.year();
            const monthResult1 = self.month();
            diff = tmp2(yearResult2, monthResult1, self.date() - self.weekday() + 7) - 1;
            const dateResult = self.date();
          } else if ("isoWeek" === tmp) {
            const yearResult3 = self.year();
            const monthResult2 = self.month();
            diff = tmp2(yearResult3, monthResult2, self.date() - (self.isoWeekday() - 1) + 7) - 1;
            const dateResult1 = self.date();
          } else {
            if ("day" !== tmp) {
              if ("date" !== tmp) {
                if ("hour" === tmp) {
                  const _d2 = self._d;
                  let valueOfResult = _d2.valueOf();
                  let num2 = 0;
                  if (!self._isUTC) {
                    num2 = self.utcOffset() * c53;
                  }
                  diff = valueOfResult + (c54 - mod$1(valueOfResult + num2, c54) - 1);
                  const tmp8 = c54;
                  const tmp9 = mod$1;
                } else if ("minute" === tmp) {
                  const _d = self._d;
                  valueOfResult = _d.valueOf();
                  diff = valueOfResult + (c53 - mod$1(valueOfResult, c53) - 1);
                } else if ("second" === tmp) {
                  const _d4 = self._d;
                  const valueOfResult1 = _d4.valueOf();
                  diff = valueOfResult1 + (c52 - mod$1(valueOfResult1, c52) - 1);
                }
              }
            }
            const yearResult4 = self.year();
            diff = tmp2(yearResult4, self.month(), self.date() + 1) - 1;
            const monthResult3 = self.month();
          }
          const _d3 = self._d;
          _d3.setTime(diff);
          hooks.updateOffset(self, true);
          return self;
        }
      }
    }
    return self;
  };
  prototype.format = function format(Z) {
    const self = this;
    if (Z) {
      const tmp4 = formatMoment(self, Z);
      return self.localeData().postformat(tmp4);
    } else {
      self.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
  };
  prototype.from = function from(isValid) {
    const self = this;
    if (this.isValid()) {
      if (!isMoment(isValid)) {
        obj = createLocal(isValid);
      }
      obj = { to: self, from: isValid };
      const obj4 = createDuration(obj);
      return createDuration(obj).locale(self.locale()).humanize(!arg1);
    }
    return self.localeData().invalidDate();
  };
  prototype.fromNow = function fromNow(arg0) {
    return this.from(createLocal(), arg0);
  };
  prototype.to = function to(local, arg1) {
    const self = this;
    if (this.isValid()) {
      if (!isMoment(local)) {
        obj = createLocal(local);
      }
      obj = { from: self, to: local };
      const obj4 = createDuration(obj);
      return createDuration(obj).locale(self.locale()).humanize(!arg1);
    }
    return self.localeData().invalidDate();
  };
  prototype.toNow = function toNow(arg0) {
    return this.to(createLocal(), arg0);
  };
  prototype.get = function stringGet(key10006) {
    const self = this;
    const tmp = normalizeUnits(key10006);
    if (isFunction(this[tmp])) {
      return self[tmp]();
    } else {
      return self;
    }
  };
  prototype.invalidAt = function invalidAt() {
    return getParsingFlags(this).overflow;
  };
  prototype.isAfter = function isAfter(defaultResult3, key10006) {
    const self = this;
    obj = defaultResult3;
    if (!isMoment(defaultResult3)) {
      obj = createLocal(defaultResult3);
    }
    if (self.isValid()) {
      if (obj.isValid()) {
        const tmp4 = normalizeUnits(key10006) || "millisecond";
        if (tmp4 === "millisecond") {
          let valueOfResult = self.valueOf();
          return valueOfResult > obj.valueOf();
        } else {
          valueOfResult = obj.valueOf();
          const cloneResult = self.clone();
          return valueOfResult < self.clone().startOf(tmp4).valueOf();
        }
      }
    }
    return false;
  };
  prototype.isBefore = function isBefore(defaultResult2, key10006) {
    const self = this;
    obj = defaultResult2;
    if (!isMoment(defaultResult2)) {
      obj = createLocal(defaultResult2);
    }
    if (self.isValid()) {
      if (obj.isValid()) {
        const tmp4 = normalizeUnits(key10006) || "millisecond";
        if (tmp4 === "millisecond") {
          let valueOfResult = self.valueOf();
          return valueOfResult < obj.valueOf();
        } else {
          const cloneResult = self.clone();
          valueOfResult = self.clone().endOf(tmp4).valueOf();
          return valueOfResult < obj.valueOf();
        }
      }
    }
    return false;
  };
  prototype.isBetween = function isBetween(_isAMomentObject, _isAMomentObject, key10006) {
    let str = arg3;
    const self = this;
    obj = _isAMomentObject;
    if (!isMoment(_isAMomentObject)) {
      obj = createLocal(_isAMomentObject);
    }
    let obj2 = _isAMomentObject;
    if (!isMoment(_isAMomentObject)) {
      obj2 = createLocal(_isAMomentObject);
    }
    if (self.isValid()) {
      if (obj.isValid()) {
        if (obj2.isValid()) {
          if (!str) {
            str = "()";
          }
          if (str[0] === "(") {
            let isAfterResult = self.isAfter(obj, key10006);
          } else {
            isAfterResult = !self.isBefore(obj, key10006);
          }
          if (!isAfterResult) {
            return isAfterResult;
          } else if (str[1] === ")") {
            let isBeforeResult = self.isBefore(obj2, key10006);
          } else {
            isBeforeResult = !self.isAfter(obj2, key10006);
          }
        }
      }
    }
    return false;
  };
  prototype.isSame = function isSame(_isAMomentObject, key10006) {
    const self = this;
    obj = _isAMomentObject;
    if (!isMoment(_isAMomentObject)) {
      obj = createLocal(_isAMomentObject);
    }
    if (self.isValid()) {
      if (obj.isValid()) {
        const tmp4 = normalizeUnits(key10006) || "millisecond";
        if (tmp4 === "millisecond") {
          let valueOfResult = self.valueOf();
          return valueOfResult === obj.valueOf();
        } else {
          valueOfResult = obj.valueOf();
          const cloneResult = self.clone();
          let tmp6 = self.clone().startOf(tmp4).valueOf() <= valueOfResult;
          if (tmp6) {
            const cloneResult1 = self.clone();
            tmp6 = valueOfResult <= self.clone().endOf(tmp4).valueOf();
            const endOfResult = self.clone().endOf(tmp4);
          }
          return tmp6;
        }
      }
    }
    return false;
  };
  prototype.isSameOrAfter = function isSameOrAfter(defaultResult3, key10006) {
    const self = this;
    return this.isSame(defaultResult3, key10006) || self.isAfter(defaultResult3, key10006);
  };
  prototype.isSameOrBefore = function isSameOrBefore(defaultResult2, key10006) {
    const self = this;
    return this.isSame(defaultResult2, key10006) || self.isBefore(defaultResult2, key10006);
  };
  prototype.isValid = function isValid$2() {
    return isValid(this);
  };
  prototype.lang = offsetResult;
  prototype.locale = locale;
  prototype.localeData = localeData;
  prototype.max = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    let self = this;
    const applyResult = createLocal(...arguments);
    if (this.isValid()) {
      if (applyResult.isValid()) {
        if (applyResult <= self) {
          self = applyResult;
        }
        return self;
      }
    }
    return createInvalid();
  });
  prototype.min = deprecateResult;
  prototype.parsingFlags = function parsingFlags() {
    obj = {};
    extend(obj, getParsingFlags(this));
    return obj;
  };
  prototype.set = function stringSet(key10006) {
    const self = this;
    if (typeof key10006 === "object") {
      const tmp6 = normalizeObjectUnits(key10006);
      const arr = getPrioritizedUnits(tmp6);
      for (let num = 0; num < length; num = num + 1) {
        let tmp8 = self[arr[num].unit](tmp6[arr[num].unit]);
      }
      length = arr.length;
    } else {
      const tmp2 = normalizeUnits(key10006);
      if (isFunction(self[tmp2])) {
        return self[tmp2](arg1);
      }
    }
    return self;
  };
  prototype.startOf = function startOf(day) {
    const self = this;
    const tmp = normalizeUnits(day);
    if (tmp !== undefined) {
      if (tmp !== "millisecond") {
        if (self.isValid()) {
          const tmp2 = self._isUTC ? utcStartOfDate : localStartOfDate;
          if ("year" === tmp) {
            let diff = tmp2(self.year(), 0, 1);
          } else if ("quarter" === tmp) {
            const yearResult = self.year();
            diff = tmp2(yearResult, self.month() - self.month() % 3, 1);
            const monthResult = self.month();
          } else if ("month" === tmp) {
            diff = tmp2(self.year(), self.month(), 1);
            const yearResult1 = self.year();
          } else if ("week" === tmp) {
            const yearResult2 = self.year();
            const monthResult1 = self.month();
            diff = tmp2(yearResult2, monthResult1, self.date() - self.weekday());
            const dateResult = self.date();
          } else if ("isoWeek" === tmp) {
            const yearResult3 = self.year();
            const monthResult2 = self.month();
            diff = tmp2(yearResult3, monthResult2, self.date() - (self.isoWeekday() - 1));
            const dateResult1 = self.date();
          } else {
            if ("day" !== tmp) {
              if ("date" !== tmp) {
                if ("hour" === tmp) {
                  const _d2 = self._d;
                  let valueOfResult = _d2.valueOf();
                  let num = 0;
                  if (!self._isUTC) {
                    num = self.utcOffset() * c53;
                  }
                  diff = valueOfResult - mod$1(valueOfResult + num, c54);
                  const tmp8 = mod$1;
                } else if ("minute" === tmp) {
                  const _d = self._d;
                  valueOfResult = _d.valueOf();
                  diff = valueOfResult - mod$1(valueOfResult, c53);
                } else if ("second" === tmp) {
                  const _d4 = self._d;
                  const valueOfResult1 = _d4.valueOf();
                  diff = valueOfResult1 - mod$1(valueOfResult1, c52);
                }
              }
            }
            const yearResult4 = self.year();
            diff = tmp2(yearResult4, self.month(), self.date());
            const monthResult3 = self.month();
          }
          const _d3 = self._d;
          _d3.setTime(diff);
          hooks.updateOffset(self, true);
          return self;
        }
      }
    }
    return self;
  };
  prototype.subtract = offsetResult;
  prototype.toArray = function toArray() {
    items = [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    return items;
  };
  prototype.toObject = function toObject() {
    return { years: this.year(), months: this.month(), date: this.date(), hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds() };
  };
  prototype.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  prototype.toISOString = function toISOString(arg0) {
    const self = this;
    if (this.isValid()) {
      let utcResult = self;
      if (arg0 !== true) {
        utcResult = self.clone().utc();
        const cloneResult = self.clone();
      }
      if (utcResult.year() >= 0) {
        if (utcResult.year() <= 9999) {
          const _Date2 = Date;
          if (isFunction(Date.prototype.toISOString)) {
            if (tmp3) {
              return self.toDate().toISOString();
            } else {
              const _Date = Date;
              const date = new Date(self.valueOf() + self.utcOffset() * 60 * 1000);
              const valueOfResult = self.valueOf();
              return date.toISOString().replace("Z", formatMoment(utcResult, "Z"));
            }
          } else {
            let str = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";
            if (tmp3) {
              str = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";
            }
            return formatMoment(utcResult, str);
          }
        }
      }
      let str4 = "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ";
      if (arg0 !== true) {
        str4 = "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]";
      }
      return formatMoment(utcResult, str4);
    } else {
      return null;
    }
  };
  prototype.inspect = function inspect() {
    const self = this;
    if (this.isValid()) {
      let str3 = "moment";
      let str4 = "";
      if (!self.isLocal()) {
        let str5 = "moment.parseZone";
        if (self.utcOffset() === 0) {
          str5 = "moment.utc";
        }
        str4 = "Z";
        str3 = str5;
      }
      let str7 = "YYYYYY";
      if (0 <= self.year()) {
        str7 = "YYYYYY";
        if (self.year() <= 9999) {
          str7 = "YYYY";
        }
      }
      return self.format("[" + str3 + "(\"]" + str7 + "-MM-DD[T]HH:mm:ss.SSS" + (str4 + "[\")]"));
    } else {
      return "moment.invalid(/* " + self._i + " */)";
    }
  };
  if (typeof Symbol !== "undefined") {
    class hooks {
      constructor() {
        return createLocal(...arguments);
      }
      static parseTwoDigitYear(arg0) {
        tmp = toInt(arg0);
        num = 2000;
        if (toInt(arg0) > 68) {
          num = 1900;
        }
        return tmp + num;
      }
      static ISO_8601() {
        return;
      }
      static RFC_2822() {
        return;
      }
      static updateOffset() {
        return;
      }
      static min() {
        slice = [].slice;
        return pickBy("isBefore", slice.call(arguments, 0));
      }
      static max() {
        slice = [].slice;
        return pickBy("isAfter", slice.call(arguments, 0));
      }
      static now() {
        _Date = Date;
        if (Date.now) {
          nowResult = _Date.now();
        } else {
          prototype = _Date.prototype;
          tmp = new.target;
          tmp2 = new.target;
          _Date = new _Date();
          tmp4 = _Date;
          nowResult = +_Date;
        }
        return nowResult;
      }
      static unix(arg0) {
        return createLocal(arg0 * 1000);
      }
      static months(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "months");
      }
      static weekdays(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
      }
      static parseZone() {
        applyResult = createLocal(...arguments);
        return applyResult.parseZone();
      }
      static monthsShort(arg0, arg1) {
        return listMonthsImpl(arg0, arg1, "monthsShort");
      }
      static weekdaysMin(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
      }
      static updateLocale(arg0, arg1) {
        if (arg1 != null) {
          _config = closure_36;
          tmp7 = closure_37;
          if (closure_37[arg0] == null) {
            tmp9 = loadLocale;
            tmp10 = loadLocale(arg0);
            if (tmp10 != null) {
              _config = tmp10._config;
            }
            tmp11 = mergeConfigs;
            tmp12 = mergeConfigs(_config, arg1);
            if (tmp10 == null) {
              tmp12.abbr = arg0;
            }
            tmp13 = Locale;
            prototype = Locale.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp12;
            tmp17 = new Locale(tmp12);
            tmp18 = tmp17;
            tmp19 = closure_37;
            tmp17.parentLocale = closure_37[arg0];
            tmp20 = closure_37;
            closure_37[arg0] = tmp17;
            tmp25 = getSetGlobalLocale;
            tmp26 = getSetGlobalLocale(arg0);
          } else {
            tmp8 = closure_37;
          }
          tmp21 = closure_37;
          obj = closure_37[arg0];
          tmp22 = mergeConfigs;
          tmp23 = closure_37;
          result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
        } else {
          tmp3 = closure_37;
          if (closure_37[arg0] != null) {
            tmp28 = closure_37;
            if (closure_37[arg0].parentLocale != null) {
              tmp5 = closure_37;
              closure_37[arg0] = closure_37[arg0].parentLocale;
              tmp6 = getSetGlobalLocale;
              if (arg0 === getSetGlobalLocale()) {
                tmp30 = getSetGlobalLocale;
                tmp31 = getSetGlobalLocale(arg0);
              }
            } else {
              tmp4 = closure_37;
              if (closure_37[arg0] != null) {
                tmp29 = closure_37;
                delete tmp2[tmp];
              }
            }
          }
          tmp27 = closure_37;
          return closure_37[arg0];
        }
        return;
      }
      static locales() {
        return keys(closure_37);
      }
      static weekdaysShort(arg0, arg1, arg2) {
        return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
      }
      static relativeTimeRounding(arg0) {
        if (arg0 === undefined) {
          tmp = closure_57;
          return closure_57;
        } else {
          str = "function";
          if (typeof arg0 === "function") {
            closure_57 = arg0;
            flag2 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
      }
      static relativeTimeThreshold(arg0, arg1) {
        if (closure_58[arg0] === undefined) {
          flag2 = false;
          return false;
        } else if (arg1 === undefined) {
          tmp3 = closure_58;
          return closure_58[arg0];
        } else {
          tmp = closure_58;
          closure_58[arg0] = arg1;
          str = "s";
          if (arg0 === "s") {
            tmp2 = closure_58;
            num = 1;
            closure_58.ss = arg1 - 1;
          }
          flag = true;
          return true;
        }
      }
      static calendarFormat(arg0, arg1) {
        diffResult = arg0.diff(arg1, "days", true);
        str = "sameElse";
        str2 = "sameElse";
        if (diffResult >= -6) {
          num = -1;
          str3 = "lastWeek";
          if (diffResult >= -1) {
            num2 = 0;
            str4 = "lastDay";
            if (diffResult >= 0) {
              num3 = 1;
              str5 = "sameDay";
              if (diffResult >= 1) {
                num4 = 2;
                str6 = "nextDay";
                if (diffResult >= 2) {
                  num5 = 7;
                  if (diffResult < 7) {
                    str = "nextWeek";
                  }
                  str6 = str;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        return str2;
      }
    }
    if (Symbol.for != null) {
      class hooks {
        constructor() {
          return createLocal(...arguments);
        }
        static parseTwoDigitYear(arg0) {
          tmp = toInt(arg0);
          num = 2000;
          if (toInt(arg0) > 68) {
            num = 1900;
          }
          return tmp + num;
        }
        static ISO_8601() {
          return;
        }
        static RFC_2822() {
          return;
        }
        static updateOffset() {
          return;
        }
        static min() {
          slice = [].slice;
          return pickBy("isBefore", slice.call(arguments, 0));
        }
        static max() {
          slice = [].slice;
          return pickBy("isAfter", slice.call(arguments, 0));
        }
        static now() {
          _Date = Date;
          if (Date.now) {
            nowResult = _Date.now();
          } else {
            prototype = _Date.prototype;
            tmp = new.target;
            tmp2 = new.target;
            _Date = new _Date();
            tmp4 = _Date;
            nowResult = +_Date;
          }
          return nowResult;
        }
        static unix(arg0) {
          return createLocal(arg0 * 1000);
        }
        static months(arg0, arg1) {
          return listMonthsImpl(arg0, arg1, "months");
        }
        static weekdays(arg0, arg1, arg2) {
          return listWeekdaysImpl(arg0, arg1, arg2, "weekdays");
        }
        static parseZone() {
          applyResult = createLocal(...arguments);
          return applyResult.parseZone();
        }
        static monthsShort(arg0, arg1) {
          return listMonthsImpl(arg0, arg1, "monthsShort");
        }
        static weekdaysMin(arg0, arg1, arg2) {
          return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysMin");
        }
        static updateLocale(arg0, arg1) {
          if (arg1 != null) {
            _config = closure_36;
            tmp7 = closure_37;
            if (closure_37[arg0] == null) {
              tmp9 = loadLocale;
              tmp10 = loadLocale(arg0);
              if (tmp10 != null) {
                _config = tmp10._config;
              }
              tmp11 = mergeConfigs;
              tmp12 = mergeConfigs(_config, arg1);
              if (tmp10 == null) {
                tmp12.abbr = arg0;
              }
              tmp13 = Locale;
              prototype = Locale.prototype;
              tmp14 = new.target;
              tmp15 = new.target;
              tmp16 = tmp12;
              tmp17 = new Locale(tmp12);
              tmp18 = tmp17;
              tmp19 = closure_37;
              tmp17.parentLocale = closure_37[arg0];
              tmp20 = closure_37;
              closure_37[arg0] = tmp17;
              tmp25 = getSetGlobalLocale;
              tmp26 = getSetGlobalLocale(arg0);
            } else {
              tmp8 = closure_37;
            }
            tmp21 = closure_37;
            obj = closure_37[arg0];
            tmp22 = mergeConfigs;
            tmp23 = closure_37;
            result = obj.set(mergeConfigs(closure_37[arg0]._config, arg1));
          } else {
            tmp3 = closure_37;
            if (closure_37[arg0] != null) {
              tmp28 = closure_37;
              if (closure_37[arg0].parentLocale != null) {
                tmp5 = closure_37;
                closure_37[arg0] = closure_37[arg0].parentLocale;
                tmp6 = getSetGlobalLocale;
                if (arg0 === getSetGlobalLocale()) {
                  tmp30 = getSetGlobalLocale;
                  tmp31 = getSetGlobalLocale(arg0);
                }
              } else {
                tmp4 = closure_37;
                if (closure_37[arg0] != null) {
                  tmp29 = closure_37;
                  delete tmp2[tmp];
                }
              }
            }
            tmp27 = closure_37;
            return closure_37[arg0];
          }
          return;
        }
        static locales() {
          return keys(closure_37);
        }
        static weekdaysShort(arg0, arg1, arg2) {
          return listWeekdaysImpl(arg0, arg1, arg2, "weekdaysShort");
        }
        static relativeTimeRounding(arg0) {
          if (arg0 === undefined) {
            tmp = closure_57;
            return closure_57;
          } else {
            str = "function";
            if (typeof arg0 === "function") {
              closure_57 = arg0;
              flag2 = true;
              return true;
            } else {
              flag = false;
              return false;
            }
          }
        }
        static relativeTimeThreshold(arg0, arg1) {
          if (closure_58[arg0] === undefined) {
            flag2 = false;
            return false;
          } else if (arg1 === undefined) {
            tmp3 = closure_58;
            return closure_58[arg0];
          } else {
            tmp = closure_58;
            closure_58[arg0] = arg1;
            str = "s";
            if (arg0 === "s") {
              tmp2 = closure_58;
              num = 1;
              closure_58.ss = arg1 - 1;
            }
            flag = true;
            return true;
          }
        }
        static calendarFormat(arg0, arg1) {
          diffResult = arg0.diff(arg1, "days", true);
          str = "sameElse";
          str2 = "sameElse";
          if (diffResult >= -6) {
            num = -1;
            str3 = "lastWeek";
            if (diffResult >= -1) {
              num2 = 0;
              str4 = "lastDay";
              if (diffResult >= 0) {
                num3 = 1;
                str5 = "sameDay";
                if (diffResult >= 1) {
                  num4 = 2;
                  str6 = "nextDay";
                  if (diffResult >= 2) {
                    num5 = 7;
                    if (diffResult < 7) {
                      str = "nextWeek";
                    }
                    str6 = str;
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          return str2;
        }
      }
      prototype[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
  }
  prototype.toJSON = function toJSON() {
    const self = this;
    let toISOStringResult = null;
    if (this.isValid()) {
      toISOStringResult = self.toISOString();
    }
    return toISOStringResult;
  };
  prototype.toString = function toString() {
    const cloneResult = this.clone();
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  };
  prototype.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };
  prototype.valueOf = function valueOf() {
    ({ _d, _offset } = this);
    if (!_offset) {
      _offset = 0;
    }
    return _d.valueOf() - _offset * 60000;
  };
  prototype.creationData = function creationData() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  };
  prototype.eraName = function getEraName() {
    const self = this;
    const erasResult = this.localeData().eras();
    let num = 0;
    if (0 < erasResult.length) {
      while (true) {
        let cloneResult = self.clone();
        let startOfResult = cloneResult.startOf("day");
        let valueOfResult = startOfResult.valueOf();
        let tmp2 = num;
        if (erasResult[num].since <= valueOfResult) {
          if (valueOfResult <= erasResult[num].until) {
            break;
          }
        }
        if (erasResult[num].until <= valueOfResult) {
          if (valueOfResult <= erasResult[num].since) {
            return erasResult[num].name;
          }
        }
        num = num + 1;
      }
      return erasResult[num].name;
    }
    return "";
  };
  prototype.eraNarrow = function getEraNarrow() {
    const self = this;
    const erasResult = this.localeData().eras();
    let num = 0;
    if (0 < erasResult.length) {
      while (true) {
        let cloneResult = self.clone();
        let startOfResult = cloneResult.startOf("day");
        let valueOfResult = startOfResult.valueOf();
        let tmp2 = num;
        if (erasResult[num].since <= valueOfResult) {
          if (valueOfResult <= erasResult[num].until) {
            break;
          }
        }
        if (erasResult[num].until <= valueOfResult) {
          if (valueOfResult <= erasResult[num].since) {
            return erasResult[num].narrow;
          }
        }
        num = num + 1;
      }
      return erasResult[num].narrow;
    }
    return "";
  };
  prototype.eraAbbr = function getEraAbbr() {
    const self = this;
    const erasResult = this.localeData().eras();
    let num = 0;
    if (0 < erasResult.length) {
      while (true) {
        let cloneResult = self.clone();
        let startOfResult = cloneResult.startOf("day");
        let valueOfResult = startOfResult.valueOf();
        let tmp2 = num;
        if (erasResult[num].since <= valueOfResult) {
          if (valueOfResult <= erasResult[num].until) {
            break;
          }
        }
        if (erasResult[num].until <= valueOfResult) {
          if (valueOfResult <= erasResult[num].since) {
            return erasResult[num].abbr;
          }
        }
        num = num + 1;
      }
      return erasResult[num].abbr;
    }
    return "";
  };
  prototype.eraYear = function getEraYear() {
    const self = this;
    const erasResult = this.localeData().eras();
    let num = 0;
    if (0 < erasResult.length) {
      while (true) {
        let tmp = num;
        let num2 = -1;
        if (erasResult[num].since <= erasResult[num].until) {
          num2 = 1;
        }
        let cloneResult = self.clone();
        let startOfResult = cloneResult.startOf("day");
        let valueOfResult = startOfResult.valueOf();
        if (erasResult[num].since > valueOfResult) {
          if (erasResult[num].until > valueOfResult) {
            num = num + 1;
          } else if (valueOfResult <= erasResult[num].since) {
            break;
          }
          break;
        } else if (valueOfResult <= erasResult[num].until) {
          break;
        }
        let tmp4 = hooks;
        let yearResult = self.year();
        let obj4 = hooks(erasResult[num].since);
        return (yearResult - obj4.year()) * num2 + erasResult[num].offset;
      }
    }
    return self.year();
  };
  prototype.year = getSet;
  prototype.isLeapYear = function getIsLeapYear() {
    return isLeapYear(this.year());
  };
  prototype.weekYear = function getSetWeekYear(key10018) {
    const weekResult = this.week();
    const sum = this.weekday() + this.localeData()._week.dow;
    return getSetWeekYearHelper.call(this, key10018, weekResult, sum, this.localeData()._week.dow, this.localeData()._week.doy);
  };
  prototype.isoWeekYear = function getSetISOWeekYear(key10018) {
    return getSetWeekYearHelper.call(this, key10018, this.isoWeek(), this.isoWeekday(), 1, 4);
  };
  prototype.quarters = getSetQuarter;
  prototype.quarter = getSetQuarter;
  prototype.month = getSetMonth;
  prototype.daysInMonth = function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  };
  prototype.weeks = getSetWeek;
  prototype.week = getSetWeek;
  prototype.isoWeeks = getSetISOWeek;
  prototype.isoWeek = getSetISOWeek;
  prototype.weeksInYear = function getWeeksInYear() {
    const _week = this.localeData()._week;
    return weeksInYear(this.year(), _week.dow, _week.doy);
  };
  prototype.weeksInWeekYear = function getWeeksInWeekYear() {
    const _week = this.localeData()._week;
    return weeksInYear(this.weekYear(), _week.dow, _week.doy);
  };
  prototype.isoWeeksInYear = function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  };
  prototype.isoWeeksInISOWeekYear = function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  };
  prototype.date = offsetResult;
  prototype.days = getSetDayOfWeek;
  prototype.day = getSetDayOfWeek;
  prototype.weekday = function getSetLocaleDayOfWeek(arg0) {
    const self = this;
    if (this.isValid()) {
      const sum = self.day() + 7;
      const result = (sum - self.localeData()._week.dow) % 7;
      let addResult = result;
      if (arg0 != null) {
        addResult = self.add(arg0 - result, "d");
      }
      return addResult;
    } else {
      let _NaN = self;
      if (arg0 == null) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.isoWeekday = function getSetISODayOfWeek(arg0) {
    const self = this;
    if (this.isValid()) {
      if (arg0 != null) {
        const tmp4 = parseIsoWeekday(arg0, self.localeData());
        let diff = tmp4;
        if (!(self.day() % 7)) {
          diff = tmp4 - 7;
        }
        return self.day(diff);
      } else {
        return self.day() || 7;
      }
    } else {
      let _NaN = self;
      if (arg0 == null) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.dayOfYear = function getSetDayOfYear(arg0) {
    const self = this;
    const cloneResult = this.clone();
    const startOfResult = this.clone().startOf("day");
    const sum = Math.round((startOfResult - this.clone().startOf("year")) / 86400000) + 1;
    let addResult = sum;
    if (arg0 != null) {
      addResult = self.add(arg0 - sum, "d");
    }
    return addResult;
  };
  prototype.hours = getSet1;
  prototype.hour = getSet1;
  prototype.minutes = offsetResult;
  prototype.minute = offsetResult;
  prototype.seconds = offsetResult;
  prototype.second = offsetResult;
  prototype.milliseconds = offsetResult;
  prototype.millisecond = offsetResult;
  prototype.utcOffset = function getSetOffset(_days) {
    const self = this;
    if (self.isValid()) {
      if (_days != null) {
        if (typeof _days === "string") {
          let result = offsetFromString(closure_15, _days);
          if (result === null) {
            return self;
          }
        } else {
          const _Math = Math;
          result = _days;
          if (Math.abs(_days) < 16) {
            result = _days;
            if (!arg2) {
              result = _days * 60;
            }
          }
        }
        let tmp10;
        if (!self._isUTC) {
          if (arg1) {
            tmp10 = getDateOffset(self);
          }
        }
        self._offset = result;
        self._isUTC = true;
        if (tmp10 != null) {
          self.add(tmp10, "m");
        }
        if (tmp !== result) {
          if (arg1) {
            if (!self._changeInProgress) {
              if (!self._changeInProgress) {
                self._changeInProgress = true;
                hooks.updateOffset(self, true);
                self._changeInProgress = null;
              }
            }
          }
          addSubtract(self, createDuration(result - tmp, "m"), 1, false);
        }
        return self;
      } else {
        let tmp3 = tmp;
        if (!self._isUTC) {
          tmp3 = getDateOffset(self);
        }
        return tmp3;
      }
    } else {
      let _NaN = self;
      if (_days == null) {
        _NaN = NaN;
      }
      return _NaN;
    }
  };
  prototype.utc = function setOffsetToUTC(arg0) {
    return this.utcOffset(0, arg0);
  };
  prototype.local = function setOffsetToLocal(arg0) {
    const self = this;
    if (this._isUTC) {
      self.utcOffset(0, arg0);
      self._isUTC = false;
      if (arg0) {
        self.subtract(getDateOffset(self), "m");
      }
    }
    return self;
  };
  prototype.parseZone = function setOffsetToParsedOffset() {
    const self = this;
    if (this._tzm != null) {
      self.utcOffset(self._tzm, false, true);
    } else if (typeof self._i === "string") {
      const tmp3 = offsetFromString(closure_14, self._i);
      if (tmp3 != null) {
        self.utcOffset(tmp3);
      } else {
        self.utcOffset(0, true);
      }
    }
    return self;
  };
  prototype.hasAlignedHourOffset = function hasAlignedHourOffset(_a) {
    const self = this;
    if (this.isValid()) {
      let num2 = 0;
      if (_a) {
        num2 = createLocal(_a).utcOffset();
        obj = createLocal(_a);
      }
      return (self.utcOffset() - num2) % 60 === 0;
    } else {
      return false;
    }
  };
  prototype.isDST = function isDaylightSavingTime() {
    const self = this;
    const utcOffsetResult = this.utcOffset();
    const cloneResult = this.clone();
    let tmp2 = utcOffsetResult > this.clone().month(0).utcOffset();
    if (!tmp2) {
      const utcOffsetResult1 = self.utcOffset();
      const cloneResult1 = self.clone();
      tmp2 = utcOffsetResult1 > self.clone().month(5).utcOffset();
      const monthResult1 = self.clone().month(5);
    }
    return tmp2;
  };
  prototype.isLocal = function isLocal() {
    let flag = false;
    if (this.isValid()) {
      flag = !this._isUTC;
    }
    return flag;
  };
  prototype.isUtcOffset = function isUtcOffset() {
    let flag = false;
    if (this.isValid()) {
      flag = this._isUTC;
    }
    return flag;
  };
  prototype.isUtc = isUtc;
  prototype.isUTC = isUtc;
  prototype.zoneAbbr = function getZoneAbbr() {
    let str = "";
    if (this._isUTC) {
      str = "UTC";
    }
    return str;
  };
  prototype.zoneName = function getZoneName() {
    let str = "";
    if (this._isUTC) {
      str = "Coordinated Universal Time";
    }
    return str;
  };
  prototype.dates = deprecate("dates accessor is deprecated. Use date instead.", offsetResult);
  prototype.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
  prototype.years = deprecate("years accessor is deprecated. Use year instead", getSet);
  prototype.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function getSetZone(str) {
    const self = this;
    if (str != null) {
      let tmp = str;
      if (typeof str !== "string") {
        tmp = -str;
      }
      self.utcOffset(tmp, arg1);
      return self;
    } else {
      return -self.utcOffset();
    }
  });
  prototype.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function isDaylightSavingTimeShifted() {
    const self = this;
    if (isUndefined(this._isDSTShifted)) {
      obj = {};
      copyConfig(obj, self);
      const tmp4 = prepareConfig(obj);
      if (tmp4._a) {
        if (tmp4._isUTC) {
          let obj2 = createUTC(tmp4._a);
        } else {
          obj2 = createLocal(tmp4._a);
        }
        let isValidResult = self.isValid();
        if (isValidResult) {
          isValidResult = compareArrays(tmp4._a, obj2.toArray()) > 0;
        }
        self._isDSTShifted = isValidResult;
      } else {
        self._isDSTShifted = false;
      }
      return self._isDSTShifted;
    } else {
      return self._isDSTShifted;
    }
  });
  let prototype2 = Locale.prototype;
  prototype2.calendar = function calendar(arg0, self, local) {
    let callResult = obj;
    if (isFunction(this._calendar[arg0] || this._calendar.sameElse)) {
      callResult = obj.call(self, local);
    }
    return callResult;
  };
  prototype2.longDateFormat = function longDateFormat(arg0) {
    const self = this;
    const str = this._longDateFormat[arg0.toUpperCase(arg0)];
    if (!this._longDateFormat[arg0]) {
      if (str) {
        const match = str.match(closure_6);
        const mapped = match.map((arr) => {
          if (arr !== "MMMM") {
            if (arr !== "MM") {
              if (arr !== "DD") {
                if (arr !== "dddd") {
                  return arr;
                }
              }
            }
          }
          return arr.slice(1);
        });
        self._longDateFormat[arg0] = mapped.join("");
        return self._longDateFormat[arg0];
      }
    }
    return this._longDateFormat[arg0];
  };
  prototype2.invalidDate = function invalidDate() {
    return this._invalidDate;
  };
  prototype2.ordinal = function ordinal(displayName) {
    return this._ordinal.replace("%d", displayName);
  };
  prototype2.preparse = preParsePostFormat;
  prototype2.postformat = preParsePostFormat;
  prototype2.relativeTime = function relativeTime(displayName, arg1, arg2, arg3) {
    if (isFunction(this._relativeTime[arg2])) {
      let strResult = str(displayName, arg1, arg2, arg3);
    } else {
      strResult = str.replace(/%d/i, displayName);
    }
    return strResult;
  };
  prototype2.pastFuture = function pastFuture(arg0, displayName) {
    let str = "past";
    if (arg0 > 0) {
      str = "future";
    }
    if (isFunction(this._relativeTime[str])) {
      let str2Result = str2(displayName);
    } else {
      str2Result = str2.replace(/%s/i, displayName);
    }
    return str2Result;
  };
  prototype2.set = function set(closure_0) {
    const self = this;
    for (const key10007 in arg0) {
      let tmp7 = key10007;
      let tmp8 = hasOwnProp;
      if (!hasOwnProp(arg0, key10007)) {
        continue;
      } else {
        let tmp = arg0[key10007];
        let tmp2 = isFunction;
        if (isFunction(tmp)) {
          self[key10007] = tmp;
          let tmp4 = tmp;
          continue;
        } else {
          self["_" + key10007] = tmp;
          let tmp3 = tmp;
          continue;
        }
        continue;
      }
      continue;
    }
    self._config = closure_0;
    const regExp = new RegExp((self._dayOfMonthOrdinalParse.source || self._ordinalParse.source) + "|" + /\d{1,2}/.source);
    self._dayOfMonthOrdinalParseLenient = regExp;
  };
  prototype2.eras = function localeEras(arg0, arg1) {
    let _eras = this._eras;
    if (!_eras) {
      _eras = getLocale("en")._eras;
    }
    for (let num = 0; num < length; num = num + 1) {
      let tmp2 = num;
      if ("string" === typeof _eras[num].since) {
        let tmp3 = hooks;
        obj = hooks(_eras[num].since);
        let startOfResult = obj.startOf("day");
        _eras[num].since = startOfResult.valueOf();
      }
      let tmp4 = typeof _eras[num].until;
      if ("undefined" === tmp4) {
        _eras[num].until = Infinity;
      } else if ("string" === tmp4) {
        let tmp5 = hooks;
        let obj3 = hooks(_eras[num].until);
        let startOfResult1 = obj3.startOf("day");
        let valueOfResult = startOfResult1.valueOf();
        _eras[num].until = valueOfResult.valueOf();
      }
    }
    return _eras;
  };
  prototype2.erasParse = function localeErasParse(str) {
    const erasResult = this.eras();
    const formatted = str.toUpperCase();
    let num = 0;
    if (0 < erasResult.length) {
      while (true) {
        str = erasResult[num].name;
        let formatted1 = str.toUpperCase();
        let str2 = erasResult[num].abbr;
        let formatted2 = str2.toUpperCase();
        let str3 = erasResult[num].narrow;
        let formatted3 = str3.toUpperCase();
        let tmp5 = num;
        if (arg2) {
          if ("N" !== arg1) {
            if ("NN" !== arg1) {
              if ("NNN" !== arg1) {
                if ("NNNN" === arg1) {
                  if (formatted1 === formatted) {
                    return erasResult[num];
                  }
                } else if ("NNNNN" === arg1) {
                  if (formatted3 === formatted) {
                    return erasResult[num];
                  }
                }
              }
            }
          }
          if (formatted2 === formatted) {
            return erasResult[num];
          }
        } else {
          items = [formatted1, formatted2, formatted3];
          if (items.indexOf(formatted) >= 0) {
            break;
          }
        }
        num = num + 1;
      }
      return erasResult[num];
    }
  };
  prototype2.erasConvertYear = function localeErasConvertYear(since) {
    let num = -1;
    if (since.since <= since.until) {
      num = 1;
    }
    if (arg1 === undefined) {
      return hooks(since.since).year();
    } else {
      return hooks(since.since).year() + (arg1 - since.offset) * num;
    }
  };
  prototype2.erasAbbrRegex = function erasAbbrRegex(arg0) {
    const self = this;
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(self);
    }
    return arg0 ? self._erasAbbrRegex : self._erasRegex;
  };
  prototype2.erasNameRegex = function erasNameRegex(arg0) {
    const self = this;
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(self);
    }
    return arg0 ? self._erasNameRegex : self._erasRegex;
  };
  prototype2.erasNarrowRegex = function erasNarrowRegex(arg0) {
    const self = this;
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(self);
    }
    return arg0 ? self._erasNarrowRegex : self._erasRegex;
  };
  prototype2.months = function localeMonths(arg0, replaced) {
    const tmp = isArray(this._months);
    const _months = this._months;
    if (arg0) {
      if (tmp) {
        let tmp3 = _months[arg0.month(arg0)];
      } else {
        let str = "standalone";
        if (obj.test(replaced)) {
          str = "format";
        }
        tmp3 = _months[str][arg0.month(arg0)];
        obj = this._months.isFormat || closure_29;
      }
      return tmp3;
    } else {
      return tmp ? _months : _months.standalone;
    }
  };
  prototype2.monthsShort = function localeMonthsShort(arg0, replaced) {
    const tmp = isArray(this._monthsShort);
    const _monthsShort = this._monthsShort;
    if (arg0) {
      if (tmp) {
        let tmp4 = _monthsShort[arg0.month(arg0)];
      } else {
        let str = "standalone";
        if (regex2.test(replaced)) {
          str = "format";
        }
        tmp4 = _monthsShort[str][arg0.month(arg0)];
      }
      return tmp4;
    } else {
      return tmp ? _monthsShort : _monthsShort.standalone;
    }
  };
  prototype2.monthsParse = function localeMonthsParse(key10018, channels, arr2) {
    const self = this;
    if (this._monthsParseExact) {
      return handleStrictParse.call(self, key10018, channels, arr2);
    } else {
      let num = 0;
      if (!self._monthsParse) {
        self._monthsParse = [];
        self._longMonthsParse = [];
        self._shortMonthsParse = [];
        num = 0;
      }
      while (true) {
        let tmp = createUTC;
        items = [2000, num];
        let tmp2 = createUTC(items);
        let tmp3 = num;
        if (arr2) {
          if (!self._longMonthsParse[num]) {
            let tmp4 = globalThis;
            let _RegExp = RegExp;
            let str = "";
            let str2 = self.months(tmp2, "");
            let str3 = ".";
            let str4 = "^";
            let tmp5 = new.target;
            let str5 = "$";
            let str6 = "i";
            let tmp6 = new.target;
            let str7 = "i";
            let regExp = new RegExp("^" + str2.replace(".", "") + "$", "i");
            let tmp8 = regExp;
            self._longMonthsParse[num] = regExp;
            let _RegExp2 = RegExp;
            let str8 = self.monthsShort(tmp2, "");
            let tmp9 = new.target;
            let tmp10 = new.target;
            let str9 = "i";
            let regExp1 = new RegExp("^" + str8.replace(".", "") + "$", "i");
            let tmp12 = regExp1;
            self._shortMonthsParse[num] = regExp1;
          }
        }
        if (!arr2) {
          if (!self._monthsParse[num]) {
            let str10 = "";
            let str11 = "^";
            let text = `^${self.months(tmp2, "")}`;
            let str12 = "|^";
            let str13 = `${`^${self.months(tmp2, "")}`}|^${self.monthsShort(tmp2, "")}`;
            let tmp14 = globalThis;
            let _RegExp3 = RegExp;
            let str14 = ".";
            let tmp15 = new.target;
            let str15 = "i";
            let tmp16 = new.target;
            let regExp2 = new RegExp(str13.replace(".", ""), "i");
            let tmp18 = regExp2;
            self._monthsParse[num] = regExp2;
          }
        }
        if (arr2) {
          let str16 = "MMMM";
          if (channels === "MMMM") {
            obj = self._longMonthsParse[num];
            if (obj.test(key10018)) {
              break;
            }
          }
        }
        if (arr2) {
          let str17 = "MMM";
          if (channels === "MMM") {
            let obj2 = self._shortMonthsParse[num];
            if (obj2.test(key10018)) {
              return num;
            }
          }
        }
        if (!arr2) {
          let obj3 = self._monthsParse[num];
          if (obj3.test(key10018)) {
            return num;
          }
        }
        num = num + 1;
        let num2 = 12;
      }
      return num;
    }
  };
  prototype2.monthsRegex = function monthsRegex(arg0) {
    const self = this;
    const tmp = hasOwnProp(this, "_monthsRegex");
    if (this._monthsParseExact) {
      if (!tmp) {
        computeMonthsParse.call(self);
      }
      return arg0 ? self._monthsStrictRegex : self._monthsRegex;
    } else {
      if (!tmp) {
        self._monthsRegex = closure_31;
      }
      if (self._monthsStrictRegex) {
        if (arg0) {
          let _monthsRegex = self._monthsStrictRegex;
        }
        return _monthsRegex;
      }
      _monthsRegex = self._monthsRegex;
    }
  };
  prototype2.monthsShortRegex = function monthsShortRegex(arg0) {
    const self = this;
    if (this._monthsParseExact) {
      if (!tmp(self, "_monthsRegex")) {
        computeMonthsParse.call(self);
      }
      return arg0 ? self._monthsShortStrictRegex : self._monthsShortRegex;
    } else {
      if (!tmp(self, "_monthsShortRegex")) {
        self._monthsShortRegex = closure_30;
      }
      if (self._monthsShortStrictRegex) {
        if (arg0) {
          let _monthsShortRegex = self._monthsShortStrictRegex;
        }
        return _monthsShortRegex;
      }
      _monthsShortRegex = self._monthsShortRegex;
    }
  };
  prototype2.week = function localeWeek(local) {
    return weekOfYear(local, this._week.dow, this._week.doy).week;
  };
  prototype2.firstDayOfYear = function localeFirstDayOfYear() {
    return this._week.doy;
  };
  prototype2.firstDayOfWeek = function localeFirstDayOfWeek() {
    return this._week.dow;
  };
  prototype2.weekdays = function localeWeekdays(arg0, replaced) {
    const self = this;
    const _weekdays = this._weekdays;
    if (isArray(this._weekdays)) {
      let tmp2 = _weekdays;
    } else {
      let str2 = "standalone";
      if (arg0) {
        str2 = "standalone";
        if (arg0 !== true) {
          const isFormat = self._weekdays.isFormat;
          str2 = "standalone";
          if (isFormat.test(replaced)) {
            str2 = "format";
          }
        }
      }
      tmp2 = _weekdays[str2];
    }
    if (arg0 === true) {
      let tmp3 = shiftWeekdays(tmp2, self._week.dow);
    } else {
      tmp3 = tmp2;
      if (arg0) {
        tmp3 = tmp2[arg0.day(arg0)];
      }
    }
    return tmp3;
  };
  prototype2.weekdaysMin = function localeWeekdaysMin(arg0) {
    const self = this;
    if (arg0 === true) {
      let tmp = shiftWeekdays(self._weekdaysMin, self._week.dow);
    } else {
      const _weekdaysMin = self._weekdaysMin;
      if (arg0) {
        tmp = _weekdaysMin[arg0.day(arg0)];
      } else {
        tmp = _weekdaysMin;
      }
    }
    return tmp;
  };
  prototype2.weekdaysShort = function localeWeekdaysShort(arg0) {
    const self = this;
    if (arg0 === true) {
      let tmp = shiftWeekdays(self._weekdaysShort, self._week.dow);
    } else {
      const _weekdaysShort = self._weekdaysShort;
      if (arg0) {
        tmp = _weekdaysShort[arg0.day(arg0)];
      } else {
        tmp = _weekdaysShort;
      }
    }
    return tmp;
  };
  prototype2.weekdaysParse = function localeWeekdaysParse(key10018, channels, arr2) {
    const self = this;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(self, key10018, channels, arr2);
    } else {
      let num = 0;
      if (!self._weekdaysParse) {
        self._weekdaysParse = [];
        self._minWeekdaysParse = [];
        self._shortWeekdaysParse = [];
        self._fullWeekdaysParse = [];
        num = 0;
      }
      while (true) {
        let tmp = createUTC;
        obj = createUTC([2000, 1]);
        let dayResult = obj.day(num);
        let tmp3 = num;
        if (arr2) {
          if (!self._fullWeekdaysParse[num]) {
            let tmp4 = globalThis;
            let _RegExp = RegExp;
            let str = "";
            let str2 = self.weekdays(dayResult, "");
            let str3 = ".";
            let str4 = "\\.?";
            let str5 = "^";
            let tmp5 = new.target;
            let str6 = "$";
            let str7 = "i";
            let tmp6 = new.target;
            let str8 = "i";
            let regExp = new RegExp("^" + str2.replace(".", "\\.?") + "$", "i");
            let tmp8 = regExp;
            self._fullWeekdaysParse[num] = regExp;
            let _RegExp2 = RegExp;
            let str9 = self.weekdaysShort(dayResult, "");
            let tmp9 = new.target;
            let tmp10 = new.target;
            let str10 = "i";
            let regExp1 = new RegExp("^" + str9.replace(".", "\\.?") + "$", "i");
            let tmp12 = regExp1;
            self._shortWeekdaysParse[num] = regExp1;
            let _RegExp3 = RegExp;
            let str11 = self.weekdaysMin(dayResult, "");
            let tmp13 = new.target;
            let tmp14 = new.target;
            let str12 = "i";
            let regExp2 = new RegExp("^" + str11.replace(".", "\\.?") + "$", "i");
            let tmp16 = regExp2;
            self._minWeekdaysParse[num] = regExp2;
          }
        }
        if (!self._weekdaysParse[num]) {
          let str13 = "";
          let str14 = "^";
          let text = `^${self.weekdays(tmp2, "")}`;
          let str15 = "|^";
          let text1 = `${`^${self.weekdays(tmp2, "")}`}|^${self.weekdaysShort(tmp2, "")}`;
          let str16 = `${tmp18}|^${self.weekdaysMin(tmp2, "")}`;
          let tmp19 = globalThis;
          let _RegExp4 = RegExp;
          let str17 = ".";
          let tmp20 = new.target;
          let str18 = "i";
          let tmp21 = new.target;
          let regExp3 = new RegExp(str16.replace(".", ""), "i");
          let tmp23 = regExp3;
          self._weekdaysParse[num] = regExp3;
        }
        if (arr2) {
          let str19 = "dddd";
          if (channels === "dddd") {
            let obj2 = self._fullWeekdaysParse[num];
            if (obj2.test(key10018)) {
              break;
            }
          }
        }
        if (arr2) {
          let str20 = "ddd";
          if (channels === "ddd") {
            let obj3 = self._shortWeekdaysParse[num];
            if (obj3.test(key10018)) {
              return num;
            }
          }
        }
        if (arr2) {
          let str21 = "dd";
          if (channels === "dd") {
            let obj4 = self._minWeekdaysParse[num];
            if (obj4.test(key10018)) {
              return num;
            }
          }
        }
        if (!arr2) {
          let obj5 = self._weekdaysParse[num];
          if (obj5.test(key10018)) {
            return num;
          }
        }
        num = num + 1;
        let num2 = 7;
      }
      return num;
    }
  };
  prototype2.weekdaysRegex = function weekdaysRegex(arg0) {
    const self = this;
    const tmp = hasOwnProp(this, "_weekdaysRegex");
    if (this._weekdaysParseExact) {
      if (!tmp) {
        computeWeekdaysParse.call(self);
      }
      return arg0 ? self._weekdaysStrictRegex : self._weekdaysRegex;
    } else {
      if (!tmp) {
        self._weekdaysRegex = closure_33;
      }
      if (self._weekdaysStrictRegex) {
        if (arg0) {
          let _weekdaysRegex = self._weekdaysStrictRegex;
        }
        return _weekdaysRegex;
      }
      _weekdaysRegex = self._weekdaysRegex;
    }
  };
  prototype2.weekdaysShortRegex = function weekdaysShortRegex(arg0) {
    const self = this;
    if (this._weekdaysParseExact) {
      if (!tmp(self, "_weekdaysRegex")) {
        computeWeekdaysParse.call(self);
      }
      return arg0 ? self._weekdaysShortStrictRegex : self._weekdaysShortRegex;
    } else {
      if (!tmp(self, "_weekdaysShortRegex")) {
        self._weekdaysShortRegex = closure_34;
      }
      if (self._weekdaysShortStrictRegex) {
        if (arg0) {
          let _weekdaysShortRegex = self._weekdaysShortStrictRegex;
        }
        return _weekdaysShortRegex;
      }
      _weekdaysShortRegex = self._weekdaysShortRegex;
    }
  };
  prototype2.weekdaysMinRegex = function weekdaysMinRegex(arg0) {
    const self = this;
    if (this._weekdaysParseExact) {
      if (!tmp(self, "_weekdaysRegex")) {
        computeWeekdaysParse.call(self);
      }
      return arg0 ? self._weekdaysMinStrictRegex : self._weekdaysMinRegex;
    } else {
      if (!tmp(self, "_weekdaysMinRegex")) {
        self._weekdaysMinRegex = closure_35;
      }
      if (self._weekdaysMinStrictRegex) {
        if (arg0) {
          let _weekdaysMinRegex = self._weekdaysMinStrictRegex;
        }
        return _weekdaysMinRegex;
      }
      _weekdaysMinRegex = self._weekdaysMinRegex;
    }
  };
  prototype2.isPM = function localeIsPM(arg0) {
    return `${arg0}`.toLowerCase().charAt(0) === "p";
  };
  prototype2.meridiem = function localeMeridiem(arg0, arg1, arg2) {
    if (arg0 > 11) {
      let str2 = "PM";
      if (arg2) {
        str2 = "pm";
      }
      return str2;
    } else {
      let str = "AM";
      if (arg2) {
        str = "am";
      }
      return str;
    }
  };
  obj = {
    eras: items25,
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal(arg0) {
      const result = arg0 % 10;
      let str = "th";
      let str2 = "th";
      if (toInt(arg0 % 100 / 10) !== 1) {
        let str3 = "st";
        if (result !== 1) {
          let str4 = "nd";
          if (result !== 2) {
            if (result === 3) {
              str = "rd";
            }
            str4 = str;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      return arg0 + str2;
    }
  };
  items25 = [{ since: "0001-01-01", until: Infinity, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -Infinity, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }];
  offsetResult = getSetGlobalLocale("en", obj);
  hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
  hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
  offsetResult = makeAs("ms");
  offsetResult = makeAs("s");
  offsetResult = makeAs("m");
  offsetResult = makeAs("h");
  offsetResult = makeAs("d");
  offsetResult = makeAs("w");
  offsetResult = makeAs("M");
  offsetResult = makeAs("Q");
  offsetResult = makeAs("y");
  offsetResult = makeGetter("milliseconds");
  offsetResult = makeGetter("seconds");
  offsetResult = makeGetter("minutes");
  offsetResult = makeGetter("hours");
  offsetResult = makeGetter("days");
  offsetResult = makeGetter("months");
  closure_58 = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  abs = Math.abs;
  let prototype3 = Duration.prototype;
  prototype3.isValid = function isValid$1() {
    return this._isValid;
  };
  prototype3.abs = function abs(_days) {
    const _data = this._data;
    this._milliseconds = abs(this._milliseconds);
    this._days = abs(this._days);
    this._months = abs(this._months);
    _data.milliseconds = abs(_data.milliseconds);
    _data.seconds = abs(_data.seconds);
    _data.minutes = abs(_data.minutes);
    _data.hours = abs(_data.hours);
    _data.months = abs(_data.months);
    _data.years = abs(_data.years);
    return this;
  };
  prototype3.add = function add$1(self, m) {
    return addSubtract$1(this, self, m, 1);
  };
  prototype3.subtract = function subtract$1(self, m) {
    return addSubtract$1(this, self, m, -1);
  };
  prototype3.as = function as(key10006) {
    const self = this;
    if (this.isValid()) {
      const _milliseconds = self._milliseconds;
      const tmp4 = normalizeUnits(key10006);
      if (tmp4 !== "month") {
        if (tmp4 !== "quarter") {
          if (tmp4 !== "year") {
            const _Math2 = Math;
            const sum = self._days + Math.round(monthsToDays(self._months));
            if ("week" === tmp4) {
              return sum / 7 + _milliseconds / 604800000;
            } else if ("day" === tmp4) {
              return sum + _milliseconds / 86400000;
            } else if ("hour" === tmp4) {
              return sum * 24 + _milliseconds / 3600000;
            } else if ("minute" === tmp4) {
              return sum * 1440 + _milliseconds / 60000;
            } else if ("second" === tmp4) {
              return sum * 86400 + _milliseconds / 1000;
            } else if ("millisecond" === tmp4) {
              const _Math = Math;
              return Math.floor(sum * 86400000) + _milliseconds;
            } else {
              const _Error = Error;
              const error = new Error("Unknown unit " + tmp4);
              throw error;
            }
          }
        }
      }
      const sum1 = self._months + daysToMonths(self._days + _milliseconds / 86400000);
      if ("month" === tmp4) {
        return sum1;
      } else if ("quarter" === tmp4) {
        return sum1 / 3;
      } else if ("year" === tmp4) {
        return sum1 / 12;
      }
    } else {
      const _NaN = NaN;
      return NaN;
    }
  };
  prototype3.asMilliseconds = offsetResult;
  prototype3.asSeconds = offsetResult;
  prototype3.asMinutes = offsetResult;
  prototype3.asHours = offsetResult;
  prototype3.asDays = offsetResult;
  prototype3.asWeeks = offsetResult;
  prototype3.asMonths = offsetResult;
  prototype3.asQuarters = offsetResult;
  prototype3.asYears = offsetResult;
  prototype3.valueOf = offsetResult;
  prototype3._bubble = function bubble() {
    ({ _milliseconds, _days, _months, _data } = this);
    if (_milliseconds >= 0) {
      if (_days >= 0) {
        let sum2 = _milliseconds;
        let num = _days;
        let num2 = _months;
      }
      _data.milliseconds = sum2 % 1000;
      const tmp4 = absFloor(sum2 / 1000);
      _data.seconds = tmp4 % 60;
      const tmp5 = absFloor(tmp4 / 60);
      _data.minutes = tmp5 % 60;
      const tmp6 = absFloor(tmp5 / 60);
      _data.hours = tmp6 % 24;
      const sum = num + absFloor(tmp6 / 24);
      const tmp9 = absFloor(daysToMonths(sum));
      const sum1 = num2 + tmp9;
      const diff = sum - absCeil(monthsToDays(tmp9));
      _data.days = diff;
      _data.months = sum1 % 12;
      _data.years = absFloor(sum1 / 12);
      return tmp;
    }
    if (_milliseconds <= 0) {
      if (_days <= 0) {
        sum2 = _milliseconds;
        num = _days;
        num2 = _months;
      }
    }
    sum2 = _milliseconds + absCeil(monthsToDays(_months) + _days) * 86400000;
    num = 0;
    num2 = 0;
  };
  prototype3.clone = function clone$1() {
    return createDuration(this);
  };
  prototype3.get = function get$2(key10006) {
    const self = this;
    if (this.isValid()) {
      let _NaN = self[tmp + "s"]();
    } else {
      _NaN = NaN;
    }
    return _NaN;
  };
  prototype3.milliseconds = offsetResult;
  prototype3.seconds = offsetResult;
  prototype3.minutes = offsetResult;
  prototype3.hours = offsetResult;
  prototype3.days = offsetResult;
  prototype3.weeks = function weeks() {
    return absFloor(this.days() / 7);
  };
  prototype3.months = offsetResult;
  prototype3.years = makeGetter("years");
  prototype3.humanize = function humanize(obj) {
    let tmp = arg1;
    const self = this;
    if (this.isValid()) {
      let tmp2 = closure_58;
      let flag = obj;
      if (typeof obj === "object") {
        flag = false;
        tmp = obj;
      }
      let flag2 = false;
      if (typeof flag === "boolean") {
        flag2 = flag;
      }
      if (typeof tmp === "object") {
        const _Object = Object;
        const merged = Object.assign({}, closure_58, tmp);
        tmp2 = merged;
        if (tmp.s != null) {
          tmp2 = merged;
          if (tmp.ss == null) {
            merged.ss = tmp.s - 1;
            tmp2 = merged;
          }
        }
      }
      const localeDataResult = self.localeData();
      const tmp11 = relativeTime$1(self, !flag2, tmp2, localeDataResult);
      let pastFutureResult = tmp11;
      if (flag2) {
        pastFutureResult = localeDataResult.pastFuture(+self, tmp11);
      }
      return localeDataResult.postformat(pastFutureResult);
    } else {
      return self.localeData().invalidDate();
    }
  };
  prototype3.toISOString = toISOString$1;
  prototype3.toString = toISOString$1;
  prototype3.toJSON = toISOString$1;
  prototype3.locale = locale;
  prototype3.localeData = localeData;
  prototype3.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
  prototype3.lang = offsetResult;
  offsetResult = addFormatToken("X", 0, 0, "unix");
  offsetResult = addFormatToken("x", 0, 0, "valueOf");
  offsetResult = addRegexToken("x", tmp13);
  offsetResult = addRegexToken("X", /[+-]?\d+(\.\d{1,3})?/);
  offsetResult = addParseToken("X", (arg0, arg1, arg2) => {
    arg2._d = new Date(parseFloat(arg0) * 1000);
  });
  offsetResult = addParseToken("x", (bound) => {
    arg2._d = new Date(toInt(bound));
  });
  hooks.version = "2.30.1";
  hooks.fn = prototype;
  hooks.utc = createUTC;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.defineLocale = defineLocale;
  hooks.normalizeUnits = normalizeUnits;
  hooks.prototype = prototype;
  hooks.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" };
  return hooks;
};
if (typeof exports === "object") {
  if (typeof module !== "undefined") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
this.moment = fn();
