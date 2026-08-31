// Module ID: 644
// Function ID: 6842
// Name: useTheme
// Dependencies: [1, 2, 645]
// Exports: useTheme

// Module 644 (useTheme)
import _mod645 from "module_645" /* 645 */;
import module_1 from "module_1" /* 1 */;
import closure_0 from "get registerCallableModule" /* 2 */;

let closure_1 = module_1(_mod645);

export function useTheme() {
  if (closure_0.useColorScheme() === "dark") {
    let light = mod.default.dark;
  } else {
    light = mod.default.light;
  }
  return light;
}
