let getElemID = document.getElementById("card1")
getElemID.style.color = "red"

let getElemDoc = document.querySelectorAll(".card")
getElemDoc.forEach(function(element){
    element.style.color = "orange";
});

// getElemTag.style.backgroundColor = 'blue';
// let getElemTag = document.getElementsByTagName("p")[0]
let getElemTag = document.getElementsByTagName("p");
for (let i = 0; i < getElemTag.length; i++) {
    getElemTag[i].style.backgroundColor = "blue";
}

let getElemClass = document.getElementsByClassName("card")
for (let i = 0; i < getElemClass.length; i++) {
    getElemClass[i].style.backgroundColor = "black";
}

