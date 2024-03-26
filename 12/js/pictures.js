import {getData} from './api.js';

export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherUserPictureFragment = document.createDocumentFragment();

getData.forEach((photo) => {
  const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
  otherUserPictureElement.setAttribute('dataId', photo.id);
  otherUserPictureElement.querySelector('.picture__img').src = photo.url;
  otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
  otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
  otherUserPictureFragment.appendChild(otherUserPictureElement);
});

otherUsersPicturesList.appendChild(otherUserPictureFragment);

const temp = getData.reduce((acc, value) => {
  acc.push([value.id.toString(), value]);
  return acc;
}, []);

export const gallery = new Map(temp);
