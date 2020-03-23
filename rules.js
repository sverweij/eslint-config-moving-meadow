const { conditionallyExtendRuleSet } = require("./src/utl");

let lRuleSet = {
  extends: [
    "./rule-sets/mandatory/core",
    "./rule-sets/mandatory/security",
    "./rule-sets/mandatory/node",
    "./rule-sets/mandatory/import",
    "./rule-sets/mandatory/unicorn",
    "./rule-sets/mandatory/budapestian"
  ]
};

module.exports = conditionallyExtendRuleSet(
  conditionallyExtendRuleSet(lRuleSet, "mocha"),
  "jest"
);
