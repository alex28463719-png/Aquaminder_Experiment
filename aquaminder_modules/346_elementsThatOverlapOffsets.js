// Module ID: 346
// Function ID: 4243
// Name: elementsThatOverlapOffsets
// Dependencies: [1, 38, 73]
// Exports: computeWindowedRenderLimits, keyExtractor

// Module 346 (elementsThatOverlapOffsets)
import _slicedToArray from "_slicedToArray" /* 38 */;
import animatedShouldDebounceQueueFlush from "animatedShouldDebounceQueueFlush" /* 73 */;
import module_1 from "module_1" /* 1 */;

function elementsThatOverlapOffsets(items, getItemCount, getCellMetricsApprox, arg3) {
  let num = 1;
  if (arguments.length > 3) {
    num = 1;
    if (arguments[3] !== undefined) {
      num = arguments[3];
    }
  }
  items = [];
  let num2 = 0;
  if (0 < items.length) {
    do {
      let tmp5 = items[num2];
      let diff = tmp - 1;
      let tmp7 = num2;
      let tmp8 = tmp2;
      let tmp9 = tmp3;
      let tmp10 = tmp4;
      let num3 = 0;
      if (0 <= diff) {
        while (true) {
          let _Math = Math;
          let sum = num3 + Math.floor((diff - num3) / 2);
          let cellMetricsApprox = getCellMetricsApprox.getCellMetricsApprox(sum, getItemCount);
          let result = cellMetricsApprox.offset * num;
          let result1 = (cellMetricsApprox.offset + cellMetricsApprox.length) * num;
          let tmp14 = num3;
          let diff1 = diff;
          if (sum !== 0) {
            if (sum === 0) {
              if (tmp5 <= result1) {
                break;
              } else {
                let sum1 = sum + 1;
                num3 = sum1;
                diff = diff1;
                tmp8 = sum;
                tmp9 = result;
                tmp10 = result1;
              }
            }
          }
          diff1 = sum - 1;
          sum1 = num3;
        }
        items[num2] = sum;
        tmp8 = sum;
        tmp9 = result;
        tmp10 = result1;
      }
      num2 = num2 + 1;
      tmp2 = tmp8;
      tmp3 = tmp9;
      tmp4 = tmp10;
    } while (num2 < items.length);
  }
  return items;
}
function newRangeCount(last, last2) {
  const sum = last2.last - last2.first + 1;
  const sum1 = 1 + Math.min(last2.last, last.last);
  return sum - Math.max(0, sum1 - Math.max(last2.first, last.first));
}
let closure_0 = module_1(_slicedToArray);
let closure_1 = _interopRequireWildcard(animatedShouldDebounceQueueFlush);

export function computeWindowedRenderLimits(getItemCount, result2, arg2, first, _listMetrics, _scrollMetrics) {
  const itemCount = getItemCount.getItemCount(getItemCount.data);
  if (itemCount === 0) {
    return { first: 0, last: -1 };
  } else {
    ({ velocity, visibleLength, zoomScale } = _scrollMetrics);
    let num = 1;
    if (zoomScale !== undefined) {
      num = zoomScale;
    }
    const _Math = Math;
    const bound = Math.max(0, _scrollMetrics.offset);
    const sum = bound + visibleLength;
    let str2 = "after";
    const result = (arg2 - 1) * visibleLength;
    if (velocity <= 1) {
      let str3 = "none";
      if (velocity < -1) {
        str3 = "before";
      }
      str2 = str3;
    }
    const _Math2 = Math;
    const result1 = 0.5 * result;
    const bound1 = Math.max(0, bound - result1);
    const _Math3 = Math;
    const bound2 = Math.max(0, sum + result1);
    if (_listMetrics.getCellMetricsApprox(itemCount - 1, getItemCount).offset * num < bound1) {
      let obj = {};
      const _Math6 = Math;
      obj.first = Math.max(0, itemCount - 1 - result2);
      obj.last = itemCount - 1;
      return obj;
    } else {
      const items = [bound1, bound, sum, bound2];
      const defaultResult = closure_0.default(elementsThatOverlapOffsets(items, getItemCount, _listMetrics, num), 4);
      [tmp42, tmp10] = defaultResult;
      let bound4 = defaultResult[2];
      let diff = defaultResult[3];
      let num4 = 0;
      if (tmp42 != null) {
        num4 = tmp42;
      }
      if (bound3 == null) {
        const _Math4 = Math;
        bound3 = Math.max(0, num4);
      }
      if (diff == null) {
        diff = itemCount - 1;
      }
      if (bound4 == null) {
        const _Math5 = Math;
        bound4 = Math.min(diff, bound3 + result2 - 1);
      }
      obj = { first: bound3, last: bound4 };
      let tmp14 = newRangeCount(first, obj);
      while (true) {
        let tmp15 = bound3;
        let tmp16 = bound4;
        let tmp17 = tmp14;
        if (bound3 > num4) {
          let tmp18 = tmp14 >= result2;
          let tmp19 = closure_1;
          let tmp20 = bound3 <= first.first;
          if (closure_1.fixVirtualizeListCollapseWindowSize()) {
            let tmp22 = bound4 >= first.last;
            let tmp21 = tmp20;
          } else {
            tmp21 = tmp20;
            if (!tmp20) {
              tmp21 = bound3 > first.last;
            }
            tmp22 = bound4 >= first.last || bound4 < first.first;
          }
          let tmp23 = bound3 > num4;
          if (tmp23) {
            let tmp24 = !tmp18;
            if (tmp18) {
              tmp24 = !tmp21;
            }
            tmp23 = tmp24;
          }
          let tmp25 = bound4 < diff;
          if (tmp25) {
            let tmp26 = !tmp18;
            if (tmp18) {
              tmp26 = !tmp22;
            }
            tmp25 = tmp26;
          }
          if (tmp18) {
            if (!tmp23) {
              if (!tmp25) {
                break;
              }
            }
            break;
          }
          let diff1 = bound3;
          let tmp28 = tmp14;
          if (tmp23) {
            if (str2 === "after") {
              if (tmp25) {
                diff1 = bound3;
                tmp28 = tmp14;
              }
            }
            let sum1 = tmp14;
            if (tmp21) {
              sum1 = tmp14 + 1;
            }
            diff1 = bound3 - 1;
            tmp28 = sum1;
          }
          bound3 = diff1;
          tmp14 = tmp28;
          if (!tmp25) {
            continue;
          } else {
            if (str2 === "before") {
              if (tmp23) {
                bound3 = diff1;
                bound4 = tmp16;
                tmp14 = tmp28;
              }
              continue;
            }
            let sum2 = tmp28;
            if (tmp22) {
              sum2 = tmp28 + 1;
            }
            bound4 = tmp16 + 1;
            tmp14 = sum2;
            bound3 = diff1;
            continue;
          }
          continue;
        } else if (bound4 >= diff) {
          break;
        }
        if (bound4 >= bound3) {
          if (bound3 >= 0) {
            if (bound4 < itemCount) {
              if (bound3 >= num4) {
                if (bound4 <= diff) {
                  if (bound3 <= obj.first) {
                    if (bound4 >= obj.last) {
                      obj = { first: bound3, last: bound4 };
                      return obj;
                    }
                  }
                }
              }
            }
          }
        }
        let _Error = Error;
        let _JSON = JSON;
        let obj1 = { first: bound3, last: bound4, itemCount, overscanFirst: num4, overscanLast: diff, visible: obj };
        let str5 = "Bad window calculation ";
        let tmp31 = new.target;
        let tmp32 = new.target;
        let error = new Error("Bad window calculation " + JSON.stringify(obj1));
        let tmp34 = error;
        throw error;
      }
    }
  }
}
export { elementsThatOverlapOffsets };
export function keyExtractor(obj) {
  if (typeof obj === "object") {
    let key;
    if (obj != null) {
      key = obj.key;
    }
    if (key != null) {
      return obj.key;
    }
  }
  if (typeof obj === "object") {
    let id;
    if (obj != null) {
      id = obj.id;
    }
    if (id != null) {
      return obj.id;
    }
  }
  return String(arg1);
}
export { newRangeCount };
