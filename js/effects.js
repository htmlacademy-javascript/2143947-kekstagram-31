import {imgUploadForm, uploadedImgPreview} from './form.js';

// Масштабирование загруженного изображения

const uploadedImg = uploadedImgPreview.querySelector('img');
const scaleControl = imgUploadForm.querySelector('.scale__control--value');
const scaleBiggerButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleSmallerButton = imgUploadForm.querySelector('.scale__control--smaller');
let scaleCounter = parseInt(scaleControl.value, 10);

const changeScale = () => {
  const scale = scaleCounter / 100;
  scaleControl.setAttribute('value', `${scaleCounter}%`);
  uploadedImgPreview.style.transform = `scale(${scale})`;
  uploadedImg.style.transform = `scale(${scale})`;
};

scaleBiggerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (scaleCounter < 100) {
    scaleCounter += 25;
    changeScale();
  }
});

scaleSmallerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (scaleCounter > 25) {
    scaleCounter -= 25;
    changeScale();
  }
});

export const scaleControlReset = () => {
  scaleControl.setAttribute('value', '100%');
};

// Эффекты для изображения

const sliderContainer = imgUploadForm.querySelector('.img-upload__effect-level');
const sliderLevelInput = imgUploadForm.querySelector('.effect-level__value');
const sliderLevelCount = imgUploadForm.querySelector('.effect-level__value');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectsRadios = imgUploadForm.querySelectorAll('.effects__radio');
export const originalEffect = imgUploadForm.querySelector('#effect-none');
const chromeEffect = imgUploadForm.querySelector('#effect-chrome');
const sepiaEffect = imgUploadForm.querySelector('#effect-sepia');
const marvinEffect = imgUploadForm.querySelector('#effect-marvin');
const phobosEffect = imgUploadForm.querySelector('#effect-phobos');
const heatEffect = imgUploadForm.querySelector('#effect-heat');

noUiSlider.create(sliderElement, {
  start: 1,
  connect: true,
  range: {
    'min': 0,
    'max': 1,
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  step: 0.1,
});

sliderElement.noUiSlider.on('update', () => {
  sliderLevelInput.value = sliderElement.noUiSlider.get();
  sliderLevelCount.textContent = sliderLevelInput.value;
});

if (originalEffect.checked) {
  sliderContainer.classList.add('hidden');
}

for (const effectRadio of effectsRadios) {
  effectRadio.addEventListener('change',() => {
    if (originalEffect.checked) {
      sliderContainer.classList.add('hidden');

      uploadedImg.style.filter = '';
    }

    if (chromeEffect.checked) {
      sliderContainer.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        start: 1,
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        uploadedImg.style.filter = `grayscale(${sliderLevelInput.value})`;
      });
    }

    if (sepiaEffect.checked) {
      sliderContainer.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        start: 1,
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        uploadedImg.style.filter = `sepia(${sliderLevelInput.value})`;
      });
    }

    if (marvinEffect.checked) {
      sliderContainer.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        start: 100,
        range: {
          'min': 0,
          'max': 100,
        },
        step: 1,
      });

      sliderElement.noUiSlider.on('update', () => {
        uploadedImg.style.filter = `invert(${sliderLevelInput.value}%)`;
      });
    }

    if (phobosEffect.checked) {
      sliderContainer.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        start: 3,
        range: {
          'min': 0,
          'max': 3,
        },
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        uploadedImg.style.filter = `blur(${sliderLevelInput.value}px)`;
      });
    }

    if (heatEffect.checked) {
      sliderContainer.classList.remove('hidden');

      sliderElement.noUiSlider.updateOptions({
        start: 3,
        range: {
          'min': 1,
          'max': 3,
        },
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        uploadedImg.style.filter = `brightness(${sliderLevelInput.value})`;
      });
    }
  });
}
