module.exports = {
  plugins: ["node"],
  rules: {
    // node
    "node/exports-style": ["error", "module.exports"],
    "node/no-callback-literal": "error",
    "node/no-exports-assign": "error",
    "node/file-extension-in-import": ["error", "always"],
    "node/no-deprecated-api": "error",
    "node/no-extraneous-require": "error",
    "node/no-missing-require": "error",
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-syntax": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/node-builtins": "error",
    "node/process-exit-as-throw": "error",
    "node/shebang": "error"
  }
};
