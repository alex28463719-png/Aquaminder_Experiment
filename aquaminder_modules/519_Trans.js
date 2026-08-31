// Module ID: 519
// Function ID: 5808
// Name: Trans
// Dependencies: [1, 520, 203, 119, 513]
// Exports: Trans

// Module 519 (Trans)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import I18nContext from "I18nContext" /* 513 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "getIteratorFn" /* 119 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_4 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

export function Trans(tOptions) {
  tOptions = tOptions.tOptions;
  ({ children, count, parent, i18nKey, context } = tOptions);
  if (tOptions === undefined) {
    tOptions = {};
  }
  ({ ns, i18n, t } = tOptions);
  ({ values, defaults, components, shouldUnescape } = tOptions);
  const tmp2 = React.useContext(I18nContext.I18nContext) || {};
  if (!i18n) {
    i18n = tmp2.i18n;
  }
  if (!i18n) {
    i18n = I18nContext.getI18n();
  }
  let tmp5 = t;
  if (!t) {
    let bindResult;
    if (i18n != null) {
      const t2 = i18n.t;
      bindResult = t2.bind(i18n);
    }
    tmp5 = bindResult;
  }
  const obj = { children, count, parent, i18nKey, context, tOptions, values, defaults, components };
  if (!ns) {
    ns = undefined;
    if (tmp5 != null) {
      ns = tmp5.ns;
    }
  }
  if (!ns) {
    ns = tmp2.defaultNS;
  }
  if (!ns) {
    let defaultNS;
    if (i18n != null) {
      const options = i18n.options;
      if (options != null) {
        defaultNS = options.defaultNS;
      }
    }
    ns = defaultNS;
  }
  obj.ns = ns;
  obj.i18n = i18n;
  obj.t = t;
  obj.shouldUnescape = shouldUnescape;
  return require(520) /* Trans */.Trans(Object.assign(obj, closure_2.default(tOptions, closure_4)));
}
export const nodesToString = require(520) /* Trans */.nodesToString;
