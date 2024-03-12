const imgUploadForm = document.querySelector('.img-upload__form');
export const imgUpload = imgUploadForm.querySelector('.img-upload__input');
const imgUploadEffects = imgUploadForm.querySelector('.img-upload__effects');
const effectsNodeList = imgUploadEffects.querySelectorAll('.effects__item');

export const imgUploadFormRender = () => {
  imgUploadForm.querySelector('.img-upload__preview img').src = ''; // Обнуляет значение src шаблонного изображения, чтобы не было "промаргивания"

  const loadedImg = imgUpload.files[0];
  const loadedImgUrl = URL.createObjectURL(loadedImg); // Забирает URL с загруженной картинки
  imgUploadForm.querySelector('.img-upload__preview img').src = loadedImgUrl; // Вносит значение URL картинки в src шаблона

  for (let i = 0; i < effectsNodeList.length; i++) {
    effectsNodeList[i].querySelector('.effects__preview').style.backgroundImage = `url(${loadedImgUrl})`;
  }
};


