// Module ID: 182
// Function ID: 2011
// Name: BlobModule
// Dependencies: [36]

// Module 182 (BlobModule)
import requireModule2 from "requireModule" /* 36 */;

let requireModule = _interopRequireWildcard(requireModule2);
const value = requireModule.get("BlobModule");
let tmp3 = null;
let c1 = null;
if (value != null) {
  requireModule = {
    getConstants() {
        if (constants == null) {
          constants = value.getConstants();
        }
        return constants;
      },
    addNetworkingHandler() {
        value.addNetworkingHandler();
      },
    addWebSocketHandler(arg0) {
        value.addWebSocketHandler(arg0);
      },
    removeWebSocketHandler(arg0) {
        const result = value.removeWebSocketHandler(arg0);
      },
    sendOverSocket(arg0, arg1) {
        value.sendOverSocket(arg0, arg1);
      },
    createFromParts(arg0, arg1) {
        const fromParts = value.createFromParts(arg0, arg1);
      },
    release(arg0) {
        value.release(arg0);
      }
  };
  tmp3 = requireModule;
}

export default tmp3;
