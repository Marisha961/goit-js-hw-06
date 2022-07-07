// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector('#ingredients');


const makeItemsIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const createItem = document.createElement("li");
    createItem.textContent = ingredient;
    createItem.classList.add('item');

    return createItem;
  });
};

const items = makeItemsIngredients(ingredients);
listEl.append(...items);
