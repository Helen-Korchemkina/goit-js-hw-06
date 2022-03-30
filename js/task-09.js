const btnChangeColorEl = document.querySelector(".change-color");
const bgColorSpanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColorEl.addEventListener("click", () => {
  let bodyColorEl = document.querySelector("body");

  bodyColorEl.style.backgroundColor = getRandomHexColor();
  bgColorSpanEl.innerHTML = getRandomHexColor();
});
