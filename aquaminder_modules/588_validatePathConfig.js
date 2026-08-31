// Module ID: 588
// Function ID: 6404
// Name: validatePathConfig
// Dependencies: [1, 38]

// Module 588 (validatePathConfig)
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;

function validatePathConfig(config) {
  closure_0 = config;
  let flag = true;
  if (arguments.length > 1) {
    flag = true;
    if (arguments[1] !== undefined) {
      flag = arguments[1];
    }
  }
  let obj = null;
  if (!flag) {
    obj = { alias: "array", exact: "boolean", stringify: "object", parse: "object" };
  }
  const merged = Object.assign({ path: "string", initialRouteName: "string", screens: "object" }, obj);
  if (typeof config === "object") {
    if (config !== null) {
      const _Object2 = Object;
      const _Object3 = Object;
      const keys = Object.keys(config);
      const mapped = keys.map((arg0) => {
        if (arg0 in merged) {
          if (config[arg0] !== undefined) {
            if (tmp2 === "array") {
              const _Array = Array;
              if (!Array.isArray(tmp4)) {
                const items = [arg0, ];
                const _HermesInternal2 = HermesInternal;
                items[1] = "expected 'Array', got '" + typeof tmp4 + "'";
                return items;
              }
            } else if (typeof tmp4 !== tmp2) {
              const items1 = [arg0, ];
              const _HermesInternal = HermesInternal;
              items1[1] = "expected '" + tmp2 + "', got '" + tmp5 + "'";
              return items1;
            }
          }
          return null;
        } else {
          const items2 = [arg0, "extraneous"];
          return items2;
        }
      });
      const _Boolean = Boolean;
      const fromEntriesResult = Object.fromEntries(mapped.filter(Boolean));
      const _Object4 = Object;
      if (Object.keys(fromEntriesResult).length) {
        const _Error2 = Error;
        const tmp8 = merged(fromEntriesResult);
        let _HermesInternal2 = HermesInternal;
        const error = new Error("Found invalid properties in the configuration:\n" + tmp8 + "\n\nYou can only specify the following properties:\n" + merged(merged) + "\n\nIf you want to specify configuration for screens, you need to specify them under a 'screens' property.\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
        throw error;
      } else {
        if (flag) {
          if ("path" in config) {
            if (typeof config.path === "string") {
              const path = config.path;
              if (path.includes(":")) {
                const _Error = Error;
                let _HermesInternal = HermesInternal;
                const error1 = new Error("Found invalid path '" + config.path + "'. The 'path' in the top-level configuration cannot contain patterns for params.");
                throw error1;
              }
            }
          }
        }
        if ("screens" in config) {
          if (config.screens) {
            const _Object = Object;
            const entries = Object.entries(config.screens);
            const item = entries.forEach((arg0) => {
              const tmp2 = config.default(arg0, 2)[1];
              if (typeof tmp2 !== "string") {
                closure_1_2(tmp2, false);
              }
            });
          }
        }
      }
    }
  }
  const error2 = new Error("Expected the configuration to be an object, but got " + JSON.stringify(config) + ".");
  throw error2;
}
let closure_0 = module_1(_slicedToArray);
function formatToList(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((arg0) => {
    const defaultResult = closure_1_0.default(arg0, 2);
    return "- " + defaultResult[0] + " (" + defaultResult[1] + ")";
  });
  return mapped.join("\n");
}

export { validatePathConfig };
