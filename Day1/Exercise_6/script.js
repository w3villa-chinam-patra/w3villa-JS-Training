const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const counter = document.querySelector(".counter");

let counterVal = 0;
counter.innerText = counterVal;

increaseButton.addEventListener("click", () => {
  counter.innerText = ++counterVal;
});

decreaseButton.addEventListener("click", () => {
  counter.innerText = --counterVal;
});

resetButton.addEventListener("click", () => {
  counter.innerText = 0;
  counterVal = 0;
});
