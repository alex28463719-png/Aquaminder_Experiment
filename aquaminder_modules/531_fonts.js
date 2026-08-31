// Module ID: 531
// Function ID: 5916
// Name: fonts
// Dependencies: [2]

// Module 531 (fonts)
import get_registerCallableModule from "get registerCallableModule" /* 2 */;

const Platform = get_registerCallableModule.Platform;

export const fonts = Platform.select({ web: { regular: { fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", fontWeight: "400" }, medium: { fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", fontWeight: "500" }, bold: { fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", fontWeight: "600" }, heavy: { fontFamily: "system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"", fontWeight: "700" } }, ios: { regular: { fontFamily: "System", fontWeight: "400" }, medium: { fontFamily: "System", fontWeight: "500" }, bold: { fontFamily: "System", fontWeight: "600" }, heavy: { fontFamily: "System", fontWeight: "700" } }, default: { regular: { fontFamily: "sans-serif", fontWeight: "normal" }, medium: { fontFamily: "sans-serif-medium", fontWeight: "normal" }, bold: { fontFamily: "sans-serif", fontWeight: "600" }, heavy: { fontFamily: "sans-serif", fontWeight: "700" } } });
