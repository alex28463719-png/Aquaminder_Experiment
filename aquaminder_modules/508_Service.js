// Module ID: 508
// Function ID: 5707
// Name: Service
// Dependencies: [1, 363, 6, 12, 13, 504]

// Module 508 (Service)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);

export const Service = (() => {
  class Service {
    constructor(arg0, arg1) {
      defaultResult = closure_1_4.default(this, Service);
      merged = Object.assign(this, arg0);
      obj = { value: arg1, enumerable: false };
      definePropertyResult = Object.defineProperty(this, "_manager", obj);
      return;
    }
  }
  let obj = {
    key: "characteristics",
    value: function characteristics() {
      const _manager = this._manager;
      return _manager._characteristicsForService(this.id);
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "descriptorsForCharacteristic",
    value: function descriptorsForCharacteristic(id) {
      const _manager = this._manager;
      return _manager._descriptorsForService(this.id, id);
    }
  };
  items[1] = obj;
  obj = {
    key: "readCharacteristic",
    value: function readCharacteristic(arg0, _nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager._readCharacteristicForService(this.id, arg0, _nextUniqueIDResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "writeCharacteristicWithResponse",
    value: function writeCharacteristicWithResponse(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithResponseForService(this.id, arg0, arg1, arg2);
    }
  };
  items[4] = {
    key: "writeCharacteristicWithoutResponse",
    value: function writeCharacteristicWithoutResponse(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithoutResponseForService(this.id, arg0, arg1, arg2);
    }
  };
  items[5] = {
    key: "monitorCharacteristic",
    value: function monitorCharacteristic(arg0, arg1, arg2, arg3) {
      const items = [this.id, arg0, arg1, arg2];
      let combined = items;
      if (!Service(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg3];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const _monitorCharacteristicForService = _manager._monitorCharacteristicForService;
      return _monitorCharacteristicForService.apply(_manager, closure_1_3.default(combined));
    }
  };
  items[6] = {
    key: "readDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._readDescriptorForService(self.id, arg0, arg1, arg2);
        }
      });
      return function readDescriptorForCharacteristic(arg0, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj1 = {
    key: "writeCharacteristicWithResponse",
    value: function writeCharacteristicWithResponse(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithResponseForService(this.id, arg0, arg1, arg2);
    }
  };
  const obj2 = {
    key: "writeCharacteristicWithoutResponse",
    value: function writeCharacteristicWithoutResponse(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager._writeCharacteristicWithoutResponseForService(this.id, arg0, arg1, arg2);
    }
  };
  const obj3 = {
    key: "monitorCharacteristic",
    value: function monitorCharacteristic(arg0, arg1, arg2, arg3) {
      const items = [this.id, arg0, arg1, arg2];
      let combined = items;
      if (!Service(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg3];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const _monitorCharacteristicForService = _manager._monitorCharacteristicForService;
      return _monitorCharacteristicForService.apply(_manager, closure_1_3.default(combined));
    }
  };
  const obj4 = {
    key: "readDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._readDescriptorForService(self.id, arg0, arg1, arg2);
        }
      });
      return function readDescriptorForCharacteristic(arg0, arg1, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  items[7] = {
    key: "writeDescriptorForCharacteristic",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2, arg3) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager._writeDescriptorForService(self.id, arg0, arg1, arg2, arg3);
        }
      });
      return function writeDescriptorForCharacteristic(arg0, arg1, arg2, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  return closure_5.default(Service, items);
})();
