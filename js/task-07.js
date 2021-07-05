const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
// inputEl.value = 16;
const fontSize = Number(window.getComputedStyle(textEl).getPropertyValue('font-size').match(/\d+/)[0]);
inputEl.value = fontSize;
// console.log(fontSize);
function onInput(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
 }

inputEl.addEventListener("input", onInput);