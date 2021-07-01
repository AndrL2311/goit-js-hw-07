const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
inputEl.value = 16;

function onInput(event) {
   textEl.style.fontSize = event.currentTarget.value + "px";
 }

inputEl.addEventListener("input", onInput);