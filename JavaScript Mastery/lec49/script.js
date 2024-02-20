// let a = document.getElementById("alert")
// a.onclick = () =>{
//     alert("you have click the alert Button")
// }
// let num = 0;
// let x = document.getElementById("Prompt")
// x.onclick = (num) =>{
//     num = Number.parseInt(prompt("Enter a number: "))
//     alert(`The value of number is ${num}`);
// }
// let b = document.getElementById("confirm")
// // b.onclick = () =>{
// //     let a = confirm("Do you want to confirm this...")
// //     if(a){
// //         alert("confirmed");
// //     }
// // }

// const myfunc = (ek) =>{
//     let a = confirm("Do you want to confirm this...")
//     if(a){
//         alert("confirmed");
//     }
// }

// b.addEventListener("click", myfunc)


const jokes = [
    {
        "category": "Pun",
        "type": "single",
        "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.\n11 years old and he still doesn't know my name is Brian.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 200,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 3,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 201,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 274,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 44,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 165,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Never date a baker. They're too kneady.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 271,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 42,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 301,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 45,
        "safe": true,
        "lang": "en"
    }
];

const myfunc = () =>{
    // let x = Math.random() * 21;
    // let joke = jokes[x];

    let x = Math.floor(Math.random() * jokes.length);
    let joke = jokes[x].joke +"\n\n category: " +jokes[x].category;


    let a = document.getElementById("joke-container")
    a.innerText = joke 
}
let btn = document.getElementById("button")
btn.addEventListener("click", myfunc)

