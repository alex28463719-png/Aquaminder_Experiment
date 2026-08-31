// Module ID: 780
// Function ID: 8053
// Name: PREDEF_RES
// Dependencies: [2]
// Exports: create

// Module 780 (PREDEF_RES)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

const Dimensions = get_registerCallableModule.Dimensions;
const value = Dimensions.get("window");
({ height, width } = value);
let closure_0 = Math.sqrt(height * height + width * width);
const obj = { iphoneX: { px: { width: 1125, height: 2436 }, dp: { width: 414, height: 896 } }, iphone8P: { px: { width: 1080, height: 1920 }, dp: { width: 414, height: 736 } }, iphone8: { px: { width: 750, height: 1334 }, dp: { width: 375, height: 667 } }, iphone7P: { px: { width: 1080, height: 1920 }, dp: { width: 414, height: 736 } }, iphone6sP: { px: { width: 1080, height: 1920 }, dp: { width: 375, height: 667 } }, iphone6P: { px: { width: 1080, height: 1920 }, dp: { width: 375, height: 667 } }, iphone7: { px: { width: 750, height: 1334 }, dp: { width: 375, height: 667 } }, iphone6s: { px: { width: 750, height: 1334 }, dp: { width: 375, height: 667 } }, iphone6: { px: { width: 750, height: 1334 }, dp: { width: 375, height: 667 } }, iphoneSE: { px: { width: 640, height: 1136 }, dp: { width: 320, height: 568 } }, iphone11: { px: { width: 828, height: 1792 }, dp: { width: 414, height: 896 } }, iphone11Pro: { px: { width: 1125, height: 2436 }, dp: { width: 375, height: 812 } }, iphone11ProMax: { px: { width: 1242, height: 2688 }, dp: { width: 414, height: 896 } }, iphone12Mini: { px: { width: 1080, height: 2340 }, dp: { width: 375, height: 812 } }, iphone12: { px: { width: 1170, height: 2532 }, dp: { width: 390, height: 844 } }, iphone12Pro: { px: { width: 1170, height: 2532 }, dp: { width: 390, height: 844 } }, iphone12ProMax: { px: { width: 1284, height: 2778 }, dp: { width: 428, height: 926 } }, iphone13Mini: { px: { width: 1080, height: 2340 }, dp: { width: 375, height: 812 } }, iphone13: { px: { width: 1170, height: 2532 }, dp: { width: 390, height: 844 } }, iphone13Pro: { px: { width: 1170, height: 2532 }, dp: { width: 390, height: 844 } }, iphone13ProMax: { px: { width: 1284, height: 2778 }, dp: { width: 428, height: 926 } }, iphone14: { px: { width: 1170, height: 2532 }, dp: { width: 390, height: 844 } }, iphone14Plus: { px: { width: 1284, height: 2778 }, dp: { width: 428, height: 926 } }, iphone14Pro: { px: { width: 1179, height: 2556 }, dp: { width: 393, height: 852 } }, iphone14ProMax: { px: { width: 1290, height: 2796 }, dp: { width: 430, height: 932 } }, ipadMini: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipadMini4: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipadAir: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipadAir2: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipad5: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipad6: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipad7: { px: { width: 1620, height: 2160 }, dp: { width: 810, height: 1080 } }, ipad8: { px: { width: 1620, height: 2160 }, dp: { width: 810, height: 1080 } }, ipad9: { px: { width: 1620, height: 2160 }, dp: { width: 810, height: 1080 } }, ipadPro9_7: { px: { width: 1536, height: 2048 }, dp: { width: 768, height: 1024 } }, ipadPro10_5: { px: { width: 1668, height: 2224 }, dp: { width: 834, height: 1112 } }, ipadPro11: { px: { width: 1668, height: 2388 }, dp: { width: 834, height: 1194 } }, ipadPro12_9: { px: { width: 2048, height: 2732 }, dp: { width: 1024, height: 1366 } }, ipadAir4: { px: { width: 1640, height: 2360 }, dp: { width: 820, height: 1180 } }, ipadAir5: { px: { width: 1640, height: 2360 }, dp: { width: 820, height: 1180 } } };
function create(dp) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      let size = arguments[0];
    }
    if (size) {
      if (typeof size.width === "number") {
        if (typeof size.height === "number") {
          const _Math = Math;
          closure_0 = closure_0 / Math.sqrt(size.height * size.height + size.width * size.width);
          return (arg0) => closure_0 * arg0;
        }
      }
    }
    const _Error = Error;
    const error = new Error("react-native-pixel-perfect | create function | Invalid design size object! Must have width and height fields of type number.");
    throw error;
  }
  size = { width: 375, height: 812 };
}
let str = "ipadMini";
if (height / width > 1.6) {
  str = "iphone13Mini";
}

export const PREDEF_RES = obj;
export { create };
export const perfectSize = create(obj[str].dp);
