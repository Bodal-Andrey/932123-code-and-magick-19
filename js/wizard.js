'use strict';

// Модуль настройки мага
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var changeColor = document.querySelector('.setup-wizard');
  var changeCoatColor = changeColor.querySelector('.wizard-coat');
  var changeEyesColor = changeColor.querySelector('.wizard-eyes');
  var changeFireballColor = document.querySelector('.setup-fireball-wrap');

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  var getRandomCoat = function () {
    var newColor = window.random.getRandomElement(WIZARD_COATS);
    changeCoatColor.style.fill = newColor;
    wizard.onCoatChange(newColor);
  };

  var getRandomEyes = function () {
    var newColor = window.random.getRandomElement(WIZARD_EYES);
    changeEyesColor.style.fill = newColor;
    wizard.onEyesChange(newColor);
  };

  var getRandomFireballs = function () {
    var randomFireballColor = window.random.getRandomElement(FIREBALL_COLORS);

    changeFireballColor.style.background = randomFireballColor;
    changeFireballColor.querySelector('input').value = randomFireballColor;
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

  window.wizard = wizard;
})();
