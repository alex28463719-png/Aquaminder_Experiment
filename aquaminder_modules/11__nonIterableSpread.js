// Module ID: 11
// Function ID: 208
// Name: _nonIterableSpread
// Dependencies: []

// Module 11 (_nonIterableSpread)

export default function _nonIterableSpread() {
  const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  throw typeError;
};
