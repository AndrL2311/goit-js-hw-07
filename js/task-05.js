const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("span#name-output");

// function onInput() {
//     if (inputEl.value !== "") outputEl.textContent = inputEl.value
//     else outputEl.textContent = "незнакомец";
// }

// inputEl.addEventListener("input", onInput);


function onInput(event) {
    // console.log(event);
    if (event.currentTarget.value !== "") outputEl.textContent = event.currentTarget.value
    else outputEl.textContent = "незнакомец";
}

inputEl.addEventListener("input", onInput);
