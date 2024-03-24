// import {gallery} from './pictures.js';

const bigPicturePreview = document.querySelector('.big-picture__preview');
const commentsLoader = document.querySelector('.social__comments-loader');
const COMMENTS_SHOWN = 5;
let commentsContainer = document.querySelector('.social__comments');
let shown = 0;
let photo = null;

removeComments();

export const bigPictureRender = (evt) => {
  shown = 0;
  const id = evt.target.closest('.picture').getAttribute('dataId');
  photo = gallery.get(id);
  commentsLoader.classList.remove('hidden');
  bigPicturePreview.querySelector('.big-picture__img img').src = photo.url;
  bigPicturePreview.querySelector('.likes-count').textContent = photo.likes;
  bigPicturePreview.querySelector('.social__comment-total-count').textContent = photo.comments.length;
  bigPicturePreview.querySelector('.social__caption').textContent = photo.description;

  loadComments(photo);
  commentsLoader.addEventListener('click', loadComments);
};

function loadComments() {
  const shownComments = bigPicturePreview.querySelector('.social__comment-shown-count');
  const container = document.createDocumentFragment();
  const commentsArrayLength = photo.comments.length;
  const threshold = shown + COMMENTS_SHOWN;
  const maxToLoad = commentsArrayLength > threshold ? threshold : commentsArrayLength;
  for(; shown < maxToLoad; shown++) {
    const {message, avatar, name} = photo.comments[shown];

    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    img.style.width = '35px';
    img.style.height = '35px';
    img.src = avatar;
    img.alt = name;
    img.classList.add('social__picture');
    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = message;
    li.append(img, p);
    container.append(li);

  }

  commentsContainer.append(container);
  shownComments.textContent = shown > photo.comments.length ? photo.comments.length : shown;

  if(shown >= photo.comments.length) {
    shown = 0;
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', loadComments);
  }
}

export function removeComments() {
  commentsContainer = document.querySelector('.social__comments');
  const commentsToRemove = commentsContainer.querySelectorAll('.social__comment');
  for(const comment of commentsToRemove) {
    commentsContainer.removeChild(comment);
  }
}
