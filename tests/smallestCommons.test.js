const {smallestCommons} = require("../script");


describe("smallestCommons", ()=> {
    // Test 1: You should have a smallestCommons function.
    test("should be a function", ()=> {
        expect(typeof smallestCommons).toBe("function");
    });
// Test 2: smallestCommons([1, 5]) should return a number.
    test("should return a number", ()=> {
        expect(typeof smallestCommons([1,5])).toBe("number");
    });
// Test 3" smallestCommons([1, 5]) should return 60.
    test("should return 60", ()=> {
        expect(smallestCommons([1,5])).toBe(60);
    });
// Test 4: smallestCommons([5, 1]) should return 60.
 test("should handle input where the two numbers are not in numerical order", ()=> {
        expect(smallestCommons([5,1])).toBe(60);
    });
// Test 5: smallestCommons([2, 10]) should return 2520.
 test("should return 2520 for [2,10] case", ()=> {
        expect(smallestCommons([2,10])).toBe(2520);
    });
// Test 6: smallestCommons([1, 13]) should return 360360.
test("should return 360360 for [1, 13] case", ()=> {
        expect(smallestCommons([1,13])).toBe(360360);
    });
// Test 7: smallestCommons([23, 18]) should return 6056820.
test("should return 6056820 for [23, 18] case", ()=> {
        expect(smallestCommons([23, 18])).toBe(6056820);
    });
})