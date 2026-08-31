// Module ID: 525
// Function ID: 5862
// Name: useTranslation
// Dependencies: [1, 38, 119, 513, 523]
// Exports: useTranslation

// Module 525 (useTranslation)
import _slicedToArray from "_slicedToArray" /* 38 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "getIteratorFn" /* 119 */;

let closure_2 = module_1(_slicedToArray);
function usePrevious(arg0, arg1) {
  closure_0 = arg0;
  const ref = React.useRef();
  const items = [arg0, undefined];
  const effect = React.useEffect(() => {
    if (closure_1) {
      let current = ref.current;
    } else {
      current = closure_0;
    }
    ref.current = current;
  }, items);
  return ref.current;
}
function alwaysNewT(getFixedT, lng, ns, keyPrefix) {
  return getFixedT.getFixedT(lng, ns, keyPrefix);
}
function useMemoizedT(getFixedT, lng, ns, keyPrefix) {
  const items = [getFixedT, lng, ns, keyPrefix];
  return React.useCallback(alwaysNewT(getFixedT, lng, ns, keyPrefix), items);
}

export function useTranslation(closure_0, defaultResult) {
  let defaultNS = closure_0;
  if (arguments.length > 1) {
    if (arguments[1] !== undefined) {
      let obj = arguments[1];
    }
    let i18n = obj.i18n;
    const tmp4 = useSuspense.useContext(obj(i18n[3]).I18nContext) || {};
    if (!i18n) {
      i18n = tmp4.i18n;
    }
    if (!i18n) {
      i18n = obj(i18n[3]).getI18n();
    }
    if (i18n) {
      if (!i18n.reportNamespaces) {
        const ReportNamespaces = obj(i18n[3]).ReportNamespaces;
        const prototype = ReportNamespaces.prototype;
        let reportNamespaces = new ReportNamespaces();
        i18n.reportNamespaces = reportNamespaces;
      }
    }
    if (i18n) {
      const react = i18n.options.react;
      if (react != null) {
        if (react.wait) {
          obj(i18n[4]).warnOnce(i18n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        }
      }
      const _Object = Object;
      const _Object2 = Object;
      const merged = Object.assign({}, obj(i18n[3]).getDefaults(), i18n.options.react, obj);
      useSuspense = merged.useSuspense;
      const keyPrefix = merged.keyPrefix;
      if (!defaultNS) {
        defaultNS = tmp4.defaultNS;
      }
      if (!defaultNS) {
        const options = i18n.options;
        defaultNS = undefined;
        if (options != null) {
          defaultNS = options.defaultNS;
        }
      }
      let items1 = defaultNS;
      if (obj(i18n[4]).isString(defaultNS)) {
        const items = [defaultNS];
        items1 = items;
      } else {
        items1 = defaultNS;
        if (!defaultNS) {
          items1 = ["translation"];
        }
      }
      if (i18n.reportNamespaces.addUsedNamespaces != null) {
        reportNamespaces = i18n.reportNamespaces;
        reportNamespaces.addUsedNamespaces(items1);
      }
      const tmp29 = (i18n.isInitialized || i18n.initializedStoreOnce) && items1.every((arg0) => obj(i18n[4]).hasLoadedNamespace(arg0, i18n, merged));
      closure_6 = tmp29;
      let lng = obj.lng;
      if (!lng) {
        lng = null;
      }
      let first = items1;
      if (merged.nsMode !== "fallback") {
        first = items1[0];
      }
      closure_7 = closure_6(i18n, lng, first, keyPrefix);
      function getT() {
        return closure_7;
      }
      function getNewT() {
        let lng = obj.lng;
        if (!lng) {
          lng = null;
        }
        if (merged.nsMode === "fallback") {
          let first = items1;
        } else {
          first = items1[0];
        }
        return items1(i18n, lng, first, keyPrefix);
      }
      [tmp40, closure_10] = merged.default(useSuspense.useState(getT), 2);
      const joined = items1.join();
      let combined = joined;
      let tmp42 = joined;
      if (obj.lng) {
        const _HermesInternal = HermesInternal;
        combined = "" + obj.lng + joined;
        tmp42 = combined;
      }
      closure_12 = keyPrefix(tmp42);
      closure_13 = useSuspense.useRef(true);
      const items2 = [i18n, tmp42];
      const effect = useSuspense.useEffect(() => {
        const bindI18n = boundReset.bindI18n;
        const bindI18nStore = boundReset.bindI18nStore;
        ref.current = true;
        if (!closure_6) {
          if (!useSuspense) {
            obj = obj(i18n[4]);
            if (bindI18n.lng) {
              const languages = obj.loadLanguages(bindI18nStore, bindI18n.lng, items1, () => {
                if (closure_1_13.current) {
                  closure_1_10(closure_1_9);
                }
              });
            } else {
              const namespaces = obj.loadNamespaces(bindI18nStore, items1, () => {
                if (closure_1_13.current) {
                  closure_1_10(closure_1_9);
                }
              });
            }
          }
        }
        if (closure_6) {
          if (closure_12) {
            if (closure_12 !== combined) {
              if (ref.current) {
                callback(getNewT);
              }
            }
          }
        }
        boundReset = function boundReset() {
          if (closure_1_13.current) {
            closure_1_10(closure_1_9);
          }
        };
        if (bindI18n) {
          if (bindI18nStore != null) {
            bindI18nStore.on(bindI18n, boundReset);
          }
        }
        if (bindI18nStore) {
          if (bindI18nStore != null) {
            let store = bindI18nStore.store;
            store.on(bindI18nStore, boundReset);
          }
        }
        return () => {
          closure_1_13.current = false;
          if (bindI18nStore) {
            if (bindI18n != null) {
              const parts = bindI18n.split(" ");
              const item = parts.forEach((initialized) => bindI18nStore.off(initialized, closure_1_2));
            }
          }
          if (bindI18nStore) {
            if (bindI18nStore) {
              const parts1 = bindI18nStore.split(" ");
              const item1 = parts1.forEach((initialized) => {
                const store = bindI18nStore.store;
                return store.off(initialized, closure_1_2);
              });
            }
          }
        };
      }, items2);
      const items3 = [i18n, keyPrefix, tmp29];
      const effect1 = useSuspense.useEffect(() => {
        if (ref.current) {
          if (closure_6) {
            callback(getT);
          }
        }
      }, items3);
      const items4 = [tmp40, i18n, tmp29];
      items4.t = tmp40;
      items4.i18n = i18n;
      items4.ready = tmp29;
      if (tmp29) {
        return items4;
      } else {
        if (!tmp29) {
          if (!useSuspense) {
            return items4;
          }
        }
        const promise = new Promise((arg0) => {
          obj = arg0;
          obj = obj(i18n[4]);
          if (obj.lng) {
            const languages = obj.loadLanguages(i18n, obj.lng, items1, () => callback());
          } else {
            const namespaces = obj.loadNamespaces(i18n, items1, () => callback());
          }
        });
        throw promise;
      }
      defaultResult = merged.default(useSuspense.useState(getT), 2);
      const tmp30 = closure_6;
    } else {
      obj(i18n[4]).warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
      function notReadyT(arg0, defaultValue) {
        if (obj(i18n[4]).isString(defaultValue)) {
          return defaultValue;
        } else {
          if (obj(i18n[4]).isObject(defaultValue)) {
            if (obj(i18n[4]).isString(defaultValue.defaultValue)) {
              return defaultValue.defaultValue;
            }
          }
          const _Array = Array;
          let tmp6 = arg0;
          if (Array.isArray(arg0)) {
            tmp6 = arg0[arg0.length - 1];
          }
          return tmp6;
        }
      }
      const items5 = [notReadyT, {}, false];
      items5.t = notReadyT;
      items5.i18n = {};
      items5.ready = false;
      return items5;
    }
  }
  obj = {};
}
