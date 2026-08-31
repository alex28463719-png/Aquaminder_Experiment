// Module ID: 110
// Function ID: 1308
// Name: getScaledAssetPath
// Dependencies: [1, 12, 13, 111, 112, 116, 20]

// Module 110 (getScaledAssetPath)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import getUrlCacheBreaker from "getUrlCacheBreaker" /* 111 */;
import PixelRatio from "PixelRatio" /* 112 */;
import getAndroidAssetSuffix from "getAndroidAssetSuffix" /* 116 */;
import module_1 from "module_1" /* 1 */;

function getScaledAssetPath(scales) {
  const obj = getUrlCacheBreaker;
  const _default = PixelRatio.default;
  let str = "";
  if (pickScaleResult !== 1) {
    str = `${"@" + tmp}x`;
  }
  pickScaleResult = obj.pickScale(scales.scales, PixelRatio.default.get());
  return getAndroidAssetSuffix.getBasePath(scales) + "/" + scales.name + str + "." + scales.type;
}
function getAssetPathInDrawableFolder(scales) {
  const obj = getUrlCacheBreaker;
  const _default = PixelRatio.default;
  const pickScaleResult = obj.pickScale(scales.scales, PixelRatio.default.get());
  const androidResourceFolderName = getAndroidAssetSuffix.getAndroidResourceFolderName(scales, pickScaleResult);
  const obj2 = getAndroidAssetSuffix;
  return androidResourceFolderName + "/" + getAndroidAssetSuffix.getAndroidResourceIdentifier(scales) + "." + scales.type;
}
function assetSupportsNetworkLoads(type) {
  return !(type.type === "xml" && true);
}
let closure_2 = module_1(_classCallCheck);
let closure_3 = module_1(_defineProperties);
const tmp3 = (() => {
  class AssetSourceResolver {
    constructor(arg0, arg1, arg2) {
      defaultResult = closure_1_2.default(this, AssetSourceResolver);
      this.serverUrl = arg0;
      this.jsbundleUrl = arg1;
      this.asset = arg2;
      return;
    }
  }
  let obj = {
    key: "isLoadedFromServer",
    value: function isLoadedFromServer() {
      const self = this;
      let tmp = this.serverUrl != null;
      if (tmp) {
        tmp = self.serverUrl !== "";
      }
      if (tmp) {
        tmp = closure_1_6(self.asset);
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "isLoadedFromFileSystem",
    value: function isLoadedFromFileSystem() {
      let tmp = this.jsbundleUrl != null;
      if (tmp) {
        const jsbundleUrl = this.jsbundleUrl;
        let startsWithResult;
        if (jsbundleUrl != null) {
          startsWithResult = jsbundleUrl.startsWith("file://");
        }
        tmp = startsWithResult;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "defaultAsset",
    value: function defaultAsset() {
      const self = this;
      if (this.isLoadedFromServer()) {
        return self.assetServerURL();
      } else if (self.asset.resolver != null) {
        return self.getAssetUsingResolver(self.asset.resolver);
      } else {
        if (self.isLoadedFromFileSystem()) {
          let result = self.drawableFolderInBundle();
        } else {
          result = self.resourceIdentifierWithoutScale();
        }
        return result;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAssetUsingResolver",
    value: function getAssetUsingResolver(resolver) {
      const self = this;
      if ("android" === resolver) {
        if (self.isLoadedFromFileSystem()) {
          let result = self.drawableFolderInBundle();
        } else {
          result = self.resourceIdentifierWithoutScale();
        }
        return result;
      } else if ("generic" === resolver) {
        return self.scaledAssetURLNearBundle();
      } else {
        const _Error = Error;
        const _JSON = JSON;
        const text = `Don't know how to get asset via provided resolver: ${resolver}`;
        const _JSON2 = JSON;
        const text1 = `${`Don't know how to get asset via provided resolver: ${resolver}`}
      Asset: ${JSON.stringify(self.asset, null, "\t")}`;
        const error = new Error(text1 + "\nPossible resolvers are:" + JSON.stringify(["android", "generic"], null, "\t"));
        throw error;
      }
    }
  };
  items[4] = {
    key: "assetServerURL",
    value: function assetServerURL() {
      AssetSourceResolver(closure_1_1[6])(this.serverUrl != null, "need server to load from");
      ({ fromSource, serverUrl } = this);
      return fromSource(serverUrl + closure_1_4(this.asset) + "?platform=" + "android" + "&hash=" + this.asset.hash);
    }
  };
  items[5] = {
    key: "scaledAssetPath",
    value: function scaledAssetPath() {
      return this.fromSource(closure_1_4(this.asset));
    }
  };
  items[6] = {
    key: "scaledAssetURLNearBundle",
    value: function scaledAssetURLNearBundle() {
      const self = this;
      const jsbundleUrl = this.jsbundleUrl;
      let str = "file://";
      if (jsbundleUrl != null) {
        str = jsbundleUrl;
      }
      return self.fromSource(str + closure_1_4(self.asset).replace(/\.\.\//g, "_"));
    }
  };
  items[7] = {
    key: "resourceIdentifierWithoutScale",
    value: function resourceIdentifierWithoutScale() {
      AssetSourceResolver(closure_1_1[6])(true, "resource identifiers work on Android");
      return this.fromSource(AssetSourceResolver(closure_1_1[5]).getAndroidResourceIdentifier(this.asset));
    }
  };
  items[8] = {
    key: "drawableFolderInBundle",
    value: function drawableFolderInBundle() {
      const self = this;
      const jsbundleUrl = this.jsbundleUrl;
      let str = "file://";
      if (jsbundleUrl != null) {
        str = jsbundleUrl;
      }
      return self.fromSource(str + closure_1_5(self.asset));
    }
  };
  items[9] = {
    key: "fromSource",
    value: function fromSource(androidResourceIdentifier) {
      const obj = { __packager_asset: true, width: this.asset.width, height: this.asset.height, uri: androidResourceIdentifier };
      const obj2 = AssetSourceResolver(closure_1_1[3]);
      obj.scale = obj2.pickScale(this.asset.scales, AssetSourceResolver(closure_1_1[4]).default.get());
      return obj;
    }
  };
  return closure_3.default(AssetSourceResolver, items);
})();
tmp3.pickScale = getUrlCacheBreaker.pickScale;

export default tmp3;
