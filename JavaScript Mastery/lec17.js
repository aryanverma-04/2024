// let god = ["Hanuman", "Ram", "Krishna", "Shiva", "  Maa "]
// console.log(god.length)
// console.log(god)

// // let str = god.toString()
// // god[4] = god[4].trim()
// // console.log(god)

// // let god = ["Hanuman", "Ram", "Krishna", "Shiva", "  Maa "];
// // console.log(god.length); // Outputs the length of the array
// // console.log(god); // Outputs the array itself

// // let str = god.toString(); // Convert the array to a string
// // console.log(str); // Outputs the string representation of the array

// // god[4] = god[4].trim(); // Trim the fifth element of the array
// // console.log(god); // Outputs the updated array

// // let nw = god.join("~")
// // console.log(nw)

// let r = god.pop()
// console.log(r)
// console.log(god)

// god.push("Maa")
// console.log(god)

// god.shift()
// console.log(god)

// god.unshift("narsimha")
// console.log(god)

// delete god[god.length - 1]
// console.log(god)

// god.splice(4, 5)
// console.log(god)

// let rcb = ["virat", "maxwell", "starc","styen"]
// console.log(rcb)
// let csk = ["dhobi", "jaddu", "ash", "raina"]
// console.log(csk)
// csk = csk.concat(rcb)
// console.log(csk)

// let num = [20, 212, 10, 42, 93, 34, 21332]
// num.sort()
// console.log(num)

// Sort with Compare Function

const compare = (a, b) =>{
    return a - b
}
let num = [20, 212, 10, 42, 93, 34, 21332]
num.sort(compare)
console.log(num)

num.splice(2, 0, 1024, 2048)
console.log(num)

const n1 = num.slice(0, 5)
console.log(n1)