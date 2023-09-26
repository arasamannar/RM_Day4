let array = ['hello', 'world']; // your string array
let result = array.map(function(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
});
console.log(result);