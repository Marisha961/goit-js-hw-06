// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
//     Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//     Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//     Обновляй интерфейс новым значением переменной counterValue.

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector(' button[data-action="decrement"]');
const incrementBtn = document.querySelector(' button[data-action="increment"]');
const valueEl = document.querySelector('#value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(value);

decrementBtn.addEventListener('click', function () {

  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {

  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
