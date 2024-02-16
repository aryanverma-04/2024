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

let node = document.getElementById("first-container")
console.log(node)

// node.insertAdjacentHTML("beforebegin", "<br> <b>Hello, BeforeBegin</b>")
// node.insertAdjacentHTML("beforeend", "<br> <b>Hello, beforeend</b>")
// node.insertAdjacentHTML("afterbegin", "<br> <b>Hello, afterbegin</b>")
// node.insertAdjacentHTML("afterend", "<br> <b>Hello, afterend</b>")

// node.insertAdjacentText("beforebegin", "Adjacent Text")
node.remove()