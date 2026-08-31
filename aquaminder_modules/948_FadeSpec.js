// Module ID: 948
// Function ID: 9931
// Name: FadeSpec
// Dependencies: [949, 950]

// Module 948 (FadeSpec)
arg5.FadeTransition = undefined;
arg5.ShiftTransition = undefined;
let obj = { transitionSpec: require("FadeSpec").FadeSpec, sceneStyleInterpolator: require("forFade").forFade };
arg5.FadeTransition = obj;
obj = { transitionSpec: require("FadeSpec").ShiftSpec, sceneStyleInterpolator: require("forFade").forShift };
arg5.ShiftTransition = obj;
