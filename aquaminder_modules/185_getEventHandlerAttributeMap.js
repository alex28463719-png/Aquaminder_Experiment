// Module ID: 185
// Function ID: 2034
// Name: getEventHandlerAttributeMap
// Dependencies: []

// Module 185 (getEventHandlerAttributeMap)
function getEventHandlerAttributeMap(removeEventListener) {
  return removeEventListener[closure_0];
}
function setEventHandlerAttributeMap(removeEventListener, map) {
  removeEventListener[closure_0] = map;
}
arg5.getEventHandlerAttribute = function getEventHandlerAttribute(removeEventListener, error) {
  let value;
  const obj = getEventHandlerAttributeMap(removeEventListener);
  if (obj != null) {
    value = obj.get(error);
  }
  let handleEvent = null;
  if (value != null) {
    handleEvent = value.handleEvent;
  }
  return handleEvent;
};
arg5.setEventHandlerAttribute = function setEventHandlerAttribute(removeEventListener, error, fn) {
  const tmp = getEventHandlerAttributeMap(removeEventListener);
  let obj = tmp;
  if (tmp != null) {
    const value = obj.get(error);
    if (value) {
      const removed = removeEventListener.removeEventListener(error, value);
      obj.delete(error);
    }
  }
  if (fn != null) {
    if (typeof fn === "function") {
      obj = { handleEvent: fn };
      try {
        const listener = removeEventListener.addEventListener(error, tmp11);
        if (obj == null) {
          const _Map = Map;
          const map = new Map();
          obj = map;
          setEventHandlerAttributeMap(removeEventListener, map);
        }
        const result = obj.set(error, obj);
      } catch (err) {
      }
    }
  }
  if (obj != null) {
    if (obj.size === 0) {
      setEventHandlerAttributeMap(removeEventListener, null);
    }
  }
};
let closure_0 = Symbol("eventHandlerAttributeMap");
