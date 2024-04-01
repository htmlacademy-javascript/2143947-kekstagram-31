import {sendData} from './api.js';
import {showUploadError, showUploadSuccess} from './alerts.js';

export const imgUploadForm = document.querySelector('.img-upload__form');
export const imgUpload = imgUploadForm.querySelector('.img-upload__input');
export const uploadedImgPreview = imgUploadForm.querySelector('.img-upload__preview');

// Валидация формы

const submitButton = imgUploadForm.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const pristine = new Pristine (imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorTextTag: 'div',
});

let hashtagErrorMessage = '';

function validateHashtags(value) {
  if (!value.length) {
    return true;
  }

  const hashtagsArray = value.split(' ');
  const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;
  const tempArray = Array.from(hashtagsArray);

  if (hashtagsArray.length > 5) {
    hashtagErrorMessage = 'превышено количество хэштегов';
    return false;
  }

  for (let i = 0; i < tempArray.length; i++) {
    tempArray[i] = tempArray[i].toUpperCase();
    if (tempArray.indexOf(tempArray[i]) !== tempArray.lastIndexOf(tempArray[i])) {
      hashtagErrorMessage = 'хэштеги повторяются';
      return false;
    }
  }

  for (const hashtag of hashtagsArray) {
    if (!hashtagRegex.test(hashtag)) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }
  }

  return true;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__hashtags'),
  validateHashtags,
  () => hashtagErrorMessage,
);

function validateComment(value) {
  return value.length < 140;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComment,
  'длина комментария больше 140 символов',
);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export const setUserPhotoSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => onSuccess(),
        () => showUploadSuccess(),
        () => showUploadError(),
        () => unblockSubmitButton(),
        new FormData(evt.target),
      );
    }
  });
};

pristine.reset();
pristine.destroy();
