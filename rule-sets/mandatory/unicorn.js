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
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "off", // autofix doesn't seem water tight + not sure why this would be better
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/no-null": "off",
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
    "unicorn/consistent-destructuring": "warn",
    "unicorn/no-array-for-each": "off", // understand the sentiment of misuse, but in some cases it's more elegant to use this
    "unicorn/no-array-method-this-argument": "warn",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-await-expression-member": "warn",
    "unicorn/no-document-cookie": "warn",
    "unicorn/no-empty-file": "warn",
    "unicorn/no-invalid-remove-event-listener": "warn",
    "unicorn/no-new-array": "warn",
    "unicorn/no-static-only-class": "warn",
    "unicorn/no-thenable": "warn",
    "unicorn/no-this-assignment": "warn",
    "unicorn/no-unreadable-iife": "warn",
    "unicorn/no-useless-fallback-in-spread": "warn",
    "unicorn/no-useless-length-check": "warn",
    "unicorn/no-useless-promise-resolve-reject": "warn",
    "unicorn/no-useless-spread": "warn",
    "unicorn/no-useless-switch-case": "warn",
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-index-of": "warn",
    "unicorn/prefer-at": "off", // only works as of node 16
    "unicorn/prefer-code-point": "warn",
    "unicorn/prefer-event-target": "off", // suggested over event emitter. The two aren't compatible (https://nodejs.org/api/events.html#eventtarget-and-event-api), though and the reasons stated (browser/ deno compatibility) are not interesting for us
    "unicorn/prefer-export-from": "warn",
    "unicorn/prefer-json-parse-buffer": "off", // sometimes makes sense. sometimes not.
    "unicorn/prefer-logical-operator-over-ternary": "off", // just no
    "unicorn/prefer-modern-math-apis": "warn",
    "unicorn/prefer-module": "off", // nice in unicorn & rainbow land, but not doable in the real world
    "unicorn/prefer-native-coercion-functions": "warn",
    "unicorn/prefer-node-protocol": "warn",
    "unicorn/prefer-object-from-entries": "warn",
    "unicorn/prefer-prototype-methods": "warn",
    "unicorn/prefer-regexp-test": "off", // not sure why this is a rule or preference. string.match looks fine to me?
    "unicorn/prefer-switch": "warn",
    "unicorn/prefer-top-level-await": "warn",
    "unicorn/relative-url-style": "warn",
    "unicorn/require-array-join-separator": "warn",
    "unicorn/require-number-to-fixed-digits-argument": "warn",
    "unicorn/require-post-message-target-origin": "warn",
    "unicorn/template-indent": "warn",
    "unicorn/text-encoding-identifier-case": "warn",
  },
};
