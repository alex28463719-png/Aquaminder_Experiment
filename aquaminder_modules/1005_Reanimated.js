// Module ID: 1005
// Function ID: 10744
// Name: Reanimated
// Dependencies: [971]

// Module 1005 (Reanimated)
import hasProperty from "hasProperty" /* 971 */;

try {
  const _module = hasProperty;
  exports.Reanimated = _module;
  if (_module == null) {
    exports.Reanimated = undefined;
  }
  if (_module !== undefined) {
    if (!tmp7.setGestureState) {
      tmp7.setGestureState = () => {
        console.warn(require(dependencyMap[1]).tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
      };
    }
  }
} catch (err) {
  tmp2.Reanimated = tmp;
}
