// Module ID: 120
// Function ID: 1370
// Name: getIteratorFn
// Dependencies: []

// Module 120 (getIteratorFn)
function getIteratorFn(iterable) {
  if (null !== iterable) {
    if ("object" === typeof iterable) {
      iterable = iterator;
      if (iterator) {
        iterable = iterable[iterator];
      }
      if (!iterable) {
        iterable = iterable[Symbol.iterator];
      }
      let tmp2 = null;
      if ("function" === typeof iterable) {
        tmp2 = iterable;
      }
      return tmp2;
    }
  }
  return null;
}
class Component {
  constructor(arg0, arg1, arg2) {
    tmp = arg2;
    this.props = arg0;
    this.context = arg1;
    this.refs = closure_10;
    if (!arg2) {
      tmp = closure_8;
    }
    this.updater = tmp;
    return;
  }
  setState(arg0, arg1) {
    self = this;
    tmp = typeof arg0;
    if ("object" !== tmp) {
      str = "function";
      if ("function" !== tmp) {
        tmp2 = null;
        if (null != arg0) {
          tmp4 = globalThis;
          _Error = Error;
          str2 = "takes an object of state variables to update or a function which returns an object of state variables.";
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }
    }
    updater = self.updater;
    enqueueSetStateResult = updater.enqueueSetState(self, arg0, arg1, "setState");
    return;
  }
  forceUpdate(arg0) {
    updater = this.updater;
    enqueueForceUpdateResult = updater.enqueueForceUpdate(this, arg0, "forceUpdate");
    return;
  }
}
class ComponentDummy {
  constructor() {
    return;
  }
}
class PureComponent {
  constructor(arg0, arg1, arg2) {
    tmp = arg2;
    this.props = arg0;
    this.context = arg1;
    this.refs = closure_10;
    if (!arg2) {
      tmp = closure_8;
    }
    this.updater = tmp;
    return;
  }
}
function ReactElement(type, key, arg2, arg3, arg4, props) {
  obj = { $$typeof: closure_0, type, key };
  let tmp = null;
  if (undefined !== props.ref) {
    tmp = ref;
  }
  obj.ref = tmp;
  obj.props = props;
  return obj;
}
function cloneAndReplaceKey(type, key) {
  return ReactElement(type.type, key, undefined, undefined, undefined, type.props);
}
function isValidElement(ItemSeparatorComponent) {
  let tmp = "object" === typeof ItemSeparatorComponent;
  if (tmp) {
    tmp = null !== ItemSeparatorComponent;
  }
  if (tmp) {
    tmp = ItemSeparatorComponent.$$typeof === closure_0;
  }
  return tmp;
}
function escape(str) {
  closure_0 = { "=": "=0", ":": "=2" };
  return "$" + str.replace(/[=:]/g, (arg0) => table[arg0]);
}
function getElementKey(value, arg1) {
  if ("object" === typeof value) {
    if (null !== value) {
      if (null != value.key) {
        let str = escape("" + value.key);
      }
      return str;
    }
  }
  str = arg1.toString(36);
}
function noop$1() {

}
function resolveThenable(status) {
  closure_0 = status;
  status = status.status;
  if ("fulfilled" === status) {
    return status.value;
  } else if ("rejected" === status) {
    throw status.reason;
  } else {
    if ("string" === typeof status.status) {
      status.then(noop$1, noop$1);
    } else {
      status.status = "pending";
      status.then((value) => {
        if ("pending" === status.status) {
          status.status = "fulfilled";
          status.value = value;
        }
      }, (reason) => {
        if ("pending" === status.status) {
          status.status = "rejected";
          status.reason = reason;
        }
      });
    }
    const status2 = status.status;
    if ("fulfilled" === status2) {
      return status.value;
    } else if ("rejected" === status2) {
      throw status.reason;
    } else {
      throw status;
    }
  }
}
function mapIntoArray(value, items, arg2, arg3, arg4) {
  let length;
  let tmp = value;
  if ("undefined" === typeof value) {
    tmp = null;
  }
  let flag = true;
  if (null !== tmp) {
    if ("bigint" !== tmp2) {
      if ("string" !== tmp2) {
        if ("number" !== tmp2) {
          flag = false;
          if ("object" === tmp2) {
            const $$typeof = tmp.$$typeof;
            flag = true;
            if (closure_0 !== $$typeof) {
              flag = true;
              if (closure_1 !== $$typeof) {
                flag = false;
                if (closure_6 === $$typeof) {
                  return mapIntoArray(tmp._init(tmp._payload), items, arg2, arg3, arg4);
                }
              }
            }
          }
        }
      }
    }
    flag = true;
  }
  if (flag) {
    const tmp35 = arg4(tmp);
    let str15 = arg3;
    if ("" === arg3) {
      str15 = `.${getElementKey(tmp, 0)}`;
    }
    if (isArray(tmp35)) {
      let str20 = "";
      if (null != str15) {
        str20 = `${str15.replace(closure_14, "$&/")}/`;
      }
      mapIntoArray(tmp35, items, str20, "", (arg0) => arg0);
    } else if (null != tmp35) {
      let tmp38Result = tmp35;
      if (isValidElement(tmp35)) {
        let str17 = "";
        if (null != tmp35.key) {
          if (!tmp) {
            const text = `${tmp35.key}`;
            str17 = `${`${tmp35.key}`.replace(closure_14, "$&/")}/`;
          } else {
            str17 = "";
          }
        }
        tmp38Result = cloneAndReplaceKey(tmp35, arg2 + str17 + str15);
        const tmp38 = cloneAndReplaceKey;
      }
      items.push(tmp38Result);
    }
    return 1;
  } else {
    let str6 = ".";
    if ("" !== arg3) {
      str6 = `${arg3}:`;
    }
    if (isArray(tmp)) {
      let num5 = 0;
      let num6 = 0;
      let num3 = 0;
      if (0 < tmp.length) {
        do {
          let tmp28 = tmp[num6];
          let tmp29 = getElementKey;
          let tmp30 = mapIntoArray;
          let tmp31 = tmp28;
          let tmp32 = items;
          let tmp33 = arg2;
          let tmp34 = arg4;
          num5 = num5 + mapIntoArray(tmp28, items, arg2, str6 + getElementKey(tmp28, num6), arg4);
          num6 = num6 + 1;
          num3 = num5;
          length = tmp.length;
        } while (num6 < length);
      }
    } else {
      obj = getIteratorFn(tmp);
      if ("function" === typeof obj) {
        const iter = obj.call(tmp);
        const iter2 = iter.next();
        let num = 0;
        let iter3 = iter2;
        let num2 = 0;
        num3 = 0;
        if (!iter2.done) {
          value = iter3.value;
          num2 = tmp22 + 1;
          num = num + mapIntoArray(value, items, arg2, str6 + getElementKey(value, tmp22), arg4);
          const iter4 = iter.next();
          iter3 = iter4;
          num3 = num;
        }
      } else {
        num3 = 0;
        if ("object" === tmp2) {
          if ("function" === typeof tmp.then) {
            return mapIntoArray(resolveThenable(tmp), items, arg2, arg3, arg4);
          } else {
            const _String = String;
            let StringResult = String(tmp);
            if ("[object Object]" === StringResult) {
              const _Object = Object;
              const keys = Object.keys(tmp);
              StringResult = `${"object with keys {" + obj2.join(", ")}}`;
            }
            throw Error("Objects are not valid as a React child (found: " + StringResult + "). If you meant to render a collection of children, use an array instead.");
          }
        }
      }
    }
    return num3;
  }
}
function mapChildren(children, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  if (null == children) {
    return children;
  } else {
    const items = [];
    c2 = 0;
    mapIntoArray(children, items, "", "", (key10018) => {
      closure_2 = tmp + 1;
      return callback.call(closure_1, key10018, +closure_2);
    });
    return items;
  }
}
function lazyInitializer(_status) {
  closure_0 = _status;
  if (-1 === _status._status) {
    const _resultResult = _status._result();
    _resultResult.then((_result) => {
      if (0 === _status._status) {
        _status._status = 1;
        _status._result = _result;
      }
    }, (_result) => {
      if (0 === _status._status) {
        _status._status = 2;
        _status._result = _result;
      }
    });
    if (-1 === _status._status) {
      _status._status = 0;
      _status._result = _resultResult;
    }
  }
  if (1 === _status._status) {
    return _status._result.default;
  } else {
    throw _status._result;
  }
}
function noop() {

}
let closure_0 = Symbol.for("react.transitional.element");
let closure_1 = Symbol.for("react.portal");
const forResult = Symbol.for("react.fragment");
const forResult1 = Symbol.for("react.strict_mode");
let closure_2 = Symbol.for("react.consumer");
let closure_3 = Symbol.for("react.context");
let closure_4 = Symbol.for("react.forward_ref");
const forResult2 = Symbol.for("react.profiler");
let closure_5 = Symbol.for("react.memo");
let closure_6 = Symbol.for("react.lazy");
let closure_8 = {
  isMounted() {
    return false;
  },
  enqueueForceUpdate() {

  },
  enqueueReplaceState() {

  },
  enqueueSetState() {

  }
};
let closure_10 = {};
Component.prototype.isReactComponent = {};
ComponentDummy.prototype = Component.prototype;
const componentDummy = new ComponentDummy();
PureComponent.prototype = componentDummy;
componentDummy.constructor = PureComponent;
let obj = assign(componentDummy, Component.prototype);
componentDummy.isPureReactComponent = true;
obj = { H: null, A: null, T: null, S: null };
const re14 = /\/+/g;
let closure_15 = "function" === typeof reportError ? reportError : ((message) => {
  if ("object" === typeof window) {
    const _window = window;
    if ("function" === typeof window.ErrorEvent) {
      const _window2 = window;
      obj = { bubbles: true, cancelable: true };
      if ("object" === typeof message) {
        if (null !== message) {
          if ("string" === typeof message.message) {
            const _String2 = String;
            let StringResult = String(message.message);
          }
          obj.message = StringResult;
          obj.error = message;
          const prototype = ErrorEvent.prototype;
          const errorEvent = new ErrorEvent("error", obj);
          const _window3 = window;
        }
      }
      const _String = String;
      StringResult = String(message);
    }
    const _console = console;
    console.error(message);
  }
  if ("object" === typeof process) {
    const _process = process;
    if ("function" === typeof process.emit) {
      const _process2 = process;
      process.emit("uncaughtException", message);
    }
  }
});
arg5.Children = {
  map: mapChildren,
  forEach(children) {
    closure_0 = arg1;
    mapChildren(children, function() {
      callback(...arguments);
    }, arg2);
  },
  count(children) {
    c0 = 0;
    mapChildren(children, () => {
      closure_0 = closure_0 + 1;
    });
    return c0;
  },
  toArray(children) {
    return mapChildren(children, (arg0) => arg0) || [];
  },
  only(children) {
    if (isValidElement(children)) {
      return children;
    } else {
      const _Error = Error;
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }
};
arg5.Component = Component;
arg5.Fragment = forResult;
arg5.Profiler = forResult2;
arg5.PureComponent = PureComponent;
arg5.StrictMode = forResult1;
arg5.Suspense = Symbol.for("react.suspense");
arg5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = obj;
arg5.act = () => {
  throw Error("act(...) is not supported in production builds of React.");
};
arg5.cache = (arg0) => {
  closure_0 = arg0;
  return () => callback(...arguments);
};
arg5.cloneElement = (props, ref, children) => {
  if (null !== props) {
    if (undefined !== props) {
      const tmp16 = assign({}, props.props);
      let key = props.key;
      let tmp3 = key;
      if (null != ref) {
        if (undefined !== ref.key) {
          key = `${ref.key}`;
        }
        tmp3 = key;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp3 = key;
          while (keys[tmp] !== undefined) {
            let tmp17 = tmp5;
            let tmp18 = hasOwnProperty;
            let tmp6 = !hasOwnProperty.call(ref, tmp5) || "key" === tmp5 || "__self" === tmp5 || "__source" === tmp5;
            if (!tmp6) {
              let tmp7 = "ref" === tmp5 && undefined === ref.ref;
              tmp6 = tmp7;
            }
            if (tmp6) {
              continue;
            } else {
              tmp16[tmp5] = ref[tmp5];
              continue;
            }
            continue;
          }
        }
      }
      const diff = arguments.length - 2;
      if (1 === diff) {
        tmp16.children = children;
      } else if (1 < diff) {
        const _Array = Array;
        const ArrayResult = Array(diff);
        let num3 = 0;
        if (0 < diff) {
          do {
            ArrayResult[num3] = arguments[num3 + 2];
            num3 = num3 + 1;
          } while (num3 < diff);
        }
        tmp16.children = ArrayResult;
      }
      return ReactElement(props.type, tmp3, undefined, undefined, undefined, tmp16);
    }
  }
  throw Error("The argument must be a React element, but you passed " + props + ".");
};
arg5.createContext = (_currentValue) => {
  obj = { $$typeof: closure_3, _currentValue, _currentValue2: _currentValue, _threadCount: 0, Provider: null, Consumer: null };
  obj.Provider = obj;
  obj = { $$typeof: closure_2, _context: obj };
  obj.Consumer = obj;
  return obj;
};
arg5.createElement = (defaultProps, key, children) => {
  obj = {};
  let tmp2 = null;
  if (null != key) {
    let text = null;
    if (undefined !== key.key) {
      text = `${key.key}`;
    }
    tmp2 = text;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = text;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp6;
        let tmp16 = hasOwnProperty;
        let tmp7 = hasOwnProperty.call(key, tmp6) && "key" !== tmp6 && "__self" !== tmp6 && "__source" !== tmp6;
        if (!tmp7) {
          continue;
        } else {
          obj[tmp6] = key[tmp6];
          continue;
        }
        continue;
      }
    }
  }
  const diff = arguments.length - 2;
  if (1 === diff) {
    obj.children = children;
  } else if (1 < diff) {
    const _Array = Array;
    const ArrayResult = Array(diff);
    let num = 0;
    if (0 < diff) {
      do {
        ArrayResult[num] = arguments[num + 2];
        num = num + 1;
      } while (num < diff);
    }
    obj.children = ArrayResult;
  }
  if (defaultProps) {
    if (defaultProps.defaultProps) {
      defaultProps = defaultProps.defaultProps;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[2] !== undefined) {
          let tmp17 = tmp14;
          if (undefined !== obj[tmp14]) {
            continue;
          } else {
            obj[tmp14] = defaultProps[tmp14];
            continue;
          }
          continue;
        }
      }
    }
  }
  return ReactElement(defaultProps, tmp2, undefined, undefined, undefined, obj);
};
arg5.createRef = () => ({ current: null });
arg5.forwardRef = (render) => ({ $$typeof: closure_4, render });
arg5.isValidElement = isValidElement;
arg5.lazy = (_result) => {
  obj = { $$typeof: closure_6, _payload: obj, _init: lazyInitializer };
  obj = { _status: -1, _result };
  return obj;
};
arg5.memo = (type) => {
  obj = { $$typeof: closure_5, type };
  let tmp = null;
  if (undefined !== arg1) {
    tmp = arg1;
  }
  obj.compare = tmp;
  return obj;
};
arg5.startTransition = (arg0) => {
  const T = obj.T;
  obj = {};
  obj.T = obj;
  try {
    const promise = arg0();
    const S = obj.S;
    if (null !== S) {
      tmp4(tmp2, promise);
    }
    let tmp12 = tmp11;
    if ("object" === typeof promise) {
      tmp12 = null !== promise;
    }
    let tmp14 = tmp12;
    if (tmp12) {
      tmp14 = "function" === typeof promise.then;
    }
    if (tmp14) {
      promise.then(noop, closure_15);
    }
    obj.T = T;
  } catch (tmp22) {
    obj.T = tmp;
    throw tmp22;
  }
};
arg5.unstable_useCacheRefresh = () => {
  const H = obj.H;
  return H.useCacheRefresh();
};
arg5.use = (arg0) => {
  const H = obj.H;
  return H.use(arg0);
};
arg5.useActionState = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useActionState(arg0, arg1, arg2);
};
arg5.useCallback = (arg0, arg1) => {
  const H = obj.H;
  return H.useCallback(arg0, arg1);
};
arg5.useContext = (arg0) => {
  const H = obj.H;
  return H.useContext(arg0);
};
arg5.useDebugValue = () => {

};
arg5.useDeferredValue = (arg0, arg1) => {
  const H = obj.H;
  return H.useDeferredValue(arg0, arg1);
};
arg5.useEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useEffect(arg0, arg1);
};
arg5.useId = () => {
  const H = obj.H;
  return H.useId();
};
arg5.useImperativeHandle = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useImperativeHandle(arg0, arg1, arg2);
};
arg5.useInsertionEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useInsertionEffect(arg0, arg1);
};
arg5.useLayoutEffect = (arg0, arg1) => {
  const H = obj.H;
  return H.useLayoutEffect(arg0, arg1);
};
arg5.useMemo = (arg0, arg1) => {
  const H = obj.H;
  return H.useMemo(arg0, arg1);
};
arg5.useOptimistic = (arg0, arg1) => {
  const H = obj.H;
  return H.useOptimistic(arg0, arg1);
};
arg5.useReducer = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useReducer(arg0, arg1, arg2);
};
arg5.useRef = (arg0) => {
  const H = obj.H;
  return H.useRef(arg0);
};
arg5.useState = (arg0) => {
  const H = obj.H;
  return H.useState(arg0);
};
arg5.useSyncExternalStore = (arg0, arg1, arg2) => {
  const H = obj.H;
  return H.useSyncExternalStore(arg0, arg1, arg2);
};
arg5.useTransition = () => {
  const H = obj.H;
  return H.useTransition();
};
arg5.version = "19.0.0";
