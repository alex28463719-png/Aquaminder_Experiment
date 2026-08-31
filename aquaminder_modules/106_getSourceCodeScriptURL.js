// Module ID: 106
// Function ID: 1288
// Name: getSourceCodeScriptURL
// Dependencies: [1, 107, 109, 110, 111]
// Exports: default

// Module 106 (getSourceCodeScriptURL)
import getConstants from "getConstants" /* 107 */;
import _mod109 from "module_109" /* 109 */;
import getScaledAssetPath from "getScaledAssetPath" /* 110 */;
import getUrlCacheBreaker from "getUrlCacheBreaker" /* 111 */;
import module_1 from "module_1" /* 1 */;

function getSourceCodeScriptURL() {
  if (scriptURL != null) {
    return scriptURL;
  } else {
    scriptURL = mod.default.getConstants().scriptURL;
    return scriptURL;
  }
}
function getDevServerURL() {
  if (c4 === undefined) {
    const str = getSourceCodeScriptURL();
    let match;
    if (str != null) {
      match = str.match(/^https?:\/\/.*?\//);
    }
    if (match) {
      c4 = match[0];
    } else {
      c4 = null;
    }
  }
  return c4;
}
function _coerceLocalScriptURL(sourceCodeScriptURL) {
  let text = sourceCodeScriptURL;
  if (sourceCodeScriptURL != null) {
    if (sourceCodeScriptURL.startsWith("assets://")) {
      return null;
    } else {
      const substr = sourceCodeScriptURL.substring(0, sourceCodeScriptURL.lastIndexOf("/") + 1);
      text = substr;
      if (!substr.includes("://")) {
        text = `file://${obj}`;
      }
    }
  }
  return text;
}
function getScriptURL() {
  if (closure_5 === undefined) {
    closure_5 = _coerceLocalScriptURL(getSourceCodeScriptURL());
  }
  return closure_5;
}
function resolveAssetSource(source) {
  if (source != null) {
    if (typeof source !== "object") {
      const assetByID = _mod109.getAssetByID(source);
      if (assetByID) {
        let _default = getScaledAssetPath.default;
        const prototype = _default.prototype;
        _default = new _default(getDevServerURL(), getScriptURL(), assetByID);
        if (closure_3) {
          for (const item10025 of closure_3) {
            let tmp13 = _default;
            let item10025Result = item10025(obj);
            let tmp15 = item10025Result;
            if (item10025Result != null) {
              obj2.return();
              return item10025Result;
            }
          }
        }
        return _default.defaultAsset();
      } else {
        return null;
      }
      const obj3 = _mod109;
    }
  }
  return source;
}
let closure_2 = module_1(getConstants);
let closure_3 = [];
resolveAssetSource.pickScale = getUrlCacheBreaker.pickScale;
resolveAssetSource.setCustomSourceTransformer = function setCustomSourceTransformer(arg0) {
  const items = [arg0];
};
resolveAssetSource.addCustomSourceTransformer = function addCustomSourceTransformer(arg0) {

};

export default resolveAssetSource;
