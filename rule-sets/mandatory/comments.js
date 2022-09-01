module.exports = {
  plugins: ["eslint-comments"],
  rules: {
    "eslint-comments/no-aggregating-enable": "warn",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/disable-enable-pair": "off",
    "eslint-comments/no-restricted-disable": "off",
    "eslint-comments/no-use": "off",
    "eslint-comments/require-description": "off",
  },
};
