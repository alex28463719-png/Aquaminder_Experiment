// Module ID: 36
// Function ID: 327
// Name: requireModule
// Dependencies: [1, 20, 37]
// Exports: get, getEnforcing

// Module 36 (requireModule)
import invariant from "invariant" /* 20 */;
import genModule from "genModule" /* 37 */;
import module_1 from "module_1" /* 1 */;

function requireModule(StatusBarManager) {
  if (__turboModuleProxy != null) {
    const tmp2 = __turboModuleProxy(StatusBarManager);
    if (tmp2 != null) {
      return tmp2;
    }
  }
  if (global.RN$Bridgeless === true) {
    return null;
  }
  const tmp5 = genModule.default[StatusBarManager];
  return tmp5 != null ? tmp5 : undefined;
}
let closure_3 = module_1(invariant);
const __turboModuleProxy = global.__turboModuleProxy;

export function get(StatusBarManager) {
  return requireModule(StatusBarManager);
}
export function getEnforcing(StatusBarManager) {
  const tmp = requireModule(StatusBarManager);
  closure_3.default(tmp != null, `${"TurboModuleRegistry.getEnforcing(...): '" + StatusBarManager + "' could not be found. "}Verify that a module by this name is registered in the native binary.`);
  return tmp;
}
