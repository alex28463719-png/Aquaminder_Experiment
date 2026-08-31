// Module ID: 513
// Function ID: 5775
// Name: I18nContext
// Dependencies: [1, 514, 516, 517, 363, 12, 13, 119]
// Exports: composeInitialProps

// Module 513 (I18nContext)
import _classCallCheck from "_classCallCheck" /* 12 */;
import _defineProperties from "_defineProperties" /* 13 */;
import getIteratorFn from "getIteratorFn" /* 119 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 363 */;
import module_1 from "module_1" /* 1 */;

let closure_2 = module_1(asyncGeneratorStep);
let closure_3 = module_1(_classCallCheck);
let closure_4 = module_1(_defineProperties);
function getInitialProps(arg0) {
  let usedNamespaces;
  i18n = i18n(usedNamespaces[2]).getI18n();
  const reportNamespaces = i18n.reportNamespaces;
  if (reportNamespaces != null) {
    usedNamespaces = reportNamespaces.getUsedNamespaces();
  }
  if (usedNamespaces == null) {
    usedNamespaces = [];
  }
  let obj = {};
  obj = {};
  const languages = i18n.languages;
  let item = languages.forEach((arg0) => {
    closure_0 = arg0;
    obj[arg0] = {};
    const item = usedNamespaces.forEach((arg0) => {
      closure_1_2[resourceBundle][arg0] = resourceBundle.getResourceBundle(resourceBundle, arg0) || {};
    });
  });
  obj.initialI18nStore = obj;
  obj.initialLanguage = i18n.language;
  return obj;
}

export const getDefaults = require(517) /* getDefaults */.initReactI18next;
export const getI18n = require(517) /* getDefaults */.initReactI18next;
export const initReactI18next = require(517) /* getDefaults */.initReactI18next;
export const setDefaults = require(514) /* getDefaults */.setDefaults;
export const setI18n = require(516) /* setI18n */.setI18n;
export const I18nContext = getIteratorFn.createContext();
export const ReportNamespaces = (() => {
  class ReportNamespaces {
    constructor() {
      defaultResult = closure_1_3.default(this, ReportNamespaces);
      this.usedNamespaces = {};
      return;
    }
  }
  let obj = {
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(items1) {
      const self = this;
      const item = items1.forEach((arg0) => {
        if (!self.usedNamespaces[arg0]) {
          self.usedNamespaces[arg0] = true;
        }
      });
    }
  };
  const items = [obj, ];
  obj = {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  };
  items[1] = obj;
  return closure_4.default(ReportNamespaces, items);
})();
export function composeInitialProps(WrappedComponent) {
  closure_0 = WrappedComponent;
  return (() => {
    closure_0 = closure_1_2.default(async (arg0) => {
      if (initialProps.getInitialProps != null) {
        initialProps = initialProps.getInitialProps(arg0);
      }
      const tmp4 = yield initialProps;
      let obj = tmp4;
      if (tmp4 == null) {
        obj = {};
      }
      return Object.assign({}, obj, closure_3_5());
    });
    return function(arg0) {
      return callback(...arguments);
    };
  })();
}
export { getInitialProps };
