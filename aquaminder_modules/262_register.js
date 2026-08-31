// Module ID: 262
// Function ID: 2705
// Name: register
// Dependencies: [1, 3]

// Module 262 (register)
import MessageQueue from "MessageQueue" /* 3 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(MessageQueue);

export default {
  register(arg0) {
    closure_0.default("RCTEventEmitter", arg0);
  }
};
