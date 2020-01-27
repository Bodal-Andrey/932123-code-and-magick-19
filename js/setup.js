'use strict';

// Показывает окно настроек пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var randomName = Math.floor(Math.random() * WIZARD_NAMES.length);
var WIZARD_SECONDNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var randomSecondname = Math.floor(Math.random() * WIZARD_SECONDNAMES.length);
var WIZARD_COATS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var randomCoat = Math.floor(Math.random() * WIZARD_COATS.length);
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green '];
var randomEye = Math.floor(Math.random() * WIZARD_EYES.length);

for (var j = 0; j < 4; j++) {
  var wizards = [];
  wizards[j].push({
    name: WIZARD_NAMES[randomName] + WIZARD_SECONDNAMES[randomSecondname],
    coatColor: WIZARD_COATS[randomCoat],
    eyesColor: WIZARD_EYES[randomEye]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
