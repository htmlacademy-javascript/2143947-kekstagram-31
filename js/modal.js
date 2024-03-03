import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
export const bigPictureElement = document.querySelector('.big-picture');
export const pictures = document.querySelectorAll('.picture');
export const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
}; // Данная функция была приведена в качестве примера в разборе "Кода и магии", но линтер на нее ругается. Почему?

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

pictures.forEach((picture) => {
  picture.addEventListener('click', bigPictureOpen);
});

bigPictureCloseElement.addEventListener('click', bigPictureClose);

