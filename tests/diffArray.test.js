const { diffArray } = require("../script");

describe("diffArray", ()=> {
    // Test 1: You should have a function named diffArray.
    test("should be a function", ()=> {
        expect(typeof diffArray).toBe("function")
    })
    // Test 2: The diffArray function should use the filter method to filter out items 
    // that are present in both arrays.
    // Test 3: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    // ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
    // Test 4: diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    // ["andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"].
    // Test 5: diffArray should return an empty array when called with two identical arrays.
    // Test 6: diffArray(["pen", "book"], ["book", "pencil", "notebook"]) should return ["pen", "pencil", "notebook"].
    // Test 7: diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) should return ["car", "train", "plane"].
    // Test 8: diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]) should return ["banana", "grape"].
    // Test 9: diffArray([], ["apple", "banana"]) should return ["apple", "banana"].
    // Test 10: diffArray(["apple", "banana"], []) should return ["apple", "banana"].
    // Test 11: diffArray([], []) should return [].
  
})