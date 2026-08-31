// Module ID: 645
// Function ID: 6844
// Dependencies: []

// Module 645
arg5.default = undefined;
let obj = { colors: { black: "#000000", white: "#ffffff", primary: "#0066B0", primary2: "#37A6D0", gray_secondary: "#CCCCCC", bottomtab: "#1B2E39", secondary: "#4B5F6D", text: "#2F2F2F", card: "#eef7ff" } };
const merged = Object.assign({}, obj.colors);
obj = { light: merged, dark: Object.assign({}, obj.colors) };
arg5.default = obj;
