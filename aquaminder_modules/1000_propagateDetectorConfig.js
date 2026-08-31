// Module ID: 1000
// Function ID: 10717
// Name: propagateDetectorConfig
// Dependencies: [1, 119, 2, 968, 969, 251, 1001, 1010, 1015, 1011, 1016, 1013, 1012, 1017, 1018]
// Exports: GestureDetector

// Module 1000 (propagateDetectorConfig)
import getIteratorFn from "getIteratorFn" /* 119 */;
import get_registerCallableModule from "get registerCallableModule" /* 968 */;
import _mod969 from "module_969" /* 969 */;
import module_1 from "module_1" /* 1 */;
import closure_5 from "jsxProd" /* 251 */;

function propagateDetectorConfig(gesture, gesture) {
  for (const item10007 of ["userSelect", "enableContextMenu", "touchAction"]) {
    let tmp2 = arg0;
    let tmp3 = arg0[item10007];
    if (tmp3 === undefined) {
      continue;
    } else {
      let tmp5 = arg1;
      let toGestureArrayResult = arg1.toGestureArray();
      let tmp7 = toGestureArrayResult;
      for (const item10018 of toGestureArrayResult) {
        let tmp8 = item10007;
        let tmp9 = tmp3;
        item10018.config[tmp] = tmp4;
        continue;
      }
      continue;
    }
    continue;
  }
}
let closure_2 = _interopRequireWildcard(getIteratorFn);
let closure_3 = module_1(get_registerCallableModule);
let closure_4 = module_1(_mod969);

export function GestureDetector(gesture) {
  const context = webEventHandlers.useContext(current2.default);
  gesture = gesture.gesture;
  propagateDetectorConfig(gesture, gesture);
  const items = [gesture];
  const memo = webEventHandlers.useMemo(() => gesture.toGestureArray(), items);
  const someResult = memo.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
  webEventHandlers = gesture(memo[6]).useWebEventHandlers();
  const current = webEventHandlers.useRef({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
  let obj = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false };
  current2 = webEventHandlers.default.useRef(obj).current;
  const detectorUpdater = gesture(memo[7]).useDetectorUpdater(current, current2, memo, gesture, webEventHandlers);
  const viewRefHandler = gesture(memo[8]).useViewRefHandler(current, detectorUpdater);
  let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
  if (!needsToReattachResult) {
    needsToReattachResult = gesture(memo[9]).needsToReattach(current2, memo);
  }
  current.forceRebuildReanimatedEvent = false;
  const animatedGesture = gesture(memo[10]).useAnimatedGesture(current2, needsToReattachResult);
  const layoutEffect = webEventHandlers.useLayoutEffect(() => {
    current2.isMounted = true;
    const defaultResult = current.default(current.viewRef);
    gesture(memo[11]).attachHandlers({ preparedGesture: current2, gestureConfig: gesture, gesturesToAttach: memo, webEventHandlersRef: webEventHandlers, viewTag: current.default(current.viewRef) });
    return () => {
      closure_1_4.isMounted = false;
      gesture(memo[12]).dropHandlers(closure_1_4);
    };
  }, []);
  const items1 = [gesture];
  const effect = webEventHandlers.useEffect(() => {
    if (current.firstRender) {
      current.firstRender = false;
    } else {
      detectorUpdater();
    }
  }, items1);
  const mountReactions = gesture(memo[13]).useMountReactions(detectorUpdater, current2);
  const jsx = detectorUpdater.jsx;
  const tmp14 = gesture(memo[14]);
  if (someResult) {
    obj = { ref: viewRefHandler, onGestureHandlerEvent: current2.animatedEventHandler, children: gesture.children };
    return <tmp14.AnimatedWrap ref={viewRefHandler} onGestureHandlerEvent={current2.animatedEventHandler}>{arg0.children}</tmp14.AnimatedWrap>;
  } else {
    const obj1 = { ref: viewRefHandler, children: gesture.children };
    return <tmp14.Wrap ref={viewRefHandler}>{arg0.children}</tmp14.Wrap>;
  }
  const _default = webEventHandlers.default;
}
