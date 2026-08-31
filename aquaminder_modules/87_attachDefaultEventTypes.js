// Module ID: 87
// Function ID: 1214
// Name: attachDefaultEventTypes
// Dependencies: [1, 88, 44, 93, 45, 102, 103, 101, 104, 89, 105, 106, 96, 95]
// Exports: default

// Module 87 (attachDefaultEventTypes)
import isFabricReactTag from "isFabricReactTag" /* 44 */;
import nullthrows from "nullthrows" /* 45 */;
import parseBoxShadowString from "parseBoxShadowString" /* 88 */;
import processColor from "processColor" /* 89 */;
import flag2 from "flag" /* 93 */;
import parseCSSLinearGradient from "parseCSSLinearGradient" /* 95 */;
import _getFilterAmount from "_getFilterAmount" /* 96 */;
import sizesDiffer from "sizesDiffer" /* 101 */;
import matricesDiffer from "matricesDiffer" /* 102 */;
import pointsDiffer from "pointsDiffer" /* 103 */;
import insetsDiffer from "insetsDiffer" /* 104 */;
import processColorElement from "processColorElement" /* 105 */;
import getSourceCodeScriptURL from "getSourceCodeScriptURL" /* 106 */;
import module_1 from "module_1" /* 1 */;

function attachDefaultEventTypes(viewManagerConfig) {
  const constants = isFabricReactTag.default.getConstants();
  if (!constants.ViewManagerNames) {
    if (!constants.LazyViewManagersEnabled) {
      viewManagerConfig.bubblingEventTypes = merge(viewManagerConfig.bubblingEventTypes, constants.genericBubblingEventTypes);
      viewManagerConfig.directEventTypes = merge(viewManagerConfig.directEventTypes, constants.genericDirectEventTypes);
    }
  }
  const _default = isFabricReactTag.default;
  merge(viewManagerConfig, nullthrows(isFabricReactTag.default.getDefaultEventTypes)());
}
function merge(arg0, arg1) {
  let tmp3;
  if (arg1) {
    if (arg0) {
      const keys = Object.keys();
      if (keys !== undefined) {
        let tmp5 = tmp3;
        while (keys[tmp] !== undefined) {
          let tmp12 = tmp6;
          tmp3 = tmp5;
          if (!arg1.hasOwnProperty(tmp6)) {
            continue;
          } else {
            let tmp7 = arg1[tmp6];
            let tmp8 = tmp7;
            if (arg0.hasOwnProperty(tmp6)) {
              let tmp9 = arg0[tmp6];
              tmp8 = tmp7;
              tmp5 = tmp9;
              if (typeof tmp7 === "object") {
                tmp8 = tmp7;
                tmp5 = tmp9;
                if (typeof tmp9 === "object") {
                  let tmp10 = merge;
                  tmp8 = merge(tmp9, tmp7);
                  tmp5 = tmp9;
                }
              }
            }
            arg0[tmp6] = tmp8;
            let tmp11 = tmp8;
            tmp3 = tmp5;
            continue;
          }
          continue;
        }
      }
      return arg0;
    } else {
      return arg1;
    }
  } else {
    return arg0;
  }
}
function getDifferForType(arg0) {
  if ("CATransform3D" === arg0) {
    return matricesDiffer.default;
  } else if ("CGPoint" === arg0) {
    return pointsDiffer.default;
  } else if ("CGSize" === arg0) {
    return sizesDiffer.default;
  } else if ("UIEdgeInsets" === arg0) {
    return insetsDiffer.default;
  } else if ("Point" === arg0) {
    return pointsDiffer.default;
  } else if ("EdgeInsets" === arg0) {
    return insetsDiffer.default;
  } else {
    return null;
  }
}
function getProcessorForType(arg0) {
  if ("CGColor" !== arg0) {
    if ("UIColor" !== arg0) {
      if ("CGColorArray" !== arg0) {
        if ("UIColorArray" !== arg0) {
          if ("CGImage" !== arg0) {
            if ("UIImage" !== arg0) {
              if ("RCTImageSource" !== arg0) {
                if ("BoxShadowArray" === arg0) {
                  return mod.default;
                } else if ("FilterArray" === arg0) {
                  return _getFilterAmount.default;
                } else if ("Color" === arg0) {
                  return processColor.default;
                } else if ("ColorArray" === arg0) {
                  return processColorElement.default;
                } else if ("Filter" === arg0) {
                  return _getFilterAmount.default;
                } else if ("BackgroundImage" === arg0) {
                  return parseCSSLinearGradient.default;
                } else if ("ImageSource" === arg0) {
                  return getSourceCodeScriptURL.default;
                } else if ("BoxShadow" === arg0) {
                  return mod.default;
                } else {
                  return null;
                }
              }
            }
          }
          return getSourceCodeScriptURL.default;
        }
      }
      return processColorElement.default;
    }
  }
  return processColor.default;
}
let closure_2 = module_1(parseBoxShadowString);

export default function getNativeComponentAttributes(uiViewClassName) {
  const viewManagerConfig = isFabricReactTag.default.getViewManagerConfig(uiViewClassName);
  if (viewManagerConfig == null) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes == null) {
      bubblingEventTypes = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let tmp3 = directEventTypes;
    let tmp4 = bubblingEventTypes;
    let tmp5 = NativeProps;
    let tmp6 = bubblingEventTypes;
    let tmp7 = directEventTypes;
    let tmp8 = NativeProps;
    while (baseModuleName) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let _default2 = isFabricReactTag.default;
      let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
      let tmp12 = tmp4;
      let tmp13 = tmp3;
      let tmp14 = tmp5;
      baseModuleName = null;
      let merged = tmp4;
      let merged1 = tmp3;
      let merged2 = tmp5;
      if (viewManagerConfig1) {
        let _Object = Object;
        merged = Object.assign({}, viewManagerConfig1.bubblingEventTypes, tmp4);
        let _Object2 = Object;
        merged1 = Object.assign({}, viewManagerConfig1.directEventTypes, tmp3);
        let _Object3 = Object;
        merged2 = Object.assign({}, viewManagerConfig1.NativeProps, tmp5);
        baseModuleName = viewManagerConfig1.baseModuleName;
      }
      tmp4 = merged;
      tmp3 = merged1;
      tmp5 = merged2;
      tmp6 = merged;
      tmp7 = merged1;
      tmp8 = merged2;
    }
    let obj = {};
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[2] !== undefined) {
        let tmp27 = tmp21;
        let tmp28 = tmp8[tmp21];
        let tmp29 = getDifferForType;
        let tmp30 = getDifferForType(tmp28);
        let tmp31 = getProcessorForType;
        let tmp32 = getProcessorForType(tmp28);
        if (tmp30 == null) {
          let flag = true;
          if (tmp32 != null) {
            obj = { process: tmp32 };
            flag = obj;
          }
          let obj1 = flag;
        } else if (tmp32 == null) {
          obj = { diff: tmp30 };
          obj1 = obj;
        } else {
          obj1 = { diff: tmp30, process: tmp32 };
        }
        obj[tmp21] = obj1;
        continue;
      }
    }
    obj.style = flag2.default;
    const _Object4 = Object;
    const obj2 = { uiViewClassName, validAttributes: obj, bubblingEventTypes: tmp6, directEventTypes: tmp7 };
    const merged3 = Object.assign(viewManagerConfig, obj2);
    attachDefaultEventTypes(viewManagerConfig);
    return viewManagerConfig;
  }
  const _default = isFabricReactTag.default;
};
