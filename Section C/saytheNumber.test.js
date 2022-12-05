const sayNumber = require("./saytheNumber");

test("adds 1 + 2 to equal 3", () => {
  expect(sayNumber(1)).toBe("one");
});
