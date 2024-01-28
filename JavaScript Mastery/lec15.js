const prompt = require('prompt-sync')();

// let sen = "hello my name is Aryan"
// let word = "Aryan"

// let string = `The word ${word} ${sen.includes(word)? " is" : "is not"} in the Sentence given`
// console.log(string)

// console.log(sen.endsWith(word))

// const convertLower = (s) =>{
//     return s.toLowerCase()
// }
// let str = prompt("Enter the string: ")
// let str1 = convertLower(str)
// console.log(str1)

let str = "The amount is 1000"
console.log(typeof str)
let amt = Number.parseInt(str.slice(-4))
console.log(typeof amt)
console.log(amt)