const cats = require("cat-ascii-faces");

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World, " + cats()
  });
};
