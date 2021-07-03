const refs = {
    input: document.querySelector('#controls').children[0],
    btnRender: document.querySelector('#controls').children[1],
    btnDestroy: document.querySelector('#controls').children[2],
    boxes: document.querySelector('#boxes'),
};

const rndColor = () => "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

const createBoxes = (amount) => {
   const boxes = []; 
  // console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    const box = `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${rndColor()}; margin-bottom: 5px;"></div>`;
    boxes.push(box);
  }
   return refs.boxes.insertAdjacentHTML('beforeend', boxes.join(''));
}

const destroyBoxes = () => {
refs.boxes.innerHTML = "";
refs.input.value = ""; 
};


refs.btnRender.addEventListener("click", event => createBoxes(refs.input.value));
refs.btnDestroy.addEventListener("click", destroyBoxes);

