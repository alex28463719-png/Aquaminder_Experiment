// Module ID: 583
// Function ID: 6348
// Name: encoderForArrayFormat
// Dependencies: [99, 38, 6, 584, 585, 586, 587]
// Exports: exclude, parseUrl, pick, stringify, stringifyUrl

// Module 583 (encoderForArrayFormat)
import _mod584 from "module_584" /* 584 */;
import decodeComponents from "decodeComponents" /* 585 */;
import _mod586 from "module_586" /* 586 */;
import _mod587 from "module_587" /* 587 */;
import closure_3 from "_defineProperty" /* 99 */;
import closure_4 from "_slicedToArray" /* 38 */;
import closure_5 from "_toConsumableArray" /* 6 */;

function encoderForArrayFormat(merged) {
  closure_0 = merged;
  const arrayFormat = merged.arrayFormat;
  if ("index" === arrayFormat) {
    return (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        if (arg1 !== undefined) {
          if (!closure_0.skipNull) {
            if (arg1 === null) {
              const items = [];
              const items1 = [closure_2_11(closure_0, closure_0), "[", length, "]"];
              const items2 = [items1.join("")];
              return items.concat(closure_2_5(arg0), items2);
            } else {
              const items3 = [];
              const items4 = [closure_2_11(closure_0, closure_0), "[", closure_2_11(length, closure_0), "]=", closure_2_11(arg1, closure_0)];
              const items5 = [items4.join("")];
              return items3.concat(closure_2_5(arg0), items5);
            }
          }
        }
        return arg0;
      };
    };
  } else if ("bracket" === arrayFormat) {
    return (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        if (arg1 !== undefined) {
          if (!closure_0.skipNull) {
            if (arg1 === null) {
              const items = [];
              const items1 = [closure_2_11(closure_0, closure_0), "[]"];
              const items2 = [items1.join("")];
              return items.concat(closure_2_5(arg0), items2);
            } else {
              const items3 = [];
              const items4 = [closure_2_11(closure_0, closure_0), "[]=", closure_2_11(arg1, closure_0)];
              const items5 = [items4.join("")];
              return items3.concat(closure_2_5(arg0), items5);
            }
          }
        }
        return arg0;
      };
    };
  } else if ("colon-list-separator" === arrayFormat) {
    return (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        if (arg1 !== undefined) {
          if (!closure_0.skipNull) {
            if (arg1 === null) {
              const items = [];
              const items1 = [closure_2_11(closure_0, closure_0), ":list="];
              const items2 = [items1.join("")];
              return items.concat(closure_2_5(arg0), items2);
            } else {
              const items3 = [];
              const items4 = [closure_2_11(closure_0, closure_0), ":list=", closure_2_11(arg1, closure_0)];
              const items5 = [items4.join("")];
              return items3.concat(closure_2_5(arg0), items5);
            }
          }
        }
        return arg0;
      };
    };
  } else {
    if ("comma" !== arrayFormat) {
      if ("separator" !== arrayFormat) {
        if ("bracket-separator" !== arrayFormat) {
          return (arg0) => {
            closure_0 = arg0;
            return (arg0, arg1) => {
              if (arg1 !== undefined) {
                if (!closure_0.skipNull) {
                  if (arg1 === null) {
                    const items = [];
                    const items1 = [closure_2_11(closure_0, closure_0)];
                    return items.concat(closure_2_5(arg0), items1);
                  } else {
                    const items2 = [];
                    const items3 = [closure_2_11(closure_0, closure_0), "=", closure_2_11(arg1, closure_0)];
                    const items4 = [items3.join("")];
                    return items2.concat(closure_2_5(arg0), items4);
                  }
                }
              }
              return arg0;
            };
          };
        }
      }
    }
    let str6 = "=";
    if (merged.arrayFormat === "bracket-separator") {
      str6 = "[]=";
    }
    return (arg0) => {
      closure_0 = arg0;
      return (arg0, arg1) => {
        if (arg1 !== undefined) {
          if (!closure_0.skipNull) {
            let str3 = "";
            if (arg1 !== null) {
              str3 = arg1;
            }
            if (arg0.length === 0) {
              const items = [closure_2_11(closure_0, closure_0), closure_1_1, closure_2_11(str3, closure_0)];
              const items1 = [items.join("")];
              return items1;
            } else {
              const items2 = [arg0, closure_2_11(str3, closure_0)];
              const items3 = [items2.join(closure_0.arrayFormatSeparator)];
              return items3;
            }
          }
        }
        return arg0;
      };
    };
  }
}
function parserForArrayFormat(merged) {
  closure_0 = merged;
  const arrayFormat = merged.arrayFormat;
  if ("index" === arrayFormat) {
    return (str) => {
      const table = /\[(\d*)\]$/.exec(str);
      const replaced = str.replace(/\[\d*\]$/, "");
      if (table) {
        if (arg2[replaced] === undefined) {
          arg2[replaced] = {};
        }
        arg2[replaced][table[1]] = arg1;
      } else {
        arg2[replaced] = arg1;
      }
      const obj = /\[(\d*)\]$/;
    };
  } else if ("bracket" === arrayFormat) {
    return (str) => {
      closure_1 = /(\[\])$/.exec(str);
      const replaced = str.replace(/\[\]$/, "");
      if (closure_1) {
        if (arg2[replaced] === undefined) {
          const items = [arg1];
          arg2[replaced] = items;
        } else {
          const items1 = [];
          arg2[replaced] = items1.concat(arg2[replaced], arg1);
        }
      } else {
        arg2[replaced] = arg1;
      }
      const obj = /(\[\])$/;
    };
  } else if ("colon-list-separator" === arrayFormat) {
    return (str) => {
      closure_1 = /(:list)$/.exec(str);
      const replaced = str.replace(/:list$/, "");
      if (closure_1) {
        if (arg2[replaced] === undefined) {
          const items = [arg1];
          arg2[replaced] = items;
        } else {
          const items1 = [];
          arg2[replaced] = items1.concat(arg2[replaced], arg1);
        }
      } else {
        arg2[replaced] = arg1;
      }
      const obj = /(:list)$/;
    };
  } else {
    if ("comma" !== arrayFormat) {
      if ("separator" !== arrayFormat) {
        return "bracket-separator" === arrayFormat ? ((replaced, str) => {
          const isMatch = /(\[\])$/.test(replaced);
          replaced = replaced.replace(/\[\]$/, "");
          if (isMatch) {
            if (str === null) {
              let items = [];
            } else {
              const parts = str.split(merged.arrayFormatSeparator);
              items = parts.map((arg0) => closure_2_12(arg0, closure_1_0));
            }
            if (arg2[replaced] === undefined) {
              arg2[replaced] = items;
            } else {
              const items1 = [];
              arg2[replaced] = items1.concat(arg2[replaced], items);
            }
          } else {
            let tmp3 = str;
            if (str) {
              tmp3 = closure_1_12(str, merged);
            }
            arg2[replaced] = tmp3;
          }
          const obj = /(\[\])$/;
        }) : ((arg0, arg1, arg2) => {
          if (arg2[arg0] === undefined) {
            arg2[arg0] = arg1;
          } else {
            const items = [];
            arg2[arg0] = items.concat(arg2[arg0], arg1);
          }
        });
      }
    }
    return (arg0, str) => {
      let hasItem1 = typeof str === "string";
      let hasItem = hasItem1;
      if (hasItem1) {
        hasItem = str.includes(merged.arrayFormatSeparator);
      }
      if (hasItem1) {
        hasItem1 = !hasItem;
      }
      if (hasItem1) {
        hasItem1 = closure_1_12(str, merged).includes(merged.arrayFormatSeparator);
        const obj = closure_1_12(str, merged);
      }
      if (hasItem1) {
        str = closure_1_12(str, merged);
      }
      if (!hasItem) {
        if (!hasItem1) {
          let mapped = str;
          if (str !== null) {
            mapped = closure_1_12(str, merged);
          }
        }
        arg2[arg0] = mapped;
      }
      const parts = str.split(merged.arrayFormatSeparator);
      mapped = parts.map((arg0) => closure_2_12(arg0, closure_1_0));
    };
  }
}
function validateArrayFormatSeparator(arrayFormatSeparator) {
  const typeError = new TypeError("arrayFormatSeparator must be single character string");
  throw typeError;
}
function encode(arg0, encode) {
  if (encode.encode) {
    if (encode.strict) {
      let encodeURIComponentResult = _mod584(arg0);
    } else {
      const _encodeURIComponent = encodeURIComponent;
      encodeURIComponentResult = encodeURIComponent(arg0);
    }
    return encodeURIComponentResult;
  } else {
    return arg0;
  }
}
function decode(arg0, decode) {
  if (decode.decode) {
    return decodeComponents(arg0);
  } else {
    return arg0;
  }
}
function keysSorter(arr) {
  closure_0 = arr;
  if (Array.isArray(arr)) {
    return arr.sort();
  } else if (typeof arr === "object") {
    const _Object = Object;
    const sorted = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
    return sorted.map((arg0) => arr[arg0]);
  } else {
    return arr;
  }
}
function removeHash(url) {
  const index = url.indexOf("#");
  let substr = url;
  if (index !== -1) {
    substr = url.slice(0, index);
  }
  return substr;
}
function getHash(arr) {
  const index = arr.indexOf("#");
  let str = "";
  if (index !== -1) {
    str = arr.slice(index);
  }
  return str;
}
function extract(url) {
  const arr = removeHash(url);
  const index = arr.indexOf("?");
  if (index === -1) {
    return "";
  } else {
    return arr.slice(index + 1);
  }
}
function parseValue(str, parseNumbers) {
  if (parseNumbers.parseNumbers) {
    const _Number = Number;
    const _Number2 = Number;
    if (!Number.isNaN(Number(str))) {
      if (typeof str === "string") {
        if (str.trim() !== "") {
          const _Number3 = Number;
          let NumberResult = Number(str);
        }
        return NumberResult;
      }
    }
  }
  NumberResult = str;
  if (parseNumbers.parseBooleans) {
    NumberResult = str;
    if (str !== null) {
      if (str.toLowerCase() === "true") {
        NumberResult = str.toLowerCase() === "true";
      } else {
        NumberResult = str;
      }
    }
  }
}
function parse(str) {
  const merged = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, arg1);
  validateArrayFormatSeparator(merged.arrayFormatSeparator);
  const tmp4 = parserForArrayFormat(merged);
  const obj = Object.create(null);
  if (typeof str !== "string") {
    return obj;
  } else {
    const str8 = str.trim().replace(/^[?#&]/, "");
    if (str8) {
      const parts = str8.split("&");
      const iter = parts[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let str4 = nextResult;
        if (nextResult === "") {
          continue;
        } else {
          let tmp58 = obj;
          let tmp59 = dependencyMap;
          let tmp61 = merged;
          let tmp62 = nextResult;
          let tmp60 = obj(586);
          if (tmp2.decode) {
            let replaced = str4.replace(/\+/g, " ");
          } else {
            replaced = str4;
          }
          let tmp13 = callback2;
          let tmp14 = callback2(tmp60(replaced, "="), 2);
          [tmp15, tmp16] = tmp14;
          let tmp18 = null;
          if (tmp16 === undefined) {
            let tmp25 = null;
            let tmp26 = tmp4;
            let tmp27 = decode;
            let tmp28 = tmp15;
            let tmp29 = merged;
            let tmp30 = obj;
            let tmp4Result = tmp4(decode(tmp15, tmp2), null, tmp6);
            continue;
          } else {
            let items = ["comma", "separator", "bracket-separator"];
            let tmp19 = merged;
            if (items.includes(tmp2.arrayFormat)) {
              let tmp23 = tmp16;
            } else {
              let tmp20 = decode;
              let tmp21 = tmp16;
              let tmp22 = merged;
              tmp23 = decode(tmp17, tmp2);
            }
            let tmp24 = tmp23;
          }
        }
        continue;
      }
      const _Object = Object;
      const keys = Object.keys(tmp6);
      const iter2 = keys[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp38 = obj;
        let tmp39 = tmp6[nextResult1];
        let tmp40 = tmp39;
        let tmp37 = nextResult1;
        if (typeof tmp39 === "object") {
          let tmp41 = tmp39;
          if (tmp40 !== null) {
            let _Object2 = Object;
            let tmp47 = tmp39;
            let keys1 = Object.keys(tmp40);
            let tmp49 = keys1;
            for (const item10102 of keys1) {
              let tmp50 = tmp39;
              let tmp51 = parseValue;
              let tmp52 = merged;
              tmp40[item10102] = parseValue(tmp40[item10102], tmp2);
              continue;
            }
            continue;
          }
        }
        let tmp42 = obj;
        let tmp43 = nextResult1;
        let tmp44 = parseValue;
        let tmp45 = tmp39;
        let tmp46 = merged;
        tmp6[tmp37] = parseValue(tmp40, tmp2);
      }
      if (tmp2.sort === false) {
        return tmp6;
      } else {
        if (tmp2.sort === true) {
          const _Object4 = Object;
          const keys2 = Object.keys(tmp6);
          let sorted = keys2.sort();
        } else {
          const _Object3 = Object;
          const keys3 = Object.keys(tmp6);
          sorted = keys3.sort(merged.sort);
        }
        const _Object5 = Object;
        return sorted.reduce((arg0, arg1) => {
          if (Boolean(obj[arg1])) {
            if (typeof tmp === "object") {
              const _Array = Array;
              if (!Array.isArray(tmp)) {
                arg0[arg1] = closure_1_13(tmp);
              }
              return arg0;
            }
          }
          arg0[arg1] = obj[arg1];
        }, Object.create(null));
      }
    } else {
      return tmp6;
    }
    const str6 = str.trim();
  }
}
function isNullOrUndefined(arg0) {
  let tmp = arg0 === null;
  if (!tmp) {
    tmp = arg0 === undefined;
  }
  return tmp;
}
let closure_7 = Symbol("encodeFragmentIdentifier");

export { extract };
export { parse };
export (arg0, merged) => {
  closure_0 = arg0;
  if (arg0) {
    const _Object = Object;
    merged = Object.assign({ encode: true, strict: true, arrayFormat: "none", arrayFormatSeparator: "," }, merged);
    validateArrayFormatSeparator(merged.arrayFormatSeparator);
    function shouldFilter(item10026) {
      let skipNull = merged.skipNull;
      if (skipNull) {
        skipNull = closure_1_6(dependencyMap[item10026]);
      }
      if (!skipNull) {
        let skipEmptyString = merged.skipEmptyString;
        if (skipEmptyString) {
          skipEmptyString = dependencyMap[item10026] === "";
        }
        skipNull = skipEmptyString;
      }
      return skipNull;
    }
    closure_2 = encoderForArrayFormat(merged);
    const obj = {};
    const _Object2 = Object;
    const keys = Object.keys(arg0);
    for (const item10026 of keys) {
      let tmp9 = item10026;
      let tmp10 = shouldFilter;
      if (!shouldFilter(item10026)) {
        let tmp11 = obj;
        let tmp12 = item10026;
        let tmp13 = arg0;
        obj[tmp9] = arg0[tmp9];
      }
      continue;
    }
    const _Object3 = Object;
    const keys1 = Object.keys(obj);
    if (merged.sort !== false) {
      const sorted = keys1.sort(merged.sort);
    }
    const mapped = keys1.map((arg0) => {
      if (dependencyMap[arg0] === undefined) {
        return "";
      } else if (arr === null) {
        return closure_1_11(arg0, merged);
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          if (arr.length === 0) {
            if (merged.arrayFormat === "bracket-separator") {
              return closure_1_11(arg0, merged) + "[]";
            }
          }
          const reduced = arr.reduce(callback(arg0), []);
          return reduced.join("&");
        } else {
          const text = `${closure_1_11(arg0, merged)}=`;
          return `${closure_1_11(arg0, merged)}=` + closure_1_11(arr, merged);
        }
      }
    });
    const found = mapped.filter((arg0) => arg0.length > 0);
    return found.join("&");
  } else {
    return "";
  }
}
export (arg0, arg1) => {
  const merged = Object.assign({ decode: true }, arg1);
  const tmp2 = callback2(_mod586(arg0, "#"), 2);
  let obj = { url: tmp2[0].split("?")[0] || "", query: parse(extract(arg0), merged) };
  if (merged) {
    if (merged.parseFragmentIdentifier) {
      if (tmp3) {
        obj = { fragmentIdentifier: decode(tmp3, merged) };
      }
      return Object.assign(obj, {});
    }
  }
}
export (url) => {
  let str = url;
  const merged = Object.assign(callback({ encode: true, strict: true }, closure_7, true), arg1);
  const str2 = removeHash(url.url);
  const json = exports.stringify(Object.assign(exports.parse(exports.extract(str.url), { sort: false }), str.query), merged);
  let combined = json;
  if (json) {
    const _HermesInternal = HermesInternal;
    combined = "?" + json;
  }
  if (!str.fragmentIdentifier) {
    const _HermesInternal3 = HermesInternal;
    return "" + tmp2 + combined + tmp5;
  } else {
    if (merged[closure_7]) {
      let fragmentIdentifier = encode(str.fragmentIdentifier, merged);
    } else {
      fragmentIdentifier = str.fragmentIdentifier;
    }
    const _HermesInternal2 = HermesInternal;
    str = "#";
    const combined1 = "#" + fragmentIdentifier;
  }
}
export (arg0, arg1, arg2) => {
  const merged = Object.assign(callback({ parseFragmentIdentifier: true }, closure_7, false), arg2);
  const parseUrlResult = exports.parseUrl(arg0, merged);
  ({ query, fragmentIdentifier } = parseUrlResult);
  return exports.stringifyUrl({ url: parseUrlResult.url, query: _mod587(query, arg1), fragmentIdentifier }, merged);
}
export (defaultResult, arg1, borderRadius) => {
  closure_0 = arg1;
  return exports.pick(defaultResult, Array.isArray(arg1) ? ((name) => !lib.includes(name)) : ((arg0, arg1) => !lib(arg0, arg1)), borderRadius);
}
