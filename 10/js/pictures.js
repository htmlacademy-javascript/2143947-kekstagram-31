import * as data from './get-photos.js';

export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherUsersPictures = data.getPhotos(data.randomIdArray, data.randomUrlArray, data.getRandomDescription, data.getRandomLikes, data.getComments);

const temp = otherUsersPictures.reduce((acc, value) => {
  acc.push([value.id.toString(), value]);
  return acc;
}, []);

export const gallery = new Map(temp);

const otherUserPictureFragment = document.createDocumentFragment();

otherUsersPictures.forEach((photo) => {
  const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
  otherUserPictureElement.setAttribute('dataId', photo.id);
  otherUserPictureElement.querySelector('.picture__img').src = photo.url;
  otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
  otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
  otherUserPictureFragment.appendChild(otherUserPictureElement);
});

otherUsersPicturesList.appendChild(otherUserPictureFragment);
