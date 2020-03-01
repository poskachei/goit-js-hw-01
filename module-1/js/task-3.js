'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt(`Введите пароль:`);

if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else {
  ADMIN_PASSWORD;
  alert('Доступ запрещен, неверный пароль!');
}
