// Module ID: 552
// Function ID: 6162
// Name: goBack
// Dependencies: []

// Module 552 (goBack)
arg5.goBack = function goBack() {
  return { type: "GO_BACK" };
};
arg5.navigate = function navigate(Main, params) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  if (typeof array[0] === "string") {
    [tmp7, tmp8] = array;
    if (typeof array[2] === "boolean") {
      const _console = console;
      console.warn("Passing a boolean as the third argument to 'navigate' is deprecated. Pass '{ merge: true }' instead.");
    }
    let obj = { type: "NAVIGATE" };
    obj = { name: tmp7, params: tmp8 };
    let tmp11 = arr;
    if (typeof array[2] !== "boolean") {
      let merge;
      if (arr != null) {
        merge = arr.merge;
      }
      tmp11 = merge;
    }
    obj.merge = tmp11;
    let pop;
    if (array[2] != null) {
      pop = arr.pop;
    }
    obj.pop = pop;
    obj.payload = obj;
    return obj;
  } else {
    const tmp2 = array[0] || {};
    if ("name" in tmp2) {
      obj = { type: "NAVIGATE", payload: tmp2 };
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("You need to specify a name when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");
      throw error;
    }
  }
};
arg5.navigateDeprecated = function navigateDeprecated() {
  let first;
  if (arguments.length > 0) {
    first = arguments[0];
  }
  if (typeof first === "string") {
    let obj = { type: "NAVIGATE_DEPRECATED" };
    obj = {};
    let first1;
    if (arguments.length > 0) {
      first1 = arguments[0];
    }
    obj.name = first1;
    let tmp8;
    if (arguments.length > 1) {
      tmp8 = arguments[1];
    }
    obj.params = tmp8;
    obj.payload = obj;
    return obj;
  } else {
    let first2;
    if (arguments.length > 0) {
      first2 = arguments[0];
    }
    if (!first2) {
      first2 = {};
    }
    if ("name" in first2) {
      const obj1 = { type: "NAVIGATE_DEPRECATED", payload: first2 };
      return obj1;
    } else {
      const _Error = Error;
      const error = new Error("You need to specify a name when calling navigateDeprecated with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigatelegacy for usage.");
      throw error;
    }
  }
};
arg5.preload = function preload(name, params) {
  const payload = { name, params };
  return { type: "PRELOAD", payload };
};
arg5.replaceParams = function replaceParams(params) {
  const payload = { params };
  return { type: "REPLACE_PARAMS", payload };
};
arg5.reset = function reset(payload) {
  return { type: "RESET", payload };
};
arg5.setParams = function setParams(params) {
  const payload = { params };
  return { type: "SET_PARAMS", payload };
};
