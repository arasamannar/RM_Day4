let array = [1, 2, 3, 4, 5]; // input array
let k = 2; // number of rotations

let rotate = (function(arr, rotations) {
    for(let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
});

console.log(rotate(array, k));
