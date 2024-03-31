import {getData} from './api.js';
import {shuffleArray, debounce} from './util.js';

// Первичная отрисовка изображений

export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFiltersContainer = document.querySelector('.img-filters');

const otherUserPictureFragment = document.createDocumentFragment();

const renderPictures = (photosArray) => {
  photosArray.forEach((photo) => {
    const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
    otherUserPictureElement.setAttribute('dataId', photo.id);
    otherUserPictureElement.querySelector('.picture__img').src = photo.url;
    otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
    otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
    otherUserPictureFragment.appendChild(otherUserPictureElement);
  });

  otherUsersPicturesList.appendChild(otherUserPictureFragment);
};

let temp;

if (getData !== undefined) {
  renderPictures(getData);

  imgFiltersContainer.classList.remove('img-filters--inactive');

  temp = getData.reduce((acc, value) => {
    acc.push([value.id.toString(), value]);
    return acc;
  }, []);
}

export const gallery = new Map(temp);

// Переключение кнопок фильтрации изображений и сортировка

const imgFiltersForm = imgFiltersContainer.querySelector('.img-filters__form');
const imgFiltersButtons = imgFiltersContainer.querySelectorAll('.img-filters__button');
const RANDOM_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;

imgFiltersForm.addEventListener('click', (evt) => {
  for (const button of imgFiltersButtons) {
    button.classList.remove('img-filters__button--active');
    evt.target.closest('.img-filters__button').classList.add('img-filters__button--active');
  }

  const cleanPicturesList = () => {
    const otherUsersPictures = otherUsersPicturesList.querySelectorAll('.picture');

    for (const userPicture of otherUsersPictures) {
      otherUsersPicturesList.removeChild(userPicture);
    }
  };

  const renderPicturesList = (pictures) => {
    // Сортировка по-умолчанию

    if (imgFiltersForm.querySelector('#filter-default').classList.contains('img-filters__button--active')) {
      cleanPicturesList();

      renderPictures(pictures);
    }

    // Сортировка 10 случайеых фото

    if (imgFiltersForm.querySelector('#filter-random').classList.contains('img-filters__button--active')) {
      cleanPicturesList();

      const shuffledDataCopy = shuffleArray(pictures.slice()).slice(0, RANDOM_PHOTOS_COUNT);

      renderPictures(shuffledDataCopy);
    }

    // Сортировка по количеству комментариям

    if (imgFiltersForm.querySelector('#filter-discussed').classList.contains('img-filters__button--active')) {
      cleanPicturesList();

      const sortedDataCopy = pictures.slice().sort((a, b) => b.comments.length - a.comments.length);

      renderPictures(sortedDataCopy);
    }
  };

  const debounceFunc = debounce(() => renderPicturesList(getData), RERENDER_DELAY);
  debounceFunc();
});


