const amountCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", amountCategoriesEl.length);

const categoriesNameEl = document.querySelectorAll(".item h2");
const categoriesListEl = document.querySelectorAll(".item ul");

for (let i = 0; i < categoriesNameEl.length; i += 1) {
  console.log("Category:", categoriesNameEl[i].textContent);
  console.log("Elements:", categoriesListEl[i].children.length);
}
