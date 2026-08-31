// Module ID: 226
// Function ID: 2512
// Dependencies: [1, 3, 17, 154, 227, 22, 228, 186, 229]

// Module 226
import MessageQueue2 from "MessageQueue" /* 3 */;
import module_1 from "module_1" /* 1 */;

const MessageQueue = module_1(MessageQueue2);
MessageQueue.default("Systrace", () => require(17) /* isEnabled */);
if (global.RN$Bridgeless !== true) {
  MessageQueue.default("JSTimers", () => require(154) /* _getFreeIndex */.default);
}
MessageQueue.default("RCTLog", () => require(227) /* invariant */.default);
MessageQueue.default("RCTDeviceEventEmitter", () => require(22) /* _callSuper */.default);
MessageQueue.default("RCTNativeAppEventEmitter", () => require(228).default);
MessageQueue.default("GlobalPerformanceLogger", () => require(186).default);
MessageQueue.default("HMRClient", () => require(229).default);
