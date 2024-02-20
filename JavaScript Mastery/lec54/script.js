
// function myDisplayer(some) {
//   document.body.innerHTML = some + "\n ,The promise is completed";
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 1;

//   // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     alert("Not Error")
//     myDisplayer(value);
//   },
//   function (error) {
//     alert("Error")
//     myDisplayer(error);
//   }
// );


// let promise = new Promise(function (resolve, reject) {
//     alert("Hello")
//     // resolve(101)
//     reject(20)
// })
// console.log('Hello World')
// setTimeout(() => {
//     console.log('Hello in 2 seconds')
// }, 2000);
// console.log(promise)


let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am resolved")
            // resolve(true)
            reject("not able to fetch the data")
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})

p1.then(
    function resolved(value) {
        alert("The promise 1 is successfully completed with value "+value)
    }
)
p1.catch(function unResoled(value) {
    alert("The promise 1 is not completed, the error is : " + value)
})

p2.then((value)=>{
    alert(value) 
},(error)=>{
    alert(error)
})  