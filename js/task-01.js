// // Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
//
// console.log('Category:', );
// // В результате, в консоли будут выведены такие сообщения.

// // Number of categories: 3

// // Category: Animals
// // Elements: 4

// // Category: Products
// // Elements: 3

// // Category: Technologies
// // Elements: 5
// const listEl = document.querySelector('#categories');
// console.log(listEl);
const itemParentsEl = document.querySelectorAll('.item');
// console.log(itemParentsEl);
console.log('Number of categories:', document.querySelectorAll('.item').length);

// const titleEl = document.querySelectorAll('h2');
// for (const itemParent of itemParentsEl) {
//     console.log(`Category: ${itemParent.firstElementChild.textContent}`);
//     const kidsItems = itemParent.querySelectorAll('li');
//     console.log(`Elements: ${kidsItems.length}`)
// };

itemParentsEl.forEach((itemParent, index, itemParentsEl) => {
  console.log(`Category: ${itemParent.firstElementChild.textContent}`);
  const kidsItems = itemParent.querySelectorAll('li');
  console.log(`Elements: ${kidsItems.length}`);
});


