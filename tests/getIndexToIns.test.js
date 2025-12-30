const { getIndexToIns } = require("../script");

describe("getIndexToIns", () => {
  test("Should be a function", () => {
    expect(typeof getIndexToIns).toBe("function");
  });
});
