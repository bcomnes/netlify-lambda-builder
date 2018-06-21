var cool = require("cool-ascii-faces");

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World, " + cool()
  });
};
