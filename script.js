const number = document.getElementById("number");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");


let counterValue = 0;

incrementBtn.addEventListener("click", function () {
    counterValue = counterValue + 1;
    number.innerHTML = counterValue;
})

decrementBtn.addEventListener("click", () => {
    counterValue = counterValue - 1;
    number.innerHTML = counterValue;
});

resetBtn.addEventListener("click", () => {
    counterValue = 0;
    number.innerHTML = counterValue;
});
