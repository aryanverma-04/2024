try{
    iNeedSomeone();
}catch(err){
    console.log(err)
}
console.error("aagye bhai error")
try{
    let age = prompt("Enter your age: ")
    age = Number.parseInt(age)
    if(age > 150){
        // throw new SyntaxError("Incorrect syntax, the age doesn't look like a real age")
        throw new Error("Incorrect syntax, the age doesn't look like a real age")
    }else{
        alert("Your age is : "+ age)
    }
}catch(custom){
    console.log("custome\n" + custom)
    console.log("custome.name\n" + custom.name)
    console.log("custome.message\n" + custom.message)
    console.log("custome.stack\n" + custom.stack)

}