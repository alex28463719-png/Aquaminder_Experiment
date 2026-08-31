// Module ID: 1014
// Function ID: 10776
// Name: updateHandlers
// Dependencies: [1, 966, 1001, 977, 976, 975]
// Exports: updateHandlers

// Module 1014 (updateHandlers)
import _mod966 from "module_966" /* 966 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(_mod966);

export function updateHandlers(closure_1, closure_3, closure_2) {
  const _require = closure_1;
  dependencyMap = closure_2;
  closure_3.prepare();
  for (let num = 0; num < closure_2.length; num = num + 1) {
    let tmp2 = closure_1.attachedGestures[num];
    let tmp3 = _require;
    let tmp4 = dependencyMap;
    let result = _require(1001).checkGestureCallbacksForWorklets(tmp2);
    let tmp6 = num;
    if (closure_2[num].handlerTag !== tmp2.handlerTag) {
      ({ handlerTag: closure_2[num].handlerTag, handlerTag: closure_2[num].handlers.handlerTag } = tmp2);
    }
  }
  const attachedGestures = closure_1.attachedGestures;
  _require(977).ghQueueMicrotask(() => {
    if (lib.isMounted) {
      if (attachedGestures === lib.attachedGestures) {
        let tmp15 = attachedGestures.length !== closure_1.length;
        let num = 0;
        let tmp16 = tmp15;
        if (0 < closure_1.length) {
          do {
            let tmp3 = attachedGestures;
            let tmp4 = attachedGestures[num];
            let tmp5 = closure_1;
            let tmp6 = tmp15;
            let tmp7 = num;
            let flag = tmp15;
            if (tmp4.handlers.gestureId !== closure_1[num].handlers.gestureId) {
              let tmp8 = closure_1;
              if (closure_1[num].shouldUseReanimated) {
                flag = true;
              } else {
                flag = tmp15;
              }
            }
            let tmp9 = closure_1;
            tmp4.config = closure_1[num].config;
            tmp4.handlers = closure_1[num].handlers;
            let tmp10 = attachedGestures;
            let _default = attachedGestures.default;
            let tmp11 = lib;
            let tmp12 = closure_1;
            let updateGestureHandlerResult = _default.updateGestureHandler(tmp4.handlerTag, lib(closure_1[4]).filterConfig(tmp4.config, lib(closure_1[2]).ALLOWED_PROPS, lib(closure_1[2]).extractGestureRelations(tmp4)));
            let registerHandlerResult = lib(closure_1[5]).registerHandler(tmp4.handlerTag, tmp4, tmp4.config.testId);
            num = num + 1;
            tmp15 = flag;
            tmp16 = flag;
          } while (num < closure_1.length);
        }
        if (lib.animatedHandlers) {
          if (tmp16) {
            const found = attachedGestures.filter((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
            lib.animatedHandlers.value = found.map((handlers) => handlers.handlers);
          }
        }
        const result = lib(closure_1[4]).scheduleFlushOperations();
      }
    }
  });
}
