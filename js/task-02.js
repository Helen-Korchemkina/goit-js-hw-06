const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = (options) => {
  return options.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    listItemEl.classList.add("item");

    return listItemEl;
  });
};

const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);

console.log(ingredientsListEl);
