// Module ID: 3
// Function ID: 165
// Name: MessageQueue
// Dependencies: [4]

// Module 3 (MessageQueue)
import MessageQueue from "MessageQueue" /* 4 */;

const global = arg0;
require = arg1;
const dependencyMap = arg6;
arg5.default = (() => {
  if (_global.RN$Bridgeless === true) {
    return (arg0, fn) => {
      closure_0 = fn;
      if (typeof fn === "function") {
        const result = closure_0.RN$registerCallableModule(arg0, fn);
      } else {
        const result1 = closure_0.RN$registerCallableModule(arg0, () => closure_0);
      }
    };
  } else {
    _global = MessageQueue.default;
    return (RNCWebViewMessagingModule, fn) => {
      if (typeof fn === "function") {
        const result = closure_0.registerLazyCallableModule(RNCWebViewMessagingModule, fn);
      } else {
        const result1 = closure_0.registerCallableModule(RNCWebViewMessagingModule, fn);
      }
    };
  }
})();
