// Module ID: 233
// Function ID: 2542
// Name: map
// Dependencies: [1, 234, 3, 187, 188, 240, 241, 242, 244, 20, 256, 57]

// Module 233 (map)
import MessageQueue2 from "MessageQueue" /* 3 */;
import invariant from "invariant" /* 20 */;
import keys from "keys" /* 57 */;
import createPerformanceLogger from "createPerformanceLogger" /* 187 */;
import infoLog from "infoLog" /* 188 */;
import defaultExtras from "defaultExtras" /* 234 */;
import _mod240 from "module_240" /* 240 */;
import _callSuper from "_callSuper" /* 241 */;
import HeadlessJsTaskSupport from "HeadlessJsTaskSupport" /* 242 */;
import renderApplication from "renderApplication" /* 244 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(defaultExtras);
const MessageQueue = module_1(MessageQueue2);
let closure_3 = module_1(createPerformanceLogger);
let closure_4 = module_1(infoLog);
let closure_5 = module_1(_mod240);
let closure_6 = module_1(_callSuper);
let closure_7 = module_1(HeadlessJsTaskSupport);
let closure_8 = module_1(renderApplication);
let closure_9 = module_1(invariant);
let closure_10 = {};
let c11 = 1;
let closure_12 = {};
const map = new Map();
const map1 = new Map();
function componentProviderInstrumentationHook(arg0) {
  return arg0();
}
let obj = {
  setWrapperComponentProvider(arg0) {
    closure_16 = arg0;
  },
  setRootViewStyleProvider(arg0) {
    closure_17 = arg0;
  },
  registerConfig(arr) {
    const item = arr.forEach((run) => {
      if (run.run) {
        closure_1_18.registerRunnable(run.appKey, run.run);
      } else {
        closure_1_9.default(run.component != null, "AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.", run.appKey);
        closure_1_18.registerComponent(run.appKey, run.component, run.section);
      }
    });
  },
  registerComponent(LogBox, component, section) {
    closure_0 = LogBox;
    closure_1 = component;
    closure_2 = closure_3.default();
    dependencyMap[LogBox] = (fabric) => {
      ({ initialProps, rootTag } = fabric);
      let tmp2 = closure_1_16;
      if (closure_1_16) {
        tmp2 = closure_1_16(fabric);
      }
      let tmp4 = closure_1_17;
      if (closure_1_17) {
        tmp4 = closure_1_17(fabric);
      }
      closure_1_8.default(closure_1_15(closure_1, closure_2), initialProps, rootTag, tmp2, tmp4, fabric.fabric, closure_2, closure_0 === "LogBox", closure_0, arg1);
    };
    if (section) {
      closure_12[LogBox] = dependencyMap[LogBox];
    }
    return LogBox;
  },
  registerRunnable(appKey, run) {
    closure_10[appKey] = run;
    return appKey;
  },
  registerSection(LogBox, component) {
    obj.registerComponent(LogBox, component, true);
  },
  getAppKeys() {
    return Object.keys(closure_10);
  },
  getSectionKeys() {
    return Object.keys(closure_12);
  },
  getSections() {
    return Object.assign({}, closure_12);
  },
  getRunnable(arg0) {
    return dependencyMap[arg0];
  },
  getRegistry() {
    obj = { sections: obj.getSectionKeys(), runnables: Object.assign({}, closure_10) };
    return obj;
  },
  setComponentProviderInstrumentationHook(arg0) {
    closure_15 = arg0;
  },
  runApplication(name) {
    if (name !== "LogBox") {
      const _HermesInternal = HermesInternal;
      const combined = "Running \"" + name + "\"" + "";
      closure_4.default(combined);
      closure_11 = tmp7 + 1;
      mod.default.addSource(`AppRegistry.runApplication${+closure_11}`, () => combined);
      const _default = mod.default;
    }
    closure_9.default(dependencyMap[name], `${"\"" + name + "\" has not been registered. This can happen if:\n"}* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
    * A module failed to load due to an error and \`AppRegistry.registerComponent\` wasn't called.`);
    mod2.default.setActiveScene({ name });
    dependencyMap[name](arg1, combined(256).coerceDisplayMode(arg2));
  },
  setSurfaceProps(arg0, navigationKey) {
    if (arg0 !== "LogBox") {
      const _JSON = JSON;
      const text = `Updating props for Surface "${arg0}`;
      const text1 = `${`Updating props for Surface "${arg0}`}" with ${JSON.stringify(navigationKey)}`;
      closure_4.default(text1);
      closure_11 = tmp8 + 1;
      mod.default.addSource(`AppRegistry.setSurfaceProps${+closure_11}`, () => text1);
      const _default = mod.default;
    }
    closure_9.default(dependencyMap[arg0], `${"\"" + arg0 + "\" has not been registered. This can happen if:\n"}* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
    * A module failed to load due to an error and \`AppRegistry.registerComponent\` wasn't called.`);
    dependencyMap[arg0](navigationKey, text1(256).coerceDisplayMode(arg2));
  },
  unmountApplicationComponentAtRootTag(arg0) {
    const result = keys.unmountComponentAtNodeAndRemoveContainer(arg0);
  },
  registerHeadlessTask(arg0, arg1) {
    const result = this.registerCancellableHeadlessTask(arg0, arg1, () => () => {

    });
  },
  registerCancellableHeadlessTask(arg0, arg1, arg2) {
    if (map.has(arg0)) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '" + arg0 + "'");
    }
    const result = map.set(arg0, arg1);
    const result1 = map1.set(arg0, arg2);
  },
  startHeadlessTask(arg0, arg1, arg2) {
    closure_0 = arg0;
    const value = map.get(arg1);
    if (value) {
      const promise = value()(arg2);
      value()(arg2).then(() => {
        if (closure_1_7.default) {
          closure_1_7.default.notifyTaskFinished(closure_0);
          const _default = closure_1_7.default;
        }
      }).catch((arg0) => {
        console.error(arg0);
        if (closure_1_7.default) {
          if (arg0 instanceof closure_1_6.default) {
            closure_1_7.default.notifyTaskRetry(closure_0).then((arg0) => {
              if (!arg0) {
                closure_2_7.default.notifyTaskFinished(closure_1_0);
                const _default = closure_2_7.default;
              }
            });
            let _default = closure_1_7.default;
            const notifyTaskRetryResult = closure_1_7.default.notifyTaskRetry(closure_0);
          }
        }
      });
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("No task registered for key " + arg1);
      if (mod3.default) {
        mod3.default.notifyTaskFinished(arg0);
        let _default = mod3.default;
      }
    }
  },
  cancelHeadlessTask(arg0, arg1) {
    const value = map1.get(arg1);
    if (value) {
      value()();
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("No task canceller registered for key '" + arg1 + "'");
      throw error;
    }
  }
};
obj.registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = obj;
global.RN$SurfaceRegistry = { renderSurface: obj.runApplication, setSurfaceProps: obj.setSurfaceProps };
MessageQueue.default("AppRegistry", obj);

export default obj;
