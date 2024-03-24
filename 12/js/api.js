import {renderOtherUsersPictures} from './pictures.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json())
  .then((photos) => {
    renderOtherUsersPictures(photos);
  });

export const sendData = (onSuccess, onSuccessMessage, onFailure, body) => {
  fetch(
    `${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessMessage();
      } else {
        onFailure();
      }
    })
    .catch(() => {
      onFailure();
    });
};
