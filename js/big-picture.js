import {bigPictureElement} from './modal.js';
import {otherUsersPicturesList, otherUsersPictures} from './pictures.js';
import {COMMENTS_SHOWN} from './data.js';

// const socialComments = document.querySelector('.social__comments');

otherUsersPicturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    otherUsersPictures.forEach((photo) => {
      bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = photo.url;
      bigPictureElement.querySelector('.likes-count').textContent = photo.likes;
      bigPictureElement.querySelector('.social__comment-total-count').textContent = photo.comments.length;
      bigPictureElement.querySelector('.social__caption').textContent = photo.description;
    });

    bigPictureElement.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOWN;
    bigPictureElement.querySelector('.social__comment-count').classList.add('hidden'); // временно убираем по заданию.
    bigPictureElement.querySelector('.comments-loader').classList.add('hidden'); // временно убираем по заданию.
  }
});

/*
Вопросы к созвону:
1. Как убрать ошибку при объявлении функции onDocumentKeydown? Просто ее отдельно не выносить? (выполнено)
2. Почему данные применяются только к последнему изображению?
3. Как выводить комментарии, чтобы они отображались все?
4. Как ввести ограничение на вывод заданного количества комментариев с последующей подгрузкой того-же количества?
5. Чем здесь может помочь Map?
*/

// pictures.forEach((picture) => {
//   picture.addEventListener('click', () => {
//     bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('.picture__img').src;
//     bigPictureElement.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
//     bigPictureElement.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOWN;
//     bigPictureElement.querySelector('.social__comment-total-count').textContent = picture.querySelector('.picture__comments').textContent;
//     bigPictureElement.querySelector('.social__caption').textContent = picture.querySelector('.picture__img').alt;

//     bigPictureElement.querySelector('.social__comment-count').classList.add('hidden'); // временно убираем по заданию.
//     bigPictureElement.querySelector('.comments-loader').classList.add('hidden'); // временно убираем по заданию.

//     otherUserPictures.forEach((photo) => {
//       for (let i = 0; i < socialComments.length; i++) {
//         socialComments.querySelector('.social__picture').src = photo.comments[i].avatar;
//         socialComments.querySelector('.social__text').textContent = photo.comments[i].message;
//       }
//     });
//   });
// });

// otherUserPicture.forEach((photo) => {
//   photo.addEventListener('click', () => {
//     bigPictureElement.querySelector('.big-picture__img').querySelector('img').src = photo.url;
//     bigPictureElement.querySelector('.likes-count').textContent = photo.likes;
//     bigPictureElement.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOWN;
//     bigPictureElement.querySelector('.social__comment-total-count').textContent = photo.comments.length;
//     bigPictureElement.querySelector('.social__caption').textContent = photo.description;

//     bigPictureElement.querySelector('.social__comment-count').classList.add('hidden'); // временно убираем по заданию.
//     bigPictureElement.querySelector('.comments-loader').classList.add('hidden'); // временно убираем по заданию.

//     otherUserPicture.forEach((photo) => {
//       bigPictureElement.querySelector('.social__comments').querySelector('.social__picture').src = photo.comments.avatar;
//       bigPictureElement.querySelector('.social__text').textContent = photo.comments.message;
//     });

//   });
// });
