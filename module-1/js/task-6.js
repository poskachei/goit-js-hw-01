'use strict';

let total = 0;
let input;

while (true) {
  let input = +prompt('Введите пожалуйста число', '');

  if (!input) break;

  total += input;
}

alert('Общая сумма чисел равна ' + total);
