// Module ID: 528
// Function ID: 5891
// Name: withTranslation
// Dependencies: [1, 38, 203, 119, 525, 523]
// Exports: withTranslation

// Module 528 (withTranslation)
import _slicedToArray from "_slicedToArray" /* 38 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "getIteratorFn" /* 119 */;

let closure_2 = module_1(_slicedToArray);
let closure_3 = module_1(_objectWithoutProperties);
let closure_5 = ["forwardedRef"];

export function withTranslation(arg0) {
  closure_0 = arg0;
  if (arguments.length > 1) {
    closure_1 = {};
    return function Extend(WrappedComponent) {
      const callback = WrappedComponent;
      class I18nextWithTranslation {
        constructor(arg0) {
          forwardedRef = WrappedComponent.forwardedRef;
          defaultResult = closure_2_3.default(WrappedComponent, closure_2_5);
          obj = { keyPrefix: I18nextWithTranslation.keyPrefix };
          defaultResult1 = closure_2_2.default(closure_0(closure_1[4]).useTranslation(closure_0, Object.assign({}, defaultResult, obj)), 3);
          obj = { t: defaultResult1[0], i18n: defaultResult1[1], tReady: defaultResult1[2] };
          merged = Object.assign({}, defaultResult, obj);
          if (I18nextWithTranslation.withRef) {
            if (forwardedRef) {
              merged.ref = forwardedRef;
            }
            tmp4 = closure_2_4;
            tmp5 = closure_0;
            return closure_2_4.createElement(closure_0, merged);
          }
          if (!I18nextWithTranslation.withRef) {
            if (forwardedRef) {
              merged.forwardedRef = forwardedRef;
            }
          }
          return;
        }
      }
      I18nextWithTranslation.displayName = "withI18nextTranslation(" + callback(table[5]).getDisplayName(WrappedComponent) + ")";
      I18nextWithTranslation.WrappedComponent = WrappedComponent;
      if (I18nextWithTranslation.withRef) {
        I18nextWithTranslation = closure_1_4.forwardRef(function forwardRef(arg0) {
          return <I18nextWithTranslation {......Object.assign({}, arg0, { forwardedRef: arg1 })} />;
        });
      }
      return I18nextWithTranslation;
    };
  }
}
