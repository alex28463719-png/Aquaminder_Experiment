// Module ID: 111
// Function ID: 1324
// Name: getUrlCacheBreaker
// Dependencies: [1, 112]
// Exports: getUrlCacheBreaker, pickScale, setUrlCacheBreaker

// Module 111 (getUrlCacheBreaker)
import PixelRatio from "PixelRatio" /* 112 */;
import module_1 from "module_1" /* 1 */;

let closure_0 = module_1(PixelRatio);

export function getUrlCacheBreaker() {
  if (closure_1 == null) {
    return "";
  } else {
    return closure_1;
  }
}
export function pickScale(scales, _default) {
  let value = _default;
  if (_default == null) {
    value = mod.default.get();
    _default = mod.default;
  }
  let num = 0;
  if (0 < scales.length) {
    while (scales[num] < value) {
      num = num + 1;
    }
    return scales[num];
  }
  return scales[scales.length - 1] || 1;
}
export function setUrlCacheBreaker(arg0) {
  closure_1 = arg0;
}
