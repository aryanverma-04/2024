// // (function myfunc(){
// //     console.log("Hello, IIFE is Executed !!")
// // })()


// let a = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(456)
//       }, 4000)
//     })
// }

// (async()=>{
//     let b = await a()
//     console.log(b)
//     let e = await a()
//     console.log(e)
//     let d = await a()
//     console.log(d)
// })()



// let arr= [10, 20, 30, 40, 50, 60, 70, 80]
// let [a, b, , c , ...baki] = arr
// console.log(arr)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(baki)


// let obj = {
//   name: "aryan",
//   place: "kangra",
//   state: "himachal", 
//   addres:{
//     vpo: "Mohtli", 
//     teh: "Indora"
//   }
// }

// let {name, b1, ...rest} = obj

// console.log(name)
// console.log(b1) // The name has to be same
// console.log(rest)

const sum = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum;
} 

function threeSum(x, y){
  return x+y;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(arr))
console.log(threeSum(45, ...arr))

let obb = {...arr}
console.log(obb)