// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let result = [];
    let tempArray = [];
    
    if(array.length < size){
        result.push(array);
        return result
    }

    for (let i = 0; i < array.length; i++){
        tempArray.push(array[i]);
        if(tempArray.length == size || i == array.length - 1){
            result.push(tempArray);
            tempArray = []
        }
    }

    return result;
}

module.exports = chunk;
