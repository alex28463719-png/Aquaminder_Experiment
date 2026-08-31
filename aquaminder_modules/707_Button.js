// Module ID: 707
// Function ID: 7947
// Name: Button
// Dependencies: [1, 708, 710, 711]

// Module 707 (Button)
import _mod710 from "module_710" /* 710 */;
import _mod711 from "module_711" /* 711 */;
import module_1 from "module_1" /* 1 */;

const module_710 = module_1(_mod710);
const module_711 = module_1(_mod711);
const fA5iconSet = require("FA5Style").createFA5iconSet(module_710.default, module_711.default, false);
({ Button: exports.Button, getImageSource: exports.getImageSource, getImageSourceSync: exports.getImageSourceSync } = fA5iconSet);

export const FA5Style = require(708) /* FA5Style */.FA5Style;
export default fA5iconSet;
