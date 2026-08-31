// Module ID: 503
// Function ID: 5493
// Name: _callSuper
// Dependencies: [1, 99, 13, 12, 23, 25, 28, 160, 504]
// Exports: parseBleError

// Module 503 (_callSuper)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 23 */;
import _getPrototypeOf from "_getPrototypeOf" /* 25 */;
import _inherits from "_inherits" /* 28 */;
import _defineProperty2 from "_defineProperty" /* 99 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 160 */;
import module_1 from "module_1" /* 1 */;

function _callSuper(arg0, arg1, arg2) {
  const defaultResult = closure_5.default(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(defaultResult, items, closure_5.default(arg0).constructor);
  } else {
    constructResult = defaultResult.apply(arg0, undefined);
  }
  return closure_4.default(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const _defineProperty = module_1(_defineProperty2);
let closure_2 = module_1(_defineProperties);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_possibleConstructorReturn);
let closure_5 = module_1(_getPrototypeOf);
let closure_6 = module_1(_inherits);
let tmp3 = ((arg0) => {
  class BleError {
    constructor(arg0, arg1) {
      defaultResult = closure_1_3.default(this, BleError);
      tmp2 = closure_1_10(this, BleError);
      tmp2.message = arg1[closure_1_8.UnknownError];
      if (typeof arg0 === "string") {
        tmp6 = closure_1_8;
        tmp2.errorCode = closure_1_8.UnknownError;
        tmp7 = null;
        tmp2.attErrorCode = null;
        tmp2.iosErrorCode = null;
        tmp2.androidErrorCode = null;
        tmp2.reason = arg0;
      } else {
        tmp3 = arg1[arg0.errorCode];
        if (tmp3) {
          tmp4 = BleError;
          tmp5 = closure_1_1;
          num = 8;
          tmp2.message = BleError(closure_1_1[8]).fillStringWithArguments(tmp3, arg0);
        }
        ({ errorCode: tmp2.errorCode, attErrorCode: tmp2.attErrorCode, iosErrorCode: tmp2.iosErrorCode, androidErrorCode: tmp2.androidErrorCode, reason: tmp2.reason } = arg0);
      }
      tmp2.name = "BleError";
      return tmp2;
    }
  }
  closure_6.default(BleError, arg0);
  return closure_2.default(BleError);
})(module_1(_wrapNativeSuper).default(Error));
let closure_7 = tmp3;
let obj = { UnknownError: 0, BluetoothManagerDestroyed: 1, OperationCancelled: 2, OperationTimedOut: 3, OperationStartFailed: 4, InvalidIdentifiers: 5, BluetoothUnsupported: 100, BluetoothUnauthorized: 101, BluetoothPoweredOff: 102, BluetoothInUnknownState: 103, BluetoothResetting: 104, BluetoothStateChangeFailed: 105, DeviceConnectionFailed: 200, DeviceDisconnected: 201, DeviceRSSIReadFailed: 202, DeviceAlreadyConnected: 203, DeviceNotFound: 204, DeviceNotConnected: 205, DeviceMTUChangeFailed: 206, ServicesDiscoveryFailed: 300, IncludedServicesDiscoveryFailed: 301, ServiceNotFound: 302, ServicesNotDiscovered: 303, CharacteristicsDiscoveryFailed: 400, CharacteristicWriteFailed: 401, CharacteristicReadFailed: 402, CharacteristicNotifyChangeFailed: 403, CharacteristicNotFound: 404, CharacteristicsNotDiscovered: 405, CharacteristicInvalidDataFormat: 406, DescriptorsDiscoveryFailed: 500, DescriptorWriteFailed: 501, DescriptorReadFailed: 502, DescriptorNotFound: 503, DescriptorsNotDiscovered: 504, DescriptorInvalidDataFormat: 505, DescriptorWriteNotAllowed: 506, ScanStartFailed: 600, LocationServicesDisabled: 601 };
obj = {};
({ default: _default, default: _default2, default: _default3, default: _default4, default: _default5, default: _default6, default: _default7, default: _default8, default: _default9 } = _defineProperty);
_default(_default2(_default3(_default4(_default5(_default6(_default7(_default8(_default9(_defineProperty.default(obj, obj.UnknownError, "Unknown error occurred. This is probably a bug! Check reason property."), obj.BluetoothManagerDestroyed, "BleManager was destroyed"), obj.OperationCancelled, "Operation was cancelled"), obj.OperationTimedOut, "Operation timed out"), obj.OperationStartFailed, "Operation was rejected"), obj.InvalidIdentifiers, "Invalid UUIDs or IDs were passed: {internalMessage}"), obj.BluetoothUnsupported, "BluetoothLE is unsupported on this device"), obj.BluetoothUnauthorized, "Device is not authorized to use BluetoothLE"), obj.BluetoothPoweredOff, "BluetoothLE is powered off"), obj.BluetoothInUnknownState, "BluetoothLE is in unknown state");
({ default: _default10, default: _default11, default: _default12, default: _default13, default: _default14, default: _default15, default: _default16, default: _default17, default: _default18 } = _defineProperty);
_default10(_default11(_default12(_default13(_default14(_default15(_default16(_default17(_default18(_defineProperty.default(obj, obj.BluetoothResetting, "BluetoothLE is resetting"), obj.BluetoothStateChangeFailed, "Bluetooth state change failed"), obj.DeviceConnectionFailed, "Device {deviceID} connection failed"), obj.DeviceDisconnected, "Device {deviceID} was disconnected"), obj.DeviceRSSIReadFailed, "RSSI read failed for device {deviceID}"), obj.DeviceAlreadyConnected, "Device {deviceID} is already connected"), obj.DeviceNotFound, "Device {deviceID} not found"), obj.DeviceNotConnected, "Device {deviceID} is not connected"), obj.DeviceMTUChangeFailed, "Device {deviceID} could not change MTU size"), obj.ServicesDiscoveryFailed, "Services discovery failed for device {deviceID}");
({ default: _default19, default: _default20, default: _default21, default: _default22, default: _default23, default: _default24, default: _default25, default: _default26, default: _default27 } = _defineProperty);
_default19(_default20(_default21(_default22(_default23(_default24(_default25(_default26(_default27(_defineProperty.default(obj, obj.IncludedServicesDiscoveryFailed, "Included services discovery failed for device {deviceID} and service: {serviceUUID}"), obj.ServiceNotFound, "Service {serviceUUID} for device {deviceID} not found"), obj.ServicesNotDiscovered, "Services not discovered for device {deviceID}"), obj.CharacteristicsDiscoveryFailed, "Characteristic discovery failed for device {deviceID} and service {serviceUUID}"), obj.CharacteristicWriteFailed, "Characteristic {characteristicUUID} write failed for device {deviceID} and service {serviceUUID}"), obj.CharacteristicReadFailed, "Characteristic {characteristicUUID} read failed for device {deviceID} and service {serviceUUID}"), obj.CharacteristicNotifyChangeFailed, "Characteristic {characteristicUUID} notify change failed for device {deviceID} and service {serviceUUID}"), obj.CharacteristicNotFound, "Characteristic {characteristicUUID} not found"), obj.CharacteristicsNotDiscovered, "Characteristics not discovered for device {deviceID} and service {serviceUUID}"), obj.CharacteristicInvalidDataFormat, "Cannot write to characteristic {characteristicUUID} with invalid data format: {internalMessage}");
({ default: _default28, default: _default29, default: _default30, default: _default31, default: _default32, default: _default33, default: _default34, default: _default35 } = _defineProperty);
const _default28Result = _default28(_default29(_default30(_default31(_default32(_default33(_default34(_default35(_defineProperty.default(obj, obj.DescriptorsDiscoveryFailed, "Descriptor {descriptorUUID} discovery failed for device {deviceID}, service {serviceUUID} and characteristic {characteristicUUID}"), obj.DescriptorWriteFailed, "Descriptor {descriptorUUID} write failed for device {deviceID}, service {serviceUUID} and characteristic {characteristicUUID}"), obj.DescriptorReadFailed, "Descriptor {descriptorUUID} read failed for device {deviceID}, service {serviceUUID} and characteristic {characteristicUUID}"), obj.DescriptorNotFound, "Descriptor {descriptorUUID} not found"), obj.DescriptorsNotDiscovered, "Descriptors not discovered for device {deviceID}, service {serviceUUID} and characteristic {characteristicUUID}"), obj.DescriptorInvalidDataFormat, "Cannot write to descriptor {descriptorUUID} with invalid data format: {internalMessage}"), obj.DescriptorWriteNotAllowed, "Cannot write to descriptor {descriptorUUID}. It's not allowed by iOS and therefore forbidden on Android as well."), obj.ScanStartFailed, "Cannot start scanning operation"), obj.LocationServicesDisabled, "Location services are disabled");

export function parseBleError(first, _errorCodesToMessagesMapping) {
  let tmp3 = _errorCodesToMessagesMapping;
  if (!_errorCodesToMessagesMapping) {
    tmp3 = closure_9;
  }
  try {
    const _JSON = JSON;
    const prototype = ctor.prototype;
    let tmp11 = new ctor(JSON.parse(first), tmp4);
    return tmp11;
  } catch (err) {
    const prototype2 = ctor.prototype;
    tmp11 = new ctor(tmp2, tmp);
  }
}
export const BleError = tmp3;
export const BleErrorCode = obj;
export const BleErrorCodeMessage = _default28Result;
export const BleATTErrorCode = { Success: 0, InvalidHandle: 1, ReadNotPermitted: 2, WriteNotPermitted: 3, InvalidPdu: 4, InsufficientAuthentication: 5, RequestNotSupported: 6, InvalidOffset: 7, InsufficientAuthorization: 8, PrepareQueueFull: 9, AttributeNotFound: 10, AttributeNotLong: 11, InsufficientEncryptionKeySize: 12, InvalidAttributeValueLength: 13, UnlikelyError: 14, InsufficientEncryption: 15, UnsupportedGroupType: 16, InsufficientResources: 17 };
export const BleIOSErrorCode = { Unknown: 0, InvalidParameters: 1, InvalidHandle: 2, NotConnected: 3, OutOfSpace: 4, OperationCancelled: 5, ConnectionTimeout: 6, PeripheralDisconnected: 7, UuidNotAllowed: 8, AlreadyAdvertising: 9, ConnectionFailed: 10, ConnectionLimitReached: 11, UnknownDevice: 12 };
export const BleAndroidErrorCode = { NoResources: 128, InternalError: 129, WrongState: 130, DbFull: 131, Busy: 132, Error: 133, CmdStarted: 134, IllegalParameter: 135, Pending: 136, AuthFail: 137, More: 138, InvalidCfg: 139, ServiceStarted: 140, EncrypedNoMitm: 141, NotEncrypted: 142, Congested: 143 };
