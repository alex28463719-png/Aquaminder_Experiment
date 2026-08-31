// Module ID: 176
// Function ID: 1944
// Name: getComposedPath
// Dependencies: []

// Module 176 (getComposedPath)
arg5.COMPOSED_PATH_KEY = undefined;
arg5.CURRENT_TARGET_KEY = undefined;
arg5.EVENT_PHASE_KEY = undefined;
arg5.IN_PASSIVE_LISTENER_FLAG_KEY = undefined;
arg5.IS_TRUSTED_KEY = undefined;
arg5.STOP_IMMEDIATE_PROPAGATION_FLAG_KEY = undefined;
arg5.STOP_PROPAGATION_FLAG_KEY = undefined;
arg5.TARGET_KEY = undefined;
arg5.getComposedPath = function getComposedPath(arg0) {
  return arg0[closure_0];
};
arg5.getCurrentTarget = function getCurrentTarget(arg0) {
  return arg0[SymbolResult1];
};
arg5.getEventPhase = function getEventPhase(arg0) {
  return arg0[SymbolResult2];
};
arg5.getInPassiveListenerFlag = function getInPassiveListenerFlag(self) {
  return self[SymbolResult3];
};
arg5.getIsTrusted = function getIsTrusted(arg0) {
  return arg0[SymbolResult4];
};
arg5.getStopImmediatePropagationFlag = function getStopImmediatePropagationFlag(type) {
  return type[SymbolResult5];
};
arg5.getStopPropagationFlag = function getStopPropagationFlag(bubbles) {
  return bubbles[SymbolResult6];
};
arg5.getTarget = function getTarget(arg0) {
  return arg0[SymbolResult7];
};
arg5.setComposedPath = function setComposedPath(bubbles, arr) {
  bubbles[closure_0] = arr;
};
arg5.setCurrentTarget = function setCurrentTarget(arg0, arg1) {
  arg0[SymbolResult1] = arg1;
};
arg5.setEventPhase = function setEventPhase(arg0, arg1) {
  arg0[SymbolResult2] = arg1;
};
arg5.setInPassiveListenerFlag = function setInPassiveListenerFlag(type, arg1) {
  type[SymbolResult3] = arg1;
};
arg5.setIsTrusted = function setIsTrusted(defaultPrevented, arg1) {
  defaultPrevented[SymbolResult4] = arg1;
};
arg5.setStopImmediatePropagationFlag = function setStopImmediatePropagationFlag(bubbles, arg1) {
  bubbles[SymbolResult5] = arg1;
};
arg5.setStopPropagationFlag = function setStopPropagationFlag(bubbles, arg1) {
  bubbles[SymbolResult6] = arg1;
};
arg5.setTarget = function setTarget(bubbles, arg1) {
  bubbles[SymbolResult7] = arg1;
};
const SymbolResult = Symbol("composedPath");
arg5.COMPOSED_PATH_KEY = SymbolResult;
const SymbolResult1 = Symbol("currentTarget");
arg5.CURRENT_TARGET_KEY = SymbolResult1;
const SymbolResult2 = Symbol("eventPhase");
arg5.EVENT_PHASE_KEY = SymbolResult2;
const SymbolResult3 = Symbol("inPassiveListenerFlag");
arg5.IN_PASSIVE_LISTENER_FLAG_KEY = SymbolResult3;
const SymbolResult4 = Symbol("isTrusted");
arg5.IS_TRUSTED_KEY = SymbolResult4;
const SymbolResult5 = Symbol("stopPropagationFlag");
arg5.STOP_IMMEDIATE_PROPAGATION_FLAG_KEY = SymbolResult5;
const SymbolResult6 = Symbol("stopPropagationFlag");
arg5.STOP_PROPAGATION_FLAG_KEY = SymbolResult6;
const SymbolResult7 = Symbol("target");
arg5.TARGET_KEY = SymbolResult7;
