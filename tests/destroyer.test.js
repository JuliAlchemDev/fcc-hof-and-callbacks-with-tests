const { destroyer } = require("../script");

describe("destroyer", () => {
  //    Test 1: You should have a destroyer function.
  test("should be a function", () => {
    expect(typeof destroyer).toBe("function");
  });
  // Test 2: destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
  test("should return new array without the provided values", () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
    .toEqual([1, 1])
  })
  // Test 3: destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
   test("should keep non-matching values in the array", () => {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
    .toEqual([1, 5, 1])
  })
  // Test 4: destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
   test("should remove multiple specified values and keep the rest", () => {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
    .toEqual([1])
  })
  // Test 5: destroyer([2, 3, 2, 3], 2, 3) should return [].
  // Test 6: destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
  // Test 7: destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ) should return [12, 92, 65].
});
