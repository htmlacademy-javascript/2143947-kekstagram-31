import * as big from './modal.js';
import {otherUserPicture} from './pictures.js';

big.pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    big.bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('.picture__img').src;
    big.bigPictureElement.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    big.bigPictureElement.querySelector('.social__comment-shown-count').textContent = 2;
    big.bigPictureElement.querySelector('.social__comment-total-count').textContent = picture.querySelector('.picture__comments').textContent;
    big.bigPictureElement.querySelector('.social__caption').textContent = picture.querySelector('.picture__img').alt;

    big.bigPictureElement.querySelector('.social__comment-count').classList.add('hidden'); // временно убираем по заданию.
    big.bigPictureElement.querySelector('.comments-loader').classList.add('hidden'); // временно убираем по заданию.

    otherUserPicture.forEach((photo) => {
      big.bigPictureElement.querySelector('.social__comments').querySelector('.social__picture').src = photo.comments.avatar;
      big.bigPictureElement.querySelector('.social__text').textContent = photo.comments.message;
    });

  });
});
