// Module ID: 40
// Function ID: 350
// Name: _iterableToArrayLimit
// Dependencies: []

// Module 40 (_iterableToArrayLimit)

export default function _iterableToArrayLimit(iterable) {
  let tmp7 = null;
  if (null != iterable) {
    const _Symbol = Symbol;
    iterable = "undefined" !== typeof Symbol;
    if (iterable) {
      const _Symbol2 = Symbol;
      iterable = iterable[Symbol.iterator];
    }
    if (!iterable) {
      iterable = iterable[Symbol.iterator];
    }
    tmp7 = iterable;
  }
  if (null != tmp7) {
    const items = [];
    try {
      const iter = tmp7.call(iterable);
      const next = iter.next;
      if (0 === arg1) {
        const _Object = Object;
        if (Object(obj3) !== obj3) {
          try {
            if (flag2) {
              throw tmp6;
            }
          } catch (tmp27) {
            if (tmp2) {
              throw tmp;
            } else {
              throw tmp27;
            }
          }
        } else {
          let flag4 = false;
        }
      } else {
        const iter4 = next.call(obj3);
        const done2 = iter4.done;
        flag4 = done2;
        if (!done2) {
          items.push(iter5.value);
          if (items.length !== arg1) {
            const iter2 = next.call(obj3);
            const done = iter2.done;
            flag4 = done;
            while (!done) {
              let tmp19 = items;
              let tmp20 = iter2;
              let arr = items.push(iter3.value);
              let tmp22 = arg1;
              if (items.length !== arg1) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        }
      }
      try {
        if (!flag4) {
          if (null != obj3.return) {
            const returnResult = obj3.return();
            const _Object2 = Object;
            if (Object(returnResult) !== returnResult) {
              if (flag2) {
                throw tmp6;
              }
            }
          }
        }
        if (flag2) {
          throw tmp6;
        } else {
          return items;
        }
      } catch (tmp39) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp39;
        }
      }
    } catch (tmp42) {
      try {
        if (!tmp4) {
          if (tmp5 != obj.return) {
            const returnResult1 = obj.return();
            const _Object3 = Object;
            if (Object(returnResult1) !== returnResult1) {
              if (tmp2) {
                throw tmp;
              } else {
                return tmp3;
              }
            }
          }
        }
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp42;
        }
      } catch (tmp51) {
        if (tmp2) {
          throw tmp;
        } else {
          throw tmp51;
        }
      }
    }
  }
};
