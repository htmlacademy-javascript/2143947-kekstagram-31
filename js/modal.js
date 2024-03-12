import {isEscapeKey} from './util.js';
import {otherUsersPicturesList} from './pictures.js';
import {bigPictureRender, commentsRender} from './big-picture.js';
import {imgUpload, imgUploadFormRender} from './form.js';

const body = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

// Открытие и закрытие модальных окон с изображениями пользователей

const bigPictureOpen = () => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

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
    commentsRender();
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

imgUploadCancel.addEventListener('click', imgUploadOverlayClose);

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
    imgUploadOverlayClose();
  }
}
