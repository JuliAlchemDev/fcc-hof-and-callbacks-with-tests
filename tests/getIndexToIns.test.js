const { getIndexToIns } = require("../script");

describe("getIndexToIns", () => {
  //  Test 1: You should have a getIndexToIns function.
  test("should be a function", () => {
    expect(typeof getIndexToIns).toBe("function");
  });
  //   Test 2:  getIndexToIns should always return a number.
  test("should always return a number", () => {
    expect(typeof getIndexToIns([], 5)).toBe("number");
  });
});
