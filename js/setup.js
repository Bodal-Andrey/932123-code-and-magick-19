'use strict';

// Показывает окно настроек пользователя
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var setup = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  document.querySelector('.setup-similar').classList.remove('hidden');

  function getRandomName() {
    return window.random.getRandomElement(WIZARD_NAMES) + ' ' + window.random.getRandomElement(WIZARD_SECONDNAMES);
  }

  function getRandomWizard() {
    return {
      name: getRandomName(),
      coatColor: window.random.getRandomElement(WIZARD_COATS),
      eyesColor: window.random.getRandomElement(WIZARD_EYES)
    };
  }

  function createWizards() {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] = getRandomWizard();
    }
    return wizards;
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  function showSetup() {
    var similarWizards = createWizards();

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }

    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  showSetup();
})();
