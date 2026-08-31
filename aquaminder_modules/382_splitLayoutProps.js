// Module ID: 382
// Function ID: 4709
// Name: splitLayoutProps
// Dependencies: []

// Module 382 (splitLayoutProps)
arg5.default = function splitLayoutProps(arg0) {
  let obj = null;
  obj = null;
  if (arg0 != null) {
    obj = {};
    obj = {};
    const _Object = Object;
    const keys = Object.keys(arg0);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("margin" !== nextResult) {
        if ("marginHorizontal" !== nextResult) {
          if ("marginVertical" !== nextResult) {
            if ("marginBottom" !== nextResult) {
              if ("marginTop" !== nextResult) {
                if ("marginLeft" !== nextResult) {
                  if ("marginRight" !== nextResult) {
                    if ("flex" !== nextResult) {
                      if ("flexGrow" !== nextResult) {
                        if ("flexShrink" !== nextResult) {
                          if ("flexBasis" !== nextResult) {
                            if ("alignSelf" !== nextResult) {
                              if ("height" !== nextResult) {
                                if ("minHeight" !== nextResult) {
                                  if ("maxHeight" !== nextResult) {
                                    if ("width" !== nextResult) {
                                      if ("minWidth" !== nextResult) {
                                        if ("maxWidth" !== nextResult) {
                                          if ("position" !== nextResult) {
                                            if ("left" !== nextResult) {
                                              if ("right" !== nextResult) {
                                                if ("bottom" !== nextResult) {
                                                  if ("top" !== nextResult) {
                                                    if ("transform" !== nextResult) {
                                                      if ("transformOrigin" !== nextResult) {
                                                        if ("rowGap" !== nextResult) {
                                                          if ("columnGap" !== nextResult) {
                                                            if ("gap" !== nextResult) {
                                                              let tmp4 = obj;
                                                              let tmp5 = nextResult;
                                                              let tmp6 = arg0;
                                                              obj[tmp3] = arg0[tmp3];
                                                            }
                                                            continue;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp7 = obj;
      let tmp8 = nextResult;
      let tmp9 = arg0;
      obj[tmp3] = arg0[tmp3];
    }
  }
  obj = {};
  obj.outer = obj;
  obj.inner = obj;
  return obj;
};
