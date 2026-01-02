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
  const result = arr.sort((a, b) => a - b).findIndex(index);

  return result === -1 ? arr.length : result;
};

// console.log(getIndexToIns([3, 10, 5], 11))
// Node / Jest export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greeting,
    getIndexToIns,
  };
}


