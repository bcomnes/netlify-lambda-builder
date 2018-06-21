const mkdirp = require("mkdirp");
const parallelLimit = require("run-parallel-limit");
const series = require("run-series");

const functionGlobber = require("./lib/function-globber");
const builder = require("./lib/builder");
const zipper = require("./lib/zipper");

function buildFunctions(src, dest, cb) {
  const fns = functionGlobber(src);

  if (fns.length === 0) return cb(null);

  const jobs = fns.map(fnPath => {
    return cb => {
      series([cb => builder(fnPath, cb), cb => zipper(fnPath, dest, cb)], cb);
    };
  });

  mkdirp(dest, runJobs);

  function runJobs(err) {
    if (err) return cb(err);

    parallelLimit(jobs, 5, cb);
  }
}

exports.buildFunctions = buildFunctions;
