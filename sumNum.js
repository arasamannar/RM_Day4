let array = [1, 2, 3, 4, 5]; // your array
let sum = array.reduce(function(a, b) {
    return a + b;
}, 0);
console.log(sum);