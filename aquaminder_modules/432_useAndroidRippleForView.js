// Module ID: 432
// Function ID: 5023
// Name: useAndroidRippleForView
// Dependencies: [1, 89, 33, 248, 20, 119, 250]
// Exports: default

// Module 432 (useAndroidRippleForView)
import invariant from "invariant" /* 20 */;
import get_Version from "get Version" /* 33 */;
import processColor from "processColor" /* 89 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import View2 from "View" /* 248 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(processColor);
let closure_3 = module_1(get_Version);
const View = module_1(View2);
let closure_4 = module_1(invariant);
let closure_5 = _interopRequireWildcard(getIteratorFn);

export default function useAndroidRippleForView(arg0, arg1) {
  let obj = arg0;
  closure_0 = arg1;
  if (arg0 == null) {
    obj = {};
  }
  const color = obj.color;
  const borderless = obj.borderless;
  const radius = obj.radius;
  const foreground = obj.foreground;
  const items = [borderless, color, foreground, radius, arg1];
  return React.useMemo(() => {
    if (radius.default.OS === "android") {
      const defaultResult = borderless.default(color);
      let tmp9 = defaultResult == null;
      if (!tmp9) {
        tmp9 = typeof defaultResult === "number";
      }
      foreground.default(tmp9, "Unexpected color given for Ripple color");
      let obj = { type: "RippleAndroid", color: defaultResult, borderless: borderless === true, rippleRadius: radius };
      obj = {};
      if (foreground === true) {
        obj = {};
        obj.nativeForegroundAndroid = obj;
        let obj1 = obj;
      } else {
        obj1 = { nativeBackgroundAndroid: obj };
      }
      obj.viewProps = obj1;
      obj.onPressIn = function onPressIn(nativeEvent) {
        const current = closure_1_0.current;
        if (current != null) {
          const Commands2 = callback(color[6]).Commands;
          const locationX = nativeEvent.nativeEvent.locationX;
          let num = 0;
          if (locationX != null) {
            num = locationX;
          }
          const locationY = nativeEvent.nativeEvent.locationY;
          let num2 = 0;
          if (locationY != null) {
            num2 = locationY;
          }
          Commands2.hotspotUpdate(current, num, num2);
          const Commands = callback(color[6]).Commands;
          Commands.setPressed(current, true);
        }
      };
      obj.onPressMove = function onPressMove(nativeEvent) {
        const current = closure_1_0.current;
        if (current != null) {
          const Commands = callback(color[6]).Commands;
          const locationX = nativeEvent.nativeEvent.locationX;
          let num2 = 0;
          if (locationX != null) {
            num2 = locationX;
          }
          const locationY = nativeEvent.nativeEvent.locationY;
          let num3 = 0;
          if (locationY != null) {
            num3 = locationY;
          }
          Commands.hotspotUpdate(current, num2, num3);
        }
      };
      obj.onPressOut = function onPressOut(arg0) {
        const current = closure_1_0.current;
        if (current != null) {
          const Commands = callback(color[6]).Commands;
          Commands.setPressed(current, false);
        }
      };
      return obj;
    }
    return null;
  }, items);
};
