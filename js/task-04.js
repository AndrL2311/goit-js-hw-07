const counterEl = document.querySelector("#counter");
let counterValue = Number(counterEl.children[1].textContent);

// console.log(typeof counterEl.children[1].textContent); // string
const decrement = () => {
  counterValue -= 1;
  counterEl.children[1].textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterEl.children[1].textContent = counterValue;
};

counterEl.children[0].addEventListener("click", decrement);
counterEl.children[2].addEventListener("click", increment);
