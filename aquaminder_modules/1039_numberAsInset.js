// Module ID: 1039
// Function ID: 10983
// Name: numberAsInset
// Dependencies: []

// Module 1039 (numberAsInset)
arg5.addInsets = undefined;
arg5.gestureToPressableEvent = undefined;
arg5.gestureTouchToPressableEvent = undefined;
arg5.isTouchWithinInset = undefined;
arg5.numberAsInset = function numberAsInset(hitSlop) {
  return { left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop };
};
arg5.addInsets = function addInsets(memo, memo1) {
  const obj = {};
  const left = memo.left;
  let num = 0;
  if (left != null) {
    num = left;
  }
  const left2 = memo1.left;
  let num2 = 0;
  if (left2 != null) {
    num2 = left2;
  }
  obj.left = num + num2;
  const right = memo.right;
  let num3 = 0;
  if (right != null) {
    num3 = right;
  }
  const right2 = memo1.right;
  let num4 = 0;
  if (right2 != null) {
    num4 = right2;
  }
  obj.right = num3 + num4;
  const top = memo.top;
  let num5 = 0;
  if (top != null) {
    num5 = top;
  }
  const top2 = memo1.top;
  let num6 = 0;
  if (top2 != null) {
    num6 = top2;
  }
  obj.top = num5 + num6;
  const bottom = memo.bottom;
  let num7 = 0;
  if (bottom != null) {
    num7 = bottom;
  }
  const bottom2 = memo1.bottom;
  let num8 = 0;
  if (bottom2 != null) {
    num8 = bottom2;
  }
  obj.bottom = num7 + num8;
  return obj;
};
function touchDataToPressEvent(id, timestamp) {
  return { identifier: id.id, locationX: id.x, locationY: id.y, pageX: id.absoluteX, pageY: id.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
}
function gestureToPressEvent(handlerTag, timestamp, arg2) {
  return { identifier: handlerTag.handlerTag, locationX: handlerTag.x, locationY: handlerTag.y, pageX: handlerTag.absoluteX, pageY: handlerTag.absoluteY, target: 0, timestamp, touches: [], changedTouches: [] };
}
arg5.isTouchWithinInset = function isTouchWithinInset(width, memo, changedTouches) {
  let x;
  if (changedTouches != null) {
    x = changedTouches.x;
  }
  let num = 0;
  if (x != null) {
    num = x;
  }
  const right = memo.right;
  let num2 = 0;
  if (right != null) {
    num2 = right;
  }
  let tmp2 = num < num2 + width.width;
  if (tmp2) {
    let y;
    if (changedTouches != null) {
      y = changedTouches.y;
    }
    let num3 = 0;
    if (y != null) {
      num3 = y;
    }
    const bottom = memo.bottom;
    let num4 = 0;
    if (bottom != null) {
      num4 = bottom;
    }
    tmp2 = num3 < num4 + width.height;
  }
  if (tmp2) {
    let x1;
    if (changedTouches != null) {
      x1 = changedTouches.x;
    }
    let num5 = 0;
    if (x1 != null) {
      num5 = x1;
    }
    const left = memo.left;
    let num6 = 0;
    if (left != null) {
      num6 = left;
    }
    tmp2 = num5 > -num6;
  }
  if (tmp2) {
    let y1;
    if (changedTouches != null) {
      y1 = changedTouches.y;
    }
    let num7 = 0;
    if (y1 != null) {
      num7 = y1;
    }
    const top = memo.top;
    let num8 = 0;
    if (top != null) {
      num8 = top;
    }
    tmp2 = num7 > -num8;
  }
  return tmp2;
};
arg5.gestureToPressableEvent = function gestureToPressableEvent(closure_0) {
  const timestamp = Date.now();
  const tmp2 = gestureToPressEvent(closure_0, timestamp, 0);
  const nativeEvent = { touches: items, changedTouches: items1, identifier: tmp2.identifier, locationX: closure_0.x, locationY: closure_0.y, pageX: closure_0.absoluteX, pageY: closure_0.absoluteY, target: 0, timestamp, force: undefined };
  items = [tmp2];
  items1 = [tmp2];
  return { nativeEvent };
};
arg5.gestureTouchToPressableEvent = function gestureTouchToPressableEvent(closure_0) {
  const timestamp = Date.now();
  ({ allTouches, changedTouches } = closure_0);
  const mapped = allTouches.map((arg0) => timestamp(arg0, timestamp, 0));
  let obj = {};
  obj = { touches: mapped, changedTouches: changedTouches.map((arg0) => timestamp(arg0, timestamp, 0)), identifier: closure_0.handlerTag };
  const allTouches2 = closure_0.allTouches;
  const atResult = allTouches2.at(0);
  let x;
  if (atResult != null) {
    x = atResult.x;
  }
  let num = -1;
  let num2 = -1;
  if (x != null) {
    num2 = x;
  }
  obj.locationX = num2;
  const allTouches3 = closure_0.allTouches;
  const atResult1 = allTouches3.at(0);
  let y;
  if (atResult1 != null) {
    y = atResult1.y;
  }
  let tmp7 = num;
  if (y != null) {
    tmp7 = y;
  }
  obj.locationY = tmp7;
  const allTouches4 = closure_0.allTouches;
  const atResult2 = allTouches4.at(0);
  let absoluteX;
  if (atResult2 != null) {
    absoluteX = atResult2.absoluteX;
  }
  let tmp10 = num;
  if (absoluteX != null) {
    tmp10 = absoluteX;
  }
  obj.pageX = tmp10;
  const allTouches5 = closure_0.allTouches;
  const atResult3 = allTouches5.at(0);
  let absoluteY;
  if (atResult3 != null) {
    absoluteY = atResult3.absoluteY;
  }
  if (absoluteY != null) {
    num = absoluteY;
  }
  obj.pageY = num;
  obj.target = 0;
  obj.timestamp = timestamp;
  obj.force = undefined;
  obj.nativeEvent = obj;
  return obj;
};
