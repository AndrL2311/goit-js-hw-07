const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

let counterValue = Number(valueEl.textContent);
// console.dir(counterEl.children[1]);
// console.log(typeof counterEl.children[1].textContent); // string
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

counterEl.children[0].addEventListener("click", decrement);
counterEl.children[2].addEventListener("click", increment);
