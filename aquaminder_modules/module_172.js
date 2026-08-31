// Module ID: 172
// Function ID: 1833
// Dependencies: [65, 173, 193, 199, 201, 183, 211, 212, 217, 219]

// Module 172
import Headers from "Headers" /* 199 */;
import validateBaseUrl from "validateBaseUrl" /* 217 */;
import _callSuper from "_callSuper" /* 219 */;
import polyfillObjectProperty from "polyfillObjectProperty" /* 65 */;

polyfillObjectProperty.polyfillGlobal("XMLHttpRequest", () => require(173) /* _superPropGet */.default);
polyfillObjectProperty.polyfillGlobal("FormData", () => require(193) /* encodeFilename */.default);
polyfillObjectProperty.polyfillGlobal("fetch", () => Headers.fetch);
polyfillObjectProperty.polyfillGlobal("Headers", () => Headers.Headers);
polyfillObjectProperty.polyfillGlobal("Request", () => Headers.Request);
polyfillObjectProperty.polyfillGlobal("Response", () => Headers.Response);
polyfillObjectProperty.polyfillGlobal("WebSocket", () => require(201) /* _callSuper */.default);
polyfillObjectProperty.polyfillGlobal("Blob", () => require(183) /* Blob */.default);
polyfillObjectProperty.polyfillGlobal("File", () => require(211) /* _callSuper */.default);
polyfillObjectProperty.polyfillGlobal("FileReader", () => require(212) /* _callSuper */.default);
polyfillObjectProperty.polyfillGlobal("URL", () => validateBaseUrl.URL);
polyfillObjectProperty.polyfillGlobal("URLSearchParams", () => validateBaseUrl.URLSearchParams);
polyfillObjectProperty.polyfillGlobal("AbortController", () => _callSuper.AbortController);
polyfillObjectProperty.polyfillGlobal("AbortSignal", () => _callSuper.AbortSignal);
