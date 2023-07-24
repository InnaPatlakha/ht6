/* Створити скрипт який повинен виконувати наступне:
- питаємо у користувача, що він хоче зробити (add, sub, mult, div);
- питаємо у користувача перше число;
- запитуємо у користувача друге число;
- виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").*/

let proced = prompt('Оберіть операцію, яку Ви хочете здійснити: add, sub, mult, div');
let firstNumber = Number(prompt('Введіть перше число'));
let secondNumber = Number(prompt('Введіть друге число'));

if (proced === 'add') {
  proced = 'Ви ввели наступний вираз: ' + firstNumber + '+' + secondNumber + '=' + (firstNumber + secondNumber);
} else if (proced === 'sub') {
  proced = 'Ви ввели наступний вираз: ' + firstNumber + '-' + secondNumber + '=' + (firstNumber - secondNumber);
} else if (proced === 'mult') {
  proced = 'Ви ввели наступний вираз: ' + firstNumber + '*' + secondNumber + '=' + (firstNumber * secondNumber);
} else if (proced === 'div') {
  proced = 'Ви ввели наступний вираз: ' + firstNumber + '/' + secondNumber + '=' + (firstNumber / secondNumber);
}

alert(proced);