// Module ID: 575
// Function ID: 6308
// Name: createNavigatorFactory
// Dependencies: [576, 577]

// Module 575 (createNavigatorFactory)
const require = arg1;
const dependencyMap = arg6;
arg5.createNavigatorFactory = function createNavigatorFactory(BottomTabNavigator) {
  closure_0 = BottomTabNavigator;
  return function createNavigator(config) {
    if (config != null) {
      let obj = { Navigator: BottomTabNavigator, Screen: BottomTabNavigator(closure_1_1[0]).Screen, Group: BottomTabNavigator(closure_1_1[1]).Group, config };
      return obj;
    } else {
      obj = { Navigator: BottomTabNavigator, Screen: BottomTabNavigator(closure_1_1[0]).Screen, Group: BottomTabNavigator(closure_1_1[1]).Group };
      return obj;
    }
  };
};
