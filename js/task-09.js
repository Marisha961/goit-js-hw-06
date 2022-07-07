// Напиши скрипт, который изменяет цвета фона элемента < body >
//  через инлайн стиль при клике на button.change - color 
//  и выводит значение цвета в span.color.

// < div class="widget" >
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color
// </button >
// </div >

//   Для генерации случайного цвета используй функцию 
// getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorBox = document.querySelector('.color');
const btnChange = document.querySelector('.change-color');

btnChange.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor;
  console.log(randomColor);
}
