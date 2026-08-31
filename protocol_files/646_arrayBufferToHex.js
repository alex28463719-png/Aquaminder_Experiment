// Module ID: 646
// Function ID: 6845
// Name: arrayBufferToHex
// Dependencies: [1, 363, 2, 502, 647, 655]
// Exports: buildCycleByte, encodeStringToHex, getCycleInfo, hexToArrayBuffer, padRight, readBatteryStatusWithoutMonitor, startScan

// Module 646 (arrayBufferToHex)
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import _mod502 from "module_502" /* 502 */;
import _callSuper from "_callSuper" /* 655 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;

let closure_2 = module_1(asyncGeneratorStep);
const bleManager = new _mod502.BleManager();
let closure_5 = ["Glass Bottle", "Gym Bottle", "Nile", "Single wall", "Thames", "Rio"];
const tmp4 = (() => {
  closure_0 = closure_2.default(async () => {
    let str2;
    try {
      if (tmp2 === callback(closure_2_1[3]).State.PoweredOn) {
        return true;
      } else {
        let str = "Please turn on Bluetooth to continue.";
        if (closure_2_3.Platform.OS === "ios") {
          str = "Please enable Bluetooth from Settings.";
        }
        str2 = null;
        if (closure_2_3.Platform.OS === "ios") {
          str2 = "App-Prefs:root=Bluetooth";
        }
        const Alert = closure_2_3.Alert;
        const obj = {
          text: "Open Settings",
          onPress() {
                const Linking = closure_3_3.Linking;
                if (str2) {
                  let openURLResult = Linking.openURL(str2);
                } else {
                  openURLResult = Linking.openSettings();
                }
                return openURLResult;
              }
        };
        const items = [obj, { text: "Cancel", style: "cancel" }];
        Alert.alert("Bluetooth is Off", str, items);
        return false;
      }
      tmp2 = yield closure_2_4.state();
    } catch (tmp10) {
      const _console = console;
      console.error("Failed to check Bluetooth state:", tmp10);
      return false;
    }
  });
  return function checkBluetoothStatus() {
    return callback(...arguments);
  };
})();
let closure_6 = tmp4;
const tmp5 = (() => {
  closure_0 = closure_2.default(async (arg0, arg1) => {
    try {
      if (obj2.test(arg0)) {
        if (yield arg1.isConnected()) {
          const _Buffer = callback(closure_2_1[5]).Buffer;
          let str = _Buffer.from(arg0, "hex").toString("base64");
          try {
            const found = yield arg1.services().find((uuid) => {
              const formatted = uuid.uuid.toLowerCase();
              return formatted === "0000FE00-0000-1000-8000-00805F9B34FB".toLowerCase();
            });
            if (found) {
              const found1 = yield obj3.characteristics().find((uuid) => {
                const formatted = uuid.uuid.toLowerCase();
                return formatted === "0000FFF2-0000-1000-8000-00805F9B34FB".toLowerCase();
              });
              if (found1) {
                if (obj4.isWritableWithResponse) {
                  yield obj4.writeWithResponse(str);
                } else if (obj4.isWritableWithoutResponse) {
                  yield obj4.writeWithoutResponse(str);
                } else {
                  yield arg1.writeCharacteristicWithResponseForService("0000FE00-0000-1000-8000-00805F9B34FB", "0000FFF2-0000-1000-8000-00805F9B34FB", str);
                }
              } else {
                const _Error4 = Error;
                const _HermesInternal2 = HermesInternal;
                const error = new Error("Characteristic " + "0000FFF2-0000-1000-8000-00805F9B34FB" + " not found in service");
                throw error;
              }
              const arr2 = yield obj3.characteristics();
            } else {
              const _Error3 = Error;
              const _HermesInternal = HermesInternal;
              const error1 = new Error("Service " + "0000FE00-0000-1000-8000-00805F9B34FB" + " not found on device");
              throw error1;
            }
            const arr = yield arg1.services();
            obj3 = found;
          } catch (err) {
            yield obj.writeCharacteristicWithoutResponseForService("0000FE00-0000-1000-8000-00805F9B34FB", "0000FFF2-0000-1000-8000-00805F9B34FB", tmp);
          }
          const str5 = _Buffer.from(arg0, "hex");
        } else {
          const _console = console;
          console.error("Device not connected");
          const _Error2 = Error;
          const error2 = new Error("Device not connected");
          throw error2;
        }
      } else {
        const _Error = Error;
        str = "Invalid hex string format";
        const error3 = new Error("Invalid hex string format");
        throw error3;
      }
      obj2 = /^[0-9A-Fa-f]+$/;
    } catch (tmp46) {
      ({ message, errorCode } = tmp46);
      throw tmp46;
    }
  });
  return function writeBLECharacteristicValue(replaced, arg1) {
    return callback(...arguments);
  };
})();
let closure_7 = tmp5;
function padLeft(str, arg1) {
  return str.padStart(arg1, "0");
}
function arrayBufferToHex(arg0) {
  const uint8Array = new Uint8Array(arg0);
  const mapped = Array.from(uint8Array).map((arg0) => arg0.toString(16).padStart(2, "0"));
  return mapped.join("");
}
const tmp6 = (() => {
  closure_0 = closure_2.default(async (arg0) => {
    try {
      const _Math = Math;
      const _Date = Date;
      const _Date2 = Date;
      new Date(Math.ceil(Date.now() / 1000));
      const _Date3 = Date;
      const date1 = new Date();
      const _Math2 = Math;
      let str = Math.floor(date1.getTime() / 1000);
      str = str.toString(16);
      yield closure_2_11(arg0, "AA01" + str.padStart(8, "0").toUpperCase());
    } catch (err) {
    }
  });
  return function sendSyncTime(arg0) {
    return callback(...arguments);
  };
})();
let closure_10 = tmp6;
const tmp7 = (() => {
  closure_0 = closure_2.default(async (arg0, arg1) => {
    const replaced = arg1.replace(/[\s\r\n]+/g, "");
    if (obj.test(replaced)) {
      if (arr.length % 2 !== 0) {
        const _Error2 = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("Hex string must have even length: \"" + arr + "\"");
        throw error;
      } else {
        yield closure_2_7(arr, arg0);
      }
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("Invalid hex string format: \"" + arr + "\"");
      throw error1;
    }
    obj = /^[0-9A-Fa-f]+$/;
  });
  return function sendHexCommand(arg0, arg1) {
    return callback(...arguments);
  };
})();
let closure_11 = tmp7;
function parseBLEData(arg0) {
  const _Buffer = _callSuper.Buffer;
  const fromResult = _Buffer.from(arg0, "base64");
  let length;
  if (fromResult != null) {
    length = fromResult.length;
  }
  if (length >= 3) {
    let length1;
    if (fromResult != null) {
      length1 = fromResult.length;
    }
    if (length1 <= 3) {
      const first = fromResult[0];
      const obj = { battery: fromResult.subarray(2)[0] };
      return obj;
    }
  }
  return {};
}

export { bleManager };
export const requestPermissions = (() => {
  closure_0 = closure_2.default(async () => {
    if (closure_2_3.Platform.OS === "android") {
      const PermissionsAndroid = closure_2_3.PermissionsAndroid;
      const items = [closure_2_3.PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, closure_2_3.PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, closure_2_3.PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT, closure_2_3.PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE];
      yield PermissionsAndroid.requestMultiple(items);
    } else {
      const items1 = [callback(closure_2_1[4]).PERMISSIONS.IOS.BLUETOOTH, callback(closure_2_1[4]).PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];
      const tmp14 = yield closure_0(closure_2_1[4]).requestMultiple(items1);
      let Alert = closure_2_3.Alert;
      const items2 = [{ text: "Cancel", style: "cancel" }, ];
      const obj = {
        text: "Open Settings",
        onPress() {
            return callback(closure_3_1[4]).openSettings().catch(() => {
              const Alert = closure_4_3.Alert;
              Alert.alert("Error", "Unable to open settings.");
            });
          }
      };
      items2[1] = obj;
      Alert.alert("Permission Denied", "Bluetooth and Location access are required. Please enable them in Settings.", items2);
      const _Error = Error;
      const error = new Error("Bluetooth or Location permission denied");
      throw error;
    }
  });
  return function requestPermissions() {
    return callback(...arguments);
  };
})();
export const checkBluetoothStatus = tmp4;
export function startScan(arg0) {
  ({ onDeviceFound: require, onError: dependencyMap, onDone: closure_2, scanTime } = arg0);
  let num = 10000;
  if (scanTime !== undefined) {
    num = scanTime;
  }
  bleManager.startDeviceScan(null, null, (message, name) => {
    if (message) {
      callback2(message.message);
      closure_1_4.stopDeviceScan();
      callback3();
    } else if (name != null) {
      if (name.name) {
        const obj = {};
        ({ id: obj.id, id: obj.mac, name: obj.name } = name);
        let str = "Default";
        if (closure_1_5.includes(name.name)) {
          str = name.name;
        }
        obj.deviceImage = str;
        callback(obj);
      }
    }
  });
  const timerId = setTimeout(() => {
    closure_1_4.stopDeviceScan();
    callback3();
  }, num);
}
export const connectDevice = (() => {
  closure_0 = closure_2.default(async (arg0) => {
    let id;
    try {
      if (yield closure_2_6()) {
        if (arg0 != null) {
          if (arg0.device_id) {
            let device_id;
            if (arg0 != null) {
              device_id = arg0.device_id;
            }
            id = device_id;
          }
          const obj = yield new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const timeout = setTimeout(() => {
              const error = new Error("Connection timed out");
              callback2(error);
            }, 30000);
            const connectToDeviceResult = closure_3_4.connectToDevice(closure_0);
            closure_3_4.connectToDevice(closure_0).then((arg0) => {
              clearTimeout(closure_2);
              callback(arg0);
            }).catch((arg0) => {
              clearTimeout(closure_2);
              callback2(arg0);
            });
          });
          yield obj.discoverAllServicesAndCharacteristics();
          yield closure_2_10(obj);
          return obj;
        }
        id = arg0.id;
      } else {
        return null;
      }
    } catch (tmp17) {
      const _Error = Error;
      if (tmp17 instanceof Error) {
        if (tmp18.message === "Connection timed out") {
          const Alert = closure_2_3.Alert;
          Alert.alert("Connection Timed Out", "Please ensure the device is nearby and not connected to another phone.");
        }
        return null;
      }
      const _console = console;
      console.warn("BLE connection error:", tmp17);
    }
  });
  return function connectDevice(parsed) {
    return callback(...arguments);
  };
})();
export const logAllServicesAndCharacteristics = (() => {
  closure_0 = closure_2.default(async (arg0) => {
    try {
      const arr = yield arg0.services();
      let num2 = 0;
      if (0 < arr.length) {
        const arr3 = yield arr2[num2].characteristics();
        let num4 = 0;
        if (0 < arr3.length) {
          if (arr4[num4].isReadable) {
            try {
              const tmp8 = yield obj2.read();
              if (tmp8) {
                if (iter.value) {
                  const _Buffer = callback(closure_2_1[5]).Buffer;
                  closure_2_9(_Buffer.from(iter.value, "base64"));
                }
              }
            } catch (err) {
            }
          }
          const sum = num4 + 1;
          num4 = sum;
          obj2 = arr4[num4];
        }
        const sum1 = num2 + 1;
        num2 = sum1;
        const obj = arr2[num2];
      }
    } catch (err) {
    }
  });
  return function logAllServicesAndCharacteristics(arg0) {
    return callback(...arguments);
  };
})();
export const writeBLECharacteristicValue = tmp5;
export { padLeft };
export function padRight(str, arg1) {
  return str.padEnd(arg1, "0");
}
export function encodeStringToHex(description) {
  const _Buffer = _callSuper.Buffer;
  return _Buffer.from(description, "utf8").toString("hex");
}
export { arrayBufferToHex };
export function hexToArrayBuffer(str) {
  const match = str.match(/[\da-f]{2}/gi);
  if (match) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(match.map((arg0) => parseInt(arg0, 16)));
    return uint8Array.buffer;
  } else {
    const _Error = Error;
    const error = new Error("Invalid hex string");
    throw error;
  }
}
export function buildCycleByte(repeat_type, repeat_days) {
  closure_0 = repeat_type;
  closure_1 = repeat_days;
  const items = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  if (repeat_type === "once") {
    const items1 = [];
    const item = items.forEach((arg0) => {
      items1.push(0);
    });
    const _parseInt2 = parseInt;
    const str7 = parseInt(`1${arr3.join("")}`, 2);
    return padLeft(parseInt(`1${arr3.join("")}`, 2).toString(16).toUpperCase(), 2);
  } else {
    const items2 = [];
    const item1 = items.forEach((name) => {
      if (closure_0 !== "daily") {
        if (!closure_1.includes(name)) {
          items2.push(0);
        }
      }
      items2.push(1);
    });
    const _parseInt = parseInt;
    const str3 = parseInt(`0${arr2.join("")}`, 2);
    return padLeft(parseInt(`0${arr2.join("")}`, 2).toString(16).toUpperCase(), 2);
  }
}
export const setupNotifications = (() => {
  closure_0 = closure_2.default(async (arg0) => {
    yield arg0.monitorCharacteristicForService("0000FE00-0000-1000-8000-00805F9B34FB", "0000FFF1-0000-1000-8000-00805F9B34FB", (arg0, value) => {
      if (arg0) {
        const _console = console;
        console.error("Notification error:", arg0);
      } else if (value != null) {
        if (value.value) {
          const _Buffer = callback(closure_3_1[5]).Buffer;
          closure_3_9(_Buffer.from(value.value, "base64"));
        }
      }
    });
  });
  return function setupNotifications(arg0) {
    return callback(...arguments);
  };
})();
export const closeBLEConnection = (() => {
  closure_0 = closure_2.default(async (arg0) => {
    try {
      if (arg0) {
        yield closure_2_4.cancelDeviceConnection(arg0.id);
      }
    } catch (err) {
    }
  });
  return function closeBLEConnection(closure_3_7) {
    return callback(...arguments);
  };
})();
export const sendSyncTime = tmp6;
export const sendHexCommand = tmp7;
export function getCycleInfo(repeat_type, repeat_days) {
  closure_0 = repeat_type;
  closure_1 = repeat_days;
  const items = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const items1 = [0, 0, 0, 0, 0, 0, 0];
  let num = 0;
  if (repeat_type !== "once") {
    const item = items.forEach((name) => {
      if (closure_0 === "daily") {
        items1[arg1] = 1;
      }
    });
    num = 1;
  }
  const obj = { cycleType: num, cycleWeekList: items1 };
  return obj;
}
export { parseBLEData };
export function readBatteryStatusWithoutMonitor(arg0) {
  closure_0 = arg0;
  return new Promise((() => {
    closure_0 = closure_1_2.default(async (arg0, arg1) => {
      closure_0 = arg0;
      c1 = null;
      try {
        if (yield closure_0.isConnected()) {
          yield closure_0.discoverAllServicesAndCharacteristics();
          const result = closure_0.monitorCharacteristicForService("0000FE00-0000-1000-8000-00805F9B34FB", "0000FFF1-0000-1000-8000-00805F9B34FB", (arg0, value) => {
            if (value != null) {
              if (value.value) {
                const tmp2 = closure_4_12(value.value);
                if (tmp2.battery !== undefined) {
                  if (c1 != null) {
                    c1.remove();
                  }
                  return callback(tmp2.battery);
                }
              }
            }
          });
          c1 = result;
        } else {
          const _console = console;
          console.warn("Device not connected");
          return arg0(undefined);
        }
      } catch (tmp13) {
        if (tmp3 != tmp4) {
          obj.remove();
        }
        tmp2(tmp13);
        obj = tmp3;
      }
    });
    return function(arg0, arg1) {
      return callback(...arguments);
    };
  })());
}
