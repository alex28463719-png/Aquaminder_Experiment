// Module ID: 850
// Function ID: 9334
// Dependencies: [851, 938, 934]

// Module 850
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(851) /* isFabric */.NativeStackView;
  }
};
Object.defineProperty(arg5, "NativeStackView", obj);
obj = {
  enumerable: true,
  get() {
    return require(938) /* NativeStackNavigator */.createNativeStackNavigator;
  }
};
Object.defineProperty(arg5, "createNativeStackNavigator", obj);
obj = {
  enumerable: true,
  get() {
    return require(934) /* AnimatedHeaderHeightContext */.useAnimatedHeaderHeight;
  }
};
Object.defineProperty(arg5, "useAnimatedHeaderHeight", obj);
