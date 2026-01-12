const { sumPrimes } = require("../script");

describe("sumPrimes", () => {
  //    Test 1: You should have a sumPrimes function.
  test("should be a function", () => {
    expect(typeof sumPrimes).toBe("function");
  });
  // Test 2: sumPrimes(10) should return 17.
  test("should sum all prime numbers up to 10", ()=> {
    expect(sumPrimes(10)).toBe(17)
  })
  // Test 3: sumPrimes(5) should return 10.
  test("should return sums all primes up to the given number", ()=> {
    expect(sumPrimes(5)).toBe(10)
  })
  // Test 4: sumPrimes(2) should return 2.
  test("returns the input when it is the first prime", ()=> {
    expect(sumPrimes(2)).toBe(2)
  })
  // Test 5: sumPrimes(0) should return 0.
  test("returns 0 if the input is less than 2", ()=> {
    expect(sumPrimes(0)).toBe(0)
  })
  // Test 6: sumPrimes(977) should return 73156.
});
