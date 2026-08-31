// Module ID: 937
// Function ID: 9845
// Name: getModalRouteKeys
// Dependencies: []

// Module 937 (getModalRouteKeys)
arg5.getModalRouteKeys = function getModalRouteKeys(routes, descriptors) {
  closure_0 = descriptors;
  return routes.reduce((arr, key) => {
    let options;
    if (descriptors[key.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    if (!arr.length) {
      return arr;
    }
    arr.push(key.key);
  }, []);
};
