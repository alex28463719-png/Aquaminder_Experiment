// Module ID: 574
// Function ID: 6293
// Name: typeOf
// Dependencies: []

// Module 574 (typeOf)
function typeOf($$typeof) {
  if ("object" === typeof $$typeof) {
    if (null !== $$typeof) {
      $$typeof = $$typeof.$$typeof;
      if (closure_0 === $$typeof) {
        const type = $$typeof.type;
        if (forResult2 !== type) {
          if (forResult4 !== type) {
            if (forResult3 !== type) {
              if (forResult9 !== type) {
                if (forResult10 !== type) {
                  if (closure_12 !== type) {
                    let $$typeof2 = type;
                    if (type) {
                      $$typeof2 = type.$$typeof;
                    }
                    if (forResult7 !== $$typeof2) {
                      if (forResult8 !== $$typeof2) {
                        if (forResult12 !== $$typeof2) {
                          if (forResult11 !== $$typeof2) {
                            return forResult6 === $$typeof2 ? $$typeof2 : $$typeof;
                          }
                        }
                      }
                    }
                    return $$typeof2;
                  }
                }
              }
            }
          }
        }
        return type;
      } else if (forResult1 === $$typeof) {
        return $$typeof;
      }
    }
  }
}
const forResult = Symbol.for("react.transitional.element");
const forResult1 = Symbol.for("react.portal");
const forResult2 = Symbol.for("react.fragment");
const forResult3 = Symbol.for("react.strict_mode");
const forResult4 = Symbol.for("react.profiler");
Symbol.for("react.provider");
const forResult6 = Symbol.for("react.consumer");
const forResult7 = Symbol.for("react.context");
const forResult8 = Symbol.for("react.forward_ref");
const forResult9 = Symbol.for("react.suspense");
const forResult10 = Symbol.for("react.suspense_list");
const forResult11 = Symbol.for("react.memo");
const forResult12 = Symbol.for("react.lazy");
let closure_12 = Symbol.for("react.view_transition");
let closure_13 = Symbol.for("react.client.reference");
arg5.ContextConsumer = forResult6;
arg5.ContextProvider = forResult7;
arg5.Element = forResult;
arg5.ForwardRef = forResult8;
arg5.Fragment = forResult2;
arg5.Lazy = forResult12;
arg5.Memo = forResult11;
arg5.Portal = forResult1;
arg5.Profiler = forResult4;
arg5.StrictMode = forResult3;
arg5.Suspense = forResult9;
arg5.SuspenseList = forResult10;
arg5.isContextConsumer = ($$typeof) => typeOf($$typeof) === forResult6;
arg5.isContextProvider = ($$typeof) => typeOf($$typeof) === forResult7;
arg5.isElement = ($$typeof) => {
  let tmp = "object" === typeof $$typeof;
  if (tmp) {
    tmp = null !== $$typeof;
  }
  if (tmp) {
    tmp = $$typeof.$$typeof === closure_0;
  }
  return tmp;
};
arg5.isForwardRef = ($$typeof) => typeOf($$typeof) === forResult8;
arg5.isFragment = ($$typeof) => typeOf($$typeof) === forResult2;
arg5.isLazy = ($$typeof) => typeOf($$typeof) === forResult12;
arg5.isMemo = ($$typeof) => typeOf($$typeof) === forResult11;
arg5.isPortal = ($$typeof) => typeOf($$typeof) === forResult1;
arg5.isProfiler = ($$typeof) => typeOf($$typeof) === forResult4;
arg5.isStrictMode = ($$typeof) => typeOf($$typeof) === forResult3;
arg5.isSuspense = ($$typeof) => typeOf($$typeof) === forResult9;
arg5.isSuspenseList = ($$typeof) => typeOf($$typeof) === forResult10;
arg5.isValidElementType = ($$typeof) => {
  if ("string" !== typeof $$typeof) {
    if ("function" !== tmp) {
      if ($$typeof !== forResult2) {
        if ($$typeof !== forResult4) {
          if ($$typeof !== forResult3) {
            if ($$typeof !== forResult9) {
              if ($$typeof !== forResult10) {
                let flag = false;
                if ("object" === tmp) {
                  flag = false;
                  if (null !== $$typeof) {
                    if ($$typeof.$$typeof !== forResult12) {
                      if ($$typeof.$$typeof !== forResult11) {
                        if ($$typeof.$$typeof !== forResult7) {
                          if ($$typeof.$$typeof !== forResult6) {
                            if ($$typeof.$$typeof !== forResult8) {
                              if ($$typeof.$$typeof !== closure_13) {
                                flag = false;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              return flag;
            }
          }
        }
      }
    }
  }
  flag = true;
};
arg5.typeOf = typeOf;
