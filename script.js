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
const diffArray = (arr1, arr2) => {
  return [
    ...arr1.filter(word => !arr2.includes(word)), 
    ...arr2.filter(word => !arr1.includes(word))
  ]  
}
// Implement a Value Remover Function

// User Stories:

// You should have a destroyer function that accepts an array 
// and one or more additional arguments.
// The destroyer function should return a new array excluding all elements 
// from the first argument that match any of the subsequent arguments.
// The function must accept an indeterminate number of arguments.
const destroyer = (arr, ...args) => {
  return arr.filter(el => !args.includes(el))
}


// Node / Jest export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greeting,
    getIndexToIns,
    diffArray,
    destroyer
  };
}


