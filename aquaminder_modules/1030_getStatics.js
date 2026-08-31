// Module ID: 1030
// Function ID: 10896
// Name: getStatics
// Dependencies: [1031]

// Module 1030 (getStatics)
import z from "z" /* 1031 */;

function getStatics(arg0) {
  obj = z;
  if (obj.isMemo(arg0)) {
    return obj;
  } else {
    return obj[arg0.$$typeof] || closure_2;
  }
}
function hoistNonReactStatics(arg0, str, arg2) {
  if (typeof str !== "string") {
    if (closure_11) {
      const tmp3 = getPrototypeOf(str);
      if (tmp3) {
        if (tmp3 !== closure_11) {
          hoistNonReactStatics(arg0, tmp3, arg2);
        }
      }
    }
    obj = getOwnPropertyNames(str);
    let combined = obj;
    if (getOwnPropertySymbols) {
      combined = obj.concat(getOwnPropertySymbols(str));
    }
    const tmp15 = getStatics(arg0);
    const tmp17 = getStatics(str);
    let num = 0;
    if (0 < combined.length) {
      if (!table[combined[num]]) {
        if (!arg2) {
          if (!tmp17) {
            if (!tmp15) {
              const tmp28 = getOwnPropertyDescriptor(str, tmp19);
              try {
                defineProperty(arg0, tmp19, tmp28);
              } catch (err) {
              }
            }
          }
        }
      }
      num = num + 1;
    }
  }
  return arg0;
}
let closure_2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
let closure_3 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
let obj = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
obj = {};
obj[z.ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
obj[z.Memo] = obj;
let closure_11 = Object.prototype;

export default hoistNonReactStatics;
