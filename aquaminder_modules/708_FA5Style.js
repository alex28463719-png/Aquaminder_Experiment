// Module ID: 708
// Function ID: 7949
// Name: FA5Style
// Dependencies: [1, 2, 709]
// Exports: createFA5iconSet

// Module 708 (FA5Style)
import _callSuper from "_callSuper" /* 709 */;
import module_1 from "module_1" /* 1 */;
import closure_0 from "get registerCallableModule" /* 2 */;

let closure_1 = module_1(_callSuper);

export function createFA5iconSet(arg0, arg1, arg2) {
  closure_0 = arg0;
  function createFontAwesomeStyle(Brands, _400, FontAwesome5Brands) {
    if (arguments.length > 2) {
      if (arguments[2] !== undefined) {
        let tmp = arguments[2];
      }
      let combined = Brands;
      if (flag) {
        const _HermesInternal = HermesInternal;
        combined = "Pro_" + Brands;
      }
      const _HermesInternal2 = HermesInternal;
      let str4 = "FontAwesome5_" + combined + ".ttf";
      let str6 = Brands;
      if (Brands === "Brands") {
        str6 = "Regular";
        str4 = "FontAwesome5_Brands.ttf";
      }
      obj = {};
      const _HermesInternal3 = HermesInternal;
      obj.fontFamily = "" + tmp + "-" + str6;
      obj.fontFile = str4;
      Platform = Platform.Platform;
      obj = {};
      obj = { fontWeight: _400 };
      obj.ios = obj;
      obj.default = {};
      obj.fontStyle = Platform.select(obj);
      obj.glyphMap = Platform;
      return obj;
    }
    tmp = closure_4;
  }
  if (arguments.length > 1) {
    if (arguments[1] !== undefined) {
      let obj = arguments[1];
    }
    let flag = false;
    if (arguments.length > 2) {
      flag = false;
      if (arguments[2] !== undefined) {
        flag = arguments[2];
      }
    }
    const _Object = Object;
    closure_3 = Object.keys(obj);
    let str = "Free";
    if (flag) {
      str = "Pro";
    }
    let _HermesInternal = HermesInternal;
    closure_4 = "FontAwesome5" + str;
    const fontAwesomeStyle = createFontAwesomeStyle("Brands", "400", "FontAwesome5Brands");
    const fontAwesomeStyle1 = createFontAwesomeStyle("Light", "300");
    const fontAwesomeStyle2 = createFontAwesomeStyle("Regular", "400");
    obj = { brand: fontAwesomeStyle, light: fontAwesomeStyle1, regular: fontAwesomeStyle2, solid: createFontAwesomeStyle("Solid", "900") };
    obj = {
      defaultStyle: "regular",
      fallbackFamily(arg0) {
          let num = 0;
          if (0 < closure_3.length) {
            while (arr.indexOf(arg0) === -1) {
              num = num + 1;
              let tmp5 = closure_3;
            }
            let str = "brand";
            if (closure_3[num] !== "brands") {
              str = tmp2;
            }
            return str;
          }
          return "regular";
        },
      glyphValidator(arg0, arg1) {
          let str = "brands";
          if (arg1 !== "brand") {
            str = arg1;
          }
          if (closure_3.indexOf(str) === -1) {
            return false;
          } else {
            return obj[str].indexOf(arg0) !== -1;
          }
        }
    };
    return obj.default(obj, obj);
  }
  obj = {};
}
export const FA5Style = { regular: "regular", light: "light", solid: "solid", brand: "brand" };
