module.exports = {
  extends: ["plugin:jest/all"],
  rules: {
    "jest/prefer-expect-assertions": "off",

    // this rule is badly written and also fires outside of jest contexts
    // better left disabled
    "jest/require-hook": "off",
    /* deprecated, but still appear in jest/all ...
    "jest/no-expect-resolves": "off",
    "jest/no-truthy-falsy": "off",
    "jest/no-try-expect": "off",
    "jest/prefer-inline-snapshots": "off",
    */
  },
};
