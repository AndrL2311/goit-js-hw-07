const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("span#name-output");

function onInput() {
    if (inputEl.value !== "") outputEl.textContent = inputEl.value
    else outputEl.textContent = "незнакомец";
}

inputEl.addEventListener("input", onInput);
