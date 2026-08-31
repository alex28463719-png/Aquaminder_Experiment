// Module ID: 162
// Function ID: 1741
// Name: _construct
// Dependencies: [163, 29]

// Module 162 (_construct)
import _setPrototypeOf from "_setPrototypeOf" /* 29 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 163 */;


export default function _construct(bind) {
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    return construct(...arguments);
  } else {
    const items = [null];
    const push = items.push;
    push.apply(items, arg1);
    bind = bind.bind;
    let applyResult1 = bind.apply(bind, items);
    const prototype = applyResult1.prototype;
    applyResult1 = new applyResult1();
    if (arg2) {
      _setPrototypeOf(applyResult1, arg2.prototype);
    }
    return applyResult1;
  }
};
