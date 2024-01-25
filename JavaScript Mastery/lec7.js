const prompt = require('prompt-sync')();

const age = prompt("Enter your age?")
if(age < 0){
    console.log("Invalid age")
}
else if(age <=10 ){
    console.log("Go and Play GTA V")
}
else if(age < 18 && age > 10){
    console.log("You can drive electric upto 50cc")
}
else{
    console.log("You can drive")
}