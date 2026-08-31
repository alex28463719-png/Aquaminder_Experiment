// Module ID: 554
// Function ID: 6171
// Name: findFocusedRoute
// Dependencies: []

// Module 554 (findFocusedRoute)
arg5.findFocusedRoute = function findFocusedRoute(stateForPath) {
  let state1;
  let state;
  if (stateForPath != null) {
    let index = stateForPath.index;
    let num = 0;
    if (index != null) {
      num = index;
    }
    state = stateForPath.routes[num].state;
    let tmp = index;
  }
  let tmp3 = stateForPath;
  let tmp4 = stateForPath;
  if (state != null) {
    do {
      let index2 = tmp3.index;
      let tmp5 = tmp;
      let num2 = 0;
      if (index2 != null) {
        num2 = index2;
      }
      state = tmp3.routes[num2].state;
      state1 = undefined;
      if (state != null) {
        let index3 = state.index;
        let num3 = 0;
        if (index3 != null) {
          num3 = index3;
        }
        state1 = state.routes[num3].state;
        tmp5 = index3;
      }
      tmp = tmp5;
      tmp3 = state;
      tmp4 = state;
    } while (state1 != null);
  }
  let tmp7;
  if (tmp4 != null) {
    index = undefined;
    if (tmp4 != null) {
      index = tmp4.index;
    }
    let num4 = 0;
    if (index != null) {
      num4 = index;
    }
    tmp7 = tmp4.routes[num4];
  }
  return tmp7;
};
