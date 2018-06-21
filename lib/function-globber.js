const path = require("path");
const glob = require("glob");

function functionGlobber(baseDir) {
  const globStr = path.join(baseDir, "*/package.json");
  const functions = glob.sync(globStr);
  return functions.map(fnFolder =>
    fnFolder.substring(0, fnFolder.indexOf("package.json"))
  );
}

module.exports = functionGlobber;
