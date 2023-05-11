// Напишите функцию, которая принимает строку и возвращает 
// эту строку в перевёрнутом виде (например, “строка” — “акортс”).

const reverseString = str => str.split('').reverse().join('');

module.exports = reverseString;