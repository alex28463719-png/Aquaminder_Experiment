// Module ID: 502
// Function ID: 5476
// Dependencies: [503, 505, 509, 511, 510, 507, 508, 504]

// Module 502
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(503) /* _callSuper */.BleATTErrorCode;
  }
};
Object.defineProperty(arg5, "BleATTErrorCode", obj);
obj = {
  enumerable: true,
  get() {
    return require(503) /* _callSuper */.BleAndroidErrorCode;
  }
};
Object.defineProperty(arg5, "BleAndroidErrorCode", obj);
obj = {
  enumerable: true,
  get() {
    return require(503) /* _callSuper */.BleError;
  }
};
Object.defineProperty(arg5, "BleError", obj);
Object.defineProperty(arg5, "BleErrorCode", {
  enumerable: true,
  get() {
    return require(503) /* _callSuper */.BleErrorCode;
  }
});
Object.defineProperty(arg5, "BleIOSErrorCode", {
  enumerable: true,
  get() {
    return require(503) /* _callSuper */.BleIOSErrorCode;
  }
});
Object.defineProperty(arg5, "BleManager", {
  enumerable: true,
  get() {
    return require(505) /* BleManager */.BleManager;
  }
});
Object.defineProperty(arg5, "Characteristic", {
  enumerable: true,
  get() {
    return require(509) /* Characteristic */.Characteristic;
  }
});
Object.defineProperty(arg5, "ConnectionPriority", {
  enumerable: true,
  get() {
    return require(511).ConnectionPriority;
  }
});
Object.defineProperty(arg5, "Descriptor", {
  enumerable: true,
  get() {
    return require(510) /* Descriptor */.Descriptor;
  }
});
Object.defineProperty(arg5, "Device", {
  enumerable: true,
  get() {
    return require(507) /* Device */.Device;
  }
});
Object.defineProperty(arg5, "LogLevel", {
  enumerable: true,
  get() {
    return require(511).LogLevel;
  }
});
Object.defineProperty(arg5, "ScanCallbackType", {
  enumerable: true,
  get() {
    return require(511).ScanCallbackType;
  }
});
Object.defineProperty(arg5, "ScanMode", {
  enumerable: true,
  get() {
    return require(511).ScanMode;
  }
});
Object.defineProperty(arg5, "Service", {
  enumerable: true,
  get() {
    return require(508) /* Service */.Service;
  }
});
Object.defineProperty(arg5, "State", {
  enumerable: true,
  get() {
    return require(511).State;
  }
});
Object.defineProperty(arg5, "fullUUID", {
  enumerable: true,
  get() {
    return require(504) /* fillStringWithArguments */.fullUUID;
  }
});
