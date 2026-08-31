// Module ID: 327
// Function ID: 3969
// Name: stiffnessFromOrigamiValue
// Dependencies: []

// Module 327 (stiffnessFromOrigamiValue)
function stiffnessFromOrigamiValue(projectNormalResult1) {
  return (projectNormalResult1 - 30) * 3.62 + 194;
}
function dampingFromOrigamiValue(arg0) {
  return (arg0 - 8) * 3 + 25;
}
arg5.fromBouncinessAndSpeed = function fromBouncinessAndSpeed(arg0, arg1) {
  function normalize(arg0, arg1, arg2) {
    return arg0 / 20;
  }
  function projectNormal(arg0, arg1, arg2) {
    return arg1 + arg0 * (arg2 - arg1);
  }
  const projectNormalResult = projectNormal(normalize(arg0 / 1.7, 0, 20), 0, 0.8);
  const projectNormalResult1 = projectNormal(normalize(arg1 / 1.7, 0, 20), 0.5, 200);
  if (projectNormalResult1 <= 18) {
    let tmp3 = (function b3Friction1(projectNormalResult1) {
      const result = 0.0007 * Math.pow(projectNormalResult1, 3);
      return result - 0.031 * Math.pow(projectNormalResult1, 2) + 0.64 * projectNormalResult1 + 1.28;
    })(projectNormalResult1);
  } else {
    if (projectNormalResult1 > 18) {
      if (projectNormalResult1 <= 44) {
        tmp3 = (function b3Friction2(projectNormalResult1) {
          const result = 0.000044 * Math.pow(projectNormalResult1, 3);
          return result - 0.006 * Math.pow(projectNormalResult1, 2) + 0.36 * projectNormalResult1 + 2;
        })(projectNormalResult1);
      }
    }
    tmp3 = (function b3Friction3(projectNormalResult1) {
      const result = 0.00000045 * Math.pow(projectNormalResult1, 3);
      return result - 0.000332 * Math.pow(projectNormalResult1, 2) + 0.1078 * projectNormalResult1 + 5.84;
    })(projectNormalResult1);
  }
  const obj = {
    stiffness: stiffnessFromOrigamiValue(projectNormalResult1),
    damping: dampingFromOrigamiValue((function linearInterpolation(arg0, arg1, arg2) {
      return arg0 * arg2 + (1 - arg0) * arg1;
    })(2 * projectNormalResult - projectNormalResult * projectNormalResult, tmp3, 0.01))
  };
  return obj;
};
arg5.fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(projectNormalResult1, arg1) {
  return { stiffness: stiffnessFromOrigamiValue(projectNormalResult1), damping: dampingFromOrigamiValue(arg1) };
};
