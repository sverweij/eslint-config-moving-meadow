const { conditionallyExtendRuleSet } = require("./src/utl");

let gRuleSet = {
  extends: [
    "./rule-sets/mandatory/core",
    "./rule-sets/mandatory/security",
    "./rule-sets/mandatory/node",
    "./rule-sets/mandatory/import",
    "./rule-sets/mandatory/unicorn",
    "./rule-sets/mandatory/budapestian",
  ],
};

module.exports = conditionallyExtendRuleSet(
  conditionallyExtendRuleSet(gRuleSet, "mocha"),
  "jest"
);
