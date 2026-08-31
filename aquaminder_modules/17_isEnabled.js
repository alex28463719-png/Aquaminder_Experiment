// Module ID: 17
// Function ID: 223
// Name: isEnabled
// Dependencies: []

// Module 17 (isEnabled)
const global = arg0;
function isEnabled() {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = global.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(global.__RCTProfileIsProfiling);
  }
  return nativeTraceIsTracingResult;
}
arg5.beginAsyncEvent = function beginAsyncEvent(fn) {
  if (isEnabled()) {
    closure_2 = closure_2 + 1;
    let tmp3 = fn;
    if (typeof fn === "function") {
      tmp3 = fn();
    }
    const result = global.nativeTraceBeginAsyncSection(c1, tmp3, tmp, arg1);
  }
  return closure_2;
};
arg5.beginEvent = function beginEvent(fn) {
  if (isEnabled()) {
    let tmp = fn;
    if (typeof fn === "function") {
      tmp = fn();
    }
    const result = global.nativeTraceBeginSection(c1, tmp, arg1);
  }
};
arg5.counterEvent = function counterEvent(pending_js_to_native_queue, length) {
  if (isEnabled()) {
    let tmp = pending_js_to_native_queue;
    if (typeof pending_js_to_native_queue === "function") {
      tmp = pending_js_to_native_queue();
    }
    if (global.nativeTraceCounter) {
      global.nativeTraceCounter(c1, tmp, length);
    }
  }
};
arg5.endAsyncEvent = function endAsyncEvent(fn) {
  if (isEnabled()) {
    let tmp = fn;
    if (typeof fn === "function") {
      tmp = fn();
    }
    const result = global.nativeTraceEndAsyncSection(c1, tmp, arg1, arg2);
  }
};
arg5.endEvent = function endEvent(arg0) {
  if (isEnabled()) {
    const result = global.nativeTraceEndSection(c1, arg0);
  }
};
arg5.isEnabled = isEnabled;
arg5.setEnabled = function setEnabled(arg0) {

};
let c1 = 131072;
let c2 = 0;
