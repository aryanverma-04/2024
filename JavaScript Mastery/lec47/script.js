let count = 0;
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

plusButton.onclick = () => {
    count++;
    console.log(count); // Log the updated count after incrementing
    document.getElementsByClassName("container2")[0].textContent = "The value of count is: " + count;
};

minusButton.onclick = () => {
    count--;
    console.log(count); // Log the updated count after decrementing
    document.getElementsByClassName("container2")[0].textContent = "The value of count is: " + count;
};
// const writeValue = (count) =>{
//     document.getElementsByClassName("container2")[0].innerHTML += count;
// }
// writeValue(count)
// const writeValue = (count) =>{
//     document.getElementsByClassName("container2")[0].innerHTML += count;
// }
// writeValue(count)

// function updateCount() {
//     document.getElementsByClassName("container2")[0].textContent = "The value of count is: " + count;
// }

// // Call updateCount once to initialize the display
// updateCount();