// Module ID: 507
// Function ID: 5681
// Name: Device
// Dependencies: [1, 363, 6, 12, 13, 504]

// Module 507 (Device)
import _toConsumableArray from "_toConsumableArray" /* 6 */;
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_toConsumableArray);
let closure_4 = module_1(_classCallCheck);
let closure_5 = module_1(_defineProperties);

export const Device = (() => {
  class Device {
    constructor(arg0, arg1) {
      defaultResult = closure_1_4.default(this, Device);
      merged = Object.assign(this, arg0);
      obj = { value: arg1, enumerable: false };
      definePropertyResult = Object.defineProperty(this, "_manager", obj);
      return;
    }
  }
  let obj = {
    key: "requestConnectionPriority",
    value: function requestConnectionPriority(arg0, _nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.requestConnectionPriorityForDevice(this.id, arg0, _nextUniqueIDResult);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "readRSSI",
    value: function readRSSI(_nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.readRSSIForDevice(this.id, _nextUniqueIDResult);
    }
  };
  items[1] = obj;
  obj = {
    key: "requestMTU",
    value: function requestMTU(arg0, _nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.requestMTUForDevice(this.id, arg0, _nextUniqueIDResult);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "connect",
    value: function connect(url, arg1, arg2, _socketId) {
      const _manager = this._manager;
      return _manager.connectToDevice(this.id, url);
    }
  };
  items[4] = {
    key: "cancelConnection",
    value: function cancelConnection() {
      const _manager = this._manager;
      return _manager.cancelDeviceConnection(this.id);
    }
  };
  items[5] = {
    key: "isConnected",
    value: function isConnected() {
      const _manager = this._manager;
      return _manager.isDeviceConnected(this.id);
    }
  };
  items[6] = {
    key: "onDisconnected",
    value: function onDisconnected(arg0) {
      const _manager = this._manager;
      return _manager.onDeviceDisconnected(this.id, arg0);
    }
  };
  items[7] = {
    key: "discoverAllServicesAndCharacteristics",
    value: function discoverAllServicesAndCharacteristics(_nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.discoverAllServicesAndCharacteristicsForDevice(this.id, _nextUniqueIDResult);
    }
  };
  items[8] = {
    key: "services",
    value: function services() {
      const _manager = this._manager;
      return _manager.servicesForDevice(this.id);
    }
  };
  items[9] = {
    key: "characteristicsForService",
    value: function characteristicsForService(id) {
      const _manager = this._manager;
      return _manager.characteristicsForDevice(this.id, id);
    }
  };
  items[10] = {
    key: "descriptorsForService",
    value: function descriptorsForService(id, id) {
      const _manager = this._manager;
      return _manager.descriptorsForDevice(this.id, id, id);
    }
  };
  items[11] = {
    key: "readCharacteristicForService",
    value: function readCharacteristicForService(arg0, arg1, _nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.readCharacteristicForDevice(this.id, arg0, arg1, _nextUniqueIDResult);
    }
  };
  items[12] = {
    key: "writeCharacteristicWithResponseForService",
    value: function writeCharacteristicWithResponseForService(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager.writeCharacteristicWithResponseForDevice(this.id, arg0, arg1, arg2, arg3);
    }
  };
  items[13] = {
    key: "writeCharacteristicWithoutResponseForService",
    value: function writeCharacteristicWithoutResponseForService(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager.writeCharacteristicWithoutResponseForDevice(this.id, arg0, arg1, arg2, arg3);
    }
  };
  items[14] = {
    key: "monitorCharacteristicForService",
    value: function monitorCharacteristicForService(arg0, arg1, arg2) {
      const items = [this.id, arg0, arg1, arg2, arg3];
      let combined = items;
      if (!Device(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg4];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const monitorCharacteristicForDevice = _manager.monitorCharacteristicForDevice;
      return monitorCharacteristicForDevice.apply(_manager, closure_1_3.default(combined));
    }
  };
  items[15] = {
    key: "readDescriptorForService",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2, arg3) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager.readDescriptorForDevice(self.id, arg0, arg1, arg2, arg3);
        }
      });
      return function readDescriptorForService(arg0, arg1, arg2, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj1 = {
    key: "connect",
    value: function connect(url, arg1, arg2, _socketId) {
      const _manager = this._manager;
      return _manager.connectToDevice(this.id, url);
    }
  };
  const obj10 = {
    key: "writeCharacteristicWithResponseForService",
    value: function writeCharacteristicWithResponseForService(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager.writeCharacteristicWithResponseForDevice(this.id, arg0, arg1, arg2, arg3);
    }
  };
  const obj11 = {
    key: "writeCharacteristicWithoutResponseForService",
    value: function writeCharacteristicWithoutResponseForService(arg0, arg1, arg2) {
      const _manager = this._manager;
      return _manager.writeCharacteristicWithoutResponseForDevice(this.id, arg0, arg1, arg2, arg3);
    }
  };
  const obj12 = {
    key: "monitorCharacteristicForService",
    value: function monitorCharacteristicForService(arg0, arg1, arg2) {
      const items = [this.id, arg0, arg1, arg2, arg3];
      let combined = items;
      if (!Device(closure_1_1[5]).isIOS) {
        const items1 = [];
        const items2 = [arg4];
        combined = items1.concat(items, items2);
      }
      const _manager = this._manager;
      const monitorCharacteristicForDevice = _manager.monitorCharacteristicForDevice;
      return monitorCharacteristicForDevice.apply(_manager, closure_1_3.default(combined));
    }
  };
  const obj13 = {
    key: "readDescriptorForService",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2, arg3) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager.readDescriptorForDevice(self.id, arg0, arg1, arg2, arg3);
        }
      });
      return function readDescriptorForService(arg0, arg1, arg2, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  const obj2 = {
    key: "cancelConnection",
    value: function cancelConnection() {
      const _manager = this._manager;
      return _manager.cancelDeviceConnection(this.id);
    }
  };
  const obj3 = {
    key: "isConnected",
    value: function isConnected() {
      const _manager = this._manager;
      return _manager.isDeviceConnected(this.id);
    }
  };
  const obj4 = {
    key: "onDisconnected",
    value: function onDisconnected(arg0) {
      const _manager = this._manager;
      return _manager.onDeviceDisconnected(this.id, arg0);
    }
  };
  const obj5 = {
    key: "discoverAllServicesAndCharacteristics",
    value: function discoverAllServicesAndCharacteristics(_nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.discoverAllServicesAndCharacteristicsForDevice(this.id, _nextUniqueIDResult);
    }
  };
  const obj6 = {
    key: "services",
    value: function services() {
      const _manager = this._manager;
      return _manager.servicesForDevice(this.id);
    }
  };
  const obj7 = {
    key: "characteristicsForService",
    value: function characteristicsForService(id) {
      const _manager = this._manager;
      return _manager.characteristicsForDevice(this.id, id);
    }
  };
  const obj8 = {
    key: "descriptorsForService",
    value: function descriptorsForService(id, id) {
      const _manager = this._manager;
      return _manager.descriptorsForDevice(this.id, id, id);
    }
  };
  const obj9 = {
    key: "readCharacteristicForService",
    value: function readCharacteristicForService(arg0, arg1, _nextUniqueIDResult) {
      const _manager = this._manager;
      return _manager.readCharacteristicForDevice(this.id, arg0, arg1, _nextUniqueIDResult);
    }
  };
  items[16] = {
    key: "writeDescriptorForService",
    value: (() => {
      closure_0 = closure_1_2.default(async function(arg0, arg1, arg2, arg3, arg4) {
        const self = this;
        if (obj) {
          return obj.resume();
        } else {
          const _manager = self._manager;
          return _manager.writeDescriptorForDevice(self.id, arg0, arg1, arg2, arg3, arg4);
        }
      });
      return function writeDescriptorForService(arg0, arg1, arg2, arg3, _nextUniqueIDResult) {
        return callback(...arguments);
      };
    })()
  };
  return closure_5.default(Device, items);
})();
