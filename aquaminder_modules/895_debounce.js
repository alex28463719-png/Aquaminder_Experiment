// Module ID: 895
// Function ID: 9661
// Name: debounce
// Dependencies: []

// Module 895 (debounce)
arg5.debounce = function debounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    const self = this;
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      self.apply(self, array);
    }, array);
  };
};
