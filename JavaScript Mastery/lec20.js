// let num = [12, 14, 16, 18, 20]
// console.log(num)

// let arr = num.map((value,index)=>{
//     console.log(index, value)
//     return value + index
// })
// console.log(arr)

let marks = [21, 34, 42, 44, 48, 94, 87]
console.log(marks)

// let passed = marks.filter(
//     (marks, index) => {
//         let i = index
//         let m = marks
//         console.log(`student ${i} has the marks ${m} `)
//         return marks > 33
//     }
// )
// console.log(passed)

let sum = marks.reduce(
    (init, current_value) =>{
        console.log(`The value is ${init}, the current value is ${current_value}`)
        return init + current_value
    }
)
console.log(sum)