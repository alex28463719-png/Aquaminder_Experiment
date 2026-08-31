// Module ID: 26
// Function ID: 288
// Name: _get
// Dependencies: [27]

// Module 26 (_get)
function _get() {
  if ("undefined" !== typeof Reflect) {
    const _Reflect = Reflect;
    if (Reflect.get) {
      const _Reflect2 = Reflect;
      let fn = get.bind();
    }
    tmp.exports = fn;
    return fn(...arguments);
  }
  fn = (closure_1) => {
    let tmp = arg2;
    const tmp2 = closure_1_0(closure_1_2[0])(closure_1, arg1);
    if (tmp2) {
      const _Object = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp2, arg1);
      if (iter.get) {
        const get = iter.get;
        if (arguments.length < 3) {
          tmp = closure_1;
        }
        let callResult = get.call(tmp);
      } else {
        callResult = iter.value;
      }
      return callResult;
    }
  };
}

export default _get;
