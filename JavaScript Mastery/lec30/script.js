// STONE PAPER SCISSORS GAME

let str = "SPC";
let sw = true;
alert("Welcome to Stone, Paper, Scissors game");
alert("Enter your choice");
do {
    let ch = Math.floor((Math.random() * 3));
    let ip1 = str[ch];
    let ip2 = prompt("Enter your choice");
    if (ip2.toLowerCase() === "scissors") {
        ip2 = "C";
    }
    alert(`You choose ${ip2} and opponent choose ${ip1}`);
    if (ip1 === ip2[0]) {
        alert("It's a tie");
    } else if ((ip1 === "S" && ip2[0] === "P") || (ip1 === "P" && ip2[0] === "C") || (ip1 === "C" && ip2[0] === "S")) {
        alert("You won 😀");
    } else {
        alert("You lose 🙂");
    }
    if (!confirm("Do you want to play it again")) {
        sw = false;
    }
} while (!sw);

