// Module ID: 527
// Function ID: 5887
// Name: withSSR
// Dependencies: [1, 203, 119, 526, 513, 523]
// Exports: withSSR

// Module 527 (withSSR)
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_3 from "getIteratorFn" /* 119 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_4 = ["initialI18nStore", "initialLanguage"];

export function withSSR() {
  return function Extend(WrappedComponent) {
    closure_0 = WrappedComponent;
    class I18nextWithSSR {
      constructor(arg0) {
        ({ initialI18nStore, initialLanguage } = WrappedComponent);
        defaultResult = closure_2_2.default(WrappedComponent, closure_2_4);
        sSR = closure_2_0(closure_2_1[3]).useSSR(initialI18nStore, initialLanguage);
        return closure_2_3.createElement(closure_0, Object.assign({}, defaultResult));
      }
    }
    I18nextWithSSR.getInitialProps = closure_1_0(closure_1_1[4]).composeInitialProps(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(" + closure_1_0(closure_1_1[5]).getDisplayName(WrappedComponent) + ")";
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}
