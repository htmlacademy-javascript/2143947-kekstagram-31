import {gallery} from './pictures.js';
import {COMMENTS_SHOWN} from './data.js';

const socialComments = document.querySelector('.social__comments');
const bigPicturePreview = document.querySelector('.big-picture__preview');

export const bigPictureRender = (evt) => {
  const id = evt.target.closest('.picture').getAttribute('dataId');
  const photo = gallery.get(id);

  bigPicturePreview.querySelector('.big-picture__img img').src = photo.url;
  bigPicturePreview.querySelector('.likes-count').textContent = photo.likes;
  bigPicturePreview.querySelector('.social__comment-total-count').textContent = photo.comments.length;
  bigPicturePreview.querySelector('.social__caption').textContent = photo.description;

  const commentFragment = document.createDocumentFragment();

  photo.comments.forEach((comment) => {
    const commentElement = socialComments.querySelector('.social__comment').cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentFragment.appendChild(commentElement);
  });

  socialComments.innerHTML = null;
  socialComments.appendChild(commentFragment);
};

export const commentsRender = () => {
  const socialCommentsNodeList = socialComments.querySelectorAll('.social__comment');

  socialCommentsNodeList.forEach((comment) => {
    comment.classList.add('hidden');
  }); // Скрывает все комментарии

  let acc = COMMENTS_SHOWN; // Добавляет аккумулятор счетчика комментариев

  if (acc >= socialCommentsNodeList.length) {
    for (let i = 0; i < socialCommentsNodeList.length; i++) {
      socialCommentsNodeList[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < acc; i++) {
      socialCommentsNodeList[i].classList.remove('hidden');
    }
  } // Показывает первую часть комментариев

  bigPicturePreview.querySelector('.comments-loader').addEventListener('click', () => {
    acc += COMMENTS_SHOWN;

    if (acc >= socialCommentsNodeList.length) {
      for (let i = 0; i < socialCommentsNodeList.length; i++) {
        socialCommentsNodeList[i].classList.remove('hidden');
      }
      acc = socialCommentsNodeList.length;
      bigPicturePreview.querySelector('.social__comment-shown-count').textContent = socialCommentsNodeList.length;
      bigPicturePreview.querySelector('.comments-loader').classList.add('hidden');
    } else {
      for (let i = 0; i < acc; i++) {
        socialCommentsNodeList[i].classList.remove('hidden');
      }
      bigPicturePreview.querySelector('.social__comment-shown-count').textContent = acc;
    } // Показывает следующую часть комментариев, обновляет счетчик комментариев и, при необходимости, убирает кнопку загрузки новых.
  });
};
