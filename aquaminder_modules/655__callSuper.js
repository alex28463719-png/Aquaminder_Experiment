// Module ID: 655
// Function ID: 6982
// Name: _callSuper
// Dependencies: [12, 13, 23, 25, 28, 189, 656]
// Exports: SlowBuffer

// Module 655 (_callSuper)
import getLens from "getLens" /* 189 */;
import read2 from "read" /* 656 */;
import closure_3 from "_classCallCheck" /* 12 */;
import closure_4 from "_defineProperties" /* 13 */;
import closure_5 from "_possibleConstructorReturn" /* 23 */;
import closure_6 from "_getPrototypeOf" /* 25 */;
import closure_7 from "_inherits" /* 28 */;

function _callSuper(arg0, arg1, arg2) {
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
  }
  return closure_5(arg0, constructResult);
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
function createBuffer(length) {
  if (length > c8) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
    throw rangeError;
  } else {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(length);
    const _Object = Object;
    Object.setPrototypeOf(uint8Array, Buffer.prototype);
    return uint8Array;
  }
}
class Buffer {
  constructor(arg0, arg1, arg2) {
    if (typeof global === "number") {
      str = "string";
      if (typeof require === "string") {
        tmp4 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp5 = new.target;
        str2 = "The \"string\" argument must be of type string. Received type number";
        tmp6 = new.target;
        typeError = new TypeError("The \"string\" argument must be of type string. Received type number");
        tmp8 = typeError;
        throw typeError;
      } else {
        tmp3 = allocUnsafe;
        return allocUnsafe(global);
      }
    } else {
      tmp = from;
      tmp2 = importDefault;
      return from(global, require, importDefault);
    }
  }
  static from(arg0, arg1, arg2) {
    return from(global, require, importDefault);
  }
  static alloc(arg0, arg1, arg2) {
    return alloc(global, require, importDefault);
  }
  static allocUnsafe(arg0) {
    return allocUnsafe(global);
  }
  static allocUnsafeSlow(arg0) {
    return allocUnsafe(global);
  }
  static isBuffer(arg0) {
    tmp = global != null;
    if (tmp) {
      flag = true;
      tmp = global._isBuffer === true;
    }
    if (tmp) {
      tmp2 = Buffer;
      tmp = global !== Buffer.prototype;
    }
    return tmp;
  }
  static compare(arg0, arg1) {
    fromResult = global;
    if (isInstance(global, Uint8Array)) {
      tmp = Buffer;
      fromResult = Buffer.from(global, global.offset, global.byteLength);
    }
    fromResult1 = require;
    if (isInstance(require, Uint8Array)) {
      tmp2 = Buffer;
      fromResult1 = Buffer.from(require, require.offset, require.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(fromResult1)) {
        if (fromResult === fromResult1) {
          num5 = 0;
          return 0;
        } else {
          length = fromResult.length;
          length2 = fromResult1.length;
          _Math = Math;
          bound = Math.min(length, length2);
          num = 0;
          num2 = 0;
          tmp6 = length;
          tmp7 = length2;
          if (0 < bound) {
            tmp8 = num2;
            while (fromResult[num2] === fromResult1[num2]) {
              num2 = num2 + 1;
              tmp6 = length;
              tmp7 = length2;
            }
            tmp6 = fromResult[num2];
            tmp7 = fromResult1[num2];
          }
          if (tmp6 < tmp7) {
            num4 = -1;
            return -1;
          } else if (tmp7 < tmp6) {
            num3 = 1;
            return 1;
          } else {
            return 0;
          }
        }
      }
    }
    typeError = new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    throw typeError;
  }
  static isEncoding(arg0) {
    str = String(global);
    formatted = str.toLowerCase();
    if ("hex" !== formatted) {
      str2 = "utf8";
      if ("utf8" !== formatted) {
        str3 = "utf-8";
        if ("utf-8" !== formatted) {
          str4 = "ascii";
          if ("ascii" !== formatted) {
            str5 = "latin1";
            if ("latin1" !== formatted) {
              str6 = "binary";
              if ("binary" !== formatted) {
                str7 = "base64";
                if ("base64" !== formatted) {
                  str8 = "ucs2";
                  if ("ucs2" !== formatted) {
                    str9 = "ucs-2";
                    if ("ucs-2" !== formatted) {
                      str10 = "utf16le";
                      if ("utf16le" !== formatted) {
                        str11 = "utf-16le";
                        if ("utf-16le" !== formatted) {
                          flag = false;
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return true;
  }
  static concat(arg0, arg1) {
    num = require;
    if (Array.isArray(global)) {
      num2 = 0;
      if (global.length === 0) {
        tmp19 = Buffer;
        return require("module_0");
      } else {
        if (num === undefined) {
          num3 = 0;
          num4 = 0;
          num = 0;
          if (0 < global.length) {
            do {
              num3 = num3 + global[num4].length;
              num4 = num4 + 1;
              num = num3;
              length = global.length;
            } while (num4 < length);
          }
        }
        tmp5 = Buffer;
        allocUnsafeResult = Buffer.allocUnsafe(num);
        num5 = 0;
        num6 = 0;
        if (0 < global.length) {
          while (true) {
            arr2 = global[num5];
            tmp6 = isInstance;
            _Uint8Array = Uint8Array;
            tmp7 = num5;
            tmp8 = num6;
            if (isInstance(arr2, Uint8Array)) {
              if (num6 + arr2.length > allocUnsafeResult.length) {
                tmp16 = Buffer;
                fromResult = arr2;
                if (!Buffer.isBuffer(arr2)) {
                  tmp17 = Buffer;
                  fromResult = Buffer.from(arr2);
                }
                copyResult = fromResult.copy(allocUnsafeResult, num6);
                arr3 = fromResult;
              } else {
                _Uint8Array2 = Uint8Array;
                set = Uint8Array.prototype.set;
                callResult = set.call(allocUnsafeResult, arr2, num6);
                arr3 = arr2;
              }
            } else {
              tmp9 = Buffer;
              if (!Buffer.isBuffer(arr2)) {
                break;
              } else {
                copyResult1 = arr2.copy(allocUnsafeResult, num6);
                arr3 = arr2;
              }
            }
            num6 = num6 + arr3.length;
            num5 = num5 + 1;
          }
          _TypeError2 = TypeError;
          prototype2 = TypeError.prototype;
          tmp10 = new.target;
          str2 = "\"list\" argument must be an Array of Buffers";
          tmp11 = new.target;
          typeError = new TypeError("\"list\" argument must be an Array of Buffers");
          tmp13 = typeError;
          throw typeError;
        }
        return allocUnsafeResult;
      }
    } else {
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp = new.target;
      str = "\"list\" argument must be an Array of Buffers";
      tmp2 = new.target;
      typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
      tmp4 = typeError1;
      throw typeError1;
    }
  }
  swap16() {
    self = this;
    length = this.length;
    if (length % 2 !== 0) {
      tmp3 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp4 = new.target;
      str = "Buffer size must be a multiple of 16-bits";
      tmp5 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
      tmp7 = rangeError;
      throw rangeError;
    } else {
      num = 1;
      for (let num2 = 0; num2 < length; num2 = num2 + 2) {
        tmp = swap;
        tmp2 = swap(self, num2, num2 + 1);
      }
      return self;
    }
  }
  swap32() {
    self = this;
    length = this.length;
    if (length % 4 !== 0) {
      tmp4 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp5 = new.target;
      str = "Buffer size must be a multiple of 32-bits";
      tmp6 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
      tmp8 = rangeError;
      throw rangeError;
    } else {
      num = 3;
      num2 = 1;
      num3 = 2;
      for (let num4 = 0; num4 < length; num4 = num4 + 4) {
        tmp = swap;
        tmp2 = swap(self, num4, num4 + 3);
        tmp3 = swap(self, num4 + 1, num4 + 2);
      }
      return self;
    }
  }
  swap64() {
    self = this;
    length = this.length;
    if (length % 8 !== 0) {
      tmp6 = globalThis;
      _RangeError = RangeError;
      prototype = RangeError.prototype;
      tmp7 = new.target;
      str = "Buffer size must be a multiple of 64-bits";
      tmp8 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
      tmp10 = rangeError;
      throw rangeError;
    } else {
      num = 7;
      num2 = 1;
      num3 = 6;
      num4 = 2;
      num5 = 5;
      num6 = 3;
      num7 = 4;
      for (let num8 = 0; num8 < length; num8 = num8 + 8) {
        tmp = swap;
        tmp2 = swap(self, num8, num8 + 7);
        tmp3 = swap(self, num8 + 1, num8 + 6);
        tmp4 = swap(self, num8 + 2, num8 + 5);
        tmp5 = swap(self, num8 + 3, num8 + 4);
      }
      return self;
    }
  }
  toString() {
    self = this;
    length = this.length;
    if (length === 0) {
      str = "";
      return "";
    } else if (arguments.length === 0) {
      tmp3 = utf8Slice;
      return utf8Slice(self, 0, length);
    } else {
      tmp = slowToString;
      tmp2 = arguments;
      return slowToString(...arguments);
    }
  }
  equals(arg0) {
    self = this;
    if (Buffer.isBuffer(global)) {
      if (self === global) {
        flag = true;
        return true;
      } else {
        tmp6 = Buffer;
        num = 0;
        return Buffer.compare(self, global) === 0;
      }
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "Argument must be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("Argument must be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  inspect() {
    INSPECT_MAX_BYTES = closure_1.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, INSPECT_MAX_BYTES);
    str2 = str.replace(/(.{2})/g, "$1 ");
    trimmed = str2.trim();
    text = trimmed;
    if (this.length > INSPECT_MAX_BYTES) {
      str3 = " ... ";
      text = `${tmp} ... `;
    }
    return "<Buffer " + text + ">";
  }
  compare(arg0, arg1, arg2, arg3, arg4) {
    num = require;
    tmp = importDefault;
    num2 = importAll;
    length = module;
    self = this;
    fromResult = global;
    if (isInstance(global, Uint8Array)) {
      tmp2 = Buffer;
      fromResult = Buffer.from(global, global.offset, global.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      if (num === undefined) {
        num = 0;
      }
      if (tmp === undefined) {
        num3 = 0;
        if (fromResult) {
          num3 = fromResult.length;
        }
        tmp = num3;
      }
      if (num2 === undefined) {
        num2 = 0;
      }
      if (length === undefined) {
        length = self.length;
      }
      num4 = 0;
      if (num >= 0) {
        if (tmp <= fromResult.length) {
          if (num2 >= 0) {
            if (length <= self.length) {
              if (num2 >= length) {
                if (num >= tmp) {
                  return 0;
                }
              }
              if (num2 >= length) {
                num9 = -1;
                return -1;
              } else if (num >= tmp) {
                num8 = 1;
                return 1;
              } else {
                tmp14 = num >>> 0;
                tmp15 = tmp >>> 0;
                tmp16 = num2 >>> 0;
                tmp17 = length >>> 0;
                if (self === fromResult) {
                  return 0;
                } else {
                  diff = tmp17 - tmp16;
                  diff1 = tmp15 - tmp14;
                  _Math = Math;
                  bound = Math.min(diff, diff1);
                  substr = self.slice(tmp16, tmp17);
                  substr1 = fromResult.slice(tmp14, tmp15);
                  num5 = 0;
                  tmp8 = diff;
                  tmp9 = diff1;
                  if (0 < bound) {
                    tmp7 = num5;
                    while (substr[num5] === substr1[num5]) {
                      num5 = num5 + 1;
                      tmp8 = diff;
                      tmp9 = diff1;
                    }
                    tmp8 = substr[num5];
                    tmp9 = substr1[num5];
                  }
                  if (tmp8 < tmp9) {
                    num7 = -1;
                    return -1;
                  } else if (tmp9 < tmp8) {
                    num6 = 1;
                    return 1;
                  } else {
                    return 0;
                  }
                }
              }
            }
          }
        }
      }
      _RangeError = RangeError;
      prototype2 = RangeError.prototype;
      tmp10 = new.target;
      str2 = "out of range index";
      tmp11 = new.target;
      rangeError = new RangeError("out of range index");
      tmp13 = rangeError;
      throw rangeError;
    } else {
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp3 = new.target;
      str = "The \"target\" argument must be one of type Buffer or Uint8Array. Received type ";
      tmp4 = new.target;
      typeError = new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof fromResult);
      tmp6 = typeError;
      throw typeError;
    }
  }
  includes(arg0, arg1, arg2) {
    return this.indexOf(global, require, importDefault) !== -1;
  }
  indexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, global, require, importDefault, true);
  }
  lastIndexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, global, require, importDefault, false);
  }
  write(arg0, arg1, arg2, arg3) {
    self = this;
    if (require === undefined) {
      length = self.length;
      num2 = 0;
      str3 = "utf8";
    } else {
      if (importDefault === undefined) {
        str = "string";
        if (typeof require === "string") {
          length = self.length;
          num2 = 0;
          str3 = require;
        }
      }
      tmp = globalThis;
      _isFinite = isFinite;
      if (isFinite(require)) {
        num = 0;
        tmp6 = require >>> 0;
        _isFinite2 = isFinite;
        num2 = tmp6;
        str3 = importDefault;
        if (isFinite(importDefault)) {
          tmp7 = importDefault >>> 0;
          num2 = tmp6;
          length = tmp7;
          str3 = importAll;
          if (importAll === undefined) {
            str3 = "utf8";
            num2 = tmp6;
            length = tmp7;
          }
        }
      } else {
        _Error = Error;
        prototype = Error.prototype;
        tmp2 = new.target;
        str2 = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
        tmp3 = new.target;
        error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        tmp5 = error;
        throw error;
      }
    }
    diff = self.length - num2;
    if (length === undefined) {
      length = diff;
    }
    if (global.length <= 0) {
      if (num2 <= self.length) {
        if (!str3) {
          str3 = "utf8";
        }
        str4 = "utf-16le";
        str5 = "utf16le";
        str6 = "ucs-2";
        str7 = "ucs2";
        str8 = "base64";
        str9 = "binary";
        str10 = "latin1";
        str11 = "ascii";
        str12 = "utf-8";
        str13 = "utf8";
        str14 = "hex";
        flag = false;
        tmp9 = str3;
        tmp10 = flag;
        while ("hex" !== str3) {
          if ("utf8" !== str3) {
            if ("utf-8" !== str3) {
              if ("ascii" !== str3) {
                if ("latin1" !== str3) {
                  if ("binary" !== str3) {
                    if ("base64" === str3) {
                      tmp22 = base64Write;
                      tmp23 = self;
                      tmp24 = global;
                      tmp25 = num2;
                      tmp26 = length;
                      return base64Write(self, global, num2, length);
                    } else {
                      if ("ucs2" !== str3) {
                        if ("ucs-2" !== str3) {
                          if ("utf16le" !== str3) {
                            if ("utf-16le" !== str3) {
                              if (flag) {
                                tmp12 = globalThis;
                                _TypeError = TypeError;
                                str15 = "Unknown encoding: ";
                                prototype2 = TypeError.prototype;
                                tmp13 = new.target;
                                tmp14 = new.target;
                                typeError = new TypeError("Unknown encoding: " + str3);
                                tmp16 = typeError;
                                throw typeError;
                              } else {
                                text = `${str3}`;
                                str3 = `${str3}`.toLowerCase();
                                flag = true;
                                continue;
                              }
                            }
                          }
                        }
                      }
                      tmp17 = ucs2Write;
                      tmp18 = self;
                      tmp19 = global;
                      tmp20 = num2;
                      tmp21 = length;
                      return ucs2Write(self, global, num2, length);
                    }
                  }
                }
              }
              tmp27 = asciiWrite;
              tmp28 = self;
              tmp29 = global;
              tmp30 = num2;
              tmp31 = length;
              return asciiWrite(self, global, num2, length);
            }
          }
          tmp32 = utf8Write;
          tmp33 = self;
          tmp34 = global;
          tmp35 = num2;
          tmp36 = length;
          return utf8Write(self, global, num2, length);
        }
        tmp37 = hexWrite;
        tmp38 = self;
        tmp39 = global;
        tmp40 = num2;
        tmp41 = length;
        return hexWrite(self, global, num2, length);
      }
    } else if (length >= 0) {
    }
    rangeError = new RangeError("Attempt to write outside buffer bounds");
    throw rangeError;
  }
  toJSON() {
    obj = { type: "Buffer" };
    slice = Array.prototype.slice;
    self = this._arr;
    if (!self) {
      self = this;
    }
    obj.data = slice.call(self, 0);
    return obj;
  }
  slice(arg0, arg1) {
    self = this;
    length = this.length;
    tmp = ~~global;
    tmp2 = length;
    if (require !== undefined) {
      tmp2 = ~~require;
    }
    if (tmp < 0) {
      num = tmp + length;
      if (num < 0) {
        num = 0;
      }
    } else {
      num = tmp;
      if (tmp > length) {
        num = length;
      }
    }
    if (tmp2 < 0) {
      num2 = tmp2 + length;
      if (num2 < 0) {
        num2 = 0;
      }
    } else {
      num2 = tmp2;
      if (tmp2 > length) {
        num2 = length;
      }
    }
    if (num2 < num) {
      num2 = num;
    }
    subarrayResult = self.subarray(num, num2);
    setPrototypeOfResult = Object.setPrototypeOf(subarrayResult, Buffer.prototype);
    return subarrayResult;
  }
  readIntLE(arg0, arg1, arg2) {
    self = this;
    tmp = global >>> 0;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    tmp5 = self[tmp];
    num = 1;
    num2 = 256;
    tmp6 = tmp5;
    num3 = 1;
    if (1 < tmp2) {
      sum = tmp5 + self[tmp + num] * num2;
      sum1 = num + 1;
      tmp9 = num2;
      tmp6 = sum;
      num3 = num2;
      while (sum1 < tmp2) {
        num2 = num2 * 256;
        tmp5 = sum;
        num = sum1;
        tmp6 = sum;
        num3 = num2;
        if (!num2) {
          break;
        }
      }
    }
    diff = tmp6;
    if (tmp6 >= num3 * 128) {
      tmp11 = globalThis;
      _Math = Math;
      num4 = 2;
      num5 = 8;
      diff = tmp6 - require("module_2");
    }
    return diff;
  }
  readIntBE(arg0, arg1, arg2) {
    self = this;
    tmp = global >>> 0;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkOffset;
      tmp4 = checkOffset(tmp, tmp2, self.length);
    }
    diff = tmp2 - 1;
    tmp6 = self[tmp + diff];
    num = 1;
    num2 = 256;
    tmp7 = tmp6;
    if (diff > 0) {
      diff1 = diff - 1;
      sum = tmp6 + self[tmp + diff1] * num2;
      tmp10 = num2;
      num = num2;
      tmp7 = sum;
      while (diff1 > 0) {
        num2 = num2 * 256;
        diff = diff1;
        tmp6 = sum;
        tmp7 = sum;
        num = num2;
        if (!num2) {
          break;
        }
      }
    }
    diff2 = tmp7;
    if (tmp7 >= num * 128) {
      tmp12 = globalThis;
      _Math = Math;
      num3 = 2;
      num4 = 8;
      diff2 = tmp7 - require("module_2");
    }
    return diff2;
  }
  readInt8(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 1;
      tmp3 = checkOffset(tmp, 1, self.length);
    }
    tmp4 = self[tmp];
    if (self[tmp] & 128) {
      num2 = 255;
      num3 = 1;
      num4 = -1;
      return (255 - tmp4 + 1) * -1;
    } else {
      return tmp4;
    }
  }
  readInt16LE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    tmp4 = self[tmp] | self[tmp + 1] << 8;
    tmp5 = tmp4;
    if (tmp4 & 32768) {
      num2 = 4294901760;
      tmp5 = tmp4 | 4294901760;
    }
    return tmp5;
  }
  readInt16BE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 2;
      tmp3 = checkOffset(tmp, 2, self.length);
    }
    tmp4 = self[tmp + 1] | self[tmp] << 8;
    tmp5 = tmp4;
    if (tmp4 & 32768) {
      num2 = 4294901760;
      tmp5 = tmp4 | 4294901760;
    }
    return tmp5;
  }
  readInt32LE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return self[tmp] | self[tmp + 1] << 8 | self[tmp + 2] << 16 | self[tmp + 3] << 24;
  }
  readInt32BE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    return self[tmp] << 24 | self[tmp + 1] << 16 | self[tmp + 2] << 8 | self[tmp + 3];
  }
  readFloatLE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    obj = require("read");
    return obj.read(self, tmp, true, 23, 4);
  }
  readFloatBE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 4;
      tmp3 = checkOffset(tmp, 4, self.length);
    }
    obj = require("read");
    return obj.read(self, tmp, false, 23, 4);
  }
  readDoubleLE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 8;
      tmp3 = checkOffset(tmp, 8, self.length);
    }
    obj = require("read");
    return obj.read(self, tmp, true, 52, 8);
  }
  readDoubleBE(arg0, arg1) {
    self = this;
    tmp = global >>> 0;
    if (!require) {
      tmp2 = checkOffset;
      num = 8;
      tmp3 = checkOffset(tmp, 8, self.length);
    }
    obj = require("read");
    return obj.read(self, tmp, false, 52, 8);
  }
  writeIntLE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importAll) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp5 = checkInt;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = importDefault;
      tmp10 = checkInt(self, tmp, tmp2, importDefault, powResult - 1, -powResult);
    }
    self[tmp2] = tmp & 255;
    num4 = 1;
    num5 = 256;
    num6 = 0;
    if (1 < importDefault) {
      while (true) {
        tmp11 = num4;
        tmp12 = num5;
        tmp13 = num6;
        num7 = num6;
        if (tmp < 0) {
          num7 = num6;
          if (num6 === 0) {
            num7 = num6;
            if (self[tmp2 + num4 - 1] !== 0) {
              num7 = 1;
            }
          }
        }
        self[tmp2 + num4] = (tmp / num5 >> 0) - num7 & 255;
        sum = num4 + 1;
        if (sum >= importDefault) {
          break;
        } else {
          num5 = num5 * 256;
          num4 = sum;
          num6 = num7;
          if (!num5) {
            break;
          }
        }
      }
    }
    return tmp2 + importDefault;
  }
  writeIntBE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importAll) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp5 = checkInt;
      tmp6 = self;
      tmp7 = tmp;
      tmp8 = tmp2;
      tmp9 = importDefault;
      tmp10 = checkInt(self, tmp, tmp2, importDefault, powResult - 1, -powResult);
    }
    diff = importDefault - 1;
    self[tmp2 + diff] = tmp & 255;
    diff1 = diff - 1;
    num4 = 256;
    num5 = 0;
    if (diff1 >= 0) {
      while (true) {
        tmp13 = diff1;
        tmp14 = num4;
        tmp15 = num5;
        num6 = num5;
        if (tmp < 0) {
          num6 = num5;
          if (num5 === 0) {
            num6 = num5;
            if (self[tmp2 + diff1 + 1] !== 0) {
              num6 = 1;
            }
          }
        }
        self[tmp2 + diff1] = (tmp / num4 >> 0) - num6 & 255;
        diff2 = diff1 - 1;
        if (diff2 < 0) {
          break;
        } else {
          num4 = num4 * 256;
          diff1 = diff2;
          num5 = num6;
          if (!num4) {
            break;
          }
        }
      }
    }
    return tmp2 + importDefault;
  }
  writeInt8(arg0, arg1, arg2) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkInt;
      num = 1;
      num2 = 127;
      num3 = -128;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 1, 127, -128);
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 255;
      num5 = 1;
      sum = 255 + tmp + 1;
    }
    self[tmp2] = sum & 255;
    return tmp2 + 1;
  }
  writeInt16LE(arg0, arg1, arg2) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkInt;
      num = 2;
      num2 = 32767;
      num3 = -32768;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
    }
    self[tmp2] = tmp & 255;
    self[tmp2 + 1] = tmp >>> 8;
    return tmp2 + 2;
  }
  writeInt16BE(arg0, arg1, arg2) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkInt;
      num = 2;
      num2 = 32767;
      num3 = -32768;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 2, 32767, -32768);
    }
    self[tmp2] = tmp >>> 8;
    self[tmp2 + 1] = tmp & 255;
    return tmp2 + 2;
  }
  writeInt32LE(arg0, arg1, arg2) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkInt;
      num = 4;
      num2 = 2147483647;
      num3 = -2147483648;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
    }
    self[tmp2] = tmp & 255;
    self[tmp2 + 1] = tmp >>> 8;
    self[tmp2 + 2] = tmp >>> 16;
    self[tmp2 + 3] = tmp >>> 24;
    return tmp2 + 4;
  }
  writeInt32BE(arg0, arg1, arg2) {
    self = this;
    tmp = +global;
    tmp2 = require >>> 0;
    if (!importDefault) {
      tmp3 = checkInt;
      num = 4;
      num2 = 2147483647;
      num3 = -2147483648;
      tmp4 = self;
      tmp5 = tmp;
      tmp6 = tmp2;
      tmp7 = checkInt(self, tmp, tmp2, 4, 2147483647, -2147483648);
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 4294967295;
      num5 = 1;
      sum = 4294967295 + tmp + 1;
    }
    self[tmp2] = sum >>> 24;
    self[tmp2 + 1] = sum >>> 16;
    self[tmp2 + 2] = sum >>> 8;
    self[tmp2 + 3] = sum & 255;
    return tmp2 + 4;
  }
  writeFloatLE(arg0, arg1, arg2) {
    return writeFloat(this, global, require, true, importDefault);
  }
  writeFloatBE(arg0, arg1, arg2) {
    return writeFloat(this, global, require, false, importDefault);
  }
  writeDoubleLE(arg0, arg1, arg2) {
    return writeDouble(this, global, require, true, importDefault);
  }
  writeDoubleBE(arg0, arg1, arg2) {
    return writeDouble(this, global, require, false, importDefault);
  }
  copy(arg0, arg1, arg2, arg3) {
    num = require;
    num2 = importDefault;
    self = this;
    if (Buffer.isBuffer(global)) {
      if (!num2) {
        num2 = 0;
      }
      length = importAll;
      if (!importAll) {
        num3 = 0;
        length = importAll;
        if (importAll !== 0) {
          length = self.length;
        }
      }
      if (num >= global.length) {
        num = global.length;
      }
      if (!num) {
        num = 0;
      }
      num4 = 0;
      length2 = length;
      if (length > 0) {
        length2 = length;
        if (length < num2) {
          length2 = num2;
        }
      }
      if (length2 === num2) {
        return 0;
      } else {
        if (global.length !== 0) {
          if (self.length !== 0) {
            if (num < 0) {
              tmp21 = globalThis;
              _RangeError3 = RangeError;
              prototype4 = RangeError.prototype;
              tmp22 = new.target;
              str5 = "targetStart out of bounds";
              tmp23 = new.target;
              rangeError = new RangeError("targetStart out of bounds");
              tmp25 = rangeError;
              throw rangeError;
            } else {
              if (num2 >= 0) {
                if (num2 < self.length) {
                  if (length2 < 0) {
                    tmp11 = globalThis;
                    _RangeError = RangeError;
                    prototype2 = RangeError.prototype;
                    tmp12 = new.target;
                    str3 = "sourceEnd out of bounds";
                    tmp13 = new.target;
                    rangeError1 = new RangeError("sourceEnd out of bounds");
                    tmp15 = rangeError1;
                    throw rangeError1;
                  } else {
                    if (length2 > self.length) {
                      length2 = self.length;
                    }
                    if (global.length - num < length2 - num2) {
                      length2 = global.length - num + num2;
                    }
                    if (self === global) {
                      tmp7 = globalThis;
                      _Uint8Array = Uint8Array;
                      str2 = "function";
                      if (typeof Uint8Array.prototype.copyWithin === "function") {
                        copyWithinResult = self.copyWithin(num, num2, length2);
                      }
                      return tmp6;
                    }
                    tmp8 = globalThis;
                    _Uint8Array2 = Uint8Array;
                    set = Uint8Array.prototype.set;
                    callResult = set.call(global, self.subarray(num2, length2), num);
                  }
                }
              }
              tmp16 = globalThis;
              _RangeError2 = RangeError;
              prototype3 = RangeError.prototype;
              tmp17 = new.target;
              str4 = "Index out of range";
              tmp18 = new.target;
              rangeError2 = new RangeError("Index out of range");
              tmp20 = rangeError2;
              throw rangeError2;
            }
          }
        }
        return 0;
      }
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      prototype = TypeError.prototype;
      tmp2 = new.target;
      str = "argument should be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("argument should be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  fill(arg0, arg1, arg2, arg3) {
    tmp = importAll;
    self = this;
    tmp2 = typeof global;
    if (tmp2 === "string") {
      if (typeof require === "string") {
        length = self.length;
        num3 = 0;
        tmp = require;
      } else {
        num3 = require;
        length = importDefault;
        if (typeof importDefault === "string") {
          length = self.length;
          num3 = require;
          tmp = importDefault;
        }
      }
      if (tmp !== undefined) {
        if (typeof tmp !== "string") {
          tmp23 = globalThis;
          _TypeError3 = TypeError;
          prototype3 = TypeError.prototype;
          tmp24 = new.target;
          str9 = "encoding must be a string";
          tmp25 = new.target;
          typeError = new TypeError("encoding must be a string");
          tmp27 = typeError;
          throw typeError;
        }
      }
      if (typeof tmp === "string") {
        tmp6 = Buffer;
        if (!Buffer.isEncoding(tmp)) {
          tmp7 = globalThis;
          _TypeError = TypeError;
          str3 = "Unknown encoding: ";
          prototype = TypeError.prototype;
          tmp8 = new.target;
          tmp9 = new.target;
          typeError1 = new TypeError("Unknown encoding: " + tmp);
          tmp11 = typeError1;
          throw typeError1;
        }
      }
      num4 = 1;
      num = global;
      tmp3 = num3;
      tmp4 = length;
      tmp5 = tmp;
      if (global.length === 1) {
        num5 = 0;
        charCodeAtResult = require("module_0");
        str4 = "utf8";
        if (tmp !== "utf8") {
          str5 = "latin1";
          num = global;
          tmp3 = num3;
          tmp4 = length;
          tmp5 = tmp;
        } else {
          num6 = 128;
        }
        num = charCodeAtResult;
        tmp3 = num3;
        tmp4 = length;
        tmp5 = tmp;
      }
    } else {
      str = "number";
      if (tmp2 === "number") {
        num2 = 255;
        num = global & 255;
        tmp3 = require;
        tmp4 = importDefault;
        tmp5 = tmp;
      } else {
        str2 = "boolean";
        num = global;
        tmp3 = require;
        tmp4 = importDefault;
        tmp5 = tmp;
        if (tmp2 === "boolean") {
          tmp28 = globalThis;
          _Number = Number;
          num = Number(global);
          tmp3 = require;
          tmp4 = importDefault;
          tmp5 = tmp;
        }
      }
    }
    if (tmp3 >= 0) {
      if (self.length >= tmp3) {
        if (self.length >= tmp4) {
          if (tmp4 <= tmp3) {
            return self;
          } else {
            sum = tmp3 >>> 0;
            tmp13 = tmp4 === undefined ? self.length : tmp4 >>> 0;
            if (!num) {
              num = 0;
            }
            str6 = "number";
            if (typeof num === "number") {
              if (sum < tmp13) {
                do {
                  self[sum] = num;
                  sum = sum + 1;
                } while (sum < tmp13);
              }
            } else {
              tmp29 = Buffer;
              fromResult = num;
              if (!Buffer.isBuffer(num)) {
                tmp14 = Buffer;
                fromResult = Buffer.from(num, tmp5);
              }
              length2 = fromResult.length;
              if (length2 === 0) {
                tmp16 = globalThis;
                _TypeError2 = TypeError;
                str7 = "The value \"";
                prototype2 = TypeError.prototype;
                tmp17 = new.target;
                str8 = "\" is invalid for argument \"value\"";
                tmp18 = new.target;
                typeError2 = new TypeError("The value \"" + num + "\" is invalid for argument \"value\"");
                tmp20 = typeError2;
                throw typeError2;
              } else {
                num7 = 0;
                if (0 < tmp13 - sum) {
                  do {
                    self[num7 + sum] = fromResult[num7 % length2];
                    num7 = num7 + 1;
                    diff = tmp13 - sum;
                  } while (num7 < diff);
                }
              }
            }
            return self;
          }
        }
      }
    }
    rangeError = new RangeError("Out of range index");
    throw rangeError;
  }
}
function from(buffer, byteOffset, byteLength) {
  if (typeof buffer === "string") {
    return fromString(buffer, byteOffset);
  } else {
    const _ArrayBuffer2 = ArrayBuffer;
    if (ArrayBuffer.isView(buffer)) {
      return fromArrayView(buffer);
    } else if (buffer == null) {
      const _TypeError3 = TypeError;
      const typeError = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + tmp);
      throw typeError;
    } else {
      const _ArrayBuffer3 = ArrayBuffer;
      if (!isInstance(buffer, ArrayBuffer)) {
        if (buffer) {
          const _ArrayBuffer = ArrayBuffer;
        }
        const _SharedArrayBuffer = SharedArrayBuffer;
        if (typeof SharedArrayBuffer !== "undefined") {
          const _SharedArrayBuffer2 = SharedArrayBuffer;
          if (!isInstance(buffer, SharedArrayBuffer)) {
            if (buffer) {
              const _SharedArrayBuffer3 = SharedArrayBuffer;
            }
          }
          return fromArrayBuffer(buffer, byteOffset, byteLength);
        }
        if (tmp === "number") {
          const _TypeError2 = TypeError;
          const typeError1 = new TypeError("The \"value\" argument must not be of type number. Received type number");
          throw typeError1;
        } else {
          const tmp6 = buffer.valueOf && buffer.valueOf();
          if (tmp6 != null) {
            if (tmp6 !== buffer) {
              return Buffer.from(tmp6, byteOffset, byteLength);
            }
          }
          const tmp8 = fromObject(buffer);
          if (tmp8) {
            return tmp8;
          } else {
            const _Symbol = Symbol;
            if (typeof Symbol !== "undefined") {
              const _Symbol2 = Symbol;
              if (Symbol.toPrimitive != null) {
                const _Symbol3 = Symbol;
                if (typeof buffer[Symbol.toPrimitive] === "function") {
                  const _Symbol4 = Symbol;
                  return Buffer.from(buffer[Symbol.toPrimitive]("string"), byteOffset, byteLength);
                }
              }
            }
            const _TypeError = TypeError;
            const typeError2 = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + tmp);
            throw typeError2;
          }
        }
      }
      return fromArrayBuffer(buffer, byteOffset, byteLength);
    }
  }
}
function assertSize(length) {
  if (typeof length !== "number") {
    const _TypeError = TypeError;
    const typeError = new TypeError("\"size\" argument must be of type number");
    throw typeError;
  } else if (length < 0) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
    throw rangeError;
  }
}
function alloc(length, arg1, str) {
  assertSize(length);
  if (length <= 0) {
    return createBuffer(length);
  } else if (arg1 !== undefined) {
    if (typeof str === "string") {
      let fillResult = createBuffer(length).fill(arg1, str);
      const obj2 = createBuffer(length);
    } else {
      fillResult = createBuffer(length).fill(arg1);
      const obj = createBuffer(length);
    }
    return fillResult;
  } else {
    return createBuffer(length);
  }
}
function allocUnsafe(length) {
  assertSize(length);
  let num = 0;
  if (length >= 0) {
    num = checked(length) | 0;
  }
  return createBuffer(num);
}
function fromString(buffer, byteOffset) {
  let str = byteOffset;
  if (typeof byteOffset !== "string") {
    str = "utf8";
  }
  if (Buffer.isEncoding(str)) {
    const tmp7 = byteLength(buffer, str) | 0;
    const arr = createBuffer(tmp7);
    const writeResult = arr.write(buffer, str);
    let substr = arr;
    if (writeResult !== tmp7) {
      substr = arr.slice(0, writeResult);
    }
    return substr;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Unknown encoding: " + str);
    throw typeError;
  }
}
function fromArrayLike(data) {
  let num = 0;
  if (data.length >= 0) {
    num = checked(data.length) | 0;
  }
  const tmp2 = createBuffer(num);
  let num2 = 0;
  if (0 < num) {
    do {
      tmp2[num2] = data[num2] & 255;
      num2 = num2 + 1;
    } while (num2 < num);
  }
  return tmp2;
}
function fromArrayView(buffer) {
  if (isInstance(buffer, Uint8Array)) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(buffer);
    return fromArrayBuffer(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
  } else {
    return fromArrayLike(buffer);
  }
}
function fromArrayBuffer(buffer, byteOffset, byteLength) {
  if (byteOffset >= 0) {
    if (buffer.byteLength >= byteOffset) {
      let num = byteLength;
      if (!byteLength) {
        num = 0;
      }
      if (buffer.byteLength < byteOffset + num) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("\"length\" is outside of buffer bounds");
        throw rangeError;
      } else {
        if (byteOffset === undefined) {
          if (byteLength === undefined) {
            const _Uint8Array3 = Uint8Array;
            let uint8Array = new Uint8Array(buffer);
          }
          const _Object = Object;
          Object.setPrototypeOf(uint8Array, Buffer.prototype);
          return uint8Array;
        }
        if (byteLength === undefined) {
          const _Uint8Array2 = Uint8Array;
          uint8Array = new Uint8Array(buffer, byteOffset);
        } else {
          const _Uint8Array = Uint8Array;
          uint8Array = new Uint8Array(buffer, byteOffset, byteLength);
        }
      }
    }
  }
  const rangeError1 = new RangeError("\"offset\" is outside of buffer bounds");
  throw rangeError1;
}
function fromObject(copy) {
  if (Buffer.isBuffer(copy)) {
    const tmp7 = checked(copy.length) | 0;
    const arr = createBuffer(tmp7);
    if (arr.length === 0) {
      return arr;
    } else {
      copy.copy(arr, 0, 0, tmp7);
      return arr;
    }
  } else if (copy.length !== undefined) {
    if (typeof copy.length === "number") {
      if (!numberIsNaN(copy.length)) {
        return fromArrayLike(copy);
      }
    }
    return createBuffer(0);
  } else if (copy.type === "Buffer") {
    const _Array = Array;
    if (Array.isArray(copy.data)) {
      return fromArrayLike(copy.data);
    }
  }
}
function checked(length) {
  if (length >= v2147483647) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + v2147483647.toString(16) + " bytes");
    throw rangeError;
  } else {
    return length | 0;
  }
}
function byteLength(byteLength) {
  if (Buffer.isBuffer(byteLength)) {
    return byteLength.length;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (!ArrayBuffer.isView(byteLength)) {
      const _ArrayBuffer2 = ArrayBuffer;
      if (!isInstance(byteLength, ArrayBuffer)) {
        if (typeof byteLength !== "string") {
          const _TypeError = TypeError;
          const typeError = new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + tmp3);
          throw typeError;
        } else {
          let tmp4 = arguments.length > 2;
          if (tmp4) {
            tmp4 = arguments[2] === true;
          }
          let formatted = arg1;
          let flag2 = false;
          if (!tmp4) {
            formatted = arg1;
            flag2 = false;
            if (length === 0) {
              return 0;
            }
          }
          while ("ascii" !== formatted) {
            let str9 = "latin1";
            if ("latin1" === formatted) {
              break;
            } else {
              let str10 = "binary";
              if ("binary" === formatted) {
                break;
              } else {
                let str11 = "utf8";
                if ("utf8" !== formatted) {
                  let str12 = "utf-8";
                  if ("utf-8" !== formatted) {
                    let str13 = "ucs2";
                    if ("ucs2" !== formatted) {
                      let str3 = "ucs-2";
                      if ("ucs-2" !== formatted) {
                        let str4 = "utf16le";
                        if ("utf16le" !== formatted) {
                          let str5 = "utf-16le";
                          if ("utf-16le" !== formatted) {
                            let str6 = "hex";
                            if ("hex" === formatted) {
                              let num3 = 1;
                              return length >>> 1;
                            } else {
                              let str7 = "base64";
                              if ("base64" === formatted) {
                                let tmp10 = base64ToBytes;
                                return base64ToBytes(byteLength).length;
                              } else if (flag2) {
                                let num2 = -1;
                                if (!tmp4) {
                                  let tmp9 = utf8ToBytes;
                                  num2 = utf8ToBytes(byteLength).length;
                                }
                                return num2;
                              } else {
                                let text = `${tmp5}`;
                                formatted = `${tmp5}`.toLowerCase();
                                flag2 = true;
                                continue;
                              }
                            }
                          }
                        }
                      }
                    }
                    return length * 2;
                  }
                }
                let tmp11 = utf8ToBytes;
                return utf8ToBytes(byteLength).length;
              }
            }
          }
          return byteLength.length;
        }
      }
    }
    return byteLength.byteLength;
  }
}
function slowToString(arg0, arg1, arg2) {
  let str = arg0;
  let num = arg1;
  let length = arg2;
  const self = this;
  if (arg1 === undefined) {
    num = 0;
  }
  if (num > self.length) {
    return "";
  } else {
    if (length === undefined) {
      length = self.length;
    }
    if (length <= 0) {
      return "";
    } else if (length >>> 0 <= num >>> 0) {
      return "";
    } else {
      let flag = false;
      if (!str) {
        str = "utf8";
        flag = false;
      }
      while ("hex" !== str) {
        let str11 = "utf8";
        if ("utf8" !== str) {
          let str12 = "utf-8";
          if ("utf-8" !== str) {
            let str13 = "ascii";
            if ("ascii" === str) {
              let tmp12 = asciiSlice;
              return asciiSlice(self, tmp16, tmp15);
            } else {
              let str14 = "latin1";
              if ("latin1" !== str) {
                let str15 = "binary";
                if ("binary" !== str) {
                  let str16 = "base64";
                  if ("base64" === str) {
                    let tmp10 = base64Slice;
                    return base64Slice(self, tmp16, tmp15);
                  } else {
                    let str3 = "ucs2";
                    if ("ucs2" !== str) {
                      let str4 = "ucs-2";
                      if ("ucs-2" !== str) {
                        let str5 = "utf16le";
                        if ("utf16le" !== str) {
                          let str6 = "utf-16le";
                          if ("utf-16le" !== str) {
                            if (flag) {
                              let tmp4 = globalThis;
                              let _TypeError = TypeError;
                              let str7 = "Unknown encoding: ";
                              let tmp5 = new.target;
                              let tmp6 = new.target;
                              let typeError = new TypeError("Unknown encoding: " + str);
                              let tmp8 = typeError;
                              throw typeError;
                            } else {
                              let text = `${str}`;
                              str = `${str}`.toLowerCase();
                              flag = true;
                              continue;
                            }
                          }
                        }
                      }
                    }
                    let tmp9 = utf16leSlice;
                    return utf16leSlice(self, tmp16, tmp15);
                  }
                }
              }
              let tmp11 = latin1Slice;
              return latin1Slice(self, tmp16, tmp15);
            }
          }
        }
        let tmp13 = utf8Slice;
        return utf8Slice(self, tmp16, tmp15);
      }
      return hexSlice(self, tmp16, tmp15);
    }
  }
}
function swap(self, arg1, arg2) {
  self[arg1] = self[arg2];
  self[arg2] = self[arg1];
}
function bidirectionalIndexOf(closure_1, fromResult, str, arg3, arg4) {
  if (closure_1.length === 0) {
    return -1;
  } else {
    let num2 = 0;
    let tmp = str;
    if (typeof str !== "string") {
      num2 = 2147483647;
      tmp = arg3;
      if (str <= 2147483647) {
        num2 = str;
        tmp = arg3;
        if (str < -2147483648) {
          num2 = -2147483648;
          tmp = arg3;
        }
      }
    }
    let tmp4 = tmp2;
    if (numberIsNaN(+num2)) {
      let num4 = 0;
      if (!arg4) {
        num4 = closure_1.length - 1;
      }
      tmp4 = num4;
    }
    let num6 = tmp4;
    if (tmp4 < 0) {
      num6 = closure_1.length + tmp4;
    }
    if (num6 >= closure_1.length) {
      if (arg4) {
        return -1;
      } else {
        num6 = closure_1.length - 1;
      }
    } else if (num6 < 0) {
      num6 = 0;
      if (!arg4) {
        return -1;
      }
    }
    if (typeof fromResult === "string") {
      fromResult = Buffer.from(fromResult, tmp);
    }
    if (Buffer.isBuffer(fromResult)) {
      if (fromResult.length === 0) {
        return -1;
      } else {
        return arrayIndexOf(closure_1, fromResult, num6, tmp, arg4);
      }
    } else if (typeof fromResult === "number") {
      const _Uint8Array = Uint8Array;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        const _Uint8Array2 = Uint8Array;
        if (arg4) {
          const indexOf = prototype.indexOf;
          return indexOf.call(closure_1, tmp12, num6);
        } else {
          const lastIndexOf = prototype.lastIndexOf;
          return lastIndexOf.call(closure_1, tmp12, num6);
        }
      } else {
        const items = [tmp12];
        return arrayIndexOf(closure_1, items, num6, tmp, arg4);
      }
    } else {
      const _TypeError = TypeError;
      prototype = TypeError.prototype;
      const typeError = new TypeError("val must be string, number or Buffer");
      throw typeError;
    }
  }
}
function arrayIndexOf(readUInt16BE, fromResult, result2, arg3, arg4) {
  let tmp14;
  function read(readUInt16BE, result2) {
    if (c0 === 1) {
      return readUInt16BE[result2];
    } else {
      return readUInt16BE.readUInt16BE(result2 * c0);
    }
  }
  c0 = 1;
  let num = 1;
  let result = length;
  let result1 = length2;
  if (arg3 !== undefined) {
    const _String = String;
    const formatted = String(arg3).toLowerCase();
    if (formatted !== "ucs2") {
      if (formatted !== "ucs-2") {
        if (formatted !== "utf16le") {
          num = 1;
          result = length;
          result1 = length2;
        }
      }
    }
    if (readUInt16BE.length >= 2) {
      if (fromResult.length >= 2) {
        c0 = 2;
        result = length / 2;
        result1 = length2 / 2;
        result2 = result2 / 2;
        num = 2;
      }
    }
    return -1;
  }
  if (arg4) {
    let num6 = -1;
    if (result2 < result) {
      while (true) {
        let tmp12 = num6 === -1;
        let tmp13 = result2;
        tmp14 = num6;
        let num7 = 0;
        let readResult = read(readUInt16BE, result2);
        if (!tmp12) {
          num7 = result2 - tmp14;
        }
        if (readResult === read(fromResult, num7)) {
          if (tmp12) {
            tmp14 = result2;
          }
          let diff = result2;
          let num8 = tmp14;
          if (result2 - tmp14 + 1 === result1) {
            break;
          }
        } else {
          diff = result2;
          if (tmp14 !== -1) {
            diff = result2 - (result2 - tmp14);
          }
          num8 = -1;
        }
        result2 = diff + 1;
        num6 = num8;
      }
      return tmp14 * num;
    }
  } else {
    let diff1 = result2;
    if (result2 + result1 > result) {
      diff1 = result - result1;
    }
    if (diff1 >= 0) {
      while (true) {
        let tmp7 = diff1;
        let num4 = 0;
        let flag = true;
        if (0 < result1) {
          let readResult1 = read(readUInt16BE, diff1 + num4);
          let tmp9 = num4;
          flag = false;
          while (readResult1 === read(fromResult, num4)) {
            let sum = num4 + 1;
            num4 = sum;
            flag = true;
            if (sum >= result1) {
              break;
            }
          }
        }
        if (flag) {
          break;
        } else {
          diff1 = diff1 - 1;
        }
      }
      return diff1;
    }
  }
  return -1;
}
function hexWrite(self, byteLength, arg2, length) {
  const tmp = Number(arg2) || 0;
  const diff = self.length - tmp;
  let NumberResult = diff;
  if (length) {
    const _Number = Number;
    NumberResult = Number(length);
    if (NumberResult > diff) {
      NumberResult = diff;
    }
  }
  if (NumberResult > byteLength.length / 2) {
    NumberResult = length / 2;
  }
  let num = 0;
  let num2 = 0;
  if (0 < NumberResult) {
    const _parseInt = parseInt;
    const parsed = parseInt(byteLength.substr(num2 * 2, 2), 16);
    while (!numberIsNaN(parsed)) {
      self[tmp + num2] = parsed;
      num2 = num2 + 1;
      num = num2;
    }
    return num2;
  }
  return num;
}
function utf8Write(self, byteLength, arg2, length) {
  return blitBuffer(utf8ToBytes(byteLength, self.length - arg2), self, arg2, length);
}
function asciiWrite(self, byteLength, arg2, length) {
  return blitBuffer(asciiToBytes(byteLength), self, arg2, length);
}
function base64Write(self, byteLength, arg2, length) {
  return blitBuffer(base64ToBytes(byteLength), self, arg2, length);
}
function ucs2Write(self, byteLength, arg2, length) {
  return blitBuffer(utf16leToBytes(byteLength, self.length - arg2), self, arg2, length);
}
function base64Slice(self, arg1, arg2) {
  if (arg1 === 0) {
    if (arg2 === self.length) {
      return getLens.fromByteArray(self);
    }
  }
  return getLens.fromByteArray(self.slice(arg1, arg2));
}
function utf8Slice(self, arg1, length) {
  let sum = arg1;
  const bound = Math.min(self.length, length);
  const items = [];
  if (arg1 < bound) {
    do {
      let tmp7 = self[sum];
      let tmp8 = sum;
      let tmp9 = tmp3;
      let tmp10 = tmp4;
      let tmp11 = tmp5;
      let tmp12 = tmp6;
      let num = 4;
      if (tmp7 <= 239) {
        let num2 = 3;
        if (tmp7 <= 223) {
          let num3 = 1;
          if (tmp7 > 191) {
            num3 = 2;
          }
          num2 = num3;
        }
        num = num2;
      }
      let tmp13 = null;
      if (sum + num <= bound) {
        if (1 === num) {
          tmp13 = null;
          if (tmp7 < 128) {
            tmp13 = tmp7;
          }
        } else if (2 === num) {
          let tmp16 = self[sum + 1];
          tmp13 = null;
          tmp9 = tmp16;
          if ((tmp16 & 192) === 128) {
            let tmp17 = (tmp7 & 31) << 6 | tmp16 & 63;
            tmp13 = null;
            tmp9 = tmp16;
            tmp12 = tmp17;
            if (tmp17 > 127) {
              tmp13 = tmp17;
              tmp9 = tmp16;
              tmp12 = tmp17;
            }
          }
        } else if (3 === num) {
          let tmp14 = self[sum + 1];
          let tmp15 = self[sum + 2];
          tmp13 = null;
          tmp9 = tmp14;
          tmp10 = tmp15;
          if ((tmp14 & 192) === 128) {
            tmp13 = null;
            tmp9 = tmp14;
            tmp10 = tmp15;
            if ((tmp15 & 192) === 128) {
              let tmp25 = (tmp7 & 15) << 12 | (tmp14 & 63) << 6 | tmp15 & 63;
              tmp13 = null;
              tmp9 = tmp14;
              tmp10 = tmp15;
              tmp12 = tmp25;
              if (tmp25 > 2047) {
                if (tmp25 < 55296) {
                  tmp13 = tmp25;
                  tmp9 = tmp14;
                  tmp10 = tmp15;
                  tmp12 = tmp25;
                } else {
                  tmp13 = null;
                  tmp9 = tmp14;
                  tmp10 = tmp15;
                  tmp12 = tmp25;
                }
              }
            }
          }
        } else {
          tmp13 = null;
          if (4 === num) {
            let tmp21 = self[sum + 1];
            let tmp22 = self[sum + 2];
            let tmp23 = self[sum + 3];
            tmp13 = null;
            tmp9 = tmp21;
            tmp10 = tmp22;
            tmp11 = tmp23;
            if ((tmp21 & 192) === 128) {
              tmp13 = null;
              tmp9 = tmp21;
              tmp10 = tmp22;
              tmp11 = tmp23;
              if ((tmp22 & 192) === 128) {
                tmp13 = null;
                tmp9 = tmp21;
                tmp10 = tmp22;
                tmp11 = tmp23;
                if ((tmp23 & 192) === 128) {
                  let tmp24 = (tmp7 & 15) << 18 | (tmp21 & 63) << 12 | (tmp22 & 63) << 6 | tmp23 & 63;
                  tmp13 = null;
                  tmp9 = tmp21;
                  tmp10 = tmp22;
                  tmp11 = tmp23;
                  tmp12 = tmp24;
                  if (tmp24 > 65535) {
                    tmp13 = null;
                    tmp9 = tmp21;
                    tmp10 = tmp22;
                    tmp11 = tmp23;
                    tmp12 = tmp24;
                    if (tmp24 < 1114112) {
                      tmp13 = tmp24;
                      tmp9 = tmp21;
                      tmp10 = tmp22;
                      tmp11 = tmp23;
                      tmp12 = tmp24;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let num4 = 65533;
      let num5 = 1;
      if (tmp13 !== null) {
        num5 = num;
        num4 = tmp13;
        if (tmp13 > 65535) {
          let diff = tmp13 - 65536;
          let arr = items.push(diff >>> 10 & 1023 | 55296);
          num4 = 56320 | diff & 1023;
          num5 = num;
        }
      }
      arr = items.push(num4);
      sum = sum + num5;
      tmp3 = tmp9;
      tmp4 = tmp10;
      tmp5 = tmp11;
      tmp6 = tmp12;
    } while (sum < bound);
  }
  return decodeCodePointsArray(items);
}
function decodeCodePointsArray(items) {
  let sum;
  if (items.length <= c9) {
    const _String3 = String;
    const _String4 = String;
    return fromCharCode2.apply(String, items);
  } else {
    let num = 0;
    let str = "";
    let str2 = "";
    if (0 < length) {
      do {
        let _String = String;
        let _String2 = String;
        let tmp3 = c9;
        sum = num + c9;
        str = `${tmp2(String, items.slice(num, tmp4))}`;
        str2 = str;
        num = sum;
      } while (sum < length);
    }
    return str2;
  }
}
function asciiSlice(self, arg1, result1) {
  let sum = arg1;
  const bound = Math.min(self.length, result1);
  let str = "";
  let str2 = "";
  if (arg1 < bound) {
    do {
      let _String = String;
      str = `${String.fromCharCode(self[tmp] & 127)}`;
      sum = sum + 1;
      str2 = str;
    } while (sum < bound);
  }
  return str2;
}
function latin1Slice(self, arg1, result1) {
  let sum = arg1;
  const bound = Math.min(self.length, result1);
  let str = "";
  let str2 = "";
  if (arg1 < bound) {
    do {
      let _String = String;
      str = `${String.fromCharCode(self[tmp])}`;
      sum = sum + 1;
      str2 = str;
    } while (sum < bound);
  }
  return str2;
}
function hexSlice(self, arg1, arg2) {
  let num = arg1;
  let tmp = arg2;
  if (!arg1) {
    num = 0;
  }
  if (tmp) {
    let str = "";
    let str2 = "";
    while (num < tmp) {
      let tmp2 = table;
      str = `${closure_12[self[num]]}`;
      num = num + 1;
      str2 = str;
    }
    return str2;
  }
  tmp = length;
}
function utf16leSlice(self, arg1, arg2) {
  let diff;
  const substr = self.slice(arg1, arg2);
  let str = "";
  let str2 = "";
  let num = 0;
  if (0 < substr.length - 1) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arr[num] + arr[num + 1] * 256)}`;
      num = num + 2;
      str2 = str;
      diff = substr.length - 1;
    } while (num < diff);
  }
  return str2;
}
function checkOffset(arg0, arg1, length) {
  if (arg0 % 1 === 0) {
    if (arg0 >= 0) {
      if (arg0 + arg1 > length) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("Trying to access beyond buffer length");
        throw rangeError;
      }
    }
  }
  const rangeError1 = new RangeError("offset is not uint");
  throw rangeError1;
}
function checkInt(self, arg1, arg2, arg3, arg4, arg5) {
  if (Buffer.isBuffer(self)) {
    if (arg1 <= arg4) {
      if (arg1 >= arg5) {
        if (arg2 + arg3 > self.length) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("Index out of range");
          throw rangeError;
        }
      }
    }
    const _RangeError2 = RangeError;
    const rangeError1 = new RangeError("\"value\" argument is out of bounds");
    throw rangeError1;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
    throw typeError;
  }
}
function wrtBigUInt64LE(arg0, arg1, arg2, BigIntResult, arg4) {
  checkIntBI(arg1, BigIntResult, arg4, arg0, arg2, 7);
  const NumberResult = Number(arg1 & BigInt(4294967295));
  arg0[+arg2] = NumberResult;
  arg0[++arg2 + 1] = NumberResult >> 8;
  const tmp7 = +++arg2 + 1 + 1;
  arg0[tmp7] = NumberResult >> 8 >> 8;
  arg0[+tmp7 + 1] = NumberResult >> 8 >> 8 >> 8;
  const NumberResult1 = Number(arg1 >> BigInt(32) & BigInt(4294967295));
  arg0[++tmp7 + 1 + 1] = NumberResult1;
  const tmp13 = +++tmp7 + 1 + 1 + 1;
  arg0[tmp13] = NumberResult1 >> 8;
  arg0[+tmp13 + 1] = NumberResult1 >> 8 >> 8;
  arg0[++tmp13 + 1 + 1] = NumberResult1 >> 8 >> 8 >> 8;
  return ++tmp13 + 1 + 1 + 1;
}
function wrtBigUInt64BE(arg0, arg1, arg2, BigIntResult, arg4) {
  checkIntBI(arg1, BigIntResult, arg4, arg0, arg2, 7);
  const NumberResult = Number(arg1 & BigInt(4294967295));
  arg0[arg2 + 7] = NumberResult;
  arg0[arg2 + 6] = NumberResult >> 8;
  arg0[arg2 + 5] = NumberResult >> 8 >> 8;
  arg0[arg2 + 4] = NumberResult >> 8 >> 8 >> 8;
  const NumberResult1 = Number(arg1 >> BigInt(32) & BigInt(4294967295));
  arg0[arg2 + 3] = NumberResult1;
  arg0[arg2 + 2] = NumberResult1 >> 8;
  arg0[arg2 + 1] = NumberResult1 >> 8 >> 8;
  arg0[arg2] = NumberResult1 >> 8 >> 8 >> 8;
  return arg2 + 8;
}
function checkIEEE754(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg2 + arg3 > arg0.length) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Index out of range");
    throw rangeError;
  } else if (arg2 < 0) {
    const _RangeError = RangeError;
    const rangeError1 = new RangeError("Index out of range");
    throw rangeError1;
  }
}
function writeFloat(arg0, arg1, arg2, arg3, arg4) {
  if (!arg4) {
    checkIEEE754(arg0, undefined, tmp2, 4, undefined, undefined);
  }
  read2.write(arg0, +arg1, arg2 >>> 0, arg3, 23, 4);
  return (arg2 >>> 0) + 4;
}
function writeDouble(arg0, arg1, arg2, arg3, arg4) {
  if (!arg4) {
    checkIEEE754(arg0, undefined, tmp2, 8, undefined, undefined);
  }
  read2.write(arg0, +arg1, arg2 >>> 0, arg3, 52, 8);
  return (arg2 >>> 0) + 8;
}
class E {
  constructor(arg0, arg1, arg2) {
    closure_0 = global;
    closure_1 = require;
    closure_10[global] = ((arg0) => {
      class NodeError {
        constructor() {
          tmp2 = closure_2_3(this, NodeError);
          tmp3 = closure_2_13(this, NodeError);
          obj = { value: null, writable: true, configurable: true };
          obj.value = closure_1_1(...arguments);
          definePropertyResult = Object.defineProperty(tmp3, "message", obj);
          tmp3.name = "" + tmp3.name + " [" + NodeError + "]";
          delete tmp.name;
          return tmp3;
        }
      }
      closure_1_7(NodeError, arg0);
      let obj = {
        key: "code",
        get() {
          return NodeError;
        },
        set(value) {
          const obj = { configurable: true, enumerable: true, value, writable: true };
          Object.defineProperty(this, "code", obj);
        }
      };
      const items = [obj, ];
      obj = {
        key: "toString",
        value: function toString() {
          return "" + this.name + " [" + NodeError + "]: " + this.message;
        }
      };
      items[1] = obj;
      return closure_1_4(NodeError, items);
    })(importDefault);
    return;
  }
}
function addNumericalSeparator(StringResult) {
  let num = 0;
  if (StringResult[0] === "-") {
    num = 1;
  }
  const sum = num + 4;
  let str = "";
  let diff = length;
  let str2 = "";
  let tmp3 = length;
  if (StringResult.length >= sum) {
    do {
      let _HermesInternal = HermesInternal;
      str = "_" + StringResult.slice(diff - 3, diff) + ``;
      diff = diff - 3;
      str2 = str;
      tmp3 = diff;
    } while (diff >= sum);
  }
  return "" + StringResult.slice(0, tmp3) + str2;
}
function checkBounds(arg0, arg1, arg2) {
  validateNumber(arg1, "offset");
  if (arg0[arg1] === undefined) {
    boundsError(arg1, arg0.length - 8);
  }
}
function checkIntBI(arg0, BigIntResult, arg2, arg3, arg4, arg5) {
  if (arg0 <= arg2) {
    if (arg0 >= BigIntResult) {
      checkBounds(arg3, arg4, 7);
    }
  }
  let str = "";
  if (typeof BigIntResult === "bigint") {
    str = "n";
  }
  if (7 > 3) {
    if (BigIntResult !== 0) {
      const _BigInt = BigInt;
      if (BigIntResult !== BigInt(0)) {
        const _HermesInternal2 = HermesInternal;
        const diff = 63;
        const _HermesInternal3 = HermesInternal;
        const combined = ">= -(2" + str + " ** " + diff + str + ") and < 2 ** ";
        let sum = combined + "" + diff + str;
      }
    }
    const _HermesInternal4 = HermesInternal;
    sum = ">= 0" + str + " and < 2" + str + " ** " + 64 + str;
  } else {
    const _HermesInternal = HermesInternal;
    sum = ">= " + BigIntResult + str + " and <= " + arg2 + str;
  }
  const eRR_OUT_OF_RANGE = new constants.ERR_OUT_OF_RANGE("value", sum, arg0);
  throw eRR_OUT_OF_RANGE;
}
function validateNumber(num, offset) {
  if (typeof num !== "number") {
    const ERR_INVALID_ARG_TYPE = constants.ERR_INVALID_ARG_TYPE;
    const prototype = ERR_INVALID_ARG_TYPE.prototype;
    const eRR_INVALID_ARG_TYPE = new ERR_INVALID_ARG_TYPE(offset, "number", num);
    throw eRR_INVALID_ARG_TYPE;
  }
}
function boundsError(arg0, arg1) {
  if (Math.floor(arg0) !== arg0) {
    validateNumber(arg0, undefined);
    const ERR_OUT_OF_RANGE2 = constants.ERR_OUT_OF_RANGE;
    const prototype3 = ERR_OUT_OF_RANGE2.prototype;
    const eRR_OUT_OF_RANGE2 = new ERR_OUT_OF_RANGE2("offset", "an integer", arg0);
    throw eRR_OUT_OF_RANGE2;
  } else if (arg1 < 0) {
    const ERR_BUFFER_OUT_OF_BOUNDS = constants.ERR_BUFFER_OUT_OF_BOUNDS;
    const prototype2 = ERR_BUFFER_OUT_OF_BOUNDS.prototype;
    const eRR_BUFFER_OUT_OF_BOUNDS = new ERR_BUFFER_OUT_OF_BOUNDS();
    throw eRR_BUFFER_OUT_OF_BOUNDS;
  } else {
    const ERR_OUT_OF_RANGE = constants.ERR_OUT_OF_RANGE;
    const _HermesInternal = HermesInternal;
    const prototype = ERR_OUT_OF_RANGE.prototype;
    const eRR_OUT_OF_RANGE = new ERR_OUT_OF_RANGE("offset", ">= " + 0 + " and <= " + arg1, arg0);
    throw eRR_OUT_OF_RANGE;
  }
}
function base64clean(byteLength) {
  let result;
  const str = byteLength.split("=")[0];
  const replaced = byteLength.split("=")[0].trim().replace(closure_11, "");
  if (replaced.length < 2) {
    return "";
  } else {
    let tmp = replaced;
    let tmp2 = replaced;
    if (replaced.length % 4 !== 0) {
      do {
        let text = `${tmp}=`;
        tmp = text;
        tmp2 = text;
        result = `${tmp}=`.length % 4;
      } while (result !== 0);
    }
    return tmp2;
  }
  const str2 = byteLength.split("=")[0].trim();
}
function utf8ToBytes(byteLength, arg1) {
  let _Infinity = arg1;
  if (!arg1) {
    _Infinity = Infinity;
  }
  const items = [];
  let tmp2 = null;
  let num = 0;
  if (0 < byteLength.length) {
    while (true) {
      let charCodeAtResult = byteLength.charCodeAt(num);
      let tmp4 = _Infinity;
      let tmp5 = tmp2;
      let tmp6 = num;
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          if (tmp2) {
            if (charCodeAtResult < 56320) {
              let diff = _Infinity - 3;
              let tmp11 = charCodeAtResult;
              let tmp10 = diff;
              if (diff > -1) {
                let arr = items.push(239, 191, 189);
                tmp10 = diff;
                tmp11 = charCodeAtResult;
              }
            } else {
              let sum = (tmp2 - 55296 << 10 | charCodeAtResult - 56320) + 65536;
              let tmp7 = _Infinity;
            }
            if (sum < 128) {
              let diff1 = tmp7 - 1;
              if (diff1 >= 0) {
                arr = items.push(sum);
                tmp10 = diff1;
                tmp11 = null;
              }
            } else if (sum < 2048) {
              let diff2 = tmp7 - 2;
              if (diff2 >= 0) {
                let arr1 = items.push(sum >> 6 | 192, sum & 63 | 128);
                tmp10 = diff2;
                tmp11 = null;
              }
            } else if (sum < 65536) {
              let diff3 = tmp7 - 3;
              if (diff3 >= 0) {
                let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, sum & 63 | 128);
                tmp10 = diff3;
                tmp11 = null;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp7 - 4;
              if (diff4 >= 0) {
                let tmp30 = items;
                let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, sum & 63 | 128);
                tmp10 = diff4;
                tmp11 = null;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = _Infinity - 3;
            tmp10 = diff5;
            tmp11 = tmp2;
            if (diff5 > -1) {
              let arr4 = items.push(239, 191, 189);
              tmp10 = diff5;
              tmp11 = tmp2;
            }
          } else {
            tmp10 = _Infinity;
            tmp11 = charCodeAtResult;
            if (num + 1 === length) {
              let diff6 = _Infinity - 3;
              tmp11 = tmp2;
              tmp10 = diff6;
              if (diff6 > -1) {
                let arr5 = items.push(239, 191, 189);
                tmp10 = diff6;
                tmp11 = tmp2;
              }
            }
          }
          num = num + 1;
          _Infinity = tmp10;
          tmp2 = tmp11;
        }
      }
      tmp7 = _Infinity;
      sum = charCodeAtResult;
      if (tmp2) {
        let diff7 = _Infinity - 3;
        tmp7 = diff7;
        sum = charCodeAtResult;
        if (diff7 > -1) {
          let arr6 = items.push(239, 191, 189);
          tmp7 = diff7;
          sum = charCodeAtResult;
        }
      }
    }
    const _Error = Error;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
}
function asciiToBytes(byteLength) {
  let length;
  const items = [];
  let num = 0;
  if (0 < byteLength.length) {
    do {
      let arr = items.push(byteLength.charCodeAt(num) & 255);
      num = num + 1;
      length = byteLength.length;
    } while (num < length);
  }
  return items;
}
function utf16leToBytes(byteLength, arg1) {
  let tmp = arg1;
  const items = [];
  let num = 0;
  if (0 < byteLength.length) {
    const diff = tmp - 2;
    while (diff >= 0) {
      let charCodeAtResult = byteLength.charCodeAt(num);
      let tmp5 = charCodeAtResult >> 8;
      let arr = items.push(charCodeAtResult % 256);
      arr = items.push(tmp5);
      num = num + 1;
      tmp = diff;
      if (num >= byteLength.length) {
        break;
      }
    }
  }
  return items;
}
function base64ToBytes(byteLength) {
  return getLens.toByteArray(base64clean(byteLength));
}
function blitBuffer(arg0, self, arg2, length) {
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    num = num2;
    while (num2 + arg2 < self.length) {
      num = num2;
      if (num2 >= arg0.length) {
        break;
      } else {
        self[num2 + arg2] = arg0[num2];
        num2 = num2 + 1;
        num = num2;
        if (num2 >= length) {
          break;
        }
      }
    }
  }
  return num;
}
function isInstance(buffer, Uint8Array) {
  let tmp = buffer instanceof Uint8Array;
  if (!tmp) {
    tmp = buffer != null && buffer.constructor != null && buffer.constructor.name != null && buffer.constructor.name === Uint8Array.name;
    const tmp3 = buffer != null && buffer.constructor != null && buffer.constructor.name != null && buffer.constructor.name === Uint8Array.name;
  }
  return tmp;
}
function numberIsNaN(length) {
  return length !== length;
}
function defineBigIntMethod(arg0) {
  let tmp = arg0;
  if (typeof BigInt === "undefined") {
    tmp = BufferBigIntNotDefined;
  }
  return tmp;
}
function BufferBigIntNotDefined() {
  const error = new Error("BigInt not supported");
  throw error;
}
let forResult = null;
if (typeof Symbol === "function") {
  let _Symbol = Symbol;
  forResult = null;
  if (typeof Symbol.for === "function") {
    let _Symbol2 = Symbol;
    forResult = Symbol.for("nodejs.util.inspect.custom");
  }
}
let c8 = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
  try {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(1);
    const obj = {
      foo() {
          return 42;
        }
    };
    const _Object = Object;
    const _Uint8Array2 = Uint8Array;
    Object.setPrototypeOf(obj, Uint8Array.prototype);
    const _Object2 = Object;
    Object.setPrototypeOf(uint8Array, obj);
    return uint8Array.foo() === 42;
  } catch (err) {
    return false;
  }
})();
if (!Buffer.TYPED_ARRAY_SUPPORT) {
  const _console = console;
  if (typeof console !== "undefined") {
    const _console2 = console;
    if (typeof console.error === "function") {
      const _console3 = console;
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
  }
}
let obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.buffer;
    }
  }
};
Object.defineProperty(Buffer.prototype, "parent", obj);
obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.byteOffset;
    }
  }
};
Object.defineProperty(Buffer.prototype, "offset", obj);
Buffer.poolSize = 8192;
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
if (forResult) {
  Buffer.prototype[forResult] = Buffer.prototype.inspect;
}
let c9 = 4096;
function readUIntLE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkOffset(tmp, tmp2, self.length);
  }
  let tmp5 = self[tmp];
  let num = 1;
  let num2 = 256;
  let tmp6 = tmp5;
  if (1 < arg1 >>> 0) {
    const sum = tmp5 + self[tmp + num] * num2;
    const sum1 = num + 1;
    tmp6 = sum;
    while (sum1 < tmp2) {
      num2 = num2 * 256;
      tmp5 = sum;
      num = sum1;
      tmp6 = sum;
      if (!num2) {
        break;
      }
    }
  }
  return tmp6;
}
Buffer.prototype.readUIntLE = readUIntLE;
Buffer.prototype.readUintLE = readUIntLE;
function readUIntBE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkOffset(tmp, tmp2, self.length);
  }
  let diff = tmp2 - 1;
  let tmp6 = self[tmp + diff];
  let num = 256;
  let tmp7 = tmp6;
  if (diff > 0) {
    const diff1 = diff - 1;
    const sum = tmp6 + self[tmp + diff1] * num;
    tmp7 = sum;
    while (diff1 > 0) {
      num = num * 256;
      diff = diff1;
      tmp6 = sum;
      tmp7 = sum;
      if (!num) {
        break;
      }
    }
  }
  return tmp7;
}
Buffer.prototype.readUIntBE = readUIntBE;
Buffer.prototype.readUintBE = readUIntBE;
function readUInt8(arg0, arg1) {
  const self = this;
  if (!arg1) {
    checkOffset(tmp, 1, self.length);
  }
  return self[arg0 >>> 0];
}
Buffer.prototype.readUInt8 = readUInt8;
Buffer.prototype.readUint8 = readUInt8;
function readUInt16LE(arg0, arg1) {
  const self = this;
  if (!arg1) {
    checkOffset(tmp, 2, self.length);
  }
  return self[arg0 >>> 0] | self[(arg0 >>> 0) + 1] << 8;
}
Buffer.prototype.readUInt16LE = readUInt16LE;
Buffer.prototype.readUint16LE = readUInt16LE;
function readUInt16BE(arg0) {
  const self = this;
  if (!arg1) {
    checkOffset(tmp, 2, self.length);
  }
  return self[arg0 >>> 0] << 8 | self[(arg0 >>> 0) + 1];
}
Buffer.prototype.readUInt16BE = readUInt16BE;
Buffer.prototype.readUint16BE = readUInt16BE;
function readUInt32LE(arg0, arg1) {
  const self = this;
  if (!arg1) {
    checkOffset(tmp, 4, self.length);
  }
  return (self[arg0 >>> 0] | self[(arg0 >>> 0) + 1] << 8 | self[(arg0 >>> 0) + 2] << 16) + self[(arg0 >>> 0) + 3] * 16777216;
}
Buffer.prototype.readUInt32LE = readUInt32LE;
Buffer.prototype.readUint32LE = readUInt32LE;
function readUInt32BE(arg0, arg1) {
  const self = this;
  if (!arg1) {
    checkOffset(tmp, 4, self.length);
  }
  return self[arg0 >>> 0] * 16777216 + (self[(arg0 >>> 0) + 1] << 16 | self[(arg0 >>> 0) + 2] << 8 | self[(arg0 >>> 0) + 3]);
}
Buffer.prototype.readUInt32BE = readUInt32BE;
Buffer.prototype.readUint32BE = readUInt32BE;
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(arg0) {
  const self = this;
  validateNumber(arg0 >>> 0, "offset");
  if (this[arg0 >>> 0] === undefined) {
    boundsError(tmp, self.length - 8);
  }
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const sum5 = self[sum3] + self[sum4] * 256;
  const result = self[sum4 + 1] * 65536;
  const result1 = tmp4 * 16777216;
  const BigIntResult = BigInt(this[arg0 >>> 0] + self[sum] * 256 + self[sum1] * 65536 + self[sum2] * 16777216);
  return BigIntResult + (BigInt(sum5 + result + result1) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(arg0) {
  const self = this;
  validateNumber(arg0 >>> 0, "offset");
  if (this[arg0 >>> 0] === undefined) {
    boundsError(tmp, self.length - 8);
  }
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const sum5 = self[sum3] * 16777216 + self[sum4] * 65536 + self[sum4 + 1] * 256 + tmp4;
  const BigIntResult = BigInt(this[arg0 >>> 0] * 16777216 + self[sum] * 65536 + self[sum1] * 256 + self[sum2]);
  return (BigInt(this[arg0 >>> 0] * 16777216 + self[sum] * 65536 + self[sum1] * 256 + self[sum2]) << BigInt(32)) + BigInt(sum5);
});
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(arg0) {
  const self = this;
  validateNumber(arg0 >>> 0, "offset");
  if (this[arg0 >>> 0] === undefined) {
    boundsError(tmp, self.length - 8);
  }
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const BigIntResult = BigInt(self[(arg0 >>> 0) + 4] + self[(arg0 >>> 0) + 5] * 256 + self[(arg0 >>> 0) + 6] * 65536 + (this[(arg0 >>> 0) + 7] << 24));
  return (BigInt(self[(arg0 >>> 0) + 4] + self[(arg0 >>> 0) + 5] * 256 + self[(arg0 >>> 0) + 6] * 65536 + (this[(arg0 >>> 0) + 7] << 24)) << BigInt(32)) + BigInt(this[arg0 >>> 0] + self[sum] * 256 + self[sum1] * 65536 + self[sum1 + 1] * 16777216);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(arg0) {
  const self = this;
  validateNumber(arg0 >>> 0, "offset");
  if (this[arg0 >>> 0] === undefined) {
    boundsError(tmp, self.length - 8);
  }
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const BigIntResult = BigInt((this[arg0 >>> 0] << 24) + self[sum] * 65536 + self[sum1] * 256 + self[sum2]);
  return (BigInt((this[arg0 >>> 0] << 24) + self[sum] * 65536 + self[sum1] * 256 + self[sum2]) << BigInt(32)) + BigInt(self[sum3] * 16777216 + self[sum4] * 65536 + self[sum4 + 1] * 256 + this[(arg0 >>> 0) + 7]);
});
function writeUIntLE(arg0, arg1, arg2, arg3) {
  const self = this;
  if (!arg3) {
    const _Math = Math;
    checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
  }
  self[arg1 >>> 0] = +arg0 & 255;
  let num5 = 1;
  let num6 = 256;
  if (1 < arg2 >>> 0) {
    self[tmp2 + num5] = tmp / num6 & 255;
    const sum = num5 + 1;
    while (sum < tmp3) {
      num6 = num6 * 256;
      num5 = sum;
      if (!num6) {
        break;
      }
    }
  }
  return (arg1 >>> 0) + (arg2 >>> 0);
}
Buffer.prototype.writeUIntLE = writeUIntLE;
Buffer.prototype.writeUintLE = writeUIntLE;
function writeUIntBE(arg0, arg1, arg2, arg3) {
  const self = this;
  if (!arg3) {
    const _Math = Math;
    checkInt(self, tmp, tmp2, tmp3, Math.pow(2, 8 * tmp3) - 1, 0);
  }
  const diff = tmp3 - 1;
  self[(arg1 >>> 0) + diff] = +arg0 & 255;
  let diff1 = diff - 1;
  let num5 = 256;
  if (diff1 >= 0) {
    self[tmp2 + diff1] = tmp / num5 & 255;
    const diff2 = diff1 - 1;
    while (diff2 >= 0) {
      num5 = num5 * 256;
      diff1 = diff2;
      if (!num5) {
        break;
      }
    }
  }
  return (arg1 >>> 0) + (arg2 >>> 0);
}
Buffer.prototype.writeUIntBE = writeUIntBE;
Buffer.prototype.writeUintBE = writeUIntBE;
function writeUInt8(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkInt(self, tmp, tmp2, 1, 255, 0);
  }
  self[arg1 >>> 0] = +arg0 & 255;
  return (arg1 >>> 0) + 1;
}
Buffer.prototype.writeUInt8 = writeUInt8;
Buffer.prototype.writeUint8 = writeUInt8;
function writeUInt16LE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkInt(self, tmp, tmp2, 2, 65535, 0);
  }
  self[arg1 >>> 0] = +arg0 & 255;
  self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
  return (arg1 >>> 0) + 2;
}
Buffer.prototype.writeUInt16LE = writeUInt16LE;
Buffer.prototype.writeUint16LE = writeUInt16LE;
function writeUInt16BE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkInt(self, tmp, tmp2, 2, 65535, 0);
  }
  self[arg1 >>> 0] = +arg0 >>> 8;
  self[(arg1 >>> 0) + 1] = +arg0 & 255;
  return (arg1 >>> 0) + 2;
}
Buffer.prototype.writeUInt16BE = writeUInt16BE;
Buffer.prototype.writeUint16BE = writeUInt16BE;
function writeUInt32LE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkInt(self, tmp, tmp2, 4, 4294967295, 0);
  }
  self[(arg1 >>> 0) + 3] = +arg0 >>> 24;
  self[(arg1 >>> 0) + 2] = +arg0 >>> 16;
  self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
  self[arg1 >>> 0] = +arg0 & 255;
  return (arg1 >>> 0) + 4;
}
Buffer.prototype.writeUInt32LE = writeUInt32LE;
Buffer.prototype.writeUint32LE = writeUInt32LE;
function writeUInt32BE(arg0, arg1, arg2) {
  const self = this;
  if (!arg2) {
    checkInt(self, tmp, tmp2, 4, 4294967295, 0);
  }
  self[arg1 >>> 0] = +arg0 >>> 24;
  self[(arg1 >>> 0) + 1] = +arg0 >>> 16;
  self[(arg1 >>> 0) + 2] = +arg0 >>> 8;
  self[(arg1 >>> 0) + 3] = +arg0 & 255;
  return (arg1 >>> 0) + 4;
}
Buffer.prototype.writeUInt32BE = writeUInt32BE;
Buffer.prototype.writeUint32BE = writeUInt32BE;
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  return wrtBigUInt64LE(this, arg0, num, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  return wrtBigUInt64BE(this, arg0, num, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  return wrtBigUInt64LE(this, arg0, num, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(arg0) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  return wrtBigUInt64BE(this, arg0, num, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
let closure_10 = {};
E("ERR_BUFFER_OUT_OF_BOUNDS", (arg0) => {
  if (arg0) {
    const _HermesInternal = HermesInternal;
    return "" + arg0 + " is outside of buffer bounds";
  } else {
    return "Attempt to access memory outside buffer bounds";
  }
}, RangeError);
E("ERR_INVALID_ARG_TYPE", (arg0, arg1) => "The \"" + arg0 + "\" argument must be of type number. Received type " + typeof arg1, TypeError);
E("ERR_OUT_OF_RANGE", (arg0, arg1, _days) => {
  const combined = "The value of \"" + arg0 + "\" is out of range.";
  if (Number.isInteger(_days)) {
    const _Math = Math;
    if (Math.abs(_days) > 4294967296) {
      const _String = String;
      let text = addNumericalSeparator(String(_days));
    }
    const _HermesInternal = HermesInternal;
    return combined + " It must be " + arg1 + ". Received " + text;
  }
  text = _days;
  if (typeof _days === "bigint") {
    const _String2 = String;
    const StringResult = String(_days);
    const _BigInt3 = BigInt;
    const BigIntResult = BigInt(2);
    const _BigInt4 = BigInt;
    if (_days > BigIntResult ** BigInt(32)) {
      let tmp5 = addNumericalSeparator(StringResult);
    } else {
      const _BigInt = BigInt;
      const BigIntResult1 = BigInt(2);
      const _BigInt2 = BigInt;
      tmp5 = StringResult;
    }
    text = `${tmp5}n`;
  }
}, RangeError);
const re11 = /[^+/0-9A-Za-z-_]/g;
const array = new Array(256);
let num = 0;
let num2 = 0;
do {
  do {
    array[num * 16 + num2] = "0123456789abcdef"[num] + "0123456789abcdef"[num2];
    num2 = num2 + 1;
  } while (num2 < 16);
  num = num + 1;
} while (num < 16);

export { Buffer };
export function SlowBuffer(arg0) {
  let num = arg0;
  if (+arg0 != arg0) {
    num = 0;
  }
  return Buffer.alloc(+num);
}
export const INSPECT_MAX_BYTES = 50;
export const kMaxLength = 2147483647;
