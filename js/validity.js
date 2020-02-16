'use strict';

// Валидация формы
(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;
  var setup = document.querySelector('.setup');
  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;

    if (target.validity.valueMissing) {
      target.setCustomValidity('Обязательное поле');
    } else if (target.value.length < MIN_NAME_LENGTH) {
      target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
    } else if (target.value.length > MAX_NAME_LENGTH) {
      target.setCustomValidity('Имя не должно превышать ' + MAX_NAME_LENGTH + '-ти символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
