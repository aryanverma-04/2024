const prompt = require('prompt-sync')();
// let n = prompt("Enter the size of your array? ")
// let arr = []
// for(let i = 0; i < n; i++){
//     let temp = prompt(`Enter element no. ${i+1}: `)
//     arr[i] = temp
// }
// console.log(arr)

// let arr = []
// for(let i = 0;; i++){
//     let temp = prompt(`Enter element no. ${i+1}: `)
//     if(temp == 0){
//         console.log("Array is Created !")
//         break;
//     }
//     arr[i] = temp
// }
// console.log(arr)

// let arr = [10, 21, 12, 30, 120, 239, 392, 10, 10, 1240]

// let filtered = arr.filter(
//     (element)=>{
//         // if((element%10 != 0)){
//         //     return element;
//         // }
//         return element%10 == 0;
//     }
// )
// console.log(filtered)


// let arr = [10, 21, 12, 30, 120, 239, 392, 10, 10, 1240];

// let filtered = arr.map((n) => {
//     // Check if the square root of n is an integer
//     return n*n;
// });

// console.log(filtered);

let arr = [1, 2, 3, 4, 5,6 , 7, 8, 9, 10]
let a = arr.reduce((init, element)=>{
    return init * element
}
)
console.log(a)