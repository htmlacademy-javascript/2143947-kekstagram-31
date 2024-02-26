const PHOTOS_COUNT = 25;
const PHOTOS_RANGE = [1, PHOTOS_COUNT];
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

const randomNumberArray = (min, max) => {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

// eslint-disable-next-line
console.log(shuffleArray(randomNumberArray(PHOTOS_RANGE[0], PHOTOS_RANGE[1])));

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

const getPhotos = () => {
  const photos = [];
  const randomId = shuffleArray(randomNumberArray(PHOTOS_RANGE[0], PHOTOS_RANGE[1]));
  const randomUrl = shuffleArray(randomNumberArray(PHOTOS_RANGE[0], PHOTOS_RANGE[1]));

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push ({
      id: randomId[i],
      url: `photos/${randomUrl[i]}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(LIKES_RANGE[0], LIKES_RANGE[1]),
      comments:  getComments(),
    },);
  }

  return photos;
};

// eslint-disable-next-line
console.log(getPhotos());
