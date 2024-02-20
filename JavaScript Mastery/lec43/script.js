
// let a = document.getElementsByTagName('div')[0]
// // console.log(a)
// a.style.backgroundColor = "red"
// a.innerText = a.innerText + "hello"
// a.innerHTML = a.innerHTML + "<b><br> Hi I'm inserted using innerHTML</b>"

// let newElem = document.createElement('div')
// newElem.innerHTML = "<b> Hello there, I'm Newly created DIV</b>"
// newElem.style.color = "green"

// a.append(newElem)
// a.prepend(newElem)
// a.before(newElem)
// a.after(newElem)
// a.replaceWith(newElem)

// let node = document.getElementById("first-container")
// console.log(node)

// node.insertAdjacentHTML("beforebegin", "<br> <b>Hello, BeforeBegin</b>")
// node.insertAdjacentHTML("beforeend", "<br> <b>Hello, beforeend</b>")
// node.insertAdjacentHTML("afterbegin", "<br> <b>Hello, afterbegin</b>")
// node.insertAdjacentHTML("afterend", "<br> <b>Hello, afterend</b>")

// node.insertAdjacentText("beforebegin", "Adjacent Text")
// node.remove()

let a = document.getElementById('first-container')
console.log(a.classList)
a.classList.add("effects")
console.log(a.classList)

// a.classList.remove("effects")
a.classList.toggle("effects")

// let a = document.getElementById('first-container');
// console.log(a.classList);
// let effects = "effects"; // Define effects as a string containing the class name
// a.classList.add(effects);
// console.log(a.classList);
