import {isEscapeKey} from './util.js';

// Открытие и закрытие окна ошибки загрузки изображения

const uploadError = document.querySelector('#error').content.querySelector('.error');
const errorButton = uploadError.querySelector('.error__button');

export const showUploadError = () => {
  document.body.append(uploadError);
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownCloseError);
  errorButton.addEventListener('click', closeUploadError);
  uploadError.addEventListener('click', onWindowClickCloseError);
};

function closeUploadError () {
  document.body.removeChild(uploadError);
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydownCloseError);
  errorButton.removeEventListener('click', closeUploadError);
  uploadError.removeEventListener('click', onWindowClickCloseError);
}

function onDocumentKeydownCloseError(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadError();
  }
}

function onWindowClickCloseError(evt) {
  if (!evt.target.closest('.error__inner')) {
    closeUploadError();
  }
}

// Открытие и закрытие окна успешной загрузки изображения

const uploadSuccess = document.querySelector('#success').content.querySelector('.success');
const successButton = uploadSuccess.querySelector('.success__button');

export const showUploadSuccess = () => {
  document.body.append(uploadSuccess);
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydownCloseSuccess);
  successButton.addEventListener('click', closeUploadSuccess);
  uploadSuccess.addEventListener('click', onWindowClickCloseSuccess);
};

function closeUploadSuccess () {
  document.body.removeChild(uploadSuccess);
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydownCloseSuccess);
  successButton.removeEventListener('click', closeUploadSuccess);
  uploadSuccess.removeEventListener('click', onWindowClickCloseSuccess);
}

function onDocumentKeydownCloseSuccess(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadSuccess();
  }
}

function onWindowClickCloseSuccess(evt) {
  if (!evt.target.closest('.success__inner')) {
    closeUploadSuccess();
  }
}

// Открытие и закрытие окна ошибки получения изображний других пользователей

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const ALERT_SHOW_TIME = 5000;

export const showDataError = () => {
  document.body.append(dataError);
  document.body.classList.add('modal-open');

  setTimeout(() => {
    document.body.removeChild(dataError);
    document.body.classList.add('modal-open');
  }, ALERT_SHOW_TIME);
};

