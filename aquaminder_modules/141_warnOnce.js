// Module ID: 141
// Function ID: 1566
// Name: warnOnce
// Dependencies: []

// Module 141 (warnOnce)
arg5.default = undefined;
let closure_0 = {};
arg5.default = function warnOnce(arg0, arg1) {
  if (!table[arg0]) {
    const _console = console;
    console.warn(arg1);
    table[arg0] = true;
  }
};
