let array = ['madam', 'hello', 'radar', 'world', 'malayalam', 'dad', 'racecar'];
let palindromes = array.filter(str => {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(palindromes);
