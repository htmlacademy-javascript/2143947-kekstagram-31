import {PHOTOS_COUNT, PHOTOS_RANGE, LIKES_RANGE, USERS_AVATAR_INDEXES, COMMENTS_RANGE, DESCRIPTIONS, MESSAGES, NAMES} from './data.js';
import {randomNumberArray, shuffleArray, getRandomInteger, getRandomArrayElement} from './util.js';

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
  const randomIdArray = shuffleArray(randomNumberArray(PHOTOS_RANGE[0], PHOTOS_RANGE[1]));
  const randomUrlArray = shuffleArray(randomNumberArray(PHOTOS_RANGE[0], PHOTOS_RANGE[1]));

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push ({
      id: randomIdArray[i],
      url: `photos/${randomUrlArray[i]}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(LIKES_RANGE[0], LIKES_RANGE[1]),
      comments:  getComments(),
    },);
  }

  return photos;
};

export {getPhotos};
