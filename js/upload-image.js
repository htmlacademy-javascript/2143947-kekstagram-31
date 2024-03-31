import {imgUploadForm, imgUpload, uploadedImgPreview} from './form.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const imgUploadEffects = imgUploadForm.querySelector('.img-upload__effects');
const effectsNodeList = imgUploadEffects.querySelectorAll('.effects__item');
export let loadedImgUrl;
imgUpload.value = '';

export const imgUploadFormRender = () => {
  const loadedImg = imgUpload.files[0];
  const fileName = loadedImg.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  uploadedImgPreview.querySelector('img').src = '';

  if (matches) {
    loadedImgUrl = URL.createObjectURL(loadedImg);

    uploadedImgPreview.querySelector('img').src = URL.createObjectURL(loadedImg);

    for (let i = 0; i < effectsNodeList.length; i++) {
      effectsNodeList[i].querySelector('.effects__preview').style.backgroundImage = `url(${loadedImgUrl})`;
    }
  }
};
