// Module ID: 184
// Function ID: 2030
// Name: map
// Dependencies: []

// Module 184 (map)
arg5.has = undefined;
arg5.register = undefined;
arg5.unregister = undefined;
const map = new Map();
arg5.register = function register(arg0) {
  const value = map.get(arg0);
  if (value != null) {
    const result = map.set(arg0, value + 1);
  } else {
    const result1 = map.set(arg0, 1);
  }
};
arg5.unregister = function unregister(arg0) {
  const value = map.get(arg0);
  if (value != null) {
    if (value <= 1) {
      map.delete(arg0);
    } else {
      const result = map.set(arg0, value - 1);
    }
  }
};
arg5.has = function has(arg0) {
  return map.get(arg0) || false;
};
