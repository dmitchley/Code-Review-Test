const sayNumber = require("./saytheNumber");

test("Interger will be changed to word number", () => {
  expect(sayNumber(1)).toBe("one");
});
