'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const amount = prompt(`Какое количество товара Вы хотите купить:`);
let totalPrice = amount * 3000;

if (amount === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice <= credits) {
  alert(`Вы купили ${amount} дроида, на счету осталось ${credits -
    totalPrice} кредитов.
  `);
} else {
  alert('Недостаточно средств на счету!');
}
