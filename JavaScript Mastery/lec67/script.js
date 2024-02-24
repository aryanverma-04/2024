// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const createTodo = async(todo) =>{
    let options = {
        method : "POST", 
        header : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async() =>{
    let todo ={
        title: "Aryan", 
        body: "hello world !",
        userId: 101144,
    }
    let todor = await createTodo(todo)
    console.log(todor)
}