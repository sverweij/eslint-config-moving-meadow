module.exports = {
  plugins: ["mocha"],
  rules: {
    // mocha
    "mocha/handle-done-callback": "error", // - enforces handling of callbacks for async tests
    "mocha/max-top-level-suites": ["warn", { limit: 10 }], // limit the number of top-level suites in a single file
    "mocha/no-exclusive-tests": "error", // disallow exclusive mocha tests
    "mocha/no-global-tests": "error", // disallow global tests
    "mocha/no-hooks": "off", // disallow hooks
    "mocha/no-hooks-for-single-case": "warn", // disallow hooks for a single test or test suite
    "mocha/no-identical-title": "warn", // disallow identical titles
    "mocha/no-mocha-arrows": "off", // disallow arrow functions as arguments to mocha globals
    "mocha/no-nested-tests": "error", // disallow tests to be nested within other tests
    "mocha/no-pending-tests": "warn", // disallow pending/unimplemented mocha tests
    "mocha/no-return-and-callback": "error", // disallow returning in a test or hook function that uses a callback
    "mocha/no-sibling-hooks": "error", // disallow duplicate uses of a hook at the same level inside a describe
    "mocha/no-skipped-tests": "error", // disallow skipped mocha tests (fixable)
    "mocha/no-synchronous-tests": "off", // disallow synchronous tests
    "mocha/no-top-level-hooks": "error", // disallow top-level hooks
    "mocha/valid-suite-description": "error", // match suite descriptions against a pre-configured regular expression
    "mocha/valid-test-description": "off", // match test descriptions against a pre-configured regular expression
    "mocha/no-async-describe": "error",
    "mocha/no-return-from-async": "warn",
    "mocha/no-setup-in-describe": "off",
    "mocha/prefer-arrow-callback": "warn",
    "mocha/no-exports": "error"
  }
};
