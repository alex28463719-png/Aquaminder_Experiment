// Module ID: 665
// Function ID: 7582
// Name: AsyncGenerator
// Dependencies: [666]

// Module 665 (AsyncGenerator)
class AsyncGenerator {
  constructor(arg0) {
    closure_0 = global;
    resume = function resume(key, arg1) {
      dependencyMap = key;
      try {
        const iter = dependencyMap[key](arg1);
        let value = iter.value;
        closure_2 = value;
        const tmp6 = value instanceof dependencyMap(closure_1_1[0]);
        closure_3 = tmp6;
        let _Promise = Promise;
        let then = Promise.resolve;
        if (tmp6) {
          let v = value.v;
        } else {
          v = value;
        }
        _Promise = then(v);
        then = _Promise.then;
        then((done) => {
          value = done;
          if (callback) {
            let str = "next";
            if ("return" === key) {
              str = "return";
            }
            if (value.k) {
              if (!done.done) {
                value = key[str](done).value;
              }
            }
            callback(str, done);
          }
          let str3 = "normal";
          if (iter.done) {
            str3 = "return";
          }
          closure_1_4(str3, value);
        }, (arg0) => {
          callback("throw", arg0);
        });
      } catch (tmp9) {
        settle("throw", tmp9);
      }
    };
    settle = function settle(arg0, value) {
      if ("return" === arg0) {
        let obj = { value, done: true };
        next.resolve(obj);
      } else if ("throw" === arg0) {
        next.reject(value);
      } else {
        obj = { value, done: false };
        next.resolve(obj);
      }
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        c2 = null;
      }
    };
    this._invoke = (arg0, arg1) => {
      closure_0 = arg0;
      return new Promise((resolve, reject) => {
        obj = { key: closure_0, arg: obj, resolve, reject, next: null };
        if (obj) {
          obj.next = obj;
        } else {
          closure_1_3(closure_0, obj);
        }
      });
    };
    if ("function" !== typeof global.return) {
      tmp.return = undefined;
    }
    return;
  }
  next(arg0) {
    return this._invoke("next", global);
  }
  throw(arg0) {
    return this._invoke("throw", global);
  }
  return(arg0) {
    return this._invoke("return", global);
  }
}
let str = "function" === typeof Symbol;
if (str) {
  const _Symbol = Symbol;
  str = Symbol.asyncIterator;
}
if (!str) {
  str = "@@asyncIterator";
}
AsyncGenerator.prototype[str] = function() {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  closure_0 = arg0;
  return function() {
    return new closure_1_2(callback(...arguments));
  };
};
