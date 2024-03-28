import {getData} from './api.js';

export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFiltersContainer = document.querySelector('.img-filters');

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

imgFiltersContainer.classList.remove('img-filters--inactive');

const temp = getData.reduce((acc, value) => {
  acc.push([value.id.toString(), value]);
  return acc;
}, []);

export const gallery = new Map(temp);

// Переключение кнопок фильтрации изображений и сортировка

const otherUsersPictures = otherUsersPicturesList.querySelectorAll('.picture');
const imgFiltersForm = imgFiltersContainer.querySelector('.img-filters__form');
const imgFiltersButtons = imgFiltersContainer.querySelectorAll('.img-filters__button');
const RANDOM_PHOTOS_COUNT = 10;

imgFiltersForm.addEventListener('click', (evt) => {
  for (const button of imgFiltersButtons) {
    button.classList.remove('img-filters__button--active');
    evt.target.closest('.img-filters__button').classList.add('img-filters__button--active');
  }

  if (imgFiltersForm.querySelector('#filter-default').classList.contains('img-filters__button--active')) {
    // otherUsersPicturesList.innerHTML = null;

    for (const userPicture of otherUsersPictures) {
      otherUsersPicturesList.removeChild(userPicture);
    }

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
  }

  if (imgFiltersForm.querySelector('#filter-random').classList.contains('img-filters__button--active')) {
    // otherUsersPicturesList.innerHTML = null;

    for (const userPicture of otherUsersPictures) {
      otherUsersPicturesList.removeChild(userPicture);
    }

    getData
      .slice()
      .slice(0, RANDOM_PHOTOS_COUNT)
      .forEach((photo) => {
        const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
        otherUserPictureElement.setAttribute('dataId', photo.id);
        otherUserPictureElement.querySelector('.picture__img').src = photo.url;
        otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
        otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
        otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
        otherUserPictureFragment.appendChild(otherUserPictureElement);
      });

    otherUsersPicturesList.appendChild(otherUserPictureFragment);
  }

  // if (imgFiltersForm.querySelector('#filter-discussed').classList.contains('img-filters__button--active')) {

  // }
});


