// Module ID: 548
// Function ID: 6077
// Name: customAlphabet
// Dependencies: []

// Module 548 (customAlphabet)
arg5.customAlphabet = undefined;
arg5.nanoid = undefined;
arg5.customAlphabet = function customAlphabet(arg0) {
  closure_0 = arg0;
  let num = 21;
  if (arguments.length > 1) {
    num = 21;
    if (arguments[1] !== undefined) {
      num = arguments[1];
    }
  }
  return () => {
    let tmp6;
    if (arguments.length > 0) {
      if (arguments[0] !== undefined) {
        let first = arguments[0];
      }
      let diff = tmp2 - 1;
      let str = "";
      let str2 = "";
      if (first | 0) {
        do {
          let tmp5 = length;
          let _Math = Math;
          str = `${closure_0[Math.random(Math) * closure_0.length | 0]}`;
          tmp6 = +diff;
          diff = tmp6 - 1;
          str2 = str;
        } while (tmp6);
      }
      return str2;
    }
    first = num;
  };
};
arg5.nanoid = function nanoid() {
  let tmp3;
  let num = 21;
  if (arguments.length > 0) {
    num = 21;
    if (arguments[0] !== undefined) {
      num = arguments[0];
    }
  }
  let diff = tmp - 1;
  let str = "";
  let str2 = "";
  if (num | 0) {
    do {
      let _Math = Math;
      str = `${"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[Math.random(Math) * 64 | 0]}`;
      tmp3 = +diff;
      diff = tmp3 - 1;
      str2 = str;
    } while (tmp3);
  }
  return str2;
};
