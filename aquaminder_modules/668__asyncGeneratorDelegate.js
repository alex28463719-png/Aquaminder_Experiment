// Module ID: 668
// Function ID: 7600
// Name: _asyncGeneratorDelegate
// Dependencies: [666]

// Module 668 (_asyncGeneratorDelegate)

export default function _asyncGeneratorDelegate(arg0) {
  closure_0 = arg0;
  function pump(next, arg1) {
    const callback = next;
    let promise = arg1;
    promise = true;
    promise = new Promise((arg0) => {
      arg0(next[next](promise));
    });
    const obj = { done: false };
    let tmp2 = callback(table[0]);
    tmp2 = new tmp2(promise, 1);
    obj.value = tmp2;
    return obj;
  }
  let obj = {};
  c1 = false;
  let str = "undefined" !== typeof Symbol;
  if (str) {
    const _Symbol = Symbol;
    str = Symbol.iterator;
  }
  if (!str) {
    str = "@@iterator";
  }
  obj[str] = function() {
    return this;
  };
  obj.next = (arg0) => {
    if (c1) {
      c1 = false;
      let tmp2 = arg0;
    } else {
      tmp2 = pump("next", arg0);
    }
    return tmp2;
  };
  if ("function" === typeof arg0.throw) {
    obj.throw = (arg0) => {
      if (c1) {
        c1 = false;
        throw arg0;
      } else {
        return pump("throw", arg0);
      }
    };
  }
  if ("function" === typeof arg0.return) {
    obj.return = (arg0) => {
      if (c1) {
        c1 = false;
        let tmp2 = arg0;
      } else {
        tmp2 = pump("return", arg0);
      }
      return tmp2;
    };
  }
  return obj;
};
