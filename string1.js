let array = ['hello', 'world'];
let result = array.map(str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
console.log(result);
