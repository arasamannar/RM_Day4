let array = [1, 2, 2, 3, 4, 4, 5]; // input array
let uniqueArray = array.filter(function(item, index) {
    return array.indexOf(item) === index;
});
console.log(uniqueArray);
