// let promise = new Promise(
//     (resolve, reject) =>{
//         setTimeout(() => {
//             document.body.innerHTML = "Promise is running...";
//             resolve(100)
//         }, 3000);
//     }
// )

// promise.then(
//     (value) =>{
//         setTimeout(() => {
//             document.body.innerHTML = "Successfully Executed with code" + value;
//         }, 3000);
//         return new Promise (
//             (resolve, reject) =>{
//                 setTimeout(() => {
//                     document.body.innerHTML = "New promise is loaded..."
//                     resolve("Promise 2")
//                 }, 5000);
//             }
//         )
//     }
// ).then(
//     (src) => {
//         // document.body.innerHTML = "The promise with source "+ src +" is executed ";
//         reject(401)
//     }
// ).catch((code) => {
//     alert("The promise is rejected with the code " + code);
// });

// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = (script) => {
//       alert("Script " + script + " has been loaded sucessfully");
//       resolve("Script " + script + " has been loaded sucessfully");
//     };
//     script.onerror = (src) => {
//       reject("The script " + src + " is rejected with the code 0");
//     };
//   });
// };
// let p1 = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
// );
// p1.then((value) => {
//   var divElement = document.createElement("div");
//   divElement.textContent = value;
//   document.body.appendChild(divElement);
//   return loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//   );
// })
//   .then((value) => {
//     var divElement = document.createElement("div");
//     divElement.textContent = value;
//     document.body.appendChild(divElement);
//     return loadScript("teesariwaliscript.hanuman");
//   })
//   .catch((value) => {
//     alert("Error in loading the script" + value);
//   });

    

