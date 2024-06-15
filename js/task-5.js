function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body")

const changeBgColor = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorText.innerHTML = color;
}

changeColorBtn.addEventListener("click", changeBgColor);
