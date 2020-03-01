'use strict';

const total = 100;
const ordered = 220;
const suma = ordered <= total;

if (suma) {
  console.log(`"Заказ оформлен, с вами свяжется менеджер"`);
} else {
  console.log(`"На складе недостаточно твоаров!"`);
}
