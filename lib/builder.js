const cp = require("child_process");

function buildFunction(functionDir, cb) {
  cp.exec("npm i", { cwd: functionDir }, cb);
}

module.exports = buildFunction;
