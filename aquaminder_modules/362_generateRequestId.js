// Module ID: 362
// Function ID: 4528
// Name: generateRequestId
// Dependencies: [1, 363, 128, 253, 249, 364, 365, 366, 106, 368, 119, 251, 369, 370, 371]

// Module 362 (generateRequestId)
import getSourceCodeScriptURL2 from "getSourceCodeScriptURL" /* 106 */;
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import flattenStyle from "flattenStyle" /* 128 */;
import getIteratorFn3 from "getIteratorFn" /* 249 */;
import setStyleAttributePreprocessor2 from "setStyleAttributePreprocessor" /* 253 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import getIteratorFn4 from "getIteratorFn" /* 364 */;
import Commands from "Commands" /* 365 */;
import ImageLoader from "ImageLoader" /* 366 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 368 */;
import unstable_getImageComponentDecorator from "unstable_getImageComponentDecorator" /* 371 */;
import module_1 from "module_1" /* 1 */;
import closure_10 from "jsxProd" /* 251 */;

function generateRequestId() {
  closure_11 = tmp + 1;
  return +closure_11;
}
function prefetch(arg0, arg1) {
  const tmp = generateRequestId();
  if (arg1) {
    arg1(tmp);
  }
  return mod2.default.prefetchImage(arg0, tmp);
}
async function _queryCache(arg0, arg1) {
  if (obj) {
    return obj.resume();
  } else {
    return closure_2_7.default.queryCache(arg0);
  }
}
let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(flattenStyle);
const setStyleAttributePreprocessor = module_1(setStyleAttributePreprocessor2);
let closure_4 = module_1(getIteratorFn3);
let closure_5 = module_1(getIteratorFn4);
let closure_6 = module_1(Commands);
let closure_7 = module_1(ImageLoader);
const getSourceCodeScriptURL = module_1(getSourceCodeScriptURL2);
let closure_9 = module_1(__INTERNAL_VIEW_CONFIG);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let c11 = 1;
const forwardRefResult = getIteratorFn.forwardRef((defaultSource) => {
  let size = items1(items2[12]).getImageSourcesFromImageProps(defaultSource);
  if (!size) {
    let obj = { uri: undefined, width: undefined, height: undefined };
    size = obj;
  }
  const defaultResult = getSourceCodeScriptURL.default(defaultSource.defaultSource);
  const defaultResult1 = getSourceCodeScriptURL.default(defaultSource.loadingIndicatorSource);
  if (defaultSource.children != null) {
    const _Error2 = Error;
    const error = new Error("The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.");
    throw error;
  } else {
    if (defaultSource.defaultSource != null) {
      if (defaultSource.loadingIndicatorSource != null) {
        const _Error = Error;
        const error1 = new Error("The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.");
        throw error1;
      }
    }
    const _Array = Array;
    if (Array.isArray(size)) {
      const items = [closure_12.base, defaultSource.style];
      items1 = items;
      items2 = size;
      items1 = items;
      items2 = size;
    } else {
      if (size.uri === "") {
        const _console = console;
        console.warn("source.uri should not be an empty string");
      }
      let width = size.width;
      if (width == null) {
        width = defaultSource.width;
      }
      let height = size.height;
      if (height == null) {
        height = defaultSource.height;
      }
      obj = { width, height };
      items1 = [obj, closure_12.base, defaultSource.style];
      items2 = [size];
    }
    let onLoad = defaultSource.onLoadStart;
    obj = { style: items1 };
    ({ onLoadEnd, onError } = defaultSource);
    if (!onLoad) {
      onLoad = defaultSource.onLoad;
    }
    if (!onLoad) {
      onLoad = onLoadEnd;
    }
    if (!onLoad) {
      onLoad = onError;
    }
    obj.shouldNotifyLoadEvents = onLoad;
    obj.src = items2;
    obj.source = items2;
    let headers;
    if (size != null) {
      const first = size[0];
      if (first != null) {
        headers = first.headers;
      }
    }
    if (!headers) {
      let headers1;
      if (size != null) {
        headers1 = size.headers;
      }
      headers = headers1;
    }
    obj.headers = headers;
    let uri = null;
    if (defaultResult) {
      uri = defaultResult.uri;
    }
    obj.defaultSource = uri;
    let uri1 = null;
    if (defaultResult1) {
      uri1 = defaultResult1.uri;
    }
    obj.loadingIndicatorSrc = uri1;
    let alt = defaultSource["aria-label"];
    if (alt == null) {
      alt = defaultSource.accessibilityLabel;
    }
    if (alt == null) {
      alt = defaultSource.alt;
    }
    obj.accessibilityLabel = alt;
    let prop;
    if (defaultSource != null) {
      prop = defaultSource["aria-labelledby"];
    }
    if (prop == null) {
      let prop1;
      if (defaultSource != null) {
        prop1 = defaultSource.accessibilityLabelledBy;
      }
      prop = prop1;
    }
    obj.accessibilityLabelledBy = prop;
    let flag = true;
    if (defaultSource.alt === undefined) {
      flag = defaultSource.accessible;
    }
    obj.accessible = flag;
    const obj1 = {};
    aria_busy = defaultSource["aria-busy"];
    if (aria_busy == null) {
      const accessibilityState = defaultSource.accessibilityState;
      let busy;
      if (accessibilityState != null) {
        busy = accessibilityState.busy;
      }
      aria_busy = busy;
    }
    obj1.busy = aria_busy;
    aria_checked = defaultSource["aria-checked"];
    if (aria_checked == null) {
      const accessibilityState2 = defaultSource.accessibilityState;
      let checked;
      if (accessibilityState2 != null) {
        checked = accessibilityState2.checked;
      }
      aria_checked = checked;
    }
    obj1.checked = aria_checked;
    aria_disabled = defaultSource["aria-disabled"];
    if (aria_disabled == null) {
      const accessibilityState3 = defaultSource.accessibilityState;
      let disabled;
      if (accessibilityState3 != null) {
        disabled = accessibilityState3.disabled;
      }
      aria_disabled = disabled;
    }
    obj1.disabled = aria_disabled;
    aria_expanded = defaultSource["aria-expanded"];
    if (aria_expanded == null) {
      const accessibilityState4 = defaultSource.accessibilityState;
      let expanded;
      if (accessibilityState4 != null) {
        expanded = accessibilityState4.expanded;
      }
      aria_expanded = expanded;
    }
    obj1.expanded = aria_expanded;
    aria_selected = defaultSource["aria-selected"];
    if (aria_selected == null) {
      const accessibilityState5 = defaultSource.accessibilityState;
      let selected;
      if (accessibilityState5 != null) {
        selected = accessibilityState5.selected;
      }
      aria_selected = selected;
    }
    obj1.selected = aria_selected;
    obj.accessibilityState = obj1;
    closure_2 = Object.assign({}, defaultSource, obj);
    const defaultResult2 = str3.default(items1);
    let objectFit;
    if (defaultResult2 != null) {
      objectFit = defaultResult2.objectFit;
    }
    str3 = items1(items2[13]).convertObjectFitToResizeMode(objectFit) || defaultSource.resizeMode;
    if (!str3) {
      let resizeMode;
      if (defaultResult2 != null) {
        resizeMode = defaultResult2.resizeMode;
      }
      str3 = resizeMode;
    }
    if (!str3) {
      str3 = "cover";
    }
    closure_4 = items1(items2[14]).useWrapRefWithImageAttachedCallbacks(arg1);
    const obj2 = {
      children(internal_analyticTag) {
          if (internal_analyticTag !== null) {
            let _Object = Object;
            let obj = { internal_analyticTag };
            let merged = Object.assign({}, closure_2, obj);
          } else {
            merged = closure_2;
          }
          obj = {
            children(arg0) {
              const jsx = closure_2_10.jsx;
              if (arg0) {
                let obj = { style: merged, resizeMode: closure_1_3, headers: closure_1_2.headers, src: closure_1_1, ref: closure_1_4 };
                return <closure_2_9.default style={merged} resizeMode={closure_1_3} headers={closure_1_2.headers} src={closure_1_1} ref={closure_1_4} />;
              } else {
                const _Object = Object;
                obj = { resizeMode: closure_1_3, ref: closure_1_4 };
                return <closure_2_6.default {...Object.assign({}, merged, obj)} />;
              }
            }
          };
          return closure_1_10.jsx(mod.default.Consumer, {
            children(arg0) {
              const jsx = closure_2_10.jsx;
              if (arg0) {
                let obj = { style: merged, resizeMode: closure_1_3, headers: closure_1_2.headers, src: closure_1_1, ref: closure_1_4 };
                return <closure_2_9.default style={merged} resizeMode={closure_1_3} headers={closure_1_2.headers} src={closure_1_1} ref={closure_1_4} />;
              } else {
                const _Object = Object;
                obj = { resizeMode: closure_1_3, ref: closure_1_4 };
                return <closure_2_6.default {...Object.assign({}, merged, obj)} />;
              }
            }
          });
        }
    };
    return React.jsx(mod.default.Consumer, {
      children(internal_analyticTag) {
          if (internal_analyticTag !== null) {
            let _Object = Object;
            let obj = { internal_analyticTag };
            let merged = Object.assign({}, closure_2, obj);
          } else {
            merged = closure_2;
          }
          obj = {
            children(arg0) {
              const jsx = closure_2_10.jsx;
              if (arg0) {
                let obj = { style: merged, resizeMode: closure_1_3, headers: closure_1_2.headers, src: closure_1_1, ref: closure_1_4 };
                return <closure_2_9.default style={merged} resizeMode={closure_1_3} headers={closure_1_2.headers} src={closure_1_1} ref={closure_1_4} />;
              } else {
                const _Object = Object;
                obj = { resizeMode: closure_1_3, ref: closure_1_4 };
                return <closure_2_6.default {...Object.assign({}, merged, obj)} />;
              }
            }
          };
          return closure_1_10.jsx(mod.default.Consumer, {
            children(arg0) {
              const jsx = closure_2_10.jsx;
              if (arg0) {
                let obj = { style: merged, resizeMode: closure_1_3, headers: closure_1_2.headers, src: closure_1_1, ref: closure_1_4 };
                return <closure_2_9.default style={merged} resizeMode={closure_1_3} headers={closure_1_2.headers} src={closure_1_1} ref={closure_1_4} />;
              } else {
                const _Object = Object;
                obj = { resizeMode: closure_1_3, ref: closure_1_4 };
                return <closure_2_6.default {...Object.assign({}, merged, obj)} />;
              }
            }
          });
        }
    });
  }
});
let result = unstable_getImageComponentDecorator.unstable_getImageComponentDecorator();
let resultResult = forwardRefResult;
if (result != null) {
  resultResult = result(forwardRefResult);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, fn) {
  fn = arg2;
  closure_0 = arg0;
  closure_1 = fn;
  const size = mod2.default.getSize(arg0);
  if (typeof fn !== "function") {
    return size;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    size.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const _default = mod2.default;
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1, fn) {
  fn = arg3;
  closure_0 = arg0;
  closure_1 = fn;
  const sizeWithHeaders = mod2.default.getSizeWithHeaders(arg0, arg1);
  if (typeof fn !== "function") {
    return sizeWithHeaders;
  } else {
    if (!fn) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    sizeWithHeaders.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const _default = mod2.default;
};
resultResult.prefetch = prefetch;
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, arg3) {
  return prefetch(arg0, arg3);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  mod2.default.abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(arg0) {
  return _queryCache(...arguments);
};
resultResult.resolveAssetSource = getSourceCodeScriptURL.default;
let closure_12 = setStyleAttributePreprocessor.default.create({ base: { overflow: "hidden" } });

export default resultResult;
