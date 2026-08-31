// Module ID: 274
// Function ID: 2784
// Name: getIteratorFn
// Dependencies: [61, 119, 261, 270]

// Module 274 (getIteratorFn)
import get_BatchedBridge from "get BatchedBridge" /* 261 */;
import push2 from "push" /* 270 */;
import module_61 from "module_61" /* 61 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import closure_105 from "module_0" /* 0 */;
import closure_108 from "module_0" /* 0 */;

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
function describeBuiltInComponentFrame(arg0) {
  if (undefined !== str3) {
    return "\n" + str3 + arg0 + str5;
  } else {
    try {
      const _Error = Error;
      throw Error();
    } catch (tmp2) {
      const match = tmp2.stack.trim().match(/\n( *(at )?)/);
      let tmp6 = match;
      if (match) {
        tmp6 = tmp5[1];
      }
      str3 = tmp6;
      if (!tmp6) {
        str3 = "";
      }
      const stack = tmp2.stack;
      str5 = " (<anonymous>)";
      if (-1 >= stack.indexOf("\n    at")) {
        const stack1 = tmp2.stack;
        let str7 = "";
        if (-1 < stack1.indexOf("@")) {
          str7 = "@unknown:0:0";
        }
        str5 = str7;
      }
      const str = tmp2.stack;
      const str2 = tmp2.stack.trim();
      const tmp3 = tmp2;
    }
  }
}
function describeNativeComponentFrame(displayName) {
  closure_0 = displayName;
  closure_1 = arg1;
  if (displayName) {
    if (!c24) {
      c24 = true;
      const _Error = Error;
      const _Error2 = Error;
      Error.prepareStackTrace = undefined;
      try {
        let obj = {
          DetermineComponentFrameRoot() {
                  try {
                    if (closure_1) {
                      class Fake {
                        constructor() {
                          throw Error();
                        }
                      }
                      let obj = Fake;
                      const _Object = Object;
                      obj = {
                        set() {
                              throw Error();
                            }
                      };
                      Object.defineProperty(Fake.prototype, "props", obj);
                      const _Reflect = Reflect;
                      if ("object" === typeof Reflect) {
                        class Fake {
                          constructor() {
                            throw Error();
                          }
                        }
                        if (Reflect.construct) {
                          class Fake {
                            constructor() {
                              throw Error();
                            }
                          }
                        }
                      }
                      try {
                        class Fake {
                          constructor() {
                            throw Error();
                          }
                        }
                        obj.call();
                        displayName.call(obj.prototype);
                        return [null, null];
                      } catch (err) {
                      }
                    } else {
                      class Fake {
                        constructor() {
                          throw Error();
                        }
                      }
                    }
                  } catch (err) {
                    class Fake {
                      constructor() {
                        throw Error();
                      }
                    }
                  }
                }
        };
        obj.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        let _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(obj.DetermineComponentFrameRoot, "name");
        let configurable = ownPropertyDescriptor;
        if (ownPropertyDescriptor) {
          configurable = tmp6.configurable;
        }
        if (configurable) {
          const _Object2 = Object;
          obj = { value: "DetermineComponentFrameRoot" };
          Object.defineProperty(obj2.DetermineComponentFrameRoot, "name", obj);
        }
        const result = obj2.DetermineComponentFrameRoot();
        const first = result[0];
        if (first) {
          if (str4) {
            const parts = first.split("\n");
            const parts1 = str4.split("\n");
            let num3 = 0;
            let num4 = 0;
            if (0 < parts.length) {
              if (!obj4.includes("DetermineComponentFrameRoot")) {
                const sum = num3 + 1;
                num3 = sum;
                while (sum < arr2.length) {
                  let tmp21 = parts;
                  let tmp22 = num3;
                  let obj5 = arr2[num3];
                  if (obj5.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
              obj4 = arr2[num3];
            }
            if (num4 < parts1.length) {
              if (!obj6.includes("DetermineComponentFrameRoot")) {
                const sum1 = num4 + 1;
                num4 = sum1;
                while (sum1 < parts1.length) {
                  let tmp30 = parts1;
                  let tmp31 = num4;
                  let obj7 = parts1[num4];
                  if (obj7.includes("DetermineComponentFrameRoot")) {
                    break;
                  }
                }
              }
              obj6 = parts1[num4];
            }
            if (num3 === parts.length) {
              const diff = arr2.length - 1;
              num3 = diff;
              num4 = parts1.length - 1;
              if (1 <= diff) {
                if (0 <= num4) {
                  if (arr2[num3] !== parts1[num4]) {
                    num4 = num4 - 1;
                    while (1 <= num3) {
                      let tmp46 = num4;
                      if (0 > num4) {
                        break;
                      } else {
                        let tmp47 = parts;
                        let tmp48 = num3;
                        let tmp49 = parts1;
                        let tmp50 = num4;
                        if (arr2[num3] === parts1[num4]) {
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
            if (1 <= num3) {
              if (0 <= num4) {
                while (arr2[num3] === parts1[num4]) {
                  let tmp56 = num3;
                  let diff1 = num3 - 1;
                  num3 = diff1;
                  let tmp58 = num4;
                  num4 = num4 - 1;
                  if (1 <= diff1) {
                    let tmp59 = num4;
                  }
                }
                if (1 !== num3) {
                  num3 = num3 - 1;
                  const diff2 = num4 - 1;
                  num4 = diff2;
                  while (0 <= diff2) {
                    let tmp65 = parts;
                    let tmp66 = num3;
                    let tmp67 = parts1;
                    let tmp68 = num4;
                    if (arr2[num3] !== parts1[num4]) {
                      break;
                    } else {
                      let tmp69 = num3;
                      if (1 <= num3) {
                        let tmp70 = num4;
                      }
                    }
                  }
                  let str11 = `
  ${str8.replace(" at new ", " at ")}`;
                  const displayName2 = displayName.displayName;
                  let hasItem = displayName2;
                  if (displayName2) {
                    hasItem = `
  ${str8.replace(" at new ", " at ")}`.includes("<anonymous>");
                  }
                  if (hasItem) {
                    str11 = str11.replace("<anonymous>", displayName.displayName);
                  }
                  c24 = false;
                  const _Error4 = Error;
                  Error.prepareStackTrace = prepareStackTrace;
                  return str11;
                }
              }
            }
          }
        }
        c24 = false;
        const _Error3 = Error;
        Error.prepareStackTrace = prepareStackTrace;
        let str6 = "";
        let str7 = "";
        if (displayName) {
          displayName = displayName.displayName;
          let name = displayName;
          if (!displayName) {
            name = displayName.name;
          }
          str7 = name;
        }
        if (str7) {
          str6 = describeBuiltInComponentFrame(tmp75);
        }
        return str6;
      } catch (tmp83) {
        c24 = false;
        tmp2.Error.prepareStackTrace = tmp;
        throw tmp83;
      }
    }
  }
  return "";
}
function describeFiber(tag) {
  switch (tag.tag) {
    case 0:
      let tmp4 = describeNativeComponentFrame(tag.type, false);
      return tmp4;
    case 1:
      return describeNativeComponentFrame(tag.type, true);
    case 2:
      return "";
    case 3:
      return "";
    case 4:
      return "";
    case 5:
      let tmp9 = describeBuiltInComponentFrame(tag.type);
      return tmp9;
    case 6:
      return "";
    case 7:
      return "";
    case 8:
      return "";
    case 9:
      return "";
    case 10:
      return "";
    case 11:
      return describeNativeComponentFrame(tag.type.render, false);
    case 12:
      return "";
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 14:
      return "";
    case 15:
      tmp4 = describeNativeComponentFrame(tag.type, false);
      return tmp4;
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 17:
      return "";
    case 18:
      return "";
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 20:
      return "";
    case 21:
      return "";
    case 22:
      return "";
    case 23:
      return "";
    case 24:
      return "";
    case 25:
      return "";
    case 26:
      tmp9 = describeBuiltInComponentFrame(tag.type);
      return tmp9;
    case 27:
      tmp9 = describeBuiltInComponentFrame(tag.type);
      return tmp9;
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(arg0) {
  let _return = arg0;
  try {
    let str = "";
    do {
      let tmp = str;
      let tmp2 = describeFiber;
      let tmp3 = _return;
      str = `${describeFiber(_return)}`;
      _return = _return.return;
    } while (tmp4);
    return str;
  } catch (error) {
    return "\nError generating stack: " + error.message + "\n" + error.stack;
  }
}
function getComponentNameFromType($$typeof) {
  if (null == $$typeof) {
    return null;
  } else if ("function" === typeof $$typeof) {
    let tmp29 = null;
    if ($$typeof.$$typeof !== closure_25) {
      tmp29 = $$typeof.displayName || $$typeof.name || null;
      const tmp31 = $$typeof.displayName || $$typeof.name || null;
    }
    return tmp29;
  } else if ("string" === typeof $$typeof) {
    return $$typeof;
  } else if (closure_7 === $$typeof) {
    return "Fragment";
  } else if (closure_6 === $$typeof) {
    return "Portal";
  } else if (closure_9 === $$typeof) {
    return "Profiler";
  } else if (closure_8 === $$typeof) {
    return "StrictMode";
  } else if (closure_14 === $$typeof) {
    return "Suspense";
  } else if (closure_15 === $$typeof) {
    return "SuspenseList";
  } else {
    if ("object" === typeof $$typeof) {
      $$typeof = $$typeof.$$typeof;
      if (closure_12 === $$typeof) {
        return ($$typeof.displayName || "Context") + ".Provider";
      } else if (closure_11 === $$typeof) {
        return ($$typeof._context.displayName || "Context") + ".Consumer";
      } else if (closure_13 === $$typeof) {
        ({ render, displayName } = $$typeof);
        let tmp16 = displayName;
        if (!displayName) {
          let str = "ForwardRef";
          if ("" !== (render.displayName || render.name || "")) {
            str = `${"ForwardRef(" + tmp19})`;
          }
          tmp16 = str;
        }
        return tmp16;
      } else if (closure_16 === $$typeof) {
        if (null !== ($$typeof.displayName || null)) {
          let tmp14 = tmp10;
        } else {
          tmp14 = getComponentNameFromType($$typeof.type) || "Memo";
        }
        return tmp14;
      } else if (closure_17 === $$typeof) {
        ({ _payload, _init } = $$typeof);
        try {
          return getComponentNameFromType(_init(_payload));
        } catch (err) {
        }
      }
    }
    return null;
  }
}
function executeDispatch(arg0, arg1, _dispatchInstances) {
  arg0.currentTarget = getNodeFromInstance(_dispatchInstances);
  try {
    arg1(arg0);
    arg0.currentTarget = null;
  } catch (tmp4) {
    if (!c26) {
      c26 = true;
      c27 = tmp4;
    }
  }
}
function executeDirectDispatch(_dispatchListeners) {
  _dispatchListeners = _dispatchListeners._dispatchListeners;
  if (isArray(_dispatchListeners)) {
    const _Error = Error;
    throw Error("Invalid `event`.");
  } else {
    let tmp2 = null;
    if (_dispatchListeners) {
      tmp2 = getNodeFromInstance(_dispatchListeners._dispatchInstances);
    }
    _dispatchListeners.currentTarget = tmp2;
    let _dispatchListenersResult = null;
    if (_dispatchListeners) {
      _dispatchListenersResult = _dispatchListeners(_dispatchListeners);
    }
    _dispatchListeners.currentTarget = null;
    _dispatchListeners._dispatchListeners = null;
    _dispatchListeners._dispatchInstances = null;
    return _dispatchListenersResult;
  }
}
function functionThatReturnsTrue() {
  return true;
}
function functionThatReturnsFalse() {
  return false;
}
class SyntheticEvent {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    this.dispatchConfig = global;
    this._targetInst = require;
    this.nativeEvent = importDefault;
    this._dispatchListeners = null;
    this._dispatchInstances = null;
    Interface = this.constructor.Interface;
    for (const key10012 in Interface) {
      tmp5 = key10012;
      if (!Interface.hasOwnProperty(key10012)) {
        continue;
      } else {
        tmp = Interface[key10012];
        if (tmp) {
          self[key10012] = tmp(arg2);
          tmp4 = tmp;
          continue;
        } else {
          if ("target" === key10012) {
            self.target = arg3;
            tmp3 = tmp;
            continue;
          } else {
            self[key10012] = arg2[key10012];
            tmp2 = tmp;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    if (null != importDefault.defaultPrevented) {
      defaultPrevented = importDefault.defaultPrevented;
    } else {
      flag = false;
      defaultPrevented = false === importDefault.returnValue;
    }
    self.isDefaultPrevented = defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse;
    self.isPropagationStopped = functionThatReturnsFalse;
    return self;
  }
}
function createOrGetPooledEvent(key10018, channels, arr2, closure_1_8) {
  const self = this;
  if (this.eventPool.length) {
    const eventPool = self.eventPool;
    const arr = eventPool.pop();
    self.call(arr, key10018, channels, arr2, closure_1_8);
    return arr;
  } else {
    const prototype = self.prototype;
    const _self = new self(key10018, channels, arr2, closure_1_8);
    return _self;
  }
}
function releasePooledEvent(destructor) {
  const self = this;
  if (destructor instanceof this) {
    destructor.destructor();
    if (10 > self.eventPool.length) {
      const eventPool = self.eventPool;
      eventPool.push(destructor);
    }
  } else {
    const _Error = Error;
    throw Error("Trying to release an event instance into a pool of a different type.");
  }
}
function addEventPoolingTo(SyntheticEvent) {
  SyntheticEvent.getPooled = createOrGetPooledEvent;
  SyntheticEvent.eventPool = [];
  SyntheticEvent.release = releasePooledEvent;
}
function isStartish(arg0) {
  return "topTouchStart" === arg0;
}
function isMoveish(arg0) {
  return "topTouchMove" === arg0;
}
function timestampForTouch(timeStamp) {
  return timeStamp.timeStamp || timeStamp.timestamp;
}
function getTouchIdentifier(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else {
    return identifier;
  }
}
function recordTouchStart(arg0) {
  const tmp = getTouchIdentifier(arg0);
  if (items3[tmp]) {
    tmp2.touchActive = true;
    ({ pageX: tmp2.startPageX, pageY: tmp2.startPageY } = arg0);
    tmp2.startTimeStamp = timestampForTouch(arg0);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = arg0);
    tmp2.currentTimeStamp = timestampForTouch(arg0);
    ({ pageX: tmp2.previousPageX, pageY: tmp2.previousPageY } = arg0);
    tmp2.previousTimeStamp = timestampForTouch(arg0);
  } else {
    const obj = { touchActive: true };
    ({ pageX: obj.startPageX, pageY: obj.startPageY } = arg0);
    obj.startTimeStamp = timestampForTouch(arg0);
    ({ pageX: obj.currentPageX, pageY: obj.currentPageY } = arg0);
    obj.currentTimeStamp = timestampForTouch(arg0);
    ({ pageX: obj.previousPageX, pageY: obj.previousPageY } = arg0);
    obj.previousTimeStamp = timestampForTouch(arg0);
    items3[tmp] = obj;
  }
  obj2.mostRecentTimeStamp = timestampForTouch(arg0);
}
function recordTouchMove(arg0) {
  const tmp = items3[getTouchIdentifier(undefined, arg0)];
  if (tmp) {
    tmp.touchActive = true;
    ({ currentPageX: tmp.previousPageX, currentPageY: tmp.previousPageY, currentTimeStamp: tmp.previousTimeStamp } = tmp);
    ({ pageX: tmp.currentPageX, pageY: tmp.currentPageY } = arg0);
    tmp.currentTimeStamp = timestampForTouch(arg0);
    obj2.mostRecentTimeStamp = timestampForTouch(arg0);
  }
}
function recordTouchEnd(arg0) {
  const tmp = items3[getTouchIdentifier(undefined, arg0)];
  if (tmp) {
    tmp.touchActive = false;
    ({ currentPageX: tmp.previousPageX, currentPageY: tmp.previousPageY, currentTimeStamp: tmp.previousTimeStamp } = tmp);
    ({ pageX: tmp.currentPageX, pageY: tmp.currentPageY } = arg0);
    tmp.currentTimeStamp = timestampForTouch(arg0);
    obj2.mostRecentTimeStamp = timestampForTouch(arg0);
  }
}
function accumulate(arr) {
  if (null == arg1) {
    const _Error = Error;
    throw Error("Accumulated items must not be null or undefined.");
  } else if (null == arr) {
    return arg1;
  } else if (isArray(arr)) {
    let combined = arr.concat(arg1);
  } else if (isArray(arg1)) {
    const items = [arr];
    combined = items.concat(arg1);
  } else {
    combined = [arr, arg1];
  }
}
function accumulateInto(arg0, arg1) {
  if (null == arg1) {
    const _Error = Error;
    throw Error("Accumulated items must not be null or undefined.");
  } else if (null == arg0) {
    return arg1;
  } else {
    const tmp4 = isArray(arg1);
    if (tmp2) {
      push = arg0.push;
      if (tmp4) {
        push.apply(arg0, arg1);
        return arg0;
      } else {
        push(arg1);
        return arg0;
      }
    } else {
      if (tmp4) {
        const items = [arg0];
        let combined = items.concat(arg1);
      } else {
        combined = [arg0, arg1];
      }
      return combined;
    }
    tmp2 = isArray(arg0);
  }
}
function forEachAccumulated(arr, call) {
  if (Array.isArray(arr)) {
    const item = arr.forEach(call, undefined);
  } else if (arr) {
    call.call(undefined, arr);
  }
}
function changeResponder(arg0, arg1) {
  closure_36 = arg0;
  if (null !== obj4.GlobalResponderHandler) {
    obj4.GlobalResponderHandler.onChange(tmp, arg0, arg1);
    const GlobalResponderHandler = obj4.GlobalResponderHandler;
  }
}
function getParent$1(arg0) {
  let tmp = arg0;
  const _return = tmp.return;
  while (_return) {
    tmp = _return;
    if (5 === _return.tag) {
      break;
    }
  }
  let tmp2 = null;
  if (_return) {
    tmp2 = _return;
  }
  return tmp2;
}
function traverseTwoPhase$1(arg0, arg1, arg2) {
  let length;
  let tmp7;
  let tmp = arg0;
  const items = [];
  if (arg0) {
    do {
      let arr = items.push(tmp);
      let tmp3 = getParent$1;
      tmp = getParent$1(tmp);
    } while (tmp);
  }
  let diff = tmp4 - 1;
  if (0 < +items.length) {
    do {
      let tmp6 = arg1(items[diff], "captured", arg2);
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (0 < tmp7);
  }
  let num = 0;
  if (0 < items.length) {
    do {
      let tmp8 = arg1(items[num], "bubbled", arg2);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
}
function getListener$1(stateNode, got) {
  stateNode = stateNode.stateNode;
  if (null === stateNode) {
    return null;
  } else {
    const tmp2 = getFiberCurrentPropsFromNode$1(stateNode);
    if (null === tmp2) {
      return null;
    } else {
      if (tmp2[got]) {
        if ("function" !== typeof tmp3) {
          const _Error = Error;
          throw Error("Expected `" + got + "` listener to be a function, instead got a value of `" + tmp4 + "` type.");
        }
      }
      return tmp2[got];
    }
  }
}
function accumulateDirectionalDispatches$1(arg0, arg1, _dispatchListeners) {
  const tmp = getListener$1(arg0, _dispatchListeners.dispatchConfig.phasedRegistrationNames[arg1]);
  if (tmp) {
    _dispatchListeners._dispatchListeners = accumulateInto(_dispatchListeners._dispatchListeners, tmp);
    _dispatchListeners._dispatchInstances = accumulateInto(_dispatchListeners._dispatchInstances, arg0);
  }
}
function accumulateDirectDispatchesSingle$1(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const tmp2 = getListener$1(_targetInst, dispatchConfig.dispatchConfig.registrationName);
            if (tmp2) {
              dispatchConfig._dispatchListeners = accumulateInto(dispatchConfig._dispatchListeners, tmp2);
              dispatchConfig._dispatchInstances = accumulateInto(dispatchConfig._dispatchInstances, _targetInst);
            }
          }
        }
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingleSkipTarget(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.phasedRegistrationNames) {
      const _targetInst = dispatchConfig._targetInst;
      let tmp = null;
      if (_targetInst) {
        tmp = getParent$1(_targetInst);
      }
      traverseTwoPhase$1(tmp, accumulateDirectionalDispatches$1, dispatchConfig);
    }
  }
}
function accumulateTwoPhaseDispatchesSingle$1(dispatchConfig) {
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    traverseTwoPhase$1(dispatchConfig._targetInst, accumulateDirectionalDispatches$1, dispatchConfig);
  }
}
function recomputePluginOrdering() {
  if (closure_40) {
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp2] !== undefined) {
        let tmp35 = tmp14;
        let tmp36 = obj6;
        let tmp37 = obj6[tmp14];
        let tmp38 = closure_40;
        let index = closure_40.indexOf(tmp14);
        if (-1 >= index) {
          let tmp34 = globalThis;
          let _Error4 = Error;
          let str8 = "`.";
          let str9 = "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `";
          throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + (tmp14 + "`."));
        } else {
          let tmp40 = table;
          if (table[index]) {
            continue;
          } else if (tmp37.extractEvents) {
            let tmp16 = table;
            table[index] = tmp37;
            let eventTypes = tmp37.eventTypes;
            let tmp17 = eventTypes;
            let tmp5 = tmp10;
            let tmp6 = tmp11;
            let tmp7 = tmp12;
            let tmp8 = tmp13;
            let tmp18 = tmp10;
            let tmp19 = tmp11;
            let tmp20 = tmp12;
            let tmp21 = tmp13;
            let keys1 = Object.keys();
            if (keys1 === undefined) {
              continue;
            } else {
              tmp5 = tmp18;
              tmp6 = tmp19;
              tmp7 = tmp20;
              tmp8 = tmp21;
              let tmp23 = keys1[tmp];
              while (tmp23 !== undefined) {
                let tmp41 = tmp23;
                let tmp42 = eventTypes[tmp23];
                let tmp43 = closure_43;
                if (closure_43.hasOwnProperty(tmp23)) {
                  let tmp33 = globalThis;
                  let _Error3 = Error;
                  let str6 = "`.";
                  let str7 = "EventPluginRegistry: More than one plugin attempted to publish the same event name, `";
                  throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + (tmp23 + "`."));
                } else {
                  let tmp24 = closure_43;
                  closure_43[tmp23] = tmp42;
                  let phasedRegistrationNames = tmp42.phasedRegistrationNames;
                  if (phasedRegistrationNames) {
                    let tmp27 = phasedRegistrationNames;
                    let flag = true;
                    let keys2 = Object.keys();
                    if (keys2 !== undefined) {
                      flag = true;
                      let tmp29 = keys2[tmp3];
                      while (tmp29 !== undefined) {
                        let tmp44 = tmp29;
                        if (!phasedRegistrationNames.hasOwnProperty(tmp29)) {
                          continue;
                        } else {
                          let tmp30 = publishRegistrationName;
                          let tmp31 = publishRegistrationName(phasedRegistrationNames[tmp29], tmp37);
                          continue;
                        }
                        continue;
                      }
                    }
                  } else {
                    flag = false;
                    if (tmp42.registrationName) {
                      let tmp25 = publishRegistrationName;
                      let tmp26 = publishRegistrationName(tmp42.registrationName, tmp37);
                      flag = true;
                    }
                  }
                  tmp19 = flag;
                  tmp18 = tmp23;
                  tmp20 = tmp42;
                  tmp21 = phasedRegistrationNames;
                  if (flag) {
                    continue;
                  } else {
                    let tmp32 = globalThis;
                    let _Error2 = Error;
                    let str3 = "EventPluginRegistry: Failed to publish event `";
                    let str4 = "` for plugin `";
                    let str5 = "`.";
                    throw Error("EventPluginRegistry: Failed to publish event `" + tmp23 + "` for plugin `" + tmp14 + "`.");
                  }
                }
              }
            }
            continue;
          } else {
            let tmp15 = globalThis;
            let _Error = Error;
            let str = "` does not.";
            let str2 = "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `";
            throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + (tmp14 + "` does not."));
          }
          continue;
        }
      }
    }
  }
}
function publishRegistrationName(registration) {
  if (table2[registration]) {
    const _Error = Error;
    throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + (registration + "`."));
  } else {
    table2[registration] = arg1;
  }
}
function getListener(stateNode, got) {
  stateNode = stateNode.stateNode;
  if (null === stateNode) {
    return null;
  } else {
    const tmp2 = getFiberCurrentPropsFromNode$1(stateNode);
    if (null === tmp2) {
      return null;
    } else {
      if (tmp2[got]) {
        if ("function" !== typeof tmp3) {
          const _Error = Error;
          throw Error("Expected `" + got + "` listener to be a function, instead got a value of `" + tmp4 + "` type.");
        }
      }
      return tmp2[got];
    }
  }
}
function accumulateDirectionalDispatches(arg0, arg1, _dispatchListeners) {
  const tmp = getListener(arg0, _dispatchListeners.dispatchConfig.phasedRegistrationNames[arg1]);
  if (tmp) {
    _dispatchListeners._dispatchListeners = accumulateInto(_dispatchListeners._dispatchListeners, tmp);
    _dispatchListeners._dispatchInstances = accumulateInto(_dispatchListeners._dispatchInstances, arg0);
  }
}
function traverseTwoPhase(arg0, arg1, arg2, arg3) {
  let length;
  let tmp4;
  let tmp8;
  let tmp = arg0;
  const items = [];
  if (arg0) {
    items.push(tmp);
    let tmp3 = tmp;
    do {
      let _return = tmp3.return;
      while (_return) {
        tmp3 = _return;
        if (5 === _return.tag) {
          break;
        }
      }
      tmp4 = null;
      if (_return) {
        tmp4 = _return;
      }
      tmp = tmp4;
    } while (tmp4);
  }
  let diff = tmp5 - 1;
  if (0 < +items.length) {
    do {
      let tmp7 = arg1(items[diff], "captured", arg2);
      tmp8 = +diff;
      diff = tmp8 - 1;
    } while (0 < tmp8);
  }
  if (arg3) {
    arg1(items[0], "bubbled", arg2);
  } else {
    let num = 0;
    if (0 < items.length) {
      do {
        let tmp9 = arg1(items[num], "bubbled", arg2);
        num = num + 1;
        length = items.length;
      } while (num < length);
    }
  }
}
function accumulateTwoPhaseDispatchesSingle(dispatchConfig) {
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    traverseTwoPhase(dispatchConfig._targetInst, accumulateDirectionalDispatches, dispatchConfig, false);
  }
}
function accumulateDirectDispatchesSingle(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const tmp2 = getListener(_targetInst, dispatchConfig.dispatchConfig.registrationName);
            if (tmp2) {
              dispatchConfig._dispatchListeners = accumulateInto(dispatchConfig._dispatchListeners, tmp2);
              dispatchConfig._dispatchInstances = accumulateInto(dispatchConfig._dispatchInstances, _targetInst);
            }
          }
        }
      }
    }
  }
}
function getInstanceFromTag(target) {
  return map.get(target) || null;
}
function batchedUpdatesImpl(arg0, arg1) {
  return arg0(arg1);
}
function batchedUpdates$1(arg0, arg1) {
  if (c49) {
    return arg0(arg1);
  } else {
    c49 = true;
    try {
      c49 = false;
      return batchedUpdatesImpl(arg0, arg1);
    } catch (tmp4) {
      c49 = false;
      throw tmp4;
    }
  }
}
function executeDispatchesAndReleaseTopLevel(isPropagationStopped) {
  if (isPropagationStopped) {
    ({ _dispatchListeners, _dispatchInstances } = isPropagationStopped);
    if (isArray(_dispatchListeners)) {
      if (0 < _dispatchListeners.length) {
        let num2 = 0;
        if (!isPropagationStopped.isPropagationStopped()) {
          executeDispatch(isPropagationStopped, _dispatchListeners[num2], _dispatchInstances[num2]);
          const sum = num2 + 1;
          while (sum < _dispatchListeners.length) {
            num2 = sum;
            if (isPropagationStopped.isPropagationStopped()) {
              break;
            }
          }
        }
      }
    } else if (_dispatchListeners) {
      executeDispatch(isPropagationStopped, _dispatchListeners, _dispatchInstances);
    }
    isPropagationStopped._dispatchListeners = null;
    isPropagationStopped._dispatchInstances = null;
    if (!isPropagationStopped.isPersistent()) {
      const constructor = isPropagationStopped.constructor;
      constructor.release(isPropagationStopped);
    }
  }
}
function _receiveRootNodeIDEvent(target, arg1, arg2) {
  let tmp = arg2;
  closure_0 = arg1;
  if (!arg2) {
    tmp = closure_51;
  }
  closure_1 = tmp;
  let tmp2 = getInstanceFromTag(target);
  closure_2 = tmp2;
  let stateNode = null;
  if (null != tmp2) {
    stateNode = tmp2.stateNode;
  }
  batchedUpdates$1(() => {
    let num = 0;
    let tmp2 = null;
    let tmp3 = null;
    if (0 < closure_1_42.length) {
      do {
        let obj = arr[num];
        let tmp4 = tmp2;
        let tmp5 = num;
        let extractEventsResult = obj;
        let tmp7 = obj;
        if (obj) {
          let tmp8 = closure_0;
          let tmp9 = closure_2;
          let tmp10 = closure_1;
          let tmp11 = obj;
          let tmp12 = tmp;
          extractEventsResult = obj.extractEvents(closure_0, closure_2, closure_1, tmp);
          tmp7 = extractEventsResult;
        }
        let tmp13 = tmp2;
        if (extractEventsResult) {
          let tmp14 = closure_1_199;
          tmp13 = closure_1_199(tmp2, tmp7);
        }
        num = num + 1;
        tmp2 = tmp13;
        tmp3 = tmp13;
      } while (num < arr.length);
    }
    if (null !== tmp3) {
      c50 = closure_1_199(c50, tmp3);
    }
    c50 = null;
    if (c50) {
      closure_1_200(tmp17, closure_1_218);
      if (c50) {
        const _Error = Error;
        throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
      } else if (c26) {
        c26 = false;
        c27 = null;
        throw c27;
      }
    }
  });
}
function getNearestMountedFiber(alternate) {
  let _return4;
  let _return = alternate;
  let tmp = alternate;
  if (alternate.alternate) {
    let tmp4 = alternate;
    let tmp2 = alternate;
    let tmp3 = alternate;
    if (alternate.return) {
      do {
        let _return3 = tmp4.return;
        tmp4 = _return3;
        tmp2 = _return3;
        tmp3 = alternate;
        _return4 = _return3.return;
      } while (_return4);
    }
  } else {
    do {
      tmp2 = _return;
      let _return2 = tmp;
      if (0 !== (_return.flags & 4098)) {
        _return2 = tmp2.return;
      }
      _return = tmp2.return;
      tmp = _return2;
      tmp3 = _return2;
    } while (_return);
  }
  let tmp5 = null;
  if (3 === tmp2.tag) {
    tmp5 = tmp3;
  }
  return tmp5;
}
function assertIsMounted(arg0) {
  if (getNearestMountedFiber(arg0) !== arg0) {
    const _Error = Error;
    throw Error("Unable to find node on an unmounted component.");
  }
}
function findCurrentFiberUsingSlowPath(alternate) {
  alternate = alternate.alternate;
  let _return = alternate;
  let tmp = alternate;
  if (alternate) {
    const _return2 = _return.return;
    while (null !== _return2) {
      let alternate2 = _return2.alternate;
      if (null === alternate2) {
        _return = _return2.return;
        tmp = _return;
        if (null === _return) {
          break;
        }
      } else if (_return2.child === alternate2.child) {
        let sibling3 = _return2.child;
        if (sibling3) {
          let tmp25 = sibling3;
          while (sibling3 !== _return) {
            if (sibling3 === tmp) {
              let tmp27 = assertIsMounted;
              let tmp28 = assertIsMounted(_return2);
              return alternate;
            } else {
              sibling3 = sibling3.sibling;
            }
          }
          let tmp29 = assertIsMounted;
          let tmp30 = assertIsMounted(_return2);
          return alternate;
        }
        let tmp26 = globalThis;
        let _Error3 = Error;
        let str3 = "Unable to find node on an unmounted component.";
        throw Error("Unable to find node on an unmounted component.");
      } else {
        let tmp17 = _return2;
        let tmp18 = alternate2;
        let tmp19 = tmp2;
        let tmp16 = tmp3;
        if (_return.return === tmp.return) {
          let sibling = _return2.child;
          let tmp13 = _return;
          let tmp14 = tmp;
          let flag = false;
          let tmp15 = sibling;
          if (sibling) {
            let tmp12 = sibling;
            tmp13 = _return2;
            tmp14 = alternate2;
            flag = true;
            tmp15 = sibling;
            while (sibling !== _return) {
              tmp13 = alternate2;
              tmp14 = _return2;
              flag = true;
              tmp15 = sibling;
              if (sibling === tmp) {
                break;
              } else {
                sibling = sibling.sibling;
                tmp13 = _return;
                tmp14 = tmp;
                flag = false;
                tmp15 = sibling;
                if (!sibling) {
                  break;
                }
              }
            }
          }
          tmp16 = tmp15;
          tmp17 = tmp13;
          tmp18 = tmp14;
          tmp19 = flag;
          if (!flag) {
            let sibling2 = alternate2.child;
            let tmp20 = tmp13;
            let tmp21 = tmp14;
            let flag2 = flag;
            let tmp22 = sibling2;
            if (sibling2) {
              let tmp23 = sibling2;
              tmp20 = alternate2;
              tmp21 = _return2;
              flag2 = true;
              tmp22 = sibling2;
              while (sibling2 !== tmp13) {
                tmp20 = _return2;
                tmp21 = alternate2;
                flag2 = true;
                tmp22 = sibling2;
                if (sibling2 === tmp14) {
                  break;
                } else {
                  sibling2 = sibling2.sibling;
                  tmp20 = tmp13;
                  tmp21 = tmp14;
                  flag2 = flag;
                  tmp22 = sibling2;
                  if (!sibling2) {
                    break;
                  }
                }
              }
            }
            tmp17 = tmp20;
            tmp18 = tmp21;
            tmp19 = flag2;
            tmp16 = tmp22;
            if (!flag2) {
              let tmp24 = globalThis;
              let _Error2 = Error;
              let str2 = "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.";
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
            }
          }
        }
        _return = tmp17;
        tmp = tmp18;
        tmp2 = tmp19;
        tmp3 = tmp16;
        if (tmp17.alternate === tmp18) {
          continue;
        } else {
          let tmp32 = globalThis;
          let _Error5 = Error;
          let str5 = "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.";
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
      continue;
    }
    if (3 !== _return.tag) {
      const _Error4 = Error;
      throw Error("Unable to find node on an unmounted component.");
    } else {
      return alternate;
    }
  } else {
    const tmp5 = getNearestMountedFiber(alternate);
    if (null === tmp5) {
      const _Error = Error;
      throw Error("Unable to find node on an unmounted component.");
    } else {
      let tmp6 = null;
      if (tmp5 === alternate) {
        tmp6 = alternate;
      }
      return tmp6;
    }
  }
}
function findCurrentHostFiberImpl(tag) {
  tag = tag.tag;
  if (5 !== tag) {
    if (26 !== tag) {
      if (27 !== tag) {
        if (6 !== tag) {
          let sibling = tag.child;
          if (null !== sibling) {
            const tmp3 = findCurrentHostFiberImpl(sibling);
            while (null === tmp3) {
              sibling = sibling.sibling;
            }
            return tmp3;
          }
          return null;
        }
      }
    }
  }
  return tag;
}
function defaultDiffer(name, fn) {
  let flag = true;
  if ("object" === typeof fn) {
    flag = true;
    if (null !== fn) {
      flag = get_BatchedBridge.deepDiffer(name, fn, closure_55);
      const obj = get_BatchedBridge;
    }
  }
  return flag;
}
function restoreDeletedValuesInNestedArray(arg0, arg1, arg2) {
  if (isArray(arg1)) {
    let diff = tmp12 - 1;
    if (+arg1.length) {
      if (0 < closure_54) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], arg2);
        while (tmp17) {
          let tmp19 = closure_54;
          diff = tmp18;
          if (0 >= closure_54) {
            break;
          }
        }
        tmp17 = +diff;
      }
    }
  } else if (arg1) {
    if (0 < closure_54) {
      for (const key10008 in c53) {
        let tmp21 = key10008;
        let tmp22 = _null;
        if (!_null[key10008]) {
          continue;
        } else {
          let tmp2 = arg1[key10008];
          let tmp3 = tmp2;
          if (undefined === tmp2) {
            continue;
          } else {
            let obj = arg2[key10008];
            let tmp4 = tmp2;
            let tmp5 = obj;
            if (!obj) {
              continue;
            } else {
              if ("function" === typeof tmp2) {
                tmp2 = true;
              }
              if ("undefined" === typeof tmp2) {
                tmp2 = null;
              }
              if ("object" !== typeof obj) {
                arg0[key10008] = tmp2;
                let tmp6 = tmp2;
              } else if ("function" === typeof obj.diff) {
                let processResult = tmp2;
                if ("function" === typeof obj.process) {
                  processResult = obj.process(tmp2);
                }
                arg0[key10008] = processResult;
                tmp6 = processResult;
              } else {
                tmp6 = tmp2;
              }
              let tmp8 = _null;
              _null[key10008] = false;
              let tmp9 = closure_54;
              closure_54 = closure_54 - 1;
              let tmp10 = tmp6;
              let tmp11 = obj;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
}
function diffNestedProperty(arg0, arg1, arg2, arg3) {
  let length;
  let length2;
  if (!arg0) {
    if (arg1 === arg2) {
      return arg0;
    }
  }
  if (arg1) {
    if (arg2) {
      if (!isArray(arg1)) {
        if (!isArray(arg2)) {
          return diffProperties(arg0, arg1, arg2, arg3);
        }
      }
      if (isArray(arg1)) {
        if (isArray(arg2)) {
          const tmp26 = arg1.length < arg2.length ? arg1.length : arg2.length;
          let num2 = 0;
          let tmp27 = arg0;
          let num3 = 0;
          let tmp28 = arg0;
          if (0 < tmp26) {
            do {
              let tmp29 = diffNestedProperty;
              let tmp30 = tmp27;
              let tmp31 = arg3;
              tmp27 = diffNestedProperty(tmp27, arg1[num3], arg2[num3], arg3);
              num3 = num3 + 1;
              tmp28 = tmp27;
              num2 = num3;
            } while (num3 < tmp26);
          }
          let tmp32 = tmp28;
          let sum = num2;
          let tmp34 = tmp28;
          let sum1 = num2;
          if (num2 < arg1.length) {
            do {
              let tmp36 = clearNestedProperty;
              tmp32 = clearNestedProperty(tmp32, arg1[sum], arg3);
              sum = sum + 1;
              tmp34 = tmp32;
              sum1 = sum;
              length = arg1.length;
            } while (sum < length);
          }
          let tmp37 = tmp34;
          let tmp38 = tmp34;
          if (sum1 < arg2.length) {
            do {
              let tmp39 = addNestedProperty;
              tmp37 = addNestedProperty(tmp37, arg2[sum1], arg3);
              sum1 = sum1 + 1;
              tmp38 = tmp37;
              length2 = arg2.length;
            } while (sum1 < length2);
          }
          return tmp38;
        }
      }
      const tmp14 = isArray(arg1);
      const flattenStyle = get_BatchedBridge.flattenStyle;
      if (tmp14) {
        let tmp15Result = tmp15(arg0, flattenStyle(arg1), arg2, arg3);
      } else {
        tmp15Result = tmp15(arg0, arg1, flattenStyle(arg2), arg3);
      }
      return tmp15Result;
    }
  }
  if (arg2) {
    let tmp = addNestedProperty(arg0, arg2, arg3);
  } else {
    tmp = arg0;
    if (arg1) {
      tmp = clearNestedProperty(arg0, arg1, arg3);
    }
  }
  return tmp;
}
function addNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    if (isArray(arg1)) {
      let num = 0;
      let tmp7 = arg0;
      let tmp8 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp9 = addNestedProperty;
          tmp7 = addNestedProperty(tmp7, arg1[num], arg2);
          num = num + 1;
          tmp8 = tmp7;
          length = arg1.length;
        } while (num < length);
      }
      return tmp8;
    } else {
      return diffProperties(arg0, closure_52, arg1, arg2);
    }
  } else {
    return arg0;
  }
}
function clearNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    if (isArray(arg1)) {
      let num = 0;
      let tmp7 = arg0;
      let tmp8 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp9 = clearNestedProperty;
          tmp7 = clearNestedProperty(tmp7, arg1[num], arg2);
          num = num + 1;
          tmp8 = tmp7;
          length = arg1.length;
        } while (num < length);
      }
      return tmp8;
    } else {
      return diffProperties(arg0, arg1, closure_52, arg2);
    }
  } else {
    return arg0;
  }
}
function diffProperties(arg0, arg1, arg2, arg3) {
  let tmp4;
  let tmp2 = arg0;
  let tmp5 = arg0;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp2;
    let tmp6 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp65 = tmp11;
      obj4 = arg3[tmp11];
      let tmp3 = obj4;
      if (!obj4) {
        continue;
      } else {
        let flag = arg1[tmp11];
        let tmp12 = arg2[tmp11];
        let tmp13 = flag;
        if ("function" === typeof tmp12) {
          if ("function" === typeof flag) {
            flag = true;
          }
          tmp13 = flag;
          tmp12 = true;
        }
        let tmp14 = tmp13;
        if ("undefined" === typeof tmp12) {
          if ("undefined" === typeof tmp13) {
            tmp13 = null;
          }
          tmp14 = tmp13;
          tmp12 = null;
        }
        let tmp15 = _null;
        if (_null) {
          let tmp16 = _null;
          _null[tmp11] = false;
        }
        if (tmp8) {
          if (undefined !== tmp8[tmp11]) {
            if ("object" !== typeof obj4) {
              tmp8[tmp11] = tmp12;
              tmp2 = tmp8;
              tmp3 = obj4;
              tmp4 = tmp14;
              let tmp43 = tmp12;
              continue;
            } else {
              if ("function" === typeof obj4.diff) {
                let processResult = tmp12;
                if ("function" === typeof obj4.process) {
                  processResult = obj4.process(tmp12);
                }
                tmp8[tmp11] = processResult;
                tmp3 = processResult;
                tmp2 = tmp8;
                tmp4 = tmp14;
                let tmp42 = tmp12;
                continue;
              } else {
                tmp2 = tmp8;
                tmp3 = obj4;
                tmp4 = tmp14;
                let tmp40 = tmp12;
              }
              continue;
            }
            continue;
          }
        }
        tmp2 = tmp8;
        tmp3 = obj4;
        tmp4 = tmp14;
        let tmp17 = tmp12;
        if (tmp14 === tmp12) {
          continue;
        } else {
          if ("object" !== typeof obj4) {
            let tmp36 = defaultDiffer;
            tmp2 = tmp8;
            tmp3 = obj4;
            tmp4 = tmp14;
            let tmp37 = tmp12;
            if (!defaultDiffer(tmp14, tmp12)) {
              continue;
            } else {
              let obj = tmp8;
              let tmp38 = tmp8;
              if (!tmp8) {
                obj = {};
                tmp38 = obj;
              }
              obj[tmp11] = tmp12;
              tmp2 = tmp38;
              tmp3 = obj4;
              tmp4 = tmp14;
              let tmp39 = tmp12;
              continue;
            }
            continue;
          } else {
            if ("function" !== typeof obj4.diff) {
              if ("function" !== typeof obj4.process) {
                _null = null;
                closure_54 = 0;
                let tmp18 = diffNestedProperty;
                let tmp19 = tmp8;
                let tmp20 = tmp14;
                let tmp21 = tmp12;
                let tmp22 = obj4;
                let tmp23 = diffNestedProperty(tmp8, tmp14, tmp12, obj4);
                let tmp24 = closure_54;
                let tmp25 = 0 < closure_54 && tmp23;
                tmp2 = tmp23;
                tmp3 = obj4;
                tmp4 = tmp14;
                let tmp26 = tmp12;
                if (!tmp25) {
                  continue;
                } else {
                  let tmp27 = restoreDeletedValuesInNestedArray;
                  let tmp28 = restoreDeletedValuesInNestedArray(tmp23, tmp12, obj4);
                  _null = null;
                  tmp2 = tmp23;
                  tmp3 = obj4;
                  tmp4 = tmp14;
                  let tmp29 = tmp12;
                  continue;
                }
                continue;
              }
              continue;
            }
            if (undefined === tmp14) {
              let processResult1 = tmp12;
              if ("function" === typeof obj4.process) {
                processResult1 = obj4.process(tmp12);
              }
              obj = tmp8;
              let tmp34 = tmp8;
              if (!tmp8) {
                obj = {};
                tmp34 = obj;
              }
              obj[tmp11] = processResult1;
              tmp2 = tmp34;
              tmp3 = processResult1;
              tmp4 = tmp14;
              let tmp35 = tmp12;
              continue;
            } else {
              if ("function" === typeof obj4.diff) {
                let diffResult = obj4.diff(tmp14, tmp12);
              } else {
                let tmp30 = defaultDiffer;
                diffResult = defaultDiffer(tmp14, tmp12);
              }
              tmp2 = tmp8;
              tmp3 = obj4;
              tmp4 = tmp14;
              let tmp32 = tmp12;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp44 = tmp5;
  let tmp45 = tmp5;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp48 = tmp6;
    tmp45 = tmp44;
    while (keys1[tmp2] !== undefined) {
      let tmp66 = tmp49;
      tmp6 = tmp48;
      if (undefined !== arg2[tmp49]) {
        continue;
      } else {
        let tmp50 = arg3[tmp49];
        let tmp51 = !tmp50;
        if (!tmp51) {
          let tmp52 = tmp47;
          if (tmp47) {
            tmp52 = undefined !== tmp47[tmp49];
          }
          tmp51 = tmp52;
        }
        let tmp53 = tmp47;
        if (!tmp51) {
          let tmp54 = arg1[tmp49];
          let tmp55 = tmp47;
          if (undefined === tmp54) {
            tmp53 = tmp47;
            tmp48 = tmp54;
          } else {
            if ("object" === typeof tmp50) {
              if ("function" !== typeof tmp50.diff) {
                if ("function" !== typeof tmp50.process) {
                  let tmp56 = clearNestedProperty;
                  let tmp57 = clearNestedProperty(tmp47, tmp54, tmp50);
                }
                let tmp63 = tmp57;
              }
            }
            obj = tmp47;
            let tmp58 = tmp47;
            if (!tmp47) {
              obj = {};
              tmp58 = obj;
            }
            obj[tmp49] = null;
            let tmp59 = _null;
            if (!_null) {
              _null = {};
            }
            let tmp60 = _null;
            tmp57 = tmp58;
            if (!_null[tmp49]) {
              let tmp61 = _null;
              _null[tmp49] = true;
              let tmp62 = closure_54;
              closure_54 = closure_54 + 1;
              tmp57 = tmp58;
            }
          }
        }
        tmp44 = tmp53;
        tmp6 = tmp48;
        let tmp64 = tmp50;
        continue;
      }
      continue;
    }
  }
  return tmp45;
}
function mountSafeCallback_NOT_REALLY_SAFE(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return () => {
    if (callback) {
      return callback(...arguments);
    }
  };
}
function onCommitRoot(current) {
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot(closure_57, current, undefined, 128 === (current.current.flags & 128));
      } catch (err) {
      }
    }
  }
}
function setIsStrictModeForDevtools(arg0) {
  if ("function" === typeof push2.log) {
    const result = push2.unstable_setDisableYieldValue(arg0);
    const obj = push2;
  }
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode(closure_57, arg0);
      } catch (err) {
      }
    }
  }
}
function clz32Fallback(arg0) {
  let num = 32;
  if (0 !== arg0 >>> 0) {
    num = 31 - (log(tmp) / LN2 | 0) | 0;
  }
  return num;
}
function getHighestPriorityLanes(arg0) {
  if (0 !== (arg0 & 42)) {
    return tmp;
  } else if (1 === (arg0 & -arg0)) {
    return 1;
  } else if (2 === tmp2) {
    return 2;
  } else if (4 === tmp2) {
    return 4;
  } else if (8 === tmp2) {
    return 8;
  } else if (16 === tmp2) {
    return 16;
  } else if (32 === tmp2) {
    return 32;
  } else if (64 === tmp2) {
    return 64;
  } else {
    if (128 !== tmp2) {
      if (256 !== tmp2) {
        if (512 !== tmp2) {
          if (1024 !== tmp2) {
            if (2048 !== tmp2) {
              if (4096 !== tmp2) {
                if (8192 !== tmp2) {
                  if (16384 !== tmp2) {
                    if (32768 !== tmp2) {
                      if (65536 !== tmp2) {
                        if (131072 !== tmp2) {
                          if (262144 !== tmp2) {
                            if (524288 !== tmp2) {
                              if (1048576 !== tmp2) {
                                if (2097152 !== tmp2) {
                                  if (4194304 !== tmp2) {
                                    if (8388608 !== tmp2) {
                                      if (16777216 !== tmp2) {
                                        if (33554432 !== tmp2) {
                                          if (67108864 === tmp2) {
                                            return 67108864;
                                          } else if (134217728 === tmp2) {
                                            return 134217728;
                                          } else if (268435456 === tmp2) {
                                            return 268435456;
                                          } else if (536870912 === tmp2) {
                                            return 536870912;
                                          } else {
                                            return 1073741824 === tmp2 ? 0 : arg0;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  return arg0 & 62914560;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return arg0 & 4194176;
  }
}
function getNextLanes(pendingLanes) {
  pendingLanes = pendingLanes.pendingLanes;
  if (0 === pendingLanes) {
    return 0;
  } else {
    ({ suspendedLanes, pingedLanes, warmLanes } = pendingLanes);
    if (0 !== (pendingLanes & 134217727)) {
      if (0 !== (tmp16 & ~suspendedLanes)) {
        let num = getHighestPriorityLanes(tmp6);
      } else if (0 !== (pingedLanes & tmp16)) {
        num = getHighestPriorityLanes(tmp7);
      } else {
        num = 0;
        if (!tmp15) {
          let num3 = 0;
          if (0 !== (tmp16 & ~warmLanes)) {
            num3 = getHighestPriorityLanes(tmp8);
          }
          num = num3;
        }
      }
    } else if (0 !== (pendingLanes & ~suspendedLanes)) {
      num = getHighestPriorityLanes(tmp);
    } else if (0 !== pingedLanes) {
      num = getHighestPriorityLanes(pingedLanes);
    } else {
      num = 0;
      if (!tmp15) {
        let num2 = 0;
        if (0 !== (pendingLanes & ~warmLanes)) {
          num2 = getHighestPriorityLanes(tmp2);
        }
        num = num2;
      }
    }
    let num4 = 0;
    if (0 !== num) {
      let tmp12 = num;
      if (0 !== arg1) {
        tmp12 = num;
        if (arg1 !== num) {
          tmp12 = num;
          if (0 === (arg1 & suspendedLanes)) {
            if ((num & -num) >= (arg1 & -arg1)) {
              tmp12 = arg1;
            } else {
              tmp12 = num;
              if (32 === tmp13) {
                tmp12 = num;
              }
            }
          }
        }
      }
      num4 = tmp12;
    }
    return num4;
  }
}
function checkIfRootIsPrerendering(pendingLanes) {
  return 0 === (pendingLanes.pendingLanes & ~pendingLanes.suspendedLanes & ~pendingLanes.pingedLanes & arg1);
}
function computeExpirationTime(arg0, arg1) {
  if (1 !== arg0) {
    if (2 !== arg0) {
      if (4 !== arg0) {
        if (8 !== arg0) {
          if (16 !== arg0) {
            if (32 !== arg0) {
              if (64 !== arg0) {
                if (128 !== arg0) {
                  if (256 !== arg0) {
                    if (512 !== arg0) {
                      if (1024 !== arg0) {
                        if (2048 !== arg0) {
                          if (4096 !== arg0) {
                            if (8192 !== arg0) {
                              if (16384 !== arg0) {
                                if (32768 !== arg0) {
                                  if (65536 !== arg0) {
                                    if (131072 !== arg0) {
                                      if (262144 !== arg0) {
                                        if (524288 !== arg0) {
                                          if (1048576 !== arg0) {
                                            if (2097152 !== arg0) {
                                              if (4194304 !== arg0) {
                                                if (8388608 !== arg0) {
                                                  if (16777216 !== arg0) {
                                                    if (33554432 !== arg0) {
                                                      if (67108864 !== arg0) {
                                                        if (134217728 !== arg0) {
                                                          if (268435456 !== arg0) {
                                                            if (536870912 !== arg0) {
                                                              if (1073741824 !== arg0) {
                                                                return -1;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      return -1;
                                                    }
                                                  }
                                                }
                                              }
                                              return -1;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          return arg1 + 5000;
        }
      }
    }
  }
  return arg1 + 250;
}
function claimNextTransitionLane() {
  c62 = tmp2;
  if (0 === (c62 << 1 & 4194176)) {
    c62 = 128;
  }
  return c62;
}
function claimNextRetryLane() {
  c63 = tmp2;
  if (0 === (c63 << 1 & 62914560)) {
    c63 = 4194304;
  }
  return c63;
}
function createLaneMap(arg0) {
  const items = [];
  let num = 0;
  do {
    let arr = items.push(arg0);
    num = num + 1;
  } while (31 > num);
  return items;
}
function markRootUpdated$1(pendingLanes) {
  pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg1;
  if (268435456 !== arg1) {
    pendingLanes.suspendedLanes = 0;
    pendingLanes.pingedLanes = 0;
    pendingLanes.warmLanes = 0;
  }
}
function markRootFinished(pendingLanes, arg1, pendingLanes2) {
  pendingLanes = pendingLanes.pendingLanes;
  pendingLanes.pendingLanes = pendingLanes2;
  pendingLanes.suspendedLanes = 0;
  pendingLanes.pingedLanes = 0;
  pendingLanes.warmLanes = 0;
  pendingLanes.expiredLanes = pendingLanes.expiredLanes & pendingLanes2;
  pendingLanes.entangledLanes = pendingLanes.entangledLanes & pendingLanes2;
  pendingLanes.errorRecoveryDisabledLanes = pendingLanes.errorRecoveryDisabledLanes & pendingLanes2;
  pendingLanes.shellSuspendCounter = 0;
  const hiddenUpdates = pendingLanes.hiddenUpdates;
  let tmp3 = pendingLanes & ~pendingLanes2;
  if (0 < tmp3) {
    do {
      let tmp5 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp3);
      tmp[diff] = 0;
      tmp2[diff] = -1;
      let arr = hiddenUpdates[diff];
      let tmp7 = tmp3;
      let tmp8 = tmp4;
      let tmp9 = tmp4;
      if (null !== arr) {
        hiddenUpdates[diff] = null;
        let num = 0;
        tmp9 = tmp4;
        if (0 < arr.length) {
          do {
            let tmp10 = arr[num];
            let tmp11 = num;
            if (null !== tmp10) {
              tmp10.lane = tmp10.lane & -536870913;
            }
            num = num + 1;
            tmp9 = tmp10;
          } while (num < arr.length);
        }
      }
      tmp3 = tmp3 & ~1 << diff;
      tmp4 = tmp9;
    } while (0 < tmp3);
  }
  if (0 !== arg3) {
    markSpawnedDeferredLane(pendingLanes, arg3, 0);
  }
  let tmp14 = 0 !== arg5;
  if (tmp14) {
    tmp14 = 0 === arg4;
  }
  if (tmp14) {
    pendingLanes.suspendedLanes = pendingLanes.suspendedLanes | arg5 & ~pendingLanes & ~arg1;
  }
}
function markSpawnedDeferredLane(pendingLanes) {
  pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg1;
  pendingLanes.suspendedLanes = pendingLanes.suspendedLanes & ~arg1;
  const diff = 31 - clz32Fallback(arg1);
  pendingLanes.entangledLanes = pendingLanes.entangledLanes | arg1;
  pendingLanes.entanglements[diff] = pendingLanes.entanglements[diff] | 1073741824 | arg2 & 4194218;
}
function markRootEntangled(entangledLanes) {
  let tmp = entangledLanes.entangledLanes | arg1;
  entangledLanes.entangledLanes = tmp;
  const entanglements = entangledLanes.entanglements;
  while (tmp) {
    let tmp2 = clz32Fallback;
    let diff = 31 - clz32Fallback(tmp);
    let tmp4 = 1 << diff;
    let tmp5 = tmp;
    if (tmp4 & arg1 | entanglements[diff] & arg1) {
      entanglements[diff] = entanglements[diff] | arg1;
    }
    tmp = tmp & ~tmp4;
  }
}
function lanesToEventPriority(arg0) {
  let num = 2;
  if (2 < (arg0 & -arg0)) {
    let num2 = 8;
    if (8 < tmp) {
      let num4 = 268435456;
      if (0 !== (tmp & 134217727)) {
        num4 = 32;
      }
      num2 = num4;
    }
    num = num2;
  }
  return num;
}
function getInspectorDataForInstance() {
  throw Error("getInspectorDataForInstance() is not available in production");
}
function shim$1() {
  throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
}
function shim() {
  throw Error("The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.");
}
function allocateTag() {
  let sum = closure_65;
  if (1 === closure_65 % 10) {
    sum = tmp + 2;
  }
  closure_65 = sum + 2;
  return sum;
}
function recursivelyUncacheFiberNode(_nativeTag) {
  if ("number" === typeof _nativeTag) {
    map.delete(_nativeTag);
    map1.delete(_nativeTag);
  } else {
    _nativeTag = _nativeTag._nativeTag;
    map.delete(_nativeTag);
    map1.delete(_nativeTag);
    const _children = _nativeTag._children;
    const item = _children.forEach(recursivelyUncacheFiberNode);
  }
}
function finalizeInitialChildren(text) {
  if (0 === text._children.length) {
    return false;
  } else {
    const _children = text._children;
    const mapped = _children.map((_nativeTag) => {
      if ("number" !== typeof _nativeTag) {
        _nativeTag = _nativeTag._nativeTag;
      }
      return _nativeTag;
    });
    const UIManager = get_BatchedBridge.UIManager;
    UIManager.setChildren(text._nativeTag, mapped);
    return false;
  }
}
function getPublicInstance(canonical) {
  let publicInstance = canonical;
  if (null != canonical.canonical) {
    publicInstance = canonical;
    if (null != canonical.canonical.publicInstance) {
      publicInstance = canonical.canonical.publicInstance;
    }
  }
  return publicInstance;
}
function createCursor(current) {
  return { current };
}
function pop(arg0) {
  if (0 <= closure_71) {
    arg0.current = table3[closure_71];
    table3[closure_71] = null;
    closure_71 = closure_71 - 1;
  }
}
function push(current, current2) {
  const sum = c71 + 1;
  c71 = sum;
  closure_70[sum] = current.current;
  current.current = current2;
}
function is(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (tmp) {
    let tmp2 = 0 !== arg0;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = arg0 !== arg0 && arg1 !== arg1;
    const tmp3 = arg0 !== arg0 && arg1 !== arg1;
  }
  return tmp;
}
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value) {
    if (null !== value) {
      value = weakMap.get(value);
      if (undefined !== value) {
        return value;
      } else {
        let obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
        const result = weakMap.set(value, obj);
        return obj;
      }
    }
  }
  obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
  return obj;
}
function pushHostContainer(arg0, arg1) {
  push(closure_77, arg1);
  push(closure_76, arg0);
  push(closure_75, null);
  pop(closure_75);
  push(closure_75, { isInAParentText: false });
}
function popHostContainer() {
  pop(closure_75);
  pop(closure_76);
  pop(closure_77);
}
function pushHostContext(memoizedState) {
  if (null !== memoizedState.memoizedState) {
    push(closure_78, memoizedState);
  }
  const current = ref.current;
  const type = memoizedState.type;
  let tmp4 = "AndroidTextInput" === type;
  if (!tmp4) {
    tmp4 = "RCTMultilineTextInputView" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTSinglelineTextInputView" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTText" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTVirtualText" === type;
  }
  let tmp5 = current;
  if (current.isInAParentText !== tmp4) {
    const obj = { isInAParentText: tmp4 };
    tmp5 = obj;
  }
  if (current !== tmp5) {
    push(closure_76, memoizedState);
    push(ref, tmp5);
  }
}
function popHostContext(arg0) {
  if (ref2.current === arg0) {
    pop(closure_75);
    pop(ref2);
  }
  if (ref3.current === arg0) {
    pop(ref3);
    obj12._currentValue = null;
  }
}
function finishQueueingConcurrentUpdates() {
  let tmp13;
  c81 = 0;
  c82 = 0;
  let num = 0;
  if (0 < c81) {
    while (true) {
      let tmp3 = dependencyMap;
      let tmp4 = dependencyMap;
      let tmp5 = +num;
      let sum = tmp5 + 1;
      dependencyMap[tmp5] = null;
      let tmp7 = dependencyMap;
      let tmp9 = dependencyMap;
      let tmp10 = +sum;
      let sum1 = tmp10 + 1;
      dependencyMap[tmp10] = null;
      let tmp12 = dependencyMap;
      tmp13 = dependencyMap[sum1];
      let tmp14 = dependencyMap;
      let tmp15 = +sum1;
      let sum2 = tmp15 + 1;
      dependencyMap[tmp15] = null;
      let tmp17 = dependencyMap;
      let tmp18 = dependencyMap[sum2];
      let tmp19 = dependencyMap;
      let tmp20 = +sum2;
      let sum3 = tmp20 + 1;
      dependencyMap[tmp20] = null;
      let tmp22 = tmp2;
      let tmp23 = tmp2;
      if (null !== dependencyMap[sum]) {
        tmp23 = tmp2;
        if (null !== tmp13) {
          break;
        }
      }
      if (0 !== tmp18) {
        let tmp25 = markUpdateLaneFromFiberToRoot;
        let tmp26 = markUpdateLaneFromFiberToRoot(dependencyMap[num], tmp13, tmp18);
      }
      tmp2 = tmp23;
      num = sum3;
    }
    if (null === tmp8.pending) {
      tmp13.next = tmp13;
    } else {
      tmp13.next = iter.next;
      iter.next = tmp13;
    }
    tmp8.pending = tmp13;
  }
}
function enqueueUpdate$1(lanes) {
  closure_81 = tmp + 1;
  closure_80[+closure_81] = lanes;
  closure_81 = tmp2 + 1;
  closure_80[+closure_81] = arg1;
  closure_81 = tmp3 + 1;
  closure_80[+closure_81] = arg2;
  closure_81 = tmp4 + 1;
  closure_80[+closure_81] = arg3;
  closure_82 = closure_82 | arg3;
  lanes.lanes = lanes.lanes | arg3;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg3;
  }
}
function enqueueConcurrentHookUpdate(arg0, arg1, arg2, arg3) {
  enqueueUpdate$1(arg0, arg1, arg2, arg3);
  return getRootForUpdatedFiber(arg0);
}
function enqueueConcurrentRenderForLane(arg0, arg1) {
  enqueueUpdate$1(arg0, null, null, arg1);
  return getRootForUpdatedFiber(arg0);
}
function markUpdateLaneFromFiberToRoot(lanes) {
  let tmp = lanes;
  lanes.lanes = lanes.lanes | arg2;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg2;
  }
  let _return = tmp.return;
  let flag = false;
  let flag2 = false;
  if (null !== _return) {
    do {
      _return.childLanes = _return.childLanes | arg2;
      let alternate2 = _return.alternate;
      let flag3 = flag;
      let tmp2 = _return;
      if (null !== alternate2) {
        alternate2.childLanes = alternate2.childLanes | arg2;
      }
      let tmp3 = flag3;
      if (22 === _return.tag) {
        let stateNode = _return.stateNode;
        let tmp4 = null === stateNode || stateNode._visibility & 1;
        if (!tmp4) {
          flag3 = true;
        }
        tmp3 = flag3;
      }
      _return = _return.return;
      flag = tmp3;
      tmp = tmp2;
      flag2 = tmp3;
    } while (null !== _return);
  }
  if (flag2) {
    flag2 = null !== arg1;
  }
  if (flag2) {
    flag2 = 3 === tmp.tag;
  }
  if (flag2) {
    const diff = 31 - clz32Fallback(arg2);
    const hiddenUpdates = tmp.stateNode.hiddenUpdates;
    let arr = hiddenUpdates[diff];
    if (null === arr) {
      const items = [arg1];
      hiddenUpdates[diff] = items;
    } else {
      arr = arr.push(arg1);
    }
    arg1.lane = arg2 | 536870912;
  }
}
function getRootForUpdatedFiber(arg0) {
  let tmp = arg0;
  if (50 < c174) {
    c174 = 0;
    c175 = null;
    const _Error = Error;
    throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
  } else {
    let _return = tmp.return;
    if (null !== _return) {
      do {
        tmp = _return;
        _return = _return.return;
      } while (null !== tmp3);
    }
    let stateNode = null;
    if (3 === tmp.tag) {
      stateNode = tmp.stateNode;
    }
    return stateNode;
  }
}
function ensureRootIsScheduled(next) {
  let tmp = next !== closure_84;
  if (tmp) {
    tmp = null === next.next;
  }
  if (tmp) {
    if (null === closure_84) {
      closure_84 = next;
      closure_83 = next;
    } else {
      closure_84.next = next;
      closure_84 = next;
    }
  }
  c86 = true;
  if (!c85) {
    c85 = true;
    const result = push2.unstable_scheduleCallback(push2.unstable_ImmediatePriority, processRootScheduleInMicrotask);
    const obj = push2;
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  if (!c87) {
    if (c86) {
      c87 = true;
      while (true) {
        let iter = c83;
        let tmp6 = tmp4;
        let tmp7 = tmp5;
        let flag3 = false;
        let flag4 = false;
        let tmp8 = tmp4;
        let tmp9 = tmp5;
        if (null !== c83) {
          while (true) {
            let tmp10 = flag3;
            let tmp11 = iter;
            let tmp12 = tmp6;
            let tmp13 = tmp7;
            if (!arg1) {
              {
                let tmp16 = c147;
                let num8 = 0;
                let tmp15 = getNextLanes;
                if (iter === c147) {
                  num8 = c149;
                }
                let tmp15Result = tmp15(iter, num8);
                let tmp18 = 0 === (tmp15Result & 3);
                if (!tmp18) {
                  let tmp19 = checkIfRootIsPrerendering;
                  tmp18 = checkIfRootIsPrerendering(iter, tmp15Result);
                }
                let flag5 = flag3;
                let tmp14 = tmp6;
                tmp13 = tmp15Result;
                if (!tmp18) {
                  let tmp20 = performSyncWorkOnRoot;
                  let tmp21 = performSyncWorkOnRoot(iter, tmp15Result);
                  flag5 = true;
                  tmp14 = tmp6;
                  tmp13 = tmp15Result;
                }
              }
            } else {
              flag5 = flag3;
              tmp14 = tmp6;
            }
            iter = iter.next;
            flag3 = flag5;
            tmp6 = tmp14;
            tmp7 = tmp13;
            flag4 = flag5;
            tmp8 = tmp14;
            tmp9 = tmp13;
            continue;
          }
          let tmp23 = clz32Fallback;
          ({ suspendedLanes, pingedLanes } = iter);
          let tmp24 = (1 << 31 - clz32Fallback(tmp3) + 1) - 1 & (tmp22 & ~suspendedLanes & ~pingedLanes);
          let tmp25 = tmp24 & 201326677;
          if (tmp25) {
            let num9 = tmp25 | 1;
          } else {
            num9 = 0;
            if (tmp24) {
              num9 = tmp24 | 2;
            }
          }
          let tmp26 = num9;
        }
        tmp4 = tmp8;
        tmp5 = tmp9;
        if (flag4) {
          continue;
        } else {
          c87 = false;
        }
      }
    }
  }
}
function processRootScheduleInMicrotask() {
  let next;
  c85 = false;
  c86 = false;
  if (0 !== c88) {
    c88 = 0;
  }
  push2;
  let iter = next;
  let tmp3 = null;
  if (null !== next) {
    do {
      next = iter.next;
      let tmp4 = scheduleTaskForRootDuringMicrotask;
      let tmp5 = scheduleTaskForRootDuringMicrotask(iter, tmp2);
      let tmp6 = tmp3;
      let tmp7 = iter;
      if (0 === tmp5) {
        iter.next = null;
        if (null !== tmp3) {
          tmp3.next = next;
        }
        let tmp8 = tmp3;
        if (null === next) {
          c84 = tmp3;
          tmp8 = tmp3;
        }
      } else {
        tmp8 = iter;
        if (0 !== (tmp5 & 3)) {
          c86 = true;
          tmp8 = iter;
        }
      }
      tmp3 = tmp8;
      iter = next;
    } while (null !== next);
  }
  flushSyncWorkAcrossRoots_impl(0, false);
}
function scheduleTaskForRootDuringMicrotask(expirationTimes) {
  expirationTimes = expirationTimes.expirationTimes;
  let tmp3 = expirationTimes.pendingLanes & -62914561;
  if (0 < tmp3) {
    do {
      let tmp4 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp3);
      let tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      let tmp8 = tmp3;
      if (-1 === tmp7) {
        if (0 === (tmp6 & tmp)) {
          let tmp9 = computeExpirationTime;
          expirationTimes[diff] = computeExpirationTime(tmp6, arg1);
        }
      } else if (tmp7 <= arg1) {
        expirationTimes.expiredLanes = expirationTimes.expiredLanes | tmp6;
      }
      tmp3 = tmp3 & ~tmp6;
    } while (0 < tmp3);
  }
  let num = 0;
  if (expirationTimes === c147) {
    num = c149;
  }
  const tmp10Result = getNextLanes(expirationTimes, num);
  const callbackNode = expirationTimes.callbackNode;
  if (0 !== tmp10Result) {
    if (!tmp11) {
      if (null === expirationTimes.cancelPendingCommit) {
        if (0 !== (tmp10Result & 3)) {
          if (!checkIfRootIsPrerendering(expirationTimes, tmp10Result)) {
            if (null !== callbackNode) {
              const result = push2.unstable_cancelCallback(callbackNode);
              const obj = push2;
            }
            expirationTimes.callbackPriority = 2;
            expirationTimes.callbackNode = null;
            return 2;
          }
        }
        if ((tmp10Result & -tmp10Result) === expirationTimes.callbackPriority) {
          return tmp19;
        } else {
          if (null !== callbackNode) {
            const result1 = push2.unstable_cancelCallback(callbackNode);
            obj2 = push2;
          }
          const tmp24 = lanesToEventPriority(tmp10Result);
          if (2 !== tmp24) {
            if (8 !== tmp24) {
              if (32 === tmp24) {
                let unstable_UserBlockingPriority = push2.unstable_NormalPriority;
              } else if (268435456 === tmp24) {
                unstable_UserBlockingPriority = push2.unstable_IdlePriority;
              } else {
                unstable_UserBlockingPriority = push2.unstable_NormalPriority;
              }
            }
            const bindResult = performWorkOnRootViaSchedulerTask.bind(null, expirationTimes);
            expirationTimes.callbackPriority = tmp19;
            expirationTimes.callbackNode = push2.unstable_scheduleCallback(unstable_UserBlockingPriority, bindResult);
            return tmp19;
          }
          unstable_UserBlockingPriority = push2.unstable_UserBlockingPriority;
        }
      }
    }
  }
  if (null !== callbackNode) {
    const result2 = push2.unstable_cancelCallback(callbackNode);
    obj4 = push2;
  }
  expirationTimes.callbackNode = null;
  expirationTimes.callbackPriority = 0;
  return 0;
}
function performWorkOnRootViaSchedulerTask(callbackNode) {
  callbackNode = callbackNode.callbackNode;
  if (flushPassiveEffects()) {
    if (callbackNode.callbackNode !== callbackNode) {
      return null;
    }
  }
  let num = 0;
  if (callbackNode === c147) {
    num = c149;
  }
  const tmpResult = getNextLanes(callbackNode, num);
  if (0 === tmpResult) {
    return null;
  } else {
    performWorkOnRoot(callbackNode, tmpResult, arg1);
    scheduleTaskForRootDuringMicrotask(callbackNode, push2.unstable_now());
    let bindResult = null;
    if (null != callbackNode.callbackNode) {
      bindResult = null;
      if (callbackNode.callbackNode === callbackNode) {
        bindResult = performWorkOnRootViaSchedulerTask.bind(null, callbackNode);
      }
    }
    return bindResult;
  }
  const tmp = getNextLanes;
}
function performSyncWorkOnRoot(arg0, arg1) {
  if (flushPassiveEffects()) {
    return null;
  } else {
    performWorkOnRoot(arg0, arg1, true);
  }
}
function requestTransitionLane() {
  if (0 === closure_88) {
    closure_88 = claimNextTransitionLane();
  }
  return closure_88;
}
function entangleAsyncAction(arg0, promise) {
  if (null === items) {
    items = [];
    closure_90 = 0;
    closure_91 = requestTransitionLane();
    const obj = {
      status: "pending",
      value: undefined,
      then(arg0) {
          items.push(arg0);
        }
    };
  }
  closure_90 = closure_90 + 1;
  promise.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return promise;
}
function pingEngtangledActionScope() {
  let length;
  const diff = c90 - 1;
  c90 = diff;
  if (0 === diff) {
    if (null !== _null2) {
      if (null !== c92) {
        c92.status = "fulfilled";
      }
      _null2 = null;
      c91 = 0;
      c92 = null;
      let num = 0;
      if (0 < _null2.length) {
        do {
          let tmp6 = arr[num]();
          num = num + 1;
          length = arr.length;
        } while (num < length);
      }
    }
  }
}
function chainThenableValue(promise) {
  closure_0 = arg1;
  closure_1 = [];
  const obj = {
    status: "pending",
    value: null,
    reason: null,
    then(arg0) {

    }
  };
  promise.then(() => {
    let length;
    obj.status = "fulfilled";
    obj.value = closure_0;
    let num = 0;
    if (0 < arr.length) {
      do {
        let tmp = arr;
        let tmp2 = closure_0;
        let tmp3 = arr[num](closure_0);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  }, (reason) => {
    let length;
    obj.status = "rejected";
    obj.reason = reason;
    let num = 0;
    if (0 < arr.length) {
      do {
        let tmp = arr;
        let tmp2 = arr[num](undefined);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  });
  return obj;
}
function initializeUpdateQueue(memoizedState) {
  const obj = { baseState: memoizedState.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  memoizedState.updateQueue = obj;
}
function cloneUpdateQueue(updateQueue, updateQueue2) {
  updateQueue = updateQueue.updateQueue;
  if (updateQueue2.updateQueue === updateQueue) {
    const obj = {};
    ({ baseState: obj.baseState, firstBaseUpdate: obj.firstBaseUpdate, lastBaseUpdate: obj.lastBaseUpdate, shared: obj.shared } = updateQueue);
    obj.callbacks = null;
    updateQueue2.updateQueue = obj;
  }
}
function createUpdate(lane) {
  const obj = { lane, tag: 0, payload: null, callback: null, next: null };
  return obj;
}
function enqueueUpdate(updateQueue, next) {
  updateQueue = updateQueue.updateQueue;
  if (null === updateQueue) {
    return null;
  } else {
    const shared = updateQueue.shared;
    if (0 !== (c146 & 2)) {
      if (null === shared.pending) {
        next.next = next;
      } else {
        next.next = iter.next;
        iter.next = next;
      }
      shared.pending = next;
      markUpdateLaneFromFiberToRoot(updateQueue, null, arg2);
      return getRootForUpdatedFiber(updateQueue);
    } else {
      enqueueUpdate$1(updateQueue, shared, next, arg2);
      return getRootForUpdatedFiber(updateQueue);
    }
  }
}
function entangleTransitions(pendingLanes, updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    const shared = updateQueue.shared;
    if (0 !== (arg2 & 4194176)) {
      shared.lanes = arg2 | shared.lanes & pendingLanes.pendingLanes;
      markRootEntangled(pendingLanes, arg2 | shared.lanes & pendingLanes.pendingLanes);
    }
  }
}
function enqueueCapturedUpdate(arg0, next) {
  let tmp7;
  ({ updateQueue, alternate } = arg0);
  if (null !== alternate) {
    const updateQueue2 = alternate.updateQueue;
    if (updateQueue === updateQueue2) {
      let iter = updateQueue.firstBaseUpdate;
      let tmp = null;
      let tmp2 = next;
      let tmp3 = null;
      if (null !== iter) {
        do {
          let obj = {};
          ({ lane: obj.lane, tag: obj.tag, payload: obj.payload } = iter);
          obj.callback = null;
          obj.next = null;
          let tmp4 = iter;
          let tmp5 = tmp;
          let tmp6 = tmp3;
          tmp7 = obj;
          if (null !== tmp3) {
            tmp3.next = obj;
            tmp7 = tmp;
          }
          iter = iter.next;
          tmp = tmp7;
          tmp3 = obj;
        } while (null !== iter);
        tmp2 = next;
        if (null !== obj) {
          obj.next = next;
          tmp2 = tmp7;
        }
      }
      obj = { baseState: updateQueue2.baseState, firstBaseUpdate: tmp2, lastBaseUpdate: next };
      ({ shared: obj2.shared, callbacks: obj2.callbacks } = updateQueue2);
      arg0.updateQueue = obj;
    }
  }
  const lastBaseUpdate = updateQueue.lastBaseUpdate;
  if (null === lastBaseUpdate) {
    updateQueue.firstBaseUpdate = next;
  } else {
    lastBaseUpdate.next = next;
  }
  updateQueue.lastBaseUpdate = next;
}
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (c94) {
    if (null !== c92) {
      throw c92;
    }
  }
}
function processUpdateQueue(updateQueue, channels, closure_1) {
  let obj;
  let tmp18;
  let tmp19;
  let tmp20;
  c94 = false;
  updateQueue = updateQueue.updateQueue;
  c93 = false;
  ({ firstBaseUpdate, lastBaseUpdate } = updateQueue);
  let tmp = firstBaseUpdate;
  if (null !== updateQueue.shared.pending) {
    updateQueue.shared.pending = null;
    const next = iter.next;
    iter.next = null;
    let tmp2 = next;
    if (null !== lastBaseUpdate) {
      lastBaseUpdate.next = next;
      tmp2 = firstBaseUpdate;
    }
    const alternate = updateQueue.alternate;
    tmp = tmp2;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      const lastBaseUpdate2 = updateQueue2.lastBaseUpdate;
      tmp = tmp2;
      if (lastBaseUpdate2 !== iter) {
        if (null === lastBaseUpdate2) {
          updateQueue2.firstBaseUpdate = next;
        } else {
          lastBaseUpdate2.next = next;
        }
        updateQueue2.lastBaseUpdate = iter;
      }
    }
  }
  if (null !== tmp) {
    let baseState = updateQueue.baseState;
    let num = 0;
    let iter2 = tmp;
    let tmp29 = null;
    let tmp30 = null;
    let tmp31 = null;
    while (true) {
      let tmp4 = iter2.lane & -536870913;
      let tmp5 = tmp4 !== iter2.lane;
      let tmp6 = num;
      let tmp7 = iter2;
      let tmp8 = tmp29;
      let tmp9 = tmp30;
      let tmp10 = tmp31;
      let tmp11 = baseState;
      let tmp12 = tmp32;
      let tmp13 = tmp33;
      let tmp14 = tmp34;
      if (tmp5) {
        let tmp16 = c149;
        let tmp15 = (c149 & tmp4) === tmp4;
      } else {
        tmp15 = (arg3 & tmp4) === tmp4;
      }
      if (tmp15) {
        let tmp21 = 0 !== tmp4;
        if (tmp21) {
          let tmp22 = c91;
          tmp21 = tmp4 === c91;
        }
        if (tmp21) {
          c94 = true;
        }
        let tmp23 = tmp31;
        if (null !== tmp31) {
          obj = { lane: 0, tag: null, payload: null, callback: null, next: null };
          ({ tag: obj2.tag, payload: obj2.payload } = iter2);
          tmp31.next = obj;
          tmp23 = obj;
        }
        let tag = iter2.tag;
        if (1 === tag) {
          let payload2 = iter2.payload;
          let callResult = payload2;
          let tmp25 = payload2;
          if ("function" === typeof payload2) {
            callResult = payload2.call(closure_1, baseState, channels);
            tmp25 = payload2;
          }
        } else {
          if (3 === tag) {
            updateQueue.flags = updateQueue.flags & -65537 | 128;
          } else if (0 !== tag) {
            callResult = baseState;
            tmp25 = updateQueue;
            if (2 === tag) {
              c93 = true;
              callResult = baseState;
              tmp25 = updateQueue;
            }
          }
          let payload = iter2.payload;
          let callResult1 = payload;
          if ("function" === typeof payload) {
            callResult1 = payload.call(closure_1, baseState, channels);
          }
          callResult = baseState;
          tmp25 = payload;
          if (null !== callResult1) {
            callResult = baseState;
            tmp25 = payload;
            if (undefined !== callResult1) {
              let tmp27 = assign;
              callResult = assign({}, baseState, callResult1);
              tmp25 = payload;
            }
          }
        }
        let callback = iter2.callback;
        tmp19 = num;
        let tmp17 = tmp29;
        tmp18 = tmp30;
        obj = tmp23;
        tmp20 = callResult;
        tmp12 = tmp25;
        tmp13 = iter2;
        tmp14 = closure_1;
        if (null !== callback) {
          updateQueue.flags = updateQueue.flags | 64;
          if (tmp5) {
            updateQueue.flags = updateQueue.flags | 8192;
          }
          let callbacks = updateQueue.callbacks;
          if (null === callbacks) {
            let items = [callback];
            updateQueue.callbacks = items;
            tmp19 = num;
            tmp17 = tmp29;
            tmp18 = tmp30;
            obj = tmp23;
            tmp20 = callResult;
            tmp12 = tmp25;
            tmp13 = iter2;
            tmp14 = closure_1;
          } else {
            let arr = callbacks.push(callback);
            tmp19 = num;
            tmp17 = tmp29;
            tmp18 = tmp30;
            obj = tmp23;
            tmp20 = callResult;
            tmp12 = tmp25;
            tmp13 = iter2;
            tmp14 = closure_1;
          }
        }
      } else {
        obj = { lane: tmp4 };
        ({ tag: obj.tag, payload: obj.payload, callback: obj.callback } = iter2);
        obj.next = null;
        tmp17 = baseState;
        tmp18 = obj;
        if (null !== tmp31) {
          tmp31.next = obj;
          tmp17 = tmp29;
          tmp18 = tmp30;
        }
        tmp19 = num | tmp4;
        tmp20 = baseState;
      }
      iter2 = iter2.next;
      num = tmp19;
      tmp29 = tmp17;
      tmp30 = tmp18;
      tmp31 = obj;
      baseState = tmp20;
      tmp32 = tmp12;
      tmp33 = tmp13;
      tmp34 = tmp14;
      if (null !== iter2) {
        continue;
      } else {
        let iter3 = updateQueue.shared.pending;
        if (null === iter3) {
          break;
        } else {
          iter2 = iter3.next;
          iter3.next = null;
          updateQueue.lastBaseUpdate = iter3;
          updateQueue.shared.pending = null;
          num = tmp19;
          tmp29 = tmp17;
          tmp30 = tmp18;
          tmp31 = obj;
          baseState = tmp20;
          tmp32 = tmp12;
          tmp33 = tmp13;
          tmp34 = tmp14;
          continue;
        }
      }
      continue;
    }
    if (null === obj) {
      tmp17 = tmp20;
    }
    updateQueue.baseState = tmp17;
    updateQueue.firstBaseUpdate = tmp18;
    updateQueue.lastBaseUpdate = obj;
    if (null === tmp) {
      updateQueue.shared.lanes = 0;
    }
    closure_157 = closure_157 | tmp19;
    updateQueue.lanes = tmp19;
    updateQueue.memoizedState = tmp20;
  }
}
function callCallback(call, closure_1) {
  if ("function" !== typeof call) {
    const _Error = Error;
    throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + call);
  } else {
    call.call(closure_1);
  }
}
function commitCallbacks(callbacks) {
  let length;
  callbacks = callbacks.callbacks;
  if (null !== callbacks) {
    callbacks.callbacks = null;
    let num = 0;
    if (0 < callbacks.length) {
      do {
        let tmp = callCallback;
        let tmp2 = callCallback(callbacks[num], arg1);
        num = num + 1;
        length = callbacks.length;
      } while (num < length);
    }
  }
}
function shallowEqual(arg0, closure_1) {
  if (is(arg0, closure_1)) {
    return true;
  } else {
    if ("object" === typeof arg0) {
      if (null !== arg0) {
        if ("object" === typeof closure_1) {
          if (null !== closure_1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            if (keys.length !== Object.keys(closure_1).length) {
              return false;
            } else {
              let num = 0;
              if (0 < keys.length) {
                while (hasOwnProperty.call(closure_1, keys[num])) {
                  let tmp4 = is;
                  if (!is(arg0[tmp], closure_1[tmp])) {
                    break;
                  } else {
                    num = num + 1;
                  }
                }
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
function isThenableResolved(status) {
  status = status.status;
  let tmp = "fulfilled" === status;
  if (!tmp) {
    tmp = "rejected" === status;
  }
  return tmp;
}
function noop() {

}
function trackUsedThenable(arr, promise) {
  closure_0 = promise;
  if (undefined === arr[arg2]) {
    arr.push(promise);
    let iter = promise;
  } else {
    iter = promise;
    if (tmp !== promise) {
      promise.then(noop, noop);
      closure_0 = tmp;
      iter = tmp;
    }
  }
  const status = iter.status;
  if ("fulfilled" === status) {
    return iter.value;
  } else if ("rejected" === status) {
    const reason2 = iter.reason;
    checkIfUseWrappedInAsyncCatch(reason2);
    throw reason2;
  } else {
    if ("string" === typeof iter.status) {
      iter.then(noop, noop);
    } else {
      if (null !== _null7) {
        if (100 < _null7.shellSuspendCounter) {
          const _Error = Error;
          throw Error("async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
        }
      }
      iter.status = "pending";
      iter.then((value) => {
        if ("pending" === closure_0.status) {
          closure_0.status = "fulfilled";
          closure_0.value = value;
        }
      }, (reason) => {
        if ("pending" === closure_0.status) {
          closure_0.status = "rejected";
          closure_0.reason = reason;
        }
      });
    }
    const status2 = iter.status;
    if ("fulfilled" === status2) {
      return iter.value;
    } else if ("rejected" === status2) {
      const reason = iter.reason;
      checkIfUseWrappedInAsyncCatch(reason);
      throw reason;
    } else {
      throw closure_96;
    }
  }
}
function getSuspendedThenable() {
  if (null === c99) {
    const _Error = Error;
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  } else {
    c99 = null;
    return c99;
  }
}
function checkIfUseWrappedInAsyncCatch(arg0) {
  if (arg0 === closure_96) {
    const _Error = Error;
    throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
  }
}
function unwrapThenable(arg0) {
  closure_101 = closure_101 + 1;
  if (null === closure_100) {
    closure_100 = [];
  }
  return trackUsedThenable(closure_100, arg0, closure_101);
}
function coerceRef(arg0, props) {
  let tmp = null;
  if (undefined !== props.props.ref) {
    tmp = ref;
  }
  arg0.ref = tmp;
}
function throwOnInvalidObjectType(arg0, $$typeof) {
  if ($$typeof.$$typeof === closure_4) {
    const _Error = Error;
    throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
  } else {
    const _Object = Object;
    let callResult = toString.call($$typeof);
    if ("[object Object]" === callResult) {
      const _Object2 = Object;
      const keys = Object.keys($$typeof);
      callResult = `${"object with keys {" + obj.join(", ")}}`;
    }
    throw Error("Objects are not valid as a React child (found: " + callResult + "). If you meant to render a collection of children, use an array instead.");
  }
}
function resolveLazy(_init) {
  return _init._init(_init._payload);
}
function createChildReconciler(arg0) {
  closure_0 = arg0;
  function deleteChild(deletions) {
    if (closure_0) {
      deletions = deletions.deletions;
      if (null === deletions) {
        const items = [arg1];
        deletions.deletions = items;
        deletions.flags = deletions.flags | 16;
      } else {
        deletions.push(arg1);
      }
    }
  }
  function deleteRemainingChildren(arg0, arg1) {
    let sibling = arg1;
    if (closure_0) {
      if (null !== sibling) {
        do {
          let tmp = deleteChild;
          let tmp2 = deleteChild(arg0, sibling);
          sibling = sibling.sibling;
        } while (null !== sibling);
      }
      return null;
    } else {
      return null;
    }
  }
  function mapRemainingChildren(arg0) {
    let sibling = arg0;
    map = new Map();
    if (null !== arg0) {
      do {
        let tmp = sibling;
        if (null !== sibling.key) {
          let result = map.set(sibling.key, sibling);
        } else {
          let result1 = map.set(sibling.index, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
    return map;
  }
  function useFiber(arg0, arg1) {
    const tmp = closure_1_479(arg0, arg1);
    tmp.index = 0;
    tmp.sibling = null;
    return tmp;
  }
  function placeChild(alternate, arg1, index) {
    alternate.index = index;
    if (closure_0) {
      alternate = alternate.alternate;
      if (null !== alternate) {
        index = alternate.index;
        if (index < arg1) {
          alternate.flags = alternate.flags | 33554434;
          index = arg1;
        }
        return index;
      } else {
        alternate.flags = alternate.flags | 33554434;
        return arg1;
      }
    } else {
      alternate.flags = alternate.flags | 1048576;
      return arg1;
    }
  }
  function placeSingleChild(alternate) {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null === alternate.alternate;
    }
    if (tmp) {
      alternate.flags = alternate.flags | 33554434;
    }
    return alternate;
  }
  function updateTextNode(arg0, tag) {
    if (null !== tag) {
      if (6 === tag.tag) {
        const tmp2 = useFiber(tag, arg2);
        tmp2.return = arg0;
        return tmp2;
      }
    }
    const tmp3 = closure_1_484(arg2, arg0.mode, arg3);
    tmp3.return = arg0;
    return tmp3;
  }
  function updateElement(arg0, elementType, type) {
    type = type.type;
    if (type === updateTextNode) {
      return updateFragment(arg0, elementType, type.props.children, arg3, type.key);
    } else {
      if (null !== elementType) {
        const tmp9 = useFiber(elementType, type.props);
        closure_1_291(tmp9, type);
        tmp9.return = arg0;
        return tmp9;
      }
      const tmp5 = closure_1_481(type.type, type.key, type.props, undefined, arg0.mode, arg3);
      closure_1_291(tmp5, type);
      tmp5.return = arg0;
      return tmp5;
    }
  }
  function updatePortal(arg0, tag, containerInfo) {
    if (null !== tag) {
      if (4 === tag.tag) {
        if (tag.stateNode.containerInfo === containerInfo.containerInfo) {
          if (tag.stateNode.implementation === containerInfo.implementation) {
            let children = containerInfo.children;
            if (!children) {
              children = [];
            }
            const tmpResult = useFiber(tag, children);
            tmpResult.return = arg0;
            return tmpResult;
          }
        }
      }
    }
    const tmp3 = closure_1_485(containerInfo, arg0.mode, arg3);
    tmp3.return = arg0;
    return tmp3;
  }
  function updateFragment(arg0, tag) {
    if (null !== tag) {
      if (7 === tag.tag) {
        const tmp2 = useFiber(tag, arg2);
        tmp2.return = arg0;
        return tmp2;
      }
    }
    const tmp3 = closure_1_482(arg2, arg0.mode, arg3, arg4);
    tmp3.return = arg0;
    return tmp3;
  }
  function createChild(mode, $$typeof) {
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp) {
        if ("bigint" !== tmp) {
          if ("object" === tmp) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (placeChild === $$typeof) {
                const tmp23 = closure_1_481($$typeof.type, $$typeof.key, $$typeof.props, undefined, mode.mode, arg2);
                closure_1_291(tmp23, $$typeof);
                tmp23.return = mode;
                return tmp23;
              } else if (placeSingleChild === $$typeof) {
                const tmp20 = closure_1_485($$typeof, mode.mode, arg2);
                tmp20.return = mode;
                return tmp20;
              } else if (closure_1_17 === $$typeof) {
                return createChild(mode, $$typeof._init($$typeof._payload), arg2);
              } else {
                if (!deleteRemainingChildren($$typeof)) {
                  if (!closure_1_177($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return createChild(mode, closure_1_290($$typeof), arg2);
                    } else if ($$typeof.$$typeof === updateSlot) {
                      return createChild(mode, closure_1_394(mode, $$typeof), arg2);
                    } else {
                      closure_1_292(undefined, $$typeof);
                    }
                  }
                }
                const tmp17 = closure_1_482($$typeof, mode.mode, arg2, null);
                tmp17.return = mode;
                return tmp17;
              }
            }
          }
          return null;
        }
      }
    }
    const tmp26 = closure_1_484("" + $$typeof, mode.mode, arg2);
    tmp26.return = mode;
    return tmp26;
  }
  function updateSlot(arg0, key, $$typeof) {
    key = null;
    if (null !== key) {
      key = key.key;
    }
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp2) {
        if ("bigint" !== tmp2) {
          if ("object" === tmp2) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (placeChild === $$typeof) {
                let tmp35 = null;
                if ($$typeof.key === key) {
                  tmp35 = updateElement(arg0, key, $$typeof, arg3);
                }
                return tmp35;
              } else if (placeSingleChild === $$typeof) {
                let tmp29 = null;
                if ($$typeof.key === key) {
                  tmp29 = updatePortal(arg0, key, $$typeof, arg3);
                }
                return tmp29;
              } else if (closure_1_17 === $$typeof) {
                return updateSlot(arg0, key, $$typeof._init($$typeof._payload), arg3);
              } else {
                if (!deleteRemainingChildren($$typeof)) {
                  if (!closure_1_177($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return updateSlot(arg0, key, closure_1_290($$typeof), arg3);
                    } else if ($$typeof.$$typeof === updateSlot) {
                      return updateSlot(arg0, key, closure_1_394(arg0, $$typeof), arg3);
                    } else {
                      closure_1_292(undefined, $$typeof);
                    }
                  }
                }
                let tmp18 = null;
                if (null === key) {
                  tmp18 = updateFragment(arg0, key, $$typeof, arg3, null);
                }
                return tmp18;
              }
            }
          }
          return null;
        }
      }
    }
    let tmp41 = null;
    if (null === key) {
      tmp41 = updateTextNode(arg0, key, "" + $$typeof, arg3);
    }
    return tmp41;
  }
  function updateFromMap(get, arg1, arg2, $$typeof) {
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp) {
        if ("bigint" !== tmp) {
          if ("object" === tmp) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (placeChild === $$typeof) {
                let key2 = arg2;
                if (null !== $$typeof.key) {
                  key2 = $$typeof.key;
                }
                const tmp39 = get.get(key2) || null;
                return updateElement(arg1, tmp39, $$typeof, arg4);
              } else if (placeSingleChild === $$typeof) {
                let key = arg2;
                if (null !== $$typeof.key) {
                  key = $$typeof.key;
                }
                const tmp33 = get.get(key) || null;
                return updatePortal(arg1, tmp33, $$typeof, arg4);
              } else if (closure_1_17 === $$typeof) {
                return updateFromMap(get, arg1, arg2, $$typeof._init($$typeof._payload), arg4);
              } else {
                if (!deleteRemainingChildren($$typeof)) {
                  if (!closure_1_177($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return updateFromMap(get, arg1, arg2, closure_1_290($$typeof), arg4);
                    } else if ($$typeof.$$typeof === updateSlot) {
                      return updateFromMap(get, arg1, arg2, closure_1_394(arg1, $$typeof), arg4);
                    } else {
                      closure_1_292(undefined, $$typeof);
                    }
                  }
                }
                const tmp21 = get.get(arg2) || null;
                return updateFragment(arg1, tmp21, $$typeof, arg4, null);
              }
            }
          }
          return null;
        }
      }
    }
    return updateTextNode(arg1, get.get(arg2) || null, "" + $$typeof, arg4);
  }
  function reconcileChildrenArray(arg0, arg1, arg2, arg3) {
    let sibling;
    let tmp9;
    closure_0 = arg0;
    let num = 0;
    let tmp = null;
    let tmp2 = null;
    let tmp3 = arg1;
    let num2 = 0;
    if (null !== arg1) {
      let num3 = 0;
      let tmp22 = null;
      let tmp23 = null;
      let tmp24 = arg1;
      let num4 = 0;
      num = 0;
      tmp = null;
      tmp2 = null;
      tmp3 = arg1;
      num2 = 0;
      if (0 < arg2.length) {
        while (true) {
          let tmp4 = num3;
          let tmp5 = tmp22;
          let tmp6 = tmp23;
          let tmp7 = tmp24;
          let tmp8 = num4;
          tmp9 = null;
          sibling = tmp24;
          if (tmp24.index <= num4) {
            sibling = tmp24.sibling;
            tmp9 = tmp24;
          }
          let tmp10 = updateSlot;
          let tmp11 = arg0;
          let tmp12 = tmp9;
          let tmp13 = arg3;
          let tmp14 = updateSlot(arg0, tmp9, arg2[num4], arg3);
          if (null === tmp14) {
            break;
          } else {
            let tmp15 = closure_0;
            if (closure_0) {
              tmp15 = tmp9;
            }
            if (tmp15) {
              tmp15 = null === tmp14.alternate;
            }
            if (tmp15) {
              let tmp16 = deleteChild;
              let tmp17 = deleteChild(arg0, tmp9);
            }
            let tmp18 = placeChild;
            let tmp19 = placeChild(tmp14, num3, num4);
            let tmp20 = tmp14;
            if (null !== tmp23) {
              tmp23.sibling = tmp14;
              tmp20 = tmp22;
            }
            let sum = num4 + 1;
            num = tmp19;
            tmp = tmp20;
            tmp2 = tmp14;
            tmp3 = sibling;
            num2 = sum;
            if (null !== sibling) {
              num3 = tmp19;
              tmp22 = tmp20;
              tmp23 = tmp14;
              tmp24 = sibling;
              num4 = sum;
              num = tmp19;
              tmp = tmp20;
              tmp2 = tmp14;
              tmp3 = sibling;
              num2 = sum;
            }
          }
        }
        num = num3;
        tmp = tmp22;
        tmp2 = tmp23;
        num2 = num4;
        tmp3 = tmp9;
        if (null === tmp9) {
          num = num3;
          tmp = tmp22;
          tmp2 = tmp23;
          tmp3 = sibling;
          num2 = num4;
        }
      }
    }
    if (num2 === arg2.length) {
      deleteRemainingChildren(arg0, tmp3);
      return tmp;
    } else if (null === tmp3) {
      let tmp50 = tmp;
      let tmp51 = tmp;
      if (num2 < arg2.length) {
        do {
          let tmp52 = createChild;
          let tmp53 = createChild(arg0, arg2[num2], arg3);
          let tmp54 = num;
          let tmp55 = tmp50;
          let tmp56 = tmp2;
          let tmp57 = num2;
          let tmp58 = num;
          let tmp59 = tmp50;
          let tmp60 = tmp2;
          if (null !== tmp53) {
            let tmp61 = placeChild;
            let tmp63 = tmp53;
            let tmp62 = placeChild(tmp53, num, num2);
            if (null !== tmp2) {
              tmp2.sibling = tmp53;
              tmp63 = tmp50;
            }
            tmp59 = tmp63;
            tmp58 = tmp62;
            tmp60 = tmp53;
          }
          num2 = num2 + 1;
          num = tmp58;
          tmp50 = tmp59;
          tmp2 = tmp60;
          tmp51 = tmp59;
        } while (num2 < arg2.length);
      }
      return tmp51;
    } else {
      const arr = mapRemainingChildren(tmp3);
      let tmp44 = num;
      let tmp45 = tmp;
      let tmp46 = tmp2;
      let sum1 = num2;
      let tmp47 = tmp;
      if (num2 < arg2.length) {
        do {
          let tmp25 = updateFromMap;
          let tmp26 = arr;
          let tmp27 = arg0;
          let tmp28 = sum1;
          let tmp29 = arg3;
          let tmp30 = updateFromMap(arr, arg0, sum1, arg2[sum1], arg3);
          let tmp31 = tmp44;
          let tmp32 = tmp45;
          let tmp33 = tmp46;
          let tmp34 = sum1;
          let tmp35 = tmp44;
          let tmp36 = tmp45;
          let tmp37 = tmp46;
          if (null !== tmp30) {
            let tmp38 = closure_0;
            if (closure_0) {
              tmp38 = null !== tmp30.alternate;
            }
            if (tmp38) {
              let key = sum1;
              if (null !== tmp30.key) {
                key = tmp30.key;
              }
              let deleteResult = arr.delete(key);
            }
            let tmp40 = placeChild;
            let tmp42 = tmp30;
            let tmp41 = placeChild(tmp30, tmp44, sum1);
            if (null !== tmp46) {
              tmp46.sibling = tmp30;
              tmp42 = tmp45;
            }
            tmp36 = tmp42;
            tmp35 = tmp41;
            tmp37 = tmp30;
          }
          sum1 = sum1 + 1;
          tmp44 = tmp35;
          tmp45 = tmp36;
          tmp46 = tmp37;
          tmp47 = tmp36;
        } while (sum1 < arg2.length);
      }
      if (closure_0) {
        const item = arr.forEach((arg0) => {
          closure_1_1(closure_0, arg0);
        });
      }
      return tmp47;
    }
  }
  function reconcileChildrenIterator(arg0, arg1, next) {
    let iter4;
    let iter6;
    let sibling;
    let tmp7;
    closure_0 = arg0;
    if (null == next) {
      const _Error = Error;
      throw Error("An iterable object provided no iterator.");
    } else {
      const iter7 = next.next();
      let num = 0;
      let tmp20 = null;
      let tmp21 = null;
      let tmp22 = arg1;
      let num2 = 0;
      let iter2 = iter7;
      if (null !== arg1) {
        let num3 = 0;
        let tmp23 = null;
        let tmp24 = null;
        let tmp25 = arg1;
        let num4 = 0;
        let iter3 = iter7;
        num = 0;
        tmp20 = null;
        tmp21 = null;
        tmp22 = arg1;
        num2 = 0;
        iter2 = iter7;
        if (!iter7.done) {
          while (true) {
            let tmp = num3;
            let tmp2 = tmp23;
            let tmp3 = tmp24;
            let tmp4 = tmp25;
            let tmp5 = num4;
            let tmp6 = iter3;
            tmp7 = null;
            sibling = tmp25;
            if (tmp25.index <= num4) {
              sibling = tmp25.sibling;
              tmp7 = tmp25;
            }
            let tmp8 = updateSlot;
            let tmp9 = arg0;
            let tmp10 = tmp7;
            let tmp11 = arg3;
            let tmp12 = updateSlot(arg0, tmp7, iter3.value, arg3);
            if (null === tmp12) {
              break;
            } else {
              let tmp13 = closure_0;
              if (closure_0) {
                tmp13 = tmp7;
              }
              if (tmp13) {
                tmp13 = null === tmp12.alternate;
              }
              if (tmp13) {
                let tmp14 = deleteChild;
                let tmp15 = deleteChild(arg0, tmp7);
              }
              let tmp16 = placeChild;
              let tmp17 = placeChild(tmp12, num3, num4);
              let tmp18 = tmp12;
              if (null !== tmp24) {
                tmp24.sibling = tmp12;
                tmp18 = tmp23;
              }
              let sum = num4 + 1;
              let iter = next.next();
              num = tmp17;
              tmp20 = tmp18;
              tmp21 = tmp12;
              tmp22 = sibling;
              num2 = sum;
              iter2 = iter;
              if (null !== sibling) {
                num3 = tmp17;
                tmp23 = tmp18;
                tmp24 = tmp12;
                tmp25 = sibling;
                num4 = sum;
                iter3 = iter;
                num = tmp17;
                tmp20 = tmp18;
                tmp21 = tmp12;
                tmp22 = sibling;
                num2 = sum;
                iter2 = iter;
              }
            }
          }
          num = num3;
          tmp20 = tmp23;
          tmp21 = tmp24;
          num2 = num4;
          iter2 = iter3;
          tmp22 = tmp7;
          if (null === tmp7) {
            num = num3;
            tmp20 = tmp23;
            tmp21 = tmp24;
            tmp22 = sibling;
            num2 = num4;
            iter2 = iter3;
          }
        }
      }
      if (iter2.done) {
        deleteRemainingChildren(arg0, tmp22);
        return tmp20;
      } else if (null === tmp22) {
        let tmp51 = tmp20;
        let tmp52 = tmp20;
        if (!iter2.done) {
          do {
            let tmp53 = createChild;
            let tmp54 = createChild(arg0, iter2.value, arg3);
            let tmp55 = num;
            let tmp56 = tmp51;
            let tmp57 = tmp21;
            let tmp58 = num2;
            let tmp59 = num;
            let tmp60 = tmp51;
            let tmp61 = tmp21;
            if (null !== tmp54) {
              let tmp62 = placeChild;
              let tmp64 = tmp54;
              let tmp63 = placeChild(tmp54, num, num2);
              if (null !== tmp21) {
                tmp21.sibling = tmp54;
                tmp64 = tmp51;
              }
              tmp60 = tmp64;
              tmp59 = tmp63;
              tmp61 = tmp54;
            }
            num2 = num2 + 1;
            iter6 = next.next();
            num = tmp59;
            tmp51 = tmp60;
            tmp21 = tmp61;
            iter2 = iter6;
            tmp52 = tmp60;
          } while (!iter6.done);
        }
        return tmp52;
      } else {
        const arr = mapRemainingChildren(tmp22);
        let tmp45 = num;
        let tmp46 = tmp20;
        let tmp47 = tmp21;
        let sum1 = num2;
        let iter5 = iter2;
        let tmp48 = tmp20;
        if (!iter2.done) {
          do {
            let tmp26 = updateFromMap;
            let tmp27 = arr;
            let tmp28 = arg0;
            let tmp29 = sum1;
            let tmp30 = arg3;
            let tmp31 = updateFromMap(arr, arg0, sum1, iter5.value, arg3);
            let tmp32 = tmp45;
            let tmp33 = tmp46;
            let tmp34 = tmp47;
            let tmp35 = sum1;
            let tmp36 = tmp45;
            let tmp37 = tmp46;
            let tmp38 = tmp47;
            if (null !== tmp31) {
              let tmp39 = closure_0;
              if (closure_0) {
                tmp39 = null !== tmp31.alternate;
              }
              if (tmp39) {
                let key = sum1;
                if (null !== tmp31.key) {
                  key = tmp31.key;
                }
                let deleteResult = arr.delete(key);
              }
              let tmp41 = placeChild;
              let tmp43 = tmp31;
              let tmp42 = placeChild(tmp31, tmp45, sum1);
              if (null !== tmp47) {
                tmp47.sibling = tmp31;
                tmp43 = tmp46;
              }
              tmp37 = tmp43;
              tmp36 = tmp42;
              tmp38 = tmp31;
            }
            sum1 = sum1 + 1;
            iter4 = next.next();
            tmp45 = tmp36;
            tmp46 = tmp37;
            tmp47 = tmp38;
            iter5 = iter4;
            tmp48 = tmp37;
          } while (!iter4.done);
        }
        if (closure_0) {
          const item = arr.forEach((arg0) => {
            closure_1_1(closure_0, arg0);
          });
        }
        return tmp48;
      }
    }
  }
  function reconcileChildFibersImpl(arg0, tag, type) {
    let tmp = "object" === typeof type;
    if (tmp) {
      tmp = null !== type;
    }
    if (tmp) {
      tmp = type.type === updateTextNode;
    }
    if (tmp) {
      tmp = null === type.key;
    }
    let children = type;
    if (tmp) {
      children = type.props.children;
    }
    if ("object" === typeof children) {
      if (null !== children) {
        const $$typeof = children.$$typeof;
        if (placeChild === $$typeof) {
          let sibling2 = tag;
          if (null !== tag) {
            while (sibling2.key !== tmp60) {
              let tmp62 = deleteChild;
              let tmp63 = deleteChild(arg0, sibling2);
              sibling2 = sibling2.sibling;
            }
            type = children.type;
            if (type === updateTextNode) {
              if (7 === sibling2.tag) {
                deleteRemainingChildren(arg0, sibling2.sibling);
                const tmp87 = useFiber(sibling2, children.props.children);
                tmp87.return = arg0;
                let tmp70 = tmp87;
              } else {
                deleteRemainingChildren(arg0, sibling2);
              }
            } else if (sibling2.elementType === type) {
              deleteRemainingChildren(arg0, sibling2.sibling);
              tmp70 = useFiber(sibling2, children.props);
              closure_1_291(tmp70, children);
              tmp70.return = arg0;
            }
            placeSingleChild(tmp70);
            return tmp70;
          }
          if (children.type === updateTextNode) {
            const tmp83 = closure_1_482(children.props.children, arg0.mode, arg3, children.key);
            tmp83.return = arg0;
            tmp70 = tmp83;
          } else {
            const tmp78 = closure_1_481(children.type, children.key, children.props, undefined, arg0.mode, arg3);
            closure_1_291(tmp78, children);
            tmp78.return = arg0;
            tmp70 = tmp78;
          }
        } else if (placeSingleChild === $$typeof) {
          let sibling = tag;
          if (null !== tag) {
            while (sibling.key !== tmp46) {
              let tmp48 = deleteChild;
              let tmp49 = deleteChild(arg0, sibling);
              sibling = sibling.sibling;
            }
            if (4 === sibling.tag) {
              if (sibling.stateNode.containerInfo === children.containerInfo) {
                if (sibling.stateNode.implementation === children.implementation) {
                  deleteRemainingChildren(arg0, sibling.sibling);
                  let children1 = children.children;
                  if (!children1) {
                    children1 = [];
                  }
                  const tmp56Result = useFiber(sibling, children1);
                  tmp56Result.return = arg0;
                  let tmp53 = tmp56Result;
                  const tmp56 = useFiber;
                }
                placeSingleChild(tmp53);
                return tmp53;
              }
            }
            deleteRemainingChildren(arg0, sibling);
          }
          tmp53 = closure_1_485(children, arg0.mode, arg3);
          tmp53.return = arg0;
        } else if (closure_1_17 === $$typeof) {
          return reconcileChildFibersImpl(arg0, tag, children._init(children._payload), arg3);
        } else if (deleteRemainingChildren(children)) {
          return reconcileChildrenArray(arg0, tag, children, arg3);
        } else if (closure_1_177(children)) {
          const obj = closure_1_177(children);
          if ("function" !== typeof obj) {
            const _Error = Error;
            throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
          } else {
            return reconcileChildrenIterator(arg0, tag, obj.call(children), arg3);
          }
        } else if ("function" === typeof children.then) {
          return reconcileChildFibersImpl(arg0, tag, closure_1_290(children), arg3);
        } else if (children.$$typeof === updateSlot) {
          return reconcileChildFibersImpl(arg0, tag, closure_1_394(arg0, children), arg3);
        } else {
          closure_1_292(undefined, children);
        }
      }
    }
    if ("string" !== typeof children) {
      if ("number" !== tmp5) {
        if ("bigint" !== tmp5) {
          deleteRemainingChildren(arg0, tag);
          return null;
        }
      }
    }
    const text = `${promise}`;
    if (null === tag) {
      deleteRemainingChildren(arg0, tag);
      let tmp15 = closure_1_484(`${promise}`, arg0.mode, arg3);
      tmp15.return = arg0;
      placeSingleChild(tmp15);
    }
    deleteRemainingChildren(arg0, tag.sibling);
    const tmp17 = useFiber(tag, text);
    tmp17.return = arg0;
    tmp15 = tmp17;
  }
  return (arg0, arg1, arg2, arg3) => {
    try {
      c101 = 0;
      c100 = null;
      return reconcileChildFibersImpl(arg0, arg1, arg2, arg3);
    } catch (tmp9) {
      if (tmp9 !== closure_1_96) {
        const tmp20 = closure_1_477(29, promise, null, tmp.mode);
        tmp20.lanes = tmp2;
        tmp20.return = tmp;
        return tmp20;
      }
      throw tmp9;
    }
  };
}
function pushHiddenContext(arg0, baseLanes) {
  push(closure_105, closure_155);
  push(closure_104, baseLanes);
  closure_155 = closure_155 | baseLanes.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(closure_105, c155);
  push(ref4, ref4.current);
}
function popHiddenContext() {
  const current = ref5.current;
  pop(closure_104);
  pop(ref5);
}
function pushPrimaryTreeSuspenseHandler(alternate) {
  alternate = alternate.alternate;
  push(closure_108, closure_108.current & 1);
  push(closure_106, alternate);
  if (null === closure_107) {
    if (null !== alternate) {
      if (null === ref4.current) {
        if (null !== alternate.memoizedState) {
          closure_107 = alternate;
        }
      }
    }
    closure_107 = alternate;
  }
}
function pushOffscreenSuspenseHandler(tag) {
  if (22 === tag.tag) {
    push(closure_108, closure_108.current);
    push(closure_106, tag);
    if (null === closure_107) {
      const alternate = tag.alternate;
      if (tmp10) {
        closure_107 = tag;
      }
      tmp10 = null !== alternate && null !== alternate.memoizedState;
    }
  } else {
    reuseSuspenseHandlerOnStack(undefined);
  }
}
function reuseSuspenseHandlerOnStack() {
  push(closure_108, closure_108.current);
  push(closure_106, closure_106.current);
}
function popSuspenseHandler(arg0) {
  pop(closure_106);
  if (c107 === arg0) {
    c107 = null;
  }
  pop(closure_108);
}
function findFirstSuspended(arg0) {
  let tmp2 = arg0;
  if (null !== arg0) {
    while (true) {
      let tmp3 = tmp2;
      let tmp4 = tmp;
      if (13 === tmp2.tag) {
        let memoizedState = tmp2.memoizedState;
        let tmp5 = memoizedState;
        if (null !== memoizedState) {
          if (null === memoizedState.dehydrated) {
            return tmp2;
          } else {
            let tmp7 = shim$1;
            let tmp8 = shim$1();
            let tmp9 = shim$1();
            tmp5 = memoizedState;
          }
        }
      } else {
        if (19 === tmp2.tag) {
          if (undefined !== tmp2.memoizedProps.revealOrder) {
            tmp5 = tmp;
            if (0 !== (tmp2.flags & 128)) {
              break;
            }
          }
        }
        tmp5 = tmp;
        if (null !== tmp2.child) {
          tmp2.child.return = tmp2;
          sibling = tmp2.child;
          let tmp6 = tmp;
        }
        tmp2 = sibling;
        tmp = tmp6;
      }
      if (tmp2 !== arg0) {
        let tmp10 = tmp2;
        let tmp11 = tmp2;
        if (null === tmp2.sibling) {
          let tmp12 = tmp10;
          while (null !== tmp10.return) {
            if (tmp10.return === arg0) {
              break;
            } else {
              let _return = tmp10.return;
              tmp10 = _return;
              tmp11 = _return;
              continue;
            }
          }
          return null;
        }
        ({ return: tmp11.sibling.return, sibling } = tmp11);
        tmp6 = tmp5;
      }
    }
    return tmp2;
  }
  return null;
}
function throwInvalidHookError() {
  throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
}
function areHookInputsEqual(arg0, arg1) {
  if (null === arg1) {
    return false;
  } else {
    if (0 < arg1.length) {
      let num2 = 0;
      if (0 < arg0.length) {
        while (is(arg0[num2], arg1[num2])) {
          let sum = num2 + 1;
          if (sum < arg1.length) {
            num2 = sum;
          }
        }
        return false;
      }
    }
    return true;
  }
}
function renderWithHooks(memoizedState) {
  closure_109 = arg5;
  closure_110 = arg1;
  arg1.memoizedState = null;
  arg1.updateQueue = null;
  arg1.lanes = 0;
  if (null !== memoizedState) {
    if (null !== memoizedState.memoizedState) {
      let tmp2 = obj15;
    }
    tmp.H = tmp2;
    c115 = false;
    let tmp3 = arg2(arg3, arg4);
    c115 = false;
    if (c114) {
      tmp3 = renderWithHooksAgain(arg1, arg2, arg3, arg4);
    }
    finishRenderingHooks(memoizedState);
    return tmp3;
  }
  tmp2 = obj14;
}
function finishRenderingHooks(dependencies) {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj13;
  let tmp = null !== _null4;
  if (tmp) {
    tmp = null !== _null4.next;
  }
  c109 = 0;
  c110 = null;
  _null4 = null;
  c112 = null;
  c113 = false;
  c116 = 0;
  c117 = null;
  if (tmp) {
    const _Error = Error;
    throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
  } else if (!tmp3) {
    dependencies = dependencies.dependencies;
    let tmp4 = null !== dependencies;
    if (tmp4) {
      tmp4 = checkIfContextChanged(dependencies);
    }
    if (tmp4) {
      c127 = true;
    }
  }
}
function renderWithHooksAgain(updateQueue) {
  closure_110 = updateQueue;
  let num = 0;
  while (true) {
    let tmp = c114;
    let tmp2 = num;
    if (c114) {
      c117 = null;
    }
    c116 = 0;
    c114 = false;
    if (25 <= num) {
      break;
    } else {
      c111 = null;
      c112 = null;
      let sum = num + 1;
      if (null != updateQueue.updateQueue) {
        updateQueue = updateQueue.updateQueue;
        updateQueue.lastEffect = null;
        updateQueue.events = null;
        updateQueue.stores = null;
        if (null != updateQueue.memoCache) {
          updateQueue.memoCache.index = 0;
        }
      }
      let tmp4 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      let tmp5 = obj16;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj16;
      let tmp7 = c114;
      num = sum;
      if (c114) {
        continue;
      } else {
        return tmp6;
      }
    }
  }
  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
}
function TransitionAwareHostComponent() {
  const H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  const first = H.useState()[0];
  let tmp = first;
  if ("function" === typeof first.then) {
    tmp = useThenable(first);
  }
  let memoizedState = null;
  if (null !== _null4) {
    memoizedState = _null4.memoizedState;
  }
  if (memoizedState !== H.useState()[0]) {
    _null3.flags = _null3.flags | 1024;
  }
  return tmp;
}
function bailoutHooks(updateQueue, flags) {
  flags.updateQueue = updateQueue.updateQueue;
  flags.flags = flags.flags & -2053;
  updateQueue.lanes = updateQueue.lanes & ~arg2;
}
function resetHooksOnUnwind(memoizedState) {
  if (c113) {
    let iter = memoizedState.memoizedState;
    if (null !== iter) {
      do {
        let queue = iter.queue;
        let tmp3 = iter;
        if (null !== queue) {
          queue.pending = null;
        }
        iter = iter.next;
      } while (null !== iter);
    }
    c113 = false;
  }
  c109 = 0;
  c110 = null;
  c111 = null;
  c112 = null;
  c114 = false;
  c116 = 0;
  c117 = null;
}
function mountWorkInProgressHook() {
  const obj = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  if (null === obj) {
    c110.memoizedState = obj;
  } else {
    obj.next = obj;
  }
  return obj;
}
function updateWorkInProgressHook() {
  if (null === next) {
    const alternate = _null3.alternate;
    let memoizedState = null;
    if (null !== alternate) {
      memoizedState = alternate.memoizedState;
    }
    next = memoizedState;
  } else {
    next = next.next;
  }
  if (null === obj) {
    let next2 = _null3.memoizedState;
  } else {
    next2 = obj.next;
  }
  if (null !== next2) {
    obj = next2;
  } else if (null === next) {
    if (null === _null3.alternate) {
      const _Error2 = Error;
      throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
    } else {
      const _Error = Error;
      throw Error("Rendered more hooks than during the previous render.");
    }
  } else {
    obj = { memoizedState: next.memoizedState, baseState: next.baseState, baseQueue: next.baseQueue, queue: next.queue, next: null };
    if (null === obj) {
      _null3.memoizedState = obj;
    } else {
      obj.next = obj;
    }
  }
  return obj;
}
function useThenable(arg0) {
  closure_116 = closure_116 + 1;
  if (null === closure_117) {
    closure_117 = [];
  }
  if (null === _null5) {
    let next = tmp3.memoizedState;
  } else {
    next = _null5.next;
  }
  if (null !== next) {
    return tmp2;
  } else {
    const alternate = tmp3.alternate;
    if (null !== alternate) {
      if (null !== alternate.memoizedState) {
        let tmp6 = obj15;
      }
      tmp5.H = tmp6;
    }
    tmp6 = obj14;
  }
}
function use($$typeof) {
  if (null !== $$typeof) {
    if ("object" === typeof $$typeof) {
      if ("function" === typeof $$typeof.then) {
        return useThenable($$typeof);
      } else if ($$typeof.$$typeof === closure_12) {
        return readContext($$typeof);
      }
    }
  }
  throw Error("An unsupported type was passed to use(): " + String($$typeof));
}
function useMemoCache(arg0) {
  let updateQueue = _null3.updateQueue;
  let memoCache = null;
  if (null !== updateQueue) {
    memoCache = updateQueue.memoCache;
  }
  let tmp2 = memoCache;
  if (null == memoCache) {
    const alternate = _null3.alternate;
    tmp2 = memoCache;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      let tmp4 = memoCache;
      if (null !== updateQueue2) {
        memoCache = updateQueue2.memoCache;
        if (null != memoCache) {
          let obj = {};
          data = memoCache.data;
          obj.data = data.map((arr) => arr.slice());
          obj.index = 0;
          memoCache = obj;
        }
        tmp4 = memoCache;
      }
      tmp2 = tmp4;
    }
  }
  if (null == tmp2) {
    obj = { data: [], index: 0 };
    tmp2 = obj;
  }
  if (null === updateQueue) {
    const tmp6 = createFunctionComponentUpdateQueue();
    _null3.updateQueue = tmp6;
    updateQueue = tmp6;
  }
  updateQueue.memoCache = tmp2;
  let tmp8 = tmp2.data[tmp2.index];
  if (undefined === tmp8) {
    const _Array = Array;
    ({ data, index } = tmp2);
    const ArrayResult = Array(arg0);
    data[index] = ArrayResult;
    let num3 = 0;
    tmp8 = ArrayResult;
    if (0 < arg0) {
      do {
        let tmp11 = closure_19;
        ArrayResult[num3] = closure_19;
        num3 = num3 + 1;
        tmp8 = ArrayResult;
      } while (num3 < arg0);
    }
  }
  tmp2.index = tmp2.index + 1;
  return tmp8;
}
function basicStateReducer(arg0, arg1) {
  let tmp = arg1;
  if ("function" === typeof arg1) {
    tmp = arg1(arg0);
  }
  return tmp;
}
function updateReducer(arg0) {
  return updateReducerImpl(updateWorkInProgressHook(), c111, arg0);
}
function updateReducerImpl(queue, arg1, lastRenderedReducer) {
  let tmp7;
  queue = queue.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    let iter = iter3;
    if (null !== queue.pending) {
      if (null !== iter3) {
        iter3.next = iter4.next;
        iter4.next = iter3.next;
      }
      arg1.baseQueue = iter4;
      queue.pending = null;
      iter = iter4;
    }
    const baseState = queue.baseState;
    if (null === iter) {
      queue.memoizedState = baseState;
    } else {
      const next = iter.next;
      let tmp3 = baseState;
      let tmp4 = null;
      let tmp5 = null;
      let tmp6 = null;
      let iter2 = next;
      let flag2 = false;
      while (true) {
        tmp7 = iter2.lane & -536870913;
        let tmp9 = tmp4;
        let tmp10 = tmp5;
        let tmp11 = tmp6;
        let tmp12 = iter2;
        let tmp8 = tmp3;
        let tmp13 = flag2;
        if (tmp7 !== iter2.lane) {
          let tmp16 = c149;
          let tmp15 = (c149 & tmp7) === tmp7;
        } else {
          let tmp14 = c109;
          tmp15 = (c109 & tmp7) === tmp7;
        }
        if (!tmp15) {
          let obj = { lane: tmp7 };
          ({ revertLane: obj.revertLane, action: obj.action, hasEagerState: obj.hasEagerState, eagerState: obj.eagerState } = iter2);
          obj.next = null;
          let tmp17 = tmp3;
          let tmp18 = obj;
          if (null !== tmp6) {
            tmp6.next = obj;
            tmp17 = tmp4;
            tmp18 = tmp5;
          }
          let tmp19 = _null3;
          _null3.lanes = _null3.lanes | tmp7;
          let tmp20 = closure_157;
          closure_157 = closure_157 | tmp7;
          let tmp21 = tmp3;
          let tmp22 = flag2;
          let next3 = iter2.next;
          let tmp42 = tmp8;
          let tmp43 = tmp17;
          let tmp44 = tmp18;
          let tmp45 = obj;
          let tmp46 = tmp13;
        }
        let revertLane = iter2.revertLane;
        if (0 === revertLane) {
          break;
        } else {
          let tmp50 = c109;
          if ((c109 & revertLane) === revertLane) {
            let next2 = iter2.next;
            let tmp27 = c91;
            let tmp28 = tmp3;
            let tmp29 = tmp4;
            let tmp30 = tmp5;
            let tmp31 = tmp6;
            let tmp32 = next2;
            let flag4 = flag2;
            if (revertLane === c91) {
              tmp28 = tmp3;
              tmp29 = tmp4;
              tmp30 = tmp5;
              tmp31 = tmp6;
              tmp32 = next2;
              flag4 = true;
            }
            if (null !== tmp32) {
              tmp3 = tmp28;
              tmp4 = tmp29;
              tmp5 = tmp30;
              tmp6 = tmp31;
              flag2 = flag4;
              iter2 = tmp32;
            }
            let tmp47 = tmp28;
            if (null !== tmp31) {
              tmp31.next = tmp30;
              tmp47 = tmp29;
            }
            let tmp48 = is;
            if (!is(tmp28, queue.memoizedState)) {
              c127 = true;
              if (flag4) {
                if (null !== c92) {
                  throw c92;
                }
              }
            }
            queue.memoizedState = tmp28;
            queue.baseState = tmp47;
            queue.baseQueue = tmp31;
            queue.lastRenderedState = tmp28;
          } else {
            obj = { lane: 0 };
            ({ revertLane: obj2.revertLane, action: obj2.action, hasEagerState: obj2.hasEagerState, eagerState: obj2.eagerState } = iter2);
            obj.next = null;
            let tmp23 = tmp3;
            let tmp24 = obj;
            if (null !== tmp6) {
              tmp6.next = obj;
              tmp23 = tmp4;
              tmp24 = tmp5;
            }
            let tmp25 = _null3;
            _null3.lanes = _null3.lanes | revertLane;
            let tmp26 = closure_157;
            closure_157 = closure_157 | revertLane;
            let flag3 = flag2;
          }
          let action = iter2.action;
          let tmp35 = c115;
          if (c115) {
            let tmp36 = lastRenderedReducer(tmp3, action);
          }
          let tmp37 = iter2.hasEagerState ? iter2.eagerState : lastRenderedReducer(tmp3, action);
          let tmp38 = tmp23;
          let tmp39 = tmp24;
          let tmp40 = obj;
          let tmp41 = flag3;
        }
      }
      let tmp33 = tmp6;
      if (null !== tmp6) {
        obj = { lane: 0, revertLane: 0 };
        ({ action: obj3.action, hasEagerState: obj3.hasEagerState, eagerState: obj3.eagerState } = iter2);
        obj.next = null;
        tmp6.next = obj;
        tmp33 = obj;
      }
      tmp23 = tmp4;
      tmp24 = tmp5;
      obj = tmp33;
      flag3 = flag2;
      if (tmp7 === c91) {
        tmp23 = tmp4;
        tmp24 = tmp5;
        obj = tmp33;
        flag3 = true;
      }
    }
    if (null === iter) {
      queue.lanes = 0;
    }
    const items = [queue.memoizedState, queue.dispatch];
    return items;
  }
}
function rerenderReducer(lastRenderedReducer) {
  let tmp2;
  const tmp = updateWorkInProgressHook();
  const queue = tmp.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    let memoizedState = tmp.memoizedState;
    let tmp4 = memoizedState;
    if (null !== queue.pending) {
      queue.pending = null;
      const next = iter2.next;
      let iter = next;
      do {
        tmp2 = lastRenderedReducer(memoizedState, iter.action);
        iter = iter.next;
        memoizedState = tmp2;
      } while (iter !== next);
      if (!is(tmp2, tmp.memoizedState)) {
        c127 = true;
      }
      tmp.memoizedState = tmp2;
      if (null === tmp.baseQueue) {
        tmp.baseState = tmp2;
      }
      queue.lastRenderedState = tmp2;
      tmp4 = tmp2;
    }
    const items = [tmp4, queue.dispatch];
    return items;
  }
}
function updateSyncExternalStore(bindResult1, bindResult) {
  const tmp2 = updateWorkInProgressHook();
  const tmp3 = bindResult();
  let tmp5 = c111;
  if (!c111) {
    tmp5 = tmp2;
  }
  const tmp6 = !is(tmp5.memoizedState, tmp3);
  if (tmp6) {
    tmp2.memoizedState = tmp3;
    c127 = true;
  }
  const queue = tmp2.queue;
  const items = [bindResult1];
  updateEffect(subscribeToStore.bind(null, c110, queue, bindResult1), items);
  if (queue.getSnapshot === bindResult) {
    return tmp3;
  }
  c110.flags = c110.flags | 2048;
  pushEffect(9, updateStoreInstance.bind(null, c110, queue, tmp3, bindResult), { destroy: undefined }, null);
  if (null === c147) {
    const _Error = Error;
    throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
  } else if (0 === (c109 & 60)) {
    pushStoreConsistencyCheck(tmp, bindResult, tmp3);
  }
}
function pushStoreConsistencyCheck(flags, getSnapshot, value) {
  flags.flags = flags.flags | 16384;
  const obj = { getSnapshot, value };
  const updateQueue = _null3.updateQueue;
  if (null === updateQueue) {
    const tmp3 = createFunctionComponentUpdateQueue();
    _null3.updateQueue = tmp3;
    const items = [obj];
    tmp3.stores = items;
  } else {
    const stores = updateQueue.stores;
    if (null === stores) {
      const items1 = [obj];
      updateQueue.stores = items1;
    } else {
      stores.push(obj);
    }
  }
}
function updateStoreInstance(arg0, arg1, value, getSnapshot) {
  arg1.value = value;
  arg1.getSnapshot = getSnapshot;
  if (checkIfSnapshotChanged(arg1)) {
    forceStoreRerender(arg0);
  }
}
function subscribeToStore(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  return arg2(() => {
    if (closure_1_319(closure_1)) {
      closure_1_320(closure_0);
    }
  });
}
function checkIfSnapshotChanged(getSnapshot) {
  try {
    return !is(tmp, getSnapshot.getSnapshot());
  } catch (err) {
    return true;
  }
}
function forceStoreRerender(arg0) {
  const tmp = enqueueConcurrentRenderForLane(arg0, 2);
  if (null !== tmp) {
    scheduleUpdateOnFiber(tmp, arg0, 2);
  }
}
function mountStateImpl(arg0) {
  const tmp2 = mountWorkInProgressHook();
  let tmp3 = arg0;
  if ("function" === typeof arg0) {
    const tmp5 = arg0();
    tmp3 = tmp5;
    if (c115) {
      setIsStrictModeForDevtools(true);
      try {
        arg0();
        setIsStrictModeForDevtools(false);
        tmp3 = tmp5;
      } catch (tmp12) {
        setIsStrictModeForDevtools(false);
        throw tmp12;
      }
    }
  }
  tmp2.baseState = tmp3;
  tmp2.memoizedState = tmp3;
  const obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: basicStateReducer, lastRenderedState: tmp3 };
  tmp2.queue = obj;
  return tmp2;
}
function updateOptimisticImpl(arg0, arg1, baseState) {
  let tmp = arg3;
  arg0.baseState = baseState;
  if ("function" !== typeof arg3) {
    tmp = basicStateReducer;
  }
  return updateReducerImpl(arg0, c111, tmp);
}
function dispatchActionState(arg0, action, arg2, arg3, payload) {
  if (isRenderPhaseUpdate(arg0)) {
    const _Error = Error;
    throw Error("Cannot update form state while rendering.");
  } else {
    action = action.action;
    if (null !== action) {
      const obj = {
        payload,
        action,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then(arg0) {
              const listeners = obj.listeners;
              listeners.push(arg0);
            }
      };
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        arg2(true);
      } else {
        obj.isTransition = false;
      }
      arg3(obj);
      if (null === action.pending) {
        action.pending = obj;
        obj.next = obj;
        runActionStateAction(action, obj);
      } else {
        obj.next = iter.next;
        iter.next = obj;
        action.pending = obj;
      }
    }
  }
}
function runActionStateAction(state, isTransition) {
  ({ action, payload } = isTransition);
  state = state.state;
  if (isTransition.isTransition) {
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const obj = {};
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
    try {
      const actionResult = action(state, payload);
      const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
      if (null !== S) {
        tmp24(tmp20, actionResult);
      }
      handleActionReturnValue(state, isTransition, actionResult);
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      onActionError(__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T, __exception);
    } catch (tmp37) {
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp2;
      throw tmp37;
    }
  } else {
    try {
      const actionResult1 = action(state, payload);
      handleActionReturnValue(state, isTransition, actionResult1);
    } catch (tmp14) {
      onActionError(tmp4, tmp3, tmp14);
    }
  }
}
function handleActionReturnValue(arg0, arg1, promise) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (null !== promise) {
    if ("object" === typeof promise) {
      if ("function" === typeof promise.then) {
        promise.then((arg0) => {
          closure_1_326(closure_0, closure_1, arg0);
        }, (arg0) => {
          closure_1_327(closure_0, closure_1, arg0);
        });
      }
    }
  }
  onActionSuccess(arg0, arg1, promise);
}
function onActionSuccess(pending, arg1, value) {
  arg1.status = "fulfilled";
  arg1.value = value;
  notifyActionListeners(arg1);
  pending.state = value;
  if (null !== pending.pending) {
    if (iter.next === iter) {
      pending.pending = null;
    } else {
      const next = iter2.next;
      iter.next = next;
      runActionStateAction(pending, next);
    }
  }
}
function onActionError(pending, arg1, reason) {
  let iter = arg1;
  pending.pending = null;
  if (null !== pending.pending) {
    do {
      iter.status = "rejected";
      iter.reason = reason;
      let tmp = notifyActionListeners;
      let tmp2 = notifyActionListeners(iter);
      iter = iter.next;
    } while (iter !== iter2.next);
  }
  pending.action = null;
}
function notifyActionListeners(listeners) {
  let length;
  listeners = listeners.listeners;
  let num = 0;
  if (0 < listeners.length) {
    do {
      let tmp = listeners[num]();
      num = num + 1;
      length = listeners.length;
    } while (num < length);
  }
}
function actionStateReducer(arg0, arg1) {
  return arg1;
}
function mountActionState(action, baseState) {
  const tmp = mountWorkInProgressHook();
  tmp.baseState = baseState;
  tmp.memoizedState = baseState;
  let obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: actionStateReducer, lastRenderedState: baseState };
  tmp.queue = obj;
  const bindResult = dispatchSetState.bind(null, c110, obj);
  obj.dispatch = bindResult;
  const tmp4 = mountWorkInProgressHook();
  obj = { state: baseState, dispatch: null, action, pending: null };
  tmp4.queue = obj;
  const bindResult2 = dispatchActionState.bind(null, c110, obj, dispatchOptimisticSetState.bind(null, c110, false, mountStateImpl(false).queue), bindResult);
  obj.dispatch = bindResult2;
  tmp4.memoizedState = action;
  const items = [baseState, bindResult2, false];
  return items;
}
function updateActionState(arg0) {
  return updateActionStateImpl(updateWorkInProgressHook(), c111, arg0);
}
function updateActionStateImpl(arg0, arg1, queue) {
  const first = updateReducerImpl(arg0, arg1, actionStateReducer)[0];
  let tmp = first;
  if ("object" === typeof first) {
    tmp = first;
    if (null !== first) {
      tmp = first;
      if ("function" === typeof first.then) {
        tmp = useThenable(first);
      }
    }
  }
  const tmp4 = updateWorkInProgressHook();
  queue = tmp4.queue;
  if (queue !== tmp4.memoizedState) {
    _null3.flags = _null3.flags | 2048;
    const obj = { destroy: undefined };
    pushEffect(9, actionStateActionEffect.bind(null, queue, queue), obj, null);
  }
  const items = [tmp, queue.dispatch, updateReducer(basicStateReducer)[0]];
  return items;
}
function actionStateActionEffect(arg0, action) {
  arg0.action = action;
}
function rerenderActionState(memoizedState) {
  const tmp = updateWorkInProgressHook();
  if (null !== c111) {
    return updateActionStateImpl(tmp, tmp2, memoizedState);
  } else {
    updateWorkInProgressHook();
    const tmp5 = updateWorkInProgressHook();
    tmp5.memoizedState = memoizedState;
    const items = [tmp.memoizedState, tmp5.queue.dispatch, false];
    return items;
  }
}
function pushEffect(tag, create, inst, deps) {
  const obj = { tag, create, inst, deps, next: null };
  let updateQueue = _null3.updateQueue;
  if (null === updateQueue) {
    const tmp2 = createFunctionComponentUpdateQueue();
    _null3.updateQueue = tmp2;
    updateQueue = tmp2;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  return obj;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(arg0, arg1, arg2, arg3) {
  _null3.flags = _null3.flags | arg0;
  let tmp4 = null;
  if (undefined !== arg3) {
    tmp4 = arg3;
  }
  mountWorkInProgressHook().memoizedState = pushEffect(1 | arg1, arg2, { destroy: undefined }, tmp4);
}
function updateEffectImpl(arg0, arg1, arg2, arg3) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg3) {
    tmp2 = arg3;
  }
  const inst = tmp.memoizedState.inst;
  if (null !== _null4) {
    if (null !== tmp2) {
      if (areHookInputsEqual(tmp2, _null4.memoizedState.deps)) {
        tmp.memoizedState = pushEffect(arg1, arg2, inst, tmp2);
      }
    }
  }
  _null3.flags = _null3.flags | arg0;
  tmp.memoizedState = pushEffect(1 | arg1, arg2, inst, tmp2);
}
function mountEffect(arg0, arg1) {
  mountEffectImpl(8390656, 8, arg0, arg1);
}
function updateEffect(arg0, arg1) {
  updateEffectImpl(2048, 8, arg0, arg1);
}
function updateInsertionEffect(arg0, arg1) {
  updateEffectImpl(4, 2, arg0, arg1);
}
function updateLayoutEffect(arg0, arg1) {
  updateEffectImpl(4, 4, arg0, arg1);
}
function imperativeHandleEffect(arg0, arg1) {
  closure_0 = arg1;
  if ("function" === typeof arg1) {
    closure_1 = arg1(arg0());
    return () => {
      if ("function" === typeof callback2) {
        callback2();
      } else {
        callback(null);
      }
    };
  } else if (null !== arg1) {
    if (undefined !== arg1) {
      arg1.current = arg0();
      return () => {
        closure_0.current = null;
      };
    }
  }
}
function updateImperativeHandle(queue, c100, arr) {
  let combined = null;
  if (null !== arr) {
    combined = null;
    if (undefined !== arr) {
      const items = [queue];
      combined = arr.concat(items);
    }
  }
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, c100, queue), combined);
}
function mountDebugValue() {

}
function updateCallback(arg0, arg1) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg1) {
    tmp2 = arg1;
  }
  const memoizedState = tmp.memoizedState;
  if (null !== tmp2) {
    if (areHookInputsEqual(tmp2, memoizedState[1])) {
      return memoizedState[0];
    }
  }
  const items = [arg0, tmp2];
  tmp.memoizedState = items;
  return arg0;
}
function updateMemo(arg0, arg1) {
  const tmp2 = updateWorkInProgressHook();
  let tmp3 = null;
  if (undefined !== arg1) {
    tmp3 = arg1;
  }
  const memoizedState = tmp2.memoizedState;
  if (null !== tmp3) {
    if (areHookInputsEqual(tmp3, memoizedState[1])) {
      return memoizedState[0];
    }
  }
  const tmp5 = arg0();
  if (c115) {
    setIsStrictModeForDevtools(true);
    try {
      arg0();
      setIsStrictModeForDevtools(false);
    } catch (tmp11) {
      setIsStrictModeForDevtools(false);
      throw tmp11;
    }
  }
  const items = [tmp5, tmp3];
  tmp2.memoizedState = items;
  return tmp5;
}
function mountDeferredValueImpl(arg0, memoizedState, memoizedState2) {
  if (undefined !== memoizedState2) {
    if (0 === (c109 & 1073741824)) {
      arg0.memoizedState = memoizedState2;
      const tmp3 = requestDeferredLane();
      _null3.lanes = _null3.lanes | tmp3;
      closure_157 = closure_157 | tmp3;
      return memoizedState2;
    }
  }
  arg0.memoizedState = memoizedState;
  return memoizedState;
}
function updateDeferredValueImpl(arg0, arg1, memoizedState) {
  if (is(memoizedState, arg1)) {
    return memoizedState;
  } else if (null !== ref4.current) {
    const tmp10 = mountDeferredValueImpl(arg0, memoizedState, arg3);
    if (!is(tmp10, arg1)) {
      c127 = true;
    }
    return tmp10;
  } else if (0 === (c109 & 42)) {
    c127 = true;
    arg0.memoizedState = memoizedState;
    return memoizedState;
  } else {
    const tmp5 = requestDeferredLane();
    _null3.lanes = _null3.lanes | tmp5;
    closure_157 = closure_157 | tmp5;
    return arg1;
  }
}
function startTransition(arg0, arg1, arg2, arg3, arg4) {
  let num = 8;
  if (0 !== c68) {
    num = 8;
    if (8 > tmp4) {
      num = tmp3;
    }
  }
  c68 = num;
  const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
  const obj = {};
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
  dispatchOptimisticSetState(arg0, false, arg1, arg2);
  try {
    const promise = arg4();
    const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
    if (null !== S) {
      tmp8(obj, promise);
    }
    if (null !== promise) {
      if ("object" === typeof promise) {
        if ("function" === typeof promise.then) {
          dispatchSetStateInternal(arg0, arg1, chainThenableValue(promise, arg3), requestUpdateLane(arg0));
          const tmp25 = chainThenableValue(promise, arg3);
        }
        c68 = tmp4;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      }
    }
    dispatchSetStateInternal(arg0, arg1, arg3, requestUpdateLane(arg0));
  } catch (tmp35) {
    c68 = tmp2;
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp;
    throw tmp35;
  }
}
function useHostTransitionStatus() {
  return readContext(obj12);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(arg0) {
  let _return = arg0.return;
  if (null !== _return) {
    const tag = _return.tag;
    while (24 !== tag) {
      if (3 === tag) {
        break;
      } else {
        _return = _return.return;
      }
    }
    const tmp3 = requestUpdateLane(_return);
    const tmp5 = createUpdate(tmp3);
    const tmp7 = enqueueUpdate(_return, tmp5, tmp3);
    if (null !== tmp7) {
      scheduleUpdateOnFiber(tmp7, _return, tmp3);
      entangleTransitions(tmp7, _return, tmp3);
    }
    const obj = { cache: createCache() };
    tmp5.payload = obj;
  }
}
function dispatchReducerAction(arg0, arg1, action) {
  const tmp = requestUpdateLane(arg0);
  const obj = { lane: tmp, revertLane: 0, action, hasEagerState: false, eagerState: null, next: null };
  if (isRenderPhaseUpdate(arg0)) {
    enqueueRenderPhaseUpdate(arg1, obj);
  } else {
    const tmp7 = enqueueConcurrentHookUpdate(arg0, arg1, obj, tmp);
    if (null !== tmp7) {
      scheduleUpdateOnFiber(tmp7, arg0, tmp);
      entangleTransitionUpdate(tmp7, arg1, tmp);
    }
  }
}
function dispatchSetState(arg0, arg1, arg2) {
  dispatchSetStateInternal(arg0, arg1, arg2, requestUpdateLane(arg0));
}
function dispatchSetStateInternal(alternate, lastRenderedReducer, action, lane) {
  const obj = { lane, revertLane: 0, action, hasEagerState: false, eagerState: null, next: null };
  if (isRenderPhaseUpdate(alternate)) {
    enqueueRenderPhaseUpdate(lastRenderedReducer, obj);
  } else {
    alternate = alternate.alternate;
    if (0 === alternate.lanes) {
      if (null === alternate) {
        lastRenderedReducer = lastRenderedReducer.lastRenderedReducer;
        if (null !== lastRenderedReducer) {
          try {
            const lastRenderedState = lastRenderedReducer.lastRenderedState;
            const tmp5Result = tmp5(lastRenderedState, action);
            tmp.hasEagerState = true;
            tmp.eagerState = tmp5Result;
            if (is(tmp5Result, lastRenderedState)) {
              enqueueUpdate$1(alternate, lastRenderedReducer, tmp, 0);
              if (null === c147) {
                finishQueueingConcurrentUpdates();
              }
              return false;
            }
          } catch (err) {
          }
        }
      }
    }
    const tmp25 = enqueueConcurrentHookUpdate(alternate, lastRenderedReducer, tmp, lane);
    if (null !== tmp25) {
      scheduleUpdateOnFiber(tmp25, alternate, lane);
      entangleTransitionUpdate(tmp25, lastRenderedReducer, lane);
      return true;
    }
  }
  return false;
}
function dispatchOptimisticSetState(arg0, arg1, arg2, action) {
  const obj = { lane: 2, revertLane: requestTransitionLane(), action, hasEagerState: false, eagerState: null, next: null };
  if (isRenderPhaseUpdate(arg0)) {
    if (arg1) {
      const _Error = Error;
      throw Error("Cannot update optimistic state while rendering.");
    }
  } else {
    const tmp5 = enqueueConcurrentHookUpdate(arg0, arg2, obj, 2);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, arg0, 2);
    }
  }
}
function isRenderPhaseUpdate(alternate) {
  alternate = alternate.alternate;
  let tmp = alternate === c110;
  if (!tmp) {
    let tmp3 = null !== alternate;
    if (tmp3) {
      tmp3 = alternate === c110;
    }
    tmp = tmp3;
  }
  return tmp;
}
function enqueueRenderPhaseUpdate(pending, next) {
  c113 = true;
  c114 = true;
  if (null === pending.pending) {
    next.next = next;
  } else {
    next.next = iter.next;
    iter.next = next;
  }
  pending.pending = next;
}
function entangleTransitionUpdate(pendingLanes, lanes) {
  if (0 !== (arg2 & 4194176)) {
    lanes.lanes = arg2 | lanes.lanes & pendingLanes.pendingLanes;
    markRootEntangled(pendingLanes, arg2 | lanes.lanes & pendingLanes.pendingLanes);
  }
}
function applyDerivedStateFromProps(memoizedState) {
  memoizedState = memoizedState.memoizedState;
  const tmp = arg2(arg3, memoizedState);
  let tmp2 = memoizedState;
  if (null !== tmp) {
    tmp2 = memoizedState;
    if (undefined !== tmp) {
      tmp2 = assign({}, memoizedState, tmp);
    }
  }
  memoizedState.memoizedState = tmp2;
  if (0 === memoizedState.lanes) {
    memoizedState.updateQueue.baseState = tmp2;
  }
}
function checkShouldComponentUpdate(stateNode) {
  stateNode = stateNode.stateNode;
  if ("function" === typeof stateNode.shouldComponentUpdate) {
    let flag = stateNode.shouldComponentUpdate(arg3, arg5, arg6);
  } else {
    flag = true;
    if (arg1.prototype) {
      flag = true;
      if (arg1.prototype.isPureReactComponent) {
        const tmp3 = shallowEqual(arg2, arg3);
        let tmp4 = !tmp3;
        if (tmp3) {
          tmp4 = !shallowEqual(arg4, arg5);
        }
        flag = tmp4;
      }
    }
  }
  return flag;
}
function constructClassInstance(_reactInternals, contextType) {
  let tmp = closure_72;
  contextType = contextType.contextType;
  let tmp2 = "object" === typeof contextType;
  if (tmp2) {
    tmp2 = null !== contextType;
  }
  if (tmp2) {
    tmp = readContext(contextType);
  }
  const tmp5 = new contextType(arg2, tmp);
  let state = null;
  if (null !== tmp5.state) {
    state = null;
    if (undefined !== tmp5.state) {
      state = tmp5.state;
    }
  }
  _reactInternals.memoizedState = state;
  tmp5.updater = closure_124;
  _reactInternals.stateNode = tmp5;
  tmp5._reactInternals = _reactInternals;
  return tmp5;
}
function callComponentWillReceiveProps(arg0, componentWillReceiveProps) {
  if ("function" === typeof componentWillReceiveProps.componentWillReceiveProps) {
    const result = componentWillReceiveProps.componentWillReceiveProps(arg2, arg3);
  }
  if ("function" === typeof componentWillReceiveProps.UNSAFE_componentWillReceiveProps) {
    const result1 = componentWillReceiveProps.UNSAFE_componentWillReceiveProps(arg2, arg3);
  }
  if (componentWillReceiveProps.state !== componentWillReceiveProps.state) {
    closure_124.enqueueReplaceState(componentWillReceiveProps, componentWillReceiveProps.state, null);
  }
}
function mountClassInstance(stateNode, contextType, props) {
  stateNode = stateNode.stateNode;
  stateNode.props = props;
  stateNode.state = stateNode.memoizedState;
  stateNode.refs = {};
  initializeUpdateQueue(stateNode);
  contextType = contextType.contextType;
  if ("object" === typeof contextType) {
    if (null !== contextType) {
      let tmp3 = readContext(contextType);
    }
    stateNode.context = tmp3;
    stateNode.state = stateNode.memoizedState;
    const getDerivedStateFromProps = contextType.getDerivedStateFromProps;
    if ("function" === typeof getDerivedStateFromProps) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps, props);
      stateNode.state = stateNode.memoizedState;
    }
    let tmp10 = "function" === typeof contextType.getDerivedStateFromProps || "function" === typeof stateNode.getSnapshotBeforeUpdate;
    if (!tmp10) {
      tmp10 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
      const tmp11 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
    }
    if (!tmp10) {
      if ("function" === typeof stateNode.componentWillMount) {
        stateNode.componentWillMount();
      }
      if ("function" === typeof stateNode.UNSAFE_componentWillMount) {
        const result = stateNode.UNSAFE_componentWillMount();
      }
      if (stateNode.state !== stateNode.state) {
        closure_124.enqueueReplaceState(stateNode, stateNode.state, null);
      }
      processUpdateQueue(stateNode, props, stateNode, arg3);
      suspendIfUpdateReadFromEntangledAsyncAction();
      stateNode.state = stateNode.memoizedState;
    }
    if ("function" === typeof stateNode.componentDidMount) {
      stateNode.flags = stateNode.flags | 4194308;
    }
  }
  tmp3 = closure_72;
}
function resolveClassComponentProps(defaultProps) {
  let tmp2 = arg1;
  if ("ref" in arg1) {
    const obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        let tmp12 = tmp5;
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = arg1[tmp5];
          continue;
        }
        continue;
      }
    }
  }
  defaultProps = defaultProps.defaultProps;
  let tmp6 = tmp2;
  if (defaultProps) {
    let tmp7 = tmp2;
    if (tmp2 === arg1) {
      tmp7 = assign({}, tmp2);
    }
    tmp6 = tmp7;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp6 = tmp7;
      while (keys1[tmp2] !== undefined) {
        let tmp13 = tmp11;
        if (undefined !== tmp7[tmp11]) {
          continue;
        } else {
          tmp7[tmp11] = defaultProps[tmp11];
          continue;
        }
        continue;
      }
    }
  }
  return tmp6;
}
function defaultOnRecoverableError(arg0) {
  callback4(arg0);
}
function logUncaughtError(onUncaughtError, stack) {
  try {
    const obj = { componentStack: stack.stack };
    onUncaughtError.onUncaughtError(stack.value, obj);
  } catch (tmp2) {
    require = tmp2;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw closure_0;
    });
  }
}
function logCaughtError(onCaughtError, tag, stack) {
  try {
    const obj = { componentStack: stack.stack };
    let stateNode = null;
    if (1 === tag.tag) {
      stateNode = tag.stateNode;
    }
    obj.errorBoundary = stateNode;
    onCaughtError.onCaughtError(stack.value, obj);
  } catch (tmp4) {
    require = tmp4;
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      throw closure_0;
    });
  }
}
function createRootErrorUpdate(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  const tmp = createUpdate(arg2);
  tmp.tag = 3;
  tmp.payload = { element: null };
  tmp.callback = () => {
    closure_1_356(closure_0, closure_1);
  };
  return tmp;
}
function createClassErrorUpdate(arg0) {
  const tmp = createUpdate(arg0);
  tmp.tag = 3;
  return tmp;
}
function initializeClassErrorUpdate(arg0, arg1, type, value) {
  closure_0 = arg1;
  closure_1 = type;
  closure_2 = value;
  const getDerivedStateFromError = type.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    value = value.value;
    arg0.payload = () => getDerivedStateFromError(closure_4);
    arg0.callback = () => {
      closure_1_357(closure_0, closure_1, closure_2);
    };
  }
  const stateNode = type.stateNode;
  if (tmp) {
    arg0.callback = function() {
      const self = this;
      closure_1_357(closure_0, closure_1, value);
      if ("function" !== typeof getDerivedStateFromError) {
        if (null === set) {
          const _Set = Set;
          const items = [self];
          set = new Set(items);
        } else {
          set.add(self);
        }
      }
      const stack = value.stack;
      const obj = {};
      let str = "";
      if (null !== stack) {
        str = stack;
      }
      obj.componentStack = str;
      self.componentDidCatch(value.value, obj);
    };
  }
}
function throwException(tag, arg1, flags, arg3, lanes) {
  flags.flags = flags.flags | 32768;
  let ErrorResult = arg3;
  if (null !== arg3) {
    ErrorResult = arg3;
    if ("object" === typeof arg3) {
      ErrorResult = arg3;
      if ("function" === typeof arg3.then) {
        if (null !== flags.alternate) {
          propagateParentContextChanges(undefined, flags, lanes, true);
        }
        tag = flags.tag;
        let tmp6 = 0 !== (flags.mode & 1);
        if (!tmp6) {
          let tmp7 = 0 !== tag;
          if (tmp7) {
            tmp7 = 11 !== tag;
          }
          if (tmp7) {
            tmp7 = 15 !== tag;
          }
          tmp6 = tmp7;
        }
        if (!tmp6) {
          const alternate = flags.alternate;
          if (alternate) {
            ({ updateQueue: flags.updateQueue, memoizedState: flags.memoizedState, lanes: flags.lanes } = alternate);
          } else {
            flags.updateQueue = null;
            flags.memoizedState = null;
          }
        }
        const current = closure_106.current;
        if (null !== current) {
          const tag3 = current.tag;
          if (13 === tag3) {
            if (flags.mode & 1) {
              if (null === c107) {
                renderDidSuspendDelayIfPossible();
              } else {
                let tmp55 = null === current.alternate;
                if (tmp55) {
                  tmp55 = 0 === c156;
                }
                if (tmp55) {
                  c156 = 3;
                }
              }
            }
            current.flags = current.flags & -257;
            if (0 === (current.mode & 1)) {
              if (current === arg1) {
                current.flags = current.flags | 65536;
              } else {
                current.flags = current.flags | 128;
                flags.flags = flags.flags | 131072;
                flags.flags = flags.flags & -52805;
                if (1 === flags.tag) {
                  if (null === flags.alternate) {
                    flags.tag = 17;
                  } else {
                    const tmp61 = createUpdate(2);
                    tmp61.tag = 2;
                    enqueueUpdate(flags, tmp61, 2);
                  }
                } else {
                  if (tmp59) {
                    flags.tag = 28;
                  }
                  tmp59 = 0 === flags.tag && null === flags.alternate;
                }
                flags.lanes = flags.lanes | 2;
              }
            } else {
              current.flags = current.flags | 65536;
              current.lanes = lanes;
            }
            if (arg3 === closure_98) {
              current.flags = current.flags | 16384;
            } else {
              const updateQueue = current.updateQueue;
              if (null === updateQueue) {
                const _Set3 = Set;
                const items = [arg3];
                const set = new Set(items);
                current.updateQueue = set;
              } else {
                updateQueue.add(arg3);
              }
              if (current.mode & 1) {
                attachPingListener(tag, arg3, lanes);
              }
            }
            return false;
          } else {
            if (22 === tag3) {
              if (current.mode & 1) {
                current.flags = current.flags | 65536;
                if (arg3 === closure_98) {
                  current.flags = current.flags | 16384;
                } else {
                  const updateQueue2 = current.updateQueue;
                  if (null === updateQueue2) {
                    let obj = { transitions: null, markerInstances: null };
                    const _Set2 = Set;
                    const items1 = [arg3];
                    const set1 = new Set(items1);
                    obj.retryQueue = set1;
                    current.updateQueue = obj;
                  } else {
                    const retryQueue = updateQueue2.retryQueue;
                    if (null === retryQueue) {
                      const _Set = Set;
                      const items2 = [arg3];
                      const set2 = new Set(items2);
                      updateQueue2.retryQueue = set2;
                    } else {
                      retryQueue.add(arg3);
                    }
                  }
                  attachPingListener(tag, arg3, lanes);
                }
                return false;
              }
            }
            const _Error = Error;
            throw Error("Unexpected Suspense handler tag (" + current.tag + "). This is a bug in React.");
          }
        } else if (1 === tag.tag) {
          attachPingListener(tag, arg3, lanes);
          renderDidSuspendDelayIfPossible();
          return false;
        } else {
          const _Error2 = Error;
          ErrorResult = Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        }
      }
    }
  }
  obj = { cause: ErrorResult };
  let tmp9 = createCapturedValueAtFiber(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", obj), flags);
  if (null === items3) {
    items3 = [tmp9];
  } else {
    items3.push(tmp9);
  }
  if (4 !== c156) {
    c156 = 2;
  }
  if (null === arg1) {
    return true;
  } else {
    const tmp76 = createCapturedValueAtFiber(ErrorResult, flags);
    let _return = arg1;
    let tmp17 = flags;
    const tag2 = _return.tag;
    let tmp13 = tmp17;
    let tmp14 = tmp9;
    while (3 !== tag2) {
      if (1 === tag2) {
        ({ type, stateNode } = _return);
        tmp13 = type;
        tmp14 = stateNode;
        if (0 === (_return.flags & 128)) {
          if ("function" !== typeof type.getDerivedStateFromError) {
            tmp13 = type;
            tmp14 = stateNode;
            if (null !== stateNode) {
              tmp13 = type;
              tmp14 = stateNode;
              if ("function" === typeof stateNode.componentDidCatch) {
                let tmp15 = _null10;
                if (null !== _null10) {
                  let tmp16 = _null10;
                  tmp13 = type;
                  tmp14 = stateNode;
                }
              }
            }
          }
          let num6 = 65536;
          _return.flags = _return.flags | 65536;
          let tmp18 = lanes & -lanes;
          _return.lanes = _return.lanes | tmp18;
          let tmp19 = createClassErrorUpdate;
          let tmp20 = createClassErrorUpdate(tmp18);
          let tmp21 = initializeClassErrorUpdate;
          let tmp22 = tmp20;
          let tmp23 = tag;
          let tmp24 = _return;
          let tmp25 = tmp76;
          let tmp26 = initializeClassErrorUpdate(tmp20, tag, tmp12, tmp76);
          let tmp27 = enqueueCapturedUpdate;
          let tmp28 = enqueueCapturedUpdate(_return, tmp20);
          let flag2 = false;
          return false;
        }
      }
      _return = _return.return;
      tmp17 = tmp13;
      tmp9 = tmp14;
      if (null !== _return) {
        continue;
      } else {
        let flag8 = false;
        return false;
      }
    }
    _return.flags = _return.flags | 65536;
    _return.lanes = _return.lanes | lanes & -lanes;
    enqueueCapturedUpdate(_return, createRootErrorUpdate(_return.stateNode, tmp76, lanes & -lanes));
    return false;
  }
}
function reconcileChildren(child) {
  if (null === child) {
    let tmp5 = callback3(arg1, null, arg2, arg3);
  } else {
    tmp5 = callback2(arg1, child.child, arg2, arg3);
  }
  arg1.child = tmp5;
}
function updateForwardRef(arg0, ref, render) {
  let tmp2 = arg3;
  if ("ref" in arg3) {
    const obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        let tmp13 = tmp5;
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = arg3[tmp5];
          continue;
        }
        continue;
      }
    }
  }
  prepareToReadContext(ref);
  if (null !== arg0) {
    if (!c127) {
      bailoutHooks(arg0, ref, arg4);
      return bailoutOnAlreadyFinishedWork(arg0, ref, arg4);
    }
  }
  ref.flags = ref.flags | 1;
  reconcileChildren(arg0, ref, renderWithHooks(arg0, ref, render.render, tmp2, ref.ref, arg4), arg4);
  return ref.child;
}
function updateMemoComponent(child, mode, type) {
  if (null === child) {
    type = type.type;
    if ("function" === typeof type) {
      if (!shouldConstruct(type)) {
        if (undefined === type.defaultProps) {
          if (null === type.compare) {
            mode.tag = 15;
            mode.type = type;
            return updateSimpleMemoComponent(child, mode, type, arg3, arg4);
          }
        }
      }
    }
    const tmp15 = createFiberFromTypeAndProps(type.type, null, arg3, undefined, mode.mode, arg4);
    tmp15.ref = mode.ref;
    tmp15.return = mode;
    mode.child = tmp15;
    return tmp15;
  } else {
    child = child.child;
    if (!checkScheduledUpdateOrContext(child, arg4)) {
      let compare = type.compare;
      if (null === compare) {
        compare = shallowEqual;
      }
      if (compare(child.memoizedProps, arg3)) {
        if (child.ref === mode.ref) {
          return bailoutOnAlreadyFinishedWork(child, mode, arg4);
        }
      }
    }
    mode.flags = mode.flags | 1;
    const tmp3 = createWorkInProgress(child, arg3);
    tmp3.ref = mode.ref;
    tmp3.return = mode;
    mode.child = tmp3;
    return tmp3;
  }
}
function updateSimpleMemoComponent(memoizedProps, ref) {
  let tmp = arg3;
  if (null !== memoizedProps) {
    memoizedProps = memoizedProps.memoizedProps;
    tmp = arg3;
    if (shallowEqual(memoizedProps, arg3)) {
      tmp = arg3;
      if (memoizedProps.ref === ref.ref) {
        c127 = false;
        ref.pendingProps = memoizedProps;
        if (checkScheduledUpdateOrContext(memoizedProps, arg4)) {
          tmp = memoizedProps;
          if (0 !== (memoizedProps.flags & 131072)) {
            c127 = true;
            tmp = memoizedProps;
          }
        } else {
          ref.lanes = memoizedProps.lanes;
          return bailoutOnAlreadyFinishedWork(memoizedProps, ref, arg4);
        }
      }
    }
  }
  return updateFunctionComponent(memoizedProps, ref, arg2, tmp, arg4);
}
function updateOffscreenComponent(memoizedState, pendingProps) {
  pendingProps = pendingProps.pendingProps;
  const children = pendingProps.children;
  memoizedState = null;
  if (null !== memoizedState) {
    memoizedState = memoizedState.memoizedState;
  }
  markRef(memoizedState, pendingProps);
  if ("hidden" !== pendingProps.mode) {
    if (0 === tmp) {
      if (null !== memoizedState) {
        pushTransition(undefined, memoizedState.cachePool);
        pushHiddenContext(undefined, memoizedState);
        reuseSuspenseHandlerOnStack(undefined);
        pendingProps.memoizedState = null;
      } else {
        if (tmp2) {
          pushTransition(undefined, null);
        }
        reuseHiddenContextOnStack();
        reuseSuspenseHandlerOnStack(undefined);
      }
    }
    reconcileChildren(memoizedState, pendingProps, children, arg2);
    return pendingProps.child;
  }
  if (0 !== (pendingProps.flags & 128)) {
    let tmp45 = arg2;
    if (null !== memoizedState) {
      tmp45 = memoizedState.baseLanes | arg2;
    }
    if (tmp2) {
      let sibling = memoizedState.child;
      pendingProps.child = sibling;
      let num2 = 0;
      let num3 = 0;
      if (null !== sibling) {
        do {
          num2 = num2 | sibling.lanes | sibling.childLanes;
          sibling = sibling.sibling;
          num3 = num2;
        } while (null !== sibling);
      }
      pendingProps.childLanes = num3 & ~tmp45;
    } else {
      pendingProps.childLanes = 0;
      pendingProps.child = null;
    }
    deferHiddenOffscreenComponent(memoizedState, pendingProps, tmp45, arg2);
    return null;
  } else if (0 === (pendingProps.mode & 1)) {
    pendingProps.memoizedState = { baseLanes: 0, cachePool: null };
    if (tmp2) {
      pushTransition(undefined, null);
    }
    reuseHiddenContextOnStack();
    pushOffscreenSuspenseHandler(pendingProps);
  } else if (0 !== (arg2 & 536870912)) {
    pendingProps.memoizedState = { baseLanes: 0, cachePool: null };
    if (tmp2) {
      let cachePool = null;
      if (null !== memoizedState) {
        cachePool = memoizedState.cachePool;
      }
      pushTransition(undefined, cachePool);
      const tmp24 = pushTransition;
    }
    if (null !== memoizedState) {
      pushHiddenContext(undefined, memoizedState);
    } else {
      reuseHiddenContextOnStack();
    }
    pushOffscreenSuspenseHandler(pendingProps);
  } else {
    pendingProps.childLanes = 536870912;
    pendingProps.lanes = 536870912;
    let tmp18 = arg2;
    if (null !== memoizedState) {
      tmp18 = memoizedState.baseLanes | arg2;
    }
    deferHiddenOffscreenComponent(memoizedState, pendingProps, tmp18, arg2);
    return null;
  }
}
function deferHiddenOffscreenComponent(arg0, arg1, baseLanes) {
  const tmp = peekCacheFromPool();
  let tmp2 = null;
  if (null !== tmp) {
    let obj = { parent: obj17._currentValue, pool: tmp };
    tmp2 = obj;
  }
  obj = { baseLanes, cachePool: tmp2 };
  arg1.memoizedState = obj;
  if (null !== arg0) {
    pushTransition(undefined, null);
  }
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(arg1);
  if (null !== arg0) {
    propagateParentContextChanges(undefined, arg1, arg3, true);
  }
  return null;
}
function markRef(ref, ref2) {
  if (null === ref2.ref) {
    if (tmp3) {
      ref2.flags = ref2.flags | 2097664;
    }
    tmp3 = null !== ref && null !== ref.ref;
  } else {
    if ("function" !== typeof ref) {
      if ("object" !== tmp) {
        const _Error = Error;
        throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
      }
    }
    if (null === ref) {
      ref2.flags = ref2.flags | 2097664;
    }
  }
}
function updateFunctionComponent(arg0, flags) {
  prepareToReadContext(flags);
  if (null !== arg0) {
    if (!c127) {
      bailoutHooks(arg0, flags, arg4);
      return bailoutOnAlreadyFinishedWork(arg0, flags, arg4);
    }
  }
  flags.flags = flags.flags | 1;
  reconcileChildren(arg0, flags, renderWithHooks(arg0, flags, arg2, arg3, undefined, arg4), arg4);
  return flags.child;
}
function replayFunctionComponent(arg0, flags) {
  prepareToReadContext(flags);
  flags.updateQueue = null;
  finishRenderingHooks(arg0);
  if (null !== arg0) {
    if (!c127) {
      bailoutHooks(arg0, flags, arg5);
      return bailoutOnAlreadyFinishedWork(arg0, flags, arg5);
    }
  }
  flags.flags = flags.flags | 1;
  reconcileChildren(arg0, flags, renderWithHooksAgain(flags, arg3, arg2, arg4), arg5);
  return flags.child;
}
function updateClassComponent(dependencies, stateNode, contextType, memoizedProps) {
  let tmp = prepareToReadContext(stateNode);
  if (null === stateNode.stateNode) {
    resetSuspendedCurrentOnMountInLegacyMode(dependencies, stateNode);
    constructClassInstance(stateNode, contextType, memoizedProps);
    tmp = memoizedProps;
    tmp = arg4;
    tmp = mountClassInstance(stateNode, contextType, memoizedProps, arg4);
    let flag2 = true;
  } else if (null === dependencies) {
    ({ stateNode, memoizedProps } = stateNode);
    const tmp52 = resolveClassComponentProps(contextType, memoizedProps);
    stateNode.props = tmp52;
    contextType = contextType.contextType;
    let tmp53 = closure_72;
    let tmp54 = "object" === typeof contextType;
    if (tmp54) {
      tmp54 = null !== contextType;
    }
    if (tmp54) {
      tmp53 = readContext(contextType);
    }
    const getDerivedStateFromProps2 = contextType.getDerivedStateFromProps;
    let tmp57 = tmp56;
    if ("function" !== typeof getDerivedStateFromProps2) {
      tmp57 = "function" === typeof stateNode.getSnapshotBeforeUpdate;
    }
    let tmp59 = tmp57;
    if (!tmp57) {
      tmp59 = "function" !== typeof stateNode.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode.componentWillReceiveProps;
      const tmp60 = "function" !== typeof stateNode.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode.componentWillReceiveProps;
    }
    if (!tmp59) {
      let tmp61 = tmp58;
      if (!tmp58) {
        tmp61 = stateNode.context !== tmp53;
      }
      if (tmp61) {
        callComponentWillReceiveProps(undefined, stateNode, memoizedProps, tmp53);
      }
    }
    c93 = false;
    const memoizedState3 = stateNode.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(stateNode, memoizedProps, stateNode, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState4 = stateNode.memoizedState;
    if (stateNode.pendingProps === memoizedProps) {
      if (memoizedState3 === memoizedState4) {
        if (!c93) {
          flag2 = false;
          if ("function" === typeof stateNode.componentDidMount) {
            stateNode.flags = stateNode.flags | 4194308;
            flag2 = false;
          }
        }
      }
    }
    if ("function" === typeof getDerivedStateFromProps2) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps2, memoizedProps);
      memoizedState4 = stateNode.memoizedState;
    }
    let tmp81 = c93;
    if (!c93) {
      tmp81 = checkShouldComponentUpdate(stateNode, contextType, tmp52, memoizedProps, memoizedState3, memoizedState4, tmp53);
    }
    if (tmp81) {
      if (!tmp57) {
        tmp57 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
        const tmp90 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
      }
      if (!tmp57) {
        if ("function" === typeof stateNode.componentWillMount) {
          stateNode.componentWillMount();
        }
        if ("function" === typeof stateNode.UNSAFE_componentWillMount) {
          const result = stateNode.UNSAFE_componentWillMount();
        }
      }
      if ("function" === typeof stateNode.componentDidMount) {
        stateNode.flags = stateNode.flags | 4194308;
      }
    } else {
      if ("function" === typeof stateNode.componentDidMount) {
        stateNode.flags = stateNode.flags | 4194308;
      }
      stateNode.memoizedProps = memoizedProps;
      stateNode.memoizedState = memoizedState4;
    }
    stateNode.props = memoizedProps;
    stateNode.state = memoizedState4;
    stateNode.context = tmp53;
    flag2 = tmp81;
  } else {
    const stateNode2 = stateNode.stateNode;
    tmp = cloneUpdateQueue;
    tmp = cloneUpdateQueue(dependencies, stateNode);
    const memoizedProps2 = stateNode.memoizedProps;
    tmp = resolveClassComponentProps;
    tmp = resolveClassComponentProps(contextType, memoizedProps2);
    stateNode2.props = tmp;
    const pendingProps = stateNode.pendingProps;
    const contextType2 = contextType.contextType;
    let tmp4 = closure_72;
    let tmp2 = "object" === typeof contextType2;
    if (tmp2) {
      tmp2 = null !== contextType2;
    }
    if (tmp2) {
      tmp4 = readContext(contextType2);
    }
    const getDerivedStateFromProps = contextType.getDerivedStateFromProps;
    let tmp6 = tmp5;
    if ("function" !== typeof getDerivedStateFromProps) {
      tmp6 = "function" === typeof stateNode2.getSnapshotBeforeUpdate;
    }
    let tmp7 = tmp6;
    if (!tmp6) {
      tmp7 = "function" !== typeof stateNode2.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode2.componentWillReceiveProps;
      const tmp8 = "function" !== typeof stateNode2.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode2.componentWillReceiveProps;
    }
    if (!tmp7) {
      if (tmp9) {
        callComponentWillReceiveProps(undefined, stateNode2, memoizedProps, tmp4);
      }
      tmp9 = memoizedProps2 !== pendingProps || stateNode2.context !== tmp4;
    }
    c93 = false;
    const memoizedState = stateNode.memoizedState;
    stateNode2.state = memoizedState;
    processUpdateQueue(stateNode, memoizedProps, stateNode2, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState2 = stateNode.memoizedState;
    if (memoizedProps2 === pendingProps) {
      if (memoizedState === memoizedState2) {
        tmp = c93;
        if (!c93) {
          let tmp24 = "function" !== typeof stateNode2.componentDidUpdate;
          if (!tmp24) {
            tmp24 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
            const tmp25 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
          }
          if (!tmp24) {
            stateNode.flags = stateNode.flags | 4;
          }
          let tmp26 = "function" !== typeof stateNode2.getSnapshotBeforeUpdate;
          if (!tmp26) {
            tmp26 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
            const tmp27 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
          }
          flag2 = false;
          if (!tmp26) {
            stateNode.flags = stateNode.flags | 1024;
            flag2 = false;
          }
        }
      }
    }
    if ("function" === typeof getDerivedStateFromProps) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps, memoizedProps);
      memoizedState2 = stateNode.memoizedState;
    }
    let tmp33 = c93;
    if (!c93) {
      tmp33 = checkShouldComponentUpdate(stateNode, contextType, tmp, memoizedProps, memoizedState, memoizedState2, tmp4);
    }
    if (!tmp33) {
      let tmp42 = null !== dependencies && null !== dependencies.dependencies;
      if (tmp42) {
        tmp42 = checkIfContextChanged(dependencies.dependencies);
      }
      tmp33 = tmp42;
    }
    if (tmp33) {
      if (!tmp6) {
        tmp6 = "function" !== typeof stateNode2.UNSAFE_componentWillUpdate && "function" !== typeof stateNode2.componentWillUpdate;
        const tmp48 = "function" !== typeof stateNode2.UNSAFE_componentWillUpdate && "function" !== typeof stateNode2.componentWillUpdate;
      }
      if (!tmp6) {
        if ("function" === typeof stateNode2.componentWillUpdate) {
          stateNode2.componentWillUpdate(memoizedProps, memoizedState2, tmp4);
        }
        if ("function" === typeof stateNode2.UNSAFE_componentWillUpdate) {
          const result1 = stateNode2.UNSAFE_componentWillUpdate(memoizedProps, memoizedState2, tmp4);
        }
      }
      if ("function" === typeof stateNode2.componentDidUpdate) {
        stateNode.flags = stateNode.flags | 4;
      }
      if ("function" === typeof stateNode2.getSnapshotBeforeUpdate) {
        stateNode.flags = stateNode.flags | 1024;
      }
    } else {
      let tmp44 = "function" !== typeof stateNode2.componentDidUpdate;
      if (!tmp44) {
        tmp44 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
        const tmp45 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
      }
      if (!tmp44) {
        stateNode.flags = stateNode.flags | 4;
      }
      let tmp46 = "function" !== typeof stateNode2.getSnapshotBeforeUpdate;
      if (!tmp46) {
        tmp46 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
        const tmp47 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
      }
      if (!tmp46) {
        stateNode.flags = stateNode.flags | 1024;
      }
      stateNode.memoizedProps = memoizedProps;
      stateNode.memoizedState = memoizedState2;
    }
    stateNode2.props = memoizedProps;
    stateNode2.state = memoizedState2;
    stateNode2.context = tmp4;
    flag2 = tmp33;
  }
  return finishClassComponent(dependencies, stateNode, contextType, flag2, undefined, arg4);
}
function finishClassComponent(child, flags, getDerivedStateFromError) {
  markRef(child, flags);
  if (!arg3) {
    if (!tmp2) {
      return bailoutOnAlreadyFinishedWork(child, flags, arg5);
    }
  }
  const stateNode = flags.stateNode;
  if (0 === (flags.flags & 128)) {
    let renderResult = stateNode.render();
  } else {
    renderResult = null;
  }
  flags.flags = flags.flags | 1;
  if (null !== child) {
    if (tmp2) {
      flags.child = callback2(flags, child.child, null, arg5);
      flags.child = callback2(flags, null, renderResult, arg5);
    }
    flags.memoizedState = stateNode.state;
    return flags.child;
  }
  reconcileChildren(child, flags, renderResult, arg5);
}
function mountSuspenseOffscreenState(baseLanes) {
  return { baseLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(childLanes) {
  let num = 0;
  if (null !== childLanes) {
    num = childLanes.childLanes & ~arg2;
  }
  let tmp2 = num;
  if (arg1) {
    tmp2 = num | c160;
  }
  return tmp2;
}
function updateSuspenseComponent(memoizedState, pendingProps, lanes) {
  pendingProps = pendingProps.pendingProps;
  let tmp2 = tmp;
  if (0 === (pendingProps.flags & 128)) {
    if (null === memoizedState) {
      let flag = 0 !== (closure_108.current & 2);
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  let flag2 = false;
  if (tmp2) {
    pendingProps.flags = pendingProps.flags & -129;
    flag2 = true;
  }
  pendingProps.flags = pendingProps.flags & -33;
  if (null === memoizedState) {
    ({ children, fallback: fallback2 } = pendingProps);
    if (flag2) {
      reuseSuspenseHandlerOnStack(undefined);
      ({ mode: mode2, child: child6 } = pendingProps);
      let obj = { mode: "hidden", children };
      if (0 === (mode2 & 1)) {
        if (null !== child6) {
          child6.childLanes = 0;
          child6.pendingProps = obj;
          let tmp76 = child6;
        }
        const tmp82 = createFiberFromFragment(fallback2, mode2, lanes, null);
        tmp76.return = pendingProps;
        tmp82.return = pendingProps;
        tmp76.sibling = tmp82;
        pendingProps.child = tmp76;
        const child7 = pendingProps.child;
        child7.memoizedState = mountSuspenseOffscreenState(lanes);
        child7.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp5, lanes);
        pendingProps.memoizedState = closure_128;
        return tmp82;
      }
      tmp76 = createFiberFromOffscreen(obj, mode2, 0, null);
    } else {
      pushPrimaryTreeSuspenseHandler(pendingProps);
      return mountSuspensePrimaryChildren(pendingProps, children);
    }
  } else {
    const memoizedState2 = memoizedState.memoizedState;
    if (null !== memoizedState2) {
      if (null !== memoizedState2.dehydrated) {
        if (tmp) {
          if (pendingProps.flags & 256) {
            pushPrimaryTreeSuspenseHandler(pendingProps);
            pendingProps.flags = pendingProps.flags & -257;
            let tmp42 = retrySuspenseComponentWithoutHydrating(memoizedState, pendingProps, lanes);
          } else if (null !== pendingProps.memoizedState) {
            reuseSuspenseHandlerOnStack(undefined);
            pendingProps.child = memoizedState.child;
            pendingProps.flags = pendingProps.flags | 128;
            tmp42 = null;
          } else {
            reuseSuspenseHandlerOnStack(undefined);
            const fallback3 = pendingProps.fallback;
            const mode3 = pendingProps.mode;
            obj = { mode: "visible", children: pendingProps.children };
            const tmp93 = createFiberFromOffscreen(obj, mode3, 0, null);
            const tmp98 = createFiberFromFragment(fallback3, mode3, lanes, null);
            tmp98.flags = tmp98.flags | 2;
            tmp93.return = pendingProps;
            tmp98.return = pendingProps;
            tmp93.sibling = tmp98;
            pendingProps.child = tmp93;
            if (0 !== (pendingProps.mode & 1)) {
              callback2(pendingProps, memoizedState.child, null, lanes);
            }
            const child5 = pendingProps.child;
            child5.memoizedState = mountSuspenseOffscreenState(lanes);
            child5.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp5, lanes);
            pendingProps.memoizedState = closure_128;
            tmp42 = tmp98;
          }
        } else {
          pushPrimaryTreeSuspenseHandler(pendingProps);
          shim$1();
          if (!c127) {
            propagateParentContextChanges(undefined, pendingProps, lanes, false);
          }
          if (!c127) {
            if (0 === (lanes & memoizedState.childLanes)) {
              shim$1();
              tmp42 = mountSuspensePrimaryChildren(pendingProps, pendingProps.children);
              tmp42.flags = tmp42.flags | 4096;
            }
          }
          if (null !== c147) {
            let num19 = 1;
            if (0 === (lanes & -lanes & 42)) {
              num19 = 1;
              if (2 !== tmp86) {
                if (8 === tmp86) {
                  num19 = 4;
                } else if (32 === tmp86) {
                  num19 = 16;
                } else {
                  if (128 !== tmp86) {
                    if (256 !== tmp86) {
                      if (512 !== tmp86) {
                        if (1024 !== tmp86) {
                          if (2048 !== tmp86) {
                            if (4096 !== tmp86) {
                              if (8192 !== tmp86) {
                                if (16384 !== tmp86) {
                                  if (32768 !== tmp86) {
                                    if (65536 !== tmp86) {
                                      if (131072 !== tmp86) {
                                        if (262144 !== tmp86) {
                                          if (524288 !== tmp86) {
                                            if (1048576 !== tmp86) {
                                              if (2097152 !== tmp86) {
                                                if (4194304 !== tmp86) {
                                                  if (8388608 !== tmp86) {
                                                    if (16777216 !== tmp86) {
                                                      if (33554432 !== tmp86) {
                                                        num19 = 268435456 === tmp86 ? 134217728 : 0;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  num19 = 64;
                }
              }
            }
            let num20 = 0;
            if (0 === (num19 & (tmp43.suspendedLanes | lanes))) {
              num20 = num19;
            }
            if (0 !== num20) {
              if (num20 !== memoizedState2.retryLane) {
                memoizedState2.retryLane = num20;
                enqueueConcurrentRenderForLane(memoizedState, num20);
                scheduleUpdateOnFiber(tmp43, memoizedState, num20);
                throw closure_126;
              }
            }
          }
          shim$1();
          renderDidSuspendDelayIfPossible();
          tmp42 = retrySuspenseComponentWithoutHydrating(memoizedState, pendingProps, lanes);
        }
        return tmp42;
      }
    }
    if (flag2) {
      reuseSuspenseHandlerOnStack(undefined);
      const fallback = pendingProps.fallback;
      const mode = pendingProps.mode;
      const child2 = memoizedState.child;
      const sibling2 = child2.sibling;
      const obj1 = { mode: "hidden", children: pendingProps.children };
      if (0 === (mode & 1)) {
        if (pendingProps.child !== child2) {
          const child3 = pendingProps.child;
          child3.childLanes = 0;
          child3.pendingProps = obj1;
          pendingProps.deletions = null;
          let tmp15 = child3;
        }
        if (null !== sibling2) {
          let tmp21 = createWorkInProgress(sibling2, fallback);
        } else {
          tmp21 = createFiberFromFragment(fallback, mode, lanes, null);
          tmp21.flags = tmp21.flags | 2;
        }
        tmp21.return = pendingProps;
        tmp15.return = pendingProps;
        tmp15.sibling = tmp21;
        pendingProps.child = tmp15;
        const child4 = pendingProps.child;
        memoizedState = memoizedState.child.memoizedState;
        if (null === memoizedState) {
          obj3 = mountSuspenseOffscreenState(lanes);
        } else {
          let cachePool = memoizedState.cachePool;
          if (null !== cachePool) {
            const _currentValue = obj17._currentValue;
            if (cachePool.parent !== _currentValue) {
              obj2 = { parent: _currentValue, pool: _currentValue };
              cachePool = obj2;
            }
            let tmp24 = cachePool;
          } else {
            tmp24 = getSuspendedCache();
          }
          obj3 = { baseLanes: memoizedState.baseLanes | lanes, cachePool: tmp24 };
        }
        child4.memoizedState = obj3;
        child4.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp5, lanes);
        pendingProps.memoizedState = closure_128;
        return tmp21;
      }
      const tmp14 = createWorkInProgress(child2, obj1);
      tmp14.subtreeFlags = child2.subtreeFlags & 31457280;
      tmp15 = tmp14;
    } else {
      pushPrimaryTreeSuspenseHandler(pendingProps);
      const child = memoizedState.child;
      const sibling = child.sibling;
      obj = { mode: "visible", children: pendingProps.children };
      const tmp9 = createWorkInProgress(child, obj);
      if (0 === (pendingProps.mode & 1)) {
        tmp9.lanes = lanes;
      }
      tmp9.return = pendingProps;
      tmp9.sibling = null;
      if (null !== sibling) {
        const deletions = pendingProps.deletions;
        if (null === deletions) {
          const items = [sibling];
          pendingProps.deletions = items;
          pendingProps.flags = pendingProps.flags | 16;
        } else {
          deletions.push(sibling);
        }
      }
      pendingProps.child = tmp9;
      pendingProps.memoizedState = null;
      return tmp9;
    }
  }
}
function mountSuspensePrimaryChildren(mode, children) {
  const tmp = createFiberFromOffscreen({ mode: "visible", children }, mode.mode, 0, null);
  tmp.return = mode;
  mode.child = tmp;
  return tmp;
}
function retrySuspenseComponentWithoutHydrating(child, pendingProps) {
  callback2(pendingProps, child.child, null, arg2);
  const tmp2 = mountSuspensePrimaryChildren(pendingProps, pendingProps.pendingProps.children);
  tmp2.flags = tmp2.flags | 2;
  pendingProps.memoizedState = null;
  return tmp2;
}
function scheduleSuspenseWorkOnFiber(lanes) {
  lanes.lanes = lanes.lanes | arg1;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg1;
  }
  scheduleContextWorkOnParentPath(lanes.return, arg1, arg2);
}
function initSuspenseListRenderState(memoizedState, isBackwards, tail, last, tailMode) {
  memoizedState = memoizedState.memoizedState;
  if (null === memoizedState) {
    const obj = { isBackwards, rendering: null, renderingStartTime: 0, last, tail, tailMode };
    memoizedState.memoizedState = obj;
  } else {
    memoizedState.isBackwards = isBackwards;
    memoizedState.rendering = null;
    memoizedState.renderingStartTime = 0;
    memoizedState.last = last;
    memoizedState.tail = tail;
    memoizedState.tailMode = tailMode;
  }
}
function updateSuspenseListComponent(flags, pendingProps) {
  pendingProps = pendingProps.pendingProps;
  ({ revealOrder, tail } = pendingProps);
  reconcileChildren(flags, pendingProps, pendingProps.children, arg2);
  const current = closure_108.current;
  if (0 !== (current & 2)) {
    let tmp10 = current & 1 | 2;
    pendingProps.flags = pendingProps.flags | 128;
  } else {
    if (null !== flags) {
      if (0 !== (flags.flags & 128)) {
        let child = pendingProps.child;
        if (null !== child) {
          while (true) {
            let tmp2 = child;
            if (13 === child.tag) {
              if (null !== child.memoizedState) {
                let tmp5 = scheduleSuspenseWorkOnFiber;
                let tmp6 = scheduleSuspenseWorkOnFiber(child, arg2, pendingProps);
              }
            } else if (19 === child.tag) {
              let tmp3 = scheduleSuspenseWorkOnFiber;
              let tmp4 = scheduleSuspenseWorkOnFiber(child, arg2, pendingProps);
            } else {
              if (null !== child.child) {
                child.child.return = child;
                sibling = child.child;
              }
              child = sibling;
              if (null === sibling) {
                break;
              }
            }
            if (child === pendingProps) {
              break;
            } else {
              let tmp7 = child;
              let tmp8 = child;
              if (null !== child.sibling) {
                ({ return: tmp8.sibling.return, sibling } = tmp8);
              } else {
                let tmp9 = tmp7;
                while (null !== tmp7.return) {
                  if (tmp7.return === pendingProps) {
                    break;
                  } else {
                    let _return = tmp7.return;
                    tmp7 = _return;
                    tmp8 = _return;
                    break;
                  }
                }
              }
              break;
            }
          }
        }
      }
    }
    tmp10 = current & 1;
  }
  push(closure_108, tmp10);
  if (0 === (pendingProps.mode & 1)) {
    pendingProps.memoizedState = null;
  } else if ("forwards" === revealOrder) {
    let sibling3 = pendingProps.child;
    let tmp31 = null;
    let tmp32 = null;
    if (null !== sibling3) {
      do {
        let alternate2 = sibling3.alternate;
        let tmp33 = null !== alternate2;
        let tmp34 = sibling3;
        let tmp35 = tmp31;
        if (tmp33) {
          let tmp36 = findFirstSuspended;
          tmp33 = null === findFirstSuspended(alternate2);
        }
        if (tmp33) {
          tmp35 = sibling3;
        }
        sibling3 = sibling3.sibling;
        tmp31 = tmp35;
        tmp32 = tmp35;
      } while (null !== sibling3);
    }
    if (null === tmp32) {
      let sibling4 = pendingProps.child;
      pendingProps.child = null;
    } else {
      sibling4 = tmp32.sibling;
      tmp32.sibling = null;
    }
    initSuspenseListRenderState(pendingProps, false, sibling4, tmp32, tail);
  } else if ("backwards" === revealOrder) {
    let sibling2 = pendingProps.child;
    pendingProps.child = null;
    let tmp19 = null;
    let tmp20 = null;
    if (null !== sibling2) {
      while (true) {
        let alternate = sibling2.alternate;
        let tmp21 = tmp19;
        let tmp22 = sibling2;
        if (null !== alternate) {
          let tmp23 = findFirstSuspended;
          if (null === findFirstSuspended(alternate)) {
            break;
          }
        }
        sibling2 = sibling2.sibling;
        tmp22.sibling = tmp19;
        tmp19 = tmp22;
        tmp20 = tmp22;
      }
      pendingProps.child = sibling2;
      tmp20 = tmp19;
    }
    initSuspenseListRenderState(pendingProps, true, tmp20, null, tail);
  } else if ("together" === revealOrder) {
    initSuspenseListRenderState(pendingProps, false, null, null, undefined);
  } else {
    pendingProps.memoizedState = null;
  }
  return pendingProps.child;
}
function resetSuspendedCurrentOnMountInLegacyMode(arg0, mode) {
  let tmp = 0 === (mode.mode & 1);
  if (tmp) {
    tmp = null !== arg0;
  }
  if (tmp) {
    arg0.alternate = null;
    mode.alternate = null;
    mode.flags = mode.flags | 2;
  }
}
function bailoutOnAlreadyFinishedWork(dependencies, lanes) {
  let sibling2;
  if (null !== dependencies) {
    lanes.dependencies = dependencies.dependencies;
  }
  closure_157 = closure_157 | lanes.lanes;
  if (0 === (arg2 & lanes.childLanes)) {
    if (tmp) {
      propagateParentContextChanges(undefined, lanes, arg2, false);
      if (0 === (arg2 & lanes.childLanes)) {
        return null;
      }
    } else {
      return null;
    }
  }
  if (null !== dependencies) {
    if (lanes.child !== dependencies.child) {
      const _Error = Error;
      throw Error("Resuming work not yet implemented.");
    }
  }
  if (null !== lanes.child) {
    const child = lanes.child;
    const tmp7 = createWorkInProgress(child, child.pendingProps);
    lanes.child = tmp7;
    tmp7.return = lanes;
    let tmp8 = child;
    let tmp9 = tmp7;
    let tmp10 = tmp7;
    if (null !== child.sibling) {
      do {
        let sibling = tmp8.sibling;
        let tmp11 = createWorkInProgress;
        let tmp12 = createWorkInProgress(sibling, sibling.pendingProps);
        tmp9.sibling = tmp12;
        tmp12.return = lanes;
        tmp8 = sibling;
        tmp9 = tmp12;
        tmp10 = tmp12;
        sibling2 = sibling.sibling;
      } while (null !== sibling2);
    }
    tmp10.sibling = null;
  }
  return lanes.child;
}
function checkScheduledUpdateOrContext(lanes) {
  if (0 !== (lanes.lanes & arg1)) {
    return true;
  } else {
    const dependencies = lanes.dependencies;
    let flag = false;
    if (null !== dependencies) {
      flag = false;
      if (checkIfContextChanged(dependencies)) {
        flag = true;
      }
    }
    return flag;
  }
}
function attemptEarlyBailoutIfNoScheduledUpdate(arg0, arg1, arg2) {
  pushProvider(undefined, obj17, tmp3.memoizedState.cache);
  bailoutOnAlreadyFinishedWork(tmp3, tmp2, tmp);
}
function beginWork(memoizedProps, pendingProps) {
  if (null !== memoizedProps) {
    if (memoizedProps.memoizedProps !== pendingProps.pendingProps) {
      c127 = true;
    } else {
      if (!checkScheduledUpdateOrContext(memoizedProps, arg2)) {
        if (0 === (pendingProps.flags & 128)) {
          c127 = false;
          return attemptEarlyBailoutIfNoScheduledUpdate(memoizedProps, pendingProps, arg2);
        }
      }
      let flag3 = false;
      if (0 !== (memoizedProps.flags & 131072)) {
        flag3 = true;
      }
      c127 = flag3;
    }
  } else {
    c127 = false;
  }
  throw pendingProps.pendingProps;
}
function pushProvider(arg0, _currentValue, _currentValue2) {
  push(closure_129, _currentValue._currentValue);
  _currentValue._currentValue = _currentValue2;
}
function popProvider(arg0) {
  arg0._currentValue = ref6.current;
  pop(ref6);
}
function scheduleContextWorkOnParentPath(arg0, arg1, arg2) {
  let _return = arg0;
  if (null !== arg0) {
    while (true) {
      let alternate = _return.alternate;
      let tmp = _return;
      if ((_return.childLanes & arg1) !== arg1) {
        _return.childLanes = _return.childLanes | arg1;
        if (null !== alternate) {
          alternate.childLanes = alternate.childLanes | arg1;
        }
      } else {
        let tmp2 = null !== alternate && (alternate.childLanes & arg1) !== arg1;
        if (tmp2) {
          alternate.childLanes = alternate.childLanes | arg1;
        }
      }
      if (_return === arg2) {
        break;
      } else {
        _return = _return.return;
        if (null === _return) {
          break;
        }
      }
    }
  }
}
function propagateContextChanges(child) {
  child = child.child;
  if (null !== child) {
    child.return = child;
  }
  if (null !== child) {
    while (true) {
      let dependencies = child.dependencies;
      let tmp4 = child;
      let tmp5 = tmp2;
      let tmp6 = tmp3;
      if (null !== dependencies) {
        let child2 = child.child;
        let iter = dependencies.firstContext;
        child = child2;
        let tmp8 = tmp2;
        let tmp9 = tmp3;
        if (null !== iter) {
          while (true) {
            let num = 0;
            let num2 = 0;
            let tmp13 = iter;
            if (0 < arg1.length) {
              let tmp14 = num;
              while (iter.context !== arg1[num]) {
                num = num + 1;
                num2 = num;
              }
              child.lanes = child.lanes | arg2;
              let alternate2 = child.alternate;
              if (null !== alternate2) {
                alternate2.lanes = alternate2.lanes | arg2;
              }
              let tmp15 = scheduleContextWorkOnParentPath;
              let tmp16 = scheduleContextWorkOnParentPath(child.return, arg2, child);
              child = child2;
              tmp8 = alternate2;
              tmp9 = num;
              if (!arg3) {
                child = null;
                tmp8 = alternate2;
                tmp9 = num;
              }
            }
            iter = iter.next;
            tmp9 = num2;
            child = child2;
            tmp8 = tmp13;
          }
        }
      } else if (18 === child.tag) {
        let _return = child.return;
        if (null === _return) {
          break;
        } else {
          _return.lanes = _return.lanes | arg2;
          let alternate = _return.alternate;
          if (null !== alternate) {
            alternate.lanes = alternate.lanes | arg2;
          }
          let tmp10 = scheduleContextWorkOnParentPath;
          let tmp11 = scheduleContextWorkOnParentPath(_return, arg2, child);
          child = null;
          tmp8 = tmp2;
          tmp9 = tmp3;
        }
      } else {
        child = child.child;
        tmp8 = tmp2;
        tmp9 = tmp3;
      }
      if (null !== child) {
        child.return = child;
        let tmp17 = child;
      } else {
        let _return2 = child;
        tmp17 = child;
        if (null !== child) {
          let tmp18 = _return2;
          tmp17 = null;
          while (_return2 !== child) {
            let sibling = _return2.sibling;
            if (null !== sibling) {
              sibling.return = _return2.return;
              tmp17 = sibling;
              break;
            } else {
              _return2 = _return2.return;
              tmp17 = _return2;
              if (null !== _return2) {
                continue;
              } else {
                break;
              }
              break;
            }
            continue;
          }
        }
      }
      child = tmp17;
      tmp2 = tmp8;
      tmp3 = tmp9;
    }
    const _Error = Error;
    throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
  }
}
function propagateParentContextChanges(arg0, flags) {
  let tmp = null;
  let flag = false;
  let tmp4 = null;
  let _return = flags;
  if (null !== flags) {
    while (true) {
      let tmp5 = tmp;
      let tmp6 = _return;
      let tmp7 = flag;
      let tmp8 = tmp2;
      let tmp9 = tmp3;
      let flag2 = flag;
      if (!flag) {
        flag2 = true;
        if (0 === (_return.flags & 524288)) {
          flag2 = flag;
          tmp4 = tmp;
          if (0 !== (_return.flags & 262144)) {
            break;
          }
        }
        break;
      }
      if (10 === _return.tag) {
        let alternate = _return.alternate;
        if (null === alternate) {
          let tmp27 = globalThis;
          let _Error2 = Error;
          let str2 = "Should have a current fiber. This is a bug in React.";
          throw Error("Should have a current fiber. This is a bug in React.");
        } else {
          let iter = alternate.memoizedProps;
          let tmp10 = tmp;
          tmp8 = iter;
          let tmp11 = tmp3;
          if (null !== iter) {
            let type = _return.type;
            let tmp16 = is;
            tmp10 = tmp;
            tmp8 = iter;
            tmp11 = type;
            if (!is(_return.pendingProps.value, iter.value)) {
              if (null !== tmp) {
                let arr = tmp.push(type);
                let items = tmp;
              } else {
                items = [type];
              }
              let tmp18 = items;
              let tmp19 = iter;
              let tmp20 = type;
            }
          }
        }
      } else {
        let tmp28 = ref3;
        tmp10 = tmp;
        tmp11 = tmp3;
        if (_return === ref3.current) {
          let alternate2 = _return.alternate;
          if (null === alternate2) {
            let tmp15 = globalThis;
            let _Error = Error;
            let str = "Should have a current fiber. This is a bug in React.";
            throw Error("Should have a current fiber. This is a bug in React.");
          } else {
            tmp10 = tmp;
            tmp8 = alternate2;
            tmp11 = tmp3;
            if (alternate2.memoizedState.memoizedState !== _return.memoizedState.memoizedState) {
              if (null !== tmp) {
                let tmp13 = obj12;
                arr = tmp.push(obj12);
                let items1 = tmp;
              } else {
                let tmp12 = obj12;
                items1 = [obj12];
              }
              tmp10 = items1;
              tmp8 = alternate2;
              tmp11 = tmp3;
            }
          }
        }
      }
      _return = _return.return;
      tmp = tmp10;
      tmp2 = tmp8;
      tmp3 = tmp11;
      flag = flag2;
      tmp4 = tmp10;
      if (null === _return) {
        break;
      }
    }
  }
  if (null !== tmp4) {
    propagateContextChanges(flags, tmp4, arg2, arg3);
  }
  flags.flags = flags.flags | 262144;
}
function checkIfContextChanged(firstContext) {
  let iter = firstContext.firstContext;
  if (null !== iter) {
    while (is(iter.context._currentValue, iter.memoizedValue)) {
      iter = iter.next;
    }
    return true;
  }
  return false;
}
function prepareToReadContext(dependencies) {
  closure_130 = dependencies;
  c131 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
}
function readContext(arg0) {
  return readContextForConsumer(c130, arg0);
}
function readContextDuringReconciliation(arg0, arg1) {
  if (null === c130) {
    prepareToReadContext(arg0);
  }
  return readContextForConsumer(arg0, arg1);
}
function readContextForConsumer(flags, _currentValue) {
  _currentValue = _currentValue._currentValue;
  let obj = { context: _currentValue, memoizedValue: _currentValue, next: null };
  if (null === obj) {
    if (null === flags) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      obj = { lanes: 0 };
      obj.firstContext = obj;
      flags.dependencies = obj;
      flags.flags = flags.flags | 524288;
    }
  } else {
    obj.next = obj;
  }
  return _currentValue;
}
function createCache() {
  const obj = { controller: new closure_132() };
  const tmp = new closure_132();
  obj.data = new Map();
  obj.refCount = 0;
  return obj;
}
function releaseCache(refCount) {
  const _require = refCount;
  refCount.refCount = refCount.refCount - 1;
  if (0 === refCount.refCount) {
    const result = _require(270).unstable_scheduleCallback(_require(270).unstable_NormalPriority, () => {
      controller = controller.controller;
      controller.abort();
    });
    const obj = _require(270);
  }
}
function peekCacheFromPool() {
  let pooledCache = ref7.current;
  if (null === pooledCache) {
    pooledCache = _null7.pooledCache;
  }
  return pooledCache;
}
function pushTransition(arg0, pool) {
  if (null === pool) {
    push(ref7, ref7.current);
  } else {
    push(ref7, pool.pool);
  }
}
function getSuspendedCache() {
  const tmp = peekCacheFromPool();
  let tmp2 = null;
  if (null !== tmp) {
    const obj = { parent: obj17._currentValue, pool: tmp };
    tmp2 = obj;
  }
  return tmp2;
}
function scheduleRetryEffect(flags) {
  if (null !== arg1) {
    flags.flags = flags.flags | 4;
  }
  if (flags.flags & 16384) {
    let num2 = 536870912;
    if (22 !== flags.tag) {
      num2 = claimNextRetryLane();
    }
    flags.lanes = flags.lanes | num2;
    closure_161 = closure_161 | num2;
  }
}
function cutOffTailIfNeeded(tailMode) {
  tailMode = tailMode.tailMode;
  if ("hidden" === tailMode) {
    let sibling2 = tailMode.tail;
    let tmp7 = null;
    let tmp8 = null;
    if (null !== sibling2) {
      do {
        let tmp9 = sibling2;
        let tmp10 = tmp7;
        if (null !== sibling2.alternate) {
          tmp10 = sibling2;
        }
        sibling2 = sibling2.sibling;
        tmp7 = tmp10;
        tmp8 = tmp10;
      } while (null !== sibling2);
    }
    if (null === tmp8) {
      tailMode.tail = null;
    } else {
      tmp8.sibling = null;
    }
  } else if ("collapsed" === tailMode) {
    let sibling = tailMode.tail;
    let tmp3 = null;
    let tmp4 = null;
    if (null !== sibling) {
      do {
        let tmp = sibling;
        let tmp2 = tmp3;
        if (null !== sibling.alternate) {
          tmp2 = sibling;
        }
        sibling = sibling.sibling;
        tmp3 = tmp2;
        tmp4 = tmp2;
      } while (null !== sibling);
    }
    if (null === tmp4) {
      if (!arg1) {
        if (null !== tailMode.tail) {
          tailMode.tail.sibling = null;
        }
      }
      tailMode.tail = null;
    } else {
      tmp4.sibling = null;
    }
  }
}
function bubbleProperties(alternate) {
  let sibling = alternate.child;
  if (null !== alternate.alternate && alternate.alternate.child === alternate.child) {
    let num6 = 0;
    let num7 = 0;
    let num3 = 0;
    let num4 = 0;
    if (null !== sibling) {
      do {
        num6 = num6 | (sibling.lanes | sibling.childLanes);
        num7 = num7 | sibling.subtreeFlags & 31457280 | sibling.flags & 31457280;
        sibling.return = alternate;
        sibling = sibling.sibling;
        num3 = num6;
        num4 = num7;
      } while (null !== sibling);
    }
  } else {
    let num = 0;
    let num2 = 0;
    let sibling2 = sibling;
    num3 = 0;
    num4 = 0;
    if (null !== sibling) {
      do {
        num = num | (sibling2.lanes | sibling2.childLanes);
        num2 = num2 | sibling2.subtreeFlags | sibling2.flags;
        sibling2.return = alternate;
        sibling2 = sibling2.sibling;
        num3 = num;
        num4 = num2;
      } while (null !== sibling2);
    }
  }
  alternate.subtreeFlags = alternate.subtreeFlags | num4;
  alternate.childLanes = num3;
  return null !== alternate.alternate && alternate.alternate.child === alternate.child;
}
function completeWork(memoizedState, pendingProps, lanes) {
  pendingProps = pendingProps.pendingProps;
  switch (pendingProps.tag) {
    case 0:
      let text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 1:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 2:
      text = globalThis;
      let _Error5 = Error;
      let tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 3:
      const stateNode = pendingProps.stateNode;
      text = null;
      text = null !== memoizedState;
      text = null;
      if (text) {
        text = memoizedState.memoizedState.cache;
      }
      if (pendingProps.memoizedState.cache !== text) {
        pendingProps.flags = pendingProps.flags | 2048;
      }
      text = popProvider;
      text = obj17;
      text = popProvider(obj17);
      text = popHostContainer;
      text = popHostContainer();
      if (stateNode.pendingContext) {
        stateNode.context = stateNode.pendingContext;
        stateNode.pendingContext = null;
      }
      if (text) {
        text = null !== memoizedState.child;
      }
      if (!text) {
        text = null === memoizedState;
      }
      if (!text) {
        let isDehydrated = memoizedState.memoizedState.isDehydrated;
        if (isDehydrated) {
          isDehydrated = 0 === (pendingProps.flags & 256);
        }
        text = isDehydrated;
      }
      if (!text) {
        pendingProps.flags = pendingProps.flags | 1024;
        text = c79;
        if (null !== c79) {
          text = queueRecoverableErrors;
          text = c79;
          text = queueRecoverableErrors(c79);
          c79 = null;
        }
      }
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      return null;
    case 4:
      popHostContainer();
      bubbleProperties(pendingProps);
      text = null;
      return null;
    case 5:
      text = popHostContext;
      text = popHostContext(pendingProps);
      text = null;
      if (null !== memoizedState) {
        if (null != pendingProps.stateNode) {
          if (memoizedState.memoizedProps !== pendingProps) {
            text = pendingProps.flags | 4;
            pendingProps.flags = text;
          }
        }
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        text = pendingProps.flags & -16777217;
        pendingProps.flags = text;
        return null;
      }
      if (pendingProps) {
        text = closure_77;
        let current2 = closure_77.current;
        text = allocateTag;
        text = allocateTag();
        text = get;
        text = get(pendingProps.type);
        text = diffProperties;
        text = closure_52;
        text = null;
        text = pendingProps;
        text = diffProperties(null, closure_52, pendingProps, text.validAttributes);
        text = require;
        text = dependencyMap;
        text = get_BatchedBridge;
        let UIManager2 = text.UIManager;
        text = UIManager2;
        text = current2;
        text = UIManager2.createView(text, text.uiViewClassName, current2, text);
        text = ctor;
        let prototype = ctor.prototype;
        text = new.target;
        text = new.target;
        text = pendingProps;
        text = new ctor(text, text, pendingProps);
        text = map;
        text = map.set(text, pendingProps);
        text = map1;
        text = map1.set(text, pendingProps);
        let child3 = pendingProps.child;
        if (null !== child3) {
          while (true) {
            text = child3;
            if (5 !== child3.tag) {
              if (6 !== child3.tag) {
                if (4 !== child3.tag) {
                  if (null !== child3.child) {
                    child3.child.return = child3;
                    let sibling3 = child3.child;
                  }
                  child3 = sibling3;
                  if (null === sibling3) {
                    break;
                  }
                }
              }
              if (child3 === pendingProps) {
                break;
              } else {
                text = child3;
                text = child3;
                if (null !== child3.sibling) {
                  ({ sibling: sibling4, return: _return2 } = text);
                  sibling4.return = _return2;
                  sibling3 = text.sibling;
                } else {
                  while (null !== text) {
                    if (text.return === pendingProps) {
                      break;
                    } else {
                      let _return = text.return;
                      text = _return;
                      text = _return;
                      break;
                    }
                  }
                }
                break;
              }
            }
            let _children = text._children;
            text = _children.push(child3.stateNode);
          }
        }
        pendingProps.stateNode = text;
        text = finalizeInitialChildren;
        text = finalizeInitialChildren(text);
      } else if (null === pendingProps.stateNode) {
        text = globalThis;
        let _Error4 = Error;
        text = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
        throw text;
      } else {
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        return null;
      }
    break;
    case 6:
      if (memoizedState) {
        text = null;
        if (null != pendingProps.stateNode) {
          if (memoizedState.memoizedProps !== pendingProps) {
            pendingProps.flags = pendingProps.flags | 4;
          }
        }
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        text = null;
        return null;
      }
      if ("string" !== typeof pendingProps) {
        text = null;
        if (null === pendingProps.stateNode) {
          text = globalThis;
          const _Error3 = Error;
          throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
      text = closure_77;
      const current = closure_77.current;
      text = ref;
      if (ref.current.isInAParentText) {
        text = allocateTag;
        text = allocateTag();
        text = require;
        text = dependencyMap;
        const UIManager = get_BatchedBridge.UIManager;
        let obj = { text: pendingProps };
        text = UIManager;
        text = current;
        text = obj;
        text = UIManager.createView(text, "RCTRawText", current, obj);
        text = map;
        text = map.set(text, pendingProps);
        pendingProps.stateNode = text;
      } else {
        text = globalThis;
        const _Error2 = Error;
        throw Error("Text strings must be rendered within a <Text> component.");
      }
    break;
    case 7:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 8:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 9:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 10:
      popProvider(pendingProps.type);
      bubbleProperties(pendingProps);
      return null;
    case 11:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 12:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 13:
      const memoizedState2 = pendingProps.memoizedState;
      text = null;
      text = null === memoizedState;
      if (text) {
        if (null !== memoizedState2) {
          if (null !== memoizedState2.dehydrated) {
            if (text) {
              text = globalThis;
              const _Error = Error;
              throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
            } else {
              if (0 === (pendingProps.flags & 128)) {
                pendingProps.memoizedState = null;
              }
              pendingProps.flags = pendingProps.flags | 4;
              text = bubbleProperties;
              text = bubbleProperties(pendingProps);
              let flag8 = false;
            }
          }
          if (!flag8) {
            text = popSuspenseHandler;
            text = pendingProps.flags & 256;
            text = popSuspenseHandler(pendingProps);
            return text ? pendingProps : null;
          }
        }
        text = c79;
        flag8 = true;
        if (null !== c79) {
          text = queueRecoverableErrors;
          text = c79;
          text = queueRecoverableErrors(c79);
          c79 = null;
          flag8 = true;
        }
      }
      text = popSuspenseHandler;
      text = popSuspenseHandler(pendingProps);
      if (0 !== (pendingProps.flags & 128)) {
        pendingProps.lanes = lanes;
        return pendingProps;
      } else {
        text = null !== memoizedState2;
        text = null !== memoizedState;
        if (text) {
          text = null !== memoizedState.memoizedState;
        }
        if (text) {
          const child = pendingProps.child;
          text = null !== child.alternate;
          if (text) {
            text = null !== child.alternate.memoizedState;
          }
          if (text) {
            text = null !== child.alternate.memoizedState.cachePool;
          }
          text = null;
          if (text) {
            text = child.alternate.memoizedState.cachePool.pool;
          }
          text = null !== child.memoizedState;
          if (text) {
            text = null !== child.memoizedState.cachePool;
          }
          text = null;
          if (text) {
            text = child.memoizedState.cachePool.pool;
          }
          if (text !== text) {
            child.flags = child.flags | 2048;
          }
        }
        text = text !== text;
        if (text) {
          const child2 = pendingProps.child;
          child2.flags = child2.flags | 8192;
        }
        text = scheduleRetryEffect;
        text = scheduleRetryEffect(pendingProps, pendingProps.updateQueue);
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        return null;
      }
    break;
    case 14:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 15:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 16:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 17:
      bubbleProperties(pendingProps);
      return null;
    case 18:
      text = globalThis;
      _Error5 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 19:
      pop(closure_108);
      memoizedState = pendingProps.memoizedState;
      if (null === memoizedState) {
        bubbleProperties(pendingProps);
        return null;
      } else {
        text = 0 !== (pendingProps.flags & 128);
        const rendering = memoizedState.rendering;
        if (null === rendering) {
          if (text) {
            cutOffTailIfNeeded(memoizedState, false);
            let flag4 = text;
          } else {
            if (0 !== c156) {
              let sibling = pendingProps.child;
              if (null !== sibling) {
                const tmp57 = findFirstSuspended(sibling);
                while (null === tmp57) {
                  sibling = sibling.sibling;
                }
                pendingProps.flags = pendingProps.flags | 128;
                cutOffTailIfNeeded(memoizedState, false);
                const updateQueue3 = tmp57.updateQueue;
                pendingProps.updateQueue = updateQueue3;
                scheduleRetryEffect(pendingProps, updateQueue3);
                pendingProps.subtreeFlags = 0;
                let sibling2 = pendingProps.child;
                while (null !== sibling2) {
                  let tmp69 = resetWorkInProgress;
                  let tmp70 = resetWorkInProgress(sibling2, lanes);
                  sibling2 = sibling2.sibling;
                }
                push(closure_108, closure_108.current & 1 | 2);
                return pendingProps.child;
              }
            }
            let tmp59 = null !== memoizedState.tail;
            if (tmp59) {
              obj = push2;
              tmp59 = obj.unstable_now() > Infinity;
            }
            flag4 = text;
            if (tmp59) {
              pendingProps.flags = pendingProps.flags | 128;
              cutOffTailIfNeeded(memoizedState, false);
              pendingProps.lanes = 4194304;
              flag4 = true;
            }
          }
        } else {
          let flag = text;
          if (!text) {
            const tmp45 = findFirstSuspended(rendering);
            if (null !== tmp45) {
              pendingProps.flags = pendingProps.flags | 128;
              const updateQueue2 = tmp45.updateQueue;
              pendingProps.updateQueue = updateQueue2;
              scheduleRetryEffect(pendingProps, updateQueue2);
              cutOffTailIfNeeded(memoizedState, true);
              flag = true;
              if (null === memoizedState.tail) {
                flag = true;
                if ("hidden" === memoizedState.tailMode) {
                  flag = true;
                  if (!rendering.alternate) {
                    bubbleProperties(pendingProps);
                    return null;
                  }
                }
              }
            } else {
              text = require;
              text = dependencyMap;
              text = Infinity;
              let tmp46 = 2 * push2.unstable_now() - memoizedState.renderingStartTime > Infinity;
              if (tmp46) {
                tmp46 = 536870912 !== lanes;
              }
              flag = text;
              if (tmp46) {
                pendingProps.flags = pendingProps.flags | 128;
                cutOffTailIfNeeded(memoizedState, false);
                pendingProps.lanes = 4194304;
                flag = true;
              }
              obj4 = push2;
            }
          }
          if (memoizedState.isBackwards) {
            rendering.sibling = pendingProps.child;
            pendingProps.child = rendering;
            flag4 = flag;
          } else {
            const last = memoizedState.last;
            if (null !== last) {
              last.sibling = rendering;
            } else {
              pendingProps.child = rendering;
            }
            memoizedState.last = rendering;
            flag4 = flag;
          }
        }
        if (null !== memoizedState.tail) {
          const tail = memoizedState.tail;
          memoizedState.rendering = tail;
          memoizedState.tail = tail.sibling;
          memoizedState.renderingStartTime = push2.unstable_now();
          tail.sibling = null;
          if (flag4) {
            let tmp84 = tmp83 | 2;
          } else {
            tmp84 = tmp83;
          }
          push(closure_108, tmp84);
          return tail;
        } else {
          bubbleProperties(pendingProps);
          return null;
        }
      }
    break;
    case 20:
      text = globalThis;
      _Error5 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 21:
      text = globalThis;
      _Error5 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 22:
      popSuspenseHandler(pendingProps);
      popHiddenContext();
      let tmp15 = null !== pendingProps.memoizedState;
      let tmp16 = null !== memoizedState;
      if (tmp16) {
        let tmp18 = null !== memoizedState.memoizedState;
        if (tmp18 !== tmp15) {
          let tmp19 = pendingProps.flags | 8192;
          pendingProps.flags = tmp19;
        }
      } else if (tmp15) {
        let tmp17 = pendingProps.flags | 8192;
        pendingProps.flags = tmp17;
      }
      if (tmp15) {
        let tmp20 = pendingProps.mode & 1;
        if (0 !== tmp20) {
          let tmp23 = lanes & 536870912;
          let tmp24 = 0 !== tmp23;
          if (tmp24) {
            let tmp25 = pendingProps.flags & 128;
            tmp24 = 0 === tmp25;
          }
          if (tmp24) {
            bubbleProperties(pendingProps);
            let tmp28 = pendingProps.subtreeFlags & 6;
            if (tmp28) {
              let tmp29 = pendingProps.flags | 8192;
              pendingProps.flags = tmp29;
            }
          }
        }
        let updateQueue = pendingProps.updateQueue;
        if (null !== updateQueue) {
          scheduleRetryEffect(pendingProps, updateQueue.retryQueue);
        }
        let tmp32 = tmp16;
        if (tmp16) {
          tmp32 = null !== memoizedState.memoizedState;
        }
        if (tmp32) {
          tmp32 = null !== memoizedState.memoizedState.cachePool;
        }
        let pool = null;
        if (tmp32) {
          pool = memoizedState.memoizedState.cachePool.pool;
        }
        let tmp34 = null !== pendingProps.memoizedState;
        if (tmp34) {
          tmp34 = null !== pendingProps.memoizedState.cachePool;
        }
        let pool1 = null;
        if (tmp34) {
          pool1 = pendingProps.memoizedState.cachePool.pool;
        }
        if (pool1 !== pool) {
          let tmp36 = pendingProps.flags | 2048;
          pendingProps.flags = tmp36;
        }
        if (tmp16) {
          pop(closure_135);
        }
        return null;
      }
      bubbleProperties(pendingProps);
    break;
    case 23:
      popSuspenseHandler(pendingProps);
      popHiddenContext();
      tmp15 = null !== pendingProps.memoizedState;
      tmp16 = null !== memoizedState;
      if (tmp16) {
        tmp18 = null !== memoizedState.memoizedState;
        if (tmp18 !== tmp15) {
          tmp19 = pendingProps.flags | 8192;
          pendingProps.flags = tmp19;
        }
      } else if (tmp15) {
        tmp17 = pendingProps.flags | 8192;
        pendingProps.flags = tmp17;
      }
      if (tmp15) {
        tmp20 = pendingProps.mode & 1;
        if (0 !== tmp20) {
          tmp23 = lanes & 536870912;
          tmp24 = 0 !== tmp23;
          if (tmp24) {
            tmp25 = pendingProps.flags & 128;
            tmp24 = 0 === tmp25;
          }
          if (tmp24) {
            bubbleProperties(pendingProps);
            tmp28 = pendingProps.subtreeFlags & 6;
            if (tmp28) {
              tmp29 = pendingProps.flags | 8192;
              pendingProps.flags = tmp29;
            }
          }
        }
        updateQueue = pendingProps.updateQueue;
        if (null !== updateQueue) {
          scheduleRetryEffect(pendingProps, updateQueue.retryQueue);
        }
        tmp32 = tmp16;
        if (tmp16) {
          tmp32 = null !== memoizedState.memoizedState;
        }
        if (tmp32) {
          tmp32 = null !== memoizedState.memoizedState.cachePool;
        }
        pool = null;
        if (tmp32) {
          pool = memoizedState.memoizedState.cachePool.pool;
        }
        tmp34 = null !== pendingProps.memoizedState;
        if (tmp34) {
          tmp34 = null !== pendingProps.memoizedState.cachePool;
        }
        pool1 = null;
        if (tmp34) {
          pool1 = pendingProps.memoizedState.cachePool.pool;
        }
        if (pool1 !== pool) {
          tmp36 = pendingProps.flags | 2048;
          pendingProps.flags = tmp36;
        }
        if (tmp16) {
          pop(closure_135);
        }
        return null;
      }
      bubbleProperties(pendingProps);
    break;
    case 24:
      let cache = null;
      if (null !== memoizedState) {
        cache = memoizedState.memoizedState.cache;
      }
      if (pendingProps.memoizedState.cache !== cache) {
        pendingProps.flags = pendingProps.flags | 2048;
      }
      popProvider(obj17);
      bubbleProperties(pendingProps);
      return null;
    case 25:
      return null;
    case 26:
      text = popHostContext;
      text = popHostContext(pendingProps);
      text = null;
      if (null !== memoizedState) {
        if (null != pendingProps.stateNode) {
          if (memoizedState.memoizedProps !== pendingProps) {
            text = pendingProps.flags | 4;
            pendingProps.flags = text;
          }
        }
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        text = pendingProps.flags & -16777217;
        pendingProps.flags = text;
        return null;
      }
      if (pendingProps) {
        text = closure_77;
        current2 = closure_77.current;
        text = allocateTag;
        text = allocateTag();
        text = get;
        text = get(pendingProps.type);
        text = diffProperties;
        text = closure_52;
        text = null;
        text = pendingProps;
        text = diffProperties(null, closure_52, pendingProps, text.validAttributes);
        text = require;
        text = dependencyMap;
        text = get_BatchedBridge;
        UIManager2 = text.UIManager;
        text = UIManager2;
        text = current2;
        text = UIManager2.createView(text, text.uiViewClassName, current2, text);
        text = ctor;
        prototype = ctor.prototype;
        text = new.target;
        text = new.target;
        text = pendingProps;
        text = new ctor(text, text, pendingProps);
        text = map;
        text = map.set(text, pendingProps);
        text = map1;
        text = map1.set(text, pendingProps);
        child3 = pendingProps.child;
        if (null !== child3) {
          while (true) {
            text = child3;
            if (5 !== child3.tag) {
              if (6 !== child3.tag) {
                if (4 !== child3.tag) {
                  if (null !== child3.child) {
                    child3.child.return = child3;
                    sibling3 = child3.child;
                  }
                  child3 = sibling3;
                  if (null === sibling3) {
                    break;
                  }
                }
              }
              if (child3 === pendingProps) {
                break;
              } else {
                text = child3;
                text = child3;
                if (null !== child3.sibling) {
                  ({ sibling: sibling4, return: _return2 } = text);
                  sibling4.return = _return2;
                  sibling3 = text.sibling;
                } else {
                  while (null !== text) {
                    if (text.return === pendingProps) {
                      break;
                    } else {
                      _return = text.return;
                      text = _return;
                      text = _return;
                      break;
                    }
                  }
                }
                break;
              }
            }
            _children = text._children;
            text = _children.push(child3.stateNode);
          }
        }
        pendingProps.stateNode = text;
        text = finalizeInitialChildren;
        text = finalizeInitialChildren(text);
      } else if (null === pendingProps.stateNode) {
        text = globalThis;
        _Error4 = Error;
        text = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
        throw text;
      } else {
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        return null;
      }
    break;
    case 27:
      text = popHostContext;
      text = popHostContext(pendingProps);
      text = null;
      if (null !== memoizedState) {
        if (null != pendingProps.stateNode) {
          if (memoizedState.memoizedProps !== pendingProps) {
            text = pendingProps.flags | 4;
            pendingProps.flags = text;
          }
        }
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        text = pendingProps.flags & -16777217;
        pendingProps.flags = text;
        return null;
      }
      if (pendingProps) {
        text = closure_77;
        current2 = closure_77.current;
        text = allocateTag;
        text = allocateTag();
        text = get;
        text = get(pendingProps.type);
        text = diffProperties;
        text = closure_52;
        text = null;
        text = pendingProps;
        text = diffProperties(null, closure_52, pendingProps, text.validAttributes);
        text = require;
        text = dependencyMap;
        text = get_BatchedBridge;
        UIManager2 = text.UIManager;
        text = UIManager2;
        text = current2;
        text = UIManager2.createView(text, text.uiViewClassName, current2, text);
        text = ctor;
        prototype = ctor.prototype;
        text = new.target;
        text = new.target;
        text = pendingProps;
        text = new ctor(text, text, pendingProps);
        text = map;
        text = map.set(text, pendingProps);
        text = map1;
        text = map1.set(text, pendingProps);
        child3 = pendingProps.child;
        if (null !== child3) {
          while (true) {
            text = child3;
            if (5 !== child3.tag) {
              if (6 !== child3.tag) {
                if (4 !== child3.tag) {
                  if (null !== child3.child) {
                    child3.child.return = child3;
                    sibling3 = child3.child;
                  }
                  child3 = sibling3;
                  if (null === sibling3) {
                    break;
                  }
                }
              }
              if (child3 === pendingProps) {
                break;
              } else {
                text = child3;
                text = child3;
                if (null !== child3.sibling) {
                  ({ sibling: sibling4, return: _return2 } = text);
                  sibling4.return = _return2;
                  sibling3 = text.sibling;
                } else {
                  while (null !== text) {
                    if (text.return === pendingProps) {
                      break;
                    } else {
                      _return = text.return;
                      text = _return;
                      text = _return;
                      break;
                    }
                  }
                }
                break;
              }
            }
            _children = text._children;
            text = _children.push(child3.stateNode);
          }
        }
        pendingProps.stateNode = text;
        text = finalizeInitialChildren;
        text = finalizeInitialChildren(text);
      } else if (null === pendingProps.stateNode) {
        text = globalThis;
        _Error4 = Error;
        text = Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
        throw text;
      } else {
        text = bubbleProperties;
        text = bubbleProperties(pendingProps);
        return null;
      }
    break;
    case 28:
      text = bubbleProperties;
      text = bubbleProperties(pendingProps);
      text = null;
      return null;
    case 29:
      text = null;
      return null;
    default:
      text = globalThis;
      _Error5 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
  }
}
function unwindWork(arg0, arg1) {
  return null;
}
function unwindInterruptedWork(arg0, arg1) {
  popProvider(obj17);
}
function commitHookEffectListMount(arg0, updateQueue) {
  let next2;
  try {
    updateQueue = updateQueue.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp4.lastEffect;
    }
    if (null !== lastEffect) {
      const next = iter.next;
      let iter2 = next;
      do {
        let tmp10 = iter2;
        let tmp11 = arg0;
        if ((iter2.tag & arg0) === arg0) {
          let tmp12 = iter2;
          let obj = iter2.create();
          let tmp14 = obj;
          iter2.inst.destroy = obj;
        }
        let tmp15 = iter2;
        next2 = iter2.next;
        iter2 = next2;
        let tmp16 = next;
      } while (next2 !== tmp9);
    }
  } catch (tmp17) {
    captureCommitPhaseError(tmp2, tmp2.return, tmp17);
  }
}
function commitHookEffectListUnmount(arg0, updateQueue) {
  try {
    updateQueue = updateQueue.updateQueue;
    let lastEffect = null;
    if (null !== updateQueue) {
      lastEffect = tmp6.lastEffect;
    }
    if (null !== lastEffect) {
      const next2 = iter.next;
      let iter2 = next2;
      if ((iter2.tag & arg0) === arg0) {
        const inst = iter2.inst;
        const destroy = inst.destroy;
        if (undefined !== destroy) {
          tmp13.destroy = undefined;
          try {
            tmp14();
          } catch (tmp20) {
            captureCommitPhaseError(tmp3, tmp4, tmp20);
          }
        }
      }
      const next = iter2.next;
      iter2 = next;
      const tmp32 = next2;
    }
  } catch (tmp27) {
    captureCommitPhaseError(tmp2, tmp2.return, tmp27);
  }
}
function commitClassCallbacks(updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    try {
      commitCallbacks(updateQueue, tmp4);
    } catch (tmp7) {
      captureCommitPhaseError(tmp2, tmp2.return, tmp7);
    }
  }
}
function safelyCallComponentWillUnmount(type, arg1, componentWillUnmount) {
  componentWillUnmount.props = resolveClassComponentProps(type.type, type.memoizedProps);
  componentWillUnmount.state = type.memoizedState;
  try {
    componentWillUnmount.componentWillUnmount();
  } catch (tmp6) {
    captureCommitPhaseError(tmp3, tmp2, tmp6);
  }
}
function safelyAttachRef(ref) {
  try {
    if (null !== ref.ref) {
      ({ stateNode, tag } = ref);
      if (26 !== tag) {
        if (27 !== tag) {
          if (5 !== tag) {
            let tmp8 = stateNode;
          }
          if ("function" === typeof tmp5) {
            ref.refCleanup = ref(tmp8);
          } else {
            tmp5.current = tmp8;
          }
        }
      }
      tmp8 = getPublicInstance(stateNode);
    }
  } catch (tmp14) {
    captureCommitPhaseError(tmp3, tmp2, tmp14);
  }
}
function safelyDetachRef(ref) {
  const refCleanup = ref.refCleanup;
  if (null !== ref.ref) {
    if ("function" === typeof refCleanup) {
      try {
        refCleanup();
        ref.refCleanup = null;
        const alternate = ref.alternate;
        if (null != alternate) {
          tmp16.refCleanup = null;
        }
      } catch (tmp18) {
        tmp2.refCleanup = tmp3;
        const alternate2 = tmp2.alternate;
        if (tmp3 != alternate2) {
          alternate2.refCleanup = tmp3;
        }
        throw tmp18;
      }
    } else if ("function" === typeof tmp5) {
      try {
        ref(null);
      } catch (tmp9) {
        captureCommitPhaseError(tmp2, tmp4, tmp9);
      }
    } else {
      tmp5.current = null;
    }
  }
}
function isHostParent(tag) {
  let tmp = 5 === tag.tag;
  if (!tmp) {
    tmp = 3 === tag.tag;
  }
  if (!tmp) {
    tmp = 4 === tag.tag;
  }
  return tmp;
}
function getHostSibling(flags) {
  let tmp = flags;
  while (true) {
    let tmp2 = tmp;
    let tmp3 = tmp;
    if (null === tmp.sibling) {
      let tmp4 = tmp2;
      while (null !== tmp2.return) {
        let tmp8 = isHostParent;
        if (isHostParent(tmp2.return)) {
          break;
        } else {
          let _return = tmp2.return;
          tmp2 = _return;
          tmp3 = _return;
          continue;
        }
      }
      return null;
    }
    ({ return: tmp3.sibling.return, sibling } = tmp3);
    let tmp5 = sibling;
    if (5 !== sibling.tag) {
      tmp5 = sibling;
      if (6 !== sibling.tag) {
        let tmp7 = sibling;
        tmp5 = sibling;
        if (18 !== sibling.tag) {
          let tmp6 = tmp7;
          tmp = tmp7;
          while (!(tmp7.flags & 2)) {
            tmp = tmp7;
            if (null === tmp7.child) {
              break;
            } else {
              tmp = tmp7;
              if (4 === tmp7.tag) {
                break;
              } else {
                tmp7.child.return = tmp7;
                let child = tmp7.child;
                tmp5 = child;
                if (5 !== child.tag) {
                  tmp5 = child;
                  if (6 !== child.tag) {
                    tmp7 = child;
                    tmp5 = child;
                  }
                  continue;
                }
              }
            }
          }
        }
        continue;
      }
    }
    tmp = tmp5;
    if (tmp5.flags & 2) {
      continue;
    } else {
      return tmp5.stateNode;
    }
  }
}
function insertOrAppendPlacementNodeIntoContainer(child, hostSibling, containerInfo) {
  const tag = child.tag;
  if (5 !== tag) {
    if (6 !== tag) {
      if (4 !== tag) {
        child = child.child;
        if (null !== child) {
          insertOrAppendPlacementNodeIntoContainer(child, hostSibling, containerInfo);
          let sibling = child.sibling;
          if (null !== sibling) {
            do {
              let tmp = insertOrAppendPlacementNodeIntoContainer;
              let tmp2 = insertOrAppendPlacementNodeIntoContainer(sibling, hostSibling, containerInfo);
              sibling = sibling.sibling;
            } while (null !== sibling);
          }
        }
      }
    }
  }
  const stateNode = child.stateNode;
  if (hostSibling) {
    if ("number" === typeof containerInfo) {
      const _Error = Error;
      throw Error("Container does not support insertBefore operation");
    }
  } else {
    const UIManager = get_BatchedBridge.UIManager;
    let _nativeTag = stateNode;
    if ("number" !== typeof stateNode) {
      _nativeTag = stateNode._nativeTag;
    }
    const items = [_nativeTag];
    UIManager.setChildren(containerInfo, items);
  }
}
function insertOrAppendPlacementNode(child, hostSibling, stateNode) {
  const tag = child.tag;
  if (5 !== tag) {
    if (6 !== tag) {
      if (4 !== tag) {
        child = child.child;
        if (null !== child) {
          insertOrAppendPlacementNode(child, hostSibling, stateNode);
          let sibling = child.sibling;
          if (null !== sibling) {
            do {
              let tmp = insertOrAppendPlacementNode;
              let tmp2 = insertOrAppendPlacementNode(sibling, hostSibling, stateNode);
              sibling = sibling.sibling;
            } while (null !== sibling);
          }
        }
      }
    }
  }
  stateNode = child.stateNode;
  if (hostSibling) {
    const _children = stateNode._children;
    const index = _children.indexOf(stateNode);
    if (0 <= index) {
      _children.splice(index, 1);
      const index1 = _children.indexOf(hostSibling);
      _children.splice(index1, 0, stateNode);
      const UIManager3 = get_BatchedBridge.UIManager;
      const items = [index];
      const items1 = [index1];
      UIManager3.manageChildren(stateNode._nativeTag, items, items1, [], [], []);
    } else {
      const index2 = _children.indexOf(hostSibling);
      _children.splice(index2, 0, stateNode);
      const UIManager4 = get_BatchedBridge.UIManager;
      const _nativeTag3 = stateNode._nativeTag;
      let _nativeTag2 = stateNode;
      if ("number" !== typeof stateNode) {
        _nativeTag2 = stateNode._nativeTag;
      }
      const items2 = [_nativeTag2];
      items3 = [index2];
      UIManager4.manageChildren(_nativeTag3, [], [], items2, items3, []);
    }
  } else {
    let _nativeTag = stateNode;
    if ("number" !== typeof stateNode) {
      _nativeTag = stateNode._nativeTag;
    }
    const _children1 = stateNode._children;
    const index3 = _children1.indexOf(stateNode);
    if (0 <= index3) {
      _children1.splice(index3, 1);
      _children1.push(stateNode);
      const UIManager2 = get_BatchedBridge.UIManager;
      const items4 = [index3];
      const items5 = [_children1.length - 1];
      UIManager2.manageChildren(stateNode._nativeTag, items4, items5, [], [], []);
    } else {
      _children1.push(stateNode);
      const UIManager = get_BatchedBridge.UIManager;
      const items6 = [_nativeTag];
      const items7 = [_children1.length - 1];
      UIManager.manageChildren(stateNode._nativeTag, [], [], items6, items7, []);
    }
  }
}
function commitBeforeMutationEffects(arg0, arg1) {
  let _return = arg1;
  if (null !== arg1) {
    let child = _return.child;
    if (0 !== (_return.subtreeFlags & 1028)) {
      if (null !== child) {
        child.return = tmp4;
        _return = child;
      }
    }
    if (null !== _return) {
      if (0 !== (child & 1024)) {
        if (null !== memoizedState) {
          ({ memoizedProps, memoizedState } = memoizedState);
          const stateNode = tmp4.stateNode;
          try {
            ({ elementType, type } = tmp28);
            const snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(resolveClassComponentProps(tmp28.type, memoizedProps, undefined), memoizedState);
            stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
          } catch (tmp15) {
            captureCommitPhaseError(tmp2, tmp2.return, tmp15);
          }
        }
      }
      while (true) {
        let tmp19 = tmp3;
        let sibling = tmp4.sibling;
        child = sibling;
        if (null !== sibling) {
          let tmp21 = child;
          let tmp22 = tmp3;
          child.return = tmp4.return;
          _return = child;
        } else {
          let tmp20 = tmp3;
          _return = tmp4.return;
        }
      }
    }
  }
  c140 = false;
  return c140;
}
function commitLayoutEffectOnFiber(arg0, arg1, arg2) {
  if (0 !== (tmp2.mode & 1)) {
    if (!(null !== tmp2.memoizedState || c136)) {
      let tmp15 = null !== tmp5;
      if (tmp15) {
        tmp15 = null !== tmp5.memoizedState;
      }
      if (!tmp15) {
        tmp15 = closure_137;
      }
      c136 = tmp13;
      closure_137 = tmp15;
      if (tmp15) {
        if (!tmp19) {
          recursivelyTraverseReappearLayoutEffects(tmp3, tmp2, 0 !== (tmp2.subtreeFlags & 8772));
        }
        c136 = tmp18;
        closure_137 = tmp19;
      }
      recursivelyTraverseLayoutEffects(tmp3, tmp2);
    }
  } else {
    recursivelyTraverseLayoutEffects(tmp3, tmp2);
  }
  if (tmp4 & 512) {
    if ("manual" === tmp2.memoizedProps.mode) {
      safelyAttachRef(tmp2, tmp2.return);
    } else {
      safelyDetachRef(tmp2, tmp2.return);
    }
  }
}
function detachFiberAfterEffects(alternate) {
  alternate = alternate.alternate;
  if (null !== alternate) {
    alternate.alternate = null;
    detachFiberAfterEffects(alternate);
  }
  alternate.child = null;
  alternate.deletions = null;
  alternate.sibling = null;
  alternate.stateNode = null;
  alternate.return = null;
  alternate.dependencies = null;
  alternate.memoizedProps = null;
  alternate.memoizedState = null;
  alternate.pendingProps = null;
  alternate.stateNode = null;
  alternate.updateQueue = null;
}
function recursivelyTraverseDeletionEffects(arg0, arg1, child) {
  let sibling = child.child;
  if (null !== sibling) {
    do {
      let tmp = commitDeletionEffectsOnFiber;
      let tmp2 = commitDeletionEffectsOnFiber(arg0, arg1, sibling);
      sibling = sibling.sibling;
    } while (null !== sibling);
  }
}
function commitDeletionEffectsOnFiber(arg0, arg1, mode) {
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount(closure_57, mode);
      } catch (err) {
      }
    }
  }
  if (!closure_137) {
    safelyDetachRef(mode, arg1);
  }
  if (mode.mode & 1) {
    let tmp15 = closure_137;
    if (!closure_137) {
      tmp15 = null !== mode.memoizedState;
    }
    closure_137 = tmp15;
    recursivelyTraverseDeletionEffects(arg0, arg1, mode);
    closure_137 = tmp16;
  } else {
    recursivelyTraverseDeletionEffects(arg0, arg1, mode);
  }
}
function getRetryCache(handler) {
  const tag = handler.tag;
  if (13 !== tag) {
    if (19 !== tag) {
      if (22 === tag) {
        const stateNode = handler.stateNode;
        let _retryCache = stateNode._retryCache;
        if (null === _retryCache) {
          const prototype = ctor2.prototype;
          const tmp6 = new ctor2();
          stateNode._retryCache = tmp6;
          _retryCache = tmp6;
        }
        return _retryCache;
      } else {
        const _Error = Error;
        throw Error("Unexpected Suspense handler tag (" + handler.tag + "). This is a bug in React.");
      }
    }
  }
  let stateNode2 = handler.stateNode;
  if (null === stateNode2) {
    const prototype2 = ctor2.prototype;
    const tmp11 = new ctor2();
    handler.stateNode = tmp11;
    stateNode2 = tmp11;
  }
  return stateNode2;
}
function attachSuspenseRetryListeners(arg0, arr) {
  closure_0 = arg0;
  closure_1 = getRetryCache(arg0);
  const item = arr.forEach((promise) => {
    const bindResult = closure_1_474.bind(null, closure_0, promise);
    if (!set.has(promise)) {
      set.add(promise);
      promise.then(bindResult, bindResult);
    }
  });
}
function recursivelyTraverseMutationEffects(arg0, deletions) {
  deletions = deletions.deletions;
  if (null !== deletions) {
    let num = 0;
    if (0 < deletions.length) {
      while (true) {
        let tmp = deletions[num];
        let tmp2 = num;
        let _return = deletions;
        if (null !== deletions) {
          let tag = _return.tag;
          let tmp3 = _return;
          while (27 !== tag) {
            if (5 === tag) {
              break;
            } else if (3 === tag) {
              let containerInfo = _return.stateNode.containerInfo;
              c142 = true;
            } else {
              if (4 === tag) {
                containerInfo = _return.stateNode.containerInfo;
                c142 = true;
              } else {
                _return = _return.return;
              }
              continue;
            }
          }
          containerInfo = _return.stateNode;
          c142 = false;
        }
        let tmp4 = containerInfo;
        if (null === containerInfo) {
          break;
        } else {
          let tmp5 = commitDeletionEffectsOnFiber;
          let tmp6 = commitDeletionEffectsOnFiber(arg0, deletions, tmp);
          containerInfo = null;
          c142 = false;
          let alternate = tmp.alternate;
          if (null !== alternate) {
            alternate.return = null;
          }
          tmp.return = null;
          num = num + 1;
        }
      }
      const _Error = Error;
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  if (deletions.subtreeFlags & 13878) {
    let sibling = deletions.child;
    if (null !== sibling) {
      do {
        let tmp7 = commitMutationEffectsOnFiber;
        let tmp8 = commitMutationEffectsOnFiber(sibling, arg0);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitMutationEffectsOnFiber(tag) {
  ({ alternate, flags } = tag);
  switch (tag.tag) {
    case 0:
      let combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = commitHookEffectListUnmount;
        combined = tag;
        combined = commitHookEffectListUnmount(3, tag, tag.return);
        combined = commitHookEffectListMount;
        combined = commitHookEffectListMount(3, tag);
        combined = commitHookEffectListUnmount(5, tag, tag.return);
      }
    break;
    case 1:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      if (flags & 512) {
        combined = closure_137;
        if (!closure_137) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = safelyDetachRef;
          combined = alternate;
          combined = safelyDetachRef(alternate, alternate.return);
        }
      }
      combined = flags;
      if (flags & 64) {
        combined = closure_136;
        if (closure_136) {
          combined = tag;
          const updateQueue4 = tag.updateQueue;
          combined = updateQueue4;
          combined = null;
          if (null !== updateQueue4) {
            combined = updateQueue4;
            const callbacks = combined.callbacks;
            if (null !== callbacks) {
              combined = updateQueue4;
              if (null === combined.shared.hiddenCallbacks) {
                combined = callbacks;
              } else {
                combined = hiddenCallbacks;
                combined = callbacks;
                combined = obj7.concat(combined);
              }
              combined.shared.hiddenCallbacks = combined;
              obj7 = combined.shared.hiddenCallbacks;
            }
          }
        }
      }
    break;
    case 2:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 3:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 4:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 5:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 512;
      if (combined) {
        combined = closure_137;
        if (!closure_137) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = safelyDetachRef;
          combined = alternate;
          combined = safelyDetachRef(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != tag.stateNode) {
          combined = tag;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            let memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = tag.memoizedProps;
          }
          combined = memoizedProps3;
        }
      }
    break;
    case 6:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      if (flags & 4) {
        combined = tag;
        combined = null;
        if (null === tag.stateNode) {
          combined = globalThis;
          const _Error2 = Error;
          throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
        } else {
          combined = tag;
          ({ memoizedProps: memoizedProps2, stateNode: stateNode4 } = tag);
          try {
            combined = require;
            combined = dependencyMap;
            const UIManager3 = get_BatchedBridge.UIManager;
            combined = stateNode4;
            let obj = {};
            combined = memoizedProps2;
            obj.text = memoizedProps2;
            combined = UIManager3.updateView(stateNode4, "RCTRawText", obj);
          } catch (combined) {
            combined = captureCommitPhaseError;
            combined = tmp2;
            combined = captureCommitPhaseError(tmp2, tmp2.return, combined);
          }
        }
      }
    break;
    case 7:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 8:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 9:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 10:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 11:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = commitHookEffectListUnmount;
        combined = tag;
        combined = commitHookEffectListUnmount(3, tag, tag.return);
        combined = commitHookEffectListMount;
        combined = commitHookEffectListMount(3, tag);
        combined = commitHookEffectListUnmount(5, tag, tag.return);
      }
    break;
    case 12:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 13:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      if (tag.child.flags & 8192) {
        combined = alternate;
        combined = null;
        combined = null !== alternate;
        if (combined) {
          combined = alternate;
          combined = null !== alternate.memoizedState;
        }
        combined = tag;
        combined = null === tag.memoizedState;
        if (!combined) {
          combined = require;
          combined = dependencyMap;
          closure_165 = push2.unstable_now();
          const obj5 = push2;
        }
      }
      combined = flags;
      if (flags & 4) {
        combined = tag;
        const updateQueue3 = tag.updateQueue;
        combined = null;
        if (null !== updateQueue3) {
          combined = tag;
          tag.updateQueue = null;
          combined = attachSuspenseRetryListeners;
          combined = updateQueue3;
          combined = attachSuspenseRetryListeners(tag, combined);
        }
      }
    break;
    case 14:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = commitHookEffectListUnmount;
        combined = tag;
        combined = commitHookEffectListUnmount(3, tag, tag.return);
        combined = commitHookEffectListMount;
        combined = commitHookEffectListMount(3, tag);
        combined = commitHookEffectListUnmount(5, tag, tag.return);
      }
    break;
    case 15:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = commitHookEffectListUnmount;
        combined = tag;
        combined = commitHookEffectListUnmount(3, tag, tag.return);
        combined = commitHookEffectListMount;
        combined = commitHookEffectListMount(3, tag);
        combined = commitHookEffectListUnmount(5, tag, tag.return);
      }
    break;
    case 16:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 17:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 18:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 19:
      recursivelyTraverseMutationEffects(arg1, tag);
      commitReconciliationEffects(tag);
      if (flags & 4) {
        const updateQueue = tag.updateQueue;
        if (null !== updateQueue) {
          combined = tag;
          tag.updateQueue = null;
          combined = attachSuspenseRetryListeners;
          combined = updateQueue;
          combined = attachSuspenseRetryListeners(tag, tmp12);
        }
      }
    break;
    case 20:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 21:
    break;
    case 22:
      if (flags & 512) {
        let tmp15 = closure_137;
        if (!closure_137) {
          tmp15 = null === alternate;
        }
        if (!tmp15) {
          safelyDetachRef(alternate, alternate.return);
        }
      }
      let tmp25 = null !== alternate;
      if (tmp25) {
        tmp25 = null !== alternate.memoizedState;
      }
      if (tag.mode & 1) {
        let tmp33 = closure_136;
        if (!closure_136) {
          tmp33 = tmp23;
        }
        closure_136 = tmp33;
        let tmp36 = tmp35;
        if (!closure_137) {
          tmp36 = tmp25;
        }
        closure_137 = tmp36;
        recursivelyTraverseMutationEffects(arg1, tag);
        closure_137 = tmp35;
        closure_136 = tmp34;
      } else {
        recursivelyTraverseMutationEffects(arg1, tag);
      }
      commitReconciliationEffects(tag);
      const stateNode = tag.stateNode;
      stateNode._current = tag;
      stateNode._visibility = stateNode._visibility & -3;
      stateNode._visibility = stateNode._visibility | stateNode._pendingVisibility & 2;
      if (flags & 8192) {
        const _visibility = tmp45._visibility;
        if (tmp23) {
          let tmp50 = _visibility & -2;
        } else {
          tmp50 = _visibility | 1;
        }
        tmp45._visibility = tmp50;
        if (tmp23) {
          let tmp52 = closure_136;
          if (!closure_136) {
            tmp52 = closure_137;
          }
          let tmp55 = null === alternate;
          if (!tmp55) {
            tmp55 = tmp25;
          }
          if (!tmp55) {
            tmp55 = tmp52;
          }
          if (!tmp55) {
            if (0 !== (tag.mode & 1)) {
              recursivelyTraverseDisappearLayoutEffects(tag);
            }
          }
        }
        if (null === tag.memoizedProps) {
          let tmp62 = null;
          sibling = tag;
          while (5 !== sibling.tag) {
            combined = sibling;
            if (6 === sibling.tag) {
              let tmp70 = tmp62;
              if (null === tmp62) {
                combined = sibling;
                try {
                  let tmp71 = globalThis;
                  let _Error = Error;
                  let str3 = "Not yet implemented.";
                  throw Error("Not yet implemented.");
                } catch (tmp72) {
                  let tmp73 = captureCommitPhaseError;
                  let tmp74 = tmp3;
                  let tmp75 = captureCommitPhaseError(tmp3, tmp3.return, tmp72);
                }
              }
            } else {
              let tmp64 = sibling;
              if (22 === sibling.tag) {
                let tmp66 = sibling;
                if (null !== sibling.memoizedState) {
                  let tmp67 = sibling;
                  let tmp68 = tag;
                }
              } else {
                let tmp65 = sibling;
              }
              let tmp69 = sibling;
              if (null !== sibling.child) {
                combined = sibling;
                sibling.child.return = sibling;
                sibling = sibling.child;
                continue;
              }
              continue;
            }
            combined = sibling;
            combined = tag;
            if (sibling !== tag) {
              combined = sibling;
              if (null !== sibling.sibling) {
                combined = tmp62;
                combined = sibling;
                if (tmp62 === sibling) {
                  tmp62 = null;
                }
                combined = sibling;
                ({ return: sibling.sibling.return, sibling } = sibling);
                continue;
              } else {
                combined = sibling;
                while (null !== sibling.return) {
                  combined = sibling;
                  combined = tag;
                  if (sibling.return === tag) {
                    break;
                  } else {
                    combined = tmp62;
                    combined = sibling;
                    if (tmp62 === sibling) {
                      tmp62 = null;
                    }
                    combined = sibling;
                    let _return = sibling.return;
                    sibling = _return;
                    break;
                  }
                }
              }
            }
          }
          if (null === tmp62) {
            combined = sibling;
            tmp62 = sibling;
            combined = sibling;
            try {
              const stateNode2 = combined.stateNode;
              if (tmp23) {
                const viewConfig2 = stateNode2.viewConfig;
                obj = {};
                const obj1 = { display: "none" };
                obj.style = obj1;
                const UIManager2 = get_BatchedBridge.UIManager;
                UIManager2.updateView(stateNode2._nativeTag, viewConfig2.uiViewClassName, diffProperties(null, closure_52, obj, viewConfig2.validAttributes));
                const tmp94 = diffProperties(null, closure_52, obj, viewConfig2.validAttributes);
              } else {
                ({ stateNode: stateNode3, memoizedProps } = combined);
                const viewConfig = stateNode3.viewConfig;
                obj = {};
                const items = [memoizedProps.style, ];
                obj2 = { display: "none" };
                items[1] = obj2;
                obj.style = items;
                const UIManager = get_BatchedBridge.UIManager;
                UIManager.updateView(stateNode3._nativeTag, viewConfig.uiViewClassName, diffProperties(null, assign({}, memoizedProps, obj), memoizedProps, viewConfig.validAttributes));
                const tmp84 = diffProperties(null, assign({}, memoizedProps, obj), memoizedProps, viewConfig.validAttributes);
              }
            } catch (tmp98) {
              combined = tmp3;
              combined = captureCommitPhaseError(tmp3, tmp3.return, tmp98);
            }
          }
        }
      }
      combined = flags;
      if (flags & 4) {
        combined = tag;
        const updateQueue2 = tag.updateQueue;
        combined = updateQueue2;
        if (null !== updateQueue2) {
          combined = updateQueue2;
          const retryQueue = combined.retryQueue;
          if (null !== retryQueue) {
            combined = updateQueue2;
            combined.retryQueue = null;
            combined = attachSuspenseRetryListeners;
            combined = tag;
            combined = retryQueue;
            combined = attachSuspenseRetryListeners(tag, combined);
          }
        }
      }
    break;
    case 23:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 24:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 25:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
    break;
    case 26:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 512;
      if (combined) {
        combined = closure_137;
        if (!closure_137) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = safelyDetachRef;
          combined = alternate;
          combined = safelyDetachRef(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != tag.stateNode) {
          combined = tag;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = tag.memoizedProps;
          }
          combined = memoizedProps3;
        }
      }
    break;
    case 27:
      combined = recursivelyTraverseMutationEffects;
      combined = arg1;
      combined = tag;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
      combined = flags;
      combined = flags & 512;
      if (combined) {
        combined = closure_137;
        if (!closure_137) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = safelyDetachRef;
          combined = alternate;
          combined = safelyDetachRef(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = flags & 4;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != tag.stateNode) {
          combined = tag;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = tag.memoizedProps;
          }
          combined = memoizedProps3;
        }
      }
    break;
    default:
      combined = recursivelyTraverseMutationEffects;
      combined = recursivelyTraverseMutationEffects(arg1, tag);
      combined = commitReconciliationEffects;
      combined = commitReconciliationEffects(tag);
  }
}
function commitReconciliationEffects(flags) {
  flags = flags.flags;
  if (!(flags & 2)) {
    if (flags & 4096) {
      flags.flags = flags.flags & -4097;
    }
  } else {
    try {
      const _return = flags.return;
      let tmp2 = _return;
      if (null !== _return) {
        while (!isHostParent(tmp2)) {
          let _return2 = tmp2.return;
          tmp2 = _return2;
        }
        const tag = tmp2.tag;
        if (27 !== tag) {
          if (5 !== tag) {
            if (3 !== tag) {
              if (4 !== tag) {
                const _Error2 = Error;
                throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            insertOrAppendPlacementNodeIntoContainer(flags, getHostSibling(flags), tmp8.stateNode.containerInfo);
          }
          flags.flags = flags.flags & -3;
        }
        if (tmp2.flags & 32) {
          tmp8.flags = tmp8.flags & -33;
        }
        insertOrAppendPlacementNode(flags, getHostSibling(flags), tmp2.stateNode);
      }
      const _Error = Error;
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    } catch (tmp21) {
      captureCommitPhaseError(flags, flags.return, tmp21);
    }
  }
}
function recursivelyTraverseLayoutEffects(arg0, subtreeFlags) {
  if (subtreeFlags.subtreeFlags & 8772) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = commitLayoutEffectOnFiber;
        let tmp3 = commitLayoutEffectOnFiber(arg0, sibling.alternate, sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyTraverseDisappearLayoutEffects(child) {
  let sibling = child.child;
  if (null !== sibling) {
    while (true) {
      let tag = sibling.tag;
      let tmp2 = sibling;
      let tmp3 = tmp;
      if (0 !== tag) {
        if (11 !== tag) {
          if (14 !== tag) {
            if (15 !== tag) {
              if (1 === tag) {
                let tmp13 = safelyDetachRef;
                let tmp14 = safelyDetachRef(sibling, sibling.return);
                let stateNode = sibling.stateNode;
                if ("function" === typeof stateNode.componentWillUnmount) {
                  let tmp15 = safelyCallComponentWillUnmount;
                  let tmp16 = safelyCallComponentWillUnmount(sibling, sibling.return, stateNode);
                }
                let tmp17 = recursivelyTraverseDisappearLayoutEffects;
                let tmp18 = recursivelyTraverseDisappearLayoutEffects(sibling);
                let tmp6 = stateNode;
              } else {
                if (26 !== tag) {
                  if (27 !== tag) {
                    if (5 !== tag) {
                      if (22 === tag) {
                        let tmp7 = safelyDetachRef;
                        let tmp8 = safelyDetachRef(sibling, sibling.return);
                        tmp6 = tmp;
                        if (null === sibling.memoizedState) {
                          let tmp23 = recursivelyTraverseDisappearLayoutEffects;
                          let tmp24 = recursivelyTraverseDisappearLayoutEffects(sibling);
                          tmp6 = tmp;
                        }
                      } else {
                        let tmp4 = recursivelyTraverseDisappearLayoutEffects;
                        let tmp5 = recursivelyTraverseDisappearLayoutEffects(sibling);
                        tmp6 = tmp;
                      }
                    }
                  }
                }
                let tmp9 = safelyDetachRef;
                let tmp10 = safelyDetachRef(sibling, sibling.return);
                let tmp11 = recursivelyTraverseDisappearLayoutEffects;
                let tmp12 = recursivelyTraverseDisappearLayoutEffects(sibling);
                tmp6 = tmp;
              }
            }
            sibling = sibling.sibling;
            tmp = tmp6;
            if (null === sibling) {
              break;
            }
          }
        }
      }
      let tmp19 = commitHookEffectListUnmount;
      let tmp20 = commitHookEffectListUnmount(4, sibling, sibling.return);
      let tmp21 = recursivelyTraverseDisappearLayoutEffects;
      let tmp22 = recursivelyTraverseDisappearLayoutEffects(sibling);
      tmp6 = tmp;
    }
  }
}
function recursivelyTraverseReappearLayoutEffects(arg0, subtreeFlags) {
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = 0 !== (subtreeFlags.subtreeFlags & 8772);
  }
  if (null !== subtreeFlags.child) {
    if (null === tmp.memoizedState) {
      recursivelyTraverseReappearLayoutEffects(tmp3, tmp, tmp2);
    }
    safelyAttachRef(tmp, tmp.return);
  }
}
function commitOffscreenPassiveMountEffects(memoizedState, memoizedState2) {
  let pool = null;
  if (tmp) {
    pool = memoizedState.memoizedState.cachePool.pool;
  }
  let pool1 = null;
  if (tmp3) {
    pool1 = memoizedState2.memoizedState.cachePool.pool;
  }
  if (pool1 !== pool) {
    if (null != pool1) {
      pool1.refCount = pool1.refCount + 1;
    }
    if (null != pool) {
      releaseCache(pool);
    }
  }
}
function commitCachePassiveMountEffect(arg0, alternate) {
  let cache = null;
  if (null !== alternate.alternate) {
    cache = alternate.alternate.memoizedState.cache;
  }
  cache = alternate.memoizedState.cache;
  if (cache !== cache) {
    cache.refCount = cache.refCount + 1;
    if (null != cache) {
      releaseCache(cache);
    }
  }
}
function recursivelyTraversePassiveMountEffects(arg0, subtreeFlags) {
  if (subtreeFlags.subtreeFlags & 10256) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = commitPassiveMountOnFiber;
        let tmp3 = arg0;
        let tmp4 = sibling;
        let tmp5 = arg2;
        let tmp6 = arg3;
        let tmp7 = commitPassiveMountOnFiber(arg0, sibling, arg2, arg3);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveMountOnFiber(arg0, alternate) {
  ({ flags, tag } = alternate);
  if (0 !== tag) {
    if (11 !== tag) {
      if (15 !== tag) {
        if (3 === tag) {
          recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
          if (flags & 2048) {
            let cache = null;
            if (null !== alternate.alternate) {
              cache = alternate.alternate.memoizedState.cache;
            }
            cache = alternate.memoizedState.cache;
            if (cache !== cache) {
              tmp91.refCount = tmp91.refCount + 1;
              if (null != cache) {
                releaseCache(cache);
              }
            }
          }
        } else if (12 === tag) {
          recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
          if (tmp57) {
            const stateNode2 = alternate.stateNode;
            try {
              const memoizedProps = alternate.memoizedProps;
              ({ id, onPostCommit } = memoizedProps);
              if ("function" === typeof onPostCommit) {
                let str2 = "update";
                if (null === alternate.alternate) {
                  str2 = "mount";
                }
                tmp67(id, str2, stateNode2.passiveEffectDuration, -0);
                const tmp69 = id;
              }
            } catch (tmp76) {
              captureCommitPhaseError(tmp2, tmp2.return, tmp76);
            }
          }
          tmp57 = flags & 2048;
        } else if (23 !== tag) {
          if (22 === tag) {
            const stateNode = alternate.stateNode;
            if (null !== alternate.memoizedState) {
              if (stateNode._visibility & 4) {
                recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
              } else if (alternate.mode & 1) {
                recursivelyTraverseAtomicPassiveEffects(arg0, alternate);
              } else {
                stateNode._visibility = stateNode._visibility | 4;
                recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
              }
            } else if (stateNode._visibility & 4) {
              recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
            } else {
              stateNode._visibility = stateNode._visibility | 4;
              recursivelyTraverseReconnectPassiveEffects(arg0, alternate, arg2, arg3, 0 !== (alternate.subtreeFlags & 10256));
            }
            if (flags & 2048) {
              commitOffscreenPassiveMountEffects(alternate.alternate, alternate);
            }
          } else if (24 === tag) {
            recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
            if (flags & 2048) {
              alternate = alternate.alternate;
              commitCachePassiveMountEffect(undefined, alternate);
            }
          } else {
            recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
          }
        }
      }
    }
  }
  recursivelyTraversePassiveMountEffects(arg0, alternate, arg2, arg3);
  if (flags & 2048) {
    commitHookEffectListMount(9, alternate);
  }
}
function recursivelyTraverseReconnectPassiveEffects(arg0, subtreeFlags) {
  let tmp = arg4;
  if (arg4) {
    tmp = 0 !== (subtreeFlags.subtreeFlags & 10256);
  }
  let sibling = subtreeFlags.child;
  if (null !== sibling) {
    while (true) {
      ({ flags, tag } = sibling);
      let tmp3 = sibling;
      let tmp4 = tmp2;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            let tmp12 = tmp2;
            if (23 !== tag) {
              if (22 === tag) {
                let stateNode = sibling.stateNode;
                if (null !== sibling.memoizedState) {
                  if (stateNode._visibility & 4) {
                    let tmp39 = recursivelyTraverseReconnectPassiveEffects;
                    let tmp40 = arg0;
                    let tmp41 = sibling;
                    let tmp42 = arg2;
                    let tmp43 = arg3;
                    let tmp44 = tmp;
                    let tmp45 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  } else if (sibling.mode & 1) {
                    let tmp37 = recursivelyTraverseAtomicPassiveEffects;
                    let tmp38 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
                  } else {
                    stateNode._visibility = stateNode._visibility | 4;
                    let tmp30 = recursivelyTraverseReconnectPassiveEffects;
                    let tmp31 = arg0;
                    let tmp32 = sibling;
                    let tmp33 = arg2;
                    let tmp34 = arg3;
                    let tmp35 = tmp;
                    let tmp36 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                  }
                } else {
                  stateNode._visibility = stateNode._visibility | 4;
                  let tmp23 = recursivelyTraverseReconnectPassiveEffects;
                  let tmp24 = arg0;
                  let tmp25 = sibling;
                  let tmp26 = arg2;
                  let tmp27 = arg3;
                  let tmp28 = tmp;
                  let tmp29 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                }
                let tmp46 = tmp;
                if (tmp) {
                  tmp46 = flags & 2048;
                }
                tmp12 = stateNode;
                if (tmp46) {
                  let tmp47 = commitOffscreenPassiveMountEffects;
                  let tmp48 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
                  tmp12 = stateNode;
                }
              } else if (24 === tag) {
                let tmp13 = recursivelyTraverseReconnectPassiveEffects;
                let tmp14 = arg0;
                let tmp15 = sibling;
                let tmp16 = arg2;
                let tmp17 = arg3;
                let tmp18 = tmp;
                let tmp19 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                let tmp20 = tmp;
                if (tmp) {
                  tmp20 = flags & 2048;
                }
                tmp12 = tmp2;
                if (tmp20) {
                  let tmp21 = commitCachePassiveMountEffect;
                  let alternate = sibling.alternate;
                  let tmp22 = commitCachePassiveMountEffect(undefined, sibling);
                  tmp12 = tmp2;
                }
              } else {
                let tmp5 = recursivelyTraverseReconnectPassiveEffects;
                let tmp6 = arg0;
                let tmp7 = sibling;
                let tmp8 = arg2;
                let tmp9 = arg3;
                let tmp10 = tmp;
                let tmp11 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
                tmp12 = tmp2;
              }
            }
          }
          sibling = sibling.sibling;
          tmp2 = tmp12;
          if (null === sibling) {
            break;
          }
        }
      }
      let tmp49 = recursivelyTraverseReconnectPassiveEffects;
      let tmp50 = arg0;
      let tmp51 = sibling;
      let tmp52 = arg2;
      let tmp53 = arg3;
      let tmp54 = tmp;
      let tmp55 = recursivelyTraverseReconnectPassiveEffects(arg0, tmp3, arg2, arg3, tmp);
      let tmp56 = commitHookEffectListMount;
      let tmp57 = commitHookEffectListMount(8, sibling);
      tmp12 = tmp2;
    }
  }
}
function recursivelyTraverseAtomicPassiveEffects(arg0, subtreeFlags) {
  if (subtreeFlags.subtreeFlags & 10256) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        ({ flags, tag } = sibling);
        let tmp2 = sibling;
        if (22 === tag) {
          let tmp9 = recursivelyTraverseAtomicPassiveEffects;
          let tmp10 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
          if (flags & 2048) {
            let tmp11 = commitOffscreenPassiveMountEffects;
            let tmp12 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
          }
        } else if (24 === tag) {
          let tmp5 = recursivelyTraverseAtomicPassiveEffects;
          let tmp6 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
          if (flags & 2048) {
            let tmp7 = commitCachePassiveMountEffect;
            let alternate = sibling.alternate;
            let tmp8 = commitCachePassiveMountEffect(undefined, sibling);
          }
        } else {
          let tmp3 = recursivelyTraverseAtomicPassiveEffects;
          let tmp4 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyAccumulateSuspenseyCommit(subtreeFlags) {
  if (subtreeFlags.subtreeFlags & c143) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = accumulateSuspenseyCommitOnFiber;
        let tmp3 = accumulateSuspenseyCommitOnFiber(sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function accumulateSuspenseyCommitOnFiber(tag) {
  tag = tag.tag;
  if (26 === tag) {
    recursivelyAccumulateSuspenseyCommit(tag);
    let tmp16 = tag.flags & closure_143;
    if (tmp16) {
      tmp16 = null !== tag.memoizedState;
    }
    if (tmp16) {
      shim();
    }
  } else if (5 === tag) {
    recursivelyAccumulateSuspenseyCommit(tag);
  } else {
    if (3 !== tag) {
      if (4 !== tag) {
        if (22 === tag) {
          if (null === tag.memoizedState) {
            const alternate = tag.alternate;
            if (null !== alternate) {
              if (null !== alternate.memoizedState) {
                closure_143 = 16777216;
                recursivelyAccumulateSuspenseyCommit(tag);
              }
            }
            recursivelyAccumulateSuspenseyCommit(tag);
          }
        } else {
          recursivelyAccumulateSuspenseyCommit(tag);
        }
      }
    }
    recursivelyAccumulateSuspenseyCommit(tag);
  }
}
function detachAlternateSiblings(alternate) {
  alternate = alternate.alternate;
  if (null !== alternate) {
    let sibling = alternate.child;
    if (null !== sibling) {
      alternate.child = null;
      do {
        sibling.sibling = null;
        sibling = sibling.sibling;
      } while (null !== tmp);
    }
  }
}
function recursivelyTraversePassiveUnmountEffects(deletions) {
  let length;
  deletions = deletions.deletions;
  if (0 !== (deletions.flags & 16)) {
    if (null !== deletions) {
      let num = 0;
      if (0 < deletions.length) {
        do {
          let tmp2 = deletions[num];
          closure_139 = tmp2;
          let tmp3 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
          let tmp4 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp2, deletions);
          num = num + 1;
          length = deletions.length;
        } while (num < length);
      }
    }
    detachAlternateSiblings(deletions);
  }
  if (deletions.subtreeFlags & 10256) {
    let sibling = deletions.child;
    if (null !== sibling) {
      do {
        let tmp8 = commitPassiveUnmountOnFiber;
        let tmp9 = commitPassiveUnmountOnFiber(sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveUnmountOnFiber(tag) {
  tag = tag.tag;
  if (0 !== tag) {
    if (11 !== tag) {
      if (15 !== tag) {
        if (3 === tag) {
          recursivelyTraversePassiveUnmountEffects(tag);
        } else if (12 === tag) {
          recursivelyTraversePassiveUnmountEffects(tag);
        } else if (22 === tag) {
          const stateNode = tag.stateNode;
          if (null !== tag.memoizedState) {
            if (stateNode._visibility & 4) {
              stateNode._visibility = stateNode._visibility & -5;
              recursivelyTraverseDisconnectPassiveEffects(tag);
            }
          }
          recursivelyTraversePassiveUnmountEffects(tag);
        } else {
          recursivelyTraversePassiveUnmountEffects(tag);
        }
      }
    }
  }
  recursivelyTraversePassiveUnmountEffects(tag);
  if (tag.flags & 2048) {
    commitHookEffectListUnmount(9, tag, tag.return);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(deletions) {
  let length;
  deletions = deletions.deletions;
  if (0 !== (deletions.flags & 16)) {
    let num;
    if (null !== deletions) {
      let num2 = 0;
      num = 0;
      if (0 < deletions.length) {
        do {
          let tmp3 = deletions[num2];
          closure_139 = tmp3;
          let tmp4 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin;
          let tmp5 = commitPassiveUnmountEffectsInsideOfDeletedTree_begin(tmp3, deletions);
          num2 = num2 + 1;
          num = num2;
          length = deletions.length;
        } while (num2 < length);
      }
    }
    detachAlternateSiblings(deletions);
    let tmp = num;
  }
  let sibling = deletions.child;
  if (null !== sibling) {
    while (true) {
      let tag = sibling.tag;
      let tmp8 = sibling;
      let tmp9 = tmp;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (22 === tag) {
              let stateNode = sibling.stateNode;
              let tmp12 = stateNode;
              if (stateNode._visibility & 4) {
                stateNode._visibility = stateNode._visibility & -5;
                let tmp13 = recursivelyTraverseDisconnectPassiveEffects;
                let tmp14 = recursivelyTraverseDisconnectPassiveEffects(sibling);
                tmp12 = stateNode;
              }
            } else {
              let tmp10 = recursivelyTraverseDisconnectPassiveEffects;
              let tmp11 = recursivelyTraverseDisconnectPassiveEffects(sibling);
              tmp12 = tmp;
            }
          }
          sibling = sibling.sibling;
          tmp = tmp12;
          if (null === sibling) {
            break;
          }
        }
      }
      let tmp15 = commitHookEffectListUnmount;
      let tmp16 = commitHookEffectListUnmount(8, sibling, sibling.return);
      let tmp17 = recursivelyTraverseDisconnectPassiveEffects;
      let tmp18 = recursivelyTraverseDisconnectPassiveEffects(sibling);
      tmp12 = tmp;
    }
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(arg0, arg1) {
  let _null6;
  if (null !== _null6) {
    while (true) {
      let tmp3 = _null6;
      let tag = _null6.tag;
      let tmp4 = tmp;
      let tmp5 = tmp2;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (23 !== tag) {
              if (22 !== tag) {
                if (24 === tag) {
                  let tmp6 = releaseCache;
                  let tmp7 = releaseCache(tmp3.memoizedState.cache);
                }
              }
            }
            if (null !== tmp3.memoizedState) {
              if (null !== tmp3.memoizedState.cachePool) {
                let pool = tmp3.memoizedState.cachePool.pool;
                if (null != pool) {
                  pool.refCount = pool.refCount + 1;
                }
              }
            }
          }
          let child = tmp3.child;
          if (null !== child) {
            child.return = tmp3;
            _null6 = child;
            let tmp11 = tmp;
            let tmp12 = tmp2;
          } else {
            let tmp10 = _null6;
            tmp11 = tmp;
            tmp12 = tmp2;
            if (null !== _null6) {
              let tmp13 = _null6;
              ({ sibling, return: _return } = _null6);
              let tmp14 = detachFiberAfterEffects;
              let tmp15 = detachFiberAfterEffects(_null6);
              while (_null6 !== arg0) {
                if (null !== sibling) {
                  sibling.return = _return;
                  _null6 = sibling;
                  tmp11 = sibling;
                  tmp12 = _return;
                } else {
                  _null6 = _return;
                  tmp11 = sibling;
                  tmp12 = _return;
                }
                continue;
              }
              _null6 = null;
              tmp11 = sibling;
              tmp12 = _return;
            }
          }
          let tmp16 = _null6;
          tmp = tmp11;
          tmp2 = tmp12;
          if (null === _null6) {
            break;
          }
        }
      }
      let tmp8 = commitHookEffectListUnmount;
      let tmp9 = commitHookEffectListUnmount(8, tmp3, arg1);
    }
  }
}
function requestUpdateLane(mode) {
  if (0 === (mode.mode & 1)) {
    return 2;
  } else {
    if (0 !== (c146 & 2)) {
      if (0 !== c149) {
        return c149 & -c149;
      }
    }
    if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
      let tmp6 = c91;
      if (0 === c91) {
        tmp6 = requestTransitionLane();
      }
      return tmp6;
    } else {
      let num2 = 32;
      if (0 !== c68) {
        num2 = c68;
      }
      return num2;
    }
  }
}
function requestDeferredLane() {
  if (0 === num) {
    num = 536870912;
    if (0 === (c149 & 536870912)) {
      num = claimNextTransitionLane();
    }
  }
  const current = closure_106.current;
  if (null !== current) {
    current.flags = current.flags | 32;
  }
  return num;
}
function scheduleUpdateOnFiber(cancelPendingCommit, mode) {
  if (cancelPendingCommit !== c147) {
    markRootUpdated$1(cancelPendingCommit, arg2);
    if (0 === (c146 & 2)) {
      if (cancelPendingCommit === c147) {
        if (0 === (c146 & 2)) {
          closure_158 = closure_158 | arg2;
        }
        if (4 === c156) {
          markRootSuspended(cancelPendingCommit, c149, c160, false);
        }
      }
      ensureRootIsScheduled(cancelPendingCommit);
      let tmp20 = 2 === arg2;
      if (tmp20) {
        tmp20 = 0 === c146;
      }
      if (tmp20) {
        tmp20 = 0 === (mode.mode & 1);
      }
      if (tmp20) {
        closure_166 = push2.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
        const obj = push2;
      }
    }
  }
  prepareFreshStack(cancelPendingCommit, 0);
  markRootSuspended(cancelPendingCommit, c149, c160, false);
}
function performWorkOnRoot(expiredLanes) {
  if (0 !== (c146 & 6)) {
    const _Error = Error;
    throw Error("Should not already be working.");
  } else {
    let tmp = !arg2;
    if (tmp) {
      tmp = 0 === (arg1 & 60);
    }
    if (tmp) {
      tmp = 0 === (arg1 & expiredLanes.expiredLanes);
    }
    if (!tmp) {
      tmp = checkIfRootIsPrerendering(expiredLanes, arg1);
    }
    if (tmp) {
      renderRootConcurrent(expiredLanes, arg1);
    } else {
      renderRootSync(expiredLanes, arg1, true);
    }
  }
}
function queueRecoverableErrors(arg0) {
  if (null === _null9) {
    _null9 = arg0;
  } else {
    push = _null9.push;
    push.apply(_null9, arg0);
  }
}
function commitRootWhenReady(arg0, subtreeFlags) {
  subtreeFlags = subtreeFlags.subtreeFlags;
  let tmp4 = subtreeFlags & 8192;
  if (!tmp4) {
    tmp4 = 16785408 === (tmp3 & 16785408);
  }
  if (tmp4) {
    accumulateSuspenseyCommitOnFiber(subtreeFlags);
  }
  const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
  try {
    c68 = 2;
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    commitRootImpl(arg0, arg2, arg3, undefined, undefined, arg6, arg7, arg8, undefined, undefined, undefined);
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    c68 = tmp9;
  } catch (tmp23) {
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp2;
    c68 = tmp;
    throw tmp23;
  }
}
function isRenderConsistentWithExternalStores(arg0) {
  sibling = arg0;
  while (true) {
    let tag = sibling.tag;
    let tmp = tag;
    let tmp2 = sibling;
    if (0 !== tag) {
      let tmp3 = tag;
      if (11 !== tmp) {
        let tmp4 = tag;
      }
      let child = sibling.child;
      if (sibling.subtreeFlags & 16384) {
        let tmp18 = child;
        if (null !== child) {
          let tmp22 = child;
          child.return = sibling;
          sibling = child;
          continue;
        }
      }
      if (sibling === arg0) {
        let flag2 = true;
        return true;
      } else {
        let tmp19 = sibling;
        let tmp20 = sibling;
        if (null === sibling.sibling) {
          let tmp21 = tmp19;
          while (null !== tmp19.return) {
            if (tmp19.return === arg0) {
              break;
            } else {
              let _return = tmp19.return;
              tmp19 = _return;
              tmp20 = _return;
              continue;
            }
          }
          let flag = true;
          return true;
        }
        ({ return: tmp20.sibling.return, sibling } = tmp20);
        continue;
      }
    }
    if (sibling.flags & 16384) {
      let updateQueue = sibling.updateQueue;
      if (null !== updateQueue) {
        let tmp6 = updateQueue;
        let stores = tmp5.stores;
        let arr = stores;
        if (null !== stores) {
          let num = 0;
          let tmp7 = stores;
          if (0 < arr.length) {
            let tmp8 = stores;
            let tmp9 = num;
            let tmp10 = arr[num];
            let tmp11 = tmp10;
            ({ getSnapshot, value } = tmp10);
            while (true) {
              try {
                let tmp12 = is;
                let tmp13 = getSnapshot;
                let tmp14 = value;
                if (!is(getSnapshot(), value)) {
                  break;
                } else {
                  let tmp15 = num;
                  let sum = num + 1;
                  num = sum;
                  let tmp17 = stores;
                  continue;
                }
              } catch (err) {
                let flag3 = false;
                return false;
              }
            }
          }
        }
      }
    }
  }
  return false;
}
function markRootSuspended(suspendedLanes) {
  suspendedLanes.suspendedLanes = suspendedLanes.suspendedLanes | arg1 & ~c159 & ~c158;
  suspendedLanes.pingedLanes = suspendedLanes.pingedLanes & ~arg1 & ~c159 & ~c158;
  if (arg3) {
    suspendedLanes.warmLanes = suspendedLanes.warmLanes | tmp;
  }
  let tmp3 = tmp;
  if (0 < (arg1 & ~c159 & ~c158)) {
    do {
      let tmp4 = clz32Fallback;
      let diff = 31 - clz32Fallback(tmp3);
      tmp2[diff] = -1;
      tmp3 = tmp3 & ~1 << diff;
    } while (0 < tmp3);
  }
  if (0 !== arg2) {
    markSpawnedDeferredLane(suspendedLanes, arg2, tmp);
  }
}
function resetWorkInProgressStack() {
  if (null !== _null8) {
    if (0 === c150) {
      let _return = _null8.return;
    } else {
      c130 = null;
      c131 = null;
      resetHooksOnUnwind(_null8);
      c100 = null;
      c101 = 0;
      _return = _null8;
    }
    if (null !== _return) {
      do {
        let tmp6 = unwindInterruptedWork;
        let tmp7 = unwindInterruptedWork(_return.alternate, _return);
        _return = _return.return;
      } while (null !== _return);
    }
    _null8 = null;
  }
}
function prepareFreshStack(timeoutHandle) {
  timeoutHandle.finishedWork = null;
  timeoutHandle.finishedLanes = 0;
  timeoutHandle = timeoutHandle.timeoutHandle;
  if (-1 !== timeoutHandle) {
    timeoutHandle.timeoutHandle = -1;
    clearTimeout(timeoutHandle);
  }
  const cancelPendingCommit = timeoutHandle.cancelPendingCommit;
  if (null !== cancelPendingCommit) {
    timeoutHandle.cancelPendingCommit = null;
    cancelPendingCommit();
  }
  resetWorkInProgressStack();
  closure_147 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  closure_148 = tmp5;
  closure_149 = arg1;
  c150 = 0;
  c151 = null;
  c152 = false;
  closure_153 = checkIfRootIsPrerendering(timeoutHandle, arg1);
  c154 = false;
  c156 = 0;
  c157 = 0;
  c158 = 0;
  c159 = 0;
  c160 = 0;
  c161 = 0;
  c162 = null;
  c163 = null;
  c164 = false;
  let tmp6 = arg1;
  if (0 !== (arg1 & 8)) {
    tmp6 = arg1 | arg1 & 32;
  }
  const entangledLanes = timeoutHandle.entangledLanes;
  let tmp7 = tmp6;
  if (0 !== entangledLanes) {
    let tmp9 = entangledLanes & tmp6;
    let tmp10 = tmp6;
    tmp7 = tmp6;
    if (0 < tmp9) {
      do {
        let tmp11 = clz32Fallback;
        let diff = 31 - clz32Fallback(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & ~1 << diff;
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  closure_155 = tmp7;
  finishQueueingConcurrentUpdates();
  return tmp5;
}
function handleThrow(current) {
  let promise = arg1;
  c110 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj13;
  if (arg1 === closure_96) {
    promise = getSuspendedThenable();
    let num = 3;
  } else if (promise === closure_97) {
    promise = getSuspendedThenable();
    num = 4;
  } else {
    num = 8;
    if (promise !== closure_126) {
      let num3 = 1;
      if (null !== promise) {
        num3 = 1;
        if ("object" === typeof promise) {
          num3 = 1;
          if ("function" === typeof promise.then) {
            num3 = 6;
          }
        }
      }
      num = num3;
    }
  }
  if (null === c148) {
    c156 = 1;
    logUncaughtError(current, createCapturedValueAtFiber(promise, current.current));
  }
}
function pushDispatcher() {
  let H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = obj13;
  if (null === H) {
    H = obj13;
  }
  return H;
}
function pushAsyncDispatcher() {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = closure_144;
  return __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
}
function renderDidSuspendDelayIfPossible() {
  c156 = 4;
  let tmp = c152;
  if (!c152) {
    let tmp4 = (c149 & 4194176) !== c149;
    if (tmp4) {
      tmp4 = null !== closure_106.current;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    c153 = true;
  }
  let tmp7 = 0 === (c157 & 134217727);
  if (tmp7) {
    tmp7 = 0 === (c158 & 134217727);
  }
  if (!tmp7) {
    tmp7 = null === c147;
  }
  if (!tmp7) {
    markRootSuspended(c147, c149, c160, false);
  }
}
function renderRootSync(shellSuspendCounter) {
  closure_146 = closure_146 | 2;
  const tmp7 = pushDispatcher();
  const tmp8 = pushAsyncDispatcher();
  if (c147 !== shellSuspendCounter) {
    c167 = null;
    prepareFreshStack(shellSuspendCounter, arg1);
  }
  let flag = false;
  try {
    if (0 !== c150) {
      let tmp33 = null;
      if (null !== c148) {
        if (8 === c150) {
          resetWorkInProgressStack();
          let num3 = 6;
        } else {
          if (3 !== tmp54) {
            if (2 !== tmp54) {
              if (6 !== tmp54) {
                c150 = 0;
                c151 = tmp33;
                throwAndUnwindWorkLoop(shellSuspendCounter, tmp3, tmp4, c150);
              }
            }
          }
          if (tmp33 === closure_106.current) {
            flag = true;
          }
          c150 = 0;
          c151 = tmp33;
          throwAndUnwindWorkLoop(shellSuspendCounter, tmp3, tmp4, c150);
          if (arg2) {
            if (c153) {
              num3 = 0;
            }
          }
        }
      }
      while (true) {
        let tmp37 = flag;
        if (!flag) {
          break;
        } else {
          let tmp38 = shellSuspendCounter;
          shellSuspendCounter.shellSuspendCounter = shellSuspendCounter.shellSuspendCounter + 1;
          break;
        }
        let tmp39 = null;
        c130 = null;
        c131 = null;
        let tmp40 = closure_146;
        let tmp41 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp42 = tmp7;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp7;
        let tmp43 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp44 = tmp8;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp8;
        let tmp45 = c148;
        if (null === c148) {
          c147 = null;
          c149 = 0;
          let tmp46 = finishQueueingConcurrentUpdates;
          let tmp47 = finishQueueingConcurrentUpdates();
        }
        let tmp48 = num3;
        return num3;
      }
    }
    tmp33 = workLoopSync();
  } catch (tmp49) {
    handleThrow(tmp2, tmp49);
  }
}
function workLoopSync() {
  if (null !== c148) {
    do {
      let tmp = performUnitOfWork;
      let tmp2 = c148;
      let tmp3 = performUnitOfWork(c148);
      let tmp4 = c148;
    } while (null !== c148);
  }
}
function renderRootConcurrent(arg0, arg1) {
  const _require = arg0;
  let tmp3 = arg1;
  closure_146 = closure_146 | 2;
  const tmp6 = pushDispatcher();
  const tmp7 = pushAsyncDispatcher();
  if (c147 === arg0) {
    if (c149 === tmp3) {
      closure_153 = checkIfRootIsPrerendering(arg0, tmp3);
    }
    try {
      if (0 !== c150) {
        let tmp67 = null;
        if (null !== _null8) {
          tmp3 = _null8;
          if (1 === c150) {
            c150 = 0;
            c151 = tmp67;
            throwAndUnwindWorkLoop(arg0, tmp3, promise, 1);
          } else {
            if (2 === tmp83) {
              if (isThenableResolved(promise)) {
                c150 = 0;
                c151 = tmp67;
                replaySuspendedUnitOfWork(tmp3);
              } else {
                function lanes() {
                  let tmp = 2 === c150;
                  if (tmp) {
                    tmp = c147 === closure_0;
                  }
                  if (tmp) {
                    c150 = 7;
                  }
                  closure_1_264(closure_0);
                }
                promise.then(lanes, lanes);
              }
            } else if (3 === tmp83) {
              c150 = 7;
            } else if (4 === tmp83) {
              c150 = 5;
            } else {
              if (7 === tmp83) {
                c150 = 0;
                c151 = tmp67;
                if (isThenableResolved(promise)) {
                  replaySuspendedUnitOfWork(tmp3);
                } else {
                  throwAndUnwindWorkLoop(arg0, tmp3, promise, 7);
                }
              } else if (5 !== tmp83) {
                if (6 === tmp83) {
                  c150 = 0;
                  c151 = tmp67;
                  throwAndUnwindWorkLoop(arg0, tmp3, promise, 6);
                } else if (8 === tmp83) {
                  resetWorkInProgressStack();
                  c156 = 6;
                } else {
                  const _Error = Error;
                  throw Error("Unexpected SuspendedReason. This is a bug in React.");
                }
              }
              let memoizedState = null;
              const tag = _null8.tag;
              if (26 === tag) {
                memoizedState = _null8.memoizedState;
              } else if (5 !== tag) {
                c150 = 0;
                c151 = tmp67;
                throwAndUnwindWorkLoop(arg0, tmp3, promise, 5);
              }
              if (memoizedState) {
                shim(undefined);
              }
              if (1) {
                c150 = 0;
                c151 = tmp67;
                const sibling = tmp26.sibling;
                if (tmp67 !== sibling) {
                  _null8 = tmp36;
                } else {
                  const _return = tmp26.return;
                  if (tmp67 !== _return) {
                    _null8 = tmp38;
                    completeUnitOfWork(tmp38);
                  } else {
                    _null8 = tmp67;
                  }
                }
              }
            }
            c130 = null;
            c131 = null;
            __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp6;
            __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp7;
            if (null !== _null8) {
              return 0;
            } else {
              c147 = null;
              c149 = 0;
              finishQueueingConcurrentUpdates();
              return c156;
            }
          }
        }
      }
      tmp67 = workLoopConcurrent();
    } catch (tmp78) {
      handleThrow(tmp2, tmp78);
    }
  }
  c167 = null;
  closure_166 = _require(270).unstable_now() + 500;
  prepareFreshStack(arg0, tmp3);
}
function workLoopConcurrent() {
  if (null !== c148) {
    if (!obj.unstable_shouldYield()) {
      performUnitOfWork(c148);
      while (null !== c148) {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        obj2 = push2;
        if (obj2.unstable_shouldYield()) {
          break;
        }
      }
    }
    obj = push2;
  }
}
function performUnitOfWork(alternate) {
  const tmp = beginWork(alternate.alternate, alternate, c155);
  alternate.memoizedProps = alternate.pendingProps;
  if (null === tmp) {
    completeUnitOfWork(alternate);
  } else {
    closure_148 = tmp;
  }
}
function replaySuspendedUnitOfWork(pendingProps) {
  ({ alternate, tag } = pendingProps);
  if (15 !== tag) {
    if (0 !== tag) {
      if (11 === tag) {
        let tmp10 = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type.render, pendingProps.ref, c149);
      } else {
        if (5 === tag) {
          resetHooksOnUnwind(pendingProps);
        }
        unwindInterruptedWork(alternate, pendingProps);
        resetWorkInProgress(pendingProps, c155);
        closure_148 = pendingProps;
        tmp10 = beginWork(alternate, pendingProps, c155);
      }
    }
    pendingProps.memoizedProps = pendingProps.pendingProps;
    if (null === tmp10) {
      completeUnitOfWork(pendingProps);
    } else {
      closure_148 = tmp10;
    }
  }
  tmp10 = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type, undefined, c149);
}
function throwAndUnwindWorkLoop(current, arg1) {
  let tmp6 = arg1;
  c130 = null;
  c131 = null;
  resetHooksOnUnwind(arg1);
  c100 = null;
  c101 = 0;
  const _return = arg1.return;
  try {
    if (throwException(current, _return, tmp6, arg2, c149)) {
      c156 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(arg2, current.current));
      c148 = null;
    } else if (tmp6.flags & 32768) {
      if (1 === arg3) {
        let flag2 = true;
        tmp6 = unwindUnitOfWork(tmp6, flag2);
      } else if (!c153) {
        if (0 === (c149 & 536870912)) {
          flag2 = true;
          c152 = true;
          current = closure_106.current;
          let tmp26 = tmp25;
          if (null !== current) {
            tmp26 = 13 === tmp24.tag;
          }
          if (tmp26) {
            tmp24.flags = tmp24.flags | 16384;
          }
        }
      }
      flag2 = false;
    } else {
      completeUnitOfWork(tmp6);
    }
  } catch (tmp37) {
    if (tmp3 !== tmp) {
      c148 = tmp;
      throw tmp37;
    } else {
      c156 = 1;
      logUncaughtError(tmp5, createCapturedValueAtFiber(tmp4, tmp5.current));
      c148 = tmp3;
      return tmp2;
    }
  }
}
function completeUnitOfWork(arg0) {
  let tmp = arg0;
  while (0 === (tmp.flags & 32768)) {
    let _return = tmp.return;
    let tmp2 = completeWork;
    let tmp3 = c155;
    let tmp4 = completeWork(tmp.alternate, tmp, c155);
    if (null !== tmp4) {
      _return = tmp4;
    } else {
      let sibling = tmp.sibling;
      if (null !== sibling) {
        _return = sibling;
      } else {
        tmp = _return;
        if (null !== _return) {
          continue;
        } else {
          let tmp5 = c156;
          if (0 === c156) {
            let num = 5;
            c156 = 5;
          }
        }
      }
    }
  }
  unwindUnitOfWork(tmp, c152);
}
function unwindUnitOfWork(arg0, arg1) {
  let tmp = arg0;
  const tmp2 = unwindWork(tmp.alternate, tmp);
  while (null === tmp2) {
    let _return = tmp.return;
    let tmp3 = null !== _return;
    if (tmp3) {
      _return.flags = _return.flags | 32768;
      _return.subtreeFlags = 0;
      _return.deletions = null;
    }
    if (!arg1) {
      let sibling = tmp.sibling;
      if (null !== sibling) {
        closure_148 = sibling;
      }
    }
    closure_148 = _return;
    tmp = _return;
    if (tmp3) {
      continue;
    } else {
      let num = 6;
      c156 = 6;
      closure_148 = null;
    }
  }
  tmp2.flags = tmp2.flags & 32767;
  closure_148 = tmp2;
}
function commitRootImpl(current) {
  let length;
  do {
    let tmp = flushPassiveEffects;
    let tmp2 = flushPassiveEffects();
    let tmp3 = closure_170;
  } while (null !== closure_170);
  if (0 !== (closure_146 & 6)) {
    const _Error2 = Error;
    throw Error("Should not already be working.");
  } else {
    ({ finishedWork, finishedLanes } = current);
    if (null === finishedWork) {
      return null;
    } else {
      current.finishedWork = null;
      current.finishedLanes = 0;
      if (finishedWork === current.current) {
        const _Error = Error;
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      } else {
        current.callbackNode = null;
        current.callbackPriority = 0;
        current.cancelPendingCommit = null;
        markRootFinished(current, finishedLanes, finishedWork.lanes | finishedWork.childLanes | c82, arg5, arg6, arg7);
        if (current === c147) {
          c147 = null;
          c148 = null;
          c149 = 0;
        }
        if (!tmp4) {
          c169 = true;
          closure_172 = tmp45;
          closure_173 = arg2;
          scheduleCallback(push2.unstable_NormalPriority, () => {
            closure_1_468(undefined);
            return null;
          });
        }
        if (0 === (finishedWork.subtreeFlags & 15990)) {
          if (0 === (finishedWork.flags & 15990)) {
            current.current = finishedWork;
          }
          if (c169) {
            c169 = false;
            closure_170 = current;
          } else {
            releaseRootPooledCache(current, tmp45);
          }
          if (0 === current.pendingLanes) {
            c168 = null;
          }
          onCommitRoot(finishedWork.stateNode, undefined);
          ensureRootIsScheduled(current);
          if (null !== arg1) {
            let num7 = 0;
            if (0 < arg1.length) {
              do {
                let iter = arg1[num7];
                let obj = { componentStack: iter.stack };
                let tmp31Result = tmp31(iter.value, obj);
                num7 = num7 + 1;
                length = arg1.length;
              } while (num7 < length);
            }
          }
          if (tmp34) {
            flushPassiveEffects();
          }
          if (0 !== (finishedLanes & 4194218)) {
            if (0 !== (tmp37 & 42)) {
              if (current === closure_175) {
                c174 = c174 + 1;
              } else {
                c174 = 0;
                closure_175 = current;
              }
            }
            flushSyncWorkAcrossRoots_impl(0, false);
            return null;
          }
          c174 = 0;
          tmp34 = 0 !== (finishedLanes & 3) && 0 !== current.tag;
        }
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        closure_68 = 2;
        closure_146 = closure_146 | 4;
        commitBeforeMutationEffects(current, finishedWork);
        commitMutationEffectsOnFiber(finishedWork, current);
        current.current = finishedWork;
        commitLayoutEffectOnFiber(current, finishedWork.alternate, finishedWork);
        obj = push2;
        const result = obj.unstable_requestPaint();
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        tmp4 = 0 === (finishedWork.subtreeFlags & 10256) && 0 === (finishedWork.flags & 10256) || c169;
      }
    }
  }
}
function releaseRootPooledCache(pooledCacheLanes) {
  pooledCacheLanes.pooledCacheLanes = pooledCacheLanes.pooledCacheLanes & arg1;
  if (0 === (pooledCacheLanes.pooledCacheLanes & arg1)) {
    const pooledCache = pooledCacheLanes.pooledCache;
    if (null != pooledCache) {
      pooledCacheLanes.pooledCache = null;
      releaseCache(pooledCache);
    }
  }
}
function flushPassiveEffects() {
  if (null !== c170) {
    c172 = 0;
    const tmp10 = lanesToEventPriority(c171);
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    try {
      let num2 = 32;
      if (32 <= tmp10) {
        num2 = tmp10;
      }
      c68 = num2;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      if (null === c170) {
        let flag2 = false;
      } else {
        c173 = null;
        c170 = null;
        c171 = 0;
        if (0 !== (closure_146 & 6)) {
          const _Error = Error;
          throw Error("Cannot flush passive effects while already rendering.");
        } else {
          closure_146 = closure_146 | 4;
          commitPassiveUnmountOnFiber(tmp33.current);
          commitPassiveMountOnFiber(tmp33, tmp33.current, tmp34, tmp32);
          flushSyncWorkAcrossRoots_impl(0, false);
          if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
            if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot) {
              try {
                const result = __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot(closure_57, tmp33);
              } catch (err) {
              }
            }
          }
          flag2 = true;
        }
      }
      c68 = tmp12;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      releaseRootPooledCache(tmp6, tmp7);
      return flag2;
    } catch (tmp28) {
      c68 = tmp5;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = tmp4;
      releaseRootPooledCache(tmp2, tmp);
      throw tmp28;
    }
  } else {
    return false;
  }
}
function captureCommitPhaseErrorOnRoot(stateNode) {
  const tmp = enqueueUpdate(stateNode, createRootErrorUpdate(stateNode.stateNode, createCapturedValueAtFiber(arg2, arg1), 2), 2);
  if (null !== tmp) {
    markRootUpdated$1(tmp, 2);
    ensureRootIsScheduled(tmp);
  }
}
function captureCommitPhaseError(tag) {
  let tmp5;
  let _return = arg1;
  if (3 === tag.tag) {
    captureCommitPhaseErrorOnRoot(tag, tag, arg2);
  } else if (null !== _return) {
    let tmp2 = tmp5;
    while (3 !== _return.tag) {
      if (1 !== _return.tag) {
        _return = _return.return;
        tmp5 = tmp2;
      } else {
        let stateNode = _return.stateNode;
        if ("function" !== typeof _return.type.getDerivedStateFromError) {
          tmp2 = stateNode;
          if ("function" === typeof stateNode.componentDidCatch) {
            let tmp3 = _null10;
            if (null !== _null10) {
              let tmp4 = _null10;
              tmp2 = stateNode;
            }
          }
        }
        let tmp6 = createCapturedValueAtFiber;
        let tmp7 = createCapturedValueAtFiber(arg2, tag);
        let tmp8 = createClassErrorUpdate;
        let num = 2;
        let tmp9 = createClassErrorUpdate(2);
        let tmp10 = enqueueUpdate;
        let tmp11 = enqueueUpdate(_return, tmp9, 2);
        if (null !== tmp11) {
          let tmp12 = initializeClassErrorUpdate;
          let tmp13 = tmp9;
          let tmp14 = tmp11;
          let tmp15 = _return;
          let tmp16 = tmp7;
          let tmp17 = initializeClassErrorUpdate(tmp9, tmp11, tmp, tmp7);
          let tmp18 = markRootUpdated$1;
          let tmp19 = markRootUpdated$1(tmp11, 2);
          let tmp20 = ensureRootIsScheduled;
          let tmp21 = ensureRootIsScheduled(tmp11);
        }
      }
    }
    captureCommitPhaseErrorOnRoot(_return, tag, arg2);
  }
}
function attachPingListener(pingCache, promise, bindResult1) {
  pingCache = pingCache.pingCache;
  if (null === pingCache) {
    const prototype2 = ctor3.prototype;
    obj2 = new ctor3();
    pingCache.pingCache = obj2;
    const _Set2 = Set;
    const set = new Set();
    const result = obj2.set(promise, set);
    let value = set;
  } else {
    value = pingCache.get(promise);
    if (undefined === value) {
      const _Set = Set;
      const set1 = new Set();
      const result1 = pingCache.set(promise, set1);
      value = set1;
    }
  }
  if (!value.has(bindResult1)) {
    c154 = true;
    value.add(bindResult1);
    const bindResult = pingSuspendedRoot.bind(null, pingCache, promise, bindResult1);
    promise.then(bindResult, bindResult);
  }
}
function pingSuspendedRoot(pingCache) {
  pingCache = pingCache.pingCache;
  if (null !== pingCache) {
    pingCache.delete(arg1);
  }
  pingCache.pingedLanes = pingCache.pingedLanes | pingCache.suspendedLanes & arg2;
  pingCache.warmLanes = pingCache.warmLanes & ~arg2;
  let tmp3 = c147 === pingCache;
  if (tmp3) {
    tmp3 = (c149 & arg2) === arg2;
  }
  if (tmp3) {
    if (4 === c156) {
      if (0 === (c146 & 2)) {
        prepareFreshStack(pingCache, 0);
      }
    } else {
      if (3 === c156) {
        if ((c149 & 62914560) === c149) {
          const obj = push2;
        }
      }
      closure_159 = closure_159 | arg2;
    }
    if (c161 === c149) {
      c161 = 0;
    }
  }
  ensureRootIsScheduled(pingCache);
}
function retryTimedOutBoundary(mode) {
  let tmp = arg1;
  if (0 === arg1) {
    let num2 = 2;
    if (0 !== (mode.mode & 1)) {
      num2 = claimNextRetryLane();
    }
    tmp = num2;
  }
  const tmp3 = enqueueConcurrentRenderForLane(mode, tmp);
  if (null !== tmp3) {
    markRootUpdated$1(tmp3, tmp);
    ensureRootIsScheduled(tmp3);
  }
}
function resolveRetryWakeable(tag) {
  tag = tag.tag;
  if (13 === tag) {
    ({ stateNode, memoizedState } = tag);
    let num3 = 0;
    let _retryCache = stateNode;
    if (null !== memoizedState) {
      num3 = memoizedState.retryLane;
      _retryCache = stateNode;
    }
  } else if (19 === tag) {
    _retryCache = tag.stateNode;
    num3 = 0;
  } else if (22 === tag) {
    _retryCache = tag.stateNode._retryCache;
    num3 = 0;
  } else {
    const _Error = Error;
    throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
  }
  if (null !== _retryCache) {
    _retryCache.delete(arg1);
  }
  retryTimedOutBoundary(tag, num3);
}
function scheduleCallback(arg0, arg1) {
  return push2.unstable_scheduleCallback(arg0, arg1);
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;
  this.ref = null;
  this.refCleanup = null;
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;
  this.mode = mode;
  this.flags = 0;
  this.subtreeFlags = 0;
  this.deletions = null;
  this.lanes = 0;
  this.childLanes = 0;
  this.alternate = null;
}
function createFiberImplClass(arg0, arg1, arg2, arg3) {
  return new FiberNode(arg0, arg1, arg2, arg3);
}
function shouldConstruct(arg0) {
  const prototype = arg0.prototype;
  return !(!prototype || !prototype.isReactComponent);
}
function createWorkInProgress(alternate, pendingProps) {
  alternate = alternate.alternate;
  if (null === alternate) {
    const tmp3 = createFiberImplClass(alternate.tag, pendingProps, alternate.key, alternate.mode);
    ({ elementType: tmp3.elementType, type: tmp3.type, stateNode: tmp3.stateNode } = alternate);
    tmp3.alternate = alternate;
    alternate.alternate = tmp3;
    alternate = tmp3;
  } else {
    alternate.pendingProps = pendingProps;
    alternate.type = alternate.type;
    alternate.flags = 0;
    alternate.subtreeFlags = 0;
    alternate.deletions = null;
  }
  alternate.flags = alternate.flags & 31457280;
  ({ childLanes: alternate.childLanes, lanes: alternate.lanes, child: alternate.child, memoizedProps: alternate.memoizedProps, memoizedState: alternate.memoizedState, updateQueue: alternate.updateQueue, dependencies } = alternate);
  let tmp4 = null;
  if (null !== dependencies) {
    const obj = {};
    ({ lanes: obj.lanes, firstContext: obj.firstContext } = dependencies);
    tmp4 = obj;
  }
  alternate.dependencies = tmp4;
  ({ sibling: alternate.sibling, index: alternate.index, ref: alternate.ref, refCleanup: alternate.refCleanup } = alternate);
  return alternate;
}
function resetWorkInProgress(flags, lanes) {
  flags.flags = flags.flags & 31457282;
  const alternate = flags.alternate;
  if (null === alternate) {
    flags.childLanes = 0;
    flags.lanes = lanes;
    flags.child = null;
    flags.subtreeFlags = 0;
    flags.memoizedProps = null;
    flags.memoizedState = null;
    flags.updateQueue = null;
    flags.dependencies = null;
    flags.stateNode = null;
  } else {
    ({ childLanes: flags.childLanes, lanes: flags.lanes, child: flags.child } = alternate);
    flags.subtreeFlags = 0;
    flags.deletions = null;
    ({ memoizedProps: flags.memoizedProps, memoizedState: flags.memoizedState, updateQueue: flags.updateQueue, type: flags.type, dependencies } = alternate);
    let tmp = null;
    if (null !== dependencies) {
      const obj = {};
      ({ lanes: obj.lanes, firstContext: obj.firstContext } = dependencies);
      tmp = obj;
    }
    flags.dependencies = tmp;
  }
  return flags;
}
function createFiberFromTypeAndProps($$typeof, arg1, children, arg3, arg4, lanes) {
  if ("function" === typeof $$typeof) {
    let num = 0;
    let ErrorResult = children;
    let tmp5 = $$typeof;
    let tmp6 = arg4;
    if (shouldConstruct($$typeof)) {
      num = 1;
      ErrorResult = children;
      tmp5 = $$typeof;
      tmp6 = arg4;
    }
  } else {
    num = 5;
    ErrorResult = children;
    tmp5 = $$typeof;
    tmp6 = arg4;
    if ("string" !== tmp) {
      if (closure_7 === $$typeof) {
        return createFiberFromFragment(children.children, arg4, lanes, arg1);
      } else if (closure_8 === $$typeof) {
        ErrorResult = children;
        tmp5 = $$typeof;
        tmp6 = tmp29;
        num = 8;
        if (0 !== ((arg4 | 8) & 1)) {
          tmp6 = tmp29 | 16;
          ErrorResult = children;
          tmp5 = $$typeof;
          num = 8;
        }
      } else if (closure_9 === $$typeof) {
        const tmp27 = createFiberImplClass(12, children, arg1, arg4 | 2);
        tmp27.elementType = closure_9;
        tmp27.lanes = lanes;
        return tmp27;
      } else if (closure_14 === $$typeof) {
        const tmp22 = createFiberImplClass(13, children, arg1, arg4);
        tmp22.elementType = closure_14;
        tmp22.lanes = lanes;
        return tmp22;
      } else if (closure_15 === $$typeof) {
        const tmp16 = createFiberImplClass(19, children, arg1, arg4);
        tmp16.elementType = closure_15;
        tmp16.lanes = lanes;
        return tmp16;
      } else if (closure_18 === $$typeof) {
        return createFiberFromOffscreen(children, arg4, lanes, arg1);
      } else {
        if ("object" === tmp) {
          if (null !== $$typeof) {
            $$typeof = $$typeof.$$typeof;
            ErrorResult = children;
            tmp5 = $$typeof;
            tmp6 = arg4;
            num = 10;
            if (closure_10 !== $$typeof) {
              ErrorResult = children;
              tmp5 = $$typeof;
              tmp6 = arg4;
              num = 10;
              if (closure_12 !== $$typeof) {
                num = 9;
                ErrorResult = children;
                tmp5 = $$typeof;
                tmp6 = arg4;
                if (closure_11 !== $$typeof) {
                  num = 11;
                  ErrorResult = children;
                  tmp5 = $$typeof;
                  tmp6 = arg4;
                  if (closure_13 !== $$typeof) {
                    num = 14;
                    ErrorResult = children;
                    tmp5 = $$typeof;
                    tmp6 = arg4;
                    if (closure_16 !== $$typeof) {
                      num = 16;
                      ErrorResult = children;
                      tmp5 = null;
                      tmp6 = arg4;
                    }
                  }
                }
              }
            }
          }
        }
        let str = "null";
        if (null !== $$typeof) {
          str = tmp;
        }
        ErrorResult = Error(`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${str}.`);
        num = 29;
        tmp5 = null;
        tmp6 = arg4;
      }
    }
  }
  const tmp35 = createFiberImplClass(num, ErrorResult, arg1, tmp6);
  tmp35.elementType = $$typeof;
  tmp35.type = tmp5;
  tmp35.lanes = lanes;
  return tmp35;
}
function createFiberFromFragment(arg0, arg1, lanes) {
  const tmp = createFiberImplClass(7, arg0, arg3, arg1);
  tmp.lanes = lanes;
  return tmp;
}
function createFiberFromOffscreen(arg0, arg1, lanes) {
  const tmp = createFiberImplClass(22, arg0, arg3, arg1);
  tmp.elementType = closure_18;
  tmp.lanes = lanes;
  const obj = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach() {
      const _current = obj._current;
      if (null === _current) {
        const _Error = Error;
        throw Error("Calling Offscreen.detach before instance handle has been set.");
      } else if (0 === (obj._pendingVisibility & 2)) {
        const tmp3 = closure_1_261(_current, 2);
        if (null !== tmp3) {
          obj._pendingVisibility = obj._pendingVisibility | 2;
          closure_1_445(tmp3, _current, 2);
        }
      }
    },
    attach() {
      const _current = obj._current;
      if (null === _current) {
        const _Error = Error;
        throw Error("Calling Offscreen.detach before instance handle has been set.");
      } else if (0 !== (obj._pendingVisibility & 2)) {
        const tmp3 = closure_1_261(_current, 2);
        if (null !== tmp3) {
          obj._pendingVisibility = obj._pendingVisibility & -3;
          closure_1_445(tmp3, _current, 2);
        }
      }
    }
  };
  tmp.stateNode = obj;
  return tmp;
}
function createFiberFromText(arg0, arg1, lanes) {
  const tmp = createFiberImplClass(6, arg0, null, arg1);
  tmp.lanes = lanes;
  return tmp;
}
function createFiberFromPortal(children, arg1, lanes) {
  const tmp2 = createFiberImplClass(4, null !== children.children ? children.children : [], children.key, arg1);
  tmp2.lanes = lanes;
  tmp2.stateNode = { containerInfo: children.containerInfo, pendingChildren: null, implementation: children.implementation };
  return tmp2;
}
function FiberRootNode(containerInfo, tag, arg2, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.pendingChildren = null;
  this.current = null;
  this.pingCache = null;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.cancelPendingCommit = null;
  this.context = null;
  this.pendingContext = null;
  this.next = null;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.pendingLanes = 0;
  this.suspendedLanes = 0;
  this.pingedLanes = 0;
  this.warmLanes = 0;
  this.expiredLanes = 0;
  this.finishedLanes = 0;
  this.errorRecoveryDisabledLanes = 0;
  this.shellSuspendCounter = 0;
  this.entangledLanes = 0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
}
function createPortal$1(children, containerInfo, implementation) {
  let tmp = null;
  if (3 < arguments.length) {
    tmp = null;
    if (undefined !== arguments[3]) {
      tmp = arguments[3];
    }
  }
  const obj = { $$typeof: closure_6 };
  let text = null;
  if (null != tmp) {
    text = `${tmp}`;
  }
  obj.key = text;
  obj.children = children;
  obj.containerInfo = containerInfo;
  obj.implementation = implementation;
  return obj;
}
function findHostInstance(_reactInternals) {
  _reactInternals = _reactInternals._reactInternals;
  if (undefined === _reactInternals) {
    if ("function" === typeof _reactInternals.render) {
      const _Error2 = Error;
      throw Error("Unable to find node on an unmounted component.");
    } else {
      const _Object = Object;
      const keys = Object.keys(_reactInternals);
      const _Error = Error;
      throw Error("Argument appears to not be a ReactComponent. Keys: " + keys.join(","));
    }
  } else {
    const tmp2 = findCurrentFiberUsingSlowPath(_reactInternals);
    let tmp4 = null;
    if (null !== tmp2) {
      tmp4 = findCurrentHostFiberImpl(tmp2);
    }
    let tmp6 = null;
    if (null !== tmp4) {
      tmp6 = getPublicInstance(tmp4.stateNode);
    }
    return tmp6;
  }
}
function updateContainer(element, current) {
  current = current.current;
  const tmp = requestUpdateLane(current);
  if (null === current.context) {
    current.context = closure_72;
  } else {
    current.pendingContext = closure_72;
  }
  const tmp4 = createUpdate(tmp);
  tmp4.payload = { element };
  let tmp5 = null;
  if (undefined !== arg3) {
    tmp5 = arg3;
  }
  if (null !== tmp5) {
    tmp4.callback = tmp5;
  }
  const tmp6 = enqueueUpdate(current, tmp4, tmp);
  if (null !== tmp6) {
    scheduleUpdateOnFiber(tmp6, current, tmp);
    entangleTransitions(tmp6, current, tmp);
  }
  return tmp;
}
function nativeOnUncaughtError(error, componentStack) {
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  const obj = { errorBoundary: null, error };
  let str = "";
  if (null != componentStack.componentStack) {
    str = componentStack.componentStack;
  }
  obj.componentStack = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    callback4(error);
  }
}
function nativeOnCaughtError(error, errorBoundary) {
  const ReactFiberErrorDialog = get_BatchedBridge.ReactFiberErrorDialog;
  const obj = { errorBoundary: errorBoundary.errorBoundary, error };
  let str = "";
  if (null != errorBoundary.componentStack) {
    str = errorBoundary.componentStack;
  }
  obj.componentStack = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    const _console = console;
    console.error(error);
  }
}
function unmountComponentAtNode(arg0) {
  closure_0 = arg0;
  const value = map2.get(arg0);
  if (value) {
    updateContainer(null, value, undefined, () => {
      closure_1_176.delete(closure_0);
    });
  }
}
const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = getIteratorFn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
let closure_4 = Symbol.for("react.element");
let closure_5 = Symbol.for("react.transitional.element");
let closure_6 = Symbol.for("react.portal");
let closure_7 = Symbol.for("react.fragment");
let closure_8 = Symbol.for("react.strict_mode");
let closure_9 = Symbol.for("react.profiler");
let closure_10 = Symbol.for("react.provider");
let closure_11 = Symbol.for("react.consumer");
const forResult = Symbol.for("react.context");
let closure_13 = Symbol.for("react.forward_ref");
let closure_14 = Symbol.for("react.suspense");
let closure_15 = Symbol.for("react.suspense_list");
let closure_16 = Symbol.for("react.memo");
let closure_17 = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
let closure_18 = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
let closure_19 = Symbol.for("react.memo_cache_sentinel");
let c24 = false;
let closure_25 = Symbol.for("react.client.reference");
let c26 = false;
let c27 = null;
let getFiberCurrentPropsFromNode$1 = null;
getInstanceFromTag = null;
let getNodeFromInstance = null;
let obj = {
  preventDefault() {
    this.defaultPrevented = true;
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.preventDefault) {
        nativeEvent.preventDefault();
      } else if ("unknown" !== typeof nativeEvent.returnValue) {
        nativeEvent.returnValue = false;
      }
      tmp.isDefaultPrevented = functionThatReturnsTrue;
    }
  },
  stopPropagation() {
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.stopPropagation) {
        nativeEvent.stopPropagation();
      } else if ("unknown" !== typeof nativeEvent.cancelBubble) {
        nativeEvent.cancelBubble = true;
      }
      tmp.isPropagationStopped = functionThatReturnsTrue;
    }
  },
  persist() {
    this.isPersistent = functionThatReturnsTrue;
  },
  isPersistent: functionThatReturnsFalse,
  destructor() {
    const self = this;
    for (const key10006 in tmp) {
      let tmp2 = key10006;
      self[key10006] = null;
      continue;
    }
    self.dispatchConfig = null;
    self._targetInst = null;
    self.nativeEvent = null;
    self.isDefaultPrevented = functionThatReturnsFalse;
    self.isPropagationStopped = functionThatReturnsFalse;
    self._dispatchListeners = null;
    self._dispatchInstances = null;
  }
};
obj = assign(SyntheticEvent.prototype, obj);
obj = {
  type: null,
  target: null,
  currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp(timeStamp) {
    timeStamp = timeStamp.timeStamp;
    if (!timeStamp) {
      const _Date = Date;
      timeStamp = Date.now();
    }
    return timeStamp;
  },
  defaultPrevented: null,
  isTrusted: null
};
SyntheticEvent.Interface = obj;
SyntheticEvent.extend = function(arg0) {
  class E {
    constructor() {
      return;
    }
  }
  class Class {
    constructor() {
      return self(...arguments);
    }
  }
  const self = this;
  E.prototype = this.prototype;
  const e = new E();
  assign(e, Class.prototype);
  Class.prototype = e;
  Class.prototype.constructor = Class;
  Class.Interface = assign({}, this.Interface, arg0);
  Class.extend = this.extend;
  addEventPoolingTo(Class);
  return Class;
};
addEventPoolingTo(SyntheticEvent);
let closure_31 = SyntheticEvent.extend({
  touchHistory() {
    return null;
  }
});
let items = ["topTouchStart"];
let items1 = ["topTouchMove"];
let items2 = ["topTouchCancel", "topTouchEnd"];
let items3 = [];
let obj2 = { touchBank: items3, numberActiveTouches: 0, indexOfSingleActiveTouch: -1, mostRecentTimeStamp: 0 };
let closure_35 = {
  instrument(arg0) {
    closure_34 = arg0;
  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != callback) {
      callback(arg0, changedTouches);
    }
    if (isMoveish(arg0)) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if (isStartish(arg0)) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj2.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj2.numberActiveTouches) {
        obj2.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else if ("topTouchEnd" === arg0) {
      const changedTouches2 = changedTouches.changedTouches;
      const item2 = changedTouches2.forEach(recordTouchEnd);
      obj2.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj2.numberActiveTouches) {
        let num2 = 0;
        if (0 < items3.length) {
          while (true) {
            let tmp8 = items3;
            let tmp9 = items3[num2];
            let tmp10 = num2;
            if (null != tmp9) {
              if (tmp9.touchActive) {
                break;
              }
            }
            num2 = num2 + 1;
            let tmp11 = items3;
          }
          obj2.indexOfSingleActiveTouch = num2;
        }
      }
    }
  },
  touchHistory: obj2
};
let c36 = null;
let c37 = 0;
let obj3 = { startShouldSetResponder: { phasedRegistrationNames: { bubbled: "onStartShouldSetResponder", captured: "onStartShouldSetResponderCapture" }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: { bubbled: "onScrollShouldSetResponder", captured: "onScrollShouldSetResponderCapture" }, dependencies: ["topScroll"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { bubbled: "onSelectionChangeShouldSetResponder", captured: "onSelectionChangeShouldSetResponderCapture" }, dependencies: ["topSelectionChange"] }, moveShouldSetResponder: { phasedRegistrationNames: { bubbled: "onMoveShouldSetResponder", captured: "onMoveShouldSetResponderCapture" }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
let obj4 = {
  _getResponder() {
    return c36;
  },
  eventTypes: obj3,
  extractEvents(arg0, arg1, responderIgnoreScroll) {
    let diff1;
    let diff3;
    if (isStartish(arg0)) {
      closure_37 = closure_37 + 1;
    } else if ("topTouchEnd" === arg0) {
      let pooled1 = closure_37;
      if (0 <= closure_37) {
        closure_37 = closure_37 - 1;
      } else {
        return null;
      }
    }
    closure_35.recordTouchTrack(arg0, responderIgnoreScroll);
    let tmp7 = null;
    if (arg1) {
      if ("topScroll" !== arg0) {
        if (0 >= closure_37) {
          if (!isStartish(arg0)) {
            tmp7 = null;
          }
        }
      }
      if (isStartish(arg0)) {
        let scrollShouldSetResponder = obj3.startShouldSetResponder;
      } else if (isMoveish(arg0)) {
        scrollShouldSetResponder = obj3.moveShouldSetResponder;
      } else if ("topSelectionChange" === arg0) {
        scrollShouldSetResponder = obj3.selectionChangeShouldSetResponder;
      } else {
        scrollShouldSetResponder = obj3.scrollShouldSetResponder;
      }
      let tmp18 = arg1;
      if (c36) {
        let num5 = 0;
        let tmp21 = c36;
        let num6 = 0;
        if (c36) {
          do {
            num5 = num5 + 1;
            let tmp22 = getParent$1;
            tmp21 = getParent$1(tmp21);
            num6 = num5;
          } while (tmp21);
        }
        let num7 = 0;
        let tmp23 = arg1;
        let num8 = 0;
        if (arg1) {
          do {
            num7 = num7 + 1;
            let tmp24 = getParent$1;
            tmp23 = getParent$1(tmp23);
            num8 = num7;
          } while (tmp23);
        }
        let tmp25 = tmp20;
        let tmp26 = num6;
        let tmp27 = tmp20;
        let tmp28 = num6;
        if (0 < num6 - num8) {
          do {
            let tmp29 = getParent$1;
            tmp25 = getParent$1(tmp25);
            let diff = tmp26 - 1;
            tmp26 = diff;
            tmp27 = tmp25;
            tmp28 = diff;
            diff1 = diff - num8;
          } while (0 < diff1);
        }
        let tmp32 = arg1;
        let tmp33 = arg1;
        if (0 < num8 - tmp28) {
          do {
            let tmp34 = getParent$1;
            tmp32 = getParent$1(tmp32);
            let diff2 = num8 - 1;
            num8 = diff2;
            tmp33 = tmp32;
            diff3 = diff2 - tmp28;
          } while (0 < diff3);
        }
        let diff4 = tmp37 - 1;
        let tmp39 = diff4;
        if (!+tmp28) {
          let tmp19 = tmp39;
          tmp18 = null;
        } else {
          tmp18 = tmp27;
          tmp19 = diff4;
          while (tmp27 !== tmp33) {
            tmp19 = diff4;
            tmp18 = tmp27;
            if (tmp27 === tmp33.alternate) {
              break;
            } else {
              let tmp43 = getParent$1;
              tmp27 = getParent$1(tmp27);
              tmp33 = getParent$1(tmp33);
              let tmp44 = +diff4;
              diff4 = tmp44 - 1;
              tmp39 = diff4;
              break;
            }
          }
        }
      }
      const pooled = store.getPooled(scrollShouldSetResponder, tmp18, responderIgnoreScroll, arg3);
      pooled.touchHistory = closure_35.touchHistory;
      if (tmp18 === c36) {
        forEachAccumulated(pooled, accumulateTwoPhaseDispatchesSingleSkipTarget);
      } else {
        forEachAccumulated(pooled, accumulateTwoPhaseDispatchesSingle$1);
      }
      ({ _dispatchListeners, _dispatchInstances } = pooled);
      if (isArray(_dispatchListeners)) {
        let num9 = 0;
        if (0 < _dispatchListeners.length) {
          let num11 = 0;
          num9 = 0;
          if (!pooled.isPropagationStopped()) {
            while (!_dispatchListeners[num11](pooled, _dispatchInstances[num11])) {
              let sum = num11 + 1;
              num9 = sum;
              if (sum < _dispatchListeners.length) {
                num11 = sum;
                num9 = sum;
                continue;
              }
            }
            let tmp60 = _dispatchInstances[num11];
            let tmp61 = num11;
            pooled._dispatchInstances = null;
            pooled._dispatchListeners = null;
            if (!pooled.isPersistent()) {
              const constructor = pooled.constructor;
              constructor.release(pooled);
            }
            let tmp6 = tmp61;
            tmp7 = null;
            if (tmp60) {
              tmp6 = tmp61;
              tmp7 = null;
              if (tmp60 !== c36) {
                pooled1 = store;
                pooled1 = obj3;
                pooled1 = store;
                pooled1 = tmp60;
                pooled1 = responderIgnoreScroll;
                pooled1 = arg3;
                pooled1 = store.getPooled(obj3.responderGrant, tmp60, responderIgnoreScroll, arg3);
                pooled1 = closure_35;
                pooled1.touchHistory = closure_35.touchHistory;
                pooled1 = forEachAccumulated;
                pooled1 = accumulateDirectDispatchesSingle$1;
                pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
                pooled1 = executeDirectDispatch;
                pooled1 = true === executeDirectDispatch(pooled1);
                pooled1 = c36;
                if (c36) {
                  const pooled2 = store.getPooled(obj3.responderTerminationRequest, c36, responderIgnoreScroll, arg3);
                  pooled2.touchHistory = closure_35.touchHistory;
                  forEachAccumulated(pooled2, accumulateDirectDispatchesSingle$1);
                  let tmp81 = !pooled2._dispatchListeners;
                  if (!tmp81) {
                    tmp81 = executeDirectDispatch(pooled2);
                  }
                  if (!pooled2.isPersistent()) {
                    const constructor2 = pooled2.constructor;
                    constructor2.release(pooled2);
                  }
                  const getPooled = store.getPooled;
                  if (tmp81) {
                    pooled1 = getPooled(tmp85.responderTerminate, c36, responderIgnoreScroll, arg3);
                    pooled1 = closure_35;
                    pooled1.touchHistory = closure_35.touchHistory;
                    pooled1 = forEachAccumulated;
                    pooled1 = accumulateDirectDispatchesSingle$1;
                    pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
                    pooled1 = accumulate;
                    const items = [pooled1, pooled1];
                    tmp7 = accumulate(undefined, items);
                    pooled1 = changeResponder;
                    pooled1 = changeResponder(tmp60, pooled1);
                    tmp6 = pooled1;
                  } else {
                    const pooled3 = getPooled(tmp85.responderReject, tmp60, responderIgnoreScroll, arg3);
                    pooled3.touchHistory = closure_35.touchHistory;
                    forEachAccumulated(pooled3, accumulateDirectDispatchesSingle$1);
                    tmp7 = accumulate(undefined, pooled3);
                    tmp6 = pooled2;
                  }
                } else {
                  tmp7 = accumulate(undefined, pooled1);
                  changeResponder(tmp60, pooled1);
                  tmp6 = tmp61;
                }
              }
            }
          }
        }
      } else {
        num9 = tmp19;
        if (_dispatchListeners) {
          num9 = tmp19;
          tmp60 = _dispatchInstances;
          tmp61 = tmp19;
        }
      }
    }
    pooled1 = c36;
    if (c36) {
      pooled1 = isStartish;
      pooled1 = isStartish(arg0);
    }
    pooled1 = c36;
    if (c36) {
      pooled1 = isMoveish;
      pooled1 = isMoveish(arg0);
    }
    pooled1 = c36;
    if (c36) {
      pooled1 = "topTouchEnd" === arg0;
      if (!pooled1) {
        pooled1 = "topTouchCancel" === arg0;
      }
    }
    if (pooled1) {
      pooled1 = obj3;
      pooled1 = obj3.responderStart;
    } else if (pooled1) {
      pooled1 = obj3;
      pooled1 = obj3.responderMove;
    } else {
      pooled1 = null;
      if (pooled1) {
        pooled1 = obj3;
        pooled1 = obj3.responderEnd;
      }
    }
    pooled1 = tmp7;
    if (pooled1) {
      pooled1 = store;
      pooled1 = c36;
      pooled1 = store;
      pooled1 = responderIgnoreScroll;
      pooled1 = arg3;
      pooled1 = store.getPooled(pooled1, c36, responderIgnoreScroll, arg3);
      pooled1 = closure_35;
      pooled1.touchHistory = closure_35.touchHistory;
      pooled1 = forEachAccumulated;
      pooled1 = accumulateDirectDispatchesSingle$1;
      pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
      pooled1 = accumulate;
      pooled1 = accumulate(tmp7, pooled1);
    }
    pooled1 = c36;
    if (c36) {
      pooled1 = "topTouchCancel" === arg0;
    }
    let flag = c36;
    if (c36) {
      flag = !pooled1;
    }
    if (flag) {
      pooled1 = "topTouchEnd" === arg0;
      if (!pooled1) {
        pooled1 = "topTouchCancel" === arg0;
      }
      flag = pooled1;
    }
    if (flag) {
      const touches = responderIgnoreScroll.touches;
      flag = true;
      if (touches) {
        flag = true;
        if (0 !== touches.length) {
          let num13 = 0;
          flag = true;
          if (0 < touches.length) {
            while (true) {
              let target = touches[num13].target;
              pooled1 = num13;
              pooled1 = tmp6;
              pooled1 = tmp6;
              if (null !== target) {
                pooled1 = tmp6;
                if (undefined !== target) {
                  pooled1 = tmp6;
                  if (0 !== target) {
                    pooled1 = getInstanceFromTag;
                    pooled1 = getInstanceFromTag(target);
                    pooled1 = c36;
                    if (!pooled1) {
                      let flag2 = false;
                    } else {
                      flag2 = true;
                    }
                    flag = false;
                    if (flag2) {
                      break;
                    }
                  }
                  break;
                }
              }
              pooled1 = num13 + 1;
              tmp6 = pooled1;
              num13 = pooled1;
              flag = true;
              if (pooled1 >= touches.length) {
                break;
              }
            }
          }
        }
      }
    }
    if (pooled1) {
      pooled1 = obj3;
      pooled1 = obj3.responderTerminate;
    } else {
      pooled1 = null;
      if (flag) {
        pooled1 = obj3;
        pooled1 = obj3.responderRelease;
      }
    }
    if (pooled1) {
      pooled1 = store;
      pooled1 = c36;
      pooled1 = store;
      pooled1 = responderIgnoreScroll;
      pooled1 = arg3;
      pooled1 = store.getPooled(pooled1, c36, responderIgnoreScroll, arg3);
      pooled1 = closure_35;
      pooled1.touchHistory = closure_35.touchHistory;
      pooled1 = forEachAccumulated;
      pooled1 = accumulateDirectDispatchesSingle$1;
      pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
      pooled1 = accumulate;
      pooled1 = accumulate(pooled1, pooled1);
      pooled1 = changeResponder;
      pooled1 = changeResponder(null);
    }
    return pooled1;
  },
  GlobalResponderHandler: null,
  injection: obj5
};
let closure_40 = null;
let obj6 = {};
let closure_42 = [];
let closure_43 = {};
let closure_44 = {};
const customBubblingEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customBubblingEventTypes;
const customDirectEventTypes = get_BatchedBridge.ReactNativeViewConfigRegistry.customDirectEventTypes;
closure_40 = slice.call(["ResponderEventPlugin", "ReactNativeBridgeEventPlugin"]);
let result = recomputePluginOrdering();
let obj7 = { ResponderEventPlugin: obj4, ReactNativeBridgeEventPlugin: obj8 };
let flag = false;
let flag2 = false;
let keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  while (keys[tmp] !== undefined) {
    let tmp27 = tmp14;
    if (!obj7.hasOwnProperty(tmp14)) {
      continue;
    } else {
      let tmp15 = obj7[tmp14];
      if (!obj6.hasOwnProperty(tmp14)) {
        if (obj6[tmp14]) {
          let _Error = Error;
          let str = "`.";
          let str2 = "EventPluginRegistry: Cannot inject two different event plugins using the same name, `";
          throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + (tmp14 + "`."));
        } else {
          obj6[tmp14] = tmp15;
          flag = true;
          let tmp17 = tmp15;
          continue;
        }
      } else {
        flag = tmp13;
        let tmp16 = tmp15;
      }
      continue;
    }
    continue;
  }
}
if (flag2) {
  let result1 = recomputePluginOrdering();
}
let map = new Map();
const map1 = new Map();
let c49 = false;
let c50 = null;
let closure_51 = {};
const RCTEventEmitter = get_BatchedBridge.RCTEventEmitter;
RCTEventEmitter.register({
  receiveEvent(target) {
    _receiveRootNodeIDEvent(target, arg1, arg2);
  },
  receiveTouches(arg0, touches) {
    let length;
    let length2;
    if ("topTouchEnd" !== arg0) {
      if ("topTouchCancel" !== arg0) {
        const items = [];
        let num = 0;
        let arr2 = items;
        if (0 < arg2.length) {
          do {
            let arr = items.push(touches[arg2[num]]);
            num = num + 1;
            arr2 = items;
            length = arg2.length;
          } while (num < length);
        }
      }
      for (let num6 = 0; num6 < arr2.length; num6 = num6 + 1) {
        let tmp10 = arr2[num6];
        tmp10.changedTouches = arr2;
        tmp10.touches = touches;
        let target = tmp10.target;
        let tmp11 = null === target;
        let tmp12 = num6;
        if (!tmp11) {
          tmp11 = undefined === target;
        }
        if (!tmp11) {
          tmp11 = 1 > target;
        }
        let tmp13 = null;
        if (!tmp11) {
          tmp13 = target;
        }
        let tmp14 = _receiveRootNodeIDEvent;
        let tmp15 = _receiveRootNodeIDEvent(tmp13, arg0, tmp10);
      }
    }
    const items1 = [];
    let num2 = 0;
    if (0 < arg2.length) {
      do {
        let tmp2 = arg2[num2];
        arr = items1.push(touches[tmp2]);
        touches[tmp2] = null;
        num2 = num2 + 1;
        length2 = arg2.length;
      } while (num2 < length2);
    }
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    if (0 < touches.length) {
      do {
        let tmp4 = touches[num4];
        let tmp5 = num3;
        let tmp6 = num4;
        let sum = num3;
        if (null !== tmp4) {
          let tmp8 = +num3;
          sum = tmp8 + 1;
          touches[tmp8] = tmp4;
        }
        num4 = num4 + 1;
        num3 = sum;
        num5 = sum;
      } while (num4 < touches.length);
    }
    touches.length = num5;
    arr2 = items1;
  }
});
getFiberCurrentPropsFromNode$1 = function getFiberCurrentPropsFromNode$1(_nativeTag) {
  return map1.get(_nativeTag._nativeTag) || null;
};
getNodeFromInstance = function getNodeFromInstance(_dispatchInstances) {
  const stateNode = _dispatchInstances.stateNode;
  let nativeTag = stateNode._nativeTag;
  let tmp = undefined === nativeTag;
  if (tmp) {
    tmp = null != stateNode.canonical;
  }
  let publicInstance = stateNode;
  if (tmp) {
    nativeTag = stateNode.canonical.nativeTag;
    publicInstance = stateNode.canonical.publicInstance;
  }
  if (nativeTag) {
    return publicInstance;
  } else {
    const _Error = Error;
    throw Error("All native instances should have a tag.");
  }
};
const injection = obj4.injection;
let result2 = injection.injectGlobalResponderHandler({
  onChange(arg0, stateNode) {
    if (null !== stateNode) {
      const UIManager2 = get_BatchedBridge.UIManager;
      UIManager2.setJSResponder(stateNode.stateNode._nativeTag, arg2);
    } else {
      const UIManager = get_BatchedBridge.UIManager;
      UIManager.clearJSResponder();
    }
  }
});
let closure_52 = {};
let c53 = null;
let c54 = 0;
let closure_55 = { unsafelyIgnoreFunctions: true };
let closure_56 = (() => {
  class ReactNativeFiberHostComponent {
    constructor(arg0, arg1) {
      this._internalFiberInstanceHandleDEV = undefined;
      this.viewConfig = undefined;
      this._nativeTag = arg0;
      this._children = [];
      this.viewConfig = arg1;
      return;
    }
  }
  const prototype = ReactNativeFiberHostComponent.prototype;
  prototype.blur = function() {
    const TextInputState = closure_1_0(closure_1_1[2]).TextInputState;
    TextInputState.blurTextInput(this);
  };
  prototype.focus = function() {
    const TextInputState = closure_1_0(closure_1_1[2]).TextInputState;
    TextInputState.focusTextInput(this);
  };
  prototype.measure = function(arg0) {
    const UIManager = closure_1_0(closure_1_1[2]).UIManager;
    UIManager.measure(this._nativeTag, closure_1_230(this, arg0));
  };
  prototype.measureInWindow = function(arg0) {
    const UIManager = closure_1_0(closure_1_1[2]).UIManager;
    UIManager.measureInWindow(this._nativeTag, closure_1_230(this, arg0));
  };
  prototype.measureLayout = function(_nativeTag) {
    const self = this;
    if ("number" !== typeof _nativeTag) {
      if (_nativeTag._nativeTag) {
        _nativeTag = _nativeTag._nativeTag;
      }
    }
    if (null != _nativeTag) {
      const UIManager = closure_1_0(closure_1_1[2]).UIManager;
      const _nativeTag2 = self._nativeTag;
      UIManager.measureLayout(_nativeTag2, _nativeTag, closure_1_230(self, arg2), closure_1_230(self, arg1));
      const tmp5 = closure_1_230(self, arg2);
    }
  };
  prototype.setNativeProps = function(arg0) {
    const self = this;
    const tmp = closure_1_229(null, closure_1_52, arg0, this.viewConfig.validAttributes);
    if (null != tmp) {
      const UIManager = closure_1_0(closure_1_1[2]).UIManager;
      UIManager.updateView(self._nativeTag, self.viewConfig.uiViewClassName, tmp);
    }
  };
  return ReactNativeFiberHostComponent;
})();
let closure_57 = null;
let __REACT_DEVTOOLS_GLOBAL_HOOK__2 = null;
if (Math.clz32) {
  const _Math = Math;
  clz32Fallback = Math.clz32;
}
let c62 = 128;
let c63 = 4194304;
const obj11 = {
  getInspectorDataForInstance,
  getInspectorDataForViewTag() {
    throw Error("getInspectorDataForViewTag() is not available in production");
  },
  getInspectorDataForViewAtPoint() {
    throw Error("getInspectorDataForViewAtPoint() is not available in production.");
  }
};
const get = get_BatchedBridge.ReactNativeViewConfigRegistry.get;
let c65 = 3;
let c68 = 0;
const obj12 = { $$typeof: forResult, Provider: null, Consumer: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
let closure_70 = [];
let c71 = -1;
let closure_72 = {};
if ("function" === typeof Object.is) {
  let _Object = Object;
  is = Object.is;
}
const weakMap = new WeakMap();
let closure_75 = createCursor(null);
let closure_76 = createCursor(null);
let closure_77 = createCursor(null);
let closure_78 = createCursor(null);
let c79 = null;
let closure_80 = [];
let c81 = 0;
let c82 = 0;
let c83 = null;
let c84 = null;
let c85 = false;
let c86 = false;
let c87 = false;
let c88 = 0;
let c89 = null;
let c90 = 0;
let c91 = 0;
let c92 = null;
let c93 = false;
let c94 = false;
let closure_96 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
let closure_97 = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.");
let closure_98 = {
  then() {

  }
};
let c99 = null;
let c100 = null;
let c101 = 0;
let closure_102 = createChildReconciler(true);
let closure_103 = createChildReconciler(false);
let closure_104 = createCursor(null);
let closure_106 = createCursor(null);
let c107 = null;
let c109 = 0;
let c110 = null;
let c111 = null;
let c112 = null;
let c113 = false;
let c114 = false;
let c115 = false;
let c116 = 0;
let c117 = null;
let c118 = 0;
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
const obj13 = { readContext, use, useCallback: throwInvalidHookError, useContext: throwInvalidHookError, useEffect: throwInvalidHookError, useImperativeHandle: throwInvalidHookError, useLayoutEffect: throwInvalidHookError, useInsertionEffect: throwInvalidHookError, useMemo: throwInvalidHookError, useReducer: throwInvalidHookError, useRef: throwInvalidHookError, useState: throwInvalidHookError, useDebugValue: throwInvalidHookError, useDeferredValue: throwInvalidHookError, useTransition: throwInvalidHookError, useSyncExternalStore: throwInvalidHookError, useId: throwInvalidHookError, useCacheRefresh: throwInvalidHookError, useMemoCache: throwInvalidHookError, useHostTransitionStatus: throwInvalidHookError, useFormState: throwInvalidHookError, useActionState: throwInvalidHookError, useOptimistic: throwInvalidHookError };
const obj14 = {
  readContext,
  use,
  useCallback(arg0, arg1) {
    const items = [arg0, ];
    let tmp2 = null;
    if (undefined !== arg1) {
      tmp2 = arg1;
    }
    items[1] = tmp2;
    mountWorkInProgressHook().memoizedState = items;
    return arg0;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle(queue, c100, arr) {
    let combined = null;
    if (null !== arr) {
      combined = null;
      if (undefined !== arr) {
        const items = [queue];
        combined = arr.concat(items);
      }
    }
    mountEffectImpl(4194308, 4, imperativeHandleEffect.bind(null, c100, queue), combined);
  },
  useLayoutEffect(arg0, arg1) {
    mountEffectImpl(4194308, 4, arg0, arg1);
  },
  useInsertionEffect(arg0, arg1) {
    mountEffectImpl(4, 2, arg0, arg1);
  },
  useMemo(arg0, arg1) {
    let tmp3 = null;
    if (undefined !== arg1) {
      tmp3 = arg1;
    }
    const tmp4 = arg0();
    if (c115) {
      setIsStrictModeForDevtools(true);
      try {
        arg0();
        setIsStrictModeForDevtools(false);
      } catch (tmp10) {
        setIsStrictModeForDevtools(false);
        throw tmp10;
      }
    }
    const items = [tmp4, tmp3];
    mountWorkInProgressHook().memoizedState = items;
    return tmp4;
  },
  useReducer(lastRenderedReducer) {
    const tmp2 = mountWorkInProgressHook();
    if (undefined !== arg2) {
      const tmp6 = arg2(arg1);
      let tmp3 = tmp6;
      if (c115) {
        setIsStrictModeForDevtools(true);
        try {
          arg2(arg1);
          setIsStrictModeForDevtools(false);
          tmp3 = tmp6;
        } catch (tmp14) {
          setIsStrictModeForDevtools(false);
          throw tmp14;
        }
      }
    } else {
      tmp3 = arg1;
    }
    tmp2.baseState = tmp3;
    tmp2.memoizedState = tmp3;
    const obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer, lastRenderedState: tmp3 };
    tmp2.queue = obj;
    const bindResult = dispatchReducerAction.bind(null, c110, obj);
    obj.dispatch = bindResult;
    const items = [tmp2.memoizedState, bindResult];
    return items;
  },
  useRef(current) {
    const obj = { current };
    mountWorkInProgressHook().memoizedState = obj;
    return obj;
  },
  useState(arg0) {
    const tmp = mountStateImpl(arg0);
    const queue = tmp.queue;
    const bindResult = dispatchSetState.bind(null, c110, queue);
    queue.dispatch = bindResult;
    const items = [tmp.memoizedState, bindResult];
    return items;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    return mountDeferredValueImpl(mountWorkInProgressHook(), arg0, arg1);
  },
  useTransition() {
    const bindResult = startTransition.bind(null, c110, mountStateImpl(false).queue, true, false);
    mountWorkInProgressHook().memoizedState = bindResult;
    const items = [false, bindResult];
    return items;
  },
  useSyncExternalStore(bindResult1, getSnapshot) {
    const tmp2 = mountWorkInProgressHook();
    const tmp3 = getSnapshot();
    if (null === c147) {
      const _Error = Error;
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    } else {
      if (0 === (c149 & 60)) {
        pushStoreConsistencyCheck(tmp, getSnapshot, tmp3);
      }
      tmp2.memoizedState = tmp3;
      let obj = { value: tmp3, getSnapshot };
      tmp2.queue = obj;
      const items = [bindResult1];
      mountEffect(subscribeToStore.bind(null, tmp, obj, bindResult1), items);
      tmp.flags = tmp.flags | 2048;
      obj = { destroy: undefined };
      pushEffect(9, updateStoreInstance.bind(null, tmp, obj, tmp3, getSnapshot), obj, null);
      return tmp3;
    }
  },
  useId() {
    closure_118 = str + 1;
    const text = `${`:${c147.identifierPrefix}` + "r" + str.toString(32)}:`;
    mountWorkInProgressHook().memoizedState = text;
    return `${`:${c147.identifierPrefix}` + "r" + +closure_118.toString(32)}:`;
  },
  useCacheRefresh() {
    const bindResult = refreshCache.bind(null, c110);
    mountWorkInProgressHook().memoizedState = bindResult;
    return bindResult;
  },
  useMemoCache,
  useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  (baseState) => {
    const tmp = mountWorkInProgressHook();
    tmp.baseState = baseState;
    tmp.memoizedState = baseState;
    const obj = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    tmp.queue = obj;
    const bindResult = dispatchOptimisticSetState.bind(null, c110, true, obj);
    obj.dispatch = bindResult;
    const items = [baseState, bindResult];
    return items;
  }
};
const obj15 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState() {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    return updateDeferredValueImpl(updateWorkInProgressHook(), _null4.memoizedState, arg0, arg1);
  },
  useTransition() {
    const first = updateReducer(basicStateReducer)[0];
    let tmp2 = first;
    if ("boolean" !== typeof first) {
      tmp2 = useThenable(first);
    }
    const items = [tmp2, updateWorkInProgressHook().memoizedState];
    return items;
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useCacheRefresh: updateRefresh,
  useMemoCache,
  useHostTransitionStatus,
  useFormState: updateActionState,
  useActionState: updateActionState,
  (arg0, arg1) => updateOptimisticImpl(updateWorkInProgressHook(), undefined, arg0, arg1)
};
const obj16 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState() {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    const tmp = updateWorkInProgressHook();
    if (null === _null4) {
      let tmp7 = mountDeferredValueImpl(tmp, arg0, arg1);
    } else {
      tmp7 = updateDeferredValueImpl(tmp, _null4.memoizedState, arg0, arg1);
    }
    return tmp7;
  },
  useTransition() {
    const first = rerenderReducer(basicStateReducer)[0];
    let tmp2 = first;
    if ("boolean" !== typeof first) {
      tmp2 = useThenable(first);
    }
    const items = [tmp2, updateWorkInProgressHook().memoizedState];
    return items;
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useCacheRefresh: updateRefresh,
  useMemoCache,
  useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  (baseState) => {
    const tmp = updateWorkInProgressHook();
    if (null !== c111) {
      return updateOptimisticImpl(tmp, undefined, baseState, arg1);
    } else {
      tmp.baseState = baseState;
      const items = [baseState, tmp.queue.dispatch];
      return items;
    }
  }
};
let closure_124 = {
  isMounted(_reactInternals) {
    _reactInternals = _reactInternals._reactInternals;
    let flag = false;
    if (_reactInternals) {
      flag = getNearestMountedFiber(_reactInternals) === _reactInternals;
    }
    return flag;
  },
  enqueueSetState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.payload = payload;
    let tmp3 = undefined !== callback;
    if (tmp3) {
      tmp3 = null !== callback;
    }
    if (tmp3) {
      tmp2.callback = callback;
    }
    const tmp5 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _reactInternals, tmp);
      entangleTransitions(tmp5, _reactInternals, tmp);
    }
  },
  enqueueReplaceState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.tag = 1;
    tmp2.payload = payload;
    let tmp3 = undefined !== callback;
    if (tmp3) {
      tmp3 = null !== callback;
    }
    if (tmp3) {
      tmp2.callback = callback;
    }
    const tmp5 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _reactInternals, tmp);
      entangleTransitions(tmp5, _reactInternals, tmp);
    }
  },
  enqueueForceUpdate(_reactInternals, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.tag = 2;
    let tmp3 = undefined !== callback;
    if (tmp3) {
      tmp3 = null !== callback;
    }
    if (tmp3) {
      tmp2.callback = callback;
    }
    const tmp5 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _reactInternals, tmp);
      entangleTransitions(tmp5, _reactInternals, tmp);
    }
  }
};
let closure_125 = "function" === typeof reportError ? reportError : ((message) => {
  if ("object" === typeof window) {
    const _window = window;
    if ("function" === typeof window.ErrorEvent) {
      const _window2 = window;
      const obj = { bubbles: true, cancelable: true };
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
let closure_126 = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.");
let c127 = false;
let closure_128 = { dehydrated: null, treeContext: null, retryLane: 0 };
let closure_129 = createCursor(null);
let c130 = null;
let c131 = null;
let closure_132 = "undefined" !== typeof AbortController ? AbortController : (function() {
  closure_0 = [];
  const obj = {
    aborted: false,
    addEventListener(arg0, arg1) {

    }
  };
  this.signal = obj;
  this.abort = () => {
    obj.aborted = true;
    const item = arr.forEach((arg0) => arg0());
  };
});
const obj17 = { $$typeof: forResult, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
let S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = (arg0, arg1) => {
  let tmp = "object" === typeof arg1;
  if (tmp) {
    tmp = null !== arg1;
  }
  if (tmp) {
    tmp = "function" === typeof arg1.then;
  }
  if (tmp) {
    entangleAsyncAction(undefined, arg1);
  }
  if (null !== S) {
    S(arg0, arg1);
  }
};
let closure_135 = createCursor(null);
let c136 = false;
let c137 = false;
let closure_138 = "function" === typeof WeakSet ? WeakSet : Set;
let c139 = null;
let c140 = false;
let c141 = null;
let c142 = false;
let c143 = 8192;
let closure_144 = {
  getCacheForType(arg0) {
    const tmp = readContext(obj17);
    const data = tmp.data;
    let value = data.get(arg0);
    if (undefined === value) {
      const tmp3 = arg0();
      const data2 = tmp.data;
      const result = data2.set(arg0, tmp3);
      value = tmp3;
    }
    return value;
  }
};
let closure_145 = "function" === typeof WeakMap ? WeakMap : Map;
let c146 = 0;
let c147 = null;
let c148 = null;
let c149 = 0;
let c150 = 0;
let c151 = null;
let c152 = false;
let c153 = false;
let c154 = false;
let c155 = 0;
let c156 = 0;
let c157 = 0;
let c158 = 0;
let c159 = 0;
let c160 = 0;
let c161 = 0;
let c162 = null;
let c163 = null;
let c164 = false;
let c165 = 0;
let c167 = null;
let c168 = null;
let c169 = false;
let c170 = null;
let c171 = 0;
let c172 = 0;
let c173 = null;
let c174 = 0;
let c175 = null;
const version = getIteratorFn.version;
if ("19.0.0" !== version) {
  let _Error3 = Error;
  throw Error("Incompatible React versions: The \"react\" and \"react-native-renderer\" packages must have the exact same version. Instead got:\n  - react:                  " + (version + "\n  - react-native-renderer:  19.0.0\nLearn more: https://react.dev/warnings/version-mismatch"));
} else if ("function" !== typeof get_BatchedBridge.ReactFiberErrorDialog.showErrorDialog) {
  let _Error2 = Error;
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(arg0, arg1) {
    c146 = c146 | 1;
    try {
      c146 = tmp3;
      if (0 === tmp3) {
        closure_166 = push2.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
        const obj = push2;
      }
      return arg0(arg1);
    } catch (tmp10) {
      c146 = tmp;
      if (0 === tmp) {
        closure_166 = push2.unstable_now() + 500;
        flushSyncWorkAcrossRoots_impl(0, true);
        obj2 = push2;
      }
      throw tmp10;
    }
  };
  const _Map = Map;
  const map2 = new Map();
  const obj18 = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-native-renderer", currentDispatcherRef: __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, findFiberByHostInstance: getInstanceFromTag, reconcilerVersion: "19.0.0" };
  if (null !== obj11) {
    tmp32.rendererConfig = obj11;
  }
  if ("undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    __REACT_DEVTOOLS_GLOBAL_HOOK__2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.isDisabled) {
      if (tmp25.supportsFiber) {
        closure_57 = __REACT_DEVTOOLS_GLOBAL_HOOK__2.inject(obj18);
      }
    }
  }
  exports.createPortal = (arg0, arg1) => {
    let tmp2 = null;
    if (2 < arguments.length) {
      tmp2 = null;
      if (undefined !== arguments[2]) {
        tmp2 = arguments[2];
      }
    }
    return createPortal$1(arg0, arg1, null, tmp2);
  };
  exports.dispatchCommand = (_nativeTag, blur, items) => {
    if (null != _nativeTag._nativeTag) {
      _nativeTag = _nativeTag._nativeTag;
    } else {
      _nativeTag = get_BatchedBridge.getNativeTagFromPublicInstance(_nativeTag);
      const obj = get_BatchedBridge;
    }
    if (null != _nativeTag) {
      const nodeFromPublicInstance = get_BatchedBridge.getNodeFromPublicInstance(_nativeTag);
      if (null != nodeFromPublicInstance) {
        globalThis.nativeFabricUIManager.dispatchCommand(nodeFromPublicInstance, blur, items);
      } else {
        const UIManager = get_BatchedBridge.UIManager;
        const result = UIManager.dispatchViewManagerCommand(_nativeTag, blur, items);
      }
      obj2 = get_BatchedBridge;
    }
  };
  exports.findHostInstance_DEPRECATED = (arg0) => {
    canonical = arg0;
    if (null == arg0) {
      return null;
    } else {
      if (!canonical.canonical) {
        publicInstance = canonical;
        if (!canonical._nativeTag) {
          publicInstance = findHostInstance(canonical);
        }
      }
      ({ canonical, publicInstance } = canonical);
    }
  };
  exports.findNodeHandle = (_nativeTag) => {
    if (null == _nativeTag) {
      return null;
    } else if ("number" === typeof _nativeTag) {
      return _nativeTag;
    } else if (_nativeTag._nativeTag) {
      return _nativeTag._nativeTag;
    } else {
      if (null != _nativeTag.canonical) {
        if (null != _nativeTag.canonical.nativeTag) {
          return _nativeTag.canonical.nativeTag;
        }
      }
      const nativeTagFromPublicInstance = get_BatchedBridge.getNativeTagFromPublicInstance(_nativeTag);
      if (nativeTagFromPublicInstance) {
        return nativeTagFromPublicInstance;
      } else {
        const tmp5 = findHostInstance(_nativeTag);
        if (null == tmp5) {
          return tmp5;
        } else if (null != tmp5._nativeTag) {
          _nativeTag = tmp5._nativeTag;
        } else {
          _nativeTag = get_BatchedBridge.getNativeTagFromPublicInstance(tmp5);
          obj2 = get_BatchedBridge;
        }
      }
      const obj = get_BatchedBridge;
    }
  };
  exports.getInspectorDataForInstance = getInspectorDataForInstance;
  class SyntheticEvent {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      this.dispatchConfig = global;
      this._targetInst = require;
      this.nativeEvent = importDefault;
      this._dispatchListeners = null;
      this._dispatchInstances = null;
      Interface = this.constructor.Interface;
      for (const key10012 in Interface) {
        tmp5 = key10012;
        if (!Interface.hasOwnProperty(key10012)) {
          continue;
        } else {
          tmp = Interface[key10012];
          if (tmp) {
            self[key10012] = tmp(arg2);
            tmp4 = tmp;
            continue;
          } else {
            if ("target" === key10012) {
              self.target = arg3;
              tmp3 = tmp;
              continue;
            } else {
              self[key10012] = arg2[key10012];
              tmp2 = tmp;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      if (null != importDefault.defaultPrevented) {
        defaultPrevented = importDefault.defaultPrevented;
      } else {
        flag = false;
        defaultPrevented = false === importDefault.returnValue;
      }
      self.isDefaultPrevented = defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse;
      self.isPropagationStopped = functionThatReturnsFalse;
      return self;
    }
  }
  exports.render = (arg0, arg1, arg2, onUncaughtError) => {
    let value = map2.get(arg1);
    if (!value) {
      onUncaughtError = nativeOnUncaughtError;
      let onCaughtError = nativeOnCaughtError;
      let onRecoverableError = defaultOnRecoverableError;
      let tmp2 = onUncaughtError;
      if (onUncaughtError) {
        tmp2 = undefined !== onUncaughtError.onUncaughtError;
      }
      if (tmp2) {
        onUncaughtError = onUncaughtError.onUncaughtError;
      }
      let tmp3 = onUncaughtError;
      if (onUncaughtError) {
        tmp3 = undefined !== onUncaughtError.onCaughtError;
      }
      if (tmp3) {
        onCaughtError = onUncaughtError.onCaughtError;
      }
      let tmp4 = onUncaughtError;
      if (onUncaughtError) {
        tmp4 = undefined !== onUncaughtError.onRecoverableError;
      }
      if (tmp4) {
        onRecoverableError = onUncaughtError.onRecoverableError;
      }
      const prototype = FiberRootNode.prototype;
      const tmp13 = new FiberRootNode(arg1, 0, false, "", onUncaughtError, onCaughtError, onRecoverableError, null);
      const tmp18 = createFiberImplClass(3, null, null, 0);
      tmp13.current = tmp18;
      tmp18.stateNode = tmp13;
      const tmp20 = createCache();
      tmp20.refCount = tmp20.refCount + 1;
      tmp13.pooledCache = tmp20;
      tmp20.refCount = tmp20.refCount + 1;
      const obj = { element: null, isDehydrated: false, cache: tmp20 };
      tmp18.memoizedState = obj;
      initializeUpdateQueue(tmp18);
      const result = map2.set(arg1, tmp13);
      value = tmp13;
    }
    updateContainer(arg0, value, undefined, arg2);
    const current = value.current;
    let stateNode = null;
    if (current.child) {
      const tag = current.child.tag;
      if (27 !== tag) {
        if (5 !== tag) {
          stateNode = current.child.stateNode;
        }
      }
      stateNode = getPublicInstance(current.child.stateNode);
    }
    return stateNode;
  };
  exports.sendAccessibilityEvent = (_nativeTag) => {
    if (null != _nativeTag._nativeTag) {
      _nativeTag = _nativeTag._nativeTag;
    } else {
      _nativeTag = get_BatchedBridge.getNativeTagFromPublicInstance(_nativeTag);
      const obj = get_BatchedBridge;
    }
    if (null != _nativeTag) {
      const nodeFromPublicInstance = get_BatchedBridge.getNodeFromPublicInstance(_nativeTag);
      if (null != nodeFromPublicInstance) {
        const result = globalThis.nativeFabricUIManager.sendAccessibilityEvent(nodeFromPublicInstance, arg1);
      } else {
        const result1 = get_BatchedBridge.legacySendAccessibilityEvent(_nativeTag, arg1);
        obj3 = get_BatchedBridge;
      }
      obj2 = get_BatchedBridge;
    }
  };
  exports.unmountComponentAtNode = unmountComponentAtNode;
  exports.unmountComponentAtNodeAndRemoveContainer = (arg0) => {
    unmountComponentAtNode(arg0);
    const UIManager = get_BatchedBridge.UIManager;
    UIManager.removeRootView(arg0);
  };
  exports.unstable_batchedUpdates = batchedUpdates$1;
}
