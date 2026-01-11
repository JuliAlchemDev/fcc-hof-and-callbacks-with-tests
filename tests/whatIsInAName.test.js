const { whatIsInAName } = require("../script");

describe("whatIsInAName", () => {
  //     Test 1: You should have a whatIsInAName function.
  test("should be a function", () => {
    expect(typeof whatIsInAName).toBe("function");
  });
  // Test 2: whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
  // should return [{ first: "Tybalt", last: "Capulet" }].
  test("should return array that match the source properties", () => {
    expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
    .toEqual([{ first: "Tybalt", last: "Capulet" }])
  })
  // Test 3: whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) 
  // should return [{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}].
  test("should return an array including all objects that match the source properties", () => {
    expect(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
    .toEqual([{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}])
  })
  // Test 4: whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
  // should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}].
  test("should match objects that contain all source properties even with extra properties", ()=> {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
    .toEqual([{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}])
  })
  // Test 5: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
  // should return [{"apple": 1, "bat": 2, "cookie": 2}].
   test("should return objects that match all source keys, including extra object properties", ()=> {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
    .toEqual([{"apple": 1, "bat": 2, "cookie": 2}])
  })
  // Test 6: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }) 
  // should return [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]
  // Test 7: whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) 
  // should return [].
  // Test 8: whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) 
  // should return [].
});
