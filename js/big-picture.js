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

  const socialCommentsNodeList = socialComments.querySelectorAll('.social__comment');

  bigPicturePreview.querySelector('.comments-loader').classList.add('hidden');

  if (socialCommentsNodeList.length <= COMMENTS_SHOWN) {
    bigPicturePreview.querySelector('.social__comment-shown-count').textContent = socialCommentsNodeList.length;
  } else {
    bigPicturePreview.querySelector('.social__comment-shown-count').textContent = COMMENTS_SHOWN;
  }

  for (let i = 0; i < socialCommentsNodeList.length; i++) {
    let acc = COMMENTS_SHOWN;
    socialCommentsNodeList[i].classList.add('hidden');

    if (i < COMMENTS_SHOWN) {
      socialCommentsNodeList[i].classList.remove('hidden');
    }

    if (socialCommentsNodeList.length > COMMENTS_SHOWN) {
      bigPicturePreview.querySelector('.comments-loader').classList.remove('hidden');
    }

    bigPicturePreview.querySelector('.comments-loader').addEventListener('click', () => {
      acc += COMMENTS_SHOWN;

      if (i < acc) {
        socialCommentsNodeList[i].classList.remove('hidden');
      }

      if (acc >= socialCommentsNodeList.length) {
        acc = socialCommentsNodeList.length;
        // bigPicturePreview.querySelector('.comments-loader').classList.add('hidden');
      }

      bigPicturePreview.querySelector('.social__comment-shown-count').textContent = acc;
    });
  }
};

