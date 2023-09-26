let array1 = [1, 2, 3, 4, 5]; // input first array
let array2 = [6, 7, 8, 9, 10]; // input second array

let median = (function(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let middleIndex = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2 === 0) {
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
})(array1, array2);

console.log(median);
