import * as data from './data.js';
import {randomNumberArray, shuffleArray, getRandomInteger, getRandomArrayElement} from './util.js';

const getCommentsCount = () => getRandomInteger(data.COMMENTS_RANGE[0], data.COMMENTS_RANGE[1]);
const getRandomAvatar = () => getRandomInteger(data.USERS_AVATAR_INDEXES[0], data.USERS_AVATAR_INDEXES[1]);
const getRandomMessage = () => getRandomArrayElement(data.MESSAGES);
const getRandomName = () => getRandomArrayElement(data.NAMES);

export const getComments = (count, avatar, message, name) => {
  const comments = [];

  for (let i = 0; i < count(); i++) {
    comments.push({
      id: i + 1,
      avatar: `img/avatar-${avatar()}.svg`,
      message: message(),
      name: name(),
    },);
  }

  return comments;
};

export const randomIdArray = shuffleArray(randomNumberArray(data.PHOTOS_RANGE[0], data.PHOTOS_RANGE[1]));
export const randomUrlArray = shuffleArray(randomNumberArray(data.PHOTOS_RANGE[0], data.PHOTOS_RANGE[1]));
export const getRandomDescription = () => getRandomArrayElement(data.DESCRIPTIONS);
export const getRandomLikes = () => getRandomInteger(data.LIKES_RANGE[0], data.LIKES_RANGE[1]);

export const getPhotos = (id, url, description, likes, comments) => {
  const photos = [];

  for (let i = 0; i < data.PHOTOS_COUNT; i++) {
    photos.push ({
      id: id[i],
      url: `photos/${url[i]}.jpg`,
      description: description(),
      likes: likes(),
      comments:  comments(getCommentsCount, getRandomAvatar, getRandomMessage, getRandomName),
    },);
  }

  return photos;
};
