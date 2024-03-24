export const otherUsersPicturesList = document.querySelector('.pictures');
const otherUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// export const renderOtherUsersPictures = (otherUsersPictures) =>{

export const renderOtherUsersPictures = (otherUsersPictures) =>{
  const otherUserPictureFragment = document.createDocumentFragment();

  otherUsersPictures.forEach((photo) => {
    const otherUserPictureElement = otherUserPictureTemplate.cloneNode(true);
    otherUserPictureElement.setAttribute('dataId', photo.id);
    otherUserPictureElement.querySelector('.picture__img').src = photo.url;
    otherUserPictureElement.querySelector('.picture__img').alt = photo.description;
    otherUserPictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    otherUserPictureElement.querySelector('.picture__likes').textContent = photo.likes;
    otherUserPictureFragment.appendChild(otherUserPictureElement);
  });

  otherUsersPicturesList.appendChild(otherUserPictureFragment);

  // const temp = otherUsersPictures.reduce((acc, value) => {
  //   acc.push([value.id.toString(), value]);
  //   return acc;
  // }, []);

  // const gallery = new Map(temp);
};

/*
  1. Непонятно как сформировать и забрать Map для рендера полноразмерных изображений.
  2. При загрузке изображений получаю код 304.
*/
