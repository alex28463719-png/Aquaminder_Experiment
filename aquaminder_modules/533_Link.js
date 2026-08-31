// Module ID: 533
// Function ID: 5918
// Name: Link
// Dependencies: [1, 203, 119, 2, 534, 625]
// Exports: Link

// Module 533 (Link)
import getIteratorFn from "getIteratorFn" /* 119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 203 */;
import module_1 from "module_1" /* 1 */;
import closure_4 from "get registerCallableModule" /* 2 */;

let closure_2 = module_1(_objectWithoutProperties);
let closure_3 = _interopRequireWildcard(getIteratorFn);
let closure_5 = ["screen", "params", "action", "href", "style"];

export function Link(arg0) {
  ({ screen, params, action, href, style } = arg0);
  const defaultResult = closure_2.default(arg0, closure_5);
  require = defaultResult;
  const theme = require(linkProps[4]).useTheme();
  ({ colors, fonts } = theme);
  linkProps = require(linkProps[5]).useLinkProps({ screen, params, action, href });
  const onClick = function onPress(defaultPrevented) {
    if ("onPress" in defaultResult) {
      if (defaultResult.onPress != null) {
        defaultResult.onPress(defaultPrevented);
      }
    }
    if (!defaultPrevented.defaultPrevented) {
      linkProps.onPress(defaultPrevented);
    }
  };
  const Platform = RN.Platform;
  let obj = { style: items };
  obj = { color: colors.primary };
  items = [obj, fonts.regular, style];
  return <RN.Text {......Object.assign({}, linkProps, defaultResult, Platform.select({ web: { onClick }, default: { onPress: onClick } }), obj)} />;
}
