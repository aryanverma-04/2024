let p1 = new Promise(
    (resolve, reject) =>{
        setTimeout(() => {
            resolve("Promise p1 is resolved...")
            // reject("Not able to resolve, Simply rejected")
        }, 2000);
    }
)

let p2 = new Promise(
    (resolve, reject) =>{
        setTimeout(() => {
            // resolve("Promise p2 is resolved...")
            reject("Not able to resolve, Simply rejected")
        }, 4000);
    }
)

let p3 = new Promise(
    (resolve, reject) =>{
        setTimeout(() => {
            resolve("Promise p3 is resolved...")
        }, 6000);
    }
)

// let promise = Promise.all([p1, p2, p3, p1])
// promise.then(
//     (value) =>{
//         console.log(value)
//     }
// )

// let promise = Promise.allSettled([p1, p2, p3, p1])
// promise.then(
//     (value) =>{
//         console.log(value)
//     }
// )

// let promise = Promise.race([p1, p2, p3, p1])
// promise.then(
//     (value) =>{
//         console.log(value)
//     }
// )

// let promise = Promise.any([p1, p2, p3, p1])
// promise.then(
//     (value) =>{
//         console.log(value)
//     }
// )

// let promise = Promise.resolve("Promise is resolved")
// promise.then(
//     (value) =>{
//         console.log(value)
//     }
// )

let promise = Promise.reject("Promise is rejected")
promise.then(
    (value) =>{
        console.log(value)
    }
)



