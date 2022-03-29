let counterValue = 0;
const valueEl = document.querySelector("#value");

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');

decrementButtonEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerHTML = counterValue;
});
incrementButtonEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerHTML = counterValue;
});
