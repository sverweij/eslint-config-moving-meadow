module.exports = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/better-regex": "off", // already "security/detect-unsafe-regex"
    "unicorn/catch-error-name": ["error", { name: "pError" }],
    "unicorn/consistent-function-scoping": "error",
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
    "unicorn/import-index": "off",
    "unicorn/new-for-builtins": "off", // conflicts with security/detect-non-literal-regexp, apparently
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-fn-reference-in-iterator": "off", // personal preference to allow this
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-keyword-prefix": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    // "unicorn/prefer-replace-all": "error", // supported from unicorn 16 on
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/prefer-exponentiation-operator": "off", // => use core prefer-exponentiation-operator instead
    "unicorn/regex-shorthand": "off" // => renamed to unicorn/better-regex
  }
};
