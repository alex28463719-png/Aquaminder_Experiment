// Module ID: 476
// Function ID: 5300
// Dependencies: []

// Module 476
arg5.default = undefined;
const obj = {
  centroidDimension(touchBank, arg1, arg2, arg3) {
    let tmp2;
    touchBank = touchBank.touchBank;
    let tmp = null;
    if (touchBank.numberActiveTouches === 1) {
      tmp = touchBank.touchBank[touchBank.indexOfSingleActiveTouch];
    }
    if (tmp !== null) {
      let num4 = 0;
      let num5 = 0;
      if (tmp.touchActive) {
        num4 = 0;
        num5 = 0;
        if (tmp.currentTimeStamp > arg1) {
          if (!arg3) {
            if (arg3) {
              if (!arg2) {
                const currentPageY2 = tmp.currentPageY;
              }
            }
            if (!arg3) {
              if (arg2) {
                let previousPageY = tmp.previousPageX;
              }
            }
            previousPageY = tmp.previousPageY;
          }
          const currentPageX = tmp.currentPageX;
        }
      }
    } else {
      num5 = 0;
      let num2 = 0;
      let num3 = 0;
      let num = 0;
      num4 = 0;
      if (0 < touchBank.length) {
        while (true) {
          tmp2 = touchBank[num];
          let tmp3 = num2;
          let tmp4 = num3;
          let tmp5 = num;
          let tmp6 = tmp13;
          let tmp7 = num2;
          let tmp8 = num3;
          let tmp9 = tmp13;
          if (tmp2 !== null) {
            tmp7 = num2;
            tmp8 = num3;
            tmp9 = tmp13;
            if (tmp2 !== undefined) {
              tmp7 = num2;
              tmp8 = num3;
              tmp9 = tmp13;
              if (tmp2.touchActive) {
                tmp7 = num2;
                tmp8 = num3;
                tmp9 = tmp13;
                if (tmp2.currentTimeStamp >= arg1) {
                  break;
                }
              }
            }
          }
          num = num + 1;
          num2 = tmp7;
          num3 = tmp8;
          tmp13 = tmp9;
          num4 = tmp7;
          num5 = tmp8;
        }
        if (arg3) {
          if (arg2) {
            let currentPageY = tmp2.currentPageX;
            const sum = num2 + currentPageY;
            const sum1 = num3 + 1;
          }
          if (!arg3) {
            if (arg2) {
              currentPageY = tmp2.previousPageX;
            }
          }
          currentPageY = tmp2.previousPageY;
        }
        if (arg3) {
          if (!arg2) {
            currentPageY = tmp2.currentPageY;
          }
        }
      }
    }
    if (num5 > 0) {
      let noCentroid = num4 / num5;
    } else {
      noCentroid = obj.noCentroid;
    }
    return noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, true);
  },
  currentCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, true);
  },
  previousCentroidXOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, true, false);
  },
  previousCentroidYOfTouchesChangedAfter(touchBank) {
    return obj.centroidDimension(touchBank, arg1, false, false);
  },
  currentCentroidX(touchBank) {
    return obj.centroidDimension(touchBank, 0, true, true);
  },
  currentCentroidY(touchBank) {
    return obj.centroidDimension(touchBank, 0, false, true);
  },
  noCentroid: -1
};
arg5.default = obj;
