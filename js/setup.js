'use strict';

// Показывает окно настроек пользователя
var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECONDNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandomInt(array.length)];
}

function getRandomName() {
  return getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SECONDNAMES);
}

function getRandomWizard() {
  return {
    name: getRandomName(),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
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
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

showSetup();

// Открытие/закрытие окна настройки персонажа
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// userNameInput.addEventListener('invalid', function (evt) {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });

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

// Изменение цвета мантии, глаз и файербола
var changeColor = document.querySelector('.setup-wizard');
var changeCoatColor = changeColor.querySelector('.wizard-coat');
var changeEyesColor = changeColor.querySelector('.wizard-eyes');
var changeFireballColor = document.querySelector('.setup-fireball-wrap');

var getRandomCoat = function () {
  changeCoatColor.style.fill = getRandomElement(WIZARD_COATS);
  document.querySelector('input[name="coat-color"]').value = changeCoatColor.style.fill;
};

var getRandomEyes = function () {
  changeEyesColor.style.fill = getRandomElement(WIZARD_EYES);
  document.querySelector('input[name="eyes-color"]').value = changeEyesColor.style.fill;
};

var getRandomFireballs = function () {
  changeFireballColor.style.background = getRandomElement(FIREBALL_COLORS);
  changeFireballColor.querySelector('input').value = changeFireballColor.style.background;
};

changeCoatColor.addEventListener('click', function () {
  getRandomCoat();
});

changeEyesColor.addEventListener('click', function () {
  getRandomEyes();
});

changeFireballColor.addEventListener('click', function () {
  getRandomFireballs();
});
