const greeting = () => {
  return "Hello World!";
};

// Implement a Sorted Index Finder

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

// console.log(getIndexToIns([3, 10, 5], 11));
