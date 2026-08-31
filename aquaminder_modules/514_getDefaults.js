// Module ID: 514
// Function ID: 5794
// Name: getDefaults
// Dependencies: [515]
// Exports: getDefaults, setDefaults

// Module 514 (getDefaults)
import unescapeHtmlEntity from "unescapeHtmlEntity" /* 515 */;

const obj = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: true, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: true, unescape: unescapeHtmlEntity.unescape };

export function setDefaults(react) {
  if (arguments.length > 0) {
    if (arguments[0] !== undefined) {
      const first = arguments[0];
    }
    const _Object = Object;
    closure_0 = Object.assign({}, closure_0, {});
  }
}
export function getDefaults() {
  return obj;
}
