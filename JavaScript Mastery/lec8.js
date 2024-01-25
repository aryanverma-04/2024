const prompt = require('prompt-sync')();

// const age = prompt("enter your age? ")
// if(age >= 10 && age <= 20){
//     console.log("You can play the game")
// }
// else{
//     console.log("you are not eligible")
// }

// const expr = prompt("Enter the fruit name: ")
// switch(expr){
//     case 'mango': 
//         console.log("you can eat mangoes");
//         // break;
//     case 'oranges':
//         console.log("you cannot eat oranges its too cold outside...")
//     default:
//         console.log("you got it yeah....")
// }

// let age = prompt("Enter your age: ")
// age = Number.parseInt(age)
// switch(age){
//     case 1:
//         console.log("your age is 1");
//     case 2:
//         console.log("your age is 2");
//         break
//     case 3:
//         console.log("your age is 3");
//     case 4:
//         console.log("your age is 4");
//     case 5:
//         console.log("your age is 5");
//     default:
//         console.log("you are not eligible");
// }

const age = prompt("Enter your age? ")
let a = age > 18 ? "you are eligible" : "you are not eligible"
console.log(a)