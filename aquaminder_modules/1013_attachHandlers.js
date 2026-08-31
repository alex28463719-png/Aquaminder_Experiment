// Module ID: 1013
// Function ID: 10770
// Name: attachHandlers
// Dependencies: [1, 966, 2, 977, 1001, 976, 975, 974, 978]
// Exports: attachHandlers

// Module 1013 (attachHandlers)
import _mod966 from "module_966" /* 966 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "get registerCallableModule" /* 2 */;

let closure_2 = module_1(_mod966);

export function attachHandlers(preparedGesture) {
  preparedGesture = preparedGesture.preparedGesture;
  const gestureConfig = preparedGesture.gestureConfig;
  const gesturesToAttach = preparedGesture.gesturesToAttach;
  ({ viewTag, webEventHandlersRef } = preparedGesture);
  gestureConfig.initialize();
  preparedGesture(gestureConfig[3]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      gestureConfig.prepare();
    }
  });
  let iter = gesturesToAttach[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = preparedGesture;
    let tmp5 = gestureConfig;
    let result = preparedGesture(gestureConfig[4]).checkGestureCallbacksForWorklets(nextResult);
    let tmp7 = gesturesToAttach;
    let _default = gesturesToAttach.default;
    ({ handlerName, handlerTag } = nextResult);
    let gestureHandler = _default.createGestureHandler(handlerName, handlerTag, preparedGesture(gestureConfig[5]).filterConfig(nextResult.config, preparedGesture(gestureConfig[4]).ALLOWED_PROPS));
    let registerHandlerResult = preparedGesture(gestureConfig[6]).registerHandler(nextResult.handlerTag, nextResult, nextResult.config.testId);
    continue;
  }
  preparedGesture(gestureConfig[3]).ghQueueMicrotask(() => {
    if (preparedGesture.isMounted) {
      const iter = gesturesToAttach[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = gesturesToAttach;
        let _default = gesturesToAttach.default;
        let tmp6 = preparedGesture;
        let tmp7 = gestureConfig;
        let updateGestureHandlerResult = _default.updateGestureHandler(nextResult.handlerTag, preparedGesture(gestureConfig[5]).filterConfig(nextResult.config, preparedGesture(gestureConfig[4]).ALLOWED_PROPS, preparedGesture(gestureConfig[4]).extractGestureRelations(nextResult)));
        continue;
      }
      const result = preparedGesture(gestureConfig[5]).scheduleFlushOperations();
    }
  });
  const iter2 = gesturesToAttach[Symbol.iterator]();
  while (true) {
    let nextResult1 = iter2.next();
    let tmp12 = iter2;
    if (iter2 === undefined) {
      preparedGesture.attachedGestures = gesturesToAttach;
      if (preparedGesture.animatedHandlers) {
        let found = gesturesToAttach.filter(function isAnimatedGesture(shouldUseReanimated) {
          return shouldUseReanimated.shouldUseReanimated;
        });
        preparedGesture.animatedHandlers.value = found.map((handlers) => handlers.handlers);
      }
    } else {
      let tmp13 = nextResult1;
      let tmp14 = preparedGesture;
      let tmp15 = gestureConfig;
      let ActionType = preparedGesture(gestureConfig[7]).ActionType;
      let tmp16 = nextResult1.shouldUseReanimated ? ActionType.REANIMATED_WORKLET : ActionType.JS_FUNCTION_NEW_API;
      let tmp18 = Platform;
      if (Platform.Platform.OS === "web") {
        let tmp24 = gesturesToAttach;
        let _default3 = gesturesToAttach.default;
        let tmp25 = nextResult1;
        let handlerTag2 = tmp13.handlerTag;
        let tmp26 = viewTag;
        let tmp27 = preparedGesture;
        let tmp28 = gestureConfig;
        let tmp29 = webEventHandlersRef;
        let tmp30 = _default3;
        let tmp31 = handlerTag2;
        let attachGestureHandlerResult = _default3.attachGestureHandler(handlerTag2, viewTag, preparedGesture(gestureConfig[7]).ActionType.JS_FUNCTION_OLD_API, webEventHandlersRef);
      } else {
        let tmp19 = gesturesToAttach;
        let _default2 = gesturesToAttach.default;
        let tmp20 = nextResult1;
        let tmp21 = viewTag;
        let tmp22 = tmp16;
        let attachGestureHandlerResult1 = _default2.attachGestureHandler(tmp13.handlerTag, viewTag, tmp17);
      }
      let tmp33 = preparedGesture;
      let tmp34 = gestureConfig;
      let MountRegistry = preparedGesture(gestureConfig[8]).MountRegistry;
      let tmp35 = nextResult1;
      let gestureWillMountResult = MountRegistry.gestureWillMount(tmp13);
    }
  }
}
