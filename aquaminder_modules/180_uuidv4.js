// Module ID: 180
// Function ID: 1991
// Name: uuidv4
// Dependencies: [1, 12, 13, 181, 20, 183, 184]

// Module 180 (uuidv4)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import invariant from "invariant" /* 20 */;
import BlobModule2 from "BlobModule" /* 181 */;
import module_1 from "module_1" /* 1 */;

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
    const tmp = Math.random() * 16 | 0;
    let str = tmp;
    if (arg0 != "x") {
      str = tmp & 3 | 8;
    }
    return str.toString(16);
  });
}
function createBlobCollector(arg0) {
  if (global.__blobCollectorProvider == null) {
    return null;
  } else {
    return global.__blobCollectorProvider(arg0);
  }
}
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
const BlobModule = module_1(BlobModule2);
let closure_6 = module_1(invariant);
const tmp4 = (() => {
  class BlobManager {
    constructor() {
      defaultResult = closure_1_3.default(this, BlobManager);
      return;
    }
  }
  let obj = {
    key: "createFromParts",
    value: function createFromParts(arr, type) {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      const tmp2 = closure_1_7();
      const mapped = arr.map((data) => {
        if (!(data instanceof ArrayBuffer)) {
          const _ArrayBuffer = ArrayBuffer;
          if (!ArrayBuffer.isView(data)) {
            const obj = {};
            if (data instanceof closure_2_1(closure_2_2[5]).default) {
              obj.data = data.data;
              obj.type = "blob";
              return obj;
            } else {
              const _String = String;
              obj.data = String(data);
              obj.type = "string";
              return obj;
            }
          }
        }
        const error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
        throw error;
      });
      const reduced = mapped.reduce((arg0, type) => {
        if (type.type === "string") {
          const _encodeURI = encodeURI;
          return arg0 + BlobManager.unescape(encodeURI(type.data)).length;
        } else {
          return arg0 + type.data.size;
        }
      }, 0);
      const fromParts = closure_1_5.default.createFromParts(mapped, tmp2);
      let obj = { blobId: tmp2, offset: 0, size: reduced };
      let str = "";
      if (type) {
        str = type.type;
      }
      obj.type = str;
      if (type) {
        let lastModified = type.lastModified;
      } else {
        const _Date = Date;
        lastModified = Date.now();
      }
      obj.lastModified = lastModified;
      return BlobManager.createFromOptions(obj);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let obj = closure_1_1(closure_1_2[6]);
      obj.register(_response.blobId);
      obj = {};
      let merged = _response;
      obj = Object.create(closure_1_1(closure_1_2[5]).default.prototype);
      if (_response.__collector == null) {
        const _Object = Object;
        const obj1 = { __collector: closure_1_8(_response.blobId) };
        merged = Object.assign({}, _response, obj1);
      }
      obj.data = merged;
      return Object.assign(obj, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "release",
    value: function release(arg0) {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      closure_1_1(closure_1_2[6]).unregister(arg0);
      const obj = closure_1_1(closure_1_2[6]);
      if (!obj2.has(arg0)) {
        closure_1_5.default.release(arg0);
      }
      obj2 = closure_1_1(closure_1_2[6]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      closure_1_5.default.addNetworkingHandler();
    }
  };
  items[4] = {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      closure_1_5.default.addWebSocketHandler(arg0);
    }
  };
  items[5] = {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      const result = closure_1_5.default.removeWebSocketHandler(arg0);
    }
  };
  items[6] = {
    key: "sendOverSocket",
    value: function sendOverSocket(data) {
      closure_1_6.default(closure_1_5.default, "NativeBlobModule is available.");
      closure_1_5.default.sendOverSocket(data.data, arg1);
    }
  };
  return closure_4.default(BlobManager, null, items);
})();
tmp4.isAvailable = BlobModule.default;

export default tmp4;
