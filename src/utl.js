const fs = require("node:fs");

function isDevelopmentDependency(pManifest, pDependencyName) {
  // eslint-disable-next-line security/detect-object-injection
  return Boolean((pManifest.devDependencies || {})[pDependencyName]);
}

function getManifest(pManifestFileName = "./package.json") {
  let lManifestFileText = "{}";
  let lReturnValue = {};

  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    lManifestFileText = fs.readFileSync(pManifestFileName, "utf8");
  } catch (pError) {
    process.stderr.write(
      `eslint-config-moving-meadow: couldn't read '${pManifestFileName}' to determine optional rules - assuming none are necessary\n`,
    );
  }

  try {
    lReturnValue = JSON.parse(lManifestFileText);
  } catch (pError) {
    process.stderr.write(
      `eslint-config-moving-meadow: using '${pManifestFileName}' to determine optional rules, but it doesn't seem to be valid json - assuming none are necessary\n`,
    );
  }

  return lReturnValue;
}

function conditionallyExtendRuleSet(
  pRuleSet,
  pOptionalRuleSetName,
  pManifest = getManifest(),
) {
  let lReturnValue = { ...pRuleSet };

  if (isDevelopmentDependency(pManifest, pOptionalRuleSetName)) {
    lReturnValue.extends = (pRuleSet.extends || []).concat(
      `./rule-sets/optional/${pOptionalRuleSetName}.js`,
    );
  }
  return lReturnValue;
}

module.exports = {
  isDevelopmentDependency,
  getManifest,
  conditionallyExtendRuleSet,
};
