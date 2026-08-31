// Module ID: 505
// Function ID: 5505
// Name: BleManager
// Dependencies: [1, 6, 38, 363, 12, 13, 2, 506, 507, 503, 508, 509, 510, 504]

// Module 505 (BleManager)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _slicedToArray from "_slicedToArray" /* 38 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;
import closure_7 from "get registerCallableModule" /* 2 */;

let closure_2 = module_1(_toConsumableArray);
let closure_3 = module_1(_slicedToArray);
let closure_4 = module_1(asyncGeneratorStep);
let closure_5 = module_1(_classCallCheck);
let closure_6 = module_1(_defineProperties);
let tmp3 = (() => {
  class BleManager {
    constructor() {
      self = this;
      self = this;
      if (arguments.length > 0) {
        if (arguments[0] !== undefined) {
          first = arguments[0];
        }
        tmp = closure_1_5;
        tmp2 = self;
        defaultResult = closure_1_5.default(self, self);
        tmp4 = null;
        if (self.sharedInstance !== null) {
          tmp15 = self;
          return self.sharedInstance;
        } else {
          tmp16 = BleManager;
          tmp17 = closure_1_1;
          num2 = 7;
          EventEmitter = BleManager(closure_1_1[7]).EventEmitter;
          prototype = EventEmitter.prototype;
          tmp18 = new.target;
          tmp19 = new.target;
          eventEmitter = new EventEmitter(BleManager(closure_1_1[7]).BleModule);
          tmp21 = eventEmitter;
          self._eventEmitter = eventEmitter;
          self._uniqueId = 0;
          self._activePromises = {};
          self._activeSubscriptions = {};
          restoreStateFunction = first.restoreStateFunction;
          if (restoreStateFunction != null) {
            if (first.restoreStateIdentifier != null) {
              ({ _activeSubscriptions, _eventEmitter } = self);
              tmp6 = BleManager;
              tmp7 = closure_1_1;
              _nextUniqueIDResult = self._nextUniqueID();
              _activeSubscriptions[_nextUniqueIDResult] = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.RestoreStateEvent, (connectedPeripherals) => {
                if (connectedPeripherals == null) {
                  restoreStateFunction(null);
                } else {
                  const obj = {};
                  connectedPeripherals = connectedPeripherals.connectedPeripherals;
                  obj.connectedPeripherals = connectedPeripherals.map((merged) => {
                    const device = new BleManager(closure_3_1[8]).Device(merged, closure_1_0);
                    return device;
                  });
                  restoreStateFunction(obj);
                }
              });
            }
          }
          if (first.errorCodesToMessagesMapping) {
            BleErrorCodeMessage = first.errorCodesToMessagesMapping;
          } else {
            tmp8 = BleManager;
            tmp9 = closure_1_1;
            num = 9;
            BleErrorCodeMessage = BleManager(closure_1_1[9]).BleErrorCodeMessage;
          }
          self._errorCodesToMessagesMapping = BleErrorCodeMessage;
          tmp10 = BleManager;
          tmp11 = closure_1_1;
          BleModule = BleManager(closure_1_1[7]).BleModule;
          prop = first.restoreStateIdentifier;
          if (!prop) {
            prop = null;
          }
          client = BleModule.createClient(prop);
          tmp14 = self;
          self.sharedInstance = self;
          return;
        }
      }
      first = {};
      return;
    }
  }
  let obj = {
    key: "_destroyPromises",
    value: function _destroyPromises() {
      const obj = { errorCode: BleManager(closure_1_1[9]).BleErrorCode.BluetoothManagerDestroyed, attErrorCode: null, iosErrorCode: null, androidErrorCode: null, reason: null };
      const bleError = new BleManager(closure_1_1[9]).BleError(obj, this._errorCodesToMessagesMapping);
      for (const key10022 in this._activePromises) {
        let tmp2 = key10022;
        let _activePromises = this._activePromises;
        let tmp3 = _activePromises[key10022](bleError);
        continue;
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "_destroySubscriptions",
    value: function _destroySubscriptions() {
      for (const key10003 in this._activeSubscriptions) {
        let tmp2 = key10003;
        let obj = tmp._activeSubscriptions[key10003];
        let removeResult = obj.remove();
        continue;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "destroy",
    value: (() => {
      closure_0 = closure_1_4.default(async function() {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        if (self._scanEventSubscription != null) {
          const _scanEventSubscription = self._scanEventSubscription;
          _scanEventSubscription.remove();
          self._scanEventSubscription = null;
        }
        const result = self._destroySubscriptions();
        if (sharedInstance.sharedInstance) {
          sharedInstance.sharedInstance = null;
        }
        self._destroyPromises();
        return yield self._callPromise(BleModule.destroyClient());
      });
      return function destroy() {
        return callback(...arguments);
      };
    })()
  };
  items[2] = obj;
  items[3] = {
    key: "_nextUniqueID",
    value: function _nextUniqueID() {
      this._uniqueId = this._uniqueId + 1;
      return this._uniqueId.toString();
    }
  };
  items[4] = {
    key: "_callPromise",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        c1 = undefined;
        const _nextUniqueIDResult = self._nextUniqueID();
        c1 = _nextUniqueIDResult;
        try {
          const promise = new Promise((arg0, arg1) => {
            self._activePromises[c1] = arg1;
          });
          const items = [promise, arg0];
          delete tmp5[tmp4];
          return yield Promise.race(items);
        } catch (tmp14) {
          delete tmp4[tmp2];
          throw BleManager(closure_3_1[9]).parseBleError(tmp14.message, tmp._errorCodesToMessagesMapping);
        }
      });
      return function _callPromise(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  items[5] = {
    key: "setLogLevel",
    value: function setLogLevel(arg0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.setLogLevel(arg0));
    }
  };
  items[6] = {
    key: "logLevel",
    value: function logLevel() {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.logLevel());
    }
  };
  items[7] = {
    key: "cancelTransaction",
    value: function cancelTransaction(closure_0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.cancelTransaction(closure_0));
    }
  };
  const obj1 = {
    key: "_nextUniqueID",
    value: function _nextUniqueID() {
      this._uniqueId = this._uniqueId + 1;
      return this._uniqueId.toString();
    }
  };
  const obj2 = {
    key: "_callPromise",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        c1 = undefined;
        const _nextUniqueIDResult = self._nextUniqueID();
        c1 = _nextUniqueIDResult;
        try {
          const promise = new Promise((arg0, arg1) => {
            self._activePromises[c1] = arg1;
          });
          const items = [promise, arg0];
          delete tmp5[tmp4];
          return yield Promise.race(items);
        } catch (tmp14) {
          delete tmp4[tmp2];
          throw BleManager(closure_3_1[9]).parseBleError(tmp14.message, tmp._errorCodesToMessagesMapping);
        }
      });
      return function _callPromise(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  const obj3 = {
    key: "setLogLevel",
    value: function setLogLevel(arg0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.setLogLevel(arg0));
    }
  };
  const obj4 = {
    key: "logLevel",
    value: function logLevel() {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.logLevel());
    }
  };
  const obj5 = {
    key: "cancelTransaction",
    value: function cancelTransaction(closure_0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.cancelTransaction(closure_0));
    }
  };
  items[8] = {
    key: "enable",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        let _nextUniqueIDResult = arg0;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        yield self._callPromise(BleModule.enable(_nextUniqueIDResult));
        return self;
      });
      return function enable(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const obj6 = {
    key: "enable",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        let _nextUniqueIDResult = arg0;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        yield self._callPromise(BleModule.enable(_nextUniqueIDResult));
        return self;
      });
      return function enable(arg0) {
        return callback(...arguments);
      };
    })()
  };
  items[9] = {
    key: "disable",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        let _nextUniqueIDResult = arg0;
        const self = this;
        console.warn("react-native-ble-plx: The enable and disable feature is no longer supported. In Android SDK 31+ there were major changes in permissions, which may cause problems with these functions, and in SDK 33+ they were completely removed.");
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        yield self._callPromise(BleModule.disable(_nextUniqueIDResult));
        return self;
      });
      return function disable(arg0) {
        return callback(...arguments);
      };
    })()
  };
  items[10] = {
    key: "state",
    value: function state(arg0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.state());
    }
  };
  items[11] = {
    key: "onStateChange",
    value: function onStateChange(arg0) {
      let self = this;
      closure_0 = arg0;
      self = this;
      let flag = false;
      if (arguments.length > 1) {
        flag = false;
        if (arguments[1] !== undefined) {
          flag = arguments[1];
        }
      }
      const _eventEmitter = self._eventEmitter;
      closure_2 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.StateChangeEvent, arg0);
      const _nextUniqueIDResult = self._nextUniqueID();
      if (flag) {
        c4 = false;
        self._callPromise(self.state()).then((arg0) => {
          if (!c4) {
            callback(arg0);
          }
        });
        let obj = {
          remove() {
              if (self._activeSubscriptions[closure_3] != null) {
                c4 = true;
                const _activeSubscriptions = self._activeSubscriptions;
                delete tmp2[tmp];
                closure_2.remove();
              }
            }
        };
        const _callPromiseResult = self._callPromise(self.state());
      } else {
        obj = {
          remove() {
              if (self._activeSubscriptions[closure_3] != null) {
                const _activeSubscriptions = self._activeSubscriptions;
                delete tmp2[tmp];
                closure_2.remove();
              }
            }
        };
      }
      self._activeSubscriptions[_nextUniqueIDResult] = obj;
      return obj;
    }
  };
  const obj7 = {
    key: "disable",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        let _nextUniqueIDResult = arg0;
        const self = this;
        console.warn("react-native-ble-plx: The enable and disable feature is no longer supported. In Android SDK 31+ there were major changes in permissions, which may cause problems with these functions, and in SDK 33+ they were completely removed.");
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        yield self._callPromise(BleModule.disable(_nextUniqueIDResult));
        return self;
      });
      return function disable(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const obj8 = {
    key: "state",
    value: function state(arg0) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.state());
    }
  };
  const obj9 = {
    key: "onStateChange",
    value: function onStateChange(arg0) {
      let self = this;
      closure_0 = arg0;
      self = this;
      let flag = false;
      if (arguments.length > 1) {
        flag = false;
        if (arguments[1] !== undefined) {
          flag = arguments[1];
        }
      }
      const _eventEmitter = self._eventEmitter;
      closure_2 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.StateChangeEvent, arg0);
      const _nextUniqueIDResult = self._nextUniqueID();
      if (flag) {
        c4 = false;
        self._callPromise(self.state()).then((arg0) => {
          if (!c4) {
            callback(arg0);
          }
        });
        let obj = {
          remove() {
              if (self._activeSubscriptions[closure_3] != null) {
                c4 = true;
                const _activeSubscriptions = self._activeSubscriptions;
                delete tmp2[tmp];
                closure_2.remove();
              }
            }
        };
        const _callPromiseResult = self._callPromise(self.state());
      } else {
        obj = {
          remove() {
              if (self._activeSubscriptions[closure_3] != null) {
                const _activeSubscriptions = self._activeSubscriptions;
                delete tmp2[tmp];
                closure_2.remove();
              }
            }
        };
      }
      self._activeSubscriptions[_nextUniqueIDResult] = obj;
      return obj;
    }
  };
  items[12] = {
    key: "startDeviceScan",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          closure_0 = arg2;
          const _eventEmitter = self._eventEmitter;
          self._scanEventSubscription = _eventEmitter.addListener(BleManager(closure_3_1[7]).BleModule.ScanEvent, function scanListener(arg0) {
            const defaultResult = closure_4_3.default(arg0, 2);
            const first = defaultResult[0];
            let parseBleErrorResult = null;
            if (first) {
              parseBleErrorResult = BleManager(closure_4_1[9]).parseBleError(first, self._errorCodesToMessagesMapping);
            }
            let device = null;
            if (defaultResult[1]) {
              const Device = BleManager(closure_4_1[8]).Device;
              const prototype = Device.prototype;
              device = new Device(tmp3, self);
            }
            closure_0(parseBleErrorResult, device);
          });
          const BleModule = BleManager(closure_3_1[7]).BleModule;
          return self._callPromise(BleModule.startDeviceScan(arg0, arg1));
        }
      });
      return function startDeviceScan(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  items[13] = {
    key: "stopDeviceScan",
    value: function stopDeviceScan() {
      const self = this;
      if (this._scanEventSubscription != null) {
        const _scanEventSubscription = self._scanEventSubscription;
        _scanEventSubscription.remove();
        self._scanEventSubscription = null;
      }
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return self._callPromise(BleModule.stopDeviceScan());
    }
  };
  const obj10 = {
    key: "startDeviceScan",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          closure_0 = arg2;
          const _eventEmitter = self._eventEmitter;
          self._scanEventSubscription = _eventEmitter.addListener(BleManager(closure_3_1[7]).BleModule.ScanEvent, function scanListener(arg0) {
            const defaultResult = closure_4_3.default(arg0, 2);
            const first = defaultResult[0];
            let parseBleErrorResult = null;
            if (first) {
              parseBleErrorResult = BleManager(closure_4_1[9]).parseBleError(first, self._errorCodesToMessagesMapping);
            }
            let device = null;
            if (defaultResult[1]) {
              const Device = BleManager(closure_4_1[8]).Device;
              const prototype = Device.prototype;
              device = new Device(tmp3, self);
            }
            closure_0(parseBleErrorResult, device);
          });
          const BleModule = BleManager(closure_3_1[7]).BleModule;
          return self._callPromise(BleModule.startDeviceScan(arg0, arg1));
        }
      });
      return function startDeviceScan(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  const obj11 = {
    key: "stopDeviceScan",
    value: function stopDeviceScan() {
      const self = this;
      if (this._scanEventSubscription != null) {
        const _scanEventSubscription = self._scanEventSubscription;
        _scanEventSubscription.remove();
        self._scanEventSubscription = null;
      }
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return self._callPromise(BleModule.stopDeviceScan());
    }
  };
  items[14] = {
    key: "requestConnectionPriorityForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.requestConnectionPriorityForDevice(arg0, arg1, _nextUniqueIDResult)), self);
        return device;
      });
      return function requestConnectionPriorityForDevice(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj12 = {
    key: "requestConnectionPriorityForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.requestConnectionPriorityForDevice(arg0, arg1, _nextUniqueIDResult)), self);
        return device;
      });
      return function requestConnectionPriorityForDevice(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[15] = {
    key: "readRSSIForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.readRSSIForDevice(arg0, _nextUniqueIDResult)), self);
        return device;
      });
      return function readRSSIForDevice(id, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj13 = {
    key: "readRSSIForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.readRSSIForDevice(arg0, _nextUniqueIDResult)), self);
        return device;
      });
      return function readRSSIForDevice(id, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[16] = {
    key: "requestMTUForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.requestMTUForDevice(arg0, arg1, _nextUniqueIDResult)), self);
        return device;
      });
      return function requestMTUForDevice(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj14 = {
    key: "requestMTUForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.requestMTUForDevice(arg0, arg1, _nextUniqueIDResult)), self);
        return device;
      });
      return function requestMTUForDevice(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[17] = {
    key: "devices",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.devices(arg0)).map((merged) => {
          const device = new BleManager(closure_4_1[8]).Device(merged, self);
          return device;
        });
      });
      return function devices(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const obj15 = {
    key: "devices",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.devices(arg0)).map((merged) => {
          const device = new BleManager(closure_4_1[8]).Device(merged, self);
          return device;
        });
      });
      return function devices(arg0) {
        return callback(...arguments);
      };
    })()
  };
  items[18] = {
    key: "connectedDevices",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.connectedDevices(arg0)).map((merged) => {
          const device = new BleManager(closure_4_1[8]).Device(merged, self);
          return device;
        });
      });
      return function connectedDevices(arg0) {
        return callback(...arguments);
      };
    })()
  };
  const obj16 = {
    key: "connectedDevices",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.connectedDevices(arg0)).map((merged) => {
          const device = new BleManager(closure_4_1[8]).Device(merged, self);
          return device;
        });
      });
      return function connectedDevices(arg0) {
        return callback(...arguments);
      };
    })()
  };
  items[19] = {
    key: "connectToDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        const self = this;
        if (closure_3_7.Platform.OS === "android") {
          if (yield self.isDeviceConnected(arg0)) {
            yield self.cancelDeviceConnection(arg0);
          }
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.connectToDevice(arg0, arg1)), self);
        return device;
      });
      return function connectToDevice(arg0, arg1) {
        return callback(...arguments);
      };
    })()
  };
  const obj17 = {
    key: "connectToDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        const self = this;
        if (closure_3_7.Platform.OS === "android") {
          if (yield self.isDeviceConnected(arg0)) {
            yield self.cancelDeviceConnection(arg0);
          }
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.connectToDevice(arg0, arg1)), self);
        return device;
      });
      return function connectToDevice(arg0, arg1) {
        return callback(...arguments);
      };
    })()
  };
  items[20] = {
    key: "cancelDeviceConnection",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.cancelDeviceConnection(arg0)), self);
        return device;
      });
      return function cancelDeviceConnection(id) {
        return callback(...arguments);
      };
    })()
  };
  items[21] = {
    key: "onDeviceDisconnected",
    value: function onDeviceDisconnected(id, arg1) {
      closure_0 = id;
      closure_1 = arg1;
      const self = this;
      const _eventEmitter = this._eventEmitter;
      closure_3 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.DisconnectionEvent, function disconnectionListener(arg0) {
        const defaultResult = closure_2_3.default(arg0, 2);
        const first = defaultResult[0];
        if (closure_0 === defaultResult[1].id) {
          let parseBleErrorResult = null;
          if (first) {
            parseBleErrorResult = BleManager(closure_2_1[9]).parseBleError(first, self._errorCodesToMessagesMapping);
          }
          const Device = BleManager(closure_2_1[8]).Device;
          const prototype = Device.prototype;
          const device = new Device(tmp3, self);
          closure_1(parseBleErrorResult, device);
        }
      });
      const _nextUniqueIDResult = this._nextUniqueID();
      const obj = {
        remove() {
          if (self._activeSubscriptions[closure_4] != null) {
            const _activeSubscriptions = self._activeSubscriptions;
            delete tmp2[tmp];
            closure_3.remove();
          }
        }
      };
      this._activeSubscriptions[_nextUniqueIDResult] = obj;
      return obj;
    }
  };
  items[22] = {
    key: "isDeviceConnected",
    value: function isDeviceConnected(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.isDeviceConnected(id));
    }
  };
  const obj18 = {
    key: "cancelDeviceConnection",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const device = new BleManager(closure_3_1[8]).Device(yield self._callPromise(BleModule.cancelDeviceConnection(arg0)), self);
        return device;
      });
      return function cancelDeviceConnection(id) {
        return callback(...arguments);
      };
    })()
  };
  const obj19 = {
    key: "onDeviceDisconnected",
    value: function onDeviceDisconnected(id, arg1) {
      closure_0 = id;
      closure_1 = arg1;
      const self = this;
      const _eventEmitter = this._eventEmitter;
      closure_3 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.DisconnectionEvent, function disconnectionListener(arg0) {
        const defaultResult = closure_2_3.default(arg0, 2);
        const first = defaultResult[0];
        if (closure_0 === defaultResult[1].id) {
          let parseBleErrorResult = null;
          if (first) {
            parseBleErrorResult = BleManager(closure_2_1[9]).parseBleError(first, self._errorCodesToMessagesMapping);
          }
          const Device = BleManager(closure_2_1[8]).Device;
          const prototype = Device.prototype;
          const device = new Device(tmp3, self);
          closure_1(parseBleErrorResult, device);
        }
      });
      const _nextUniqueIDResult = this._nextUniqueID();
      const obj = {
        remove() {
          if (self._activeSubscriptions[closure_4] != null) {
            const _activeSubscriptions = self._activeSubscriptions;
            delete tmp2[tmp];
            closure_3.remove();
          }
        }
      };
      this._activeSubscriptions[_nextUniqueIDResult] = obj;
      return obj;
    }
  };
  const obj20 = {
    key: "isDeviceConnected",
    value: function isDeviceConnected(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._callPromise(BleModule.isDeviceConnected(id));
    }
  };
  items[23] = {
    key: "discoverAllServicesAndCharacteristicsForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const BleModule2 = BleManager(closure_3_1[7]).BleModule;
        const tmp3 = yield self._callPromise(BleModule2.servicesForDevice(arg0));
        let items = tmp3;
        if (!tmp3) {
          items = [];
        }
        const obj = { serviceUUIDs: items.map((uuid) => uuid.uuid) };
        const merged = Object.assign({}, yield self._callPromise(BleModule.discoverAllServicesAndCharacteristicsForDevice(arg0, _nextUniqueIDResult)), obj);
        const device = new BleManager(closure_3_1[8]).Device(merged, self);
        return device;
      });
      return function discoverAllServicesAndCharacteristicsForDevice(id, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj21 = {
    key: "discoverAllServicesAndCharacteristicsForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const BleModule2 = BleManager(closure_3_1[7]).BleModule;
        const tmp3 = yield self._callPromise(BleModule2.servicesForDevice(arg0));
        let items = tmp3;
        if (!tmp3) {
          items = [];
        }
        const obj = { serviceUUIDs: items.map((uuid) => uuid.uuid) };
        const merged = Object.assign({}, yield self._callPromise(BleModule.discoverAllServicesAndCharacteristicsForDevice(arg0, _nextUniqueIDResult)), obj);
        const device = new BleManager(closure_3_1[8]).Device(merged, self);
        return device;
      });
      return function discoverAllServicesAndCharacteristicsForDevice(id, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[24] = {
    key: "servicesForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.servicesForDevice(arg0)).map((arg0) => {
          const service = new BleManager(closure_4_1[10]).Service(arg0, self);
          return service;
        });
      });
      return function servicesForDevice(id) {
        return callback(...arguments);
      };
    })()
  };
  items[25] = {
    key: "characteristicsForDevice",
    value: function characteristicsForDevice(id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleCharacteristics(BleModule.characteristicsForDevice(id, id));
    }
  };
  items[26] = {
    key: "_characteristicsForService",
    value: function _characteristicsForService(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleCharacteristics(BleModule.characteristicsForService(id));
    }
  };
  const obj22 = {
    key: "servicesForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        return yield self._callPromise(BleModule.servicesForDevice(arg0)).map((arg0) => {
          const service = new BleManager(closure_4_1[10]).Service(arg0, self);
          return service;
        });
      });
      return function servicesForDevice(id) {
        return callback(...arguments);
      };
    })()
  };
  const obj23 = {
    key: "characteristicsForDevice",
    value: function characteristicsForDevice(id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleCharacteristics(BleModule.characteristicsForDevice(id, id));
    }
  };
  const obj24 = {
    key: "_characteristicsForService",
    value: function _characteristicsForService(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleCharacteristics(BleModule.characteristicsForService(id));
    }
  };
  items[27] = {
    key: "_handleCharacteristics",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        return yield self._callPromise(arg0).map((arg0) => {
          const characteristic = new BleManager(closure_4_1[11]).Characteristic(arg0, self);
          return characteristic;
        });
      });
      return function _handleCharacteristics(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  items[28] = {
    key: "descriptorsForDevice",
    value: function descriptorsForDevice(id, id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForDevice(id, id, id));
    }
  };
  items[29] = {
    key: "_descriptorsForService",
    value: function _descriptorsForService(id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForService(id, id));
    }
  };
  items[30] = {
    key: "_descriptorsForCharacteristic",
    value: function _descriptorsForCharacteristic(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForCharacteristic(id));
    }
  };
  const obj25 = {
    key: "_handleCharacteristics",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        return yield self._callPromise(arg0).map((arg0) => {
          const characteristic = new BleManager(closure_4_1[11]).Characteristic(arg0, self);
          return characteristic;
        });
      });
      return function _handleCharacteristics(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  const obj26 = {
    key: "descriptorsForDevice",
    value: function descriptorsForDevice(id, id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForDevice(id, id, id));
    }
  };
  const obj27 = {
    key: "_descriptorsForService",
    value: function _descriptorsForService(id, id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForService(id, id));
    }
  };
  const obj28 = {
    key: "_descriptorsForCharacteristic",
    value: function _descriptorsForCharacteristic(id) {
      const BleModule = BleManager(closure_1_1[7]).BleModule;
      return this._handleDescriptors(BleModule.descriptorsForCharacteristic(id));
    }
  };
  items[31] = {
    key: "_handleDescriptors",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        return yield self._callPromise(arg0).map((arg0) => {
          const descriptor = new BleManager(closure_4_1[12]).Descriptor(arg0, self);
          return descriptor;
        });
      });
      return function _handleDescriptors(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  const obj29 = {
    key: "_handleDescriptors",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0) {
        const self = this;
        return yield self._callPromise(arg0).map((arg0) => {
          const descriptor = new BleManager(closure_4_1[12]).Descriptor(arg0, self);
          return descriptor;
        });
      });
      return function _handleDescriptors(BleModule) {
        return callback(...arguments);
      };
    })()
  };
  items[32] = {
    key: "readCharacteristicForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristicForDevice(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function readCharacteristicForDevice(id, arg1, arg2, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj30 = {
    key: "readCharacteristicForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristicForDevice(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function readCharacteristicForDevice(id, arg1, arg2, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[33] = {
    key: "_readCharacteristicForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristicForService(arg0, arg1, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _readCharacteristicForService(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj31 = {
    key: "_readCharacteristicForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristicForService(arg0, arg1, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _readCharacteristicForService(id, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[34] = {
    key: "_readCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristic(arg0, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _readCharacteristic(id, arg1) {
        return callback(...arguments);
      };
    })()
  };
  const obj32 = {
    key: "_readCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.readCharacteristic(arg0, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _readCharacteristic(id, arg1) {
        return callback(...arguments);
      };
    })()
  };
  items[35] = {
    key: "writeCharacteristicWithResponseForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForDevice(arg0, arg1, arg2, arg3, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function writeCharacteristicWithResponseForDevice(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  const obj33 = {
    key: "writeCharacteristicWithResponseForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForDevice(arg0, arg1, arg2, arg3, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function writeCharacteristicWithResponseForDevice(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  items[36] = {
    key: "_writeCharacteristicWithResponseForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForService(arg0, arg1, arg2, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithResponseForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  const obj34 = {
    key: "_writeCharacteristicWithResponseForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForService(arg0, arg1, arg2, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithResponseForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  items[37] = {
    key: "_writeCharacteristicWithResponse",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristic(arg0, arg1, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithResponse(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  const obj35 = {
    key: "_writeCharacteristicWithResponse",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristic(arg0, arg1, true, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithResponse(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  items[38] = {
    key: "writeCharacteristicWithoutResponseForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForDevice(arg0, arg1, arg2, arg3, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function writeCharacteristicWithoutResponseForDevice(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  const obj36 = {
    key: "writeCharacteristicWithoutResponseForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForDevice(arg0, arg1, arg2, arg3, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function writeCharacteristicWithoutResponseForDevice(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  items[39] = {
    key: "_writeCharacteristicWithoutResponseForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForService(arg0, arg1, arg2, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithoutResponseForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  const obj37 = {
    key: "_writeCharacteristicWithoutResponseForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristicForService(arg0, arg1, arg2, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithoutResponseForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  items[40] = {
    key: "_writeCharacteristicWithoutResponse",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristic(arg0, arg1, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithoutResponse(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  items[41] = {
    key: "monitorCharacteristicForDevice",
    value: function monitorCharacteristicForDevice(arg0, arg1, arg2, arg3, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, arg1, arg2, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg5];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristicForDevice = BleManager(closure_1_1[7]).BleModule.monitorCharacteristicForDevice;
      return self._handleMonitorCharacteristic(monitorCharacteristicForDevice.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg3);
    }
  };
  items[42] = {
    key: "_monitorCharacteristicForService",
    value: function _monitorCharacteristicForService(arg0, arg1, arg2, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, arg1, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg4];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristicForService = BleManager(closure_1_1[7]).BleModule.monitorCharacteristicForService;
      return self._handleMonitorCharacteristic(monitorCharacteristicForService.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg2);
    }
  };
  items[43] = {
    key: "_monitorCharacteristic",
    value: function _monitorCharacteristic(arg0, arg1, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg3];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristic = BleManager(closure_1_1[7]).BleModule.monitorCharacteristic;
      return self._handleMonitorCharacteristic(monitorCharacteristic.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg1);
    }
  };
  items[44] = {
    key: "_handleMonitorCharacteristic",
    value: function _handleMonitorCharacteristic(monitorCharacteristic, _nextUniqueIDResult, arg2) {
      closure_0 = _nextUniqueIDResult;
      closure_1 = arg2;
      const self = this;
      const _eventEmitter = this._eventEmitter;
      closure_3 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.ReadEvent, function monitorListener(arg0) {
        const defaultResult = closure_2_3.default(arg0, 3);
        const first = defaultResult[0];
        if (closure_0 === defaultResult[2]) {
          if (first) {
            tmp4(tmp5(tmp6[9]).parseBleError(first, self._errorCodesToMessagesMapping), null);
          } else {
            const Characteristic = tmp5(tmp6[11]).Characteristic;
            const prototype = Characteristic.prototype;
            const characteristic = new Characteristic(tmp3, self);
            tmp4(null, characteristic);
          }
        }
      });
      _nextUniqueIDResult = this._nextUniqueID();
      let obj = {
        remove() {
          if (self._activeSubscriptions[closure_4] != null) {
            const _activeSubscriptions = self._activeSubscriptions;
            delete tmp2[tmp];
            closure_3.remove();
          }
        }
      };
      this._activeSubscriptions[_nextUniqueIDResult] = obj;
      this._callPromise(monitorCharacteristic).then(() => {
        obj.remove();
      }, (arg0) => {
        callback(arg0, null);
        obj.remove();
      });
      obj = {
        remove() {
          const BleModule = BleManager(closure_2_1[7]).BleModule;
          BleModule.cancelTransaction(closure_0);
        }
      };
      return obj;
    }
  };
  const obj38 = {
    key: "_writeCharacteristicWithoutResponse",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const characteristic = new BleManager(closure_3_1[11]).Characteristic(yield self._callPromise(BleModule.writeCharacteristic(arg0, arg1, false, _nextUniqueIDResult)), self);
        return characteristic;
      });
      return function _writeCharacteristicWithoutResponse(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  const obj39 = {
    key: "monitorCharacteristicForDevice",
    value: function monitorCharacteristicForDevice(arg0, arg1, arg2, arg3, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, arg1, arg2, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg5];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristicForDevice = BleManager(closure_1_1[7]).BleModule.monitorCharacteristicForDevice;
      return self._handleMonitorCharacteristic(monitorCharacteristicForDevice.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg3);
    }
  };
  const obj40 = {
    key: "_monitorCharacteristicForService",
    value: function _monitorCharacteristicForService(arg0, arg1, arg2, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, arg1, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg4];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristicForService = BleManager(closure_1_1[7]).BleModule.monitorCharacteristicForService;
      return self._handleMonitorCharacteristic(monitorCharacteristicForService.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg2);
    }
  };
  const obj41 = {
    key: "_monitorCharacteristic",
    value: function _monitorCharacteristic(arg0, arg1, _nextUniqueIDResult) {
      const self = this;
      if (!_nextUniqueIDResult) {
        _nextUniqueIDResult = self._nextUniqueID();
      }
      const items = [arg0, _nextUniqueIDResult];
      let combined = items;
      if (!BleManager(closure_1_1[13]).isIOS) {
        const items1 = [];
        const items2 = [arg3];
        combined = items1.concat(items, items2);
      }
      const monitorCharacteristic = BleManager(closure_1_1[7]).BleModule.monitorCharacteristic;
      return self._handleMonitorCharacteristic(monitorCharacteristic.apply(BleManager(closure_1_1[7]).BleModule, closure_1_2.default(combined)), _nextUniqueIDResult, arg1);
    }
  };
  const obj42 = {
    key: "_handleMonitorCharacteristic",
    value: function _handleMonitorCharacteristic(monitorCharacteristic, _nextUniqueIDResult, arg2) {
      closure_0 = _nextUniqueIDResult;
      closure_1 = arg2;
      const self = this;
      const _eventEmitter = this._eventEmitter;
      closure_3 = _eventEmitter.addListener(BleManager(closure_1_1[7]).BleModule.ReadEvent, function monitorListener(arg0) {
        const defaultResult = closure_2_3.default(arg0, 3);
        const first = defaultResult[0];
        if (closure_0 === defaultResult[2]) {
          if (first) {
            tmp4(tmp5(tmp6[9]).parseBleError(first, self._errorCodesToMessagesMapping), null);
          } else {
            const Characteristic = tmp5(tmp6[11]).Characteristic;
            const prototype = Characteristic.prototype;
            const characteristic = new Characteristic(tmp3, self);
            tmp4(null, characteristic);
          }
        }
      });
      _nextUniqueIDResult = this._nextUniqueID();
      let obj = {
        remove() {
          if (self._activeSubscriptions[closure_4] != null) {
            const _activeSubscriptions = self._activeSubscriptions;
            delete tmp2[tmp];
            closure_3.remove();
          }
        }
      };
      this._activeSubscriptions[_nextUniqueIDResult] = obj;
      this._callPromise(monitorCharacteristic).then(() => {
        obj.remove();
      }, (arg0) => {
        callback(arg0, null);
        obj.remove();
      });
      obj = {
        remove() {
          const BleModule = BleManager(closure_2_1[7]).BleModule;
          BleModule.cancelTransaction(closure_0);
        }
      };
      return obj;
    }
  };
  items[45] = {
    key: "readDescriptorForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForDevice(arg0, arg1, arg2, arg3, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function readDescriptorForDevice(id, arg1, arg2, arg3, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj43 = {
    key: "readDescriptorForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForDevice(arg0, arg1, arg2, arg3, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function readDescriptorForDevice(id, arg1, arg2, arg3, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[46] = {
    key: "_readDescriptorForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForService(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptorForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  const obj44 = {
    key: "_readDescriptorForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForService(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptorForService(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  items[47] = {
    key: "_readDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForCharacteristic(arg0, arg1, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptorForCharacteristic(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  const obj45 = {
    key: "_readDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptorForCharacteristic(arg0, arg1, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptorForCharacteristic(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  items[48] = {
    key: "_readDescriptor",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptor(arg0, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptor(id, arg1) {
        return callback(...arguments);
      };
    })()
  };
  const obj46 = {
    key: "_readDescriptor",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1) {
        let _nextUniqueIDResult = arg1;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.readDescriptor(arg0, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _readDescriptor(id, arg1) {
        return callback(...arguments);
      };
    })()
  };
  items[49] = {
    key: "writeDescriptorForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4, arg5) {
        let _nextUniqueIDResult = arg5;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForDevice(arg0, arg1, arg2, arg3, arg4, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function writeDescriptorForDevice(id, arg1, arg2, arg3, arg4, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj47 = {
    key: "writeDescriptorForDevice",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4, arg5) {
        let _nextUniqueIDResult = arg5;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForDevice(arg0, arg1, arg2, arg3, arg4, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function writeDescriptorForDevice(id, arg1, arg2, arg3, arg4, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[50] = {
    key: "_writeDescriptorForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForService(arg0, arg1, arg2, arg3, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _writeDescriptorForService(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  const obj48 = {
    key: "_writeDescriptorForService",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3, arg4) {
        let _nextUniqueIDResult = arg4;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForService(arg0, arg1, arg2, arg3, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _writeDescriptorForService(id, arg1, arg2, arg3, arg4) {
        return callback(...arguments);
      };
    })()
  };
  items[51] = {
    key: "_writeDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForCharacteristic(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _writeDescriptorForCharacteristic(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  const obj49 = {
    key: "_writeDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2, arg3) {
        let _nextUniqueIDResult = arg3;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptorForCharacteristic(arg0, arg1, arg2, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _writeDescriptorForCharacteristic(id, arg1, arg2, arg3) {
        return callback(...arguments);
      };
    })()
  };
  items[52] = {
    key: "_writeDescriptor",
    value: (() => {
      closure_0 = closure_1_4.default(async function(arg0, arg1, arg2) {
        let _nextUniqueIDResult = arg2;
        const self = this;
        if (!_nextUniqueIDResult) {
          _nextUniqueIDResult = self._nextUniqueID();
        }
        const BleModule = BleManager(closure_3_1[7]).BleModule;
        const descriptor = new BleManager(closure_3_1[12]).Descriptor(yield self._callPromise(BleModule.writeDescriptor(arg0, arg1, _nextUniqueIDResult)), self);
        return descriptor;
      });
      return function _writeDescriptor(id, arg1, arg2) {
        return callback(...arguments);
      };
    })()
  };
  return closure_6.default(BleManager, items);
})();
tmp3.sharedInstance = null;

export const BleManager = tmp3;
