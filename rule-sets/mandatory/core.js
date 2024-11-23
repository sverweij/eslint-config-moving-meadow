module.exports = {
  rules: {
    // Possible errors
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "off",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-useless-backreference": "warn",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Best Practices
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    complexity: ["warn", 6],
    "consistent-return": "error",
    "default-case": "error",
    "default-case-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "off",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-warning-comments": ["off", { terms: ["todo", "fixme"] }],
    "no-with": "error",
    radix: "error",
    "vars-on-top": "error",
    yoda: "off",

    // Strict mode
    strict: ["error", "never"],

    // Variables
    "init-declarations": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used" }],
    "no-use-before-define": "error",

    // Node.js and CommonJS
    // these all moved to eslint-plugin-node

    // Stylistic Issues
    camelcase: "off",
    "consistent-this": "error",
    "func-names": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    // "id-blacklist": "off", // renamed to id-denylist
    "id-length": "off",
    "id-match": "off",
    "max-classes-per-file": ["warn", 1],
    "max-depth": ["error", 3],
    "max-lines": ["warn", 300],
    "max-lines-per-function": ["warn", 50],
    "max-nested-callbacks": ["error", 4],
    "max-params": ["error", 4],
    "max-statements": ["error", 21],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-plusplus": "error",
    "no-resctricted-syntax": "off",
    "no-ternary": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "sort-vars": "off",

    // ECMAScript 6
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-imports": "error",
    "no-restricted-exports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "sort-imports": "off", // we're using import/order which works better, but also conflicts with sort-imports

    // new rules in the waiting chamber
    "getter-return": "error",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-constant-binary-expression": "warn",
    "no-unused-private-class-members": "warn",
    "prefer-object-has-own": "off", // works as of node 16
    // "no-buffer-constructor": "warn", // deprecated, should bin in node/... but isn't yet
    "no-compare-neg-zero": "warn",
    "no-constructor-return": "warn",
    "no-dupe-else-if": "error",
    "no-global-assign": "warn",
    "no-import-assign": "warn",
    "no-loss-of-precision": "warn",
    "no-misleading-character-class": "warn",
    "no-prototype-builtins": "warn",
    "no-promise-executor-return": "warn",
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-setter-return": "warn",
    "no-template-curly-in-string": "warn",
    "no-unreachable-loop": "warn",
    "no-unsafe-negation": "error",
    "no-useless-catch": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "off", // maybe l8r
    "prefer-destructuring": "off", // maybe l8r
    "prefer-numeric-literals": "off", // doesn't work in es5
    "prefer-object-spread": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "warn",
    "require-atomic-updates": "warn",
    "require-await": "warn",
    "symbol-description": "error",
    "unicode-bom": ["error", "never"],
    "id-denylist": "off", // as we don't have any id's we want to deny
    "no-unsafe-optional-chaining": "warn",

    // stylistic stuff that will be handled by prettier anyway
  },
};
