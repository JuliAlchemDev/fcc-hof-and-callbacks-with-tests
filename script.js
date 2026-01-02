const greeting = () => {
    return "Hello World!"
}

// Implement a Sorted Index Finder

const getIndexToIns  = (arr, num) => {
   const index = el => el >= num
    
  return arr.sort().findIndex(index)
}

// Node / Jest export
if(typeof module !== "undefined" && module.exports){
    module.exports = {
        greeting,
        getIndexToIns};
}

