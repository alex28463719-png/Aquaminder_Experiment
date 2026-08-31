// Module ID: 697
// Function ID: 7916
// Name: createIconSourceCache
// Dependencies: []

// Module 697 (createIconSourceCache)
arg5.default = function createIconSourceCache() {
  const map = new Map();
  return {
    setValue(arg0, data) {
      return map.set(arg0, { type: map, data });
    },
    setError(arg0, data) {
      return map.set(arg0, { type: closure_1_1, data });
    },
    has(arg0) {
      return map.has(arg0);
    },
    get(arg0) {
      if (map.has(arg0)) {
        value = map.get(arg0);
        const data = value.data;
        if (value.type === closure_1_1) {
          throw data;
        } else {
          return data;
        }
      }
    }
  };
};
let value = "value";
const error = "error";
