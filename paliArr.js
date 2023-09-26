let array = ['madam', 'hello', 'radar', 'world', 'racecar']; // array
let palindromes = array.filter(function(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(palindromes);
