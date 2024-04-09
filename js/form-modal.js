import {isEscapeKey} from './util.js';
import {imgUploadForm, imgUpload, uploadedImgPreview, destroyPristine} from './form.js';
import {imgUploadFormRender, loadedImgUrl} from './upload-image.js';
import {scaleControlReset, originalEffect} from './effects.js';

const body = document.querySelector('body');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const imgUploadInput = document.querySelector('.text__hashtags');
const imgUploadTextarea = document.querySelector('.text__description');

export const imgUploadOverlayOpen = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

export const imgUploadOverlayClose = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

imgUpload.addEventListener('change', () => {
  imgUploadOverlayOpen();
  imgUploadFormRender();
});

imgUploadCancel.addEventListener('click', () => {
  imgUploadOverlayClose();
  if (loadedImgUrl !== imgUpload.value) {
    cleanForm();
  }
});

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !(imgUploadInput.matches(':focus') || imgUploadTextarea.matches(':focus')) && !document.querySelector('.error')) {
    evt.preventDefault();
    evt.stopPropagation();
    imgUploadOverlayClose();
    if (loadedImgUrl !== imgUpload.value) {
      cleanForm();
    }
  }
}

function cleanForm() {
  uploadedImgPreview.querySelector('img').src = '';
  imgUpload.value = '';
  imgUploadForm.querySelector('.text__hashtags').value = '';
  imgUploadForm.querySelector('.text__description').value = '';
  scaleControlReset();
  originalEffect.checked = true;
  destroyPristine();
}

