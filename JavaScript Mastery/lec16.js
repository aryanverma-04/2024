const prompt = require('prompt-sync')();

let n = prompt("Enter the no. of Elements: ")
// console.log(n)
let arr = []
for(let i = 0; i < n; i++){
    let k = Number.parseInt(prompt("Enter the element no. " +( i+1)+" ->"))
    arr[i] = k
}
console.log(arr.length)
console.log(arr)
arr[0] = 12
console.log(arr)
console.log(typeof arr)