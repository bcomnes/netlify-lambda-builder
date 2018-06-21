const functionGlobber = require("./function-globber");

test("identify function", () => {
  const glob = functionGlobber("functions");
  expect(glob).toEqual(["functions/function-a/", "functions/function-b/"]);
});
