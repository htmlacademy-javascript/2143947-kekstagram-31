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
    effectsNodeList[i].querySelector('.effects__preview').style.backgroundImage = `url(${loadedImgUrl})`; // Вносит значение URL картинки в backgroundImage фильтров
  }
};

const pristine = new Pristine (imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
  errorTextTag: 'div',
});

/*
- если фокус находится в поле ввода хэштега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения. ?
*/

let hashtagErrorMessage = '';

function validateHashtags(value) {
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

/*
- если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения. ???
*/

function validateComment(value) {
  return value.length < 140;
}

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateComment,
  'длина комментария больше 140 символов',
);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
