const prompt = require('prompt-sync')();

// for(let i = 0; i < 5; i++){
//     console.log("Jai Shri Ram")
// }

// let obj = {
    //     name: "aryan",
    // for(let i = 0; i < 5; i++){
    //     console.log("Jai Shri Ram")
    // }
//     age: 19, 
//     god: "hanuman"
// }
// console.log(obj)

// const obj1 = {
//     name: "aryan",
//     age: 19, 
//     god: "hanuman"
// }
// console.log(obj1)

// let val = 1;
// for(let i = 1; i < 10; i++){
//     console.log(i*val);
//     val++
// }

// let i = 0;
// while(i <= 10){
//     console.log(i++)
// }
// console.log(i)



// let objNew = {
//     name: "aryan", 
//     fav_player: "virat", 
//     god: "hanuman",
//     jersery_no: 18
// }
// for(let a in objNew){
//     console.log("The object is " + a + " and the value is "+ objNew[a])
// }

// let string = "hello world"
// for(let a of string){
//     console.log(a)
// }


function findSquare(a){
    return a*a;
}
findSquare(19);
console.log(findSquare(10))

const findSquare2 = (n) =>{
    let a = n * n;
    console.log("The square of "+ n + " is " +a)
    return a;
}

let bt = findSquare2(10);

console.log(bt)