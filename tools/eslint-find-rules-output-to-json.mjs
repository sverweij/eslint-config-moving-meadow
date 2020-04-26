import getStream from "get-stream";

function convert(pMissingRules) {
  return pMissingRules
    .replace(/unused rules/g, "")
    .split(/\s+/g)
    .filter((pRule) => pRule.length > 0)
    .reduce((pAll, pRule) => {
      pAll[pRule] = "warn";
      return pAll;
    }, {});
}

async function wrap(pStream) {
  return convert(await getStream(pStream));
}

wrap(process.stdin)
  .then((pOutput) => process.stdout.write(JSON.stringify(pOutput, null, 2)))
  .catch((pError) => {
    process.stderr.write(`${pError}\n`);
  })
  .finally(() => {});

// module.exports = pStream => wrap(HEADER_FILE, FOOTER_FILE, pStream);
