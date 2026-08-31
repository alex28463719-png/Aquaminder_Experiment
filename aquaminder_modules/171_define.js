// Module ID: 171
// Function ID: 1782
// Name: define
// Dependencies: []

// Module 171 (define)
let fn = obj;
fn = (arg0) => {
  closure_0 = arg0;
  function define(arg0, arg1, value) {
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, arg1, obj);
    return arg0[arg1];
  }
  let tmp = define;
  let define2 = define;
  function wrap(arg0, arg1, arg2, arg3) {
    let tmp = arg1;
    let items = arg3;
    if (!arg1) {
      tmp = Generator;
    }
    let obj = Object.create(tmp.prototype);
    let tmp4 = Context;
    if (!items) {
      items = [];
    }
    tmp4 = new tmp4(items);
    obj = { value: makeInvokeMethod(arg0, arg2, tmp4) };
    fn(obj, "_invoke", obj);
    return obj;
  }
  function tryCatch(call, iterator, key10018) {
    try {
      let obj = { type: "normal", arg: call.call(iterator, key10018) };
      return obj;
    } catch (tmp2) {
      obj = { type: "throw", arg: tmp2 };
      return obj;
    }
  }
  class Generator {
    constructor() {
      return;
    }
  }
  class GeneratorFunction {
    constructor() {
      return;
    }
  }
  class GeneratorFunctionPrototype {
    constructor() {
      return;
    }
  }
  function defineIteratorMethods(prototype) {
    closure_0 = prototype;
    const items = ["next", "throw", "return"];
    const item = items.forEach((arg0) => {
      closure_0 = arg0;
      closure_1_11(closure_0, arg0, function(arg0) {
        return this._invoke(closure_0, arg0);
      });
    });
  }
  class AsyncIterator {
    constructor(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      invoke = function invoke(arg0, arg1, arg2, arg3) {
        const table = arg2;
        const tmp = closure_1_13(table[arg0], table, arg1);
        if (tmp.type === "throw") {
          arg3(tmp.arg);
        } else {
          const iter = tmp.arg;
          const value = iter.value;
          if (value) {
            if (typeof value === "object") {
              if (_Promise.call(value, "__await")) {
                return _Promise.resolve(value.__await).then((arg0) => {
                  closure_1_3("next", arg0, closure_0, closure_1);
                }, (arg0) => {
                  closure_1_3("throw", arg0, closure_0, closure_1);
                });
              }
            }
          }
          return _Promise.resolve(value).then((value) => {
            iter.value = value;
            callback(iter);
          }, (arg0) => closure_1_3("throw", arg0, closure_0, closure_1));
        }
      };
      obj = {
        value: function enqueue(arg0, arg1) {
              closure_0 = arg0;
              closure_1 = arg1;
              function callInvokeWithMethodAndArg() {
                return new closure_1((arg0, arg1) => {
                  closure_2_3(closure_1_0, closure_1_1, arg0, arg1);
                });
              }
              if (nextPromise) {
                nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
              } else {
                nextPromise = callInvokeWithMethodAndArg();
              }
              return nextPromise;
            }
      };
      tmp = f1811(this, "_invoke", obj);
      return;
    }
  }
  function makeInvokeMethod(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = suspendedStart;
    return function invoke(method, arg1) {
      if (closure_3 === closure_1_7) {
        const _Error = Error;
        const error = new Error("Generator is already running");
        throw error;
      } else if (closure_3 === closure_1_8) {
        if (method === "throw") {
          throw arg1;
        } else {
          return closure_1_24();
        }
      } else {
        closure_2.method = method;
        closure_2.arg = arg1;
        while (true) {
          let tmp = closure_2;
          let delegate = closure_2.delegate;
          let tmp2 = tmp24;
          if (delegate) {
            let tmp3 = closure_1_19;
            let tmp4 = closure_2;
            let tmp5 = closure_1_19(delegate, closure_2);
            tmp2 = tmp5;
            if (tmp5) {
              let tmp29 = closure_1_9;
              tmp24 = tmp5;
              if (tmp5 === closure_1_9) {
                continue;
              } else {
                return tmp5;
              }
            }
          }
          let tmp6 = closure_2;
          if (closure_2.method === "next") {
            let tmp17 = closure_2;
            let arg = closure_2.arg;
            closure_2._sent = arg;
            closure_2.sent = arg;
          } else {
            let tmp7 = closure_2;
            if (closure_2.method === "throw") {
              let tmp11 = closure_3;
              let tmp12 = closure_1_5;
              if (closure_3 === closure_1_5) {
                break;
              } else {
                let tmp13 = closure_2;
                let dispatchExceptionResult = closure_2.dispatchException(closure_2.arg);
              }
            } else {
              let tmp8 = closure_2;
              if (closure_2.method === "return") {
                let tmp9 = closure_2;
                let abruptResult = closure_2.abrupt("return", closure_2.arg);
              }
            }
          }
          let tmp18 = closure_1_7;
          closure_3 = closure_1_7;
          let tmp19 = closure_1_13;
          let tmp20 = closure_0;
          let tmp21 = closure_1;
          let tmp22 = closure_2;
          let tmp23 = closure_1_13(closure_0, closure_1, closure_2);
          if (tmp23.type === "normal") {
            let tmp26 = closure_2;
            closure_3 = closure_2.done ? closure_1_8 : closure_1_6;
            let tmp27 = closure_1_9;
            tmp24 = tmp2;
            let tmp28 = tmp23;
            if (tmp23.arg === closure_1_9) {
              continue;
            } else {
              let obj = { value: tmp23.arg };
              let tmp42 = closure_2;
              obj.done = closure_2.done;
              return obj;
            }
          } else {
            tmp24 = tmp2;
            let tmp25 = tmp23;
            if (tmp23.type !== "throw") {
              continue;
            } else {
              let tmp39 = closure_1_8;
              closure_3 = closure_1_8;
              let tmp40 = closure_2;
              closure_2.method = "throw";
              closure_2.arg = tmp23.arg;
              tmp24 = tmp2;
              let tmp41 = tmp23;
              continue;
            }
            continue;
          }
          continue;
        }
        closure_3 = closure_1_8;
        throw closure_2.arg;
      }
    };
  }
  function maybeInvokeDelegate(iterator, method) {
    method = method.method;
    if (iterator.iterator[method] === undefined) {
      method.delegate = null;
      if (method === "throw") {
        if (iterator.iterator.return) {
          method.method = "return";
          method.arg = undefined;
          maybeInvokeDelegate(iterator, method);
          if (method.method === "throw") {
            return closure_9;
          }
        }
      }
      if (method !== "return") {
        method.method = "throw";
        const _TypeError2 = TypeError;
        const typeError = new TypeError("The iterator does not provide a '" + method + "' method");
        method.arg = typeError;
      }
      return closure_9;
    } else {
      const tmp24 = tryCatch(tmp, iterator.iterator, method.arg);
      if (tmp24.type === "throw") {
        method.method = "throw";
        method.arg = tmp24.arg;
        method.delegate = null;
        return closure_9;
      } else if (tmp24.arg) {
        if (iter.done) {
          method[iterator.resultName] = iter.value;
          method.next = iterator.nextLoc;
          if (method.method !== "return") {
            method.method = "next";
            method.arg = undefined;
          }
          method.delegate = null;
          return closure_9;
        } else {
          return iter;
        }
      } else {
        method.method = "throw";
        const _TypeError = TypeError;
        const typeError1 = new TypeError("iterator result is not an object");
        method.arg = typeError1;
        method.delegate = null;
        return closure_9;
      }
    }
  }
  function pushTryEntry(tryLoc) {
    const obj = { tryLoc: tryLoc[0] };
    if (1 in tryLoc) {
      obj.catchLoc = tryLoc[1];
    }
    if (2 in tryLoc) {
      obj.finallyLoc = tryLoc[2];
      obj.afterLoc = tryLoc[3];
    }
    const tryEntries = this.tryEntries;
    tryEntries.push(obj);
  }
  function resetTryEntry(completion) {
    const tmp2 = completion.completion || {};
    tmp2.type = "normal";
    delete tmp.arg;
    completion.completion = tmp2;
  }
  class Context {
    constructor(arg0) {
      items = [];
      items[0] = { tryLoc: "root" };
      this.tryEntries = items;
      item = arg0.forEach(pushTryEntry, this);
      resetResult = this.reset(true);
      return;
    }
  }
  function values(next) {
    closure_0 = next;
    if (next) {
      let obj = next[closure_3];
      if (obj) {
        return obj.call(next);
      } else if (typeof next.next === "function") {
        return next;
      } else {
        const _isNaN = isNaN;
        if (!isNaN(next.length)) {
          c1 = -1;
          next = function next() {
            const sum = sum1 + 1;
            sum1 = sum;
            if (sum < next.length) {
              while (!v1.call(next, sum1)) {
                let tmp5 = sum1;
                sum1 = sum1 + 1;
                let tmp7 = next;
              }
              next.value = next[sum1];
              next.done = false;
              return next;
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
          next.next = next;
          return next;
        }
      }
    }
    obj = { next: doneResult };
    return obj;
  }
  function doneResult() {
    return { value: undefined, done: true };
  }
  const hasOwnProperty = prototype.hasOwnProperty;
  let obj = hasOwnProperty;
  let fn = Object.defineProperty;
  if (!fn) {
    fn = (arg0, arg1, value) => {
      arg0[arg1] = value.value;
    };
  }
  let tmp4 = typeof Symbol === "function" ? Symbol : {};
  closure_3 = tmp5;
  const toStringTag = tmp4.toStringTag;
  let str = toStringTag;
  if (!toStringTag) {
    str = "@@toStringTag";
  }
  try {
    tmp({}, "");
    arg0.wrap = wrap;
    const suspendedStart = "suspendedStart";
    const suspendedYield = "suspendedYield";
    const executing = "executing";
    const completed = "completed";
    closure_9 = {};
    obj = {};
    let tmp11 = obj;
    tmp(obj, tmp6, function() {
      return this;
    });
    let _Object = Object;
    class Generator {
      constructor() {
        return;
      }
    }
    class GeneratorFunction {
      constructor() {
        return;
      }
    }
    if (tmp15) {
      if (tmp18 !== prototype) {
        if (obj.call(tmp18, tmp6)) {
          tmp11 = tmp17;
        }
      }
    }
    class GeneratorFunctionPrototype {
      constructor() {
        return;
      }
    }
    obj = Object.create(tmp11);
    Generator.prototype = obj;
    GeneratorFunctionPrototype.prototype = obj;
    class AsyncIterator {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        invoke = function invoke(arg0, arg1, arg2, arg3) {
          const table = arg2;
          const tmp = closure_1_13(table[arg0], table, arg1);
          if (tmp.type === "throw") {
            arg3(tmp.arg);
          } else {
            const iter = tmp.arg;
            const value = iter.value;
            if (value) {
              if (typeof value === "object") {
                if (_Promise.call(value, "__await")) {
                  return _Promise.resolve(value.__await).then((arg0) => {
                    closure_1_3("next", arg0, closure_0, closure_1);
                  }, (arg0) => {
                    closure_1_3("throw", arg0, closure_0, closure_1);
                  });
                }
              }
            }
            return _Promise.resolve(value).then((value) => {
              iter.value = value;
              callback(iter);
            }, (arg0) => closure_1_3("throw", arg0, closure_0, closure_1));
          }
        };
        obj = {
          value: function enqueue(arg0, arg1) {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  function callInvokeWithMethodAndArg() {
                    return new closure_1((arg0, arg1) => {
                      closure_2_3(closure_1_0, closure_1_1, arg0, arg1);
                    });
                  }
                  if (nextPromise) {
                    nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                  } else {
                    nextPromise = callInvokeWithMethodAndArg();
                  }
                  return nextPromise;
                }
        };
        tmp = f1811(this, "_invoke", obj);
        return;
      }
    }
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    const obj1 = { value: GeneratorFunctionPrototype, configurable: true };
    class Context {
      constructor(arg0) {
        items = [];
        items[0] = { tryLoc: "root" };
        this.tryEntries = items;
        item = arg0.forEach(pushTryEntry, this);
        resetResult = this.reset(true);
        return;
      }
    }
    tmp3(obj, "constructor", obj1);
    const obj2 = { value: GeneratorFunction, configurable: true };
    tmp3(GeneratorFunctionPrototype, "constructor", obj2);
    GeneratorFunction.displayName = tmp(GeneratorFunctionPrototype, str, "GeneratorFunction");
    arg0.isGeneratorFunction = (fn) => {
      let flag = false;
      if (typeof fn === "function" && fn.constructor) {
        let tmp3 = tmp === GeneratorFunction;
        if (!tmp3) {
          tmp3 = (tmp.displayName || tmp.name) === "GeneratorFunction";
          const tmp4 = tmp.displayName || tmp.name;
        }
        flag = tmp3;
      }
      return flag;
    };
    arg0.mark = (arg0) => {
      if (Object.setPrototypeOf) {
        const _Object = Object;
        Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
      } else {
        arg0.__proto__ = GeneratorFunctionPrototype;
        define2(arg0, "GeneratorFunction", "GeneratorFunction");
      }
      arg0.prototype = Object.create(closure_10);
      return arg0;
    };
    arg0.awrap = (__await) => ({ __await });
    const result = defineIteratorMethods(AsyncIterator.prototype);
    tmp(AsyncIterator.prototype, tmp7, function() {
      return this;
    });
    arg0.AsyncIterator = AsyncIterator;
    arg0.async = (arg0, arg1, arg2, arg3, arg4) => {
      let _Promise = arg4;
      if (arg4 === undefined) {
        _Promise = Promise;
      }
      const iter = new AsyncIterator(wrap(arg0, arg1, arg2, arg3), _Promise);
      let nextPromise = iter;
      if (!iter.isGeneratorFunction(arg1)) {
        nextPromise = iter.next().then((done) => {
          if (done.done) {
            let nextResult = done.value;
          } else {
            nextResult = iter.next();
          }
          return nextResult;
        });
        let nextResult = iter.next();
      }
      return nextPromise;
    };
    const result1 = defineIteratorMethods(obj);
    tmp(obj, str, "Generator");
    tmp(obj, tmp6, function() {
      return this;
    });
    tmp(obj, "toString", () => "[object Generator]");
    arg0.keys = (arg0) => {
      const ObjectResult = Object(arg0);
      closure_0 = ObjectResult;
      const items = [];
      for (const key10008 in ObjectResult) {
        let tmp3 = key10008;
        let arr = items.push(key10008);
        continue;
      }
      const reversed = items.reverse();
      function next() {
        if (items.length) {
          const arr = items.pop();
          while (!(arr in closure_0)) {
            let tmp4 = items;
          }
          next.value = arr;
          next.done = false;
          return next;
        }
        next.done = true;
        return next;
      }
      return next;
    };
    arg0.values = values;
    const obj3 = {
      constructor: tmp2,
      reset(arg0) {
          const self = this;
          this.prev = 0;
          this.next = 0;
          this._sent = undefined;
          this.sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          const tryEntries = this.tryEntries;
          const item = tryEntries.forEach(resetTryEntry);
          if (!arg0) {
            for (const key10016 in self) {
              let tmp5 = key10016;
              if (key10016.charAt(0) !== "t") {
                continue;
              } else {
                let tmp4 = hasOwnProperty;
                if (!hasOwnProperty.call(self, key10016)) {
                  continue;
                } else {
                  let _isNaN = isNaN;
                  if (isNaN(+key10016.slice(1))) {
                    continue;
                  } else {
                    self[key10016] = undefined;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        },
      stop() {
          this.done = true;
          const completion = this.tryEntries[0].completion;
          if (completion.type === "throw") {
            throw completion.arg;
          } else {
            return tmp.rval;
          }
        },
      dispatchException(arg0) {
          let tmp2;
          let tmp3;
          const self = this;
          closure_0 = arg0;
          function handle(catchLoc, arg1) {
            completion.type = "throw";
            completion.arg = closure_0;
            self.next = catchLoc;
            if (arg1) {
              self.method = "next";
              self.arg = undefined;
            }
            return arg1;
          }
          if (this.done) {
            throw arg0;
          } else {
            let diff = self.tryEntries.length - 1;
            if (diff >= 0) {
              const completion = tmp4.completion;
              let tmp6 = tmp2;
              let tmp7 = tmp3;
              while (self.tryEntries[diff].tryLoc !== "root") {
                if (tmp4.tryLoc <= self.prev) {
                  let tmp13 = self;
                  let callResult = self.call(tmp4, "catchLoc");
                  let tmp15 = self;
                  let callResult1 = self.call(tmp4, "finallyLoc");
                  if (callResult) {
                    if (callResult1) {
                      if (self.prev < tmp4.catchLoc) {
                        let flag2 = true;
                        return handle(tmp4.catchLoc, true);
                      } else {
                        tmp6 = callResult;
                        tmp7 = callResult1;
                        if (self.prev < tmp4.finallyLoc) {
                          return handle(tmp4.finallyLoc);
                        }
                      }
                    }
                  }
                  if (callResult) {
                    tmp6 = callResult;
                    tmp7 = callResult1;
                    if (self.prev < tmp4.catchLoc) {
                      let flag = true;
                      return handle(tmp4.catchLoc, true);
                    }
                  } else if (callResult1) {
                    tmp6 = callResult;
                    tmp7 = callResult1;
                    if (self.prev < tmp4.finallyLoc) {
                      return handle(tmp4.finallyLoc);
                    }
                  } else {
                    let tmp8 = globalThis;
                    let _Error = Error;
                    let tmp9 = new.target;
                    let str4 = "try statement without catch or finally";
                    let tmp10 = new.target;
                    let error = new Error("try statement without catch or finally");
                    let tmp12 = error;
                    throw error;
                  }
                }
                diff = diff - 1;
                tmp2 = tmp6;
                tmp3 = tmp7;
              }
              return handle("end");
            }
          }
        },
      abrupt(type, arg1) {
          const self = this;
          let diff = this.tryEntries.length - 1;
          let tmp2;
          if (diff >= 0) {
            while (true) {
              let tmp3 = self.tryEntries[diff];
              let tmp4 = diff;
              if (tmp3.tryLoc <= self.prev) {
                let tmp5 = hasOwnProperty;
                if (hasOwnProperty.call(tmp3, "finallyLoc")) {
                  tmp2 = tmp3;
                  if (self.prev < tmp3.finallyLoc) {
                    break;
                  }
                }
                break;
              }
              diff = diff - 1;
              if (diff < 0) {
                break;
              }
            }
          }
          let tmp6 = tmp2;
          if (tmp2) {
            if (type === "break") {
              tmp6 = tmp2;
              if (tmp2.tryLoc <= arg1) {
                tmp6 = tmp2;
                if (arg1 <= tmp2.finallyLoc) {
                  tmp6 = null;
                }
              }
            } else {
              tmp6 = tmp2;
            }
          }
          const tmp7 = tmp6 ? tmp6.completion : {};
          tmp7.type = type;
          tmp7.arg = arg1;
          if (tmp6) {
            self.method = "next";
            self.next = tmp6.finallyLoc;
            return closure_9;
          } else {
            return self.complete(tmp7);
          }
        },
      complete(completion, afterLoc) {
          const self = this;
          if (completion.type === "throw") {
            throw completion.arg;
          } else {
            if (completion.type !== "break") {
              if (completion.type !== "continue") {
                if (completion.type === "return") {
                  const arg = completion.arg;
                  self.arg = arg;
                  self.rval = arg;
                  self.method = "return";
                  self.next = "end";
                } else if (completion.type === "normal") {
                  if (afterLoc) {
                    self.next = afterLoc;
                  }
                }
              }
              return closure_9;
            }
            self.next = completion.arg;
          }
        },
      finish(arg0) {
          const self = this;
          let diff = this.tryEntries.length - 1;
          if (diff >= 0) {
            while (self.tryEntries[diff].finallyLoc !== arg0) {
              diff = diff - 1;
            }
            self.complete(self.tryEntries[diff].completion, self.tryEntries[diff].afterLoc);
            resetTryEntry(self.tryEntries[diff]);
            return closure_9;
          }
        },
      catch: function _catch(arg0) {
          let diff = this.tryEntries.length - 1;
          if (diff >= 0) {
            while (this.tryEntries[diff].tryLoc !== arg0) {
              diff = diff - 1;
            }
            const completion = tmp2.completion;
            let arg;
            if (completion.type === "throw") {
              arg = completion.arg;
              resetTryEntry(tmp2);
            }
            return arg;
          }
          const error = new Error("illegal catch attempt");
          throw error;
        },
      delegateYield(arg0, resultName, nextLoc) {
          this.delegate = { iterator: values(arg0), resultName, nextLoc };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return closure_9;
        }
    };
    tmp2.prototype = obj3;
    return arg0;
  } catch (err) {
    define2 = function define(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
      return arg2;
    };
    tmp = define2;
  }
};
fn(typeof obj === "object" ? fn.exports : {});
