// Module ID: 1007
// Function ID: 10752
// Name: GestureStateManager
// Dependencies: [971, 1005, 972]

// Module 1007 (GestureStateManager)
import hasProperty from "hasProperty" /* 971 */;
import Reanimated from "Reanimated" /* 1005 */;

let closure_2 = hasProperty.tagMessage("react-native-reanimated is required in order to use synchronous state management");
let useSharedValue;
if (Reanimated.Reanimated != null) {
  useSharedValue = Reanimated.Reanimated.useSharedValue;
}
let closure_3 = useSharedValue !== undefined;
let setGestureState;
if (Reanimated.Reanimated != null) {
  setGestureState = Reanimated.Reanimated.setGestureState;
}

export const GestureStateManager = {
  create(arg0) {
    closure_0 = arg0;
    return {
      begin() {
        if (closure_1_3) {
          closure_1_4(callback, callback(closure_1_1[2]).State.BEGAN);
        } else {
          const _console = console;
          console.warn(closure_1_2);
        }
      },
      activate() {
        if (closure_1_3) {
          closure_1_4(callback, callback(closure_1_1[2]).State.ACTIVE);
        } else {
          const _console = console;
          console.warn(closure_1_2);
        }
      },
      fail() {
        if (closure_1_3) {
          closure_1_4(callback, callback(closure_1_1[2]).State.FAILED);
        } else {
          const _console = console;
          console.warn(closure_1_2);
        }
      },
      end() {
        if (closure_1_3) {
          closure_1_4(callback, callback(closure_1_1[2]).State.END);
        } else {
          const _console = console;
          console.warn(closure_1_2);
        }
      }
    };
  }
};
