import {isEscapeKey} from './util.js';
import {otherUsersPicturesList} from './pictures.js';
import {bigPictureRender, removeComments} from './big-picture.js';
import {imgUpload, imgUploadFormRender, cleanForm} from './form.js';

const body = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadInput = document.querySelector('.text__hashtags');
const imgUploadTextarea = document.querySelector('.text__description');

// Открытие и закрытие модальных окон с изображениями пользователей

const bigPictureOpen = () => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
  removeComments();

  document.addEventListener('keydown', onDocumentKeydown);
};

const bigPictureClose = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

otherUsersPicturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    bigPictureOpen();
    bigPictureRender(evt);
  }
});

bigPictureCloseElement.addEventListener('click', bigPictureClose);

// Открытие и закрытие модального окна загрузки и редактирования пользовательского изображения

const imgUploadOverlayOpen = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const imgUploadOverlayClose = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

imgUpload.addEventListener('input', () => {
  imgUploadOverlayOpen();
  imgUploadFormRender();
});

imgUploadCancel.addEventListener('click', () => {
  imgUploadOverlayClose();
  cleanForm();
});

// Функция закрытия модальных окон по нажатию кнопки на клавиатуре

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !(imgUploadInput.matches(':focus') || imgUploadTextarea.matches(':focus'))) {
    evt.preventDefault();
    bigPictureClose();
    evt.stopPropagation();
    imgUploadOverlayClose();
  }
}
