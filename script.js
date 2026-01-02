const greeting = () => {
  return "Hello World!";
};

// Lab: Implement a Sorted Index Finder

// User Stories:

// 1. You should have a getIndexToIns function that takes two arguments: 
// an array and a number.
// 2. You should use the sort method to sort the array in ascending order.
// 3. Your getIndexToIns function should return the lowest index 
// at which the number should be inserted by using the findIndex method.
// 4. Your getIndexToIns function should always return a number.

const getIndexToIns = (arr, num) => {
  const index = (el) => el >= num;
  let result = arr.sort((a, b) => a - b).findIndex(index);
  if(result === -1) {
    arr.push(num)
    return arr.sort((a, b) => a - b).findIndex(index);
  }
  return result
};


// Node / Jest export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greeting,
    getIndexToIns,
  };
}


