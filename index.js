'use strict';
// Напиши скрипт, который после нажатия кнопки Start,
//  раз в секунду меняет цвет фона body на случайное значение из массива
// используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона
//  должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй
//  функцию randomIntegerFromInterval.
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSetter = {
  isBtnStart: false,

  handlerStartBtn() {
    if (this.isBtnStart) { return };
    this.isBtnStart = true;
    this.intervalId = setInterval(() => {
      body.bgColor = colors[randomIntegerFromInterval(0, 5)]; 
    }, 1000);
  },
  
  handlerStopBtn() {
    clearInterval(this.intervalId); 
    this.isBtnStart = false; 
  },
};

const body = document.body;
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
startBtn.addEventListener('click', colorSetter.handlerStartBtn.bind(colorSetter));
stopBtn.addEventListener('click', colorSetter.handlerStopBtn.bind(colorSetter));





