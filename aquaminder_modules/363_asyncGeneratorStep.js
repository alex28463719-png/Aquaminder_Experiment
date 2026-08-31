// Module ID: 363
// Function ID: 4548
// Name: asyncGeneratorStep
// Dependencies: []

// Module 363 (asyncGeneratorStep)
function asyncGeneratorStep(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  try {
    const iter = arg0[arg5](arg6);
    const value = iter.value;
    if (iter.done) {
      arg1(value);
    } else {
      const resolved = Promise.resolve(value);
      resolved.then(arg3, arg4);
    }
  } catch (tmp8) {
    tmp(tmp8);
  }
}

export default function _asyncToGenerator(arg0) {
  closure_0 = arg0;
  return function() {
    const self = this;
    closure_1 = arguments;
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function _next(arg0) {
        callback(closure_2, callback, closure_1, _next, _throw, "next", arg0);
      }
      function _throw(arg0) {
        callback(closure_2, callback, closure_1, _next, _throw, "throw", arg0);
      }
      closure_2 = self.apply(closure_0, closure_1);
      _next(undefined);
    });
  };
};
