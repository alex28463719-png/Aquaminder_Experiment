// Module ID: 518
// Function ID: 5805
// Name: I18nextProvider
// Dependencies: [119, 513]
// Exports: I18nextProvider

// Module 518 (I18nextProvider)
import closure_2 from "getIteratorFn" /* 119 */;


export function I18nextProvider(i18n) {
  i18n = i18n.i18n;
  const defaultNS = i18n.defaultNS;
  const items = [i18n, defaultNS];
  const value = React.useMemo(() => ({ i18n, defaultNS }), items);
  return React.createElement(i18n(defaultNS[1]).I18nContext.Provider, { value }, i18n.children);
}
