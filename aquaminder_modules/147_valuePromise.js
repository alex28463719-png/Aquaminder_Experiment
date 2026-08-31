// Module ID: 147
// Function ID: 1599
// Name: valuePromise
// Dependencies: [148]

// Module 147 (valuePromise)
import noop from "noop" /* 148 */;
import closure_6 from "module_0" /* 0 */;

function valuePromise(_z) {
  let tmp = noop;
  tmp = new tmp(noop._D);
  tmp._y = 1;
  tmp._z = _z;
  return tmp;
}
function onSettledFulfill(value) {
  return { status: "fulfilled", value };
}
function onSettledReject(reason) {
  return { status: "rejected", reason };
}
function mapAllSettled(promise) {
  if (promise) {
    if (typeof promise === "object") {
      if (promise instanceof noop) {
        if (promise.then === noop.prototype.then) {
          return promise.then(onSettledFulfill, onSettledReject);
        }
      }
      const then = promise.then;
      if (typeof then === "function") {
        let tmp8 = noop;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(then.bind(promise));
        return tmp8.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return onSettledFulfill(promise);
}
function getAggregateError(errors) {
  if (typeof globalThis.AggregateError === "function") {
    const prototype2 = globalThis.AggregateError.prototype;
    const aggregateError = new globalThis.AggregateError(errors, "All promises were rejected");
    return aggregateError;
  } else {
    const _Error = Error;
    const error = new Error("All promises were rejected");
    error.name = "AggregateError";
    error.errors = errors;
    return error;
  }
}
let closure_2 = valuePromise(true);
let closure_3 = valuePromise(false);
let closure_4 = valuePromise(null);
let closure_5 = valuePromise(undefined);
let closure_7 = valuePromise("");
noop.resolve = (self) => {
  if (self instanceof noop) {
    return self;
  } else if (self === null) {
    return closure_4;
  } else if (self === undefined) {
    return closure_5;
  } else if (self === true) {
    return closure_2;
  } else if (self === false) {
    return closure_3;
  } else if (self === 0) {
    return closure_6;
  } else if (self === "") {
    return closure_7;
  } else {
    if (typeof self === "object") {
      try {
        const then = self.then;
        if (typeof then === "function") {
          let tmp10 = noop;
          const prototype = tmp10.prototype;
          tmp10 = new tmp10(obj.bind(self));
          return tmp10;
        }
        obj = then;
      } catch (tmp16) {
        require = tmp16;
        let tmp19 = require(dependencyMap[tmp2]);
        const prototype2 = tmp19.prototype;
        tmp19 = new tmp19((arg0, arg1) => {
          arg1(closure_0);
        });
        return tmp19;
      }
    }
    return valuePromise(self);
  }
};
function iterableToArray(closure_1) {
  if (typeof Array.from === "function") {
    const _Array2 = Array;
    iterableToArray = Array.from;
    const _Array3 = Array;
    return Array.from(closure_1);
  } else {
    iterableToArray = function iterableToArray(closure_1) {
      return slice.call(closure_1);
    };
    const _Array = Array;
    return slice.call(closure_1);
  }
}
noop.all = (arg0) => {
  const _require = iterableToArray(arg0);
  let tmp = _require(148);
  tmp = new tmp((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    function res(arg0, _z) {
      let _y;
      const callback = arg0;
      if (_z) {
        if (typeof _z === "object") {
          if (_z instanceof callback(closure_2_1[0])) {
            if (_z.then === callback(closure_2_1[0]).prototype.then) {
              let tmp18 = _z;
              let promise2 = _z;
              if (_z._y === 3) {
                do {
                  _z = tmp18._z;
                  tmp18 = _z;
                  promise2 = _z;
                  _y = _z._y;
                } while (_y === 3);
              }
              if (promise2._y === 1) {
                return res(arg0, promise2._z);
              } else {
                if (promise2._y === 2) {
                  callback2(promise2._z);
                }
                promise2.then((arg0) => {
                  closure_1_3(closure_0, arg0);
                }, callback2);
              }
            }
          }
          const then = _z.then;
          if (typeof then === "function") {
            let tmp12 = callback(closure_2_1[0]);
            const prototype = tmp12.prototype;
            tmp12 = new tmp12(then.bind(_z));
            tmp12.then((arg0) => {
              closure_1_3(closure_0, arg0);
            }, callback2);
          }
        }
      }
      callback[arg0] = _z;
      diff = diff - 1;
      if (diff === 0) {
        callback(callback);
      }
    }
    if (closure_0.length === 0) {
      return arg0([]);
    } else {
      let length = closure_0.length;
      let num = 0;
      if (0 < closure_0.length) {
        do {
          let tmp2 = closure_0;
          let resResult = res(num, closure_0[num]);
          num = num + 1;
          length = closure_0.length;
        } while (num < length);
      }
    }
  });
  return tmp;
};
noop.allSettled = (arg0) => {
  const obj = noop;
  return obj.all(iterableToArray(arg0).map(mapAllSettled));
};
noop.reject = (arg0) => {
  const _require = arg0;
  let tmp = _require(148);
  tmp = new tmp((arg0, arg1) => {
    arg1(closure_0);
  });
  return tmp;
};
noop.race = (arg0) => {
  const _require = arg0;
  let tmp = _require(148);
  tmp = new tmp((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const item = closure_1_8(closure_0).forEach((arg0) => {
      const obj = callback(closure_2_1[0]);
      callback(closure_2_1[0]).resolve(arg0).then(callback, closure_1);
    });
  });
  return tmp;
};
noop.prototype.catch = function(arg0) {
  return this.then(null, arg0);
};
noop.any = function promiseAny(arg0) {
  const _require = arg0;
  let tmp = _require(148);
  tmp = new tmp((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    function resolveOnce(arg0) {
      if (!c3) {
        c3 = true;
        callback(arg0);
      }
    }
    function rejectionCheck(arg0) {
      if (items.length === arr.length) {
        callback2(closure_2_13(items));
      }
    }
    const arr = closure_1_8(closure_0);
    c3 = false;
    const items = [];
    if (arr.length === 0) {
      arg1(closure_1_13(items));
    } else {
      const item = arr.forEach((arg0) => {
        const obj = callback(closure_2_1[0]);
        callback(closure_2_1[0]).resolve(arg0).then(resolveOnce, rejectionCheck);
      });
    }
  });
  return tmp;
};

export default noop;
