import * as data from './get-photos.js';

const pictures = data.getPhotos(data.randomIdArray, data.randomUrlArray, data.getRandomDescription, data.getRandomLikes, data.getComments);
export const gallery = new Map(Object.entries(pictures));

// eslint-disable-next-line
console.log(gallery);
