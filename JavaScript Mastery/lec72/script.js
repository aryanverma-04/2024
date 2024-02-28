let a = [
    "Initializing Instagram hack...",
    "Connecting to Instagram servers...",
    "Extracting user profile...",
    "Bypassing security protocols...",
    "Gathering user activity data...",
    "Decrypting passwords...",
    "Attempting login with stolen credentials...",
    "Accessing direct messages...",
    "Exploring user's followers...",
    "Sending fake messages...",
    "Deleting evidence...",
    "Initiating mass following...",
    "Hiding traces of intrusion...",
    "Changing profile information...",
    "Accessing private content...",
    "Downloading user data...",
    "Hacking successful. Access granted."
]
const sb = document.getElementById("submit-button")
sb.addEventListener("click",()=>{
    fakeHack();
} )

const fakeHack = async() =>{
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        await showHack(element);
        
    }
}
let text = document.getElementById("text")
const showHack = async(messages) =>{
    await sleep(2)
    text.innerHTML = text.innerHTML + messages + "<br>"
}

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}
