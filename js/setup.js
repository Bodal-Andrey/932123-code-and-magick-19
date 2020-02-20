'use strict';

// Показывает окно настроек пользователя
(function () {
  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var form = setup.querySelector('.setup-wizard-form');

  document.querySelector('.setup-similar').classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var onGetSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');

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
