// const loadscript = (src) =>{
//     return new Promise((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () =>{
//              console.log("Script has been loaded successfully")
//              alert("The script with source " + src + " is loaded");
//              resolve(src + "Done sucessfully.")
//             }
//         script.onerror = () =>{
//             reject(src + "not able to find")
//             console.log("faced error in loading script")
//         }
        
//     })
// }

// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value) =>{
//     console.log(value)
// }).catch((error)=>{
//     console.error(error)
// })

// const main2 = async () =>{
//     console.log(new Date().getSeconds())
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getSeconds())
// }
// main2()

let p = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject("Promise is rejected !!")
        }, 4000);
    })
}

let m = async ()=>{
    try{
        let c = await p();
        console.log(c)
    }catch{
        console.log("The error has been resolved")
    }
} 
m();