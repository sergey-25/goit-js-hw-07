const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsList = ingredients => {
  const ingredientsList = document.getElementById('ingredients');
  const items = ingredients.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    return item;
  });
  console.log(typeof items);
  ingredientsList.append(...items);
};

createIngredientsList(ingredients);