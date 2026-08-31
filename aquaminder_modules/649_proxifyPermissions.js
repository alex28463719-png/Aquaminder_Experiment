// Module ID: 649
// Function ID: 6920
// Name: proxifyPermissions
// Dependencies: []

// Module 649 (proxifyPermissions)
arg5.proxifyPermissions = undefined;
arg5.uniq = undefined;
arg5.proxifyPermissions = function proxifyPermissions(ios) {
  closure_0 = ios;
  const proxy = new Proxy({}, {
    get(arg0, str) {
      let combined = str;
      if (typeof str === "string") {
        const _HermesInternal = HermesInternal;
        combined = "" + closure_0 + ".permission." + str;
      }
      return combined;
    }
  });
  return proxy;
};
arg5.uniq = function uniq(arr) {
  closure_0 = arr;
  return arr.filter((arg0, arg1) => {
    let tmp = arg0 != null;
    if (tmp) {
      tmp = arr.indexOf(arg0) === arg1;
    }
    return tmp;
  });
};
