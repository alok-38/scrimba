let isVegan = true;

if (isVegan) {
  console.log("This recepe is suitable for vegans");
} else {
  console.log("This recipe contains animal products");
}

const recipes = ["vegan curry", "chicken soup", "vegan salad"];
const veganRecipes = recipes.filter((recipe) =>
  isVegan ? recipe.includes("vegan") : true
);
console.log(veganRecipes);
