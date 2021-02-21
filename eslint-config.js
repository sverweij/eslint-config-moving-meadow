module.exports = {
  extends: ["./rules.js", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
  },
  env: {
    node: true,
    es6: true,
  },
};
