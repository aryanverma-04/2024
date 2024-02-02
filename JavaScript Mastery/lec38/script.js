// let navColor = document.getElementsByClassName("custom")[0]
// navColor.style.backgroundColor = "blue"

let navColor = document.getElementById("firstElem")
navColor.style.backgroundColor = "cyan"

// let table = document.getElementsByClassName("table-container")
// if(table.getElementsByTagName("tbody").length > 0){
//     console.log("Table has a tbody element")
// }

var table1 = document.getElementById("my-table");

if (table1.getElementsByTagName("tbody").length > 0) {
    console.log("Table has a tbody element.");
} else {
    console.log("Table does not have a tbody element.");
}
let fc = document.getElementById("ch1")
fc.style.color = "green"

let lc = document.getElementById("ch3")
lc.style.color = "green"

// let listItems = document.getElementsByTagName("li");
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "blue";
// }
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.backgroundColor = "red";
})     