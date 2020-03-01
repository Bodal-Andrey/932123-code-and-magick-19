'use strict';

// Показывает окно настроек пользователя
(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var onGetSuccess = function (data) {
    window.changecolor.wizards = data;
    window.changecolor.updateWizards();
  };

  var onGetError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 10; margin: 0 auto; text-align: center; background-color: black;';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '50px';
    node.style.color = 'red';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(onGetSuccess, onGetError);
})();
