const categoriesEl = document.querySelector('#categories').querySelectorAll('.item');

console.log(`В списке ` + categoriesEl.length + ` категории.`);

// Через цикл for () of

// for (const category of categoriesEl) {
    
//     // console.log(`Категория: ` + category.children[0].textContent);
//     // console.log(`Количество элементов: ` + category.children[1].children.length);
    
//     console.log(`Категория: ` + category.firstElementChild.textContent);
//     console.log(`Количество элементов: ` + category.lastElementChild.children.length);

// };

// Через array.forEach()

categoriesEl.forEach(category => {
    console.log(`Категория: ` + category.firstElementChild.textContent);
    console.log(`Количество элементов: ` + category.lastElementChild.children.length);
});
