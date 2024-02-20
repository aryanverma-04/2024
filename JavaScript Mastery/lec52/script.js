const loadScript = (src, callback) =>{
    var script = document.createElement("script");
    script.src = src;
    console.log("Loaded script with src: " + src);

    script.onload = function(){
        alert("Loaded Script with src" + src)
        callback(null, src);
        
    }
    script.onerror = function(){
        alert("Finding error in resolving" + src)
        callback(new Error("!! got some kind of error !!"), src)
        
    }
    document.body.appendChild(script)
}

const updateStatus = (error, src) =>{
    if(error){
        console.log("Error code: "+src);
        let a = document.body.firstElementChild;
        a.innerHTML = src;
        return;
    }
    let a = document.body.firstElementChild;
    a.innerHTML = src + "\nExecuted Sucessfully";
    
}
console.log("Started")
loadScript("https://cdn.jsdelivr.net/mmdnpm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", updateStatus)
// setTimeout(() => {
//     console.log("TimeOut Function Completed")
// }, 3000);
console.log("Ended")
