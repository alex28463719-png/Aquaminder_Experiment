// Module ID: 890
// Function ID: 9650
// Name: getDefaultSidebarWidth
// Dependencies: []

// Module 890 (getDefaultSidebarWidth)
arg5.getDefaultSidebarWidth = function getDefaultSidebarWidth(width) {
  width = width.width;
  return width - 56 <= 360 ? width - 56 : 360;
};
