const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const createBoxes = (amount) => {
  amount = inputEl.value;

  if (amount > 0 && amount <= 100) {
     for (let i = amount; i <= amount && i > 0; i--) { 
   
    const box = `<div style = "width: ${20 + (i * 10)}px; height: ${20 + (i * 10)}px; background-color: ${getRandomHexColor()}; margin: 10px"></div>`;

    divEl.insertAdjacentHTML("afterbegin", box);
    };
  }
  inputClear();
}

const destroyBoxes = () => {
  divEl.innerHTML = "";
}

const inputClear = () => {
  inputEl.value = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);