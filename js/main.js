import './pictures.js';
import './api.js';
import './modal.js';
import './effects.js';

import {imgUploadOverlayClose} from './form-modal.js';
import {setUserPhotoSubmit} from './form.js';

setUserPhotoSubmit(imgUploadOverlayClose);


/*
Ошибки найденные автотестом на версии для Chrome:

Раздел EDIT:
1. Не перезаписывает value в scale__control--value (переменная scaleControl)??? Реально перезаписывает!!!
Timed out retrying after 4000ms: expected '<input.scale__control.scale__control--value>' to have value '75%', but the value was '100%'
2. Сброс значения при переключении фильтра. Не показывается слайдер???
This element <div.noUi-handle.noUi-handle-lower> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
3. Наложение эффекта на изображение. То ли не накладывается фильтр, то ли спадает???
expected '<img>' to have CSS property 'filter' with the value 'grayscale(1)', but the value was 'none'
4. Ограничение: хэш-тег начинается с символа #. Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
5. Ограничение: хеш-тег не может состоять только из одной решётки: Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
6. Ограничение: хеш-тег не может содержать спецсимволы (#, @, $ и т. п.): Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
7. Ограничение: хеш-тег не может содержать символы пунктуации (тире, дефис, запятая и т. п.): Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
8. Ограничение: хеш-тег не может содержать эмодзи: Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
9. Ограничение: максимальная длина одного хэш-тега 20 символов, включая решётку: Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
10. Ограничение: один и тот же хэш-тег не может быть использован дважды (регистр неважен). Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
11. Ограничение: нельзя указать больше пяти хэш-тегов. Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
12. Ввод валидных хэш-тегов не вызывает ошибки: Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
13. При вводе валидных хэш-тегов ошибка сбрасывается: Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
14. Комментарий не обязателен: Не показывается форма???
This element <textarea.text__description> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
15. Ограничение: длина комментария не может составлять больше 140 символов: Не показывается форма???
This element <textarea.text__description> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
16. Ввод валидного комментария не вызывает ошибки: Не показывается форма???
This element <textarea.text__description> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
17. При вводе валидного комментария ошибка сбрасывается: Не показывается форма???
This element <textarea.text__description> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
18. Если фокус находится в поле ввода комментария, нажатие на Esc не закрывает форму: Не показывается форма???
This element <div.img-upload__overlay.hidden> is not visible because it has CSS property: display: none

При этом тест проходит по:
1. Появление и исчезновение слайдера
2. Хэш-теги необязательны
3. Если фокус находится в поле ввода хэш-тега, нажатие на Esc не закрывает форму

Ошибки появляются случайно при повторных тестах. Может быть больше или меньше. ???

Раздел FILTER:
Все тесты проходят.

Раздел POST:
1.Отправка данных формы. Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
2. На время отправки кнопка блокируется.
Failed to read a named property '$' from 'Window': Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
3. Неправильно заполненную форму невозможно отправить. Error. Данные отправлены! ???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
4. Сообщения об ошибках различаются. Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
5. При успешной отправке форма очищается и закрывается. Не показывается форма???
This element <input.text__hashtags> is not visible because its parent <div.img-upload__overlay.hidden> has CSS property: display: none
6. Eсли отправка данных прошла успешно, показывается соответствующее сообщение. Failed to read a named property '$' from 'Window':
Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
7. Cообщение об успехе исчезает после нажатия на кнопку. Failed to read a named property '$' from 'Window':
Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
8. Cообщение об ошибке исчезает после нажатия на кнопку. Failed to read a named property '$' from 'Window':
Blocked a frame with origin "http://localhost:3000" from accessing a cross-origin frame.
9. Cообщение об ошибке исчезает по нажатию на клавишу Esc, но форма остаётся. Не показывается форма???
10. При отмене форма закрывается и очищается. Не показывается форма???

Ошибки появляются случайно при повторных тестах. Может быть больше или меньше. ???

Раздел UPLOAD:
Иногда все тесты UPLOAD проходят без ошибок, иногда падают либо все, либо частично! ???

Раздел VIEW:
Все тесты проходят.
*/
