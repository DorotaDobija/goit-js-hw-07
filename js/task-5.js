function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body")

const changeBgColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorText.innerHTML = getRandomHexColor();
}

changeColorBtn.addEventListener("click", changeBgColor);
