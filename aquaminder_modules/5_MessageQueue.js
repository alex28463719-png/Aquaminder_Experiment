// Module ID: 5
// Function ID: 171
// Name: MessageQueue
// Dependencies: [1, 6, 12, 13, 17, 18, 19, 20]

// Module 5 (MessageQueue)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);

export default (() => {
  class MessageQueue {
    constructor() {
      defaultResult = closure_1_4.default(this, MessageQueue);
      this._lazyCallableModules = {};
      items = [, , , ];
      items[0] = [];
      items[1] = [];
      items[2] = [];
      items[3] = 0;
      this._queue = items;
      map = new Map();
      this._successCallbacks = map;
      map1 = new Map();
      this._failureCallbacks = map1;
      this._callID = 0;
      this._lastFlush = 0;
      this._eventLoopStartTime = Date.now();
      this._reactNativeMicrotasksCallback = null;
      callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue;
      this.callFunctionReturnFlushedQueue = callFunctionReturnFlushedQueue.bind(this);
      flushedQueue = this.flushedQueue;
      this.flushedQueue = flushedQueue.bind(this);
      invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue;
      this.invokeCallbackAndReturnFlushedQueue = invokeCallbackAndReturnFlushedQueue.bind(this);
      return;
    }
  }
  let obj = {
    key: "callFunctionReturnFlushedQueue",
    value: function callFunctionReturnFlushedQueue(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      const self = this;
      this.__guard(() => {
        self.__callFunction(closure_0, closure_1, closure_2);
      });
      return this.flushedQueue();
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "invokeCallbackAndReturnFlushedQueue",
    value: function invokeCallbackAndReturnFlushedQueue(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const self = this;
      this.__guard(() => {
        self.__invokeCallback(closure_0, closure_1);
      });
      return this.flushedQueue();
    }
  };
  items[1] = obj;
  obj = {
    key: "flushedQueue",
    value: function flushedQueue() {
      const self = this;
      this.__guard(() => {
        const result = self.__callReactNativeMicrotasks();
      });
      const _queue = this._queue;
      const items = [[], [], [], this._callID];
      this._queue = items;
      let tmp2 = null;
      if (_queue[0].length) {
        tmp2 = _queue;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEventLoopRunningTime",
    value: function getEventLoopRunningTime() {
      return Date.now() - this._eventLoopStartTime;
    }
  };
  items[4] = {
    key: "registerCallableModule",
    value: function registerCallableModule(RNCWebViewMessagingModule, getIteratorFn) {
      closure_0 = getIteratorFn;
      this._lazyCallableModules[RNCWebViewMessagingModule] = () => closure_0;
    }
  };
  items[5] = {
    key: "registerLazyCallableModule",
    value: function registerLazyCallableModule(RNCWebViewMessagingModule, fn) {
      closure_1 = fn;
      this._lazyCallableModules[RNCWebViewMessagingModule] = () => {
        if (callback) {
          closure_0 = callback();
          callback = null;
        }
        return closure_0;
      };
    }
  };
  items[6] = {
    key: "getCallableModule",
    value: function getCallableModule(closure_0) {
      let tmpResult = null;
      if (this._lazyCallableModules[closure_0]) {
        tmpResult = tmp();
      }
      return tmpResult;
    }
  };
  items[7] = {
    key: "callNativeSyncHook",
    value: function callNativeSyncHook(closure_0, closure_1, substr, arg3, arg4) {
      this.processCallbacks(closure_0, closure_1, substr, arg3, arg4);
      return MessageQueue.nativeCallSyncHook(closure_0, closure_1, substr);
    }
  };
  items[8] = {
    key: "processCallbacks",
    value: function processCallbacks(array, closure_1, arr, arg3, arg4) {
      const self = this;
      if (arg3) {
        if (arg3) {
          arr.push(self._callID << 1);
        }
        if (arg4) {
          arr.push(self._callID << 1 | 1);
        }
        const result = self._successCallbacks.set(self._callID, arg4);
        const result1 = self._failureCallbacks.set(self._callID, arg3);
        const _failureCallbacks = self._failureCallbacks;
        const _successCallbacks = self._successCallbacks;
      }
      self._callID = self._callID + 1;
    }
  };
  items[9] = {
    key: "enqueueNativeCall",
    value: function enqueueNativeCall(array, closure_1, closure_0, arg3, arg4) {
      const self = this;
      this.processCallbacks(array, closure_1, closure_0, arg3, arg4);
      const first = this._queue[0];
      first.push(array);
      let arr1 = this._queue[1];
      arr1.push(closure_1);
      arr1 = this._queue[2].push(closure_0);
      const timestamp = Date.now();
      if (MessageQueue.nativeFlushQueueImmediate) {
        if (timestamp - self._lastFlush >= 5) {
          const items = [[], [], [], self._callID];
          self._queue = items;
          self._lastFlush = timestamp;
          const result = MessageQueue.nativeFlushQueueImmediate(self._queue);
        }
      }
      let obj = closure_1_1(closure_1_2[4]);
      obj.counterEvent("pending_js_to_native_queue", self._queue[0].length);
      if (self.__spy) {
        obj = { type: 1, module: "" + array, method: closure_1, args: closure_0 };
        self.__spy(obj);
      }
    }
  };
  items[10] = {
    key: "createDebugLookup",
    value: function createDebugLookup(arg0, arg1, arg2) {

    }
  };
  items[11] = {
    key: "setReactNativeMicrotasksCallback",
    value: function setReactNativeMicrotasksCallback(callReactNativeMicrotasks) {
      this._reactNativeMicrotasksCallback = callReactNativeMicrotasks;
    }
  };
  items[12] = {
    key: "__guard",
    value: function __guard(arg0) {
      if (this.__shouldPauseOnThrow()) {
        arg0();
      } else {
        try {
          arg0();
        } catch (tmp3) {
          closure_1_1(closure_1_2[5]).default.reportFatalError(tmp3);
          const _default = closure_1_1(closure_1_2[5]).default;
        }
      }
    }
  };
  items[13] = {
    key: "__shouldPauseOnThrow",
    value: function __shouldPauseOnThrow() {
      let tmp = typeof globalThis.DebuggerInternal !== "undefined";
      if (tmp) {
        tmp = globalThis.DebuggerInternal.shouldPauseOnThrow === true;
      }
      return tmp;
    }
  };
  items[14] = {
    key: "__callReactNativeMicrotasks",
    value: function __callReactNativeMicrotasks() {
      const self = this;
      closure_1_1(closure_1_2[4]).beginEvent("JSTimers.callReactNativeMicrotasks()");
      try {
        if (self._reactNativeMicrotasksCallback != null) {
          const result = self._reactNativeMicrotasksCallback();
        }
        closure_1_1(closure_1_2[4]).endEvent();
      } catch (tmp9) {
        closure_1_1(closure_1_2[tmp2]).endEvent();
        throw tmp9;
      }
    }
  };
  items[15] = {
    key: "__callFunction",
    value: function __callFunction(closure_0, closure_1, closure_2) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      const beginEvent = closure_1_1(closure_1_2[4]).beginEvent;
      if (this.__spy) {
        const _HermesInternal2 = HermesInternal;
        beginEvent("" + closure_0 + "." + closure_1 + "(" + closure_1_1(closure_1_2[6]).default(closure_2) + ")");
        const tmp3Result = closure_1_1(closure_1_2[6]);
      } else {
        const _HermesInternal = HermesInternal;
        beginEvent("" + closure_0 + "." + closure_1 + "(...)");
      }
      try {
        if (self.__spy) {
          const obj = { type: 0, module: closure_0, method: closure_1, args: closure_2 };
          self.__spy(obj);
        }
        const callableModule = self.getCallableModule(closure_0);
        if (!callableModule) {
          const _Object = Object;
          const keys = Object.keys(self._lazyCallableModules);
          const joined = keys.join(", ");
          let str9 = "false";
          if (MessageQueue.RN$Bridgeless === true) {
            str9 = "true";
          }
          const _HermesInternal3 = HermesInternal;
          closure_1_1(closure_1_2[7])(false, "Failed to call into JavaScript module method " + closure_0 + "." + closure_1 + "(). Module has not been registered as callable. Bridgeless Mode: " + str9 + ". Registered callable JavaScript modules (n = " + keys.length + "): " + joined + ".\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.");
          const tmp24 = closure_1_1(closure_1_2[7]);
        }
        if (!callableModule[closure_1]) {
          const _HermesInternal4 = HermesInternal;
          closure_1_1(closure_1_2[7])(false, "Failed to call into JavaScript module method " + closure_0 + "." + closure_1 + "(). Module exists, but the method is undefined.");
          const tmp35 = closure_1_1(closure_1_2[7]);
        }
        callableModule[closure_1].apply(callableModule, closure_2);
        closure_1_1(closure_1_2[4]).endEvent();
      } catch (tmp44) {
        closure_1_1(closure_1_2[tmp2]).endEvent();
        throw tmp44;
      }
    }
  };
  items[16] = {
    key: "__invokeCallback",
    value: function __invokeCallback(closure_0, closure_1) {
      const self = this;
      this._lastFlush = Date.now();
      this._eventLoopStartTime = this._lastFlush;
      if (closure_0 & 1) {
        let value = self._successCallbacks.get(tmp);
        const _successCallbacks = self._successCallbacks;
      } else {
        value = self._failureCallbacks.get(tmp);
        const _failureCallbacks = self._failureCallbacks;
      }
    }
  };
  const items1 = [
    {
      key: "spy",
      value: function spy(__spy) {
        if (__spy === true) {
          MessageQueue.prototype.__spy = (type) => {
            let str = "JS->N";
            if (type.type === 0) {
              str = "N->JS";
            }
            let str2 = "";
            const combined = "" + str + " : ";
            if (type.module != null) {
              str2 = `${type.module}.`;
            }
            const sum = combined + "" + str2 + type.method;
            console.log(sum + "(" + JSON.stringify(type.args) + ")");
          };
        } else if (__spy === false) {
          MessageQueue.prototype.__spy = null;
        } else {
          MessageQueue.prototype.__spy = __spy;
        }
      }
    }
  ];
  return closure_5.default(MessageQueue, items, items1);
})();
