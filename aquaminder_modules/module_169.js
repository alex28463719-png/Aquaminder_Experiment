// Module ID: 169
// Function ID: 1775
// Dependencies: [170, 65, 171]

// Module 169
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;
import isNativeFunction from "isNativeFunction" /* 170 */;
import define from "define" /* 171 */;

try {
  const _module = isNativeFunction;
  let flag = _module.hasNativeConstructor(async () => obj ? obj.resume() : undefined, "GeneratorFunction");
  if (!flag) {
    const _module1 = polyfillObjectProperty;
    _module1.polyfillGlobal("regeneratorRuntime", () => {
      delete tmp.regeneratorRuntime;
      return define;
    });
  }
} catch (err) {
  flag = false;
}
