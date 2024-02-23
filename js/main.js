const PHOTOS_COUNT = 25;
const PHOTO_ID_RANGE = [1, 25];
const PHOTO_NUMBERS_RANGE = [1, 25];
const LIKES_RANGE = [15, 200];
const USERS_AVATAR_INDEXES = [1, 6];
const COMMENTS_RANGE = [1, 20];

const DESCRIPTIONS = [
  'Закат',
  'Лесной пейзаж',
  'На берегу моря',
  'В горах',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Мария',
  'Сергей',
  'Александр',
  'Николай',
  'Валентина',
  'Андрей',
  'Михаил',
];

// Пробовал пойти от массива со случайными числами, но реально числа повторяются.

// const randomNumberArray = (min, max) => {
//   const array = [];
//   for (let i = min; i <= max; i++) {
//     array.push(i);
//   }
//   return array;
// };

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getUniqueValue = (min, max) => {
  const previousValue = [];

  const value = () => {
    let currentValue = getRandomInteger(min, max);

    if (previousValue.length >= (max - min + 1)) {
      return null;
    }

    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValue.push(currentValue);

    return currentValue;
  };

  return value();

  // значения в итоговом массиве все равно повторяются.
};

const getComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInteger(COMMENTS_RANGE[0], COMMENTS_RANGE[1]); i++) {
    comments.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(USERS_AVATAR_INDEXES[0], USERS_AVATAR_INDEXES[1])}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    },);
  }

  return comments;
};

const getPhoto = () => ({
  id: getUniqueValue(PHOTO_ID_RANGE[0], PHOTO_ID_RANGE[1]), // эти значения повторяются.
  url: `photos/${getUniqueValue(PHOTO_NUMBERS_RANGE[0], PHOTO_NUMBERS_RANGE[1])}.jpg`, // эти значения повторяются.
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_RANGE[0], LIKES_RANGE[1]),
  comments:  getComments(),
});

const similarPhotos = Array.from({length: PHOTOS_COUNT}, getPhoto);

// eslint-disable-next-line
console.log(similarPhotos);
