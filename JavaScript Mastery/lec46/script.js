// setTimeout(() =>{
//     console.log("Delayed for 3 seconds")
// }, 3000);

// const check = () =>{
//     alert("Are you there??")
// }
// for(let i = 0; i < 5; i++){
//     setTimeout(check, 5000* (i + 1));
// }

// let a = document.getElementById("toggler");

// const writer = (a, i) => {
//     a.removeChild();
//     let newDivIter = document.createElement('div');
//     newDivIter.className = "newDiv";
//     newDivIter.innerText = `Warning no. ${i + 1} !`;
//     a.appendChild(newDivIter);
// }

// for (let i = 0; i < 5; i++) {
//     // Use a delay for each setInterval call
//     setInterval(writer, 3000 * (i + 1), a, i);
// }

// let a = document.getElementById("toggler");

// const writer = (a, i) => {
//     setTimeout(() => {
//         let newDivIter = document.createElement('div');
//         newDivIter.className = "newDiv";
//         newDivIter.innerText = `Warning no. ${i + 1} !`;
//         a.appendChild(newDivIter);
//     }, 3000 * i); // Each warning will be appended after i * 3 seconds
// }

// // Loop to append warnings sequentially
// for (let i = 0; i < 5; i++) {
//     writer(a, i);
// }

