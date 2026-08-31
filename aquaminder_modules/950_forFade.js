// Module ID: 950
// Function ID: 9933
// Name: forFade
// Dependencies: []

// Module 950 (forFade)
arg5.forFade = function forFade(current) {
  let obj = {};
  obj = { opacity: progress.interpolate({ inputRange: items, outputRange: [0, 1, 0] }) };
  progress = current.current.progress;
  items = [-1, 0, 1];
  obj.sceneStyle = obj;
  return obj;
};
arg5.forShift = function forShift(current) {
  current = current.current;
  let obj = {};
  obj = { opacity: progress.interpolate({ inputRange: items, outputRange: [0, 1, 0] }) };
  progress = current.progress;
  items = [-1, 0, 1];
  obj = { translateX: progress2.interpolate({ inputRange: items1, outputRange: items2 }) };
  progress2 = current.progress;
  items1 = [-1, 0, 1];
  items2 = [-50, 0, 50];
  const items3 = [obj];
  obj.transform = items3;
  obj.sceneStyle = obj;
  return obj;
};
