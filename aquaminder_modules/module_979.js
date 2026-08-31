// Module ID: 979
// Function ID: 10494
// Dependencies: []

// Module 979
arg5.MouseButton = undefined;
arg5.baseGestureHandlerProps = undefined;
arg5.baseGestureHandlerWithDetectorProps = undefined;
const items = ["id", "enabled", "shouldCancelWhenOutside", "hitSlop", "cancelsTouchesInView", "userSelect", "activeCursor", "mouseButton", "enableContextMenu", "touchAction"];
const items1 = [];
arg5.baseGestureHandlerProps = items1.concat(items, ["waitFor", "simultaneousHandlers", "blocksHandlers"], ["onBegan", "onFailed", "onCancelled", "onActivated", "onEnded", "onGestureEvent", "onHandlerStateChange"]);
const items2 = [];
arg5.baseGestureHandlerWithDetectorProps = items2.concat(items, ["needsPointerData", "manualActivation"]);
arg5.MouseButton = { LEFT: 1, [1]: "LEFT", RIGHT: 2, [2]: "RIGHT", MIDDLE: 4, [4]: "MIDDLE", BUTTON_4: 8, [8]: "BUTTON_4", BUTTON_5: 16, [16]: "BUTTON_5", ALL: 31, [31]: "ALL" };
