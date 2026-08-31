// Module ID: 1017
// Function ID: 10792
// Name: shouldUpdateDetector
// Dependencies: [119, 976, 978]
// Exports: useMountReactions

// Module 1017 (shouldUpdateDetector)
import isConfigParam from "isConfigParam" /* 976 */;
import closure_2 from "getIteratorFn" /* 119 */;

function shouldUpdateDetector(arg0, handlerTag) {
  if (arg0 === undefined) {
    return false;
  } else {
    const result = isConfigParam.transformIntoHandlerTags(arg0);
    for (const item10012 of result) {
      let tmp5 = arg1;
      if (item10012 === arg1.handlerTag) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}

export function useMountReactions(detectorUpdater, current2) {
  closure_0 = detectorUpdater;
  closure_1 = current2;
  const items = [detectorUpdater, current2];
  const effect = React.useEffect(() => {
    const MountRegistry = detectorUpdater(table[2]).MountRegistry;
    return MountRegistry.addMountListener((arg0) => {
      for (const item10008 of tmp) {
        let requireToFail = item10008.config.requireToFail;
        let simultaneousWith = item10008.config.simultaneousWith;
        let tmp2 = closure_2_3;
        let tmp3 = arg0;
        if (!closure_2_3(item10008.config.blocksHandlers, arg0)) {
          let tmp4 = closure_2_3;
          let tmp5 = requireToFail;
          let tmp6 = arg0;
          if (!closure_2_3(requireToFail, arg0)) {
            let tmp7 = closure_2_3;
            let tmp8 = simultaneousWith;
            let tmp9 = arg0;
          }
        }
        let tmp10 = closure_1_0;
        let tmp11 = closure_1_0();
        obj.return();
      }
    });
  }, items);
}
