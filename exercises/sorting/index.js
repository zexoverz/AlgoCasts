// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    
    return arr;
}

function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }
        if(i !== indexOfMin){
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if(arr.length == 1){
        return arr;
    }

    const midPoint = Math.floor(arr.length / 2);
    let left = arr.slice(0, midPoint);
    let right = arr.slice(midPoint);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while(left.length !== 0 && right.length !== 0){
        if(left[0] <= right[0]){
            result.push(left.shift());
        }else {
            result.push(right.shift());        
        }
    }

    result.push(...left, ...right);

    return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
