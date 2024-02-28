function myName(){
    var name = "aryan"
    function mySurname(){
        name = "verma"
    }
    return mySurname
}

let a = myName()
console.log(a)

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     name = "condom"
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()

