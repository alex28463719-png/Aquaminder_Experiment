// Module ID: 515
// Function ID: 5797
// Name: unescapeHtmlEntity
// Dependencies: []

// Module 515 (unescapeHtmlEntity)
arg5.unescape = undefined;
const re0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
let closure_1 = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": "\"", "&#34;": "\"", "&nbsp;": " ", "&#160;": " ", "&copy;": "\u00A9", "&#169;": "\u00A9", "&reg;": "\u00AE", "&#174;": "\u00AE", "&hellip;": "\u2026", "&#8230;": "\u2026", "&#x2F;": "/", "&#47;": "/" };
function unescapeHtmlEntity(arg0) {
  return table[arg0];
}
arg5.unescape = function unescape(interpolator3) {
  return interpolator3.replace(closure_0, unescapeHtmlEntity);
};
