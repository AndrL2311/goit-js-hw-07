const counterEl = document.querySelector('#counter');
 let valueEl = Number(counterEl.children[1].textContent);
// targetBtn.addEventListener('click', onTargetBtnClick);
// console.log(targetBtn);
  
// function onTargetBtnClick(event) {


//     console.log('Клик по кнопке');
//     console.log(event.target.dataset.action);
//      if (event.target.dataset.action === 'decrement') { // если есть атрибут...
//       console.log('+1');
//     }
// }
let value = 0;
console.log(counterEl.children);
console.log(valueEl);
// valueEl = 'qwqewe';
// counterEl.children[1].textContent = ;
// counterEl.chidren[0].addEventListener('click', onTargetBtnDecrementClick);
counterEl.children[0].addEventListener('click', (event) => {
    value -= 1;
console.log(value);
counterEl.children[1].textContent = value;

});
counterEl.children[2].addEventListener('click', (event) => console.log(+1));
// counterEl.children[1].append(valueEl);