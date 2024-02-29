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

// Планирование времени встречи

const checkMeetingTime = (startTime, endTime, meetingTime, meetingDuration) => {
  const translateTimeToMinutes = (time) => {
    const [hour, minute] = time.split(':');
    return parseInt(hour, 10) * 60 + parseInt(minute, 10);
  };

  if (translateTimeToMinutes(startTime) > translateTimeToMinutes(meetingTime) || translateTimeToMinutes(endTime) <= translateTimeToMinutes(meetingTime)) {
    return false;
  }

  if (translateTimeToMinutes(endTime) - translateTimeToMinutes(meetingTime) < meetingDuration) {
    return false;
  }

  return true;
};

// eslint-disable-next-line
console.log(`Ожидаемый результат true`, checkMeetingTime('08:00', '17:30', '14:00', 90));
// eslint-disable-next-line
console.log(`Ожидаемый результат true`, checkMeetingTime('8:0', '10:0', '8:0', 120));
// eslint-disable-next-line
console.log(`Ожидаемый результат false`, checkMeetingTime('08:00', '14:30', '14:00', 90));
// eslint-disable-next-line
console.log(`Ожидаемый результат false`, checkMeetingTime('14:00', '17:30', '08:0', 90));
// eslint-disable-next-line
console.log(`Ожидаемый результат false`, checkMeetingTime('8:00', '17:30', '08:00', 900));
