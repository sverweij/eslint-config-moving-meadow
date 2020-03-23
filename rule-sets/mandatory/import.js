module.exports = {
  plugins: ["import"],
  rules: {
    // imports
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-unused-modules": "error",

    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",

    "import/unambiguous": "off",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",

    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    "import/no-namespace": "error",
    "import/extensions": "off",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/prefer-default-export": "error",
    "import/max-dependencies": ["error", { max: 20 }],
    "import/no-unassigned-import": "error",
    "import/no-named-default": "error",
    "import/no-named-export": "error",
    "import/no-anonymous-default-export": "error",
    "import/group-exports": "off",
    "dynamic-import-chunkname": "off"
  }
};
