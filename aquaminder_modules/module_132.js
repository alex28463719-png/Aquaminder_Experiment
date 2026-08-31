// Module ID: 132
// Function ID: 1494
// Dependencies: [1, 133, 137]

// Module 132
import Performance2 from "Performance" /* 133 */;
import NativePerformanceCxx from "NativePerformanceCxx" /* 137 */;
import module_1 from "module_1" /* 1 */;

const Performance = module_1(Performance2);
if (module_1(NativePerformanceCxx).default) {
  let _default = Performance.default;
  const prototype = _default.prototype;
  _default = new _default();
  global.performance = _default;
} else if (!global.performance) {
  const obj = {
    mark() {

      },
    measure() {

      },
    now() {
        let now = global.nativePerformanceNow;
        if (!now) {
          const _Date = Date;
          now = Date.now;
        }
        return now();
      }
  };
  global.performance = obj;
}
