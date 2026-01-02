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

// Lab: Build a Symmetric Difference Function

// User Stories:

// Your function diffArray should return an array.
// Your function should take two arguments, both of which are arrays.
// Your function should make use of the filter method.
// Your function should return the symmetric difference of the two arrays.
// Your function should return an empty array if there is no symmetric difference.

// Node / Jest export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greeting,
    getIndexToIns,
  };
}


