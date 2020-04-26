/* eslint-disable max-lines-per-function */
const path = require("path");
const {
  getManifest,
  isDevelopmentDependency,
  conditionallyExtendRuleSet,
} = require("../src/utl");

describe("utl.getManifest", () => {
  it("returns an empty object when presented with a non-existant file", () => {
    expect(getManifest("")).toStrictEqual({});
  });
  it("returns an empty object when presented with an empty file", () => {
    expect(
      getManifest(path.join(__dirname, "mocks", "empty-file"))
    ).toStrictEqual({});
  });
  it("returns an empty object when presented with an empty json", () => {
    expect(
      getManifest(path.join(__dirname, "mocks", "empty.json"))
    ).toStrictEqual({});
  });
  it("returns the contents of the json file as an object when valid json", () => {
    expect(
      getManifest(path.join(__dirname, "mocks", "dev-dependencies.json"))
    ).toStrictEqual({ devDependencies: {} });
  });
  it("takes the current working directory's package.json as the default", () => {
    expect(getManifest().name).toBe("eslint-config-moving-meadow");
  });
});

describe("utl.isDevDependency", () => {
  it("returns false presented with a package name and no devDependencies in the manifest", () => {
    expect(isDevelopmentDependency({}, "does-not-exist")).toBe(false);
  });
  it("returns false when presented with a package name that doesn't occur in the devDependencies", () => {
    expect(
      isDevelopmentDependency(
        { devDependencies: { exists: "1.2.3" } },
        "does-not-exist"
      )
    ).toBe(false);
  });
  it("returns true when presented with a package name that occurs in the devDependencies", () => {
    expect(
      isDevelopmentDependency(
        { devDependencies: { exists: "1.2.3" } },
        "exists"
      )
    ).toBe(true);
  });
});

describe("utl.conditionallyExtendRuleSet", () => {
  it("empty rule set, with empty optional rule set and empty manifest => {}", () => {
    expect(conditionallyExtendRuleSet({}, "optional", {})).toStrictEqual({});
  });
  it("empty rule set, with empty optional rule set name that doesn't occur in the manifest => {}", () => {
    expect(
      conditionallyExtendRuleSet({}, "optional", {
        devDependencies: { exists: "1.2.3" },
      })
    ).toStrictEqual({});
  });
  it("empty rule set, with empty optional rule set name that occurs in the manifest => extend on the optional rule est", () => {
    expect(
      conditionallyExtendRuleSet({}, "optional", {
        devDependencies: { exists: "1.2.3", optional: "4.5.6" },
      })
    ).toStrictEqual({ extends: ["./rule-sets/optional/optional.js"] });
  });
  it("non-empty rule set, with an optional rule set name that occurs in the manifest => extend on the optional rule est", () => {
    expect(
      conditionallyExtendRuleSet(
        {
          extends: ["security"],
          plugins: ["security"],
          rules: { "security/be-smart": "error" },
        },
        "optional",
        {
          devDependencies: { exists: "1.2.3", optional: "4.5.6" },
        }
      )
    ).toStrictEqual({
      extends: ["security", "./rule-sets/optional/optional.js"],
      plugins: ["security"],
      rules: { "security/be-smart": "error" },
    });
  });
  it("non-empty rule set, with an optional rule set name that occurs in the default manifest => extend on the optional rule set", () => {
    expect(
      conditionallyExtendRuleSet(
        {
          extends: ["security"],
          plugins: ["security"],
          rules: { "security/be-smart": "error" },
        },
        "jest"
      )
    ).toStrictEqual({
      extends: ["security", "./rule-sets/optional/jest.js"],
      plugins: ["security"],
      rules: { "security/be-smart": "error" },
    });
  });
  it("non-empty rule set, with an optional rule set name that does not occur in the default manifest => rule set remains as-is", () => {
    expect(
      conditionallyExtendRuleSet(
        {
          extends: ["security"],
          plugins: ["security"],
          rules: { "security/be-smart": "error" },
        },
        "mocha"
      )
    ).toStrictEqual({
      extends: ["security"],
      plugins: ["security"],
      rules: { "security/be-smart": "error" },
    });
  });
});
