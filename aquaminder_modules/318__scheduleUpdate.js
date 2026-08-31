// Module ID: 318
// Function ID: 3791
// Name: _scheduleUpdate
// Dependencies: [1, 73, 30, 20, 319, 4, 320]

// Module 318 (_scheduleUpdate)
import MessageQueue from "MessageQueue" /* 4 */;
import invariant from "invariant" /* 20 */;
import allocate from "allocate" /* 30 */;
import animatedShouldDebounceQueueFlush2 from "animatedShouldDebounceQueueFlush" /* 73 */;
import TaskQueue from "TaskQueue" /* 319 */;
import reject from "reject" /* 320 */;
import module_1 from "module_1" /* 1 */;

function _scheduleUpdate() {
  if (!timeout) {
    if (c9 > 0) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(_processUpdate, 0);
    } else {
      const _setImmediate = setImmediate;
      timeout = setImmediate(_processUpdate);
    }
  }
}
function _processUpdate() {
  c7 = 0;
  const size = set.size;
  const item = set1.forEach((arg0) => closure_1_3.add(arg0));
  const item1 = set2.forEach((arg0) => closure_1_3.delete(arg0));
  const size2 = set.size;
  if (size !== 0) {
    if (size2 === 0) {
      animatedShouldDebounceQueueFlush.emit(animatedShouldDebounceQueueFlush.Events.interactionComplete);
    }
    if (size2 === 0) {
      if (_default1.hasTasksToProcess()) {
        while (true) {
          let tmp10 = _default1;
          let processNextResult = _default1.processNext();
          let tmp12 = c9;
          if (c9 > 0) {
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let _default = MessageQueue.default;
            let tmp15 = c9;
            if (_default.getEventLoopRunningTime() >= c9) {
              break;
            }
          }
          let tmp16 = _default1;
        }
        _scheduleUpdate();
      }
    }
    set1.clear();
    set2.clear();
  }
  if (size === 0) {
    if (size2 !== 0) {
      animatedShouldDebounceQueueFlush.emit(animatedShouldDebounceQueueFlush.Events.interactionStart);
    }
  }
}
let animatedShouldDebounceQueueFlush = _interopRequireWildcard(animatedShouldDebounceQueueFlush2);
animatedShouldDebounceQueueFlush = new module_1(allocate).default();
animatedShouldDebounceQueueFlush = {
  Events: { interactionStart: "interactionStart", interactionComplete: "interactionComplete" },
  runAfterInteractions(arg0) {
    closure_0 = arg0;
    closure_1 = [];
    const promise = new Promise((run) => {
      closure_1_12();
      if (name) {
        arr = arr.push(name);
      }
      const obj = { run };
      let str = name;
      if (name) {
        str = name.name;
      }
      if (!str) {
        str = "?";
      }
      obj.name = `resolve ${str}`;
      arr = arr.push(obj);
      closure_1_6.enqueueTasks(arr);
    });
    const then = promise.then;
    return {
      then: then.bind(promise),
      cancel() {
        closure_1_6.cancelTasks(closure_1);
      }
    };
  },
  createInteractionHandle() {
    _scheduleUpdate();
    const sum = c8 + 1;
    c8 = sum;
    set1.add(sum);
    return sum;
  },
  clearInteractionHandle(arg0) {
    invariant(arg0, "InteractionManager: Must provide a handle to clear.");
    _scheduleUpdate();
    set1.delete(arg0);
    set2.add(arg0);
  },
  addListener: addListener.bind(animatedShouldDebounceQueueFlush),
  setDeadline(arg0) {
    closure_9 = arg0;
  }
};
addListener = animatedShouldDebounceQueueFlush.addListener;
const set = new Set();
const set1 = new Set();
const set2 = new Set();
const _default1 = new TaskQueue.default({ onMoreTasks: _scheduleUpdate });
let c7 = 0;
let c8 = 0;
let c9 = -1;
if (animatedShouldDebounceQueueFlush.disableInteractionManager()) {
  animatedShouldDebounceQueueFlush = reject.default;
}

export default animatedShouldDebounceQueueFlush;
