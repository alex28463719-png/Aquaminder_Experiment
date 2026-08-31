// Module ID: 97
// Function ID: 1268
// Name: processFontVariant
// Dependencies: []

// Module 97 (processFontVariant)
arg5.default = function processFontVariant(str) {
  if (Array.isArray(str)) {
    return str;
  } else {
    const parts = str.split(" ");
    const _Boolean = Boolean;
    return parts.filter(Boolean);
  }
};
