import * as data from './get-photos.js';
// import {gallery} from './gallery.js';

export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const otherUsersPictures = data.getPhotos(data.randomIdArray, data.randomUrlArray, data.getRandomDescription, data.getRandomLikes, data.getComments);

const otherUserPictureFragment = document.createDocumentFragment();

otherUsersPictures.forEach((photo) => {
  const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
  otherUserPictureElement.querySelector('.picture__img').src = photo.url;
  otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
  otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
  otherUserPictureFragment.appendChild(otherUserPictureElement);
});

otherUsersPicturesList.appendChild(otherUserPictureFragment);


