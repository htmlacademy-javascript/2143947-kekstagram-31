// Проверка длины строки

const validateLength = (string, maxLength) => string.length <= maxLength;

// eslint-disable-next-line
console.log(`Ожидаемый результат 'true':`, validateLength('проверяемая строка', 30));

// Проверка является ли строка палиндромом

const checkPalindrome = (string) => {
  let normalizedString = string.replaceAll(' ', '');
  normalizedString = normalizedString.toUpperCase();

  let controlString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    controlString += normalizedString[i];
  }

  return controlString === normalizedString;
};

// eslint-disable-next-line
console.log(`Ожидаемый результат 'true':`, checkPalindrome('Лёша на полке клопа нашёл'));

// Извлечение цифр из строки

const extractNumbers = (string) => {
  string = string.toString();

  const normalizedString = string.replaceAll(' ', '');
  let number = '';

  for (let i = 0; i < normalizedString.length; i++) {
    if (!isNaN(normalizedString[i])) {
      number += parseInt(normalizedString[i], 10);
    }
  }

  return parseInt(number, 10);
};

// eslint-disable-next-line
console.log(`Ожидаемый результат 2023:`, extractNumbers('2023 год'));
