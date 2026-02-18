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
    ...arr1.filter((word) => !arr2.includes(word)),
    ...arr2.filter((word) => !arr1.includes(word)),
  ];
};
// Implement a Value Remover Function

// User Stories:

// You should have a destroyer function that accepts an array
// and one or more additional arguments.
// The destroyer function should return a new array excluding all elements
// from the first argument that match any of the subsequent arguments.
// The function must accept an indeterminate number of arguments.
const destroyer = (arr, ...args) => {
  return arr.filter((el) => !args.includes(el));
};

// Implement a Matching Object Filter

// User Stories:

// You should have a whatIsInAName function that accepts two arguments,
// an array of objects and a source object.
// The whatIsInAName function should return a new array containing only the objects from the collection
// that have all the key–value pairs present in the source object.
// If no objects match all the key–value pairs from the source, the function should return an empty array.

const whatIsInAName = (arr, src) => {
 return arr.filter(obj => 
   Object.keys(src).every(key => obj[key] === src[key])
  )
};

// Build a Prime Number Sum Calculator

// User Stories:

// You should have a sumPrimes function that accepts a number as an argument.
// The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
// If the input number is less than 2, the function should return 0.

const sumPrimes = (input) => {
  if(input < 2) return 0

  const isPrime = (num) => {
    if(num < 2) return false
    for(let i =2; i<num; i++){
      if(num % i === 0) return false
    }
    return true
  }
  const numbers = []
  for(let i = 2; i <=input; i++){
    numbers.push(i)
  }
  const primes = numbers.filter(isPrime)
  const sum = primes.reduce((total, num)=> total + num, 0)
    return sum
  }
// Implement a Range-Based LCM Calculator

// User Stories

// You should have a smallestCommons function that accepts an array of two numbers as an argument.
// The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
// The function should handle input where the two numbers are not in numerical order.

const smallestCommons = (arr) => {
  arr.sort((a, b)=> a - b);
  let min = arr[0];
  let max = arr[1];
  let numRange = [];
  while(min <= max){
    numRange.push(min);
    min++;
  }
  const mcd = (a, b) => {
    if(b === 0) return a;
    return mcd(b, a % b);
  }
  const mcm = (a, b) => {
    return (a * b) / mcd(a, b);
  }
  let result = numRange.reduce((acc, current) => {
    return mcm(acc, current);
  })
  return result;
}

// console.log(smallestCommons([5, 1]));
// Node / Jest export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    greeting,
    getIndexToIns,
    diffArray,
    destroyer,
    whatIsInAName,
    sumPrimes,
    smallestCommons
  };
}
