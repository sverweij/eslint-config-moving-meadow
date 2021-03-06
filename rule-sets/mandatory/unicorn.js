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
    "unicorn/import-style": "off",
    "unicorn/new-for-builtins": "off", // conflicts with security/detect-non-literal-regexp, apparently
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-array-callback-reference": "off", // personal preference to allow this
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-keyword-prefix": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-object-as-default-parameter": "warn",
    "unicorn/no-process-exit": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-useless-undefined": "warn",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/no-null": "warn",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-string-replace-all": "off", // => replaceAll is a tc39 proposal. Not available in node <= 14
    "unicorn/prefer-set-has": "off", // => questionable performance improvement to use set.has over array.includes ()
    "unicorn/string-content": "off", // => needs some creativity to pass it patterns & replacements
    "unicorn/no-array-reduce": "off", // => IMO the reasoning behind this rule is flawed => off
    "unicorn/prefer-optional-catch-binding": "off", // => try {} catch {} doesn't work everywhere yet
    "unicorn/no-lonely-if": "warn",
    "unicorn/empty-brace-spaces": "off", // formatting => leave that to prettier
    "unicorn/prefer-date-now": "warn",
    "unicorn/prefer-ternary": "off",
    "unicorn/numeric-separators-style": "off", // formatting => leave that to prettier
    "unicorn/prefer-math-trunc": "warn",
    "unicorn/prefer-array-some": "warn",
    "unicorn/prefer-default-parameters": "off",
  },
};
