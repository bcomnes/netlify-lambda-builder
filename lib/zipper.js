const archiver = require("archiver");
const fs = require("fs");
const path = require("path");
const pump = require("pump");

function zipper(functionDir, outputDir, cb) {
  const functionName = path.basename(functionDir);
  const output = fs.createWriteStream(
    path.join(outputDir, functionName + ".zip")
  );
  const archive = archiver("zip");
  archive.on("warning", function(err) {
    console.warn(err);
  });
  pump(archive, output, cb);

  archive.directory(functionDir, functionName);
  archive.finalize();
}

module.exports = zipper;
