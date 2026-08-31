// Module ID: 579
// Function ID: 6320
// Name: getFocusedRouteNameFromRoute
// Dependencies: [580]

// Module 579 (getFocusedRouteNameFromRoute)
import CHILD_STATE from "CHILD_STATE" /* 580 */;

require = arg1;
const dependencyMap = arg6;
arg5.getFocusedRouteNameFromRoute = function getFocusedRouteNameFromRoute(state) {
  state = state[CHILD_STATE.CHILD_STATE];
  if (state == null) {
    state = state.state;
  }
  const params = state.params;
  if (state) {
    ({ index, routes } = state);
    if (index == null) {
      if (typeof state.type !== "string") {
        let num = state.routes.length - 1;
      } else {
        num = 0;
      }
      index = num;
    }
    let screen = routes[index].name;
  } else {
    screen = undefined;
    if (params != null) {
      screen = params.screen;
    }
    if (typeof screen === "string") {
      screen = params.screen;
    }
  }
  return screen;
};
