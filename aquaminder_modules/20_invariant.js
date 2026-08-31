// Module ID: 20
// Function ID: 236
// Name: invariant
// Dependencies: []

// Module 20 (invariant)

export default function invariant(arg0, str) {
  if (!arg0) {
    if (str === undefined) {
      const _Error = Error;
      let error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      const items = [arg2, arg3, arg4, arg5, arg6, arg7];
      c1 = 0;
      const _Error2 = Error;
      const error1 = new Error(str.replace(/%s/g, () => {
        closure_1 = tmp + 1;
        return items[+closure_1];
      }));
      error = error1;
      error1.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
