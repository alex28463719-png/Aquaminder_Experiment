// Module ID: 170
// Function ID: 1779
// Name: isNativeFunction
// Dependencies: []

// Module 170 (isNativeFunction)
function isNativeFunction(constructor) {
  let tmp = typeof constructor === "function";
  if (tmp) {
    let str = constructor.toString();
    str = "[native code]";
    tmp = str.indexOf("[native code]") > -1;
  }
  return tmp;
}
arg5.hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  const constructor = Object.getPrototypeOf(arg0).constructor;
  let tmp = constructor.name === GeneratorFunction;
  if (tmp) {
    tmp = isNativeFunction(constructor);
  }
  return tmp;
};
arg5.isNativeFunction = isNativeFunction;
