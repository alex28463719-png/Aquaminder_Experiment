// Module ID: 63
// Function ID: 933
// Name: env
// Dependencies: []

// Module 63 (env)
if (window.window === undefined) {
  window.window = window;
}
if (window.self === undefined) {
  window.self = window;
}
window.process = window.process || {};
let env = window.process.env;
if (!env) {
  env = {};
}
window.process.env = env;
if (!window.process.env.NODE_ENV) {
  window.process.env.NODE_ENV = "production";
}
