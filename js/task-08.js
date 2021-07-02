const refs = {
    input: document.querySelector('#controls').children[0],
    btnRender: document.querySelector('#controls').children[1],
    btnDestroy: document.querySelector('#controls').children[2],
    boxes: document.querySelector('#boxes'),
};


refs.btnRender.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);


const rndColor = () => "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

// console.log(rndColor());


function createBoxes() {
   const boxes = []; 
   const amount = refs.input.value;
  for (let i = 0; i < amount; i += 1) {
    const box = `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${rndColor()}; margin-bottom: 5px;"></div>`;
    boxes.push(box);
  }
   return refs.boxes.insertAdjacentHTML('beforeend', boxes.join(''));
}

function destroyBoxes() {
refs.boxes.innerHTML = "";
refs.input.value = ""; 
};