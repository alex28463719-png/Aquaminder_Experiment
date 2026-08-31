// Module ID: 526
// Function ID: 5883
// Name: useSSR
// Dependencies: [119, 513]
// Exports: useSSR

// Module 526 (useSSR)
import I18nContext from "I18nContext" /* 513 */;
import closure_2 from "getIteratorFn" /* 119 */;


export function useSSR(initialI18nStore, initialLanguage) {
  if (arguments.length > 2) {
    let i18n = {}.i18n;
    if (!i18n) {
      i18n = tmp5.i18n;
    }
    if (!i18n) {
      i18n = I18nContext.getI18n();
    }
    const options = i18n.options;
    if (initialI18nStore) {
      if (!i18n.initializedStoreOnce) {
        i18n.services.resourceStore.data = initialI18nStore;
        const _Object = Object;
        const values = Object.values(initialI18nStore);
        i18n.options.ns = values.reduce((arg0, arg1) => {
          closure_0 = arg0;
          const keys = Object.keys(arg1);
          const item = keys.forEach((arg0) => {
            if (arr.indexOf(arg0) < 0) {
              arr = arr.push(arg0);
            }
          });
          return arg0;
        }, i18n.options.ns);
        i18n.initializedStoreOnce = true;
        i18n.isInitialized = true;
      }
    }
    if (initialLanguage) {
      if (!i18n.initializedLanguageOnce) {
        i18n.changeLanguage(initialLanguage);
        i18n.initializedLanguageOnce = true;
      }
    }
  }
}
