// Module ID: 987
// Function ID: 10516
// Name: GestureObjects
// Dependencies: [1, 162, 988, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999]

// Module 987 (GestureObjects)
import _construct from "_construct" /* 162 */;
import _callSuper from "_callSuper" /* 988 */;
import _callSuper2 from "_callSuper" /* 990 */;
import _callSuper3 from "_callSuper" /* 991 */;
import _callSuper4 from "_callSuper" /* 992 */;
import _callSuper5 from "_callSuper" /* 993 */;
import _callSuper6 from "_callSuper" /* 994 */;
import _callSuper7 from "_callSuper" /* 995 */;
import _callSuper8 from "_callSuper" /* 996 */;
import _callSuper9 from "_callSuper" /* 997 */;
import _callSuper10 from "_callSuper" /* 998 */;
import _callSuper11 from "_callSuper" /* 999 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_construct);

export const GestureObjects = {
  Tap() {
    const tapGesture = new _callSuper.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _callSuper2.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _callSuper3.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _callSuper4.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _callSuper5.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _callSuper6.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _callSuper7.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _callSuper8.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _callSuper9.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _callSuper10.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return closure_2.default(_callSuper11.ComposedGesture, array);
  },
  Simultaneous() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return closure_2.default(_callSuper11.SimultaneousGesture, array);
  },
  Exclusive() {
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    return closure_2.default(_callSuper11.ExclusiveGesture, array);
  }
};
