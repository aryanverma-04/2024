const prompt = require('prompt-sync')();

let obj1 = {
    aryan: 10,
    jatin: 8,
    saksham: 7,
    harsh: 9
}

// for(let i in obj1){
//     console.log(obj1[i])
// }

// for(let i = 0; i < Object.keys(obj1).length; i++){
//     console.log("The marks of "+ Object.keys(obj1)[i] + " are " + obj1[Object.keys(obj1)[i]])
// }

// let num = 10
// let val
// while(true){
//     val =  prompt("Enter value: ")
//     val = Number.parseInt(val)
//     if(val == num){
//         console.log("you got it")
//         break;
//     }
//     console.log("Incorrect Value...")
// }

const findMean = (a, b, c, d, e) =>{
    return (a+b+c+d+e)/5
}

let mean = findMean(10, 12, 14, 16, 19)
console.log(mean)
