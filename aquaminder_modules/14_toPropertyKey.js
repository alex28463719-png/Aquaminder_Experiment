// Module ID: 14
// Function ID: 215
// Name: toPropertyKey
// Dependencies: [15, 16]

// Module 14 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 15 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
