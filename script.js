const greeting = () => {
    return "Hello World!"
}


// Node / Jest export
if(typeof module !== "undefined" && module.exports){
    module.exports = greeting;
}
