console.log(combineAllArrays([10, 12], [5, 4])); // [10, 12, 5, 4]
console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6])); // [10, 12, 5, 4, 6, 6]

function combineAllArrays (...arrays) {
    return arrays.flat();
    
}