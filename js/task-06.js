const inputEl = document.querySelector("#validation-input");

function onInputBlur(event) {
    // console.log('Инпут потерял фокус');
    // console.log(event.currentTarget.value.length);
    // console.log(Number(inputEl.dataset.length));
    
    if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
        // console.log('Верно');
        if (inputEl.classList.contains('invalid')) inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        // console.log('Неверно');
        if (inputEl.classList.contains('valid')) inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
        };
}

inputEl.addEventListener('blur', onInputBlur);