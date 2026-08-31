// Module ID: 163
// Function ID: 1743
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 163 (_isNativeReflectConstruct)

export default function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    const _module = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _module.exports = function _isNativeReflectConstruct() {
      return closure_0;
    };
    const _exports = _module.exports;
    _module.exports.default = _exports;
    return _exports();
  } catch (err) {
  }
};
