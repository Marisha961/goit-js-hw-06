// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
//  кнопку Создать, после чего рендерится коллекция.При нажатии 
//  на кнопку Очистить, коллекция элементов очищается.

// < div id = "controls" >
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div >

//   <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр -
//   число.Функция создает столько < div >, сколько указано в amount и 
//   добавляет их в div#boxes.

//     Размеры самого первого < div > - 30px на 30px.
//     Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     Все элементы должены иметь случайный цвет фона в формате HEX.
//     Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     }`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');


let count = 0;
const createBoxes = (amount) => {
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.classList = 'div-create';
    const value = (30 + count * 10);
    box.style.width = `${value}px`;
    box.style.height = `${value}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
    count += 1;
  }
  console.log(newBoxes);
  boxesEl.append(...newBoxes);
}
const create = () => {
  // получить значение из поля.
  const amount = inputEl.value;
  createBoxes(amount);
  // вызвыать createBoxes и передать туда количество.
};
btnCreate.addEventListener('click', create);

const destroyBoxes = () => {

  count = 0;
  boxesEl.innerHTML = ' ';


}
btnDestroy.addEventListener('click', destroyBoxes);