// Module ID: 94
// Function ID: 1252
// Name: processAspectRatio
// Dependencies: []

// Module 94 (processAspectRatio)
arg5.default = function processAspectRatio(str) {
  if (typeof str === "number") {
    return str;
  } else if (tmp === "string") {
    const parts = str.split("/");
    const mapped = parts.map((str) => str.trim());
    if (!mapped.includes("auto")) {
      if (!mapped.some((arg0) => Number.isNaN(Number(arg0)))) {
        if (mapped.length === 2) {
          const _Number2 = Number;
          const _Number3 = Number;
          return Number(mapped[0]) / Number(mapped[1]);
        } else {
          const _Number = Number;
          return Number(mapped[0]);
        }
      }
    }
  }
};
