// Module ID: 148
// Function ID: 1626
// Name: noop
// Dependencies: []

// Module 148 (noop)
function noop() {

}
function getThen(_z) {
  try {
    return _z.then;
  } catch (tmp) {
    c0 = tmp;
    return closure_1;
  }
}
function tryCallOne(arg0, arg1) {
  try {
    return arg0(arg1);
  } catch (tmp3) {
    c0 = tmp3;
    return closure_1;
  }
}
function tryCallTwo(arg0, arg1, arg2) {
  try {
    arg0(arg1, arg2);
  } catch (tmp5) {
    c0 = tmp5;
    return closure_1;
  }
}
class Promise {
  constructor(arg0) {
    self = this;
    if (typeof this !== "object") {
      tmp10 = globalThis;
      _TypeError2 = TypeError;
      prototype2 = TypeError.prototype;
      tmp11 = new.target;
      str3 = "Promises must be constructed via new";
      tmp12 = new.target;
      typeError = new TypeError("Promises must be constructed via new");
      tmp14 = typeError;
      throw typeError;
    } else {
      str = "function";
      if (typeof global !== "function") {
        tmp5 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp6 = new.target;
        str2 = "Promise constructor's argument is not a function";
        tmp7 = new.target;
        typeError1 = new TypeError("Promise constructor's argument is not a function");
        tmp9 = typeError1;
        throw typeError1;
      } else {
        num = 0;
        self._x = 0;
        self._y = 0;
        tmp = null;
        self._z = null;
        self._A = null;
        tmp2 = noop;
        if (global === noop) {
          return;
        } else {
          tmp3 = doResolve;
          tmp4 = doResolve(global, self);
          return;
        }
      }
    }
  }
  then(arg0, arg1) {
    self = this;
    if (this.constructor !== Promise) {
      tmp17 = safeThen;
      return safeThen(self, global, require);
    } else {
      tmp = Promise;
      tmp2 = noop;
      prototype = Promise.prototype;
      tmp3 = new.target;
      tmp4 = new.target;
      tmp5 = new Promise(noop);
      tmp6 = tmp5;
      tmp7 = handle;
      tmp8 = Handler;
      prototype2 = Handler.prototype;
      tmp9 = new.target;
      tmp10 = new.target;
      tmp11 = global;
      tmp12 = require;
      tmp13 = tmp5;
      tmp14 = new Handler(global, require, tmp5);
      tmp15 = tmp14;
      tmp16 = handle(self, tmp14);
      return tmp5;
    }
  }
}
function safeThen(self, arg1, arg2) {
  closure_0 = self;
  closure_1 = arg1;
  closure_2 = arg2;
  const constructor = new self.constructor((arg0, arg1) => {
    const promise = new closure_1_6(closure_2);
    promise.then(arg0, arg1);
    closure_1_8(closure_0, new closure_1_13(closure_1, closure_2, promise));
  });
  return constructor;
}
function handle(_y, _A) {
  let tmp = _y;
  let tmp2 = _y;
  if (_y._y === 3) {
    do {
      let _z = tmp._z;
      tmp = _z;
      tmp2 = _z;
      _y = _z._y;
    } while (_y === 3);
  }
  if (Promise._B) {
    Promise._B(tmp2);
  }
  if (tmp2._y === 0) {
    if (tmp2._x === 0) {
      tmp2._x = 1;
      tmp2._A = _A;
    } else if (tmp2._x === 1) {
      tmp2._x = 2;
      const items = [tmp2._A, _A];
      tmp2._A = items;
    } else {
      _A = tmp2._A;
      _A.push(_A);
    }
  } else {
    handleResolved(tmp2, _A);
  }
}
function handleResolved(_y, _A) {
  closure_0 = _y;
  closure_1 = _A;
  setImmediate(() => {
    if (_y._y === 1) {
      let onRejected = _A.onFulfilled;
    } else {
      onRejected = _A.onRejected;
    }
    if (onRejected === null) {
      if (_y._y === 1) {
        closure_1_10(_A.promise, _y._z);
      } else {
        closure_1_11(_A.promise, _y._z);
      }
    } else {
      const tmp5 = closure_1_4(onRejected, _y._z);
      if (tmp5 === _A) {
        closure_1_11(_A.promise, _y);
      } else {
        closure_1_10(_A.promise, tmp5);
      }
    }
  });
}
function resolve(self, _z) {
  if (_z === self) {
    const _TypeError = TypeError;
    const typeError = new TypeError("A promise cannot be resolved with itself.");
    reject(self, typeError);
  } else {
    if (_z) {
      if (typeof _z === "object") {
        const obj = getThen(_z);
        if (obj === closure_1) {
          reject(self, c0);
        } else {
          if (obj === self.then) {
            if (_z instanceof Promise) {
              self._y = 3;
              self._z = _z;
              finale(self);
            }
          }
          if (typeof obj === "function") {
            doResolve(obj.bind(_z), self);
          }
        }
      }
    }
    self._y = 1;
    self._z = _z;
    finale(self);
  }
}
function reject(_x, _z) {
  _x._y = 2;
  _x._z = _z;
  if (Promise._C) {
    Promise._C(_x, _z);
  }
  finale(_x);
}
function finale(_x) {
  let length;
  if (_x._x === 1) {
    handle(_x, _x._A);
    _x._A = null;
  }
  if (_x._x === 2) {
    let num = 0;
    if (0 < _x._A.length) {
      do {
        let tmp4 = handle;
        let tmp5 = handle(_x, _x._A[num]);
        num = num + 1;
        length = _x._A.length;
      } while (num < length);
    }
    _x._A = null;
  }
}
function Handler(fn, fn2, promise) {
  const self = this;
  let tmp = null;
  if (typeof fn === "function") {
    tmp = fn;
  }
  self.onFulfilled = tmp;
  let tmp2 = null;
  if (typeof fn2 === "function") {
    tmp2 = fn2;
  }
  self.onRejected = tmp2;
  self.promise = promise;
}
function doResolve(noop, self) {
  closure_0 = self;
  c1 = false;
  if (!c1) {
    if (tmp === c1) {
      c1 = true;
      reject(self, closure_0);
    }
  }
}
let c0 = null;
let closure_1 = {};
Promise._B = null;
Promise._C = null;
Promise._D = noop;

export default Promise;
