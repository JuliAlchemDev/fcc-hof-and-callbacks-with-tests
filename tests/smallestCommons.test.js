const {smallestCommons} = require("../script");

// Test 1: You should have a smallestCommons function.
describe("smallestCommons", ()=> {
    test("should be a function", ()=> {
        expect(typeof smallestCommons).toBe("function");
    });
})
// Test 2: smallestCommons([1, 5]) should return a number.
// Test 3" smallestCommons([1, 5]) should return 60.
// Test 4: smallestCommons([5, 1]) should return 60.
// Test 5: smallestCommons([2, 10]) should return 2520.
// Test 6: smallestCommons([1, 13]) should return 360360.
// Test 7: smallestCommons([23, 18]) should return 6056820.