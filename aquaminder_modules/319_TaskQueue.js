// Module ID: 319
// Function ID: 3804
// Name: TaskQueue
// Dependencies: [1, 12, 13, 20]

// Module 319 (TaskQueue)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);

export default (() => {
  class TaskQueue {
    constructor(arg0) {
      defaultResult = closure_1_2.default(this, TaskQueue);
      this._onMoreTasks = arg0.onMoreTasks;
      items = [];
      items[0] = { tasks: [], popable: false };
      this._queueStack = items;
      return;
    }
  }
  let obj = {
    key: "enqueue",
    value: function enqueue(arg0) {
      this._getCurrentQueue().push(arg0);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "enqueueTasks",
    value: function enqueueTasks(closure_1) {
      const self = this;
      const item = closure_1.forEach((arg0) => self.enqueue(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "cancelTasks",
    value: function cancelTasks(closure_1) {
      closure_0 = closure_1;
      const _queueStack = this._queueStack;
      const mapped = _queueStack.map((tasks) => {
        tasks = tasks.tasks;
        return Object.assign({}, tasks, { tasks: tasks.filter((arg0) => closure_1_0.indexOf(arg0) === -1) });
      });
      this._queueStack = mapped.filter((tasks) => {
        let tmp = tasks.tasks.length > 0;
        if (!tmp) {
          tmp = arg1 === 0;
        }
        return tmp;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasTasksToProcess",
    value: function hasTasksToProcess() {
      return this._getCurrentQueue().length > 0;
    }
  };
  items[4] = {
    key: "processNext",
    value: function processNext() {
      const self = this;
      const _getCurrentQueueResult = this._getCurrentQueue();
      if (_getCurrentQueueResult.length) {
        const arr = _getCurrentQueueResult.shift();
        try {
          if (typeof arr === "object") {
            if (arr.gen) {
              self._genPromise(arr);
            }
          }
          if (typeof arr === "object") {
            if (arr.run) {
              arr.run();
            }
          }
          const _JSON = JSON;
          TaskQueue(closure_1_1[3])(typeof arr === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(arr, null, 2));
          arr();
          const tmp9 = TaskQueue(closure_1_1[3]);
        } catch (tmp19) {
          const name = tmp.name;
          let str4 = name;
          if (!name) {
            str4 = "";
          }
          tmp19.message = "TaskQueue: Error with task " + str4 + ": " + tmp19.message;
          throw tmp19;
        }
      }
    }
  };
  items[5] = {
    key: "_getCurrentQueue",
    value: function _getCurrentQueue() {
      const self = this;
      if (this._queueStack[this._queueStack.length - 1].popable) {
        if (tmp.tasks.length === 0) {
          if (self._queueStack.length > 1) {
            const _queueStack = self._queueStack;
            _queueStack.pop();
            return self._getCurrentQueue();
          }
        }
      }
      return this._queueStack[this._queueStack.length - 1].tasks;
    }
  };
  items[6] = {
    key: "_genPromise",
    value: function _genPromise(arr) {
      closure_0 = arr;
      const self = this;
      const _queueStack = this._queueStack;
      _queueStack.push({ tasks: [], popable: false });
      closure_2 = this._queueStack[this._queueStack.length - 1];
      const genResult = arr.gen();
      arr.gen().then(() => {
        closure_2.popable = true;
        if (self.hasTasksToProcess()) {
          self._onMoreTasks();
        }
      }).catch((arg0) => {
        closure_0 = arg0;
        const timerId = setTimeout(() => {
          closure_0.message = "TaskQueue: Error resolving Promise in task " + closure_0.name + ": " + closure_0.message;
          throw closure_0;
        }, 0);
      });
    }
  };
  return closure_3.default(TaskQueue, items);
})();
