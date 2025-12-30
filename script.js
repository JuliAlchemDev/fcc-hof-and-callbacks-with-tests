const greeting = () => {
    return "Hello World!"
}

// Implement a Sorted Index Finder

const getIndexToIns  = (arr, num) => {
    arr.sort()
  return num
}

// Node / Jest export
if(typeof module !== "undefined" && module.exports){
    module.exports = {
        greeting,
        getIndexToIns};
}
