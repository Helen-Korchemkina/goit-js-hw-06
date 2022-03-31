function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesParent = document.querySelector("#boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
let initialSizeOfBox = 30;

const createBtnListener = () => {
  const amountOfBoxes = createBoxes(inputEl.value);
  boxesParent.append(...amountOfBoxes);
}

const createBoxes = (amount) => {
  let sizeOfBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    sizeOfBox = initialSizeOfBox + i * 10;
    boxEl.style.width = sizeOfBox + "px";
    boxEl.style.height = sizeOfBox + "px";
    boxElements.push(boxEl);
  }
  initialSizeOfBox = sizeOfBox + 10;
  return boxElements;
};

const destroyBoxes = () => {
  boxesParent.remove();
};

btnCreateEl.addEventListener("click", createBtnListener);
btnDestroyEl.addEventListener("click", destroyBoxes);
