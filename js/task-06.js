const inputEl = document.querySelector("#validation-input");
const dataLengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === dataLengthEl) {
    console.log("ok");
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }

  if (
    event.currentTarget.value.length !== dataLengthEl &&
    event.currentTarget.value.length !== 0
  ) {
    console.log("no");
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }

  if (event.currentTarget.value.length === 0) {
    console.log("non");
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
});
