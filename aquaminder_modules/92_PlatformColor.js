// Module ID: 92
// Function ID: 1245
// Name: PlatformColor
// Dependencies: []

// Module 92 (PlatformColor)
arg5.PlatformColor = undefined;
arg5.normalizeColorObject = undefined;
arg5.processColorObject = undefined;
arg5.PlatformColor = function PlatformColor() {
  const length = arguments.length;
  const resource_paths = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    resource_paths[num] = arguments[num];
  }
  return { resource_paths };
};
arg5.normalizeColorObject = function normalizeColorObject(arg0) {
  if ("resource_paths" in arg0) {
    return arg0;
  } else {
    return null;
  }
};
arg5.processColorObject = function processColorObject(defaultResult) {
  return defaultResult;
};
