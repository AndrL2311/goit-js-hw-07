const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);
// -------- Так делать нельзя !!!------------
// for (const ingredient of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('ingredients__item');
//   itemEl.textContent = ingredient;
  
// ingredientsEl.append(itemEl);
// };
//--------- Через map ----------------------------------
// const elementsItem = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('ingredients__item');
//   itemEl.textContent = ingredient;
//   return itemEl;
// });
// console.log(elementsItem);
// ingredientsEl.append(...elementsItem);
//---------- Через функцию ------------------------------
const makeElementsItem = options => {
  return options.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('ingredients__item');
  itemEl.textContent = ingredient;
  return itemEl;
});
  
};
const elementsItem = makeElementsItem(ingredients);
ingredientsEl.append(...elementsItem);
