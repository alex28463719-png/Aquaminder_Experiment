// Module ID: 248
// Function ID: 2641
// Name: View
// Dependencies: [1, 203, 249, 250, 119, 251]

// Module 248 (View)
import getIteratorFn2 from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import getIteratorFn3 from "getIteratorFn" /* 249 */;
import Commands from "Commands" /* 250 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "jsxProd" /* 251 */;

let closure_0 = module_1(_objectWithoutProperties);
let closure_1 = module_1(getIteratorFn3);
let closure_2 = module_1(Commands);
const getIteratorFn = _interopRequireWildcard(getIteratorFn2);
let closure_5 = ["accessibilityElementsHidden", "accessibilityLabel", "accessibilityLabelledBy", "accessibilityLiveRegion", "accessibilityState", "accessibilityValue", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-selected", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "focusable", "id", "importantForAccessibility", "nativeID", "tabIndex"];
const forwardRefResult = getIteratorFn.forwardRef((importantForAccessibility, ref) => {
  ({ accessibilityElementsHidden, accessibilityLabel, accessibilityLabelledBy, accessibilityLiveRegion, accessibilityState, accessibilityValue, aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-hidden: tmp5, aria-label: tmp6, aria-labelledby: str, aria-live: tmp7, aria-selected: tmp8, aria-valuemax: tmp9, aria-valuemin: tmp10, aria-valuenow: tmp11, aria-valuetext: tmp12, focusable, id, nativeID, tabIndex } = importantForAccessibility);
  let parts;
  const context = getIteratorFn.useContext(mod.default);
  if (str != null) {
    parts = str.split(/\s*,\s*/g);
  }
  if (parts != null) {
    accessibilityLabelledBy = parts;
  }
  if (accessibilityState == null) {
    if (tmp == null) {
      if (tmp2 == null) {
        if (tmp3 == null) {
          if (accessibilityValue == null) {
            if (tmp9 == null) {
              if (tmp10 == null) {
                let obj = {};
                let str2 = "none";
                if (tmp7 !== "off") {
                  if (tmp7 != null) {
                    accessibilityLiveRegion = tmp7;
                  }
                  str2 = accessibilityLiveRegion;
                }
                obj.accessibilityLiveRegion = str2;
                if (tmp6 != null) {
                  accessibilityLabel = tmp6;
                }
                obj.accessibilityLabel = accessibilityLabel;
                if (tabIndex !== undefined) {
                  focusable = !tabIndex;
                }
                obj.focusable = focusable;
                obj.accessibilityState = obj;
                if (tmp5 != null) {
                  accessibilityElementsHidden = tmp5;
                }
                obj.accessibilityElementsHidden = accessibilityElementsHidden;
                obj.accessibilityLabelledBy = accessibilityLabelledBy;
                obj.accessibilityValue = tmp22;
                let str4 = "no-hide-descendants";
                if (tmp5 !== true) {
                  str4 = importantForAccessibility.importantForAccessibility;
                }
                obj.importantForAccessibility = str4;
                if (id != null) {
                  nativeID = id;
                }
                obj.nativeID = nativeID;
                obj.ref = ref;
                const jsxResult = <mod2.default {...Object.assign({}, defaultResult, obj)} />;
                if (context) {
                  obj = { value: false, children: jsxResult };
                  return React.jsx(mod.default.Provider, { value: false, children: jsxResult });
                } else {
                  return jsxResult;
                }
              }
            }
          }
          const obj1 = {};
          if (tmp9 == null) {
            let max;
            if (accessibilityValue != null) {
              max = accessibilityValue.max;
            }
          }
          obj1.max = tmp9;
          if (tmp10 == null) {
            let min;
            if (accessibilityValue != null) {
              min = accessibilityValue.min;
            }
          }
          obj1.min = tmp10;
          if (tmp11 == null) {
            let now;
            if (accessibilityValue != null) {
              now = accessibilityValue.now;
            }
          }
          obj1.now = tmp11;
          if (tmp12 == null) {
            let text;
            if (accessibilityValue != null) {
              text = accessibilityValue.text;
            }
          }
          obj1.text = tmp12;
          tmp22 = obj1;
        }
      }
    }
  }
  obj = {};
  if (tmp == null) {
    let busy;
    if (accessibilityState != null) {
      busy = accessibilityState.busy;
    }
  }
  obj.busy = tmp;
  if (tmp2 == null) {
    let checked;
    if (accessibilityState != null) {
      checked = accessibilityState.checked;
    }
  }
  obj.checked = tmp2;
  if (tmp3 == null) {
    let disabled;
    if (accessibilityState != null) {
      disabled = accessibilityState.disabled;
    }
  }
  obj.disabled = tmp3;
  if (tmp4 == null) {
    let expanded;
    if (accessibilityState != null) {
      expanded = accessibilityState.expanded;
    }
  }
  obj.expanded = tmp4;
  if (tmp8 == null) {
    let selected;
    if (accessibilityState != null) {
      selected = accessibilityState.selected;
    }
  }
  obj.selected = tmp8;
});
forwardRefResult.displayName = "View";

export default forwardRefResult;
