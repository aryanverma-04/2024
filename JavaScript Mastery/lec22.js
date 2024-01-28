const prompt = require('prompt-sync')();
let score = 100
let x = Number.parseInt(Math.floor((Math.random() * 100)+1))
let n
do{
    n = Number.parseInt(prompt("Guess a Number? "))
    if(n > x){
        console.log("The number is greater")
    }
    if(n < x){
        console.log("The number is Smaller")
    }
    score--;
}while(n != x)
console.log(`You got it, Your score is ${score}`)