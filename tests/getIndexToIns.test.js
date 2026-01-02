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
  //   Test 3. Your function should use the sort method.
  test("function should use the sort method", () => {
    const arr = [3, 1, 2];

    const sortSpy = jest.spyOn(arr, "sort");

    getIndexToIns(arr, 2);

    expect(sortSpy).toHaveBeenCalled();
    sortSpy.mockRestore();
  });
  //   Test 4. Your function should make use of the findIndex method.
  test("function should use findIndex method", () => {
    const arr = [3, 1, 2];

    const findIndexSpy = jest.spyOn(arr, "findIndex");
    getIndexToIns(arr, 2);

    expect(findIndexSpy).toHaveBeenCalled();
    findIndexSpy.mockRestore();
  });
  // Test 5. getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
  test("getIndexToIns([10, 20, 30, 40, 50], 35) should return 3", () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
  });
  // Test 6. getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
  test("getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.", () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
  });
  // Test 7. getIndexToIns([40, 60], 50) should return 1 
  test("getIndexToIns([40, 60], 50) should return 1 ", () => {
    expect(getIndexToIns([40, 60], 50)).toBe(1)
  })
});
