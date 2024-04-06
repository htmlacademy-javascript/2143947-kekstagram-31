import {showDataError} from './alerts.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export let getData;

try {
  getData = fetch(`${BASE_URL}${Route.GET_DATA}`).then((response) => {
    if (response.status !== 200) {
      showDataError();
    }

    return response.json();
  });
} catch {
  showDataError();
}


export const sendData = (onSuccess, onSuccessMessage, onFailure, unblock, body) => {
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
    })
    .finally(() => {
      unblock();
    });
};
