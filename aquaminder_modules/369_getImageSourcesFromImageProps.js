// Module ID: 369
// Function ID: 4574
// Name: getImageSourcesFromImageProps
// Dependencies: [1, 38, 106]
// Exports: getImageSourcesFromImageProps

// Module 369 (getImageSourcesFromImageProps)
import _slicedToArray from "_slicedToArray" /* 38 */;
import getSourceCodeScriptURL from "getSourceCodeScriptURL" /* 106 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(_slicedToArray);
let closure_1 = module_1(getSourceCodeScriptURL);

export function getImageSourcesFromImageProps(source) {
  let defaultResult = height.default(source.source);
  ({ referrerPolicy, src, srcSet, width } = source);
  height = source.height;
  let obj = {};
  if (source.crossOrigin === "use-credentials") {
    obj["Access-Control-Allow-Credentials"] = "true";
  }
  if (referrerPolicy != null) {
    obj["Referrer-Policy"] = referrerPolicy;
  }
  if (srcSet != null) {
    const items = [];
    const parts = srcSet.split(", ");
    c4 = true;
    const item = parts.forEach((str) => {
      const defaultResult = width.default(str.split(" "), 2);
      str = "1x";
      if (defaultResult[1] !== undefined) {
        str = tmp2;
      }
      if (str.endsWith("x")) {
        const _parseInt = parseInt;
        const parsed = parseInt(str.split("x")[0], 10);
        const _isNaN = isNaN;
        if (!isNaN(parsed)) {
          const flag = false;
          obj = {};
          obj.headers = obj;
          obj.scale = parsed;
          obj.uri = defaultResult[0];
          obj.width = width;
          obj.height = height;
          items.push(obj);
        }
      } else {
        const _console = console;
        console.warn("The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.");
      }
    });
    if (c4) {
      if (src != null) {
        obj = {};
        obj.headers = obj;
        obj.scale = 1;
        obj.uri = src;
        obj.width = width;
        obj.height = height;
        items.push(obj);
      }
    }
    defaultResult = items;
    if (items.length === 0) {
      let _console = console;
      console.warn("The provided value for srcSet is not valid.");
      defaultResult = items;
    }
  } else if (src != null) {
    obj = { uri: src };
    obj.headers = obj;
    obj.width = width;
    obj.height = height;
    const items1 = [obj];
    defaultResult = items1;
  }
  return defaultResult;
}
