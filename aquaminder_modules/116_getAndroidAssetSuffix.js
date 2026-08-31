// Module ID: 116
// Function ID: 1352
// Name: getAndroidAssetSuffix
// Dependencies: []

// Module 116 (getAndroidAssetSuffix)
function getAndroidAssetSuffix(pickScaleResult) {
  if (pickScaleResult.toString() in table) {
    return table[pickScaleResult.toString(pickScaleResult)];
  } else {
    const _Number = Number;
    if (Number.isFinite(pickScaleResult)) {
      if (pickScaleResult > 0) {
        const _Math = Math;
        return Math.round(pickScaleResult * c1) + "dpi";
      }
    }
    const _Error = Error;
    const error = new Error("no such scale " + pickScaleResult.toString());
    throw error;
  }
}
function getBasePath(httpServerLocation) {
  httpServerLocation = httpServerLocation.httpServerLocation;
  let substr = httpServerLocation;
  if (httpServerLocation.startsWith("/")) {
    substr = httpServerLocation.slice(1);
  }
  return substr;
}
let closure_0 = { "0.75": "ldpi", 1: "mdpi", "1.5": "hdpi", 2: "xhdpi", 3: "xxhdpi", 4: "xxxhdpi" };
let c1 = 160;
const set = new Set(["gif", "jpeg", "jpg", "ktx", "png", "webp", "xml"]);

export default {
  getAndroidResourceFolderName(type, pickScaleResult) {
    if (set.has(type.type)) {
      const tmp2 = getAndroidAssetSuffix(pickScaleResult);
      if (tmp2) {
        return "drawable-" + tmp2;
      } else {
        const _Error = Error;
        const _JSON = JSON;
        const text = `Don't know which android drawable suffix to use for scale: ${pickScaleResult}`;
        const _JSON2 = JSON;
        const text1 = `${`Don't know which android drawable suffix to use for scale: ${pickScaleResult}`}
    Asset: ${JSON.stringify(type, null, "\t")}`;
        const error = new Error(text1 + "\nPossible scales are:" + JSON.stringify(closure_0, null, "\t"));
        throw error;
      }
    } else {
      return "raw";
    }
  },
  getAndroidResourceIdentifier(asset) {
    const str = `${getBasePath(asset)}/${asset.name}`;
    const str2 = `${getBasePath(asset)}/${asset.name}`.toLowerCase();
    const str3 = `${getBasePath(asset)}/${asset.name}`.toLowerCase().replace(/\//g, "_");
    return `${getBasePath(asset)}/${asset.name}`.toLowerCase().replace(/\//g, "_").replace(/([^a-z0-9_])/g, "").replace(/^(?:assets|assetsunstable_path)_/, "");
  },
  getBasePath
};
