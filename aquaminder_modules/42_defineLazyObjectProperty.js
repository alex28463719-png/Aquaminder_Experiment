// Module ID: 42
// Function ID: 354
// Name: defineLazyObjectProperty
// Dependencies: []

// Module 42 (defineLazyObjectProperty)
arg5.default = function defineLazyObjectProperty(arg0, arg1, get) {
  closure_0 = arg0;
  closure_1 = arg1;
  function setValue(value) {
    closure_5 = value;
    c6 = true;
    Object.defineProperty(closure_0, closure_1, { value, configurable: true, enumerable: closure_3, writable: closure_4 });
  }
  get = get.get;
  closure_3 = tmp;
  closure_4 = get.writable !== false;
  c6 = false;
  Object.defineProperty(arg0, arg1, {
    get: function getValue() {
      if (!c6) {
        c6 = true;
        setValue(get());
      }
      return closure_5;
    },
    set: setValue,
    configurable: true,
    enumerable: get.enumerable !== false
  });
};
